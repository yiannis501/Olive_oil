# Diapontia design system

Written with the gstack `/design-consultation` method and checked with `gstack-design-lint`. The source is the Diapontia label and bottle work (Version 6), so the website and the bottle read as one object.

## The one thing to remember

The view from the grove: an old olive tree, the Ionian Sea in broken lines, and the Diapontian islands on the horizon. Every page decision serves that picture.

## Direction

**Label, unfolded.** Ink printed on label paper, with the deep green of the glass as the one drenched surface. It is Luxury/Refined in structure, but every material comes from the real bottle: paper, ink, glass. No invented decoration.

- Decoration: intentional. The only illustration is the engraved scene from the label. No blobs, gradients, glows or icon tiles.
- Layout: editorial and asymmetric on the home page, a single reading column on text pages.
- Motion: minimal. One entrance, on the hero bottle. `prefers-reduced-motion` shows the final state.

## Colour

| Token | Hex | Source | Use |
| --- | --- | --- | --- |
| `--paper` | `#F4EEE1` | label stock | page ground |
| `--paper-deep` | `#EAE2D0` | label shadow | quiet bands, table stripes |
| `--ink` | `#16140F` | label ink, warmed | text, the scene |
| `--ink-soft` | `#5A503F` | label secondary | secondary text |
| `--rule` | `#CFC4AC` | | hairlines |
| `--glass` | `#1E2B1B` | bottle glass | hero, footer, primary button |
| `--glass-deep` | `#152013` | | button hover |
| `--on-glass` | `#F4EEE1` | | text on glass |

Restrained: one hue (glass green) owns the important surfaces; everything else is paper and ink. No gold, no terracotta.

## Type

| Role | Face | Why |
| --- | --- | --- |
| Display (wordmark, h1, h2) | Cinzel 500 | The label's wordmark face. Roman capitals cut in stone suit a product named after islands. |
| Reading (body, lead) | Cormorant Garamond 500 / 600 | The label's text face. Set at 1.25rem or more, because its small x-height fails at body size. |
| UI (buttons, prices, tables, fine print) | Source Sans 3 400 / 600 | Cormorant is weak at 14px. A plain humanist sans keeps prices and buttons legible. |

Tradeoff, stated once: gstack lists Cormorant as an overused display face. Here it is the reading face, chosen because it is already printed on the bottle; Cinzel carries the display role.

All three are Google Fonts, loaded with `display=swap`.

Scale: 1.25rem body, 1.6rem lead, h2 clamp(2rem, 4vw, 3rem), h1 clamp(2.4rem, 5.5vw, 4.2rem). Display heads use `text-wrap: balance`.

## Components

- **Primary action:** solid glass green on paper, paper on glass. One per screen. Label names the outcome ("Order for Christmas").
- **Secondary action:** underlined text link.
- **Ruled list:** the label's nutrition-panel style (hairlines, label left, value right) for facts, delivery and nutrition.
- **FAQ:** native `<details>`, one hairline between items.

## Anti-slop rules kept

No three-column feature grid, no kicker above headings, no cards in cards, no centred-everything, no pure white or black, no invented claims or testimonials, visible `:focus-visible` everywhere, skip link to `<main>`.

## Lint result

`gstack-design-lint` on `src/`: 0 blocks. Three `button-label-wraps` asks and one `overflow-x-unclipped` ask are false positives (`.btn` sets `white-space: nowrap`; `styles.css` clips overflow on html and body). The wide-tracking rule fires on the DIAPONTIA wordmark in the built pages; this is waived, because the tracked capitals are the brand wordmark from the label.

## Assets

- `src/components/Scene.astro`: the engraved scene from the label, inline SVG, coloured by `currentColor` and `--scene-paper` so it works on paper and on glass.
- `public/brand/bottle.webp`: the Version 6 bottle render, with the volume corrected to 750 ml.
- `public/favicon.svg`: the tree from the scene.
