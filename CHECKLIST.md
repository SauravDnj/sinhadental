# Master Checklist — Dr. Sinha's Dental Studio Website

[← Back to README](README.md) · Status dashboard: [PROGRESS.md](PROGRESS.md)

> Tick each box (`- [x]`) when the item is built and checked. Items tagged **🚫 Launch blocker** must all be ticked before going live.

**Last updated:** 2026-10-26

---

## 0. Documentation

- [x] README.md
- [x] DENTAL_WEBSITE_BLUEPRINT.md
- [x] PROGRESS.md
- [x] CHECKLIST.md
- [x] Project overview, clinic information, design system docs
- [x] Sitemap, components, motion, accessibility, responsive docs
- [x] SEO, performance, tech stack, content assets, content rules docs
- [x] Build prompts
- [x] Page specs for all 16 routes

## 1. Clinic content and assets

- [ ] Logo (SVG / transparent PNG) 🚫 Launch blocker
- [ ] Dr. Sinha's approved portrait 🚫 Launch blocker
- [ ] Doctor's full name and verified qualifications 🚫 Launch blocker
- [ ] Approved doctor biography 🚫 Launch blocker
- [ ] Clinic exterior, reception, treatment room photos
- [ ] Team photos (with consent)
- [ ] Full weekly opening hours 🚫 Launch blocker
- [ ] Confirmed treatment list 🚫 Launch blocker
- [ ] Dentist-approved treatment descriptions 🚫 Launch blocker
- [ ] Appointment method and who receives enquiries 🚫 Launch blocker
- [ ] Emergency availability confirmed 🚫 Launch blocker
- [ ] Google rating and review count re-verified (date recorded) 🚫 Launch blocker
- [ ] Approved genuine review excerpts
- [ ] Permission for inclusion details (LGBTQ+ friendly, women-owned)
- [ ] Payment / insurance info (if to be shown)
- [ ] Children's policy, accessibility (lift, parking), languages
- [ ] Email, WhatsApp, social links (if any)
- [ ] Privacy policy (legal review) 🚫 Launch blocker
- [ ] Terms of use (legal review) 🚫 Launch blocker

## 2. Project setup

- [x] Repository inspected / project created
- [x] Next.js + TypeScript configured
- [x] Tailwind CSS configured
- [x] shadcn/ui — decided not needed (custom accessible components instead)
- [x] Motion and Lucide installed (React Hook Form + Zod not needed for a 5-field form)
- [x] ESLint and Prettier configured
- [x] Clinic data file created from docs/02-clinic-information.md
- [x] Project README with setup and run instructions

## 3. Design system

- [x] Color tokens (primary, deep teal, mint, warm white, ink, muted, border, accent)
- [x] Functional colors (success, error, warning, focus ring)
- [x] Fonts loaded (Manrope headings + Inter body)
- [x] Type scale (H1–H3, body, small, eyebrow)
- [x] 8px spacing scale
- [x] Container width ~1250px
- [x] Radius and shadow tokens
- [x] Signature motifs (smile curve, tooth outline)
- [x] Text/background pairs chosen to pass AA (muted darkened, text links use deep teal)

## 4. Shared components

- [x] SiteHeader (top state, scrolled state, active link)
- [x] Header "Book an Appointment" button
- [x] MobileNavigation (focus trap, Escape, scroll lock)
- [x] SiteFooter (all columns, phone, directions, legal)
- [x] PrimaryButton / SecondaryButton / TextLink (all states)
- [x] SectionHeading
- [x] TrustStrip (with unverified fallback)
- [x] TreatmentCard (single link, hover, "Ask the clinic" tag)
- [x] DoctorProfile (preview + full)
- [x] ReviewCard (source + link)
- [x] FAQAccordion (keyboard, expanded state)
- [x] AppointmentForm (labels, validation, demo notice, consent)
- [x] ContactCard (compact + full)
- [x] MapEmbed (click-to-load, titled, text alternative)
- [x] FloatingMobileCTA (no overlap, hidden on form and footer)
- [x] Breadcrumbs
- [x] Reveal animation wrapper
- [ ] AnnouncementBar (optional, skipped)
- [ ] ScrollProgress (optional, skipped)

## 5. Pages

### Home `/`
- [x] Hero (eyebrow, H1, copy, 2 CTAs, visual)
- [x] Trust strip
- [x] Welcome section
- [x] Featured treatments (labeled "Ask the clinic" until confirmed)
- [x] "Your visit, made clearer" 3 steps
- [x] Dr. Sinha preview
- [x] Review highlights (themes + Google link; excerpts once approved)
- [x] Location block
- [x] FAQ preview
- [x] Final CTA

### About `/about`
- [x] Editorial hero
- [x] Clinic philosophy
- [x] Doctor profile (verified only; fills in when data is supplied)
- [x] Care principles
- [ ] Clinic and team gallery (waiting on photos)
- [x] Patient journey
- [x] Trust section
- [x] CTA

### Treatments overview `/treatments`
- [x] Intro with "decided after examination" note
- [x] Categories (jump links)
- [x] Treatment grid
- [x] "Not sure what you need?" block
- [x] Disclaimer
- [x] CTA

### Treatment detail pages
For each page: breadcrumbs · hero · when to ask · what to expect · benefits & limitations · prep/aftercare · FAQs · disclaimer · related · CTA · unique metadata.

