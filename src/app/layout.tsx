import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Dent - Premium Dental Care & Cosmetic Dentistry',
    template: '%s | Dent - Premium Dental Care'
  },
  description: 'Transform your smile with our premium dental care services. Professional teeth whitening, Invisalign, cosmetic dentistry, and more. Book your consultation today.',
  keywords: ['dental care', 'teeth whitening', 'invisalign', 'cosmetic dentistry', 'dental clinic', 'smile transformation', 'dental implants', 'veneers'],
  authors: [{ name: 'Dent Dental Clinic' }],
  creator: 'Dent Dental Clinic',
  publisher: 'Dent Dental Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dent-clinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dent-clinic.com',
    title: 'Dent - Premium Dental Care & Cosmetic Dentistry',
    description: 'Transform your smile with our premium dental care services. Professional teeth whitening, Invisalign, cosmetic dentistry, and more.',
    siteName: 'Dent Dental Clinic',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dent Dental Clinic - Premium Dental Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dent - Premium Dental Care & Cosmetic Dentistry',
    description: 'Transform your smile with our premium dental care services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0c4a6e' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased fluent-mica selection:bg-primary/30 min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster
            position="top-right"
            expand={true}
            richColors
            closeButton
          />
        </ThemeProvider>
      </body>
    </html>
  )
}