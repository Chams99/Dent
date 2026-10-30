import Link from 'next/link'

export function ToothMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="9" fill="#0e7066" />
      <path
        d="M16 9.4c-1.5-1.2-3-1.7-4.6-1.7-3 0-5 2.4-5 5.6 0 2.5.8 4.5 1.6 6.6.7 2 1.2 4 1.7 5.8.3.9 1.5.9 1.8 0l1.3-4.1c.4-1.2 1.4-1.8 2.7-1.8s2.3.6 2.7 1.8l1.3 4.1c.3.9 1.5.9 1.8 0 .5-1.8 1-3.8 1.7-5.8.8-2.1 1.6-4.1 1.6-6.6 0-3.2-2-5.6-5-5.6-1.6 0-3.1.5-4.6 1.7Z"
        fill="#ffffff"
      />
      <path d="M9.6 12.6c.2-1.3 1-2.2 2.2-2.5" fill="none" stroke="#e0603f" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <Link href="/" className="inline-flex min-h-11 items-center gap-2.5 rounded-lg">
      <ToothMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-xl font-extrabold tracking-tight ${tone === 'light' ? 'text-white' : 'text-ink'}`}>Dent</span>{' '}
        <span className={`mt-1 text-xs font-medium ${tone === 'light' ? 'text-ink-soft' : 'text-ink-muted'}`}>Dental studio</span>
      </span>
    </Link>
  )
}
