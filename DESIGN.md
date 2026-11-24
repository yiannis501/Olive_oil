# Diapontia design system (version 3)

Direction from Yiannis, 24 Nov 2026: minimal and modern, built around the story of the family and their olive trees, with personal photos. The bottle is not the main thing on the page. Bottle and label design are a separate piece of work.

Checked with `gstack-design-lint` (yiannis501/gstack): 0 blocks.

## The one thing to remember

My mother among her olive trees. The photos carry the page; type and layout step back.

## Direction

- **Minimal:** one ground colour, one text colour, one accent used only on the order button. No textures, frames or ornaments. The label's tree-and-islands drawing appears once, small, as a signature.
- **Modern:** a contemporary serif for headings, set large and tight; a clean sans for text. Generous space between chapters.
- **Story first:** the home page is four short chapters (the grove, my mother, the harvest, at our table), each led by a photo. The shop sits after the story, and the bottle is a small picture beside the price.
- **Honest placeholders:** photo slots show a dashed "Photo needed" box, and facts only the family knows are highlighted in yellow, so nothing unfinished can look finished.

## Colour

| Token | Hex | Use |
| --- | --- | --- |
| `--ground` | `#FAF8F3` | page |
| `--ink` | `#1B1A16` | text |
| `--muted` | `#6B675E` | secondary text |
| `--rule` | `#E2DDD1` | hairlines |
| `--olive` | `#4A5530` | order buttons only |

## Type

| Role | Face | Why |
| --- | --- | --- |
| Headings | Instrument Serif 400 | Modern, narrow and calm; it reads like a book title and leaves room for photos. |
| Text and UI | Hanken Grotesk 400 / 600 | A clean, warm sans that keeps prices, buttons and long paragraphs easy to read. |

Both are Google Fonts. The bottle and label keep their own faces (Cinzel, Cormorant Garamond).

## Layout

- Opening: full-screen photo of Mum, headline in the lower left.
- Chapters: photo and text side by side, alternating sides, aligned to the bottom edge. One full-width panorama of the grove and islands.
- Shop: one row, the small bottle at the left, price and two actions at the right.
- Mobile: everything stacks in reading order.

## Lint notes

`button-label-wraps` and `overflow-x-unclipped` asks are false positives: `.btn` sets `white-space: nowrap`, and `styles.css` clips overflow on html and body.
