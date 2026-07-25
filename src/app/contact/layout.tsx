import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact w1IT - IT Services & App Support',
  description:
    'Contact W1IT in Seattle, WA for managed IT services, consulting, or app support. Bilingual support available in English and Chinese.',
  keywords: [
    'contact w1IT',
    'IT support contact',
    'Seattle IT services contact',
    'request IT consultation',
    'app support',
    'bilingual IT support',
  ],
  canonical: '/contact',
  openGraph: {
    title: 'Contact w1IT | IT Services & App Support',
    description: 'Get in touch for IT services, consulting, or app support. Bilingual support available.',
    type: 'website',
  },
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
