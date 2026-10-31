import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'
import { developer } from '@/data/developer'

const link =
  'inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5'

/** A quiet note at the top of the footer: who built the site, and how to reach him. */
export function MadeBy() {
  return (
    <section aria-labelledby="made-by-title" className="border-t border-white/15">
      <div className="page-width flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 id="made-by-title" className="font-semibold">
            Need a website like this one?
          </h2>
          <p className="mt-1 text-sm text-ink-soft">
            Designed and built by{' '}
            <a href={developer.portfolioHref} rel="author" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
              {developer.name}
            </a>
            , {developer.role}.
          </p>
        </div>
        <ul className="flex flex-wrap gap-2">
          <li>
            <a href={developer.phoneHref} className={link}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              {developer.phone}
            </a>
          </li>
          <li>
            <a href={developer.whatsappHref} className={link}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </li>
          <li>
            <a href={developer.portfolioHref} className={link}>
              chames.tn
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
