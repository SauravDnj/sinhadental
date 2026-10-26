# 09 — SEO and Local Discoverability

[← Back to README](../README.md)

## Principles

- Write for patients first; search engines second.
- Use local phrases naturally. No keyword stuffing.
- Every fact in metadata and structured data must be accurate, visible on the page and verified.
- No promises of rankings or SEO results.

## Target phrases (use naturally)

| Primary | Secondary |
|---|---|
| dentist in Palanpur, Surat | dental clinic in Surat |
| dental clinic in Palanpur | root canal treatment in Surat |
| Dr. Sinha's Dental Studio | braces in Surat |
| | teeth cleaning in Palanpur |
| | teeth whitening in Surat |
| | emergency dentist in Surat |

## Page metadata (drafts, refine during content writing)

Titles should stay under ~60 characters and descriptions under ~155.

| Route | Title | Meta description |
|---|---|---|
| `/` | Dr. Sinha's Dental Studio · Dentist in Palanpur, Surat | Calm, clearly explained dental care in Palanpur, Surat. Call +91 78741 14018 or request an appointment. |
| `/about` | About Dr. Sinha's Dental Studio · Palanpur, Surat | Meet the clinic and our patient-first approach to comfortable, clearly explained dental care. |
| `/treatments` | Dental Treatments · Dr. Sinha's Dental Studio | Explore dental treatments, from check-ups and cleaning to braces and cosmetic care, in Palanpur, Surat. |
| `/treatments/general-dentistry` | General Dentistry in Palanpur, Surat | Check-ups, consultations and everyday dental care. Learn what to expect and request an appointment. |
| `/treatments/teeth-cleaning` | Professional Teeth Cleaning in Palanpur, Surat | Learn how professional cleaning supports healthy teeth and gums, and what a visit involves. |
| `/treatments/root-canal` | Root Canal Treatment in Surat · Dr. Sinha's | Plain-language guide to root canal treatment: when it's considered and what to expect. |
| `/treatments/braces` | Braces and Orthodontic Consultation in Surat | Thinking about braces? Learn about orthodontic consultations and what the process involves. |
| `/treatments/cosmetic-dentistry` | Cosmetic Dentistry in Palanpur, Surat | Learn about cosmetic dental options and how a consultation helps you decide. |
| `/treatments/teeth-whitening` | Teeth Whitening Consultation in Surat | Find out whether teeth whitening may suit you and what a consultation covers. |
| `/treatments/dental-emergency` | Dental Emergency in Surat · Call Dr. Sinha's | Tooth pain, a broken tooth or swelling? Call +91 78741 14018 and read what to do first. |
| `/patient-reviews` | Patient Reviews · Dr. Sinha's Dental Studio | Read what patients say about their visits, and see all reviews on Google. |
| `/patient-guide` | Patient Guide · Your First Dental Visit | What to bring, what to expect and answers to common questions before your visit. |
| `/contact` | Contact and Directions · Dr. Sinha's Dental Studio | Address, phone, directions and appointment requests for our clinic in Palanpur, Surat. |
| `/privacy-policy` | Privacy Policy · Dr. Sinha's Dental Studio | How this website handles information. |
| `/terms` | Terms of Use · Dr. Sinha's Dental Studio | Terms for using this website. |

## On-page checklist (every route)

- [ ] Unique title and meta description.
- [ ] One descriptive H1.
- [ ] Canonical URL.
- [ ] Open Graph title, description and image.
- [ ] Descriptive image alt text.
- [ ] 2+ useful internal links.
- [ ] Name, address and phone match [02-clinic-information.md](02-clinic-information.md) exactly.

## Structured data

| Type | Where | Include | Exclude |
|---|---|---|---|
| Dentist (LocalBusiness) | Site-wide or Home + Contact | Name, address, phone, URL, map link, opening hours (only once verified), logo, image | Ratings, review counts, prices, unverified services |
| BreadcrumbList | Treatment pages | Breadcrumb trail | — |
| FAQPage | Only if appropriate and policy-compliant | Visible FAQs only | Hidden FAQs |

**Never** add self-made review or aggregate-rating markup. It violates search-engine policies.

## Technical SEO

- [ ] XML sitemap of all live routes.
- [ ] robots.txt allowing crawling and pointing to the sitemap.
- [ ] Canonical URLs on every page (https, no duplicates).
- [ ] Real favicon set and a social sharing image (1200×630).
- [ ] Fast, mobile-friendly pages (see [10-performance-quality.md](10-performance-quality.md)).
- [ ] 404 returns a real not-found status.

## Off-site (clinic tasks)

- Keep the Google Business Profile name, address, phone and hours identical to the website.
- Add the website link to the Google Business Profile.
- Encourage genuine reviews in a policy-compliant way (no incentives).
