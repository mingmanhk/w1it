import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* W1IT Brand Colors 2025 */
        'brand': {
          navy: '#0A1A2F',      /* Deep Navy */
          blue: '#2F80ED',      /* Electric Blue */
          cyan: '#4FD1C5',      /* Aqua Cyan */
        },
        'neutral': {
          50: '#F2F4F7',        /* Soft Gray */
          100: '#E2E8F0',
          200: '#CBD5E1',
          300: '#94A3B8',
          400: '#64748B',
          500: '#475569',       /* Slate Gray */
          600: '#334155',
          700: '#1E293B',
          800: '#0F172A',       /* Dark Navy */
          900: '#0B0F19',       /* Charcoal Black */
        },
        'surface': {
          light: '#F2F4F7',
          DEFAULT: '#FFFFFF',
          dark: '#111827',      /* Deep Slate */
        },
        'text': {
          primary: '#0A1A2F',   /* Deep Navy */
          secondary: '#475569', /* Slate Gray */
          tertiary: '#94A3B8',
          white: '#E5E7EB',     /* Soft White */
        },
        'border': {
          light: '#E2E8F0',
          DEFAULT: '#CBD5E1',
          dark: '#64748B',
        },
        'state': {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#2F80ED',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0A1A2F',
            maxWidth: '65ch',
            fontFamily: 'Inter, system-ui, sans-serif',
            a: {
              color: '#2F80ED',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#1D6FE8',
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '2px',
              },
            },
            'h1, h2, h3, h4': {
              color: '#0A1A2F',
              fontFamily: 'Space Grotesk, system-ui, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            'h1': {
              fontSize: '3.5rem',
              lineHeight: '1.1',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            'h2': {
              fontSize: '2.5rem',
              lineHeight: '1.2',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            'code': {
              backgroundColor: '#F2F4F7',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.875em',
            },
            'blockquote': {
              borderLeftColor: '#2F80ED',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#475569',
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      borderRadius: {
        none: '0',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        full: '9999px',
      },
      boxShadow: {
        none: 'none',
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -2px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 8px 12px -4px rgba(0, 0, 0, 0.1), 0 4px 8px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 12px 16px -4px rgba(0, 0, 0, 0.1), 0 8px 12px -4px rgba(0, 0, 0, 0.1)',
        inner: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config