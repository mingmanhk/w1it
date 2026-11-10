import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cybersecurity Services',
  description:
    'Network security assessments, endpoint protection, firewall management, and security training from Seattle experts. Prioritized fixes, not scare reports.',
  keywords: [
    'cybersecurity services Seattle',
    'network security assessment',
    'endpoint protection',
    'firewall management',
  ],
  canonical: '/services/security',
});

const serviceSchema = generateServiceSchema({
  name: 'Cybersecurity Services',
  description:
    'Network security assessments, endpoint protection, firewall management, and security training with prioritized, actionable fixes.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'Cybersecurity Services',
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
