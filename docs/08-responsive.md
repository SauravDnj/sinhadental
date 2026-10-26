# 08 — Responsive Behavior

[← Back to README](../README.md)

**Approach:** mobile-first. Most visitors to a local clinic will be on phones.

## Test widths

| Width | Device class |
|---|---|
| 360px | Small Android phones |
| 390px | Modern iPhones |
| 768px | Tablet portrait |
| 1024px | Tablet landscape / small laptop |
| 1440px | Desktop |

## Breakpoint behavior

| Element | Mobile (<768px) | Tablet (768–1023px) | Desktop (1024px+) |
|---|---|---|---|
| Header | Logo + menu button + call icon | Logo + menu button + Book button | Full nav + Book button |
| Hero | Stacked: copy and CTAs first, image below and compact | Stacked or 50/50 | Balanced two-column (e.g., 7/5) |
| Hero CTAs | Full-width stacked buttons | Side by side | Side by side |
| Trust strip | 2×2 grid or swipe row | Single row | Single row |
| Treatment cards | 1 column | 2 columns | 3 columns |
| Process steps | Vertical timeline | Vertical or 3 columns | 3 columns in a row |
| Doctor preview | Portrait above text | Side by side | Asymmetric side by side |
| Review cards | Swipe carousel or stacked | 2 columns | 3 columns or carousel |
| Location block | Card, then map | Side by side | Side by side |
| Footer | Stacked columns | 2 columns | 4–5 columns |
| Floating CTA | Visible (after hero) | Optional | Hidden |

## Mobile requirements

- No horizontal overflow at 360px, ever.
- Hero headline, supporting line and both CTAs are visible without a huge image pushing them down.
- Large tap targets (44px+) and readable body text (16px+).
- Phone and directions actions always easy to reach.
- The floating CTA never hides the footer, form fields, consent controls or browser controls.
- Form inputs use 16px+ text so the browser doesn't zoom.
- Images cropped intentionally (faces and key subjects stay visible).

## Desktop requirements

- Balanced two-column hero.
- Paragraph width constrained (~60–75 characters).
- Intentional whitespace and consistent alignment to the grid.
- Content max width 1180–1280px; backgrounds may go full width.
- Paragraphs never stretch across the whole screen.

## Images per breakpoint

- Serve appropriately sized images per screen (responsive sizes).
- Hero image may use a different crop on mobile (portrait) and desktop (landscape).
- Always reserve image space to avoid layout shift.
