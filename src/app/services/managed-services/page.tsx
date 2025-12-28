'use client';

import Button from '@/components/Button';
import {
  Cpu,
  Headphones,
  Shield,
  Database,
  Globe,
  Users,
} from 'lucide-react';

/**
 * W1IT Managed Services Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

export default function ManagedServicesPage() {
  const services = [
    {
      icon: Cpu,
      title: 'Proactive Monitoring',
      description: '24/7 monitoring of your IT infrastructure with automated alerts.',
    },
    {
      icon: Headphones,
      title: 'Help Desk Support',
      description: 'Dedicated technical support team for rapid issue resolution.',
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security services including patch management and threat detection.',
    },
    {
      icon: Database,
      title: 'Backup & Recovery',
      description: 'Automated data backup and disaster recovery solutions.',
    },
    {
      icon: Globe,
      title: 'Network Management',
      description: 'Optimization and management of your network infrastructure.',
    },
    {
      icon: Users,
      title: 'Strategic Consulting',
      description: 'IT strategy planning and technology roadmap development.',
    },
  ];

  const benefits = [
    'Predictable monthly costs with no surprise expenses',
    'Access to enterprise-grade expertise and tools',
    'Proactive problem resolution before issues impact business',
    'Scalable solutions that grow with your business',
    'Compliance with industry standards and regulations',
    'Focus on core business while we manage your IT',
  ];

  const tiers = [
    {
      name: 'Essential',
      description: 'Basic monitoring and support for small businesses',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Basic Security'],
    },
    {
      name: 'Professional',
      description: 'Comprehensive management for growing businesses',
      features: ['Proactive Maintenance', 'Advanced Security', 'Strategic Planning'],
    },
    {
      name: 'Enterprise',
      description: 'Full-scale IT management for large organizations',
      features: ['Dedicated Team', 'Compliance Management', 'Business Continuity'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              Proactive IT Management
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto mb-8">
              Comprehensive IT management with 24/7 monitoring, strategic consulting, and dedicated support for your business.
            </p>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-lg text-[#050816] mb-6">
                Your Dedicated IT Team
              </h2>
              <p className="text-body text-[#4A4A4A] mb-6 leading-relaxed">
                Managed IT Services provide a comprehensive solution for businesses that want to focus on their core operations while leaving technology management to experts.
              </p>
              <p className="text-body text-[#4A4A4A] mb-8 leading-relaxed">
                We act as an extension of your team, providing proactive monitoring, strategic guidance, and rapid support to ensure your technology drives business success.
              </p>
              <Button href="/contact" variant="primary">
                Schedule Consultation
              </Button>
            </div>
            <div className="bg-[#050816] rounded-card p-8 text-white">
              <h3 className="text-heading-md mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#D9D9D9]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Comprehensive Managed Services
            </h2>
            <p className="text-body-lg text-[#4A4A4A] max-w-3xl mx-auto">
              End-to-end IT management solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-card">
                  <div className="w-14 h-14 bg-[#3A81F7] rounded-card flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-heading-md text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Flexible Service Plans
            </h2>
            <p className="text-body-lg text-[#4A4A4A] max-w-3xl mx-auto">
              Choose the level of service that matches your business requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div key={index} className="border-2 border-[#D9D9D9] rounded-card overflow-hidden">
                <div className="bg-[#050816] text-white p-8 text-center">
                  <h3 className="text-heading-md mb-2">{tier.name}</h3>
                  <p className="text-body text-[#D9D9D9]">{tier.description}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" variant="primary" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Ready to Simplify Your IT Management?
            </h2>
            <p className="text-body text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Partner with us to build scalable, secure, and innovative IT solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Free Assessment
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
            <p className="text-caption text-[#4A4A4A] mt-8">
              No commitment required • 30-minute discovery call • Custom service proposal
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
