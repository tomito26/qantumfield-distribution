# SEO / AEO Audit — Quantumfield Distribution

_Audit + implementation record for making the brand recognizable across search
engines and AI answer engines (Google SGE, ChatGPT, Perplexity, Gemini)._

Production domain: **https://quantumfielddistribution.com**

---

## 1. Executive summary

The site had **strong on-page fundamentals** but **no discoverability
infrastructure** — the layer that lets search engines and AI models identify,
trust, and surface the brand. This pass implemented that entire layer in code.

What was already good (kept): one real `<h1>` per page, `next/image` everywhere
(zero raw `<img>`) with alt text, per-page metadata on About + all service pages,
`metadataBase` + title template + OpenGraph/Twitter configured, clean route
structure, and a single content source of truth in `lib/constants.ts`.

---

## 2. Findings & what was done

| # | Finding (before) | Severity | Status |
|---|------------------|----------|--------|
| 1 | No `sitemap.xml` / `robots.txt` — engines had no crawl map | High | ✅ `app/sitemap.ts`, `app/robots.ts` |
| 2 | Zero structured data (no JSON-LD) — no rich results, weak entity/AEO signals | High | ✅ Organization/LocalBusiness, WebSite, Service, BreadcrumbList, FAQPage |
| 3 | No OG/Twitter image — blank, unbranded link previews | High | ✅ `app/opengraph-image.tsx` + `app/twitter-image.tsx` (branded, dynamic) |
| 4 | No canonical URLs — duplicate-content risk | Med | ✅ `alternates.canonical` on every page |
| 5 | Homepage (`app/page.tsx`) had no metadata | Med | ✅ Added description + canonical + FAQ schema |
| 6 | No web app manifest (PWA/theme metadata) | Med | ✅ `app/manifest.ts` (reuses existing `app/icon.png` 512² + `app/apple-icon.png` 180²) |
| 7 | No FAQ content / FAQPage schema — missed the biggest AEO lever | High | ✅ Home FAQ section + FAQPage JSON-LD |
| 8 | No AI-model-facing summary | Med | ✅ `public/llms.txt` |
| 9 | NAP incomplete (address = "Nairobi, Kenya" only; Gmail address) | Med | ⚠️ Placeholders wired — see §4 |
| 10 | Footer socials all `href="#"`; no `sameAs` | Med | ⚠️ Off-site — see §5 |
| 11 | No analytics / Search Console verification | Med | ⚠️ Verification slot added; off-site steps in §5 |
| 12 | Service titles generic | Low | ✅ Light keyword tuning (no stuffing) |

---

## 3. What was implemented (files)

**New**
- `lib/site.ts` — central brand/SEO/NAP config (single source of truth).
- `lib/schema.ts` — JSON-LD builders (Organization/LocalBusiness, WebSite, Service, BreadcrumbList, FAQPage).
- `components/seo/json-ld.tsx` — renders `<script type="application/ld+json">`.
- `components/seo/service-schema.tsx` — Service + Breadcrumb wiring for service pages.
- `components/home-page/libs/faq-section.tsx` — on-page FAQ accordion (AEO).
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`.
- `app/opengraph-image.tsx`, `app/twitter-image.tsx` (branded, dynamic; existing `app/icon.png` / `app/apple-icon.png` kept).
- `public/llms.txt`.

**Modified**
- `app/layout.tsx` — Organization + WebSite JSON-LD site-wide, keywords, canonical, publisher, verification slot.
- `app/page.tsx` — homepage metadata + FAQPage JSON-LD.
- `app/(routes)/about/page.tsx` — canonical + BreadcrumbList.
- The 4 service pages — canonical, Service + Breadcrumb schema, tuned titles/descriptions.
- `components/home-page/home.tsx` — renders the FAQ section.

**Conventions honored:** `app/` files stay thin; UI in `components/`; `@/*` alias;
brand token `#0C4E1A`; Server Components (schema/OG are server-only).

---

## 4. ⚠️ Placeholders to confirm before publishing

All live in `lib/site.ts`, tagged `// TODO(seo)`. Structured data intentionally
**omits** these fields until filled, so nothing false is published. Fill them and
the schema enriches automatically:

- **Street address + postal code** — real address makes LocalBusiness far more competitive locally.
- **Geo coordinates** (lat/lng) — from the Google Maps place listing.
- **Founding year** — schema currently guesses `2004` from the "20+ years" claim; confirm.
- **Company registration number.**
- **Certifications** — the site says "international standards"; list the concrete ones (e.g. ISO 14001, NEMA licence no.).
- **Business email** — currently a `@gmail.com`; move to a domain address (e.g. `info@quantumfielddistribution.com`) for trust.
- **Social profile URLs** (`sameAs`) — see §5.
- **Google Search Console token** — commented slot in `app/layout.tsx`.

---

## 5. Off-site brand-recognition checklist (code can't do these)

Ranked by impact on being recognized in the digital space:

1. **Google Business Profile** — create + verify for the Nairobi location. Single biggest local-visibility and brand-panel win; also feeds Google Maps.
2. **Google Search Console** — verify the domain (token slot ready), then submit `https://quantumfielddistribution.com/sitemap.xml`. Bing Webmaster Tools too.
3. **Official social profiles** — stand up LinkedIn, Facebook, Instagram, X with consistent name/logo/NAP; paste URLs into `siteConfig.sameAs` and the footer (currently `#`). Consistency across profiles is what builds the brand's entity graph.
4. **Domain email** — replace the Gmail address across site + profiles.
5. **Analytics (GA4)** — add a measurement ID to track acquisition and conversions.
6. **Content / topical authority** — a small Insights/blog hub answering real questions (e-waste rules in Kenya, cutting business waste cost, recycling compliance) compounds SEO + AEO over time and gives AI engines more to cite.
7. **Citations / directories** — consistent NAP listings (local business directories, industry bodies) reinforce trust.
8. **Reviews** — gather Google reviews; consider AggregateRating schema once real reviews exist (do not fabricate).

---

## 6. Verification performed

- `npm run build` compiles; metadata routes generate.
- Generated routes resolve: `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`, `/twitter-image`, `/icon`, `/apple-icon`, `/llms.txt`.
- `view-source` shows `application/ld+json` blocks with the expected `@type`s on `/`, `/about`, and service pages.
- Recommended external validation: Google Rich Results Test + schema.org validator (paste built HTML), and a Lighthouse SEO run (target 100).
