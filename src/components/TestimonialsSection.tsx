'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { FluentCard } from './ui/FluentCard'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    content: 'The teeth whitening treatment exceeded my expectations! The results were incredible and the process was completely painless. I can\'t stop smiling now!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    treatment: 'Teeth Whitening',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Software Engineer',
    content: 'Invisalign has completely transformed my smile. The team was professional, caring, and made the entire process smooth and comfortable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    treatment: 'Invisalign',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Teacher',
    content: 'I was nervous about getting dental implants, but the team made me feel so comfortable. The results are amazing and look completely natural.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    treatment: 'Dental Implants',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Business Owner',
    content: 'The cosmetic dentistry work I had done has given me so much confidence. The veneers look perfect and the whole experience was excellent.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    treatment: 'Cosmetic Dentistry',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Healthcare Professional',
    content: 'As a healthcare worker, I appreciate the high standards of care and cleanliness. The preventive care program has kept my teeth healthy for years.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    treatment: 'Preventive Care',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Retired',
    content: 'When I had a dental emergency, they got me in immediately and took care of everything. The emergency care service is outstanding.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    treatment: 'Emergency Care',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '50px 0px'
  })

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our{' '}
            <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our patients have to say
            about their experience with our dental care services.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "visible"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "visible"}
            >
              <FluentCard className="p-8 relative group h-full hover:shadow-2xl transition-all duration-300" variant="mica">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Treatment Badge */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.treatment}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </FluentCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '4.9', label: 'Average Rating' },
            { number: '10,000+', label: 'Happy Patients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our satisfied patients?
          </p>
          <a
            href="/contact"
            className="btn-primary text-lg px-8 py-4"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}