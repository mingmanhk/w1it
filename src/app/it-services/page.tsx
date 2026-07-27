import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import ITServicesContent from './ITServicesContent';

export const metadata: Metadata = generateSEO({
  title: 'Seattle IT Support & Managed IT Services',
  description:
    'Managed IT services in Seattle, WA: remote troubleshooting, network monitoring, system administration, and bilingual support (English/Chinese).',
  keywords: [
    'Seattle IT support',
    'managed IT services Seattle',
    'remote IT troubleshooting Seattle',
    'IT infrastructure management',
    'network monitoring Seattle',
    'bilingual IT support',
    'technical documentation Seattle',
    'IT services Greater Seattle',
    'system administration Seattle',
    'SSL troubleshooting',
    'DNS configuration',
    'Matrix42',
    'PRTG monitoring',
    'Meraki network management',
  ],
  canonical: '/it-services',
  openGraph: {
    title: 'Seattle IT Support & Managed IT Services | w1IT',
    description:
      'Comprehensive IT service management with bilingual support. Available remotely worldwide and locally in Greater Seattle.',
    type: 'website',
  },
});

export default function ITServices() {
  // Generate structured data for SEO
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'w1IT - IT Services',
    description:
      'Professional managed IT services including infrastructure management, network monitoring, SSL/DNS troubleshooting, and bilingual technical support.',
    url: 'https://w1it.com/it-services',
    email: 'contact@w1it.com',
    address: {
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County'],
  });

  const serviceSchema = generateServiceSchema({
    name: 'Managed IT Services',
    description:
      'Comprehensive IT service management including system administration, network monitoring, workflow automation, and technical documentation for businesses.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County', 'Remote Worldwide'],
    serviceType: 'IT Support and Services',
  });

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <ITServicesContent />
    </>
  );
}
