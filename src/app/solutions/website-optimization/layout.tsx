import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Website Optimization',
  description:
    'Speed, SEO, and conversion optimization for business websites: Core Web Vitals, on-page SEO, and performance tuning that delivers results.',
  keywords: [
    'website optimization',
    'Core Web Vitals',
    'on-page SEO',
    'website performance tuning',
  ],
  canonical: '/solutions/website-optimization',
});

const serviceSchema = generateServiceSchema({
  name: 'Website Optimization',
  description:
    'Speed, SEO, and conversion optimization for business websites, including Core Web Vitals, on-page SEO, and performance tuning.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Website Optimization',
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
