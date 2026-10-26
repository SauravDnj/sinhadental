# 11 — Tech Stack and Project Structure

[← Back to README](../README.md)

> Reference for the build phase. No code is written in the documentation phase.

## Recommended stack

| Purpose | Technology | Why |
|---|---|---|
| Framework and routing | Next.js (App Router) + TypeScript | Multi-page routing, metadata, performance |
| Styling | Tailwind CSS | Design tokens and consistent responsive spacing |
| Accessible primitives | shadcn/ui + Radix UI | Dialogs, accordions, menus with built-in accessibility; restyled to the brand |
| Animation | Motion for React | Viewport reveals, stagger, menu transitions with reduced-motion support |
| Icons | Lucide React | Consistent line icons |
| Forms | React Hook Form + Zod | Client-side validation only (Phase 1) |
| Carousel (optional) | Embla Carousel | Touch and keyboard friendly reviews/gallery |
| Images | Next.js Image | Responsive, optimized images |
| Tests (optional) | Playwright | Route and responsive smoke tests |
| Code quality | ESLint + Prettier | Consistent, clean code |
| Hosting (to decide) | Vercel or similar | Easy Next.js deployment; domain `sinhadental.in` |

### Rules

- If a project already exists, inspect it first and use its stack.
- Install only what's needed. One animation library, one component kit.
- Check current official docs and version compatibility at install time.
- No secrets in frontend environment variables.

## Planned folder structure

```
src/
  app/
    layout              Shared shell (header, footer, fonts, metadata)
    page                Home
    about/
    treatments/
      general-dentistry/
      teeth-cleaning/
      root-canal/
      braces/
      cosmetic-dentistry/
      teeth-whitening/
      dental-emergency/
    patient-reviews/
    patient-guide/
    contact/
    privacy-policy/
    terms/
    not-found           404 page
    globals             Global styles and tokens
  components/
    layout/             site-header, site-footer, mobile-navigation, breadcrumbs
    ui/                 button, section-heading, reveal
    dental/             treatment-card, doctor-profile, review-card, faq-accordion,
                        appointment-form, contact-card, map-embed
  data/
    clinic              Verified clinic facts (name, address, phone, hours, links)
    treatments          Treatment content
    faqs                FAQ content
    reviews             Approved review excerpts
  lib/
    metadata            Shared SEO helpers
    utils               Small helpers
public/
  images/               Optimized photos
  icons/                Favicon set, social image
```

## Data-first content

All clinic facts and content live in the `data/` files, so a phone number or hours change is made **once** and appears everywhere (header, footer, contact page, structured data). The values come from [02-clinic-information.md](02-clinic-information.md).

## Build stages

1. Inspect the repo and write a short plan.
2. Set up tokens and the shared layout (header, footer, mobile nav).
3. Build the Home page.
4. Build every remaining route.
5. Add motion and responsive polish.
6. Run lint and type checks and fix errors.
7. Test routes and key interactions.

Progress for each stage is tracked in [PROGRESS.md](../PROGRESS.md).
