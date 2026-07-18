# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing website for Quantumfield Distribution Ltd, an eco-management / waste
management company. Built with Next.js 15 (App Router), React 19, TypeScript,
and Tailwind CSS. Static, content-driven site — there is no backend or database.

## Commands

```bash
npm run dev     # dev server with Turbopack at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint (ESLint, eslint-config-next)
```

There is no test suite configured. Use `package-lock.json` (npm); `yarn.lock`
has been removed.

## Architecture

Routing uses the App Router with **route groups** (parenthesized dirs that don't
affect the URL):

- `app/layout.tsx` — root layout; wraps every page with `<Navbar>` and
  `<Footer>`, loads Geist fonts, and defines site-wide `metadata` (title
  template `%s | Quantumfield Distribution`).
- `app/(routes)/(services)/layout.tsx` — shared layout for all four service
  pages, rendering `ServiceHeroSection` + `ServiceSidebar` around the page
  content. Adding a service page automatically inherits this chrome.
- `app/(routes)/(services)/<service>/page.tsx` — thin page files. Each just
  exports page-level `metadata` and renders a single component from
  `components/services/<service>/`. Real markup lives in `components/`, not in
  `app/`.

Pattern: **`app/` files stay thin** (route wiring + metadata); all UI is
implemented under `components/`, organized by page/feature:
- `components/home-page/`, `components/about-page/`, `components/services/`
- `components/navigation/` (navbar, footer)
- `components/forms/` (contact form)
- `components/ui/` — shadcn/ui-style primitives (button, input, form, label,
  textarea, dropdown-menu) built on Radix + class-variance-authority.
- Feature-local helpers go in a nested `libs/` (or `lib/`) folder, e.g.
  `components/services/libs/`, `components/home-page/libs/`.

`lib/constants.ts` is the single source of truth for site content: nav `links`,
`our_services`, `services` list, etc. Update navigation and service listings
here rather than hardcoding in components.

## Conventions

- Import alias `@/*` maps to the repo root (e.g. `@/components/...`,
  `@/lib/utils`).
- `cn()` from `lib/utils.ts` (clsx + tailwind-merge) is the standard helper for
  conditional/merged class names.
- Components are Server Components by default; add `"use client"` only when a
  component needs interactivity (state, animation, forms). Interactive ones
  (forms, animated sections, navbar) already declare it.
- Animations use the `motion` package (Framer Motion's successor) — import from
  `motion/react`, in client components.
- Forms use react-hook-form + zod via `@hookform/resolvers`, with the
  `components/ui/form.tsx` primitives. Note: the contact form
  (`components/forms/contact-us-form.tsx`) has **no backend** — submit is
  stubbed (`console.log` + fake delay). Wire a real endpoint before relying on it.

## Styling

Tailwind config (`tailwind.config.ts`) defines the design system:
- Brand color `brand` (`#0C4E1A`, with `.dark`/`.light` variants) plus a large
  custom color palette (`monochrome`, `body-gray`, `success`, etc.). Prefer
  these named tokens over raw hex.
- Custom breakpoints extend well beyond default: `xl` through `5xl` (1310px–
  1670px) for wide screens.
- Custom component classes live in `app/globals.css` under `@layer components`.
  The key one is `.page-x` — the standard responsive horizontal page padding;
  use it for full-width sections instead of ad-hoc padding.
- HSL CSS variables (shadcn theme tokens) are defined in `globals.css`; dark
  mode is class-based (`darkMode: ["class"]`).
