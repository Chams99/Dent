import type { Metadata } from 'next'
import { developer } from '@/data/developer'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What the Dent demo website collects through its booking form, and what happens to it.',
  alternates: { canonical: '/privacy/' },
}

export default function PrivacyPage() {
  return (
    <article className="page-width max-w-3xl py-14 sm:py-20">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">How this site handles your information</h1>
      <div className="prose-page">
        <p>
          Dent is a fictional clinic and this website is a design and development demo. Please do not send real medical
          information through it.
        </p>

        <h2>What the booking form collects</h2>
        <p>Only what you type into it:</p>
        <ul>
          <li>your name and email address</li>
          <li>a phone number, if you choose to give one</li>
          <li>the treatment and time of day you pick</li>
          <li>your message, if you write one</li>
        </ul>

        <h2>What happens to it</h2>
        <p>
          The request is sent as an email to {developer.name}, who built and runs this website, through Resend, an email
          delivery service. The site
          does not keep it in a database, it is not sold or shared with anyone else, and it is only used to reply to you.
        </p>

        <h2>Cookies and tracking</h2>
        <p>This site sets no cookies and uses no analytics or advertising trackers.</p>

        <h2>Hosting</h2>
        <p>
          The site is hosted on Vercel, which keeps standard server logs, such as IP addresses and request times, to run and
          protect the service.
        </p>

        <h2>Deleting a request</h2>
        <p>
          To have a request you sent deleted, send another request through the booking form and say so in the message.
        </p>

        <p className="text-base">Last updated October 2026.</p>
      </div>
    </article>
  )
}
