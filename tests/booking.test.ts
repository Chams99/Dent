import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { bookingSchema } from '@/lib/booking'
import { bookingSubject, bookingText, singleLine } from '@/lib/booking-email'
import { GET, POST } from '@/app/api/booking/route'

const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  phone: '+1 (555) 010-0199',
  treatment: 'aligners',
  time: 'evening',
  message: 'A front tooth is slightly crooked.',
}

const ENV = { RESEND_API_KEY: 'test-key', BOOKING_TO_EMAIL: 'clinic@example.com', BOOKING_FROM_EMAIL: 'Dent <site@example.com>' }

function jsonRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request('http://localhost/api/booking/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

function formRequest(fields: Record<string, string>) {
  return new Request('http://localhost/api/booking/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(fields).toString(),
  })
}

describe('bookingSchema', () => {
  it('accepts a complete request and fills optional fields', () => {
    const result = bookingSchema.safeParse({ ...valid, phone: undefined, message: undefined })
    expect(result.success).toBe(true)
    expect(result.success && result.data).toMatchObject({ phone: '', message: '' })
  })

  it('reports each invalid field', () => {
    const result = bookingSchema.safeParse({ name: 'A', email: 'nope', phone: 'call me', treatment: 'surgery' })
    expect(result.success).toBe(false)
    const fields = result.success ? [] : result.error.issues.map((issue) => issue.path[0])
    expect(fields).toEqual(expect.arrayContaining(['name', 'email', 'phone', 'treatment', 'time']))
  })

  it('rejects fields over their length limits', () => {
    expect(bookingSchema.safeParse({ ...valid, message: 'x'.repeat(1501) }).success).toBe(false)
    expect(bookingSchema.safeParse({ ...valid, name: 'x'.repeat(101) }).success).toBe(false)
  })

  it('rejects non-string values', () => {
    expect(bookingSchema.safeParse({ ...valid, name: 42 }).success).toBe(false)
  })
})

describe('booking email', () => {
  const input = bookingSchema.parse(valid)

  it('keeps the subject on one line', () => {
    expect(singleLine('a\r\nBcc: x@example.com\tb')).toBe('a Bcc: x@example.com b')
    const subject = bookingSubject({ ...input, name: 'Ada\nBcc: someone@example.com' })
    expect(subject).not.toMatch(/[\r\n]/)
    expect(subject).toContain('Clear aligners')
  })

  it('lists every detail in the body', () => {
    const text = bookingText(input)
    expect(text).toContain('Name: Ada Lovelace')
    expect(text).toContain('Treatment: Clear aligners')
    expect(text).toContain('Preferred time: Evening (16:00 to 19:00)')
    expect(text).toContain('A front tooth is slightly crooked.')
    expect(bookingText({ ...input, phone: '', message: '' })).toContain('Phone: not given')
  })
})

describe('POST /api/booking/', () => {
  const fetchMock = vi.fn()

  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock)
    for (const [key, value] of Object.entries(ENV)) vi.stubEnv(key, value)
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    fetchMock.mockReset()
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('sends a valid request through Resend', async () => {
    fetchMock.mockResolvedValue(new Response('{"id":"1"}', { status: 200 }))
    const response = await POST(jsonRequest(valid))
    expect(response.status).toBe(202)
    expect(await response.json()).toEqual({ ok: true })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('https://api.resend.com/emails')
    expect(init.headers.Authorization).toBe('Bearer test-key')
    const payload = JSON.parse(init.body)
    expect(payload).toMatchObject({ from: ENV.BOOKING_FROM_EMAIL, to: [ENV.BOOKING_TO_EMAIL], reply_to: 'ada@example.com' })
    expect(payload.text).toContain('Ada Lovelace')
  })

  it('rejects other content types', async () => {
    const response = await POST(
      new Request('http://localhost/api/booking/', { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: 'hi' }),
    )
    expect(response.status).toBe(415)
  })

  it('rejects oversized bodies', async () => {
    const response = await POST(jsonRequest({ ...valid, message: 'x'.repeat(12_000) }))
    expect(response.status).toBe(413)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('rejects malformed JSON and non-object bodies', async () => {
    expect((await POST(jsonRequest('{"name":'))).status).toBe(400)
    const array = await POST(jsonRequest([valid]))
    expect(array.status).toBe(400)
    expect(await array.json()).toEqual({ error: 'invalid' })
  })

  it('names the invalid fields', async () => {
    const response = await POST(jsonRequest({ ...valid, email: 'not-an-email', time: 'midnight' }))
    expect(response.status).toBe(400)
    expect(await response.json()).toEqual({ error: 'invalid', fields: ['email', 'time'] })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('accepts and drops requests that fill the hidden field', async () => {
    const response = await POST(jsonRequest({ ...valid, website: 'https://spam.example' }))
    expect(response.status).toBe(202)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('explains when email is not configured', async () => {
    vi.stubEnv('RESEND_API_KEY', '')
    const response = await POST(jsonRequest(valid))
    expect(response.status).toBe(503)
    expect(await response.json()).toEqual({ error: 'not_configured' })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('hides provider errors', async () => {
    fetchMock.mockResolvedValue(new Response('{"message":"invalid from address"}', { status: 422 }))
    const response = await POST(jsonRequest(valid))
    expect(response.status).toBe(502)
    expect(await response.json()).toEqual({ error: 'delivery_failed' })
  })

  it('reports network failures and timeouts', async () => {
    fetchMock.mockRejectedValueOnce(new TypeError('fetch failed'))
    expect((await POST(jsonRequest(valid))).status).toBe(502)

    fetchMock.mockRejectedValueOnce(new DOMException('The operation was aborted.', 'AbortError'))
    const timedOut = await POST(jsonRequest(valid))
    expect(timedOut.status).toBe(504)
    expect(await timedOut.json()).toEqual({ error: 'timeout' })
  })

  it('redirects a plain form post to the confirmation page', async () => {
    fetchMock.mockResolvedValue(new Response('{}', { status: 200 }))
    const response = await POST(formRequest({ ...valid, website: '' }))
    expect(response.status).toBe(303)
    expect(response.headers.get('location')).toBe('/contact/sent/')
  })

  it('answers a failed plain form post with a page, without echoing input', async () => {
    const response = await POST(formRequest({ ...valid, email: '<script>alert(1)</script>' }))
    expect(response.status).toBe(400)
    expect(response.headers.get('content-type')).toContain('text/html')
    const html = await response.text()
    expect(html).toContain('Your request was not sent')
    expect(html).not.toContain('<script>')
  })

  it('only allows POST', () => {
    expect(GET().status).toBe(405)
  })
})
