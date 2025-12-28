# W1IT Website Design System
## Master Blueprint & Implementation Guide

**Version:** 2.0
**Last Updated:** 2025-12-28
**Status:** Production Ready

---

## Table of Contents

1. [Brand & Visual Identity](#1-brand--visual-identity)
2. [Layout & Structure](#2-layout--structure)
3. [Component Library](#3-component-library)
4. [Content Architecture](#4-content-architecture)
5. [Interaction & Behavior](#5-interaction--behavior)
6. [Technical Implementation](#6-technical-implementation)

---

## 🎨 1. Brand & Visual Identity

### 1.1 Color Palette

#### Primary Colors
```css
Brand Navy:      #0A1A2F  /* Deep navy - primary background */
Electric Blue:   #2F80ED  /* Primary accent - CTAs, links */
Teal:            #4FD1C5  /* Secondary accent - highlights */
White:           #FFFFFF  /* Clean backgrounds, text on dark */
```

#### Extended Color System

**Primary Palette (Blue-based)**
```css
primary-50:  #eff6ff  /* Lightest - badges, backgrounds */
primary-100: #dbeafe  /* Very light - hover states */
primary-500: #2F80ED  /* Main brand blue */
primary-600: #2563eb  /* Darker - button hover */
primary-700: #1d4ed8  /* Darkest - active states */
```

**Secondary Palette (Teal-based)**
```css
secondary-50:  #ecfeff  /* Lightest teal */
secondary-400: #4FD1C5  /* Main teal */
secondary-600: #0891b2  /* Darker teal */
```

**Neutral Palette (Grays)**
```css
neutral-50:  #F2F4F7  /* Light backgrounds */
neutral-100: #f1f5f9  /* Card backgrounds */
neutral-600: #475569  /* Secondary text */
neutral-800: #1e293b  /* Body text */
neutral-900: #0f172a  /* Primary text */
```

**Semantic Colors**
```css
Charcoal:     #1e293b  /* Dark text on light backgrounds */
Rose:         #f43f5e  /* Error states, alerts */
Blush:        #fdf2f8  /* Light pink backgrounds */
Gray Medium:  #64748b  /* Muted text */
Gray BG:      #F2F4F7  /* Section backgrounds */
```

#### Color Usage Rules

**✅ DO:**
- Use Brand Navy for hero backgrounds and dark sections
- Use Electric Blue for all primary CTAs and links
- Use Teal for secondary accents and highlights
- Use neutral colors for body text and UI elements
- Maintain 4.5:1 contrast ratio minimum (WCAG AA)

**❌ DON'T:**
- Use brand colors at low opacity (<40%) on colored backgrounds
- Mix multiple accent colors in a single component
- Use gray text lighter than neutral-600 on white backgrounds

### 1.2 Typography System

#### Font Families
```css
Headings:  'Space Grotesk', sans-serif  /* font-heading */
Body:      'Inter', sans-serif          /* font-body */
Code:      'JetBrains Mono', monospace  /* font-code */
```

#### Type Scale

**Headings**
```css
H1: 56px / 1.1      (mobile: 36px)  /* Hero headlines */
H2: 40px / 1.2      (mobile: 28px)  /* Section titles */
H3: 32px / 1.25     (mobile: 24px)  /* Subsection titles */
H4: 24px / 1.3      (mobile: 20px)  /* Card titles */
H5: 20px / 1.4      (mobile: 18px)  /* Small headings */
H6: 18px / 1.4      (mobile: 16px)  /* Labels */
```

**Body Text**
```css
Large:  20px / 1.5  /* Hero descriptions */
Normal: 16px / 1.5  /* Body copy */
Small:  14px / 1.5  /* Captions, meta */
Tiny:   12px / 1.5  /* Fine print */
```

#### Typography Rules

**✅ DO:**
- Use Space Grotesk (font-heading) for all headings
- Use Inter (font-body) for all body text
- Bold headings (font-bold)
- Keep line length under 75 characters for readability
- Use responsive font sizes (mobile → desktop)

**❌ DON'T:**
- Use font-display, font-inter, or font-sans (deprecated)
- Mix font families within a single text block
- Use all-caps for more than 3 words
- Set line-height below 1.4 for body text

### 1.3 Iconography

#### Icon Style
- **Library:** Lucide React
- **Style:** Minimal, geometric, outlined
- **Weight:** 2px stroke
- **Sizes:** 16px (sm), 20px (md), 24px (lg), 32px (xl)

#### Icon Usage
```tsx
import { Calendar, ArrowRight, Server } from 'lucide-react';

// Small (navigation, inline)
<Calendar className="w-4 h-4" />

// Medium (buttons, cards)
<Server className="w-5 h-5" />

// Large (feature sections)
<TrendingUp className="w-10 h-10" />
```

**Color Rules:**
- White icons on dark backgrounds
- Primary-500 icons on light backgrounds
- Neutral-600 icons for secondary elements

### 1.4 Geometric Backdrop System

#### Purpose
Geometric shapes add visual interest and depth without overwhelming content.

#### Implementation
```tsx
// Primary geometric shape (larger, top-right)
<div className="absolute top-1/4 right-1/4
  w-96 h-96
  bg-primary-500/10
  rounded-full blur-3xl
  animate-pulse-subtle"
/>

// Secondary shape (smaller, bottom-right)
<div className="absolute bottom-1/4 right-1/3
  w-64 h-64
  bg-secondary-400/10
  rounded-full blur-3xl
  animate-pulse-subtle"
  style={{ animationDelay: '2s' }}
/>
```

#### Rules
- **Desktop:** Position shapes on the right (25-33% from edge)
- **Mobile:** Center shapes behind content
- **Opacity:** 5-10% maximum
- **Blur:** 48px (blur-3xl)
- **Animation:** Subtle pulse (3s cycle)
- **Z-index:** Always below content (no z-index or z-0)

### 1.5 Logo Usage

#### Logo Specifications
- **File Format:** WebP primary, PNG fallback
- **Dimensions:** 40×40px standard
- **Minimum Size:** 32px (mobile)
- **Clear Space:** Minimum 16px on all sides

#### Logo Placement
```tsx
<Image
  src="/images/optimized/Logo.webp"
  alt="W1IT Solutions Logo"
  width={40}
  height={40}
  className="rounded-lg"
  priority
/>
```

**✅ DO:**
- Use on white or dark navy backgrounds
- Maintain aspect ratio
- Include "W1IT" text alongside logo
- Preload logo (priority prop)

**❌ DON'T:**
- Place on busy backgrounds
- Stretch or distort
- Use at sizes below 32px
- Add drop shadows or effects

---

## 🖥️ 2. Layout & Structure

### 2.1 Header Layout

#### Structure
```
┌──────────────────────────────────────────────┐
│ [Logo + W1IT]  Nav Links    [Get in Touch]  │
└──────────────────────────────────────────────┘
```

#### Specifications
- **Height:** 80px (h-20)
- **Position:** Fixed top
- **Background:** `bg-white/80 backdrop-blur-lg`
- **Shadow:** `shadow-sm`
- **Z-index:** 50

#### Desktop Navigation
- **Logo:** Left-aligned
- **Nav Links:** Center-aligned (Services, Solutions, Industries, Company)
- **CTA Button:** Right-aligned ("Get in Touch")

#### Mobile Navigation
- **Hamburger:** Right-aligned
- **Menu:** Full-screen overlay
- **Animation:** Fade in from top

#### Implementation
```tsx
<header className="fixed top-0 left-0 w-full
  bg-white/80 backdrop-blur-lg z-50 shadow-sm">
  <Container className="flex items-center justify-between h-20">
    {/* Logo, Nav, CTA */}
  </Container>
</header>
```

### 2.2 Hero Section Structure

#### Desktop Layout (≥768px)
```
┌─────────────────────────────────────────┐
│  [Badge]                            [●] │
│  Enterprise-Grade IT Support        [●] │
│  Built for Small Business Success       │
│                                          │
│  Description text (left-aligned)        │
│                                          │
│  [Primary CTA] [Secondary CTA]          │
│                                          │
│  10+ Years  200+ Projects  99.9% ↔ 24/7 │
└─────────────────────────────────────────┘
```

#### Mobile Layout (<768px)
```
┌─────────────────┐
│    [Badge]      │
│                 │
│   [●] Shapes    │
│                 │
│ Enterprise IT   │
│    Support      │
│                 │
│  Description    │
│                 │
│  [Primary CTA]  │
│  [Second CTA]   │
│                 │
│ Trust Indicators│
│  ┌──┐  ┌──┐    │
│  │10│  │200│   │
│  └──┘  └──┘    │
└─────────────────┘
```

#### Dimensions
```css
Desktop (md): min-h-[480px]  /* 2.75:1 ratio */
Large (lg):   min-h-[640px]  /* 4:1 ratio */
Mobile:       min-h-[600px]  /* 3:4 ratio */
```

#### Spacing
```css
Padding Top:    pt-16 md:pt-24
Padding Bottom: pb-24 md:pb-32
```

### 2.3 Section Spacing

#### Standard Section
```tsx
<section className="py-20 md:py-32 bg-white">
  <Container>
    {/* Section content */}
  </Container>
</section>
```

#### Section Spacing Tokens
```tsx
import { spacing } from '@/styles/tokens';

spacing.section       // py-20 md:py-32 (standard)
spacing.sectionLarge  // py-32 md:py-40 (feature sections)
spacing.sectionSmall  // py-16 md:py-24 (compact sections)
```

#### Vertical Rhythm
- **Between sections:** 80px (desktop), 64px (mobile)
- **Between elements:** 24-32px
- **Between paragraphs:** 16px

### 2.4 Grid System

#### 12-Column Grid (Desktop)
```tsx
// 3-column layout
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

// 2-column layout
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

// 4-column layout
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
```

#### Gap Sizes
```css
Small:  gap-4   (16px)  /* Tight spacing */
Medium: gap-8   (32px)  /* Standard */
Large:  gap-12  (48px)  /* Breathing room */
XL:     gap-16  (64px)  /* Feature sections */
```

### 2.5 Responsive Breakpoints

```css
Mobile:       < 640px   (sm)
Tablet:       640-1024px (md)
Desktop:      1024-1280px (lg)
Large:        1280-1536px (xl)
Extra Large:  > 1536px (2xl)
```

#### Tailwind Breakpoint Usage
```tsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
```

### 2.6 Container Sizes

```tsx
import Container from '@/components/Container';

<Container size="sm">  // max-w-3xl  (768px)
<Container size="md">  // max-w-5xl  (1024px) - default
<Container size="lg">  // max-w-7xl  (1280px)
<Container size="xl">  // max-w-screen-2xl (1536px)
```

---

## 🧱 3. Component Library

### 3.1 Hero Banner

**Purpose:** Primary landing section with headline, CTA, and visual interest

**Structure:**
- Badge/Label (glass effect)
- H1 Headline (2 lines max)
- Gradient accent text
- Description (2-3 sentences)
- Primary + Secondary CTAs
- Trust indicators

**Code Example:**
```tsx
<section className="relative min-h-[600px] md:min-h-[480px]
  lg:min-h-[640px] pt-16 pb-24 md:pt-24 md:pb-32
  bg-gradient-dark text-white overflow-hidden">

  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

  <Container>
    <div className="max-w-5xl mx-auto text-center md:text-left">
      <div className="glass px-6 py-3 rounded-full">
        <span>Badge Text</span>
      </div>

      <h1 className="font-heading font-bold text-4xl sm:text-5xl
        md:text-6xl lg:text-7xl mb-8 md:mb-10">
        Main Headline
        <span className="block text-gradient-primary mt-2">
          Gradient Accent
        </span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl mb-10">
        Description text...
      </p>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        <Button href="/contact" size="xl"
          className="bg-gradient-primary">
          Primary CTA
        </Button>
        <Button href="/services" variant="outline" size="xl">
          Secondary CTA
        </Button>
      </div>
    </div>
  </Container>
</section>
```

### 3.2 Value Pillars

**Purpose:** Showcase 3 C's (Clarity, Confidence, Control)

**Structure:**
- Section header
- 3-column grid (stacked on mobile)
- Gradient card headers
- Icon + Title
- Description + Benefits list

**Card Design:**
- Gradient top section (color-coded)
- White content area
- Icon in rounded container
- Bulleted benefits list

**Code Example:**
```tsx
<section className="py-40 bg-white">
  <Container>
    <div className="text-center mb-32">
      <div className="bg-primary-50 text-primary-700
        rounded-full px-5 py-2.5 inline-block mb-6">
        Our Approach
      </div>
      <h2 className="font-heading font-bold text-4xl md:text-5xl
        lg:text-6xl mb-8">
        Give Your Business the 3 C's
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      {valuePillars.map((pillar) => (
        <Card key={pillar.title} hoverable>
          <div className={`bg-gradient-to-br ${pillar.gradient}
            p-10 text-white rounded-t-2xl`}>
            <div className="w-16 h-16 bg-white/20 rounded-2xl
              flex items-center justify-center">
              {pillar.icon}
            </div>
            <h3 className="font-heading font-bold text-3xl mt-8">
              {pillar.title}
            </h3>
          </div>
          <div className="p-10">
            <p className="text-lg mb-6">{pillar.description}</p>
            <ul className="space-y-2">
              {pillar.benefits.map((benefit) => (
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      ))}
    </div>
  </Container>
</section>
```

### 3.3 Service Cards

**Purpose:** Display individual services with icon, title, description

**Design:**
- Icon (24px) in rounded container
- Service title (H3)
- Short description
- Feature list (optional)
- Learn More link

**Card States:**
- Default: White background, subtle border
- Hover: Elevated shadow, slight scale
- Active: Primary border

**Code Example:**
```tsx
<Card hoverable className="border-2 border-neutral-100
  hover:border-primary-200">
  <div className="p-8">
    <div className="w-12 h-12 bg-primary-50 rounded-lg
      flex items-center justify-center mb-6">
      <Server className="w-6 h-6 text-primary-500" />
    </div>

    <h3 className="font-heading font-bold text-2xl mb-4">
      Service Title
    </h3>

    <p className="text-neutral-600 mb-6">
      Service description...
    </p>

    <Link href="/service"
      className="text-primary-600 hover:text-primary-700
      font-medium inline-flex items-center">
      Learn More
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </div>
</Card>
```

### 3.4 Industry Grid

**Purpose:** Display industries served with visual consistency

**Layout:**
- 3 or 4 column grid
- Icon + Industry name
- Brief description
- Consistent card sizing

**Code Example:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {industries.map((industry) => (
    <Card key={industry.name} hoverable>
      <div className="p-8 text-center">
        <div className="w-16 h-16 bg-secondary-50 rounded-full
          flex items-center justify-center mx-auto mb-6">
          {industry.icon}
        </div>
        <h3 className="font-heading font-bold text-xl mb-3">
          {industry.name}
        </h3>
        <p className="text-neutral-600 text-sm">
          {industry.description}
        </p>
      </div>
    </Card>
  ))}
</div>
```

### 3.5 Testimonial Cards

**Purpose:** Display client testimonials with credibility

**Structure:**
- Quote text
- Client name
- Company/Title
- Optional avatar/logo

**Design:**
- Quote marks or icon
- Italic quote text
- Bold client name
- Subtle company info

**Code Example:**
```tsx
<Card className="bg-neutral-50">
  <div className="p-8">
    <div className="text-primary-500 mb-4">
      <Quote className="w-8 h-8" />
    </div>

    <blockquote className="text-lg italic mb-6">
      "{testimonial.quote}"
    </blockquote>

    <div className="flex items-center">
      <div>
        <div className="font-heading font-bold">
          {testimonial.name}
        </div>
        <div className="text-sm text-neutral-600">
          {testimonial.title}, {testimonial.company}
        </div>
      </div>
    </div>
  </div>
</Card>
```

### 3.6 CTA Blocks

**Purpose:** Drive conversions at strategic points

**Types:**
1. **Inline CTA:** Within content flow
2. **Banner CTA:** Full-width section
3. **Sticky CTA:** Fixed bottom bar (mobile)

**Design Rules:**
- High contrast background
- Clear value proposition
- Single primary action
- Optional secondary action

**Code Example:**
```tsx
<section className="bg-gradient-primary py-20">
  <Container>
    <div className="max-w-4xl mx-auto text-center text-white">
      <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
        Ready to Transform Your IT?
      </h2>

      <p className="text-xl mb-10 opacity-90">
        Schedule a free consultation with our experts.
      </p>

      <Button href="/contact" size="xl"
        className="bg-white text-primary-600
        hover:bg-neutral-50">
        Get Started Today
      </Button>
    </div>
  </Container>
</section>
```

### 3.7 Footer Layout

**Structure:**
- 4-column grid (stacked on mobile)
- Company info column
- Quick links
- Services links
- Contact info
- Copyright + legal links

**Code Example:**
```tsx
<footer className="bg-brand-navy text-white pt-16 pb-8">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Logo + Description */}
      <div>
        <Image src="/logo.webp" width={40} height={40} />
        <p className="text-dark-text/80 mt-4">
          Enterprise IT support for small businesses.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-heading font-bold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* More columns... */}
    </div>

    <div className="border-t border-white/10 pt-8">
      <p className="text-center text-dark-text/60 text-sm">
        © 2025 W1IT Solutions. All rights reserved.
      </p>
    </div>
  </Container>
</footer>
```

---

## 📝 4. Content Architecture

### 4.1 Homepage Messaging Hierarchy

```
1. Hero: Value Proposition
   "Enterprise-Grade IT Support Built for Small Business Success"

2. Value Pillars: 3 C's
   - Clarity
   - Confidence
   - Control

3. Core Services: What We Do
   - Managed Services
   - Cloud Solutions
   - Security
   - Network Setup

4. Feature Highlights: How We're Different
   - Proactive monitoring
   - Expert support
   - Scalable solutions

5. Industries: Who We Serve
   - Healthcare
   - Professional Services
   - Finance
   - Retail

6. Testimonials: Social Proof

7. Final CTA: Conversion
```

### 4.2 Services → Solutions → Industries Flow

**Navigation Logic:**
- **Services:** What we offer (Managed IT, Cloud, Security)
- **Solutions:** How we solve problems (Cybersecurity, Digital Transformation)
- **Industries:** Who we serve (Healthcare, Finance, Retail)

**Cross-Linking Strategy:**
- Services pages link to relevant Solutions
- Solutions pages link to relevant Industries
- Industry pages link to relevant Services

### 4.3 Blog Structure

**Categories:**
- IT Strategy
- Security Best Practices
- Cloud Migration
- Industry Insights
- How-To Guides

**Blog Post Template:**
- Hero image
- Title + Subtitle
- Author + Date
- Table of contents
- Body content (H2/H3 structure)
- Related articles
- CTA to contact

### 4.4 CTA Placement Strategy

**Primary CTAs:**
- Hero section
- After value pillars
- End of services section
- Footer

**Secondary CTAs:**
- Service cards ("Learn More")
- Blog posts ("Contact Us")
- Navigation header

### 4.5 Tone & Voice Guidelines

**Brand Voice:**
- **Clear:** No jargon, plain language
- **Direct:** Get to the point quickly
- **Operational:** Focus on outcomes, not features
- **Expert:** Demonstrate technical knowledge

**Writing Rules:**
✅ "We solve your tech problems" (clear, direct)
❌ "We leverage cutting-edge solutions" (jargon)

✅ "24/7 monitoring prevents downtime" (outcome)
❌ "Advanced monitoring capabilities" (feature)

✅ "Your business needs IT that works" (direct)
❌ "Synergize your technology ecosystem" (buzzword)

---

## ⚙️ 5. Interaction & Behavior

### 5.1 Hover States

**Buttons:**
```css
/* Primary Button */
Default:  bg-primary-500
Hover:    bg-primary-600 + shadow-xl + translate-y-[-4px]
Active:   bg-primary-700

/* Outline Button */
Default:  border-primary-500 text-primary-500
Hover:    bg-primary-50
Active:   bg-primary-100
```

**Cards:**
```css
Default:  shadow-sm
Hover:    shadow-xl + scale-[1.02]
```

**Links:**
```css
Default:  text-primary-600
Hover:    text-primary-700 + underline
```

### 5.2 Button Interactions

**Primary Button Animation:**
```tsx
<Button className="group transform hover:-translate-y-1
  transition-all duration-300">
  <span>Click Me</span>
  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
</Button>
```

**Loading States:**
```tsx
<Button disabled={loading}>
  {loading ? (
    <>
      <Loader className="w-5 h-5 mr-2 animate-spin" />
      Loading...
    </>
  ) : (
    'Submit'
  )}
</Button>
```

### 5.3 Mobile Menu Behavior

**Open:**
- Hamburger icon transforms to X
- Full-screen overlay fades in
- Menu items fade in sequentially
- Body scroll locked

**Close:**
- Reverse animations
- Restore scroll

**Implementation:**
```tsx
const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  if (isOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
}, [isOpen]);
```

### 5.4 Scroll Behavior

**Smooth Scrolling:**
```css
html {
  scroll-behavior: smooth;
}
```

**Scroll-to-Top Button:**
- Appears after 400px scroll
- Fixed bottom-right
- Smooth animation
- Primary color

**Parallax (Optional):**
- Subtle background movement
- GPU-accelerated
- Desktop only

### 5.5 Section Transitions

**Fade In Up:**
```tsx
<div className="animate-fade-in-up"
  style={{ animationDelay: '100ms' }}>
  Content
</div>
```

**Stagger Children:**
```tsx
{items.map((item, index) => (
  <div
    key={item.id}
    className="animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {item.content}
  </div>
))}
```

### 5.6 Accessibility Requirements

**Keyboard Navigation:**
- All interactive elements focusable
- Visible focus states
- Logical tab order

**Screen Readers:**
- Semantic HTML
- ARIA labels where needed
- Alt text on images
- Skip-to-content link

**Color Contrast:**
- Minimum 4.5:1 for body text
- Minimum 3:1 for large text
- Test with tools (axe DevTools)

**Touch Targets:**
- Minimum 44×44px
- Adequate spacing between targets
- No overlapping hit areas

---

## 🔧 6. Technical Implementation

### 6.1 Image Dimensions

**Hero Images:**
```
Desktop Standard:  1600 × 600px  (2.75:1)
Desktop Large:     1920 × 480px  (4:1)
Desktop Retina:    2560 × 640px  (4:1)

Mobile Standard:   1080 × 1440px (3:4)
Mobile Small:      750 × 1000px  (3:4)
```

**Service/Feature Images:**
```
Desktop: 1200 × 800px  (3:2)
Mobile:  800 × 600px   (4:3)
```

**Logo:**
```
Standard: 40 × 40px
2x:       80 × 80px
```

**Icons:**
```
Small:  16 × 16px
Medium: 20 × 20px
Large:  24 × 24px
XL:     32 × 32px
```

### 6.2 File Formats

**Images:**
- **Primary:** WebP (best compression)
- **Fallback:** JPEG (compatibility)
- **Quality:** 85% (balance size/quality)
- **Tools:** TinyPNG, Squoosh

**Icons:**
- **Vector:** SVG preferred
- **React:** Lucide React components

**Logo:**
- **Primary:** WebP
- **Fallback:** PNG with transparency

### 6.3 Performance Considerations

**Critical Optimizations:**
```tsx
// 1. Font preloading
<link rel="preload" href="/fonts/SpaceGrotesk.woff2" as="font" />

// 2. Image optimization
<Image
  src="/hero.webp"
  width={1600}
  height={600}
  priority  // Above fold
  quality={85}
/>

// 3. Lazy loading
<Image
  src="/service.webp"
  loading="lazy"  // Below fold
/>

// 4. Code splitting
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />
});
```

**Performance Targets:**
```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay):        < 100ms
CLS (Cumulative Layout Shift):  < 0.1
TTI (Time to Interactive):      < 3.8s
```

### 6.4 SEO Structure

**Heading Hierarchy:**
```html
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Subsection</h3>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
```

**Metadata Template:**
```tsx
export const metadata: Metadata = {
  title: "Page Title | W1IT Solutions",
  description: "150-160 character description...",
  keywords: ["keyword1", "keyword2"],
  openGraph: {
    title: "Page Title",
    description: "Description",
    images: ["/og-image.jpg"],
  },
};
```

**Schema.org Markup:**
```tsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "W1IT Solutions",
  "url": "https://w1it.com",
  "logo": "https://w1it.com/logo.png"
}
</script>
```

### 6.5 Component Naming Conventions

**Files:**
```
PascalCase for components:  Button.tsx, Hero.tsx
camelCase for utilities:    tokens.ts, helpers.ts
kebab-case for pages:       about-us.tsx (if needed)
```

**CSS Classes:**
```
Tailwind utilities:  bg-primary-500, text-lg
Custom utilities:    .glass, .animate-fade-in-up
BEM for complex:     .card__header, .card__body
```

**TypeScript:**
```tsx
// Props interface
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

