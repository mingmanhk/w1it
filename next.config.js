/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Security headers
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' https://www.googletagmanager.com https://embed.tawk.to",
            "style-src 'self'",
            "img-src 'self' data: https://images.unsplash.com https://*.googleusercontent.com",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://www.google-analytics.com https://va.vercel-scripts.com https://embed.tawk.to https://api.web3forms.com",
            "frame-src https://embed.tawk.to",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self' https://api.web3forms.com",
            "frame-ancestors 'none'",
            "block-all-mixed-content",
            "upgrade-insecure-requests"
          ].join('; ')
        },
      ],
    },
  ],
};

module.exports = nextConfig;