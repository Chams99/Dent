import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { clinic, hours } from '@/data/clinic'
import toothbrushes from '@/assets/toothbrushes.jpg'

export function BookingBand() {
  return (
    <section aria-labelledby="book-title" className="page-width pb-20 sm:pb-24 lg:pb-28">
      <div className="grid overflow-hidden rounded-4xl bg-ink text-white lg:grid-cols-[1.35fr_1fr]">
        <div className="p-8 sm:p-12">
          <h2 id="book-title" className="section-title">
            Book a check-up
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            Tell us what you need and which time of day suits you. The clinic replies by email to confirm an appointment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact/" className="btn btn-light">
              Book a visit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={clinic.phoneHref} className="btn border border-white/40 text-white hover:border-white hover:bg-white/10">
              Call {clinic.phone}
            </a>
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-[1.5fr_1fr]">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Opening hours</h3>
              <dl className="mt-3 space-y-1.5">
                {hours.map((row) => (
                  <div key={row.days} className="flex flex-wrap justify-between gap-x-4">
                    <dt className="text-ink-soft">{row.days}</dt>
                    <dd className="whitespace-nowrap font-semibold">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Find us</h3>
              <address className="mt-3 not-italic leading-relaxed">
                {clinic.address[0]}
                <br />
                {clinic.address[1]}
              </address>
              <p className="mt-3">
                <a href={`mailto:${clinic.email}`} className="underline decoration-white/40 underline-offset-4 hover:decoration-white">
                  {clinic.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="px-3 pb-3 sm:px-4 sm:pb-4 lg:py-4 lg:pl-0">
          <Image
            src={toothbrushes}
            alt=""
            placeholder="blur"
            sizes="(min-width: 1152px) 450px, (min-width: 1024px) 40vw, 100vw"
            className="h-64 w-full rounded-3xl object-cover sm:h-80 lg:h-full"
          />
        </div>
      </div>
    </section>
  )
}
