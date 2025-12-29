# W1IT LIGHT-MODE Design System

**Version:** 2.0
**Last Updated:** December 2025
**Status:** Active

This design system defines the visual language and code patterns for all W1IT user-facing pages. Following these specifications ensures consistency, maintainability, and a professional appearance across the entire website.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing](#spacing)
4. [Component Patterns](#component-patterns)
5. [Forbidden Elements](#forbidden-elements)
6. [Code Examples](#code-examples)

---

## Color Palette

### Surface Colors
- **surface-0:** `#FFFFFF` - Main backgrounds, cards
- **surface-1:** `#F8FAFC` - Section backgrounds, alternating sections
- **surface-2:** `#F1F5F9` - Card headers, subtle blocks

### Primary Colors
- **Navy:** `#050816` - Primary text, headings
- **Blue:** `#3A81F7` - Links, CTAs, primary buttons, borders, icons
- **Green:** `#00A878` - Accent bullets, success states, secondary icons

### Text Colors
- **Primary Text:** `#050816` - Headings, important text
- **Body Text:** `#4A4A4A` - Regular body copy
- **Border Gray:** `#D9D9D9` - Borders, dividers

### Usage Examples

```tsx
// Background alternation pattern
<section className="py-16 bg-[#FFFFFF]">
  {/* Content */}
</section>

<section className="py-16 bg-[#F8FAFC]">
  {/* Content */}
</section>

// Card with header
<div className="bg-[#FFFFFF]">
  <div className="bg-[#F1F5F9] p-8">
    {/* Header content */}
  </div>
  <div className="p-8">
    {/* Body content */}
  </div>
</div>

// Accent border
<div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
  {/* Highlighted content */}
</div>
```

---

## Typography

### Scale and Usage

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| **Display** | `text-[42px]` | `font-bold` | Page h1 titles |
| **Heading Large** | `text-[28px]` | `font-bold` | Section h2 titles |
| **Heading Medium** | `text-[20px]` | `font-semibold` | Card h3 titles, subsections |
| **Body Large** | `text-[17px]` | `font-normal` | Hero descriptions, important body text |
| **Body Regular** | `text-[16px]` | `font-normal` | Standard body text, descriptions |
| **Caption** | `text-[14px]` | `font-normal` | Fine print, metadata |

### Code Examples

```tsx
// Page title (h1)
<h1 className="text-[42px] font-bold text-[#050816] mb-6">
  Page Title
</h1>

// Section title (h2)
<h2 className="text-[28px] font-bold text-[#050816] mb-4">
  Section Title
</h2>

// Card title (h3)
<h3 className="text-[20px] font-semibold text-[#050816] mb-4">
  Card Title
</h3>

// Body text
<p className="text-[16px] text-[#4A4A4A] leading-relaxed">
  Regular body copy with proper line height.
</p>

// Hero description
<p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
  Hero section description text.
</p>
```

### Important Notes
- **NO** `font-heading` or `font-body` utility classes
- **NO** Tailwind size classes like `text-lg`, `text-xl`, etc.
- **ALWAYS** use explicit pixel values: `text-[16px]`, `text-[20px]`, etc.
- **Line height:** Use `leading-relaxed` for body text, omit for headings

---

## Spacing

### Approved Values
Only use these spacing values (in pixels): **8, 16, 24, 32, 48, 64, 96**

### Common Patterns

| Element | Spacing | Class |
|---------|---------|-------|
| **Hero sections** | 96px (vertical) | `py-24` |
| **Standard sections** | 64px (vertical) | `py-16` |
| **Element margins** | 24px | `mb-6` |
| **Section margins** | 48px | `mb-12` |
| **Grid gaps** | 24px | `gap-6` |
| **Card padding** | 32px | `p-8` |

### Code Examples

```tsx
// Hero section - always py-24
<section className="relative py-24 overflow-hidden">
  {/* Hero content */}
</section>

// Standard section - always py-16
<section className="py-16 bg-[#FFFFFF]">
  <div className="max-w-[1200px] mx-auto px-6">
    {/* Section content */}
  </div>
</section>

// Grid with approved gap
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

---

## Component Patterns

### Hero Section (Standard)

**All pages must use this hero pattern with background image:**

```tsx
<section className="relative py-24 overflow-hidden">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/optimized/hero-graphic.webp"
      alt="[Page Title]"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
  </div>
  <div className="relative z-10 max-w-[1200px] mx-auto px-6">
    <div className="max-w-[800px] mx-auto text-center">
      <h1 className="text-[42px] font-bold text-white mb-6">
        [Page Title]
      </h1>
      <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
        [Description text]
      </p>
      <Button href="/contact" variant="primary">
        [CTA Text]
      </Button>
    </div>
  </div>
</section>
```

**Key requirements:**
- MUST use `/images/optimized/hero-graphic.webp`
- MUST use gradient overlay: `from-[#050816]/60 to-[#050816]/80`
- Text MUST be white on dark overlay
- Always include Next.js Image with `priority` prop

---

### Service Card (Two-Tier Pattern)

```tsx
<div className="bg-[#FFFFFF]">
  {/* Header with icon */}
  <div className="bg-[#F1F5F9] p-8">
    <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
    </div>
    <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
      {title}
    </h3>
    <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
      {description}
    </p>
  </div>
</div>
```

---

### Simple Card (Single Tier)

```tsx
<div className="bg-[#F8FAFC] p-8">
  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
  </div>
  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
    {title}
  </h3>
  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
    {description}
  </p>
</div>
```

---

### Highlighted Card (Border Accent)

```tsx
<div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
  <h3 className="text-[20px] font-semibold text-[#050816] mb-6">
    {title}
  </h3>
  <div className="space-y-4">
    {items.map((item, index) => (
      <div key={index} className="flex items-start gap-3">
        <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
        <span className="text-[16px] text-[#4A4A4A]">{item}</span>
      </div>
    ))}
  </div>
</div>
```

---

### Icon Container Pattern

```tsx
{/* Blue icon container (primary) */}
<div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
</div>

{/* Green icon container (accent) */}
<div className="w-16 h-16 bg-[#00A878] flex items-center justify-center mx-auto mb-6">
  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
</div>
```

**Rules:**
- Container: Always `w-16 h-16` (64x64px)
- Icon: Always `w-8 h-8` (32x32px)
- Stroke: Always `strokeWidth={1.5}`
- Shape: NO rounded corners

---

### Bullet List Pattern

```tsx
<div className="space-y-4">
  {items.map((item, index) => (
    <div key={index} className="flex items-start gap-3">
      <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
      <span className="text-[16px] text-[#4A4A4A]">{item}</span>
    </div>
  ))}
</div>
```

**Bullet colors:**
- Primary lists: `bg-[#00A878]` (green)
- Secondary lists: `bg-[#3A81F7]` (blue)

---

### CTA Section Pattern

```tsx
<section className="py-16 bg-[#FFFFFF]">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="text-center">
      <h2 className="text-[28px] font-bold text-[#050816] mb-6">
        Ready to Get Started?
      </h2>
      <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
        Supporting description text for the call to action.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/contact" variant="primary">
          Primary Action
        </Button>
        <Button href="/services" variant="secondary">
          Secondary Action
        </Button>
      </div>
    </div>
  </div>
</section>
```

---

## Forbidden Elements

### ❌ NEVER Use These:

1. **Gradients** (except hero overlay)
   - ❌ `bg-gradient-to-*`
   - ❌ `text-gradient-*`
   - ✅ ONLY exception: Hero overlay `from-[#050816]/60 to-[#050816]/80`

2. **Rounded Corners**
   - ❌ `rounded-*` classes
   - ❌ `rounded-full`
   - ❌ `rounded-lg`, `rounded-xl`
   - ✅ Exception: Small bullets (`rounded-full` for 2x2px dots)

3. **Shadows**
   - ❌ `shadow-*` classes
   - ❌ `drop-shadow-*`

4. **Animations**
   - ❌ `animate-*` classes
   - ❌ `transition-*` classes
   - ❌ `transform` classes
   - ❌ Inline animation styles

5. **Old Components**
   - ❌ `<Container>` component
   - ❌ `<Card>` component
   - ✅ Use standard divs instead

6. **CSS Variable Classes**
   - ❌ `text-display`, `text-heading-lg`, etc.
   - ❌ `max-w-content`
   - ✅ Use explicit values instead

7. **Font Classes**
   - ❌ `font-heading`
   - ❌ `font-body`

---

## Code Examples

### Complete Page Template

```tsx
'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { IconName } from 'lucide-react';

/**
 * W1IT [Page Name] - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function PageName() {
  const items = [
    {
      icon: IconName,
      title: 'Item Title',
      description: 'Item description text.',
    },
    // ... more items
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Page Title"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Page Title
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Hero description text goes here.
            </p>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Section Title
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Section description text.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Contact us today to learn more.
            </p>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## Migration Checklist

When updating a page to LIGHT-MODE:

- [ ] Add design system header comment
- [ ] Replace hero with image + gradient overlay pattern
- [ ] Remove all `Container` and `Card` components
- [ ] Remove all `rounded-*` classes (except bullet dots)
- [ ] Remove all `shadow-*` classes
- [ ] Remove all `animate-*` classes and animation styles
- [ ] Remove all gradients (except hero overlay)
- [ ] Replace `text-display`, `text-heading-*`, `text-body-*` with explicit sizes
- [ ] Replace `font-heading`, `font-body` (remove entirely)
- [ ] Replace `max-w-content` with `max-w-[1200px]`
- [ ] Update colors to LIGHT-MODE palette
- [ ] Standardize spacing to approved values
- [ ] Update icon containers to approved pattern
- [ ] Test build: `npm run build`

---

## Accessibility Notes

### Color Contrast
- **Text on white:** Navy `#050816` has excellent contrast (WCAG AAA)
- **Body text:** Gray `#4A4A4A` on white meets WCAG AA
- **Hero text:** White text on dark overlay (`#050816` at 60-80% opacity) meets contrast requirements

### Semantic HTML
- Always use proper heading hierarchy (h1 → h2 → h3)
- Use semantic tags (`<section>`, `<article>`, `<nav>`)
- Include descriptive alt text for images

### Keyboard Navigation
- Ensure all interactive elements are keyboard accessible
- Maintain logical tab order
- Use proper button/link semantics

---

## Support

For questions about this design system:
- Review this document first
- Check existing page implementations for reference examples
- Refer to LIGHT-MODE migrated pages in:
  - `/src/app/services/` (all 8 service pages)
  - `/src/app/solutions/` (all 5 solution pages)
  - `/src/components/homepage/` (all homepage components)

---

**Last Updated:** December 29, 2025
**Maintained by:** W1IT Development Team
