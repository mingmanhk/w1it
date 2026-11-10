import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Website Development',
  description:
    'Fast, modern business websites built in Seattle: responsive design, SEO-ready architecture, and ongoing maintenance for small businesses.',
  keywords: [
    'website development Seattle',
    'business website design',
    'responsive web design',
    'SEO-ready website',
  ],
  canonical: '/services/website-development',
});

const serviceSchema = generateServiceSchema({
  name: 'Website Development',
  description:
    'Fast, modern business websites with responsive design, SEO-ready architecture, and ongoing maintenance.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Website Development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
