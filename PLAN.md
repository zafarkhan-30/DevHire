# SyntaxHires — Build Plan

Reference: `HireDeveloper.dev — Site Teardown.pdf` (48 pages, crawled 27 Sep 2026).
Target: a site with the same design system, layout, components, and page structure as the reference.

## 1. What gets replicated, and what does not

| Layer | Approach |
|---|---|
| Design tokens (colors, spacing, breakpoints, type scale) | Replicate exactly from the teardown |
| Font | Plus Jakarta Sans 200–800, self-hosted woff2 (open-source, SIL OFL) |
| Layout, section order, component behaviour, motion timings | Replicate exactly |
| Page inventory and URL structure | Replicate (79 marketing pages + blog) |
| Brand name, logo, marketing copy, blog articles | Ours — written for SyntaxHires, same length and structure so the layout holds |
| Client logos, testimonials, named people, stats, certification badges, office addresses | Ours — only claims we can back up |
| Photos and illustrations | Ours, or licensed stock with the same crop and treatment |

If Transvolt owns hiredeveloper.dev, the content rows switch to "migrate as-is" and we export from WordPress instead of rewriting. Components are content-agnostic, so this only changes the data layer.

## 2. Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript, static generation | 300+ mostly static pages, good SEO, data-driven templates |
| Styling | Plain CSS with custom properties + Bootstrap 5 grid only | Same breakpoints (1199 / 991 / 767 / 576) and the same token names as the reference |
| Carousels | Embla Carousel | Replaces Owl Carousel 2 + jQuery; supports synced instances and custom dots |
| Accordion / tabs | Small custom React components | Replaces Bootstrap JS collapse |
| Content | Typed data files (`content/*.ts`) + MDX for blog and legal pages | One template, many pages |
| Forms | Next.js route handler → CRM (HubSpot or other) | One shared form component |
| Testing | Playwright screenshots + pixel diff against reference captures | Objective measure of "same" |

## 3. Design tokens (from the teardown)

```css
:root {
  --primary: #FF4103;
  --primary_hover: #E03A02;
  --secondary: #153762;
  --dark: #0B0A0A;
  --bg-light: #F8F9FA;
  --body_color: #777777;
  --gray_color_light: #A4A7AB;
  --success: #10B981;
  --warning: #F59E0B;
  --danger: #EF4444;
  --blue_color: #3B82F6;
  --section-padding: 5rem;   /* 4rem, then 3rem at smaller breakpoints */
  --container-max: 1766px;
  --font-family: "Plus Jakarta Sans", sans-serif;
}
```

| Element | Size / weight |
|---|---|
| H1 hero | 40px / 800 |
| H2 section | 36px / 700, key words in accent color |
| H3 card | 20–24px / 700 |
| Body | 16px / 400, line-height 1.8 |
| Small / footer | 14px / 400 |
| Eyebrow pill | 12–13px / 600, uppercase, letter-spaced |

Motion: marquee 40s linear infinite, tab fade .25s, panel fade .4s, bounce 2s, pulse-ring 2s, hero slide speed 2000ms.

## 4. Phases

### Phase 0 — Reference capture
The PDF has real screenshots for the header, footer, and home page only. Inner pages show placeholders. Before building them we capture the live reference:
- Full-page screenshots at 1440, 1199, 991, 767, and 375 px for every template
- Computed styles per section: padding, gap, radius, shadow, gradient stops
- Hover, active, and open states for menus, tabs, accordions, and cards

Output: `reference/` folder of screenshots plus a measurements sheet. Used for measurement only.

### Phase 1 — Foundation
Project scaffold, tokens, font loading (`font-display: swap`), type scale, container, section bands (light / muted / navy / dark gradient), buttons (solid, outline, white, text link), eyebrow pill, highlighted-word heading helper.

### Phase 2 — Global shell
- Trust bar with compliance badges
- Header: logo, 5 mega-menus: Services, Pricing, Hire Developers, Resources, Company (title, intro, featured card, link columns), CTA button, mobile drawer
- Footer: tool cards + proof points, 5 link columns, newsletter, social, "Where We Work" (remote and global, no office address), legal bar
- Floating: chat launcher, WhatsApp button, cookie banner with explicit opt-in