// Component
export default function Button({
  variant = 'primary',
  size = 'md',
  children
}: ButtonProps) {
  return <button>{children}</button>;
}
```

### 6.6 Design Tokens Import

```tsx
// Import design tokens
import {
  spacing,
  typography,
  shadows,
  radius,
  semanticColors
} from '@/styles/tokens';

// Use in components
<section className={spacing.section}>
  <h2 className={typography.h2}>Title</h2>
  <Card className={`${radius.card} ${shadows.card}`}>
    <p className={semanticColors.text.secondary}>
      Body text
    </p>
  </Card>
</section>
```

---

## 📚 Appendix

### Quick Reference

**Colors:**
- Primary: `#2F80ED`
- Secondary: `#4FD1C5`
- Dark: `#0A1A2F`

**Fonts:**
- Headings: `font-heading`
- Body: `font-body`

**Spacing:**
- Section: `py-20 md:py-32`
- Element: `mb-8 md:mb-10`

**Components:**
- Container: `<Container size="md">`
- Button: `<Button variant="primary" size="lg">`
- Card: `<Card hoverable padding="lg">`

### Design Files

- **Tailwind Config:** `/tailwind.config.ts`
- **Global Styles:** `/src/app/globals.css`
- **Design Tokens:** `/src/styles/tokens.ts`
- **Components:** `/src/components/`

### Documentation

- **Design System Guide:** `/DESIGN_SYSTEM_GUIDE.md`
- **Hero Optimization:** `/HERO_OPTIMIZATION_GUIDE.md`
- **Redesign Summary:** `/REDESIGN_SUMMARY.md`

---

## 🎯 Design Principles

1. **Clarity First:** Every design decision prioritizes user understanding
2. **Consistency:** Reuse components, tokens, and patterns
3. **Performance:** Fast loading is a feature, not an afterthought
4. **Accessibility:** Everyone should be able to use the site
5. **Scalability:** The system grows with the brand

---

**This is the single source of truth for the W1IT website design system.**

All pages, components, and implementations must follow these guidelines to maintain brand consistency, user experience quality, and technical excellence.

For questions or additions, refer to the development team.
