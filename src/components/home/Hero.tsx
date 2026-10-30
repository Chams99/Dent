import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { clinic, formatPrice, treatments } from '@/data/clinic'
import clinicRoom from '@/assets/clinic-room.jpg'

const checkUp = treatments.find((t) => t.id === 'check-up')!

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-tint sm:-right-40 sm:-top-40 sm:h-[34rem] sm:w-[34rem]"
      />
      <div className="page-width relative grid gap-12 pb-20 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
        <div>
          <p className="eyebrow">Dental studio in Springfield</p>
          <h1 id="hero-title" className="mt-4 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]">
            Calm, careful dentistry. <span className="text-action">The cost agreed first.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Check-ups, whitening, clear aligners and implants, with evening and Saturday appointments and a written
            estimate before any treatment begins.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact/" className="btn btn-primary">
              Book a visit
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/#treatments" className="btn btn-secondary">
              Treatments and prices
            </Link>
          </div>
          <p className="mt-7 flex items-center gap-2 text-ink-muted">
            <Phone className="h-4 w-4 text-action" aria-hidden="true" />
            <span>
              Or call{' '}
              <a href={clinic.phoneHref} className="text-link whitespace-nowrap">
                {clinic.phone}
              </a>
            </span>
          </p>
        </div>

        <div className="relative pb-8 sm:pb-0">
          <Image
            src={clinicRoom}
            alt="A bright treatment room with a dental chair beside a large window"
            priority
            placeholder="blur"
            sizes="(min-width: 1152px) 520px, (min-width: 1024px) 45vw, 100vw"
            className="aspect-[4/3] w-full rounded-4xl object-cover shadow-[0_30px_60px_-30px_rgba(16,42,44,0.45)]"
          />
          <div className="absolute -bottom-2 left-4 rounded-2xl bg-surface px-5 py-4 shadow-[0_18px_40px_-18px_rgba(16,42,44,0.4)] ring-1 ring-line sm:-bottom-7 sm:left-8">
            <p className="text-sm font-medium text-ink-muted">{checkUp.name}</p>
            <p className="mt-0.5 text-2xl font-extrabold">
              <span className="text-base font-semibold text-ink-muted">from </span>
              {formatPrice(checkUp.priceFrom)}
            </p>
            <p className="mt-0.5 text-sm text-ink-muted">{checkUp.duration}, X-rays when needed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