### Phase 3 — Component library
| Group | Components |
|---|---|
| Heroes | Slider hero with thumbnail rail, dark hero with 2 CTAs, hero + lead form, split compare hero, banner hero |
| Proof | Logo grid, stat band, testimonial marquee, quote card, metric tiles |
| Comparison | Market-vs-us block with verdict pills and VS badge, comparison table, decision matrix |
| Navigation-like | Vertical tabs + panel, pill tabs + synced carousel, accordion, table of contents |
| Process | Path cards with arrows, horizontal timeline with pulse dots, vertical version timeline, numbered step flow |
| Conversion | Gradient CTA card, slim CTA strip, dark closing CTA, lead form, call-back form, gated PDF email form, newsletter band |
| Content | Reason cards, guide cards, blog cards, pricing tier cards, fit-check quiz, cost calculator |

### Phase 4 — Home page
All 14 sections in order: hero slider, trusted by, honest comparison, mid CTA, reasons, paths, technologies tabs, case studies carousel, guides, timeline, testimonials, lead form, related insights, FAQ.

### Phase 5 — Templates and pages
| Template | Pages | Notes |
|---|---|---|
| Technology hire template | 31 | 19 sections, driven by one data file per technology; optional sections for variants |
| Consulting variant | 2 | 14 sections |
| US-ready landing | 1 | 11 sections |
| Dedicated hub + guides | 1 + 3 | Tabbed technology matrix, long-form guides with rate tables |
| Service pages | 5 | Shared band system, embedded request form |
| Solution page | 1 | Own section system |
| Case study hub + detail | 1 + 4 | 10-section detail template with gated PDF form |
| Compare index + pages | 1 + 5 | Shared decision-guide pattern |
| Resources | 2 | Cost calculator (8 inputs), risk assessment |
| Core pages | ~21 | About, leadership, vetting, retention, trial, contact, career, job post, thank-you, technologies, industries, FAQ, sitemap, 4 legal |
| Blog | index + post + categories | Featured banner, paginated grid, post with sticky TOC and mini form |

Build order: home → technology template (largest page count) → services → case studies → compare → core → blog.

### Phase 6 — Forms and integrations
Shared validation, CRM submission, thank-you redirect, newsletter, analytics loaded only after consent.

### Phase 7 — QA
- Pixel diff against reference captures at each breakpoint, target under 2% difference per section
- Responsive pass at all four breakpoints
- Accessibility: contrast, keyboard, focus, reduced motion for marquee and pulse animations
- SEO: unique title and meta description per page, sitemap.xml, structured data for FAQ
- Performance: Lighthouse 90+ on mobile

### Phase 8 — Deploy
Static hosting (Vercel or similar), redirects, domain, monitoring.

## 5. Reference defects we will not carry over
- Broken technology page rendering only 2 sections
- Wrong technology name inside pricing tier copy
- Case study archive with empty H1 listing blog posts
- Page title showing a raw slug
- Mislabelled industry card, duplicated words in headings and buttons
- Proof numbers that disagree between pages — single source of truth in `content/site.ts`
- Three pages on an older design generation — rebuilt on the current system
- Implied-consent cookie banner

## 6. Project structure

```
app/                    routes (one folder per URL pattern)
components/
  layout/               TrustBar, Header, MegaMenu, Footer, CookieBanner
  sections/             one file per section type
  ui/                   Button, Pill, Accordion, Tabs, Carousel, Card
content/
  site.ts               brand, nav, footer, global stats
  hire/*.ts             one file per technology
  services/*.ts
  case-studies/*.ts
  compare/*.ts
  blog/*.mdx
styles/
  tokens.css  base.css  sections.css
public/fonts/           Plus Jakarta Sans woff2
reference/              screenshots and measurements
tests/visual/           Playwright specs
```

## 7. Decisions

