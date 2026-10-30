import { Hero } from '@/components/home/Hero'
import { Principles } from '@/components/home/Principles'
import { Treatments } from '@/components/home/Treatments'
import { FirstVisit } from '@/components/home/FirstVisit'
import { Faq } from '@/components/home/Faq'
import { BookingBand } from '@/components/home/BookingBand'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principles />
      <Treatments />
      <FirstVisit />
      <Faq />
      <BookingBand />
    </>
  )
}
