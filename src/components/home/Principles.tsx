import { HeartHandshake, Moon, Receipt } from 'lucide-react'
import { principles } from '@/data/clinic'

const icons = [Receipt, HeartHandshake, Moon]

export function Principles() {
  return (
    <section aria-labelledby="principles-title" className="border-y border-line bg-surface">
      <div className="page-width py-12 sm:py-14">
        <h2 id="principles-title" className="sr-only">
          How the clinic works
        </h2>
        <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
          {principles.map((item, index) => {
            const Icon = icons[index]
            return (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-coral-soft text-coral-ink">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
