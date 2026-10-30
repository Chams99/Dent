import { TIME_OPTIONS, TREATMENT_OPTIONS, optionLabel, type BookingInput } from './booking'

/** Replaces line breaks and control characters, for text that ends up in a subject line. */
export function singleLine(text: string): string {
  return Array.from(text, (char) => {
    const code = char.charCodeAt(0)
    return code < 32 || code === 127 ? ' ' : char
  })
    .join('')
    .replace(/ {2,}/g, ' ')
    .trim()
}

export function bookingSubject(input: BookingInput): string {
  return singleLine(`Booking request: ${optionLabel(TREATMENT_OPTIONS, input.treatment)}, ${input.name}`).slice(0, 150)
}

export function bookingText(input: BookingInput): string {
  const time = TIME_OPTIONS.find((t) => t.value === input.time)
  return [
    'New booking request from the Dent website.',
    '',
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone || 'not given'}`,
    `Treatment: ${optionLabel(TREATMENT_OPTIONS, input.treatment)}`,
    `Preferred time: ${time ? `${time.label} (${time.hint})` : input.time}`,
    '',
    'Message:',
    input.message || '(none)',
  ].join('\n')
}
