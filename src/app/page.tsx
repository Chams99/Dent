'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { FluentCard } from '@/components/ui/FluentCard'
import { Building2, UserCheck, Gem } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function HomePage() {
  // No need for hash navigation since we're using pure smooth scrolling
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '50px 0px'
  })

  const [contactRef, contactInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '50px 0px'
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="treatments">
        <TestimonialsSection />
      </section>
      <section id="about">
        <div className="section-padding bg-background">
          <div className="container">
            <motion.div
              ref={aboutRef}
              className="text-center mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6"
              >
                Our <span className="text-gradient">Story</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Founded with a vision to transform lives through exceptional dental care,
                Dent has been serving our community for over 15 years. Our story is one
                of passion, innovation, and unwavering commitment to your smile.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <FluentCard className="p-8 max-w-4xl mx-auto" variant="mica">
                  <p className="text-lg text-foreground leading-relaxed">
                    &quot;We believe every smile tells a story, and we&apos;re here to help you write
                    the best chapter yet. From routine cleanings to complete smile makeovers,
                    our team combines cutting-edge technology with compassionate care to deliver
                    results that exceed expectations.&quot;
                  </p>
                  <div className="mt-6 text-primary font-semibold">
                    — Dr. Sarah Johnson, Founder & Lead Dentist
                  </div>
                </FluentCard>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <FluentCard className="p-8 text-center h-full" variant="default">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Journey</h3>
                  <p className="text-muted-foreground">15+ years of transforming smiles and building lasting relationships</p>
                </FluentCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <FluentCard className="p-8 text-center h-full" variant="default">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserCheck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To provide exceptional dental care that empowers confident smiles</p>
                </FluentCard>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <FluentCard className="p-8 text-center h-full" variant="default">
                  <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gem className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Promise</h3>
                  <p className="text-muted-foreground">Compassionate care with cutting-edge technology for your best smile</p>
                </FluentCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-muted/50">
        <div className="container">
          <motion.div
            ref={contactRef}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Ready to Transform Your{' '}
              <span className="text-gradient">Smile?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Take the first step towards your perfect smile. Contact us today to
              schedule your free consultation and discover how we can help you achieve
              the smile you&apos;ve always dreamed of.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main >
  )
} 