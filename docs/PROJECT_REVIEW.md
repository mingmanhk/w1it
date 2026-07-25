# Project Review & Modernization Report

Comprehensive audit of the W1IT website. Sections marked **[APPLIED]** were implemented in this repo; the rest are ranked recommendations. Templates in this document are generic and reusable for any web project.

Reviewed: July 2026 · Stack: Next.js 16 / TypeScript 5 / Tailwind / Vercel

---

## 1. Documentation **[APPLIED]**

- `README.md` fully rewritten: badges, architecture diagram, folder structure, setup, env-var table, scripts, SEO conventions, API reference, deployment checklist, contribution guide.
- 10 loose audit/design markdown files moved from repo root into `docs/`.

## 2. .gitignore **[APPLIED]**

Replaced with a sectioned, reusable template (dependencies, build output, env/secrets with `!.env.example` allowlist, logs, coverage, IDE, OS, DB, tool caches). Also removed artifacts that were already tracked and therefore ignored-but-committed: `tsconfig.tsbuildinfo`, `firebase-debug.log`, empty `firebase-tools/`.

## 3. SEO

**Applied in previous commits:** self-referencing canonicals on all 54 pages; unique title/description per page; duplicate title-suffix bug fixed; sitemap regenerated (53 URLs, no redirecting/404 entries); stale static `public/sitemap.xml`+`robots.txt` removed; `/blog/*` → `/case-studies/*` 301s; thin duplicate pages 301'd; complete OG/Twitter tags incl. `og:image`; icon/manifest 404s fixed; meta descriptions ≤160 chars. **[APPLIED this commit]** JSON-LD placeholder NAP data (fake phone/street) corrected.

**Remaining recommendations (ranked):**
1. Verify the phone number and add a real street address + `postalCode` to the LocalBusiness JSON-LD in `src/app/layout.tsx` — consistent NAP across site, Google Business Profile, and schema is the highest-leverage local-SEO signal.
2. Add `BreadcrumbList` JSON-LD + visible breadcrumbs on case-study and service pages.
3. Add `Article` JSON-LD (datePublished/dateModified/author) to case studies.
4. Real `lastModified` dates in `sitemap.ts` (currently build time for every URL — weakens crawl prioritization).
5. Per-page OG images for case studies (generate with `next/og`).
6. Internal linking: each case study should link 2–3 related case studies + the relevant service page.

**Generic templates** — sitemap (Next.js `app/sitemap.ts`):
```ts
import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  return [
    { url: base, lastModified: new Date('2026-07-01'), changeFrequency: 'weekly', priority: 1 },
    // one entry per canonical, indexable, 200-status URL — never redirects or 404s
  ]
}
```
robots (`app/robots.ts`):
```ts
import { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/private/'] },
    sitemap: 'https://example.com/sitemap.xml',
  }
}
```
Per-page metadata (any framework — the invariants): unique `<title>` 50–60 chars · `<meta name="description">` 120–160 chars · `<link rel="canonical">` self-referencing absolute URL · `og:title/description/url/type/image(1200×630)` · `twitter:card=summary_large_image` · JSON-LD matching the page type.

## 4. UI/UX

Strengths: coherent light-mode design system (documented in `docs/`), consistent token usage, Framer Motion micro-interactions, responsive header with grouped dropdowns.

Recommendations (ranked):
1. **Navigation**: Header omits Case Studies, Testimonials, Support — pages now in sitemap/footer but weak in primary nav. Add a "Resources" dropdown (Case Studies, Blog, Knowledge Base, Checklists, Tools, Support).
2. **Accessibility (WCAG 2.1 AA)**: audit dropdown menus for keyboard operability (`Escape` to close, arrow-key focus, `aria-expanded`/`aria-controls`); add a skip-to-content link; verify `#D9D9D9`-on-navy footer links meet 4.5:1 contrast; ensure exactly one `<h1>` per page; `prefers-reduced-motion` guards around Framer Motion animations.
3. **Forms**: inline validation messages tied to inputs via `aria-describedby`; visible focus rings on all interactive elements.
4. **Consistency**: several near-identical page heroes are hand-rolled — consolidate on the shared `Hero` component.
5. Component library: current Tailwind + in-house components is the right call for a marketing site; if the app surface grows, adopt shadcn/ui (Tailwind-native, accessible primitives via Radix) rather than a heavy runtime library.

## 5. Code Cleanup **[APPLIED]**

Removed this commit: 6 unused components (`BlogStructure`, `Breadcrumb`, `LocalBusinessSchema`, `PerformanceMonitor`, `ScrollToTopButton`, `ServicesComponent`), `tsconfig.tsbuildinfo`, empty `firebase-tools/`; root de-cluttered into `docs/`. Previous commits: 3 thin duplicate pages deleted, dead `firebase-debug.log` removed.

Remaining:
1. `src/components/Breadcrumb.tsx` was removed — recreate deliberately when implementing breadcrumbs (item 3.2).
2. Audit `public/images/optimized/*-Original.webp` variants (unreferenced originals ~ dead weight in repo, not shipped to users).
3. `scripts/convert-hero-to-webp.js` — one-shot script; move under `scripts/` docs note or delete.
4. Drizzle/Postgres is configured but no page persists data — either wire contact submissions to it or drop `drizzle*`, `pg`, `@vercel/postgres` (~600 KB of node_modules and an attack-surface reduction).

## 6. Performance

