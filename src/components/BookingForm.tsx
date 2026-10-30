'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle } from 'lucide-react'
import {
  BOOKING_FIELDS,
  LIMITS,
  TIME_OPTIONS,
  TREATMENT_OPTIONS,
  bookingSchema,
  type BookingErrorCode,
  type BookingField,
} from '@/lib/booking'

type Errors = Partial<Record<BookingField, string>>
type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string }

const TRY_AGAIN = 'Your request could not be sent. Check your connection and try again in a moment.'

const SERVER_MESSAGES: Partial<Record<BookingErrorCode, string>> = {
  invalid: 'Some details need another look. Check the highlighted fields.',
  too_large: 'Your message is too long. Shorten it and try again.',
  not_configured: 'Online booking is not connected on this demo site yet, so your request was not sent.',
  timeout: 'The clinic’s mail service took too long to answer. Try again in a moment.',
}

function focusField(form: HTMLFormElement, errors: Errors) {
  const first = BOOKING_FIELDS.find((field) => errors[field])
  if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
}

export function BookingForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const sentHeading = useRef<HTMLHeadingElement>(null)

  // With JavaScript running, the form validates itself; without it, the browser's own checks apply.
  const formRef = useCallback((form: HTMLFormElement | null) => {
    if (!form) return
    form.noValidate = true
    const wanted = new URLSearchParams(window.location.search).get('treatment')
    const select = form.elements.namedItem('treatment')
    if (wanted && select instanceof HTMLSelectElement && TREATMENT_OPTIONS.some((o) => o.value === wanted)) {
      select.value = wanted
    }
  }, [])

  useEffect(() => {
    if (status.kind === 'sent') sentHeading.current?.focus()
  }, [status.kind])

  function clearError(event: FormEvent<HTMLFormElement>) {
    const name = (event.target as HTMLInputElement).name as BookingField
    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[name]
        return next
      })
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status.kind === 'sending') return
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form))
    const parsed = bookingSchema.safeParse(values)

    if (!parsed.success) {
      const next: Errors = {}
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as BookingField
        next[field] ??= issue.message
      }
      setErrors(next)
      setStatus({ kind: 'idle' })
      focusField(form, next)
      return
    }

    setErrors({})
    setStatus({ kind: 'sending' })
    try {
      const response = await fetch('/api/booking/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, website: values.website ?? '' }),
        signal: AbortSignal.timeout(20_000),
      })
      if (response.ok) {
        setStatus({ kind: 'sent' })
        return
      }
      const body: { error?: BookingErrorCode; fields?: unknown } = await response.json().catch(() => ({}))
      if (body.error === 'invalid' && Array.isArray(body.fields)) {
        const next: Errors = {}
        for (const field of body.fields) {
          if (BOOKING_FIELDS.includes(field as BookingField)) next[field as BookingField] = 'Check this field'
        }
        setErrors(next)
        focusField(form, next)
      }
      setStatus({ kind: 'error', message: (body.error && SERVER_MESSAGES[body.error]) || TRY_AGAIN })
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === 'TimeoutError'
      setStatus({ kind: 'error', message: timedOut ? SERVER_MESSAGES.timeout! : TRY_AGAIN })
    }
  }

  if (status.kind === 'sent') {
    return (
      <div role="status" className="py-4">
        <CircleCheck className="h-10 w-10 text-action" aria-hidden="true" />
        <h3 ref={sentHeading} tabIndex={-1} className="mt-4 text-2xl font-bold focus:outline-none">
          Request sent
        </h3>
        <p className="mt-3 max-w-md text-lg leading-relaxed text-ink-muted">
          Thanks. Your request was sent, and the reply confirming a time will come by email.
        </p>
        <button type="button" className="btn btn-secondary mt-8" onClick={() => setStatus({ kind: 'idle' })}>
          Send another request
        </button>
      </div>
    )
  }

  const sending = status.kind === 'sending'

  return (
    <form ref={formRef} method="post" action="/api/booking/" onSubmit={onSubmit} onChange={clearError} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={LIMITS.name}
            className="field"
            {...describe('name', errors.name)}
          />
        </Field>
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={LIMITS.email}
            className="field"
            {...describe('email', errors.email)}
          />
        </Field>
        <Field id="phone" label="Phone" optional hint="Only if you would like a call back." error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={LIMITS.phone}
            className="field"
            {...describe('phone', errors.phone, true)}
          />
        </Field>
        <Field id="treatment" label="Treatment" error={errors.treatment}>
          <div className="relative">
            <select
              id="treatment"
              name="treatment"
              required
              defaultValue=""
              className="field cursor-pointer appearance-none pr-11"
              {...describe('treatment', errors.treatment)}
            >
              <option value="" disabled>
                Choose a treatment
              </option>
              {TREATMENT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
          </div>
        </Field>
      </div>

      <fieldset
        role="radiogroup"
        aria-labelledby="time-legend"
        aria-invalid={errors.time ? true : undefined}
        aria-describedby={errors.time ? 'time-error' : undefined}
      >
        <legend id="time-legend" className="font-semibold">
          Preferred time of day
        </legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {TIME_OPTIONS.map((option, index) => (
            <label
              key={option.value}
              className="flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border border-line-strong bg-surface px-4 py-3 transition-colors hover:border-ink has-[:checked]:border-action has-[:checked]:bg-tint has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-action"
            >
              <input
                type="radio"
                name="time"
                value={option.value}
                required={index === 0}
                className="h-5 w-5 shrink-0 accent-action focus-visible:outline-none"
                aria-describedby={errors.time ? 'time-error' : undefined}
              />
              <span>
                <span className="block font-semibold">{option.label}</span>
                <span className="block text-sm text-ink-muted">{option.hint}</span>
              </span>
            </label>
          ))}
        </div>
        {errors.time && <ErrorText id="time-error">{errors.time}</ErrorText>}
      </fieldset>

      <Field id="message" label="Anything we should know?" optional hint="For example, a tooth that hurts or if you feel nervous about visits. Please leave out detailed medical information." error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={LIMITS.message}
          className="field resize-y"
          {...describe('message', errors.message, true)}
        />
      </Field>

      {/* Hidden from people; bots that fill it are ignored. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === 'error' && (
        <div role="alert" className="flex gap-3 rounded-xl bg-coral-soft px-4 py-3 font-medium text-coral-ink">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>{status.message}</p>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn btn-primary sm:min-w-48" disabled={sending}>
          {sending ? (
            <>
              <LoaderCircle className="h-5 w-5 animate-spin motion-reduce:animate-none" aria-hidden="true" />
              Sending
            </>
          ) : (
            'Send request'
          )}
        </button>
        <p className="text-sm text-ink-muted sm:max-w-xs">
          Dent is a fictional clinic, so requests sent here reach the site owner, not a dental team.
        </p>
      </div>
      <p className="sr-only" aria-live="polite">
        {sending ? 'Sending your request' : ''}
      </p>
    </form>
  )
}

function describe(id: string, error: string | undefined, hasHint = false) {
  const ids = [hasHint ? `${id}-hint` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ')
  return { 'aria-invalid': error ? true : undefined, 'aria-describedby': ids || undefined }
}

function Field({
  id,
  label,
  optional = false,
  hint,
  error,
  children,
}: {
  id: string
  label: string
  optional?: boolean
  hint?: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="font-semibold">
        {label}
        {optional && <span className="font-normal text-ink-muted"> (optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && <ErrorText id={`${id}-error`}>{error}</ErrorText>}
      {hint && (
        <p id={`${id}-hint`} className="mt-2 text-sm text-ink-muted">
          {hint}
        </p>
      )}
    </div>
  )
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm font-medium text-danger">
      <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      {children}
    </p>
  )
}
