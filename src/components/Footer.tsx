'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Sparkles, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Teeth Whitening', href: '/services/teeth-whitening' },
    { name: 'Invisalign', href: '/services/invisalign' },
    { name: 'Cosmetic Dentistry', href: '/services/cosmetic' },
    { name: 'Dental Implants', href: '/services/implants' },
  ],
  company: [
    { name: 'About Us', href: 'about', isScroll: true },
    { name: 'Our Team', href: '/team' },
    { name: 'Testimonials', href: 'treatments', isScroll: true },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Book Appointment', href: '/contact' },
    { name: 'Emergency Care', href: '/emergency' },
    { name: 'Insurance', href: '/insurance' },
    { name: 'Payment Plans', href: '/payment' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Notice', href: '/hipaa' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
}

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
]

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(href)

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-background relative overflow-hidden border-t border-border/40">
      {/* Background Pattern */}
      <div className="container relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-b border-gray-700"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-medium">Stay Updated</span>
            </motion.div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Get Dental Health Tips & Special Offers
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for expert dental advice, oral health tips, and exclusive treatment offers.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <motion.button
                className="btn-primary px-6 py-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6 group">
                  <motion.div
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                    whileHover={{ rotate: 5 }}
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="font-display text-2xl font-bold group-hover:text-primary transition-colors duration-200">Dent</span>
                </Link>

                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Transform your smile with our premium dental care services.
                  We&apos;re committed to providing exceptional care in a comfortable,
                  modern environment with cutting-edge technology.
                </p>

                {/* Contact Info */}
                <div className="space-y-4">
                  <motion.div
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors font-medium">
                        (123) 456-7890
                      </a>
                      <p className="text-sm text-gray-400">Mon-Fri 8AM-6PM</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <a href="mailto:info@dent.com" className="text-gray-300 hover:text-white transition-colors font-medium">
                        info@dent.com
                      </a>
                      <p className="text-sm text-gray-400">24/7 support</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200 mt-0.5">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-gray-300 font-medium">Visit Our Clinic</span>
                      <p className="text-sm text-gray-400">
                        123 Dental Street<br />
                        Suite 100, City, State 12345
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-300 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          aria-label={social.name}
                          className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200 group"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors duration-200" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 group flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link.isScroll ? (
                      <a
                        href={`#${link.href}`}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-pointer group flex items-center"
                      >
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-primary transition-colors duration-200 group flex items-center"
                      >
                        {link.name}
                        <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors duration-200 group flex items-center"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 py-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright & Legal */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Dent. All rights reserved.
              </div>
              <div className="flex space-x-6">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="text-center lg:text-right"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-gray-400 text-sm mb-3">
                Ready to transform your smile?
              </div>
              <Link
                href="/contact"
                className="btn-primary group"
              >
                <span className="flex items-center">
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}