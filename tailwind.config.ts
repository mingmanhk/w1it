import type { Config } from 'tailwindcss'

/**
 * W1IT Design System - Tailwind Configuration
 * STRICT COMPLIANCE - Matches exact W1IT specification
 */

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ========================================
      // W1IT COLOR TOKENS
      // ========================================
      colors: {
        w1it: {
          navy: '#050816',
          blue: '#3A81F7',
          green: '#00A878',
          white: '#FFFFFF',
          gray: {
            600: '#4A4A4A',
            300: '#D9D9D9',
            100: '#F5F5F5',
          },
        },
      },

      // ========================================
      // TYPOGRAPHY
      // ========================================
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'], // W1IT uses single font family
      },
      fontSize: {
        'display': ['48px', { lineHeight: '110%', fontWeight: '700' }],
        'heading-lg': ['32px', { lineHeight: '110%', fontWeight: '700' }],
        'heading-md': ['20px', { lineHeight: '110%', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '150%', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '150%', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '150%', fontWeight: '400' }],
      },

      // ========================================
      // SPACING (8px scale)
      // ========================================
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
        '32': '128px',
      },

      // ========================================
      // SHADOWS (Only specified ones)
      // ========================================
      boxShadow: {
        'soft': '0px 2px 8px rgba(0, 0, 0, 0.08)',
        'card': '0px 4px 16px rgba(0, 0, 0, 0.12)',
      },

      // ========================================
      // BORDER RADIUS
      // ========================================
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },

      // ========================================
      // GRID & CONTAINER
      // ========================================
      maxWidth: {
        'desktop': '1440px',
        'content': '1200px',
      },

      // ========================================
      // COMPONENT-SPECIFIC SIZES
      // ========================================
      height: {
        'header': '96px',
      },
      width: {
        'hero-left': '520px',
        'service-card': '360px',
        'testimonial': '800px',
        'footer-column': '200px',
      },
      gap: {
        'header': '32px',
        'hero': '64px',
        'foundation-1': '16px',
        'foundation-2': '12px',
        'footer-column': '48px',
        'footer-link': '12px',
      },
    },
  },
  plugins: [],
}

export default config