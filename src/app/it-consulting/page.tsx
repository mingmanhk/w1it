import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import ITConsultingContent from './ITConsultingContent';

export const metadata: Metadata = generateSEO({
  title: 'IT Consulting Services Seattle - Strategic Technology Planning',
  description:
    'Expert IT consulting in Seattle: technology strategy, network architecture, security compliance, and bilingual technical writing. Remote and local.',
  keywords: [
    'IT consulting Seattle',
    'technology strategy Seattle',
    'network architecture consulting',
    'IT process optimization',
    'security compliance consulting',
    'bilingual technical writing',
    'cross-cultural IT communication',
    'Seattle IT consultant',
    'technology roadmapping',
    'IT infrastructure consulting',
    'cloud architecture consulting',
  ],
  canonical: '/it-consulting',
  openGraph: {
    title: 'IT Consulting Services Seattle | w1IT',
    description:
      'Smart IT consulting with clear strategies for secure, scalable growth. Bilingual support available.',
    type: 'website',
  },
});

export default function ITConsulting() {
  // Generate structured data for SEO
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'w1IT - IT Consulting',
    description:
      'Strategic IT consulting services including technology roadmapping, system architecture design, process optimization, and security compliance guidance with bilingual support.',
    url: 'https://w1it.com/it-consulting',
    email: 'contact@w1it.com',
    address: {
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County'],
  });

  const serviceSchema = generateServiceSchema({
    name: 'IT Consulting Services',
    description:
      'Strategic IT consulting for businesses including technology strategy, network architecture, security compliance, and process optimization with clear, actionable recommendations.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County', 'Remote Worldwide'],
    serviceType: 'IT Consulting',
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
      <ITConsultingContent />
    </>
  );
}
