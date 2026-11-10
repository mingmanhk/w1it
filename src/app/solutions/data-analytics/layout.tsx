import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Data Analytics Solutions',
  description:
    'Turn business data into decisions: dashboards, reporting pipelines, and analytics infrastructure for small and mid-sized businesses.',
  keywords: [
    'data analytics solutions',
    'business intelligence dashboards',
    'reporting pipelines',
    'analytics infrastructure',
  ],
  canonical: '/solutions/data-analytics',
});

const serviceSchema = generateServiceSchema({
  name: 'Data Analytics Solutions',
  description:
    'Dashboards, reporting pipelines, and analytics infrastructure that turn business data into decisions.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Data Analytics',
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
