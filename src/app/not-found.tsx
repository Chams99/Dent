import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="page-width max-w-2xl py-20 sm:py-28">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">This page doesn&apos;t exist</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink-muted">The link may be old, or the address may have a typo.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Go to the home page
        </Link>
        <Link href="/contact/" className="btn btn-secondary">
          Book a visit
        </Link>
      </div>
    </div>
  )
}
