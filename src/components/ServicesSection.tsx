'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Shield, Heart, Zap, Star, Award, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { FluentCard } from './ui/FluentCard'

const services = [
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    description: 'restore the natural brilliance of your smile with our professional whitening treatments.',
    features: ['In-office power bleaching', 'Custom home kits', 'Enamel-safe technology'],
    price: 'From $299',
    popular: true,
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
  {
    icon: Shield,
    title: 'Invisalign',
    description: 'Straighten your teeth discreetly with clear aligners that fit your lifestyle.',
    features: ['Clear aligners', 'Custom treatment plan', 'Virtual monitoring'],
    price: 'From $3,500',
    popular: false,
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Heart,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, and other cosmetic procedures.',
    features: ['Porcelain veneers', 'Dental bonding', 'Smile makeover'],
    price: 'From $800',
    popular: false,
    color: 'from-pink-400 to-rose-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
  },
  {
    icon: Zap,
    title: 'Dental Implants',
    description: 'Replace missing teeth with natural-looking, permanent dental implants.',
    features: ['Permanent solution', 'Natural appearance', 'Improved function'],
    price: 'From $3,800',
    popular: false,
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Star,
    title: 'Preventive Care',
    description: 'Comprehensive dental care to maintain your oral health and prevent future issues.',
    features: ['Regular cleanings', 'Oral exams', 'X-rays'],
    price: 'From $150',
    popular: false,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Award,
    title: 'Emergency Care',
    description: '24/7 emergency dental care when you need it most.',
    features: ['Same-day appointments', 'Pain relief', 'Emergency extractions'],
    price: 'From $200',
    popular: false,
    color: 'from-red-400 to-pink-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    },
  },
}

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '50px 0px'
  })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Premium Services</span>
          </motion.div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Premium{' '}
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of dental services designed to give you
            the smile you&apos;ve always dreamed of. From preventive care to advanced
            cosmetic procedures, we&apos;re here to help.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "visible"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "visible"}
              className={`p-0 relative group cursor-pointer h-full`}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
            >
              <FluentCard className={`h-full p-8 ${service.popular ? 'ring-2 ring-primary shadow-2xl' : ''}`} variant="default">
                {service.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </span>
                  </motion.div>
                )}

                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${service.bgColor}`}
                  animate={{
                    scale: hoveredCard === index ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-primary relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      x: hoveredCard === index ? [0, 100, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Price */}
                <motion.div
                  className="text-2xl font-bold text-primary mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.price}
                </motion.div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`/treatments/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="btn-primary w-full justify-center group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-primary-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              </FluentCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not sure which treatment is right for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experienced team will help you choose the perfect treatment plan for your unique needs and goals.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 group">
                <span className="flex items-center">
                  Schedule a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}