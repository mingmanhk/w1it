'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import {
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Users,
  BarChart3,
} from 'lucide-react';

/**
 * W1IT Cybersecurity Strategy Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function CybersecurityStrategyPage() {
  const services = [
    {
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate security risks across your organization.',
      icon: AlertTriangle,
      features: ['Risk Assessment', 'Vulnerability Management', 'Threat Modeling', 'Risk Treatment Plans'],
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify security weaknesses before attackers do.',
      icon: Lock,
      features: ['Network Penetration Testing', 'Web Application Testing', 'Social Engineering', 'Wireless Security'],
    },
    {
      title: 'Compliance',
      description: 'Achieve and maintain regulatory compliance with industry standards.',
      icon: FileCheck,
      features: ['SOC 2 Compliance', 'HIPAA Security', 'GDPR Compliance', 'PCI DSS'],
    },
    {
      title: 'Security Governance',
      description: 'Establish security policies, procedures, and organizational structure.',
      icon: Users,
      features: ['Security Policies', 'Incident Response Plans', 'Security Training', 'Governance Framework'],
    },
  ];

  const benefits = [
    'Reduced security incidents and data breaches',
    'Compliance with industry regulations',
    'Improved customer trust and reputation',
    'Lower insurance premiums through risk reduction',
    'Proactive rather than reactive security posture',
    'Clear security roadmap and investment strategy',
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Cybersecurity Strategy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Cybersecurity Strategy Solutions
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Comprehensive security strategy services including risk management, penetration testing, compliance, and security governance.
            </p>
            <Button href="/contact" variant="primary">
              Get Security Assessment
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
                Beyond Basic Security
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                Cybersecurity strategy goes beyond installing antivirus software. It's about creating a comprehensive framework that protects your business assets, ensures regulatory compliance, and builds customer trust.
              </p>
              <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed">
                Our strategic approach combines risk assessment, technical controls, policy development, and ongoing governance to create a security posture that evolves with your business and the threat landscape.
              </p>
              <Button href="/contact" variant="primary">
                Schedule Security Consultation
              </Button>
            </div>
            <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#3A81F7] flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                  Security Maturity Assessment
                </h3>
                <p className="text-[16px] text-[#4A4A4A]">
                  We evaluate your current security posture across five key domains:
                </p>
              </div>
              <div className="space-y-4">
                {['Governance & Risk Management', 'Technical Controls', 'Compliance', 'Incident Response', 'Security Awareness'].map((domain, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-[#4A4A4A]">{domain}</span>
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
              Comprehensive Security Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              We provide end-to-end cybersecurity strategy services tailored to your business needs and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8 border-2 border-[#D9D9D9]">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[16px] text-[#4A4A4A]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Why Invest in Cybersecurity Strategy?
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              A strategic approach to cybersecurity delivers measurable business value beyond just protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-[#FFFFFF] p-8 border-2 border-[#D9D9D9]">
                <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                  {benefit}
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
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Contact us for a comprehensive security assessment and strategic roadmap tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Security Assessment
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
