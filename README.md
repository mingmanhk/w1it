# W1IT Solutions - Professional IT Managed Services Website

A modern, high-performance website built with Next.js 16, TypeScript 5, and Tailwind CSS for W1IT Solutions, a leading IT managed service provider. Featuring enhanced UI/UX design, comprehensive SEO optimization, and enterprise-grade performance.

[![Live Site](https://img.shields.io/badge/Live%20Site-w1it.com-blue)](https://w1it.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)](https://vercel.com)

## 🚀 Live Demo

**Production Site:** [https://w1it.com](https://w1it.com)

## ✨ Modern Features

### 🎨 Enhanced UI/UX Design
- **Modern Glassmorphism Effects** - Sleek frosted glass components with backdrop blur
- **Smooth Micro-Interactions** - Hover effects, transitions, and loading animations
- **Dark/Light Mode Ready** - Built with theming support
- **Responsive Typography** - Fluid type scaling across all devices
- **Accessibility First** - WCAG 2.1 AA compliant with semantic HTML
- **Modern Component Library** - Reusable, type-safe components

### ⚡ Performance Optimized
- **Next.js 16 App Router** - Latest features with Turbopack for faster development
- **Image Optimization** - Automatic WebP, AVIF with Next.js Image component
- **Code Splitting** - Automatic route-based code splitting
- **Minimal Bundle Size** - Tree-shaking and dead code elimination
- **Fast Build Times** - Turbopack for lightning-fast HMR
- **PWA Ready** - Service worker and offline capabilities

### 🔍 SEO & Analytics
- **Comprehensive SEO** - Meta tags, Open Graph, Twitter Cards, JSON-LD
- **Auto-generated Sitemap** - Dynamic sitemap generation on build
- **Structured Data** - Schema.org markup for better search visibility
- **Analytics Integration** - Vercel Analytics and Google Analytics
- **Performance Monitoring** - Core Web Vitals optimization
- **Local SEO** - Location pages with LocalBusiness schema

### 🛡️ Reliability & Security
- **Type Safety** - Full TypeScript implementation with strict mode
- **Error Boundary** - Graceful error handling with user-friendly fallback UI
- **Input Validation** - Form validation and sanitization
- **Security Headers** - CSP, XSS protection, and HTTPS enforcement
- **Code Quality** - ESLint, Prettier, and TypeScript strict mode
- **Automated Testing** - Jest and React Testing Library setup

## 📱 Responsive Design

| Breakpoint | Device | Features |
|------------|--------|----------|
| < 640px | Mobile | Mobile-first design, touch-optimized |
| 640px - 768px | Tablet | Adaptive layouts, enhanced navigation |
| 768px - 1024px | Small Desktop | Full feature set, optimized spacing |
| > 1024px | Desktop | Advanced layouts, hover interactions |

## 🏗️ Project Structure

`
w1it/
├── src/
│   ├── app/                    # Next.js 16 App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── services/          # Services pages
│   │   ├── locations/         # Location pages (SEO optimized)
│   │   ├── case-studies/      # Case studies
│   │   └── contact/           # Contact page
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components (Button, Card, etc.)
│   │   ├── layout/           # Layout components
│   │   ├── sections/         # Page sections
│   │   └── shared/           # Shared components
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts          # Helper functions
│   │   └── constants.ts      # Constants and configuration
│   └── styles/               # Global styles
├── public/                   # Static assets
├── drizzle/                  # Database schema
├── scripts/                  # Build and utility scripts
└── package.json              # Dependencies and scripts
`

## 🎯 Services Showcase

### **IT Managed Services**
- 24/7 Monitoring & Support
- Cybersecurity Solutions
- Cloud Infrastructure
- Network Management
- Data Backup & Recovery

### **Consulting Services**
- Digital Transformation
- IT Strategy & Planning
- Compliance & Security Audits
- Technology Assessment
- Vendor Management

### **Case Studies**
- European Ferry Company - Infrastructure Modernization
- Financial Trading Company - Cybersecurity Enhancement
- Bellevue Business District - Local IT Support

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router and Turbopack
- **React 19.2.1** - UI library with latest features
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **CSS Modules** - Component-scoped styles
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Git** - Version control
- **Vercel** - Deployment and hosting

### Performance & SEO
- **Next.js Image** - Automatic image optimization
- **Next.js Font** - Font optimization
- **Next.js Metadata** - SEO optimization
- **Sitemap Generation** - Automatic sitemap
- **Structured Data** - JSON-LD schema markup

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation
`ash
# Clone the repository
git clone https://github.com/mingmanhk/w1it.git
cd w1it

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
`

### Available Scripts
- 
pm run dev - Start development server with hot reload
- 
pm run build - Build for production
- 
pm start - Start production server
- 
pm run lint - Run ESLint for code quality
- 
pm run format - Format code with Prettier
- 
pm run type-check - Run TypeScript type checking

## 📈 Performance Metrics

| Metric | Target | Current Status |
|--------|--------|----------------|
| Largest Contentful Paint (LCP) | < 2.5s | ✅ Optimized |
| First Input Delay (FID) | < 100ms | ✅ Optimized |
| Cumulative Layout Shift (CLS) | < 0.1 | ✅ Optimized |
| Time to Interactive (TTI) | < 3.5s | ✅ Optimized |
| Bundle Size | < 200KB | ✅ Optimized |
| Core Web Vitals | All Passing | ✅ Optimized |

## 🔧 Configuration

### Environment Variables
Create a .env.local file in the root directory:
`nv
NEXT_PUBLIC_SITE_URL=https://w1it.com
NEXT_PUBLIC_SITE_NAME=W1IT Solutions
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
`

### Build Configuration
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic route-based splitting
- **Minification**: CSS and JavaScript minification
- **Source Maps**: Production source maps for debugging
- **Bundle Analysis**: @next/bundle-analyzer integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/AmazingFeature)
3. Commit changes (git commit -m 'Add some AmazingFeature')
4. Push to branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Contact

W1IT Solutions - [Website](https://w1it.com) - [Email](mailto:info@w1it.com) - [Phone](tel:+12535550101)

Project Link: [https://github.com/mingmanhk/w1it](https://github.com/mingmanhk/w1it)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Platform](https://vercel.com)
- [React Documentation](https://reactjs.org/)
- All contributors and supporters

---

**Last Updated:** March 21, 2026  
**Version:** 3.0.0  
**Status:** 🟢 Production Ready  
**Live URL:** https://w1it.com
