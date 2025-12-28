/**
 * Design Tokens
 * Centralized design system tokens for consistent styling across the application
 */

// Spacing tokens for consistent section padding
export const spacing = {
  section: 'py-20 md:py-32',
  sectionLarge: 'py-32 md:py-40',
  sectionSmall: 'py-16 md:py-24',
  container: 'px-4 sm:px-6 lg:px-8',
  heroTop: 'pt-28 md:pt-40',
  heroBottom: 'pb-24 md:pb-32',
} as const;

// Shadow tokens
export const shadows = {
  card: 'shadow-sm hover:shadow-xl transition-shadow duration-300',
  elevated: 'shadow-lg',
  soft: 'shadow-md',
  none: 'shadow-none',
} as const;

// Border radius tokens
export const radius = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  full: 'rounded-full',
  card: 'rounded-2xl',
  button: 'rounded-lg',
} as const;

// Typography tokens
export const typography = {
  h1: 'font-heading font-bold text-5xl md:text-6xl lg:text-7xl',
  h2: 'font-heading font-bold text-4xl md:text-5xl lg:text-6xl',
  h3: 'font-heading font-bold text-3xl md:text-4xl lg:text-5xl',
  h4: 'font-heading font-bold text-2xl md:text-3xl',
  h5: 'font-heading font-bold text-xl md:text-2xl',
  h6: 'font-heading font-bold text-lg md:text-xl',
  bodyLg: 'font-body text-xl md:text-2xl',
  body: 'font-body text-base md:text-lg',
  bodySm: 'font-body text-sm md:text-base',
  caption: 'font-body text-xs md:text-sm',
} as const;

// Gradient tokens
export const gradients = {
  primary: 'bg-gradient-to-r from-primary-500 to-secondary-400',
  dark: 'bg-gradient-dark',
  subtle: 'bg-gradient-to-b from-neutral-50 to-white',
} as const;

// Animation tokens
export const animations = {
  fadeIn: 'animate-fade-in',
  fadeInUp: 'animate-fade-in-up',
  scaleIn: 'animate-scale-in',
  pulseSubtle: 'animate-pulse-subtle',
} as const;

// Container sizes
export const containers = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-full',
} as const;

// Helper function to combine token classes
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Semantic color tokens
export const semanticColors = {
  text: {
    primary: 'text-neutral-900',
    secondary: 'text-neutral-600',
    tertiary: 'text-neutral-500',
    inverse: 'text-white',
    link: 'text-primary-600 hover:text-primary-700',
  },
  background: {
    primary: 'bg-white',
    secondary: 'bg-neutral-50',
    dark: 'bg-dark-bg',
    surface: 'bg-neutral-100',
  },
  border: {
    light: 'border-neutral-200',
    medium: 'border-neutral-300',
    dark: 'border-neutral-400',
  },
} as const;
