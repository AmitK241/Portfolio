# Amit Kumar — Portfolio

A production-ready developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

**Design concept:** a "systems dashboard" — a live status bar, a boot-sequence hero, and project cards styled as deployed services with status pills. The idea ties directly to the kind of work in the projects section: async pipelines, uptime, and production reliability.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling (custom design tokens in `tailwind.config.ts`)
- **Framer Motion** for scroll-triggered and load animations
- **lucide-react** for icons
- Self-hosted fonts via `@fontsource` (Space Grotesk, Inter, JetBrains Mono) — no external font requests at build or runtime, so it builds cleanly even without access to Google Fonts

> Note on shadcn/ui: the brief asked for shadcn/ui, but this build hand-rolls small, dependency-free primitives in `components/ui.tsx` (`SectionHeading`, `Badge`, `StatusPill`) in the same spirit — plain Tailwind, no Radix/shadcn CLI scaffolding. If you want the actual shadcn/ui component library wired in, run `npx shadcn@latest init` and swap these primitives for generated ones.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Every piece of copy on the site — bio, skills, projects, timeline, education, achievements, socials — lives in **`lib/data.ts`**. Edit that one file to update the whole site; no need to touch component code for content changes.

To add a new project, add an entry to the `projects` array in `lib/data.ts` with a unique `slug`.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css         Design tokens, base styles, grid background
components/
  StatusBar.tsx       Fixed live status strip (signature element)
  Nav.tsx             Scroll-spy navigation
  Hero.tsx            Boot-sequence hero panel
  About.tsx
  Skills.tsx          Stack matrix + proficiency bars
  Projects.tsx        Project "service" cards
  Timeline.tsx        Hackathon / experience timeline
  EducationAndAchievements.tsx
  CurrentFocus.tsx    Currently learning / building
  Contact.tsx
  Footer.tsx
  ui.tsx              Shared primitives (SectionHeading, Badge, StatusPill)
lib/
  data.ts             ALL site content lives here
```

## Deployment

The fastest path is **Vercel** (built by the same team as Next.js):

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Deploy.

Alternatively:

```bash
npm run build
npm run start
```

works on any Node host (Render, Railway, a VPS, etc.).

## Before you ship

- [ ] Swap `resumeUrl: "#"` in `lib/data.ts` for a real hosted resume link (or add a `resume.pdf` to `public/` and point to `/resume.pdf`)
- [ ] Set a real domain in `app/layout.tsx` (`siteUrl`) for correct Open Graph / canonical URLs
- [ ] Add a proper OG image (`public/og-image.png`, 1200×630) and reference it in `metadata.openGraph.images`
- [ ] Add a `favicon.ico` / `icon.png` to `app/` (Next.js picks these up automatically)
- [ ] DocuMind links to your GitHub profile rather than a specific repo — update it in `lib/data.ts` once it has its own public repo URL
- [ ] Wire the "Get in touch" mail link to whichever inbox you check for placements
