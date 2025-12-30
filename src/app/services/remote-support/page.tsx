import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';
import Button from '@/components/Button';
import {
  Monitor,
  Settings,
  Zap,
  Lock,
  Mail,
  Lightbulb,
} from 'lucide-react';
import Hero from '@/components/Hero';

/**
 * W1IT Remote Support Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export const metadata: Metadata = generateSEO({
  title: 'Remote IT Support & Troubleshooting - Seattle & Worldwide',
  description:
    'Fast remote IT support and troubleshooting from Seattle. Secure remote desktop support, system diagnostics, software troubleshooting, and technical assistance available worldwide.',
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

  const services = [
    {
      icon: Monitor,
      title: 'Remote Desktop Support',
      description: 'Secure remote access to diagnose and fix issues on your computer in real-time.',
    },
    {
      icon: Settings,
      title: 'Software Troubleshooting',
      description: 'Fix application errors, installation problems, and software configuration issues.',
    },
    {
      icon: Zap,
      title: 'System Performance',
      description: 'Optimize slow computers, clean up systems, and improve overall performance.',
    },
    {
      icon: Lock,
      title: 'Security Updates',
      description: 'Ensure systems are updated, secure, and protected from vulnerabilities.',
    },
    {
      icon: Mail,
      title: 'Email & Cloud Setup',
      description: 'Configure email clients, cloud storage, and productivity tools.',
    },
    {
      icon: Lightbulb,
      title: 'User Training',
      description: 'Remote training sessions on software, tools, and best practices.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Contact Us',
      description: 'Email or call to describe your issue',
    },
    {
      step: '2',
      title: 'Schedule Session',
      description: 'We\'ll find a time that works for you',
    },
    {
      step: '3',
      title: 'Secure Connection',
      description: 'We connect remotely via secure tools',
    },
    {
      step: '4',
      title: 'Problem Solved',
      description: 'We fix the issue while you watch',
    },
  ];

  const benefits = [
    {
      title: 'Faster Response',
      description: 'No need to wait for an on-site visit. We can start helping you within hours, not days.',
    },
    {
      title: 'More Affordable',
      description: 'No travel time or trip charges. You only pay for the time spent solving your problem.',
    },
    {
      title: 'Available Anywhere',
      description: 'Whether you\'re in Seattle or working remotely from anywhere in the world.',
    },
  ];

  const securityFeatures = [
    'Encrypted remote connections',
    'You approve every action',
    'Session recordings available on request',
    'No persistent access to your systems',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <div className="bg-[#FFFFFF]">
        <Hero
            title="Remote IT Support"
            subtitle="Fast, secure remote troubleshooting from Seattle. Available worldwide. Same-day support available with secure connections and bilingual service (English/Chinese)."
            imageAlt="Remote IT Support"
            ctaButton={{ href: "/contact", text: "Get Help Now" }}
        />

        {/* How It Works Section */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[28px] font-bold text-[#050816] text-center mb-12">
              How Remote Support Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => (
                <div key={index} className="bg-[#F8FAFC] p-8 text-center">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6 mx-auto">
                    <span className="text-[24px] font-bold text-white">{item.step}</span>
                  </div>
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

        {/* Services Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[28px] font-bold text-[#050816] mb-12">
              Remote Support Services
            </h2>

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

        {/* Benefits Section */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[28px] font-bold text-[#050816] text-center mb-12">
              Why Choose Remote Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-[#F8FAFC] p-8">
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#F1F5F9] p-8">
              <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                Perfect for Remote Workers
              </h3>
              <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                Working from home in the Seattle area or anywhere else? We specialize in supporting remote workers
                with home office setup, VPN configuration, video conferencing troubleshooting, and productivity tool
                support. Get back to work faster with expert remote assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
              <h2 className="text-[28px] font-bold text-[#050816] mb-4 text-center">
                Secure & Private
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                Your security is our priority. We use industry-standard remote support tools with end-to-end
                encryption. You control the session and can see everything we do. We never access your system
                without your explicit permission.
              </p>
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-[#4A4A4A]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#FFFFFF]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center">
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">
                Need IT Help Right Now?
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
                Contact us for fast, secure remote support. Available for Seattle locals and worldwide clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary">
                  Request Remote Support
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
