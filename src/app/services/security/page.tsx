'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Zap,
  Database,
} from 'lucide-react';

export default function SecurityPage() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your security posture and vulnerabilities.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Penetration Testing',
      description: 'Simulated attacks to identify security weaknesses in your systems.',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring and threat detection services.',
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Incident Response',
      description: 'Rapid response and recovery from security incidents and breaches.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'Encryption, access controls, and data loss prevention solutions.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Shield className="w-4 h-4" />
              <span className="font-inter">Cybersecurity</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Enterprise
              <span className="block text-gradient-emerald mt-2">Security Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Protect your business with comprehensive cybersecurity solutions, threat detection, and compliance management.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-emerald hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Security Assessment
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h3 className="font-display font-semibold text-2xl text-neutral-900 mb-8">
              Compliance & Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {compliance.map((standard, index) => (
                <div
                  key={index}
                  className="p-4 bg-emerald-50 rounded-xl text-center"
                >
                  <div className="text-lg font-bold text-emerald-700 font-display mb-1">
                    {standard.name}
                  </div>
                  <div className="text-sm text-emerald-600 font-inter">
                    {standard.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Services
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              End-to-end cybersecurity solutions to protect your business from evolving threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-emerald-600">{service.icon}</div>
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Threat Landscape */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Modern Threats
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Protecting Against Evolving Threats
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Ransomware',
                description: 'Protection against encryption-based attacks and data extortion',
                icon: <Lock className="w-8 h-8" />,
              },
              {
                title: 'Phishing',
                description: 'Defense against social engineering and credential theft',
                icon: <Users className="w-8 h-8" />,
              },
              {
                title: 'Zero-Day',
                description: 'Detection and mitigation of unknown vulnerabilities',
                icon: <AlertTriangle className="w-8 h-8" />,
              },
              {
                title: 'Insider Threats',
                description: 'Monitoring and prevention of internal security risks',
                icon: <Eye className="w-8 h-8" />,
              },
            ].map((threat, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-emerald-600">{threat.icon}</div>
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-4">
                  {threat.title}
                </h3>
                <p className="text-neutral-600 font-inter">
                  {threat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-emerald text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Partner with cybersecurity experts to build robust defenses against evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-emerald-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Security Audit
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}