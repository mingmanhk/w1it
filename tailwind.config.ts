import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A1A2F',
        'brand-blue': '#2F80ED',
        'brand-cyan': '#4FD1C5',
        'brand-gray-light': '#F2F4F7',
        'brand-gray-mid': '#475569',
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