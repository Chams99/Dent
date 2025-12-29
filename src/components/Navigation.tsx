'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
// usePathname unused
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon, Sparkles, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Treatments', href: 'treatments' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  // pathname unused
  const { navigateAndScroll } = useSmoothScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      // Set new timeout to debounce scroll events
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10)
      }, 10) // 10ms debounce
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault()
    navigateAndScroll(href)
    // Close mobile menu if open
    setIsOpen(false)
  }

  if (!mounted) {
    return null
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'fluent-acrylic border-b border-white/5 shadow-sm py-2'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative z-50">
            <motion.div
              className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 backdrop-blur-sm group-hover:bg-primary/20 transition-all duration-300"
              whileHover={{ rotate: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Dent
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center px-2 py-1 bg-secondary/50 backdrop-blur-md rounded-full border border-white/5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={`/#${item.href}`}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-200"
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <div className="h-6 w-px bg-border/50" />

            {/* CTA Button */}
            <Link href="/contact" className="relative group">
              <div className="absolute -inset-0.5 bg-primary rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative flex items-center bg-background rounded-full px-6 py-2.5 leading-none space-x-2">
                <span className="text-sm font-semibold text-foreground">Book Now</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground/80 hover:bg-accent transition-colors duration-200 relative z-50"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 z-40 fluent-acrylic pt-24"
          >
            <div className="container h-full flex flex-col">
              <div className="flex-1 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <button
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className="block w-full text-left text-3xl font-display font-medium py-4 text-foreground/80 hover:text-primary transition-colors border-b border-border/10"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pb-12 space-y-6"
              >
                <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-2xl border border-white/5">
                  <span className="font-medium">Dark Mode</span>
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-full bg-background border border-border shadow-sm"
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full justify-center text-lg py-6"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 