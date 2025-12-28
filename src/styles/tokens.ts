/**
 * W1IT Design System Tokens
 * STRICT COMPLIANCE - Do not modify without design system approval
 */

// ========================================
// COLOR TOKENS (EXACT W1IT SPECIFICATION)
// ========================================
export const colors = {
  navy: '#050816',
  blue: '#3A81F7',
  green: '#00A878',
  white: '#FFFFFF',
  gray600: '#4A4A4A',
  gray300: '#D9D9D9',
  gray100: '#F5F5F5',
} as const;

// ========================================
// SPACING TOKENS (8px BASE SCALE)
// ========================================
export const spacing = {
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
} as const;

// ========================================
// TYPOGRAPHY TOKENS
// ========================================
export const typography = {
  display: 'text-[48px] font-bold leading-[110%]',
  headingLarge: 'text-[32px] font-bold leading-[110%]',
  headingMedium: 'text-[20px] font-bold leading-[110%]',
  bodyLarge: 'text-[18px] font-normal leading-[150%]',
  body: 'text-[16px] font-normal leading-[150%]',
  caption: 'text-[14px] font-normal leading-[150%]',
} as const;

// ========================================
// SHADOW TOKENS
// ========================================
export const shadows = {
  soft: 'shadow-[0px_2px_8px_rgba(0,0,0,0.08)]',
  card: 'shadow-[0px_4px_16px_rgba(0,0,0,0.12)]',
  none: 'shadow-none',
} as const;

// ========================================
// BORDER RADIUS TOKENS
// ========================================
export const radius = {
  card: 'rounded-[12px]',
  button: 'rounded-[8px]',
  none: 'rounded-none',
} as const;

// ========================================
// GRID & CONTAINER TOKENS
// ========================================
export const containers = {
  desktop: 'max-w-[1440px]',
  content: 'max-w-[1200px]',
  full: 'max-w-full',
} as const;

// ========================================
// COMPONENT SPACING
// ========================================
export const componentSpacing = {
  header: {
    padding: 'p-6',
    height: 'h-24',
    gap: 'gap-8',
  },
  hero: {
    gap: 'gap-16',
    paddingY: 'py-24',
    leftColumn: 'w-[520px]',
  },
  foundation: {
    iconSize: 'w-16 h-16',
    gap1: 'gap-4',
    gap2: 'gap-3',
  },
  serviceCard: {
    width: 'w-[360px]',
    padding: 'p-8',
    iconSize: 'w-12 h-12',
  },
  testimonial: {
    width: 'w-[800px]',
    padding: 'p-8',
    starSize: 'w-5 h-5',
  },
  footer: {
    columnWidth: 'w-[200px]',
    columnGap: 'gap-12',
    linkGap: 'gap-3',
  },
} as const;

// ========================================
// COLOR UTILITIES
// ========================================
export const colorClasses = {
  text: {
    navy: 'text-[#050816]',
    blue: 'text-[#3A81F7]',
    green: 'text-[#00A878]',
    white: 'text-white',
    gray600: 'text-[#4A4A4A]',
    gray300: 'text-[#D9D9D9]',
    gray100: 'text-[#F5F5F5]',
  },
  bg: {
    navy: 'bg-[#050816]',
    blue: 'bg-[#3A81F7]',
    green: 'bg-[#00A878]',
    white: 'bg-white',
    gray600: 'bg-[#4A4A4A]',
    gray300: 'bg-[#D9D9D9]',
    gray100: 'bg-[#F5F5F5]',
  },
  border: {
    navy: 'border-[#050816]',
    blue: 'border-[#3A81F7]',
    green: 'border-[#00A878]',
    white: 'border-white',
    gray600: 'border-[#4A4A4A]',
    gray300: 'border-[#D9D9D9]',
    gray100: 'border-[#F5F5F5]',
  },
} as const;

// Helper function to combine classes
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
