# W1IT Design System Guide

## Overview

This document describes the unified design system for the W1IT website. All components and pages should follow these guidelines for consistency.

## Table of Contents

1. [Color System](#color-system)
2. [Typography](#typography)
3. [Spacing & Layout](#spacing--layout)
4. [Components](#components)
5. [Animations](#animations)
6. [Design Tokens](#design-tokens)
7. [Best Practices](#best-practices)

## Color System

### Primary Palette
Based on brand-blue (#2F80ED), used for primary actions and key interactive elements.

```tsx
bg-primary-50   // Lightest - badges, backgrounds
bg-primary-100  // Very light - hover states
bg-primary-500  // Main brand blue
bg-primary-600  // Darker - hover states
bg-primary-700  // Darkest - active states
```

### Secondary Palette
Based on brand-cyan (#4FD1C5), used for accents and complementary elements.

```tsx
bg-secondary-50   // Lightest
bg-secondary-400  // Main cyan (matches brand-cyan)
bg-secondary-600  // Darker
```

### Accent Palette
Purple-based palette for special highlights and CTAs.

```tsx
bg-accent-500   // Main purple
bg-accent-600   // Darker purple
```

### Neutral Palette
For text, backgrounds, and UI elements.

```tsx
text-neutral-900  // Primary text (darkest)
text-neutral-600  // Secondary text
text-neutral-500  // Tertiary text
bg-neutral-50     // Light backgrounds
bg-neutral-100    // Card backgrounds
```

### Semantic Colors
Legacy color mappings for compatibility.

```tsx
text-charcoal    // #1e293b (same as neutral-800)
text-rose        // #f43f5e (pink-600)
bg-blush         // #fdf2f8 (pink-50)
text-gray-medium // #64748b (neutral-500)
bg-gray-bg       // #F2F4F7 (neutral-50)
```

### Brand Colors
Original brand identity colors.

```tsx
bg-brand-navy       // #0A1A2F
bg-brand-blue       // #2F80ED
bg-brand-cyan       // #4FD1C5
bg-brand-gray-light // #F2F4F7
```

## Typography

### Font Families

Use semantic class names, not font family names directly:

```tsx
font-heading  // Space Grotesk - for all headings
font-body     // Inter - for all body text
font-code     // JetBrains Mono - for code blocks
```

**DO NOT USE:** `font-display`, `font-inter`, `font-sans` (these are deprecated)

### Typography Scale

Use the typography tokens from `src/styles/tokens.ts`:

```tsx
import { typography } from '@/styles/tokens';

// Headings
<h1 className={typography.h1}>
<h2 className={typography.h2}>
<h3 className={typography.h3}>

// Body text
<p className={typography.bodyLg}>  // 18-20px
<p className={typography.body}>    // 16-18px
<p className={typography.bodySm}>  // 14-16px
```

### Manual Classes

```tsx
// Headings (when not using tokens)
font-heading font-bold text-5xl md:text-6xl lg:text-7xl  // H1
font-heading font-bold text-4xl md:text-5xl              // H2
font-heading font-bold text-3xl md:text-4xl              // H3

// Body text
font-body text-xl md:text-2xl       // Large body
font-body text-base md:text-lg      // Normal body
font-body text-sm md:text-base      // Small body
```

## Spacing & Layout

### Section Padding

Use design tokens from `src/styles/tokens.ts`:

```tsx
import { spacing } from '@/styles/tokens';

<section className={spacing.section}>        // py-20 md:py-32
<section className={spacing.sectionLarge}>   // py-32 md:py-40
<section className={spacing.sectionSmall}>   // py-16 md:py-24
```

### Hero Sections

```tsx
<section className="pt-28 pb-24 md:pt-40 md:pb-32">
  {/* Or use tokens */}
  <section className={`${spacing.heroTop} ${spacing.heroBottom}`}>
```

### Container Component

Always use the Container component for consistent width and padding:

```tsx
import Container from '@/components/Container';

<Container size="md">  // max-w-5xl (default)
<Container size="lg">  // max-w-7xl
<Container size="sm">  // max-w-3xl
```

## Components

### Button

```tsx
import Button from '@/components/Button';

<Button href="/contact" variant="primary" size="lg">
  Get Started
</Button>

// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg, xl
```

### Card

```tsx
import Card from '@/components/Card';

<Card hoverable padding="lg">
  {/* Card content */}
</Card>

// Props:
// - hoverable: adds hover shadow effect
// - padding: sm, md, lg, xl, none
```

### Common Patterns

#### Glass Effect

```tsx
<div className="glass">
  {/* Content with frosted glass background */}
</div>
```

#### Gradient Text

```tsx
<span className="text-gradient-primary">
  Gradient Text
</span>
```

#### Gradient Background

```tsx
<div className="bg-gradient-primary">
  {/* Primary gradient background */}
</div>

<div className="bg-gradient-dark">
  {/* Dark gradient (navy) */}
</div>
```

## Animations

### Animation Classes

```tsx
animate-fade-in         // Fade in effect
animate-fade-in-up      // Fade in from bottom
animate-scale-in        // Scale in effect
animate-pulse-subtle    // Subtle pulsing effect
```

### Delayed Animations

```tsx
<div
  className="animate-fade-in-up"
  style={{ animationDelay: '100ms' }}
>
  Content
</div>
```

## Design Tokens

Import and use design tokens for consistency:

```tsx
import {
  spacing,
  shadows,
  radius,
  typography,
  gradients,
  animations,
  semanticColors
} from '@/styles/tokens';

// Example usage
<section className={spacing.section}>
  <div className={`${radius.card} ${shadows.card}`}>
    <h2 className={typography.h2}>Heading</h2>
    <p className={`${typography.body} ${semanticColors.text.secondary}`}>
      Body text
    </p>
  </div>
</section>
```

## Best Practices

### DO ✅

1. **Use semantic color classes**
   ```tsx
   <p className="text-neutral-600">Secondary text</p>
   ```

2. **Use design tokens**
   ```tsx
   import { spacing, typography } from '@/styles/tokens';
   <section className={spacing.section}>
   ```

3. **Use Container component**
   ```tsx
   <Container size="md">
   ```

4. **Use font-heading and font-body**
   ```tsx
   <h1 className="font-heading">
   <p className="font-body">
   ```

5. **Consistent spacing patterns**
   ```tsx
   <section className="py-20 md:py-32">  // Standard section
   ```

### DON'T ❌

1. **Don't use deprecated font classes**
   ```tsx
   // ❌ Wrong
   <h1 className="font-display">
   <p className="font-inter">

   // ✅ Correct
   <h1 className="font-heading">
   <p className="font-body">
   ```

2. **Don't use undefined color classes**
   ```tsx
   // ❌ Wrong
   <div className="bg-brand-primary">  // doesn't exist

   // ✅ Correct
   <div className="bg-primary-500">
   ```

3. **Don't hardcode spacing**
   ```tsx
   // ❌ Less ideal
   <section className="py-24 md:py-36">

   // ✅ Better
   import { spacing } from '@/styles/tokens';
   <section className={spacing.section}>
   ```

4. **Don't skip Container**
   ```tsx
   // ❌ Wrong
   <section>
     <div className="max-w-5xl mx-auto px-4">

   // ✅ Correct
   <section>
     <Container size="md">
   ```

## Page Structure Template

```tsx
import Container from '@/components/Container';
import Button from '@/components/Button';
import { spacing, typography } from '@/styles/tokens';

export default function ExamplePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-10">
              Page Title
            </h1>
            <p className="text-xl md:text-2xl text-dark-text mb-14 max-w-3xl mx-auto font-body">
              Page description
            </p>
            <Button href="/contact" size="xl" className="bg-gradient-primary">
              Call to Action
            </Button>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className={spacing.section + " bg-white"}>
        <Container>
          <h2 className={typography.h2 + " text-center mb-16"}>
            Section Title
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content */}
          </div>
        </Container>
      </section>
    </>
  );
}
```

## Migration Checklist

When updating old pages/components:

- [ ] Replace `font-display` with `font-heading`
- [ ] Replace `font-inter` / `font-sans` with `font-body`
- [ ] Replace `text-charcoal` with `text-neutral-800`
- [ ] Replace `bg-gray-bg` with `bg-neutral-50`
- [ ] Use `bg-primary-*` instead of undefined colors
- [ ] Import and use design tokens
- [ ] Wrap content in `<Container>` component
- [ ] Use consistent section spacing
- [ ] Add proper animations with defined classes

## Quick Reference

### Colors
- Primary actions: `bg-primary-500`, `text-primary-600`
- Secondary actions: `bg-secondary-400`
- Text: `text-neutral-900` (primary), `text-neutral-600` (secondary)
- Backgrounds: `bg-white`, `bg-neutral-50`, `bg-neutral-100`

### Typography
- Headings: `font-heading font-bold text-4xl md:text-5xl`
- Body: `font-body text-base md:text-lg`

### Spacing
- Sections: `py-20 md:py-32` or use `spacing.section`
- Hero: `pt-28 pb-24 md:pt-40 md:pb-32`

### Components
- Container: `<Container size="md">`
- Button: `<Button variant="primary" size="lg">`
- Card: `<Card hoverable padding="lg">`

---

## Support

For questions or issues with the design system, refer to:
- `/src/styles/tokens.ts` - Design tokens
- `/tailwind.config.ts` - Color definitions
- `/src/app/globals.css` - Animation definitions
