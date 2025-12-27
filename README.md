# W1IT Solutions - Professional IT Managed Services Website

A modern, high-performance website built with Next.js 16, TypeScript 5, and Tailwind CSS for W1IT Solutions, a leading IT managed service provider.

## 🚀 Overview

W1IT Solutions provides comprehensive IT managed services, cybersecurity solutions, cloud infrastructure, and digital transformation consulting. This website showcases our services, expertise, and client success stories through a clean, professional interface optimized for performance and SEO.

**Live Site**: [W1IT Solutions](https://w1it.com)

## ✨ Key Features

- **Modern Tech Stack**: Built with Next.js 16.1.1 (App Router), React 19, TypeScript 5
- **Performance Optimized**: Fast load times, optimized images, code splitting
- **SEO Optimized**: Comprehensive metadata, sitemap, structured data
- **Responsive Design**: Mobile-first approach, works on all devices
- **Type-Safe**: Full TypeScript implementation with strict type checking
- **Security**: Security headers, CSP, input validation, HTTPS enforcement
- **Analytics**: Vercel Analytics integration for performance monitoring
- **Accessibility**: WCAG 2.1 AA compliant, semantic HTML
- **Modern UI/UX**: Clean design with Tailwind CSS, smooth animations

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router and Turbopack
- **React 19.2.1** - UI library with latest features
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Framer Motion 12** - Animation library
- **Lucide React** - Icon library

### Database & ORM
- **Drizzle ORM 0.45.1** - TypeScript ORM
- **PostgreSQL** - Primary database via Vercel Postgres
- **pg 8.16** - PostgreSQL client

### Forms & Validation
- **React Hook Form 7.69** - Form management
- **Zod 4.2** - Schema validation

### Development Tools
- **ESLint 9** - Code linting
- **Sharp 0.34** - Image optimization
- **Autoprefixer** - CSS vendor prefixes

### Analytics & Monitoring
- **Vercel Analytics 1.6** - Performance and usage analytics

### Fonts
- **Space Grotesk** - Headings and display text
- **Inter** - Body text and UI elements
- **JetBrains Mono** - Code snippets

## 📋 Project Structure

```
w1it/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── apps/              # Applications showcase
│   │   ├── blog/              # Blog articles
│   │   ├── case-studies/      # Client success stories
│   │   ├── contact/           # Contact form
│   │   ├── cookies/           # Cookie policy
│   │   ├── industries/        # Industry solutions
│   │   ├── privacy/           # Privacy policy
│   │   ├── services/          # Service pages
│   │   ├── solutions/         # Solution pages
│   │   ├── terms/             # Terms of service
│   │   ├── testimonials/      # Client testimonials
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles
│   │   └── sitemap.ts         # SEO sitemap
│   ├── components/            # React components
│   │   ├── homepage/          # Homepage sections
│   │   ├── BentoGrid.tsx      # Grid layout component
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Header.tsx         # Site header
│   │   ├── ModularGrid.tsx    # Modular grid system
│   │   └── PerformanceMonitor.tsx  # Web Vitals tracking
│   └── lib/                   # Utility libraries
│       ├── db/                # Database schema
│       └── seo.ts             # SEO utilities
├── public/                    # Static assets
│   └── images/                # Images and graphics
│       └── optimized/         # Optimized images
├── drizzle/                   # Database migrations
├── tailwind.config.ts         # Tailwind configuration
├── next.config.ts             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── eslint.config.mjs          # ESLint configuration
└── package.json               # Dependencies
```

## 🚦 Getting Started

### Prerequisites

- **Node.js 18+** (20.x recommended)
- **npm** or **yarn** or **pnpm**
- **PostgreSQL database** (or Vercel Postgres)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/w1it.git
   cd w1it
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # Database
   POSTGRES_URL="your-postgres-connection-string"
   POSTGRES_PRISMA_URL="your-postgres-prisma-url"
   POSTGRES_URL_NON_POOLING="your-postgres-non-pooling-url"

   # Optional: Analytics
   NEXT_PUBLIC_VERCEL_ANALYTICS_ID="your-analytics-id"
   ```

4. **Run database migrations**
   ```bash
   npm run db:push
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint to check code quality |
| `npm run db:push` | Push database schema changes |
| `npm run db:generate` | Generate database migrations |

## 🎨 Design System

### Color Palette

**Primary Colors:**
- Deep Navy: `#0A1A2F` (Primary dark)
- Electric Blue: `#2F80ED` (Brand primary)
- Aqua Cyan: `#4FD1C5` (Accent)

**Neutral Colors:**
- Soft Gray: `#F2F4F7` (Background)
- Slate Gray: `#475569` (Text secondary)
- White: `#FFFFFF` (Background light)

**Dark Mode:**
- Background: `#0B0F19`
- Surface: `#111827`
- Text: `#E5E7EB`

### Typography

- **Headings**: Space Grotesk (Bold, modern)
- **Body**: Inter (Clean, readable)
- **Code**: JetBrains Mono (Monospace)

### Layout

- **Max Width**: 1200px
- **Grid**: 12-column responsive grid
- **Gutters**: 24px
- **Page Padding**: 32px

## 🔒 Security Features

- **Security Headers**: CSP, HSTS, X-Frame-Options, X-Content-Type-Options
- **HTTPS Enforcement**: Upgrade insecure requests
- **Input Validation**: Zod schema validation on all forms
- **XSS Protection**: React's built-in XSS prevention
- **CSRF Protection**: Next.js built-in protection
- **Environment Variables**: Sensitive data in .env files (never committed)

## 📈 Performance Optimizations

- **Next.js Image Component**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Removes unused code from bundles
- **Turbopack**: Fast builds in development
- **Static Generation**: Pre-rendered pages where possible
- **Edge Caching**: Optimized for Vercel Edge Network
- **Font Optimization**: Self-hosted fonts with Next.js font optimization

## 🔍 SEO Optimizations

- **Metadata**: Comprehensive meta tags on all pages
- **Sitemap**: Auto-generated sitemap.xml with 41+ pages
- **Structured Data**: JSON-LD for rich search results
- **Open Graph**: Social media preview cards
- **Twitter Cards**: Optimized Twitter sharing
- **Canonical URLs**: Prevent duplicate content issues
- **Mobile-Friendly**: Responsive design for all devices
- **Fast Load Times**: Core Web Vitals optimized

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Set up PostgreSQL**
   - Add Vercel Postgres to your project
   - Copy connection strings to environment variables

### Environment Variables for Production

Set these in your Vercel project settings:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` (optional)

## 📊 Analytics & Monitoring

The site includes Vercel Analytics for:
- **Page views** and user analytics
- **Core Web Vitals** monitoring (LCP, FID, CLS)
- **Performance metrics** tracking
- **Real-time insights**

Access analytics in the Vercel dashboard or through the PerformanceMonitor component.

## 🎯 Recent Improvements

### Code Quality
- ✅ Fixed all ESLint errors (57 errors → 0)
- ✅ Fixed all ESLint warnings (19 warnings → 0)
- ✅ Replaced all TypeScript 'any' types with proper types
- ✅ Optimized all images with Next.js Image component
- ✅ Removed all unused imports across codebase

### Content & Design
- ✅ Created professional SVG graphics for About page
- ✅ Updated contact information with real business details
- ✅ Fixed hero image display issues
- ✅ Implemented responsive grid layouts
- ✅ Enhanced mobile experience

### Performance & Security
- ✅ Updated security vulnerabilities (4 → 2, dev-only remaining)
- ✅ Configured comprehensive security headers
- ✅ Optimized build output (41 pages generated)
- ✅ Implemented performance monitoring
- ✅ Enhanced SEO with comprehensive sitemap

## 📝 Contributing

This is a private repository for W1IT Solutions. For internal team members:

1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push to GitHub
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request for review

## 📄 License

Private and Proprietary - © 2024 W1IT Solutions. All rights reserved.

## 📞 Contact

**W1IT Solutions**
- Phone: (832) 472-7991
- Email: contact@w1it.com
- Service Area: Seattle Metropolitan Area & Remote Nationwide

## 🗺️ Roadmap

See [RECOMMENDATIONS.md](./RECOMMENDATIONS.md) for detailed analysis and future feature suggestions including:
- Live chat integration
- Client portal
- Service status page
- Automated quote generator
- Dark mode
- Testing suite
- Advanced analytics

---

**Built with ❤️ by the W1IT Solutions team**