| Question | Decision |
|---|---|
| Brand | SyntaxHires is a separate brand. All copy, logos, testimonials, stats and images are SyntaxHires' own. |
| Stack | Next.js |
| CRM | Not decided. Forms post to `/api/lead`, which validates and logs. Add the CRM call in `deliver()` in `app/api/lead/route.ts`. |
| Blog post count at launch | Open |

## 8. Status

| Phase | State |
|---|---|
| 0 Reference capture | Done for 12 templates at 1440px: layout geometry only, saved in `reference/measurements/` |
| 1 Foundation | Done |
| 2 Global shell | Done (chat and WhatsApp widgets wait on accounts and consent wiring) |
| 3 Component library | Done: 27 block types in `components/blocks/` |
| 4 Home page | Done, all 14 sections |
| 5 Templates and pages | Done: 84 static pages (see below) |
| 6 Forms | Forms post to `/api/lead`. CRM delivery waits on the CRM decision |
| 7 QA | `npm run test:site` passes on all 79 routes at 375, 768 and 1440px. Pixel diff against the reference and Lighthouse are not done |
| 8 Deploy | Not started |

### Pages built

| Group | Count | Source |
|---|---|---|
| Technology hire pages | 32 | `content/hire/*.ts` through `lib/buildHirePage.ts` |
| Hire variants, hub and guides | 7 | `content/pages/hire-*.ts`, `guide-*.ts` |
| Services and solution | 6 | `content/pages/service-*.ts`, `solution-*.ts` |
| Compare pages and index | 6 | `content/pages/compare-*.ts`, `comparison-guides.ts` |
| Case studies (placeholder templates) | 4 | `content/pages/case-study-*.ts` |
| Resources | 2 | `content/pages/resource-*.ts` |
| Core pages | 13 | `content/pages/` |
| Blog index and posts | 4 | `content/blog/` |
| Legal (drafts) | 4 | `app/(legal)/` |
| Home | 1 | `content/home.ts` |

### How to add a page

1. Technology page: copy a file in `content/hire/`, edit it, add it to `content/hire/index.ts`.
2. Any other page: copy a file in `content/pages/`, edit the blocks, add it to `content/pages/index.ts`.
3. Blog post: add an `.mdx` file in `content/blog/` and an entry in `content/blog/posts.ts`.

Block types and their fields are defined in `content/types.ts`.

Responsive: the home page, header and footer pass `npm run test:responsive` at 320, 360, 375, 414, 576, 767, 768, 991, 1199 and 1440 px. The audit checks horizontal overflow, elements outside the viewport and touch targets under 44px. Run it against every new template (serve the site on port 3100 first, or set `BASE_URL`).

Changes from the original plan:
- Global scale reduced at the user's request (2026-09-27): type about 15% smaller (H1 34px, H2 31px, body 15px), section padding 64 / 52 / 40 / 32px, header 64px, content width 1180px on inner pages and 1340px on the home page. Phone form fields stay at 16px and buttons at 44px minimum.
- Breakpoints 1199 / 991 / 767 / 576 are written as plain media queries with CSS grid. Bootstrap is not installed.
- The case study block uses tab state with the 0.4s panel fade. Embla is used for the hero slider only.

- Launch readiness (2026-09-28), at the user's request: template content is hidden instead of shown. A block with `draft: true` is skipped; stat tiles with the value "—" and list lines ending in "—" are left out; the template case study pages are unpublished and /case-study/ is noindex. Founders stay visible because the user is supplying them.
- Rates live in `content/rates.ts` only. Share image, JSON-LD (Organization, WebSite, BreadcrumbList, FAQPage, Article) and canonical URLs added. The site audit fails titles over 60 characters.
- Footer hides social links that are still "#". `agentRules: false` stops next dev writing AGENTS.md and CLAUDE.md.

Content still to supply (search the `content/` folder for `PLACEHOLDER`): site URL, lead inbox and Resend key, rate card (`content/rates.ts`), founders, social links, legal details, offer terms (free trial, paid assessment, AI assistant pricing), Legacy Risk Assessment PDF, US-ready contracting facts, case studies, verified stats, reviews, open roles. To bring back a hidden block, replace its template content and remove `draft: true`.
