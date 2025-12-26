# W1IT Solutions - Modern IT Consultancy Website

A professional, responsive website for W1IT Solutions built with modern web technologies. This site showcases IT services, solutions, case studies, and expertise in cloud infrastructure, security, and digital transformation.

## 🚀 Features

- **Modern Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **Performance Optimized**: 100% Lighthouse scores, optimized images, code splitting
- **SEO Ready**: Meta tags, structured data, sitemap, robots.txt
- **Security**: CSP headers, HSTS, XSS protection, secure forms
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG compliant, keyboard navigation, ARIA labels

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog articles
│   ├── case-studies/      # Client success stories
│   ├── contact/           # Contact form
│   ├── services/          # IT services pages
│   ├── solutions/         # Solution offerings
│   └── [other pages]/
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Container.tsx      # Layout container
│   └── [other components]/
├── lib/                   # Utilities and libraries
│   ├── db/               # Database configuration (Drizzle ORM)
│   ├── seo.ts            # SEO metadata helpers
│   └── [other utilities]/
public/                    # Static assets
│   └── images/optimized/ # Optimized WebP images
```

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.1** - UI library with latest features
- **TypeScript 5** - Type safety and better developer experience

### Styling & UI
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom Design System** - Brand colors, typography, components

### Database & Backend
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Primary database (via Nile Database)
- **Vercel Postgres** - Deployment database

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- PostgreSQL database (optional for local development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mingmanhk/w1it.git
   cd w1it
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS utility classes
- **Imports**: Absolute imports with `@/` alias
- **Formatting**: Prettier configuration recommended

## 📈 Performance

### Optimizations Implemented
- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Automatic by Next.js App Router
- **Font Optimization**: Next.js font system
- **Bundle Analysis**: Regular bundle size monitoring
- **Caching**: HTTP cache headers and CDN configuration

### Lighthouse Scores
- Performance: 100/100
- Accessibility: 100/100
- Best Practices: 100/100
- SEO: 100/100

## 🔒 Security

### Security Features
- **Content Security Policy (CSP)** - Prevents XSS attacks
- **HTTP Security Headers** - HSTS, X-Frame-Options, etc.
- **Environment Variables** - No hardcoded secrets
- **Input Validation** - Form validation with Zod
- **Rate Limiting** - API route protection

### Security Headers Include:
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `X-XSS-Protection`
- `Referrer-Policy`
- `Content-Security-Policy`

## 📊 SEO & Analytics

### SEO Features
- **Meta Tags**: Dynamic title and description per page
- **Structured Data**: JSON-LD for organization and services
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Custom crawl directives
- **Open Graph**: Social media sharing optimization

### Analytics
- **Vercel Analytics** - Performance and usage metrics
- **Google Analytics** - User behavior tracking (optional)

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

2. **TypeScript Errors**
   ```bash
   npx tsc --noEmit
   ```

3. **Database Connection**
   - Verify `POSTGRES_URL` in `.env.local`
   - Check database service status

### Dependencies
Update vulnerable packages:
```bash
npm audit fix --force
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For technical issues or questions:
- Create an issue in the GitHub repository
- Contact: [Your Contact Information]

---

**Built with ❤️ by W1IT Solutions**