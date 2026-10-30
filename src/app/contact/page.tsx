import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { BookingForm } from '@/components/BookingForm'
import { clinic, hours } from '@/data/clinic'

export const metadata: Metadata = {
  title: 'Book a visit',
  description: 'Request an appointment at Dent, a fictional dental studio: choose a treatment and a time of day, and get a reply by email.',
  alternates: { canonical: '/contact/' },
}

export default function ContactPage() {
  return (
    <div className="page-width pb-20 pt-10 sm:pb-24 sm:pt-14">
      <div className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Book a visit</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl">
          Tell us what you need and when suits you, and the clinic replies by email to confirm a time. For pain or swelling
          today, call instead.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.55fr_1fr] lg:gap-12">
        <section aria-labelledby="request-title" className="rounded-4xl bg-surface p-6 ring-1 ring-line sm:p-10">
          <h2 id="request-title" className="text-2xl font-bold">
            Your request
          </h2>
          <p className="mb-8 mt-2 text-ink-muted">All fields are required unless marked optional.</p>
          <BookingForm />
        </section>

        <aside aria-label="Other ways to reach the clinic" className="space-y-4">
          <ContactRow icon={<Phone className="h-5 w-5" aria-hidden="true" />} title="Call">
            <a href={clinic.phoneHref} className="text-link">
              {clinic.phone}
            </a>
            <p className="mt-1 text-sm text-ink-muted">Best for emergencies and same-day appointments.</p>
          </ContactRow>
          <ContactRow icon={<Mail className="h-5 w-5" aria-hidden="true" />} title="Email">
            <a href={`mailto:${clinic.email}`} className="text-link">
              {clinic.email}
            </a>
          </ContactRow>
          <ContactRow icon={<MapPin className="h-5 w-5" aria-hidden="true" />} title="Address">
            <address className="not-italic">
              {clinic.address[0]}
              <br />
              {clinic.address[1]}
            </address>
          </ContactRow>
          <ContactRow icon={<Clock className="h-5 w-5" aria-hidden="true" />} title="Opening hours">
            <dl className="space-y-1">
              {hours.map((row) => (
                <div key={row.days} className="flex justify-between gap-4">
                  <dt className="text-ink-muted">{row.days}</dt>
                  <dd className="font-semibold">{row.time}</dd>
                </div>
              ))}
            </dl>
          </ContactRow>
        </aside>
      </div>
    </div>
  )
}

function ContactRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-3xl bg-surface p-5 ring-1 ring-line">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-tint text-action">{icon}</span>
      <div className="min-w-0 flex-1">
        <h2 className="font-bold">{title}</h2>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  )
}
