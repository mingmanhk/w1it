import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'IT Automation Services',
  description:
    'Automate repetitive IT tasks: scripting, workflow automation, monitoring, and self-healing infrastructure for Seattle businesses.',
  keywords: [
    'IT automation Seattle',
    'workflow automation',
    'IT scripting services',
    'self-healing infrastructure',
  ],
  canonical: '/services/it-automation',
});

const serviceSchema = generateServiceSchema({
  name: 'IT Automation Services',
  description:
    'Scripting, workflow automation, monitoring, and self-healing infrastructure that cuts down repetitive manual IT work.',
  provider: { name: 'w1IT', url: 'https://w1it.com' },
  areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Kirkland'],
  serviceType: 'IT Automation',
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
