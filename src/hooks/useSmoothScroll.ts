'use client'

import { useEffect, useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const useSmoothScroll = () => {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = useCallback((sectionId: string, offset: number = 80) => {
    const targetElement = document.getElementById(sectionId)
    
    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset
      const offsetTop = elementTop - offset
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      })
    }
  }, [])

  const navigateAndScroll = useCallback((sectionId: string) => {
    if (pathname === '/') {
      // Already on home page, just scroll
      scrollToSection(sectionId)
    } else {
      // Navigate to home page with hash
      router.push(`/#${sectionId}`)
      // Store the target section for when the page loads
      sessionStorage.setItem('scrollToSection', sectionId)
    }
  }, [pathname, router, scrollToSection])

  // Handle scroll to section after navigation
  useEffect(() => {
    const handleRouteChange = () => {
      const targetSection = sessionStorage.getItem('scrollToSection')
      if (targetSection && pathname === '/') {
        // Wait for the page to fully render and animations to complete
        const timer = setTimeout(() => {
          scrollToSection(targetSection)
          sessionStorage.removeItem('scrollToSection')
        }, 400) // Increased delay to ensure page is fully loaded
        
        return () => clearTimeout(timer)
      }
    }

    handleRouteChange()
  }, [pathname, scrollToSection])

  // Handle hash navigation on page load
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1) // Remove the #
      const timer = setTimeout(() => {
        scrollToSection(hash)
        // Clean up the hash from URL after scrolling
        window.history.replaceState(null, '', window.location.pathname)
      }, 600) // Wait for page to fully load
      
      return () => clearTimeout(timer)
    }
  }, [pathname, scrollToSection])

  return {
    scrollToSection,
    navigateAndScroll
  }
}
