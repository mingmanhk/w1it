import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://w1it.com'
  const currentDate = new Date()

  // Core pages with high priority
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages = [
    '/services/cloud-solutions',
    '/services/managed-services',
    '/services/network-setup',
    '/services/remote-support',
    '/services/security',
    '/services/technical-writing',
    '/it-consulting',
    '/it-services',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Solution pages
  const solutionPages = [
    '/solutions/data-analytics',
    '/solutions/digital-transformation',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog pages
  const blogPages = [
    '/blog',
    '/blog/bilingual-documentation-global-trade',
    '/blog/choosing-it-support-model',
    '/blog/network-security-remote-teams',
    '/blog/top-it-mistakes-small-businesses',
    '/blog/why-businesses-need-it-documentation',
    '/blog/wifi-setup-guide-seattle',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // App pages
  const appPages = [
    '/apps',
    '/apps/contact-syncmate',
    '/apps/deepticker',
    '/apps/pixel-color-picker',
    '/apps/screengrabber',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  // Legal pages
  const legalPages = [
    '/privacy',
    '/terms',
    '/cookies',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }))

  // Combine all pages
  return [
    ...corePages,
    ...servicePages,
    ...solutionPages,
    ...blogPages,
    ...appPages,
    ...legalPages,
  ]
}