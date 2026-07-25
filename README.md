# W1IT Solutions — Company Website

Marketing and services website for [W1IT Solutions](https://w1it.com), an IT managed services provider in Seattle, WA. Built with Next.js (App Router), TypeScript, and Tailwind CSS; deployed on Vercel.

[![Live Site](https://img.shields.io/badge/live-w1it.com-blue)](https://w1it.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-deployed-000000?logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/license-private-lightgrey)](#license)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [SEO](#seo)
- [API Routes](#api-routes)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Overview

A statically-rendered marketing site with ~54 pages: service and solution pages, case studies, industry pages, productivity-app landing pages, and support/legal resources. All pages are prerendered at build time; three edge API routes handle contact-form submission and search-engine URL submission.

## Tech Stack

| Layer      | Technology                                             |
| ---------- | ------------------------------------------------------ |
| Framework  | Next.js 16 (App Router, static prerendering)           |
| Language   | TypeScript 5 (strict)                                  |
| Styling    | Tailwind CSS + design tokens (`src/styles/tokens.ts`)  |
| UI         | React 19, Framer Motion, Lucide icons                  |
| Forms      | React Hook Form + Zod, Web3Forms delivery              |
| Database   | Drizzle ORM + Vercel Postgres (contact submissions)    |
| Analytics  | Vercel Analytics                                       |
| Hosting    | Vercel (edge runtime for API routes)                   |

## Architecture

```
┌────────────────────────────────────────────────────────┐
│                        Vercel                          │
│  ┌──────────────────┐      ┌────────────────────────┐  │
│  │  Static pages     │      │  Edge API routes       │  │
│  │  (prerendered     │      │  /api/contact/submit   │  │
│  │   at build time)  │      │  /api/indexnow         │  │
│  │                   │      │  /api/bing-webmaster   │  │
│  └──────────────────┘      └───────────┬────────────┘  │
│  Middleware: 301 /blog/* → /case-studies/*             │
└────────────────────────────────────────┼───────────────┘
                                         ▼
                       Web3Forms · IndexNow · Bing Webmaster
```

- **Metadata**: every route exports metadata (directly or via a route `layout.tsx`); `src/lib/seo.ts` centralizes titles, descriptions, canonicals, Open Graph, and JSON-LD. The root layout emits a per-page self-referencing canonical.
- **Redirects**: legacy `/blog/<slug>` URLs 301 to `/case-studies/<slug>` (middleware); retired thin pages 301 in `next.config.js`.
- **Security**: strict security headers + CSP in `next.config.js`; submission APIs require an `x-api-key` shared secret and only accept `w1it.com` URLs (`src/lib/api-security.ts`).

## Folder Structure

```
├── docs/                  # Design-system, audit, and reference docs
├── drizzle/               # Generated DB migrations
├── public/                # Static assets (icons, og-image, manifest)
│   └── images/optimized/  # Pre-optimized WebP/PNG assets
├── scripts/               # One-off maintenance scripts
├── src/
│   ├── app/               # App Router pages, layouts, API routes
│   │   ├── api/           # Edge API routes
│   │   ├── case-studies/  # Case-study pages (canonical content URLs)
│   │   ├── services/      # Service pages
│   │   ├── solutions/     # Solution pages
│   │   ├── layout.tsx     # Root layout: global metadata, JSON-LD, chrome
│   │   ├── sitemap.ts     # Generated /sitemap.xml
│   │   └── robots.ts      # Generated /robots.txt
│   ├── components/        # Shared UI components (+ homepage/ sections)
│   ├── lib/               # seo.ts, api-security.ts, db/, integrations
│   └── styles/            # Design tokens
├── middleware.ts          # Legacy-URL redirects
├── next.config.js         # Headers, redirects, image config
└── tailwind.config.ts
```

## Getting Started

**Prerequisites**: Node.js 20+, npm 10+.

```bash
git clone https://github.com/mingmanhk/w1it.git
cd w1it
npm install
cp .env.example .env.local   # fill in values (see below)
npm run dev                  # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## Environment Variables

Copy `.env.example` to `.env.local`. None are required for local UI development; APIs degrade gracefully.

| Variable                          | Purpose                                             |
| --------------------------------- | --------------------------------------------------- |
| `WEB3FORMS_API_KEY`               | Contact-form delivery (server-side)                 |
| `SUBMIT_API_SECRET`               | Shared secret gating the URL-submission API routes  |
| `INDEXNOW_API_KEY`                | IndexNow key (public by protocol design)            |
| `BING_URL_SUBMISSION_API_KEY`     | Bing Webmaster URL submission                       |
| `BING_CONTENT_SUBMISSION_API_KEY` | Bing Webmaster content submission                   |
| `POSTGRES_URL`                    | Vercel Postgres connection (contact storage)        |

Never commit `.env*` files — only `.env.example` with placeholders.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start dev server                  |
| `npm run build` | Production build (54 static pages)|
| `npm start`     | Serve the production build        |
| `npm run lint`  | ESLint                            |

## SEO

- `/sitemap.xml` and `/robots.txt` are generated from `src/app/sitemap.ts` / `robots.ts` — update the route lists there when adding pages; do **not** add static copies under `public/`.
- Every page needs a unique `title`, `description` (≤160 chars), and canonical — use `generateSEO()` from `src/lib/seo.ts`. Client-component pages get a sibling `layout.tsx` for metadata.
- Old URLs must 301 to their replacement (middleware or `next.config.js`) and be swapped in the sitemap.

## API Routes

| Route                  | Method | Auth                      | Purpose                          |
| ---------------------- | ------ | ------------------------- | -------------------------------- |
| `/api/contact/submit`  | POST   | Same-origin check         | Proxy contact form to Web3Forms  |
| `/api/indexnow`        | POST   | `x-api-key` shared secret | Submit URLs to IndexNow          |
| `/api/bing-webmaster`  | POST   | `x-api-key` shared secret | Submit URLs/content to Bing      |

Submission routes return `503` until `SUBMIT_API_SECRET` is configured, and only accept `https://w1it.com` URLs.

## Deployment

Pushing to `main` triggers a Vercel production deployment. Checklist for releases:

1. `npm run build` passes locally with no new warnings.
2. New pages: metadata + sitemap entry + at least one internal link (no orphans).
3. Removed/moved pages: 301 redirect in place, sitemap updated.
4. Environment variable changes mirrored in Vercel project settings and `.env.example`.

## Contributing

1. Branch from `main` (`feat/…`, `fix/…`).
2. Keep commits scoped; follow the [Conventional Commits](https://www.conventionalcommits.org/) style used in history (`feat:`, `fix:`).
3. Run `npm run lint` and `npm run build` before opening a PR.
4. PRs should describe user-visible impact (pages affected, SEO implications).

## License

Private — © W1IT Solutions. All rights reserved.
