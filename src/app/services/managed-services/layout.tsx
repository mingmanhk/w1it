import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Managed IT Services',
  description:
    'Proactive managed IT services in Seattle: 24/7 monitoring, patching, help desk support, and predictable monthly pricing for your business.',
  keywords: [
    'managed IT services Seattle',
    '24/7 IT monitoring',
    'IT help desk support',
    'managed service provider',
  ],
  canonical: '/services/managed-services',
});

const serviceSchema = generateServiceSchema({
  name: 'Managed IT Services',
  description:
    'Proactive managed IT services: 24/7 monitoring, patching, help desk support, and predictable monthly pricing.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Managed IT Services',
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
