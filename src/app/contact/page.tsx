import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Dent',
  description: 'Get in touch with our dental team. Schedule your consultation, ask questions, or book an appointment. We\'re here to help you achieve your perfect smile.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container">
          <div className="text-center">
            <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Get in{' '}
              <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your smile? Contact us today to schedule your
              consultation and take the first step towards your perfect smile.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We&apos;re here to help you achieve the smile of your dreams.
                  Reach out to us through any of the methods below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      (123) 456-7890
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available Mon-Fri: 8AM-6PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@dent.com"
                      className="text-primary hover:text-primary/80 font-medium"
                    >
                      info@dent.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Dental Street<br />
                      City, State 12345
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Free parking available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Emergency appointments available
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Location</h3>
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center border border-border">
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Located in the heart of the city with easy access to public transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 