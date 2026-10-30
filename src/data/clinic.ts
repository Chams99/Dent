// Content for Dent, a fictional clinic used to demonstrate this website.
// Contact details use reserved placeholder values: 555-01xx numbers and the .example domain.

export const clinic = {
  name: 'Dent',
  tagline: 'Dental studio',
  phone: '+1 (555) 010-0142',
  phoneHref: 'tel:+15550100142',
  email: 'hello@dent.example',
  address: ['120 Example Avenue', 'Springfield'],
  demoNote: 'Dent is a fictional clinic. This website is a design and development demo, and its contact details are placeholders.',
}

export const hours = [
  { days: 'Monday to Thursday', time: '8:00 to 19:00' },
  { days: 'Friday', time: '8:00 to 16:00' },
  { days: 'Saturday', time: '9:00 to 13:00' },
  { days: 'Sunday', time: 'Closed' },
]

export interface Treatment {
  id: string
  name: string
  summary: string
  includes: string[]
  duration: string
  priceFrom: number
}

export const treatments: Treatment[] = [
  {
    id: 'check-up',
    name: 'Check-up and cleaning',
    summary: 'A full examination, a professional clean and advice you can actually use at home.',
    includes: ['Examination and gum health check', 'Scale and polish', 'X-rays when needed'],
    duration: '45 minutes',
    priceFrom: 120,
  },
  {
    id: 'whitening',
    name: 'Teeth whitening',
    summary: 'In-clinic or take-home whitening, planned around sensitivity and the shade you want.',
    includes: ['Shade assessment', 'Custom trays for home use', 'Follow-up check'],
    duration: '2 visits',
    priceFrom: 290,
  },
  {
    id: 'aligners',
    name: 'Clear aligners',
    summary: 'Discreet aligners to straighten teeth, with a digital plan you can see before you start.',
    includes: ['3D scan and treatment preview', 'Aligner sets and refinements', 'Retainers at the end'],
    duration: '6 to 18 months',
    priceFrom: 3200,
  },
  {
    id: 'cosmetic',
    name: 'Bonding and veneers',
    summary: 'Repair chips, close small gaps and even out shape and colour, from bonding to porcelain veneers.',
    includes: ['Smile design consultation', 'Composite bonding', 'Porcelain veneers'],
    duration: '1 to 3 visits',
    priceFrom: 250,
  },
  {
    id: 'implants',
    name: 'Dental implants',
    summary: 'A fixed, natural-looking replacement for a missing tooth, planned with 3D imaging.',
    includes: ['CT scan and planning', 'Implant placement', 'Crown fitting'],
    duration: '3 to 6 months',
    priceFrom: 2900,
  },
  {
    id: 'emergency',
    name: 'Emergency appointments',
    summary: 'Same-day slots for pain, swelling, broken teeth and lost fillings.',
    includes: ['Same-day assessment', 'Pain relief', 'Temporary or permanent repair'],
    duration: '30 to 60 minutes',
    priceFrom: 90,
  },
]

export const visitSteps = [
  { title: 'Book online', text: 'Pick a treatment and a time of day. You get a reply to confirm the exact slot.' },
  { title: 'Check-up and X-rays', text: 'We look at your teeth and gums and talk through anything that bothers you.' },
  { title: 'A clear plan', text: 'You get the options, the timeline and the full cost in writing before anything starts.' },
  { title: 'Treatment and aftercare', text: 'Treatment at your pace, with a follow-up and simple instructions for home.' },
]

export const principles = [
  { title: 'Costs before treatment', text: 'Every plan comes with a written estimate. No surprises on the day.' },
  { title: 'Gentle with nervous patients', text: 'Longer appointments, breaks when you need them, and nothing done without asking.' },
  { title: 'Evenings and Saturdays', text: 'Appointments until 19:00 four days a week and Saturday mornings.' },
]

export const faqs = [
  {
    q: 'Do you see new patients?',
    a: 'Yes. Book a check-up and mention anything you would like looked at, and the first visit is planned around it.',
  },
  {
    q: 'I am nervous about the dentist. What can you do?',
    a: 'Tell us when you book. We allow extra time, explain each step before it happens, and you can pause whenever you want.',
  },
  {
    q: 'Do you treat children?',
    a: 'Yes, from their first teeth. Short, friendly visits help children get used to the dentist early.',
  },
  {
    q: 'Can I spread the cost of treatment?',
    a: 'For treatments over 1,000 dollars you can split the cost into monthly payments. The plan is agreed before treatment starts.',
  },
  {
    q: 'What should I do in a dental emergency?',
    a: 'Call as early in the day as you can. Same-day emergency slots are kept free for pain, swelling and broken teeth.',
  },
  {
    q: 'Are the prices on this site real?',
    a: 'They are indicative prices for this demo clinic, to show how a price list could look. Dent is a fictional practice.',
  },
]

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`
}
