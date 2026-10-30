import type { Metadata } from 'next'
import Link from 'next/link'
import { CircleCheck } from 'lucide-react'

// Shown after the booking form is sent without JavaScript.
export const metadata: Metadata = {
  title: 'Request sent',
  robots: { index: false },
  alternates: { canonical: '/contact/sent/' },
}

export default function RequestSentPage() {
  return (
    <div className="page-width max-w-2xl py-20 sm:py-28">
      <CircleCheck className="h-12 w-12 text-action" aria-hidden="true" />
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight">Request sent</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">
        Thanks. Your request was sent, and the reply confirming a time will come by email.
      </p>
      <Link href="/" className="btn btn-secondary mt-8">
        Back to the home page
      </Link>
    </div>
  )
}
