import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

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
      icon: '📡',
      title: 'WiFi Installation & Optimization',
      description: 'Professional WiFi setup with optimal coverage, security configuration, and performance tuning for homes and offices.',
    },
    {
      icon: '🔧',
      title: 'Router & Switch Configuration',
      description: 'Expert configuration of routers, switches, and network equipment including Meraki, Ubiquiti, and enterprise solutions.',
    },
    {
      icon: '🔒',
      title: 'VPN Setup & Security',
      description: 'Secure VPN configuration for remote work, site-to-site connections, and secure access to company resources.',
    },
    {
      icon: '🏢',
      title: 'Business Network Design',
      description: 'Complete network infrastructure design for small businesses and growing companies in the Seattle area.',
    },
    {
      icon: '🔍',
      title: 'Network Troubleshooting',
      description: 'Fast diagnosis and resolution of network issues, slow connections, and connectivity problems.',
    },
    {
      icon: '⚡',
      title: 'Network Monitoring Setup',
      description: 'PRTG, Meraki dashboard, and SNMP monitoring configuration to keep your network healthy.',
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
      <div>
        {/* Hero Section */}
        <section className="pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-white to-blush">
          <Container>
            <div className="text-center animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Network Setup & Configuration
              </h1>
              <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto mb-4 font-body">
                Professional network installation and support for Seattle, Bellevue, Issaquah, and Snoqualmie.
              </p>
              <p className="text-md text-gray-medium max-w-2xl mx-auto mb-8 font-body">
                Fast, reliable network setup for homes and businesses. Same-day service available.
              </p>
              <Button href="/contact">
                Schedule Network Setup
              </Button>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
              Network Services We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  hoverable
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-medium font-body">{service.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Common Issues We Solve */}
        <section className="py-20 md:py-32 bg-gray-bg">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-12">
              Common Network Problems We Solve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Slow WiFi or Dead Zones
                </h3>
                <p className="text-gray-medium font-body">
                  We&apos;ll analyze your space and install access points or mesh systems for perfect coverage throughout your home or office.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Unreliable Internet Connection
                </h3>
                <p className="text-gray-medium font-body">
                  Diagnose and fix connectivity issues, optimize router settings, and ensure stable internet for remote work.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Network Security Concerns
                </h3>
                <p className="text-gray-medium font-body">
                  Implement proper security: WPA3 encryption, firewall configuration, guest networks, and VPN access.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                  Can&apos;t Connect Devices
                </h3>
                <p className="text-gray-medium font-body">
                  Troubleshoot device connectivity, configure network settings, and ensure all your devices work seamlessly.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Service Area */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="bg-blush p-8 md:p-12 rounded-2xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                  Serving Greater Seattle
                </h2>
                <p className="text-gray-medium font-body text-lg mb-6">
                  On-site network installation and support in:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma'].map((city) => (
                    <div key={city} className="bg-white px-4 py-3 rounded-lg shadow-sm">
                      <span className="font-body font-semibold text-charcoal">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-medium font-body mb-6">
                  Remote support also available for network configuration and troubleshooting
                </p>
                <Button href="/contact">
                  Get Network Help Today
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-32 bg-gray-bg">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
              Why Choose w1IT for Network Setup
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hoverable className="text-center">
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  Fast Response
                </h3>
                <p className="text-gray-medium font-body">
                  Same-day or next-day service available. We understand network issues can&apos;t wait.
                </p>
              </Card>

              <Card hoverable className="text-center">
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  Expert Configuration
                </h3>
                <p className="text-gray-medium font-body">
                  Years of experience with Meraki, PRTG, enterprise routers, and home networking solutions.
                </p>
              </Card>

              <Card hoverable className="text-center">
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  Clear Communication
                </h3>
                <p className="text-gray-medium font-body">
                  No tech jargon. We explain what we&apos;re doing and why, in plain English (or Chinese).
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Ready for Better Network Performance?
              </h2>
              <p className="text-lg text-gray-medium mb-8 font-body">
                Contact us today for fast, professional network setup in the Seattle area.
              </p>
              <Button href="/contact">
                Schedule Service
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
