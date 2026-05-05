# Christine Andreasen — Seattle Real Estate Authority Site

A production-ready, editorial-luxury authority website for **Christine & Company | eXp Realty**, built with Next.js (App Router), Tailwind CSS, and TypeScript.

This is **not** a clone of Christine's main brokerage site. It is a controlled authority platform for SEO visibility, AI discoverability, content publishing, and personal brand positioning.

---

## Tech stack

- Next.js 14 (App Router, server components)
- React 18
- TypeScript
- Tailwind CSS 3
- Google Fonts (Playfair Display + Inter)
- Built-in `next/image`, `sitemap`, `robots`, and JSON-LD article schema

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open
http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

Deploy directly to Vercel — zero config required.

---

## Project structure

```
/app
  layout.tsx              Root layout, fonts, global metadata
  globals.css             Tailwind layers + editorial typography
  page.tsx                Home
  not-found.tsx           404 page
  sitemap.ts              Dynamic sitemap.xml
  robots.ts               robots.txt
  /about
    page.tsx              About Christine
  /blog
    page.tsx              Journal index
    /[slug]
      page.tsx            Article detail (with JSON-LD schema)
  /contact
    page.tsx              Contact + form

/components
  Navbar.tsx              Sticky, blur-on-scroll nav
  Footer.tsx              Editorial footer with social + contact
  Hero.tsx                Reusable split-grid hero
  BlogCard.tsx            Editorial blog card

/lib
  blogs.ts                All 6 blog posts as typed data

/public                   Drop images here (see "Required images" below)
```

---

## Required images — drop these into `/public`

The site references the following filenames. Use the artwork already designed for Christine (the cinematic blog headers and luxury photography shown in the brief). Recommended sizes are minimums — larger is fine, `next/image` will optimize automatically.

| Filename                      | Used on                          | Recommended size |
|-------------------------------|----------------------------------|------------------|
| `headshot.jpg`                | About page portrait              | 1200 × 1500      |
| `hero-waterfront.jpg`         | Home hero                        | 2000 × 1300      |
| `seattle-skyline.jpg`         | Contact page accent              | 1600 × 1200      |
| `luxury-living.jpg`           | Home CTA banner                  | 1200 × 1500      |
| `blog-market-trends.jpg`      | Blog: Seattle Market Trends 2026 | 1600 × 1000      |
| `blog-staging-luxury.jpg`     | Blog: Luxury Staging Tips        | 1600 × 1000      |
| `blog-where-to-live.jpg`      | Blog: Where to Live in Seattle   | 1600 × 1000      |
| `blog-ai-valuations.jpg`      | Blog: AI vs Real Appraisals      | 1600 × 1000      |
| `blog-real-estate-team.jpg`   | Blog: Best Real Estate Team      | 1600 × 1000      |
| `blog-staging-matters.jpg`    | Blog: Why Staging Matters        | 1600 × 1000      |
| `og-default.jpg`              | Default Open Graph image         | 1200 × 630       |

Until images are dropped in, every image position has a navy/gold gradient fallback (`.image-fallback`) so the layout never breaks during preview.

---

## Brand system

- **Ink (navy)** — `#0A1F44` — primary text, dark sections, primary buttons
- **Gold** — `#B8965A` — accents, eyebrows, gold rules, hover states
- **Cream** — `#F5F1EA` — page background, soft cards
- **Type** — Playfair Display (serif headlines, italic accents) / Inter (body)
- **Eyebrow style** — Uppercase, `0.22em` letter-spacing, gold

All tokens are defined in `tailwind.config.ts` (`colors.ink`, `colors.gold`, `colors.cream`) and `app/globals.css`.

---

## Content management

All blog content lives in **`/lib/blogs.ts`** as a strongly typed array. To add a new article, append a new object — the article page, the journal index, the sitemap, the related-articles strip, and the home page all update automatically.

Each post supports:

- `quickAnswer` — pull-quote style answer block (great for AI discoverability + featured snippets)
- `sections[]` — heading + body paragraphs
- `closing` — italic closer
- Full Open Graph + Twitter card metadata
- `Article` JSON-LD schema injected on every detail page

---

## SEO + AI discoverability

- Per-page metadata via Next.js `Metadata` API
- Open Graph + Twitter cards on every page
- `Article` JSON-LD schema on blog detail pages
- Dynamic `/sitemap.xml` and `/robots.txt`
- Semantic HTML, single H1 per page, descriptive alt text on every image
- Quick-Answer block on every article (optimized for LLM extraction)

Update `metadataBase` in `app/layout.tsx` and `SITE_URL` in `app/sitemap.ts` once the production domain is known.

---

## Social links (already wired into Navbar + Footer)

- Facebook — https://www.facebook.com/christine.andreasen.robertson
- Instagram — https://www.instagram.com/christineandcompany
- LinkedIn — https://www.linkedin.com/in/christineandreasen/
- YouTube — https://www.youtube.com/@christineandcompany1784

## Company info (Footer + Contact)

- **Christine & Company | eXp Realty**
- 9245 25th Avenue NW, Seattle, WA 98117
- (206) 353-8787
- christine@candco.me

---

## Deployment

### Vercel (recommended)

1. Push to a GitHub repo
2. Import the repo on vercel.com
3. Add the production domain
4. Deploy — that's it

### Anywhere else

```bash
npm run build
npm run start   # serves on :3000
```

The site is fully static-friendly — `generateStaticParams` is set up on the blog detail route, so all pages can be statically rendered.

---

## Accessibility + performance notes

- All interactive elements are keyboard accessible
- All images have descriptive `alt` text
- Color contrast meets WCAG AA on every surface
- `next/image` handles responsive sizing + AVIF/WebP automatically
- No client-side state on content pages — everything is server-rendered
