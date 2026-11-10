import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cybersecurity Strategy',
  description:
    'Build a security roadmap that fits your risk profile: assessments, compliance alignment, incident response planning, and staff training.',
  keywords: [
    'cybersecurity strategy',
    'security roadmap',
    'incident response planning',
    'compliance alignment',
  ],
  canonical: '/solutions/cybersecurity-strategy',
});

const serviceSchema = generateServiceSchema({
  name: 'Cybersecurity Strategy',
  description:
    'A security roadmap built around a business\'s own risk profile: assessments, compliance alignment, incident response planning, and staff training.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Cybersecurity Strategy',
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
