export interface Treatment {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  price: number
  duration: string
  image: string
  features: string[]
  isPopular?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  image: string
  treatment: string
}

export interface Doctor {
  id: string
  name: string
  title: string
  bio: string
  image: string
  specialties: string[]
  education: string[]
  experience: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  treatment?: string
  preferredDate?: string
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface HeroSection {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  backgroundImage: string
  videoUrl?: string
}

export interface Stats {
  patients: number
  years: number
  treatments: number
  satisfaction: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  image: string
  tags: string[]
}

export interface AppointmentForm {
  name: string
  email: string
  phone: string
  treatment: string
  preferredDate: string
  preferredTime: string
  message?: string
} 