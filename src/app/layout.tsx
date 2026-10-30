import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
})

const title = 'Dent · Dental studio'
const description =
  'Dent is a demo website for a fictional dental studio: treatments with clear starting prices, what happens at a first visit, and online booking.'

export const metadata: Metadata = {
  metadataBase: new URL('https://dent-phi.vercel.app'),
  title: { default: title, template: '%s · Dent' },
  description,
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dent',
    title,
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Dent dental studio website' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f6faf8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
