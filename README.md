# Assigners.com

B2B marketing site for Assigners — web form leads, warm transfers, inbound calls, and a lead revenue-share program, powered by Quality Score LLC. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint

## Project Structure

```
app/                          Routes (App Router)
  api/sales-inquiry/            Buyer/partner intake form submission endpoint
  api/consumer-lead/             Consumer lead-capture endpoint (Learning Center)
  warm-transfers, inbound-calls,
  webform-leads, revenue-share/  Solution pages
  industries/, coverage/         Industry + state coverage pages (SEO hierarchy)
  learning-center/                Consumer cost-guide hierarchy (industry → category → article)
  tactical-wisdom/                Buyer/partner education articles
  case-studies/, about/, contact/,
  talk-to-sales/, partners/,
  compliance/, sitemap/           Marketing + legal pages
  privacy-policy/, terms/, tcpa/,
  ccpa/, dnc/, aba-disclaimer/,
  do-not-sell-my-info/,
  lead-credit-policy/             Legal/compliance pages
components/
  layout/                        Navbar, Footer, Logo
  sections/                      Hero, ProductTemplate, IndustryTabs, IndustryCard, CoverageCalculator, CTABand, illustrations, etc.
  forms/                         BuyerIntakeForm, ConsumerLeadForm (React Hook Form + Zod)
  ui/                            Button, Container, SectionLabel, KeywordChip, Faq, illustrations
  seo/                           JSON-LD helper
lib/
  constants.ts                   Site config, nav, industries
  products.ts                    Warm Transfers / Inbound Calls / Web Form Leads content
  validation.ts                  Zod schemas for both forms
  cost-estimator.ts, cost-data/  Learning Center cost-guide content by industry
  guides.ts                      Tactical Wisdom articles
  structured-data.ts, metadata.ts, og-image.tsx   SEO helpers
  us-states.ts, state-articles.ts Coverage-by-state data
public/logo/                    Logo assets (full, compact, wordmark, icon — transparent PNGs)
```

## Form Delivery

Both forms (`BuyerIntakeForm` and `ConsumerLeadForm`) are fully wired to their API routes, which validate with Zod and attempt delivery via [Resend](https://resend.com). **Without `RESEND_API_KEY` set, submissions are still accepted and validated but only logged to the server console — not emailed anywhere.** Set the Resend variables in `.env.local` (or your hosting provider's env settings) before relying on this in production.

## Environment Variables

See `.env.example`. Copy to `.env.local` and fill in before deploying. At minimum, set `RESEND_API_KEY` (and verify a sending domain in Resend) so form submissions actually get delivered.

## Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Deploy — no additional build configuration is required.

## Known Gaps Before Launch

- `RESEND_API_KEY` isn't set anywhere yet — see "Form Delivery" above.
- No analytics or ad-conversion tracking (GA4, Meta Pixel, etc.) is installed.
- Logo assets are transparent PNGs only; a vector (SVG) version isn't available yet.

## Attribution

The clickable US states map (`lib/us-states.ts` / `lib/state-articles.ts`) is derived from ["Blank US Map (states only)"](https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg) on Wikimedia Commons, released under CC0 (public domain).
