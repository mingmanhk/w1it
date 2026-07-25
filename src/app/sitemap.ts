import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://w1it.com'
  const currentDate = new Date()

  // Core pages with high priority
  const corePages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }))

  // Service pages
  const servicePages = [
    '/services/cloud-solutions',
    '/services/custom-it-solutions',
    '/services/data-analytics',
    '/services/digital-transformation',
    '/services/it-automation',
    '/services/managed-services',
    '/services/network-setup',
    '/services/remote-support',
    '/services/security',
    '/services/technical-writing',
    '/services/website-development',
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
    '/solutions/custom-it-solutions',
    '/solutions/cybersecurity-strategy',
    '/solutions/data-analytics',
    '/solutions/digital-transformation',
    '/solutions/website-optimization',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Case study pages (final URLs — old /blog/<slug> URLs 301 here)
  const caseStudyPages = [
    '/case-studies/bilingual-documentation-global-trade',
    '/case-studies/choosing-it-support-model',
    '/case-studies/ferry-company-backup-modernization',
    '/case-studies/fragmented-it-standardized-infrastructure',
    '/case-studies/missing-it-checklist-outage-recovery',
    '/case-studies/network-security-remote-teams',
    '/case-studies/top-it-mistakes-small-businesses',
    '/case-studies/why-businesses-need-it-documentation',
    '/case-studies/wifi-setup-guide-seattle',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Resource & support pages
  const resourcePages = [
    '/checklists',
    '/documentation',
    '/emergency',
    '/knowledge-base',
    '/sla',
    '/support',
    '/sales',
    '/testimonials',
    '/tools',
    '/locations/bellevue',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
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

  return [
    ...corePages,
    ...servicePages,
    ...solutionPages,
    ...caseStudyPages,
    ...resourcePages,
    ...appPages,
    ...legalPages,
  ]
}
