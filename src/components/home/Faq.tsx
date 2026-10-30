import Link from 'next/link'
import { Plus } from 'lucide-react'
import { faqs } from '@/data/clinic'

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 sm:py-24 lg:py-28">
      <div className="page-width grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <p className="eyebrow">Questions</p>
          <h2 id="faq-title" className="section-title mt-3">
            Common questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Something not covered here? Choose &ldquo;Not sure yet&rdquo; in the booking form and write your question. You
            don&apos;t need to book an appointment to ask.
          </p>
          <Link href="/contact/" className="btn btn-secondary mt-7">
            Ask a question
          </Link>
        </div>

        <div className="border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="h-5 w-5 shrink-0 text-action transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
