import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';
import RemoteSupportContent from './RemoteSupportContent';

/**
 * W1IT Remote Support Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export const metadata: Metadata = generateSEO({
  title: 'Remote IT Support & Troubleshooting - Seattle & Worldwide',
  description:
    'Fast, secure remote IT support from Seattle. Remote desktop support, system diagnostics, and software troubleshooting available worldwide.',
  keywords: [
    'remote IT support Seattle',
    'remote troubleshooting',
    'remote desktop support',
    'virtual IT help',
    'online technical support',
    'remote system administration',
    'work from home IT support',
  ],
  canonical: '/services/remote-support',
  openGraph: {
    title: 'Remote IT Support & Troubleshooting | w1IT',
    description: 'Fast, secure remote IT support available worldwide from Seattle-based experts.',
    type: 'website',
  },
});

export default function RemoteSupport() {
  const serviceSchema = generateServiceSchema({
    name: 'Remote IT Support & Troubleshooting',
    description:
      'Professional remote IT support and troubleshooting services providing fast technical assistance via secure remote connections.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Worldwide'],
    serviceType: 'Remote IT Support',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <RemoteSupportContent />
    </>
  );
}
