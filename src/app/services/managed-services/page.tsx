'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import {
  Cpu,
  Headphones,
  Shield,
  Database,
  Globe,
  Users,
} from 'lucide-react';

/**
 * W1IT Managed Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
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
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Managed IT Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Proactive IT Management
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Comprehensive IT management with 24/7 monitoring, strategic consulting, and dedicated support for your business.
            </p>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">
                Your Dedicated IT Team
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                Managed IT Services provide a comprehensive solution for businesses that want to focus on their core operations while leaving technology management to experts.
              </p>
              <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed">
                We act as an extension of your team, providing proactive monitoring, strategic guidance, and rapid support to ensure your technology drives business success.
              </p>
              <Button href="/contact" variant="primary">
                Schedule Consultation
              </Button>
            </div>
            <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
              <h3 className="text-[20px] font-semibold text-[#050816] mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-[#4A4A4A]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Comprehensive Managed Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              End-to-end IT management solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Flexible Service Plans
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Choose the level of service that matches your business requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className="bg-[#FFFFFF] border-2 border-[#D9D9D9]">
                <div className="bg-[#F1F5F9] p-8 text-center">
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-2">{tier.name}</h3>
                  <p className="text-[16px] text-[#4A4A4A]">{tier.description}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[16px] text-[#4A4A4A]">{feature}</span>
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
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Simplify Your IT Management?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Partner with us to build scalable, secure, and innovative IT solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Free Assessment
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
