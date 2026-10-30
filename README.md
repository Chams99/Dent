# Dent

Website for a dental clinic: a hero with video, services, treatments, patient testimonials, a booking form and a contact page, in light and dark themes. Live at [dent-phi.vercel.app](https://dent-phi.vercel.app).

The booking and contact forms validate input and confirm on screen, but they do not send messages anywhere.

## Stack

- Next.js 15 (App Router), React 18 and TypeScript
- Tailwind CSS 3 and Framer Motion
- React Hook Form with Zod validation
- next-themes for light and dark mode, Lucide icons and Sonner notifications

## Getting started

Requires Node.js 18.18 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Scripts

- `pnpm dev`: development server
- `pnpm build`: production build
- `pnpm start`: serve the production build
- `pnpm lint`: ESLint
- `pnpm type-check`: TypeScript check

## Project structure

```
src/
├── app/
│   ├── layout.tsx       # metadata, fonts and theme provider
│   ├── page.tsx         # home page
│   ├── contact/         # contact page
│   └── globals.css
├── components/          # navigation, hero, services, testimonials, forms, footer
├── hooks/               # smooth scrolling
├── lib/                 # utilities
└── types/
public/                  # icons, preview image, hero video, sitemap and robots.txt
```

## Deployment

Deployed on Vercel from the `main` branch.