Current posture is good (static prerender, `next/image` with AVIF/WebP, compression, code-splitting by route). Ranked improvements:
1. Replace `<link>` icon soup + manual head tags with Next metadata `icons` field (dedupe; the manual viewport meta was already removed).
2. `next/font` is used for Inter — good; ensure `display: swap` and subset only needed weights.
3. Add `loading="lazy"` / `priority` discipline: hero image `priority`, everything below the fold lazy (audit with Lighthouse).
4. Framer Motion: import from `framer-motion` per-component; consider `LazyMotion` + `domAnimation` to cut ~25 KB gzip.
5. Add `Cache-Control: public, max-age=31536000, immutable` headers for `/images/*` and static assets in `next.config.js`.
6. Lighthouse CI in the pipeline (see §7) with budgets: LCP < 2.5 s, CLS < 0.1, JS < 200 KB gzip per route.

## 7. Security

**Applied in previous commits:** submission APIs gated by `x-api-key` shared secret + domain-restricted URLs + batch cap; contact API origin check; `npm audit` highs cleared (next 16.2.11, sharp 0.35); committed debug log purged; history scanned for secrets (clean); strong headers already present (HSTS, CSP, nosniff, frame-ancestors, referrer policy).

Remaining recommendations:
1. **CSP**: current policy omits `'unsafe-inline'` for scripts yet the site injects inline JSON-LD — verify the header is actually active in production responses; move to nonce-based CSP (Next middleware) if enforcing strictly.
2. **Rate limiting**: add per-IP limits on `/api/contact/submit` (Vercel WAF rule or Upstash Ratelimit) — origin checks stop browsers, not bots.
3. Error responses in API routes still echo `error.message` — return generic messages, log details server-side.
4. Enable GitHub **Dependabot** (security + version updates) and **secret scanning push protection** on the repo.
5. The remaining `npm audit` item (postcss, bundled inside Next) is build-time only; clears when Next 16.3 stable ships — track it.
6. Generic practices: never commit `.env*`; server-only secrets never prefixed `NEXT_PUBLIC_`; validate all request bodies with Zod at the route boundary (partially done — extend to contact form fields).

## 8. Modern Features (ranked by value/effort)

| Feature | Effort | Notes |
| --- | --- | --- |
| CI (GitHub Actions: lint + build on PR) | S | Highest value; catches breakage before Vercel deploy |
| Lighthouse CI + budgets | S | Perf/SEO/a11y regression gate |
| Dependabot | S | One YAML file |
| Sentry (error monitoring) | S | `@sentry/nextjs` wizard; edge + client |
| Rate limiting (Upstash) | S | For the 3 API routes |
| E2E smoke tests (Playwright) | M | 5 tests: home renders, nav works, contact validates, sitemap 200, redirects 301 |
| PWA (installable + offline shell) | M | `next-pwa`; manifest already exists |
| Per-page OG image generation | M | `next/og` edge images |
| i18n (EN/中文) | L | Real differentiator given bilingual positioning; `next-intl`, `/zh` prefix, hreflang |
| Blog/case-study CMS or MDX | L | Current per-page TSX doesn't scale; move content to MDX + one dynamic route |

Skip: GA4 (Vercel Analytics already covers marketing-site needs), Swagger (3 internal routes — the README table suffices), heavy state management (no client state to manage).

Minimal CI template (`.github/workflows/ci.yml`):
```yaml
name: CI
on: { pull_request: {}, push: { branches: [main] } }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

## 9. Architecture & Code Quality

Verdict: structure is sound for a marketing site — App Router with route-level concerns, shared `lib/` for cross-cutting logic, tokens file for design constants. Main findings:

1. **Content-as-code anti-pattern**: each case study is a 300-line TSX file. Migrate to MDX (or a headless CMS) with one `case-studies/[slug]/page.tsx` + `generateStaticParams` — new posts become content edits, metadata/JSON-LD generated from frontmatter, and the sitemap derives from the content directory instead of a hand-maintained list.
2. **Metadata duplication**: 17 near-identical route `layout.tsx` files exist only to attach metadata to client pages. Longer-term: make page shells server components that import a client child, and collapse the layouts.
3. **Hand-maintained sitemap list**: derive from the filesystem (glob `app/**/page.tsx`) or the MDX content dir to eliminate drift — the class of bug behind the original audit findings.
4. **Unused DB layer**: decide (wire it or remove it) — see §5.4.
5. Naming/conventions are consistent (PascalCase components, kebab-case routes); keep.

## 10. Improved Folder Structure (target, generic)

```
src/
├── app/                  # Routes only: page/layout/route files, thin
├── components/
│   ├── ui/               # Primitives (Button, Card, Container)
│   ├── layout/           # Header, Footer, chrome
│   └── sections/         # Page sections (Hero, CTA, Testimonials)
├── content/              # MDX case studies / structured content
├── lib/                  # seo, security, integrations, db
├── styles/               # tokens, globals
└── config/               # site.ts (nav, URLs, socials — single source)
```
The `config/site.ts` pattern removes the current duplication of nav links between Header, Footer, and sitemap.

## 11. DevOps & Deployment

Current: Vercel auto-deploy from `main` — appropriate. Recommendations:
1. **Protect `main`**: require the CI check (§8) before merge; deploy previews for PRs (Vercel default) as the review artifact.
2. Environment variables: keep `.env.example` authoritative; mirror in Vercel per-environment (Preview vs Production values for `SUBMIT_API_SECRET`).
3. Add `engines` field to `package.json` (`"node": ">=20"`) to pin runtime expectations.
4. Immutable caching for static assets (§6.5); Vercel CDN handles the rest.
5. Observability order of adoption: Sentry (errors) → Vercel Speed Insights (field Web Vitals) → Lighthouse CI (lab regression gate).
6. Rollback strategy: Vercel instant rollback covers bad deploys; DB migrations (if Drizzle stays) must be backward-compatible one release.
