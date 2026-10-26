# 10 — Performance and Quality

[← Back to README](../README.md)

## Targets

| Metric | Target ("good" range) |
|---|---|
| Largest Contentful Paint (LCP) | ≤ 2.5s |
| Interaction to Next Paint (INP) | ≤ 200ms |
| Cumulative Layout Shift (CLS) | ≤ 0.1 |
| Lighthouse Performance (mobile) | 90+ aimed for |
| Lighthouse Accessibility | 95+ aimed for |
| Lighthouse Best Practices / SEO | 95+ aimed for |

A single lab score is a guide, not a guarantee. Test on a real mid-range Android phone too.

## Images

- Optimized, responsive images with correct sizes and dimensions.
- Modern formats (AVIF/WebP) with fallbacks handled by the framework.
- Hero image loads with priority; everything below the fold lazy loads.
- Width and height always set to prevent layout shift.
- Compress source photos before adding them (hero under ~250KB where possible).

## Scripts and bundles

- Server-rendered by default; client code only where interaction or animation needs it.
- One animation library, one component kit.
- No large animation bundles on pages that don't need them.
- Map embed loads lazily (or after a click on a static map preview).

## Fonts

- At most two families, limited weights.
- Self-hosted or framework-optimized loading, with swap behavior to avoid invisible text.

## States

Each interactive area defines its states:

| Area | States |
|---|---|
| Appointment form | Empty, filling, validation error, demo submitted (labeled), later: sending, success, error |
| Map embed | Loading placeholder, loaded, failed (show address + directions link) |
| Images | Reserved space / soft placeholder while loading |
| Reviews | Content, and a fallback link to Google if no excerpts are approved |

## Quality checks

- [ ] Lint and type checks pass with no errors.
- [ ] Every route opens with no console errors.
- [ ] Every internal and external link works.
- [ ] Phone links open the dialer on mobile.
- [ ] Map link opens the correct Google listing.
- [ ] Mobile menu, accordions and forms work by touch and keyboard.
- [ ] No horizontal overflow at 360px.
- [ ] No missing images or broken alt text.
- [ ] Tested on current Chrome, Safari (incl. iPhone) and Firefox.
- [ ] Optional Playwright smoke tests for routes, navigation and mobile menu.
