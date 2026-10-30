// POST /api/booking/: validates a booking request and emails it to the clinic through Resend.
// Accepts JSON from the booking form, and a plain form post when JavaScript is off.
import { bookingSchema, type BookingErrorCode } from '@/lib/booking'
import { bookingSubject, bookingText } from '@/lib/booking-email'

const RESEND_URL = 'https://api.resend.com/emails'
const MAX_BODY_BYTES = 10_000
const TIMEOUT_MS = 10_000

type Outcome = { ok: true } | { ok: false; status: number; error: BookingErrorCode; fields?: string[] }

const failure = (status: number, error: BookingErrorCode, fields?: string[]): Outcome => ({ ok: false, status, error, fields })

async function deliver(body: unknown): Promise<Outcome> {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return failure(400, 'invalid')

  // Bots fill the hidden "website" field. Accept quietly and send nothing.
  const website = (body as { website?: unknown }).website
  if (typeof website === 'string' && website.trim() !== '') return { ok: true }

  const parsed = bookingSchema.safeParse(body)
  if (!parsed.success) {
    return failure(400, 'invalid', [...new Set(parsed.error.issues.map((issue) => String(issue.path[0])))])
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.BOOKING_TO_EMAIL
  const from = process.env.BOOKING_FROM_EMAIL
  if (!apiKey || !to || !from) return failure(503, 'not_configured')

  const input = parsed.data
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from, to: [to], reply_to: input.email, subject: bookingSubject(input), text: bookingText(input) }),
      signal: controller.signal,
    })
    if (!response.ok) {
      console.error('Booking email was not accepted, status', response.status)
      return failure(502, 'delivery_failed')
    }
    return { ok: true }
  } catch (error) {
    const timedOut = error instanceof Error && error.name === 'AbortError'
    console.error(timedOut ? 'Booking email timed out' : 'Booking email request failed')
    return timedOut ? failure(504, 'timeout') : failure(502, 'delivery_failed')
  } finally {
    clearTimeout(timer)
  }
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

const FORM_MESSAGES: Record<BookingErrorCode, string> = {
  invalid: 'Some details were missing or not valid. Go back, check the form and send it again.',
  invalid_json: 'The request could not be read. Go back and send the form again.',
  unsupported_media_type: 'The request could not be read. Go back and send the form again.',
  too_large: 'The message is too long. Go back, shorten it and send the form again.',
  not_configured: 'Online booking is not connected on this demo site yet, so the request was not sent.',
  delivery_failed: 'The request could not be sent right now. Go back and try again in a moment.',
  timeout: 'The request could not be sent right now. Go back and try again in a moment.',
}

/** Plain HTML answer for form posts made without JavaScript. Contains no user input. */
function formFailurePage(status: number, error: BookingErrorCode): Response {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Request not sent · Dent</title><style>body{font:18px/1.6 system-ui,sans-serif;color:#102a2c;background:#f6faf8;margin:0;padding:48px 20px}main{max-width:36rem;margin:auto}h1{font-size:2rem;line-height:1.2}a{color:#0e7066;font-weight:600}</style></head><body><main><h1>Your request was not sent</h1><p>${FORM_MESSAGES[error]}</p><p><a href="/contact/">Back to the booking form</a></p></main></body></html>`
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } })
}

export async function POST(request: Request): Promise<Response> {
  const type = (request.headers.get('content-type') ?? '').toLowerCase()
  const isJson = type.startsWith('application/json')
  const isForm = type.startsWith('application/x-www-form-urlencoded')
  if (!isJson && !isForm) return json(415, { error: 'unsupported_media_type' })

  const declared = Number(request.headers.get('content-length') ?? 0)
  const raw = declared > MAX_BODY_BYTES ? null : await request.text()
  if (raw === null || new TextEncoder().encode(raw).length > MAX_BODY_BYTES) {
    return isForm ? formFailurePage(413, 'too_large') : json(413, { error: 'too_large' })
  }

  let body: unknown
  if (isJson) {
    try {
      body = JSON.parse(raw)
    } catch {
      return json(400, { error: 'invalid_json' })
    }
  } else {
    body = Object.fromEntries(new URLSearchParams(raw))
  }

  const outcome = await deliver(body)
  if (isForm) {
    return outcome.ok
      ? new Response(null, { status: 303, headers: { Location: '/contact/sent/', 'Cache-Control': 'no-store' } })
      : formFailurePage(outcome.status, outcome.error)
  }
  return outcome.ok
    ? json(202, { ok: true })
    : json(outcome.status, { error: outcome.error, ...(outcome.fields ? { fields: outcome.fields } : {}) })
}

export function GET(): Response {
  return new Response(null, { status: 405, headers: { Allow: 'POST' } })
}
