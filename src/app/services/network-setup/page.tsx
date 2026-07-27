import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import NetworkSetupContent from './NetworkSetupContent';

/**
 * W1IT Network Setup Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export const metadata: Metadata = generateSEO({
  title: 'Network Setup & Configuration Services Seattle',
  description:
    'Network design, build-outs, and architecture optimization in Greater Seattle. WiFi, VPN, structured cabling - and audits that cut recurring network costs.',
  keywords: [
    'network setup Seattle',
    'WiFi installation Bellevue',
    'router configuration',
    'network troubleshooting Seattle',
    'business network setup',
    'VPN configuration',
    'Meraki network setup',
    'network security Seattle',
  ],
  canonical: '/services/network-setup',
  openGraph: {
    title: 'Network Setup Services Seattle | w1IT',
    description: 'Professional network installation and configuration for Seattle area businesses.',
    type: 'website',
  },
});

export default function NetworkSetup() {
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'w1IT - Network Setup Services',
    description:
      'Professional network setup, WiFi installation, and network troubleshooting services for homes and businesses in the Seattle area.',
    url: 'https://w1it.com/services/network-setup',
    email: 'contact@w1it.com',
    address: {
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond'],
  });

  const serviceSchema = generateServiceSchema({
    name: 'Network Setup & Configuration',
    description:
      'Professional network installation, WiFi setup, router configuration, and network troubleshooting services for Seattle area homes and businesses.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond'],
    serviceType: 'Network Installation and Configuration',
  });

  return (
    <>
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
      <NetworkSetupContent />
    </>
  );
}
