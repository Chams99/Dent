'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock, Sparkles } from 'lucide-react'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  treatment: z.string().optional(),
  preferredDate: z.string().optional(),
  urgency: z.enum(['low', 'medium', 'high']).optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const treatments = [
  'Teeth Whitening',
  'Invisalign',
  'Cosmetic Dentistry',
  'Dental Implants',
  'Preventive Care',
  'Emergency Care',
  'Other',
]

const urgencyLevels = [
  { value: 'low', label: 'Low - Within a month' },
  { value: 'medium', label: 'Medium - Within 2 weeks' },
  { value: 'high', label: 'High - ASAP' },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      urgency: 'medium',
    },
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Here you would typically send the data to your backend
      console.log('Form data:', data)

      setSubmitStatus('success')
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      toast.error('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getProgressPercentage = () => {
    const fields = ['name', 'email', 'phone', 'message']
    const filledFields = fields.filter(field => watchedFields[field as keyof ContactFormData])
    return (filledFields.length / fields.length) * 100
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-1 space-y-6"
        >
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
              <Sparkles className="w-5 h-5 text-primary mr-2" />
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a
                    href="mailto:info@dent.com"
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    info@dent.com
                  </a>
                  <p className="text-sm text-muted-foreground">24/7 support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">
                    123 Dental Street<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Hours</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Mon-Thu: 8AM-6PM</p>
                    <p>Fri: 8AM-4PM</p>
                    <p>Sat: 9AM-2PM</p>
                    <p>Sun: Emergency only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Response Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-6 bg-primary/5"
          >
            <h4 className="font-bold text-foreground mb-2">Quick Response Promise</h4>
            <p className="text-sm text-muted-foreground mb-3">
              We respond to all inquiries within 24 hours, often much sooner!
            </p>
            <div className="flex items-center space-x-2 text-sm text-primary">
              <CheckCircle className="w-4 h-4" />
              <span>Free consultation</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="glass-card rounded-2xl p-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">Get Started</span>
              </motion.div>

              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ready to Transform Your Smile?
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized treatment plan.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Form Progress</span>
                <span>{Math.round(getProgressPercentage())}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  className="bg-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${getProgressPercentage()}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    Thank you! We&apos;ve received your message and will get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <span className="text-red-800 dark:text-red-200 font-medium">
                    Something went wrong. Please try again or call us directly.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-background ${errors.name ? 'border-destructive' : 'border-input'
                      }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-destructive"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-background ${errors.email ? 'border-destructive' : 'border-input'
                      }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-destructive"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-background ${errors.phone ? 'border-destructive' : 'border-input'
                      }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-sm text-destructive"
                    >
                      {errors.phone.message}
                    </motion.p>
                  )}
                </div>

                {/* Treatment Interest */}
                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-foreground mb-2">
                    Treatment of Interest
                  </label>
                  <select
                    {...register('treatment')}
                    id="treatment"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-background"
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>
                        {treatment}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Preferred Date */}
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Appointment Date
                  </label>
                  <input
                    {...register('preferredDate')}
                    type="date"
                    id="preferredDate"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-background"
                  />
                </div>

                {/* Urgency */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-foreground mb-2">
                    Urgency Level
                  </label>
                  <select
                    {...register('urgency')}
                    id="urgency"
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 bg-background"
                  >
                    {urgencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none bg-background ${errors.message ? 'border-destructive' : 'border-input'
                    }`}
                  placeholder="Tell us about your dental concerns or questions..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-destructive"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 group disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </div>
                )}
                <motion.div
                  className="absolute inset-0 bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}