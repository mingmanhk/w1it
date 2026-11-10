import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Custom IT Solutions',
  description:
    'Purpose-built IT systems designed around your workflows: custom integrations, tooling, and infrastructure for growing businesses.',
  keywords: [
    'custom IT solutions',
    'custom software integrations',
    'business IT tooling',
    'IT infrastructure design',
  ],
  canonical: '/solutions/custom-it-solutions',
});

const serviceSchema = generateServiceSchema({
  name: 'Custom IT Solutions',
  description:
    'Purpose-built IT systems designed around a business\'s own workflows, including custom integrations, tooling, and infrastructure.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Custom IT Solutions',
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
