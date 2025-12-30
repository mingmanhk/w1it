'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Users,
  Globe,
  Database,
} from 'lucide-react';

/**
 * W1IT Security Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function SecurityPage() {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your security posture and vulnerabilities.',
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Simulated attacks to identify security weaknesses in your systems.',
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat detection services.',
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents and breaches.',
    },
    {
      icon: Database,
      title: 'Data Protection',
      description: 'Encryption, access controls, and data loss prevention solutions.',
    },
    {
      icon: Globe,
      title: 'Network Security',
      description: 'Firewall management, intrusion detection, and network segmentation.',
    },
  ];

  const compliance = [
    { name: 'SOC 2', description: 'Service organization controls' },
    { name: 'ISO 27001', description: 'Information security management' },
    { name: 'HIPAA', description: 'Healthcare data protection' },
    { name: 'GDPR', description: 'Data privacy regulation' },
    { name: 'PCI DSS', description: 'Payment card security' },
    { name: 'NIST', description: 'Cybersecurity framework' },
  ];

  const threats = [
    {
      icon: Lock,
      title: 'Ransomware',
      description: 'Protection against encryption-based attacks and data extortion',
    },
    {
      icon: Users,
      title: 'Phishing',
      description: 'Defense against social engineering and credential theft',
    },
    {
      icon: AlertTriangle,
      title: 'Zero-Day',
      description: 'Detection and mitigation of unknown vulnerabilities',
    },
    {
      icon: Eye,
      title: 'Insider Threats',
      description: 'Monitoring and prevention of internal security risks',
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Cybersecurity Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-black mb-6">
              Enterprise Security Solutions
            </h1>
            <p className="text-[17px] text-black/90 max-w-3xl mx-auto mb-8">
              Protect your business with comprehensive cybersecurity solutions, threat detection, and compliance management.
            </p>
            <Button href="/contact" variant="primary">
              Security Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-8">
              Compliance & Standards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((standard, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] p-6 text-center border-2 border-[#3A81F7]"
                >
                  <div className="text-[20px] font-semibold text-[#050816] mb-2">
                    {standard.name}
                  </div>
                  <div className="text-[16px] text-[#4A4A4A]">
                    {standard.description}
                  </div>
                </div>
              ))}
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
              End-to-end cybersecurity solutions to protect your business from evolving threats.
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

      {/* Threat Landscape */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Protecting Against Evolving Threats
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Modern cybersecurity challenges require comprehensive defense strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => {
              const Icon = threat.icon;
              return (
                <div key={index} className="bg-[#FFFFFF] p-8 text-center">
                  <div className="w-16 h-16 bg-[#00A878] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {threat.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Partner with cybersecurity experts to build robust defenses against evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Security Audit
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
