# Dent

Website for Dent, a fictional dental studio: treatments with starting prices, what happens at a first visit, common questions and an online booking form that emails each request to the clinic. Live at [dent-phi.vercel.app](https://dent-phi.vercel.app).

The clinic, its prices and its contact details are placeholders (555-01xx phone numbers and an `.example` email address), and the site says so in its footer and next to the booking form.

## Pages

- **Home** (`/`): treatments and prices, the first-visit steps, questions, opening hours and location.
- **Book a visit** (`/contact/`): the booking form with phone, email, address and hours. Treatment cards link here with the treatment already chosen (`/contact/?treatment=aligners`).
- **Privacy** (`/privacy/`) and **Accessibility** (`/accessibility/`).

All clinic content lives in `src/data/clinic.ts`.

## Booking form

`src/app/api/booking/route.ts` validates each request with the same Zod schema as the form (`src/lib/booking.ts`) and sends a plain-text email through [Resend](https://resend.com), with the visitor as reply-to. It rejects malformed, oversized and non-JSON requests, quietly drops submissions that fill a hidden decoy field, times out after 10 seconds and never shows provider errors to visitors.

The form also works without JavaScript: the browser posts it to the same route, which redirects to `/contact/sent/` or answers with a short error page.

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `BOOKING_TO_EMAIL` | Where booking requests are delivered |
| `BOOKING_FROM_EMAIL` | Sender on a domain verified in Resend, e.g. `Dent <bookings@yourdomain.com>` |

Without them the site works normally and the form explains that online booking isn't connected yet. Set them in Vercel under Project Settings → Environment Variables, or copy `.env.example` to `.env.local` for local development.

## Stack

Next.js 15 (App Router), React 18, TypeScript, Tailwind CSS 3, Zod, Lucide icons and Vitest. The Figtree font is self-hosted through `next/font`. Photos are from [Unsplash](https://unsplash.com) and live in `src/assets/`.

## Development

Requires Node.js 20.9 or later and pnpm.

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm test         # Vitest: schema, email text and booking route
pnpm lint
pnpm build
```

## Project structure

```
src/
├── app/            # pages, metadata and the booking route
├── components/     # header, footer, booking form and home page sections
├── data/clinic.ts  # treatments, prices, hours, questions
├── lib/            # booking schema and email text
└── assets/         # photos
tests/              # Vitest tests
```

## Deployment

Deployed on Vercel from the `main` branch.
