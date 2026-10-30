import Link from 'next/link'
import { ArrowRight, CalendarClock, Check, Gem, ScanLine, ShieldCheck, Smile, Sparkles, type LucideIcon } from 'lucide-react'
import { formatPrice, treatments } from '@/data/clinic'

const icons: Record<string, LucideIcon> = {
  'check-up': ShieldCheck,
  whitening: Sparkles,
  aligners: Smile,
  cosmetic: Gem,
  implants: ScanLine,
  emergency: CalendarClock,
}

export function Treatments() {
  return (
    <section id="treatments" aria-labelledby="treatments-title" className="py-20 sm:py-24 lg:py-28">
      <div className="page-width">
        <div className="max-w-2xl">
          <p className="eyebrow">Treatments</p>
          <h2 id="treatments-title" className="section-title mt-3">
            Treatments and prices
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Starting prices for the most common treatments. After your check-up you get a written estimate for your exact
            plan, so the final cost is clear before anything starts.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => {
            const Icon = icons[treatment.id] ?? ShieldCheck
            return (
              <li key={treatment.id} className="flex flex-col rounded-3xl bg-surface p-6 ring-1 ring-line sm:p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-tint text-action">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{treatment.name}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{treatment.summary}</p>
                <ul className="mt-5 space-y-2 text-[0.95rem]">
                  {treatment.includes.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-action" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <div className="flex items-end justify-between gap-4 border-t border-line pt-5">
                    <div>
                      <p className="text-sm text-ink-muted">{treatment.duration}</p>
                      <p className="text-2xl font-extrabold">
                        <span className="text-sm font-semibold text-ink-muted">from </span>
                        {formatPrice(treatment.priceFrom)}
                      </p>
                    </div>
                    <Link
                      href={`/contact/?treatment=${treatment.id}`}
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 font-semibold text-action transition-colors hover:bg-tint"
                    >
                      Book<span className="sr-only"> {treatment.name.toLowerCase()}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          Prices are indicative starting points in US dollars. Your estimate depends on what the check-up finds.
        </p>
      </div>
    </section>
  )
}
