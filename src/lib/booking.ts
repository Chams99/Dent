import { z } from 'zod'
import { treatments } from '@/data/clinic'

export const TREATMENT_OPTIONS = [
  ...treatments.map((t) => ({ value: t.id, label: t.name })),
  { value: 'not-sure', label: 'Not sure yet, or a question' },
]

export const TIME_OPTIONS = [
  { value: 'morning', label: 'Morning', hint: '8:00 to 12:00' },
  { value: 'afternoon', label: 'Afternoon', hint: '12:00 to 16:00' },
  { value: 'evening', label: 'Evening', hint: '16:00 to 19:00' },
  { value: 'saturday', label: 'Saturday', hint: '9:00 to 13:00' },
]

const treatmentValues = TREATMENT_OPTIONS.map((t) => t.value) as [string, ...string[]]
const timeValues = TIME_OPTIONS.map((t) => t.value) as [string, ...string[]]

export const LIMITS = { name: 100, email: 160, phone: 30, message: 1500 }

/** Shared by the booking form and the /api/booking route. */
export const bookingSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name').max(LIMITS.name, 'Keep your name under 100 characters'),
  email: z.string().trim().email('Enter an email address like name@example.com').max(LIMITS.email, 'This email address is too long'),
  phone: z
    .string()
    .trim()
    .max(LIMITS.phone, 'This phone number is too long')
    .regex(/^[+\d\s().-]*$/, 'Use digits, spaces and + ( ) - only')
    .optional()
    .default(''),
  treatment: z.enum(treatmentValues, { errorMap: () => ({ message: 'Choose a treatment' }) }),
  time: z.enum(timeValues, { errorMap: () => ({ message: 'Choose a time of day' }) }),
  message: z.string().trim().max(LIMITS.message, 'Keep your message under 1,500 characters').optional().default(''),
})

export type BookingInput = z.infer<typeof bookingSchema>
export type BookingField = keyof BookingInput

export const BOOKING_FIELDS: BookingField[] = ['name', 'email', 'phone', 'treatment', 'time', 'message']

export type BookingErrorCode =
  | 'invalid'
  | 'invalid_json'
  | 'unsupported_media_type'
  | 'too_large'
  | 'not_configured'
  | 'delivery_failed'
  | 'timeout'

export function optionLabel(options: { value: string; label: string }[], value: string): string {
  return options.find((o) => o.value === value)?.label ?? value
}