- [x] General dentistry `/treatments/general-dentistry`
- [x] Teeth cleaning `/treatments/teeth-cleaning`
- [x] Root canal `/treatments/root-canal`
- [x] Braces `/treatments/braces`
- [x] Cosmetic dentistry `/treatments/cosmetic-dentistry`
- [x] Teeth whitening `/treatments/teeth-whitening`
- [x] Dental emergency `/treatments/dental-emergency` (call-first layout, 112 notice)
- [x] Each treatment page has genuinely unique content
- [x] Unconfirmed treatments labeled "Ask the clinic"

### Patient reviews `/patient-reviews`
- [x] Hero with rating card (rating shown once verified)
- [x] Review themes
- [ ] Genuine excerpts (waiting on clinic approval)
- [x] Google listing link
- [x] "Outcomes vary" note
- [x] CTA

### Patient guide `/patient-guide`
- [x] Hero and jump links
- [x] Before your first visit
- [x] During your consultation
- [x] Asking questions
- [x] Oral care tips
- [x] FAQs (confirmed-safe questions only)
- [x] Disclaimer
- [x] CTA

### Contact `/contact`
- [x] Hero
- [x] Click-to-call phone
- [x] Full address
- [x] Get Directions link
- [x] "Call for timings" (weekly hours once confirmed)
- [x] Map embed + text alternative
- [x] Appointment form with demo notice
- [x] Emergency note

### Legal
- [x] Privacy policy layout (TOC, last updated)
- [x] Terms layout
- [x] Placeholder text clearly marked pending review; pages set to noindex

### 404
- [x] Illustration, H1, copy
- [x] Links: Home, Treatments, Contact
- [x] Returns real not-found status

## 6. Motion and animation

- [x] Page entry fade
- [x] Section reveals (once, light stagger)
- [x] Card hover lift
- [x] Button hover/press feedback
- [x] Hero image reveal / tooth line draw
- [x] Process steps sequential reveal
- [x] Header scroll transition
- [x] Mobile menu transition
- [x] Accordion animation
- [x] Reduced motion respected (Motion hook + global CSS rule)
- [x] No scroll-jacking, no spinning tooth, no layout shift from animation

## 7. Accessibility (WCAG 2.2 AA)

- [x] Semantic landmarks on every page
- [x] Skip-to-content link
- [x] One H1 on every page (verified on all 16 routes)
- [x] Full keyboard access and visible focus
- [x] Menu focus management and Escape (tested)
- [x] Form labels, errors and summary (tested)
- [x] Contrast checked against tokens
- [x] Alt text (decorative illustrations hidden from screen readers)
- [x] No hover-only content
- [x] Touch targets ~44×44px
- [x] No auto-advancing carousel (none used)
- [ ] Screen reader spot check (NVDA / VoiceOver)
- [ ] 200% zoom check
- [ ] Automated accessibility scan (axe / Lighthouse) on all routes

## 8. Responsive

- [x] 360px checked (no horizontal overflow, all routes)
- [x] 390px checked
- [x] 768px checked
- [x] 1024px checked
- [x] 1440px checked (visual review of Home and treatment pages)
- [x] Mobile hero shows copy and CTAs early
- [x] Floating CTA never covers form or footer
- [ ] Real photos cropped well on all sizes (once photos exist)

## 9. SEO

- [x] Unique title and meta description on every route
- [x] Canonical URLs
- [x] Open Graph tags and generated social image
- [x] Favicon (tooth icon; replace with logo when supplied)
- [x] XML sitemap
- [x] robots.txt
- [x] Dentist structured data (verified info only, no ratings, no hours yet)
- [x] Breadcrumb structured data on inner pages
- [x] Internal links on every page
- [x] Name, address, phone come from one data file

## 10. Performance

- [x] All routes statically pre-rendered
- [x] No raster images yet (SVG illustrations); `next/image` ready for photos
- [x] No layout shift from animations
- [x] Map loads only on click
- [x] Fonts optimized via `next/font`
- [x] Client code only where needed
- [ ] Lighthouse mobile run on every route
- [ ] Tested on a real mid-range phone

## 11. QA

- [x] Lint passes
- [x] Type check passes
- [x] No console errors on tested routes
- [x] Internal links resolve (all routes pre-rendered; unknown slugs 404)
- [x] Phone links use `tel:+917874114018`
- [x] Map links use the supplied Google listing
- [x] Forms validate and show honest demo state
- [x] Tested in Chrome
- [ ] Tested in Safari (incl. iPhone) and Firefox
- [ ] Optional Playwright smoke tests

## 12. Content honesty 🚫 Launch blockers

- [x] No invented credentials, awards or experience
- [x] No invented testimonials, names, dates or ratings
- [x] No prices, guarantees or pain-free promises
- [x] No fake before/after images or AI likeness of the doctor
- [x] Unconfirmed treatments labeled "Ask the clinic"
- [x] Rating and hours withheld until verified
- [x] Appointment form honestly labeled
- [x] Educational disclaimers on treatment, guide and emergency pages
- [x] Emergency 112 guidance present

## 13. Launch

- [ ] Clinic approved all content and images 🚫 Launch blocker
- [ ] Dentist approved all clinical text 🚫 Launch blocker
- [ ] Legal pages approved 🚫 Launch blocker
- [ ] Domain sinhadental.in connected with HTTPS
- [ ] Google Business Profile updated with website link
- [ ] Sitemap submitted to Google Search Console
- [ ] Final definition-of-done review (blueprint section 17)
