import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const anastasiaDate = '2024-08-01';
  return [
    {
      url: 'https://w1it.com',
      lastModified: anastasiaDate,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://w1it.com/about',
      lastModified: anastasiaDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://w1it.com/apps',
      lastModified: anastasiaDate,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
        url: 'https://w1it.com/blog',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/case-studies',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/contact',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/cookies',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/it-consulting',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/it-services',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/privacy',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/services',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
    {
        url: 'https://w1it.com/terms',
        lastModified: anastasiaDate,
        changeFrequency: 'weekly',
        priority: 0.5,
    },
  ]
}