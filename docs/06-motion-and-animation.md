# 06 — Motion and Animation

[← Back to README](../README.md)

> Motion should make the site feel refined and responsive. It must never feel slow, gimmicky or block content.

## Principles

1. **Purposeful:** every animation guides attention or confirms an action.
2. **Subtle:** small distances, soft easing, short durations.
3. **Once:** sections reveal once; they don't replay on every scroll.
4. **Optional:** everything works perfectly with motion turned off.
5. **Fast:** only transform and opacity are animated.

## Timing tokens

| Token | Duration | Use |
|---|---|---|
| `instant` | 100–150ms | Button press, color change |
| `quick` | 200–250ms | Hover lift, icon nudge, accordion |
| `base` | 350–450ms | Section reveal, menu open |
| `slow` | 500–600ms | Page entry, hero image reveal |
| `stagger` | 60–90ms between children | Card grids, list items |

**Easing:** ease-out for entrances, ease-in-out for toggles. No bouncy springs on content.

## Motion catalog

| Element | Animation | Duration |
|---|---|---|
| Page entry | Fade in + move up 8–16px | 350–600ms |
| Section reveal | Fade + rise ~14px when 15% visible, once | ~450ms |
| Card grid | Children reveal with light stagger | 60–90ms stagger |
| Card hover | Lift 2–4px + shadow softens in | 200ms |
| Button hover/press | Color shift; press scales to ~0.98 | 150ms |
| Text link arrow | Nudges right 2px on hover | 200ms |
| Hero image | Gentle reveal (fade + slight scale from 1.03 to 1) | 600ms |
| Hero tooth/smile outline | Line draws in once, then very slow float (optional) | 1.2s draw |
| Background mint shapes | Very slow drift or static | 20s+ loop, or none |
| Process steps | Sequential reveal on scroll | Stagger 120ms |
| Header on scroll | Background and shadow fade in | 200ms |
| Mobile menu | Slide/fade in, links stagger lightly | 300ms |
| Active nav link | Underline slides to current item | 250ms |
| FAQ accordion | Height + opacity, chevron rotates | 250ms |
| Reviews carousel | Swipe/arrow controlled, no fast auto-advance | — |
| Floating mobile CTA | Slides up after hero scrolls away | 250ms |
| 404 tooth | Gentle wobble or float | Subtle, slow |

## Never do

- Spin a tooth continuously.
- Animate every element on the page.
- Scroll-jack or hijack the scroll speed.
- Force delays before content or buttons are usable.
- Use heavy blur filters, large parallax or WebGL without a strong reason.
- Auto-advance carousels quickly.
- Animate layout properties (width, height, top, left) where transform works.
- Let animation cause layout shift.

## Reduced motion

When the visitor's system has **"reduce motion"** turned on:

| Normal | Reduced |
|---|---|
| Fade + rise reveals | Content simply appears (or opacity only, very short) |
| Parallax and drift | Off |
| Decorative loops (float, draw-in) | Off; show the final state |
| Card lift | Shadow change only |
| Menu slide | Instant or quick fade |
| Accordion height animation | Instant |
| Smooth scroll | Normal jump |

## Implementation notes (for the build phase)

- Use Motion for React for viewport reveals, stagger and the mobile menu; use plain CSS for hover and focus.
- A single reusable **Reveal** wrapper handles section entrances and checks the reduced-motion preference.
- Only interactive or animated parts become client components; the rest stays server-rendered.
- Confirm the current Motion package import path during installation.
