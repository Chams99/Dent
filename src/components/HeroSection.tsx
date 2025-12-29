'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Play, ArrowRight, Star, Users, Clock, ShieldCheck } from 'lucide-react'


import Image from 'next/image'

export default function HeroSection() {

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px'
  })



  const floatingStats = [
    {
      label: 'Happy Patients',
      value: '10k+',
      icon: Users,
      delay: 0.5,
      position: 'top-10 -left-10'
    },
    {
      label: 'Years Exp.',
      value: '15+',
      icon: Clock,
      delay: 0.7,
      position: 'bottom-20 -right-4'
    },
    {
      label: 'Top Rated',
      value: '5.0',
      icon: Star,
      delay: 0.9,
      position: 'top-1/2 -right-12'
    }
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Decorative Blur Blobs (Solid Colors with Blur) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10 w-full" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
            >
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Voted #1 Dental Clinic 2024</span>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
              Transform Your <br />
              <span className="text-primary relative inline-block">
                Smile
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
              , Transform <br />
              Your Life.
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Experience world-class dental care with a personalized touch.
              Advanced technology meets compassionate treatment for a smile that lasts a lifetime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary group text-lg px-8 py-4">
                <span className="flex items-center">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>

              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline group text-lg px-8 py-4 bg-background/50 hover:bg-background/80 backdrop-blur-sm"
              >
                <span className="flex items-center">
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Watch Video
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100',
                  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100',
                  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100',
                  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100'
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden relative">
                    <Image
                      src={src}
                      alt="Patient"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-white flex items-center justify-center text-xs">
                  +2k
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span>Trusted by 2,000+ patients</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visuals */}
          <motion.div
            style={{ y }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
                alt="Confident Smile"
                fill
                className="object-cover"
                priority
              />

              {/* Overlay Gradient (Subtle Bottom Fade for text contrast if needed, mostly transparent) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Cards */}
            {floatingStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                className={`absolute ${stat.position}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="fluent-mica backdrop-blur-md bg-white/80 dark:bg-black/60 p-4 rounded-xl shadow-lg border border-white/20 flex items-center gap-4 min-w-[160px]">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground leading-none">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
} 