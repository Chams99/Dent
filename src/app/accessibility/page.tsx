import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'How the Dent website is built to work for everyone, and how to report a problem.',
  alternates: { canonical: '/accessibility/' },
}

export default function AccessibilityPage() {
  return (
    <article className="page-width max-w-3xl py-14 sm:py-20">
      <p className="eyebrow">Accessibility</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Accessibility</h1>
      <div className="prose-page">
        <p>This website aims to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.</p>

        <h2>What has been done</h2>
        <ul>
          <li>Every page and the booking form can be used with a keyboard alone, with a visible focus outline.</li>
          <li>A skip link at the top of each page jumps straight to the main content.</li>
          <li>Text meets a contrast ratio of at least 4.5:1 against its background.</li>
          <li>Pages work at 320 pixels wide and at 200% zoom without sideways scrolling.</li>
          <li>Form fields have visible labels, and errors are described in text and linked to their field.</li>
          <li>Animation is kept to a minimum and turned off when your device asks for reduced motion.</li>
          <li>Images that carry meaning have text descriptions.</li>
        </ul>

        <h2>Report a problem</h2>
        <p>
          If something on this site does not work for you, describe it in a message through the booking form, choosing
          &ldquo;Not sure yet, or a question&rdquo; as the treatment.
        </p>

        <p className="text-base">Last reviewed October 2026.</p>
      </div>
    </article>
  )
}
