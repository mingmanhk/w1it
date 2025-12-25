# W1 IT Solutions - Modern IT Services Website

A professional, modern website for W1 IT Solutions, a Seattle-based IT services provider specializing in serverless migration, cloud infrastructure, and managed IT services.

## 🚀 Features

### Modern Tech Stack
- **Next.js 16.1.1** with App Router for optimal performance
- **TypeScript** for type-safe development
- **Tailwind CSS v4** with custom design system
- **PostgreSQL** with Drizzle ORM for data management
- **Vercel Analytics** + **Google Analytics** for insights
- **Responsive Design** with mobile-first approach

### Professional Design
- Modern gradient backgrounds with animated elements
- Professional IT color palette (blue, green, violet accents)
- Poppins (headings) and Inter (body) font pairing
- Card-based service displays with hover effects
- Mega menus for comprehensive navigation
- Glassmorphism effects for depth

### Business Features
- **Service Catalog**: 6 IT service categories with detailed pages
- **Solution Pages**: Data analytics and digital transformation solutions
- **Product/App Showcase**: 4 featured applications
- **Blog System**: 6 technical articles on IT topics
- **Contact System**: Lead capture with file attachments
- **Case Studies**: Client success stories
- **Team Management**: Experience, certifications, and skills tracking

## 📁 Project Structure

```
w1itcom/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (routes)/          # Main website pages
│   │   ├── blog/              # Blog articles
│   │   ├── services/          # IT service pages
│   │   ├── solutions/         # Solution pages
│   │   └── apps/              # Product/app pages
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx         # Responsive navigation
│   │   ├── Footer.tsx         # Multi-column footer
│   │   ├── Container.tsx      # Layout wrapper
│   │   ├── Button.tsx         # Button variants
│   │   └── Card.tsx           # Card component
│   └── lib/                   # Utilities and database
│       ├── db/                # Database configuration
│       │   ├── schema.ts      # Database schema
│       │   └── index.ts       # Database connection
│       └── utils/             # Utility functions
├── public/                    # Static assets
│   ├── images/               # Optimized images
│   ├── icons/                # SVG icons
│   ├── robots.txt           # SEO configuration
│   └── sitemap.xml          # SEO sitemap
├── drizzle/                  # Database migrations
└── Configuration files       # Build and project config
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm/bun
- PostgreSQL database (Vercel Postgres recommended)

### Environment Variables
Create a `.env.local` file in the root directory:

```bash
POSTGRES_URL=your_postgres_connection_string
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_google_analytics_id
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mingmanhk/w1it.git
cd w1it
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up the database:
```bash
# Push schema to database
npx drizzle-kit push

# Generate migrations (if needed)
npx drizzle-kit generate
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Deployment
The project is optimized for deployment on **Vercel**:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

Alternative deployment options:
- **Netlify**: Configure as static site with serverless functions
- **AWS Amplify**: Full-stack deployment with AWS services
- **Docker**: Containerized deployment option available

## 🎨 Design System

### Colors
- **Primary**: `#2563eb` (Professional blue)
- **Secondary**: `#10b981` (Success green)
- **Accent**: `#8b5cf6` (Innovation violet)
- **Background**: Gradient combinations
- **Text**: `#1f2937` (Dark gray) / `#f9fafb` (Light gray)

### Typography
- **Headings**: Poppins (600-700 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono

### Spacing Scale
- `xs`: 8px, `sm`: 12px, `md`: 16px, `lg`: 24px, `xl`: 32px, `2xl`: 64px

### Shadows & Effects
- Card shadows with hover elevation
- Gradient backgrounds with animation
- Glassmorphism effects for modals
- Smooth transitions (300ms ease-in-out)

## 🔧 Database Schema

The application uses a comprehensive PostgreSQL schema:

### Core Tables
- **services**: IT service catalog with pricing and features
- **blog_posts**: Technical articles with categories and tags
- **inquiries**: Lead capture with file attachments
- **testimonials**: Client reviews and ratings
- **team_members**: Staff profiles with skills and certifications
- **appointments**: Scheduling system for consultations

### Features
- Full-text search on blog posts
- File upload support for inquiries
- Analytics tracking for service views
- Appointment scheduling with availability slots
- Team member experience tracking

## 📱 Pages & Routes

### Main Pages
- `/` - Homepage with service showcase
- `/about` - Company overview and team
- `/contact` - Contact form and information
- `/it-consulting` - Consulting services
- `/case-studies` - Client success stories

### Services (`/services/`)
- Cloud Solutions
- Managed Services
- Network Setup
- Remote Support
- Security Services
- Technical Writing

### Solutions (`/solutions/`)
- Data Analytics
- Digital Transformation

### Apps (`/apps/`)
- Contact SyncMate
- DeepTicker
- Pixel Color Picker
- ScreenGrabber

### Blog (`/blog/`)
- 6 technical articles on IT topics
- Category and tag filtering
- SEO-optimized content

## 🚀 Performance Optimizations

### Built-in Optimizations
- **Image Optimization**: Next.js Image component with AVIF/WebP support
- **Font Optimization**: `next/font` with automatic subsetting
- **Code Splitting**: Automatic route-based code splitting
- **CSS Minification**: Tailwind CSS production optimization
- **Compression**: Brotli and Gzip compression enabled

### Additional Optimizations
- Lazy loading for images and components
- Font display strategy for faster text rendering
- Reduced JavaScript bundle size
- Optimized database queries with Drizzle ORM

## 📊 SEO & Analytics

### SEO Features
- Comprehensive metadata with OpenGraph and Twitter cards
- Dynamic sitemap generation
- `robots.txt` configuration
- Semantic HTML structure
- Fast Core Web Vitals scores

### Analytics Integration
- **Google Analytics 4**: Page views and user behavior
- **Vercel Analytics**: Performance monitoring
- **Custom Analytics**: Service view tracking

## 🔒 Security

### Implemented Measures
- Environment variable protection
- Database connection pooling
- Input validation with Zod schemas
- Secure file upload handling
- XSS protection with React

### Recommended Additions
- Rate limiting for API routes
- CSP headers for content security
- HTTPS enforcement
- Regular dependency updates

## 📈 Business Features

### Lead Management
- Contact form with file attachments
- Inquiry tracking system
- Follow-up workflow integration
- CRM integration ready

### Content Management
- Blog system with categories
- Service catalog management
- Team member profiles
- Case study showcase

### Analytics & Reporting
- Service popularity tracking
- Lead source attribution
- Performance metrics
- Custom reporting dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain consistent component structure
- Write meaningful commit messages
- Update documentation as needed

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Support

For technical support or business inquiries:
- Email: support@w1it.com
- Website: https://w1it.com
- GitHub Issues: For bug reports and feature requests

---

**Built with ❤️ by W1 IT Solutions** | **Seattle-Based IT Excellence**