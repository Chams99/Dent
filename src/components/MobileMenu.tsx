'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Phone, X } from 'lucide-react'
import { clinic } from '@/data/clinic'
import { navLinks } from './navigation'

/** Disclosure menu for small screens. When closed, its links are hidden from keyboard and screen readers. */
export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface text-ink transition-colors hover:bg-tint"
      >
        {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-line bg-canvas"
      >
        <nav aria-label="Main" className="page-width py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-xl px-3 text-lg font-semibold text-ink hover:bg-tint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid gap-3 border-t border-line pt-4">
            <Link href="/contact/" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Book a visit
            </Link>
            <a href={clinic.phoneHref} className="btn btn-secondary w-full">
              <Phone className="h-4 w-4 text-action" aria-hidden="true" />
              {clinic.phone}
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
