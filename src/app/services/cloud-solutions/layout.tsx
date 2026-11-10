import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cloud Solutions & Migration',
  description:
    'Cloud migration, hosting, and infrastructure services for Seattle businesses. Secure, scalable solutions on AWS, Azure, and Google Cloud.',
  keywords: [
    'cloud migration Seattle',
    'cloud hosting services',
    'AWS Azure Google Cloud',
    'cloud infrastructure management',
  ],
  canonical: '/services/cloud-solutions',
});

const serviceSchema = generateServiceSchema({
  name: 'Cloud Solutions & Migration',
  description:
    'Cloud migration, hosting, and infrastructure services on AWS, Azure, and Google Cloud for Seattle-area businesses.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Cloud Solutions',
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
