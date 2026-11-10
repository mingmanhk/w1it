import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Technical Writing Services',
  description:
    'Professional technical writing and bilingual English-Chinese documentation: IT runbooks, user guides, SOPs, and knowledge bases.',
  keywords: [
    'technical writing services',
    'bilingual documentation',
    'IT runbooks',
    'standard operating procedures',
  ],
  canonical: '/services/technical-writing',
});

const serviceSchema = generateServiceSchema({
  name: 'Technical Writing Services',
  description:
    'Professional technical writing and bilingual English-Chinese documentation, including IT runbooks, user guides, SOPs, and knowledge bases.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Technical Writing',
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
