import Link from 'next/link'
import { Phone } from 'lucide-react'
import { clinic } from '@/data/clinic'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { navLinks } from './navigation'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/85">
      <div className="page-width relative flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.95rem] font-medium text-ink-muted transition-colors hover:bg-tint hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phoneHref}
            className="hidden min-h-11 items-center gap-2 rounded-full px-3 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-tint lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-action" aria-hidden="true" />
            {clinic.phone}
          </a>
          <Link href="/contact/" className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex">
            Book a visit
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
