import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - core identity
        'brand-navy': '#0A1A2F',
        'brand-blue': '#2F80ED',
        'brand-cyan': '#4FD1C5',
        'brand-gray-light': '#F2F4F7',
        'brand-gray-mid': '#475569',

        // Primary palette - brand-blue based
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2F80ED',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },

        // Secondary palette - brand-cyan based
        secondary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#4FD1C5',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },

        // Accent palette - complementary colors
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },

        // Neutral palette - grays and text colors
        neutral: {
          50: '#F2F4F7',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },

        // Semantic/legacy color mappings
        charcoal: '#1e293b',
        rose: '#f43f5e',
        blush: '#fdf2f8',
        'gray-medium': '#64748b',
        'gray-bg': '#F2F4F7',

        // Dark mode colors
        'dark-bg': '#0B0F19',
        'dark-surface': '#111827',
        'dark-text': '#E5E7EB',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1': '56px',
        'h2': '40px',
        'h3': '32px',
        'body-lg': '18px',
        'body-md': '16px',
        'body-sm': '14px',
      },
      lineHeight: {
        'h1': '1.1',
        'h2': '1.2',
        'h3': '1.25',
        'body': '1.5',
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        'gutter': '24px',
        'page-padding': '32px',
      },
      boxShadow: {
        'card': '0px 4px 12px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        'card': '8px',
        'btn': '6px',
      },
    },
  },
  plugins: [],
}
export default config