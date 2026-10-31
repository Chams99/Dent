import Link from 'next/link'
import { clinic, hours } from '@/data/clinic'
import { Logo } from './Logo'
import { MadeBy } from './MadeBy'
import { navLinks } from './navigation'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="page-width grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-ink-soft">
            Check-ups, whitening, aligners and implants, with the cost agreed before treatment starts.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Explore</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex min-h-10 items-center hover:underline hover:underline-offset-4">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Visit</h2>
          <address className="mt-4 space-y-1 not-italic">
            <p>{clinic.address[0]}</p>
            <p>{clinic.address[1]}</p>
            <p className="pt-2">
              <a href={clinic.phoneHref} className="inline-flex min-h-10 items-center hover:underline hover:underline-offset-4">
                {clinic.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${clinic.email}`} className="inline-flex min-h-10 items-center hover:underline hover:underline-offset-4">
                {clinic.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">Opening hours</h2>
          <dl className="mt-4 space-y-2">
            {hours.map((row) => (
              <div key={row.days}>
                <dt className="text-ink-soft">{row.days}</dt>
                <dd>{row.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <MadeBy />

      <div className="border-t border-white/15">
        <div className="page-width flex flex-col gap-4 py-6 text-sm text-ink-soft lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl">{clinic.demoNote}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            <li>
              <Link href="/privacy/" className="inline-flex min-h-10 items-center text-white hover:underline hover:underline-offset-4">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/accessibility/" className="inline-flex min-h-10 items-center text-white hover:underline hover:underline-offset-4">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
