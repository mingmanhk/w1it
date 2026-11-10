import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Digital Transformation',
  description:
    'Modernize legacy systems and workflows: cloud adoption, process automation, and technology roadmaps that move your business forward.',
  keywords: [
    'digital transformation',
    'legacy system modernization',
    'cloud adoption strategy',
    'business process automation',
  ],
  canonical: '/solutions/digital-transformation',
});

const serviceSchema = generateServiceSchema({
  name: 'Digital Transformation',
  description:
    'Modernizing legacy systems and workflows through cloud adoption, process automation, and technology roadmaps.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Digital Transformation',
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
