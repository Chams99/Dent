import Image from 'next/image'
import { visitSteps } from '@/data/clinic'
import xrayReview from '@/assets/xray-review.jpg'

export function FirstVisit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-tint py-20 sm:py-24 lg:py-28">
      <div className="page-width grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Image
          src={xrayReview}
          alt="A dentist holding up dental X-rays to a light panel"
          placeholder="blur"
          sizes="(min-width: 1152px) 540px, (min-width: 1024px) 45vw, 100vw"
          className="aspect-[4/3] w-full rounded-4xl object-cover lg:order-none"
        />
        <div>
          <p className="eyebrow">Your first visit</p>
          <h2 id="visit-title" className="section-title mt-3">
            What happens when you come in
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            New patients start with a check-up. It takes about 45 minutes, and nothing else is done on the day unless you ask.
          </p>
          <ol className="mt-10 space-y-7">
            {visitSteps.map((step, index) => (
              <li key={step.title} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-lg font-extrabold text-coral-ink ring-1 ring-line"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
