import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import Button from '@/components/Button';
import Image from 'next/image';
import {
  Wifi,
  Settings,
  Lock,
  Building2,
  Search,
  Activity,
} from 'lucide-react';

/**
 * W1IT Network Setup Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export const metadata: Metadata = generateSEO({
  title: 'Network Setup & Configuration Services Seattle',
  description:
    'Professional network setup and configuration services in Seattle, Bellevue, Issaquah. WiFi installation, router configuration, VPN setup, and network troubleshooting for homes and businesses.',
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

  const services = [
    {
      icon: Wifi,
      title: 'WiFi Installation & Optimization',
      description: 'Professional WiFi setup with optimal coverage, security configuration, and performance tuning for homes and offices.',
    },
    {
      icon: Settings,
      title: 'Router & Switch Configuration',
      description: 'Expert configuration of routers, switches, and network equipment including Meraki, Ubiquiti, and enterprise solutions.',
    },
    {
      icon: Lock,
      title: 'VPN Setup & Security',
      description: 'Secure VPN configuration for remote work, site-to-site connections, and secure access to company resources.',
    },
    {
      icon: Building2,
      title: 'Business Network Design',
      description: 'Complete network infrastructure design for small businesses and growing companies in the Seattle area.',
    },
    {
      icon: Search,
      title: 'Network Troubleshooting',
      description: 'Fast diagnosis and resolution of network issues, slow connections, and connectivity problems.',
    },
    {
      icon: Activity,
      title: 'Network Monitoring Setup',
      description: 'PRTG, Meraki dashboard, and SNMP monitoring configuration to keep your network healthy.',
    },
  ];

  const commonIssues = [
    {
      title: 'Slow WiFi or Dead Zones',
      description: 'We\'ll analyze your space and install access points or mesh systems for perfect coverage throughout your home or office.',
    },
    {
      title: 'Unreliable Internet Connection',
      description: 'Diagnose and fix connectivity issues, optimize router settings, and ensure stable internet for remote work.',
    },
    {
      title: 'Network Security Concerns',
      description: 'Implement proper security: WPA3 encryption, firewall configuration, guest networks, and VPN access.',
    },
    {
      title: 'Can\'t Connect Devices',
      description: 'Troubleshoot device connectivity, configure network settings, and ensure all your devices work seamlessly.',
    },
  ];

  const whyChoose = [
    {
      title: 'Fast Response',
      description: 'Same-day or next-day service available. We understand network issues can\'t wait.',
    },
    {
      title: 'Expert Configuration',
      description: 'Years of experience with Meraki, PRTG, enterprise routers, and home networking solutions.',
    },
    {
      title: 'Clear Communication',
      description: 'No tech jargon. We explain what we\'re doing and why, in plain English (or Chinese).',
    },
  ];

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
      <div className="bg-[#FFFFFF]">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/optimized/hero-graphic.webp"
              alt="Network Setup & Configuration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
          </div>
          <div className="relative z-10 max-w-[1200px] mx-auto px-6">
            <div className="max-w-[800px] mx-auto text-center">
              <h1 className="text-[42px] font-bold text-white mb-6">
                Network Setup & Configuration
              </h1>
              <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
                Professional network installation and support for Seattle, Bellevue, Issaquah, and Snoqualmie. Fast, reliable network setup for homes and businesses with same-day service available.
              </p>
              <Button href="/contact" variant="primary">
                Schedule Network Setup
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-[28px] font-bold text-[#050816] mb-4">
                Network Services We Offer
              </h2>
              <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
                Complete network solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-[#FFFFFF]">
                    <div className="bg-[#F1F5F9] p-8">
                      <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[28px] font-bold text-[#050816] mb-12">
              Common Network Problems We Solve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commonIssues.map((issue, index) => (
                <div key={index} className="bg-[#FFFFFF] p-8">
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {issue.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#F1F5F9] p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-[28px] font-bold text-[#050816] mb-4">
                  Serving Greater Seattle
                </h2>
                <p className="text-[17px] text-[#4A4A4A] mb-6">
                  On-site network installation and support in:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma'].map((city) => (
                    <div key={city} className="bg-[#FFFFFF] px-4 py-3 border-2 border-[#D9D9D9]">
                      <span className="text-[16px] font-semibold text-[#050816]">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[16px] text-[#4A4A4A] mb-6">
                  Remote support also available for network configuration and troubleshooting
                </p>
                <Button href="/contact" variant="primary">
                  Get Network Help Today
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[28px] font-bold text-[#050816] text-center mb-12">
              Why Choose w1IT for Network Setup
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => (
                <div key={index} className="bg-[#FFFFFF] p-8 text-center">
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center">
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">
                Ready for Better Network Performance?
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                Contact us today for fast, professional network setup in the Seattle area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Schedule Service
                </Button>
                <Button href="/services" variant="secondary">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
