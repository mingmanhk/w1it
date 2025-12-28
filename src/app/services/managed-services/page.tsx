'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  Cpu,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Shield,
  Users,
  Globe,
  Database,
} from 'lucide-react';

export default function ManagedServicesPage() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Proactive Monitoring',
      description: '24/7 monitoring of your IT infrastructure with automated alerts.',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Help Desk Support',
      description: 'Dedicated technical support team for rapid issue resolution.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Management',
      description: 'Comprehensive security services including patch management and threat detection.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backup & Recovery',
      description: 'Automated data backup and disaster recovery solutions.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Network Management',
      description: 'Optimization and management of your network infrastructure.',
    },
    {
      icon: <Users className="w-8 h-8" />,
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Cpu className="w-4 h-4" />
              <span className="font-body">Managed IT Services</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Proactive
              <span className="block text-gradient-violet mt-2">IT Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Comprehensive IT management with 24/7 monitoring, strategic consulting, and dedicated support for your business.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-violet hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium mb-6 font-body">
                Complete IT Management
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-8">
                Your Dedicated IT Team
              </h2>
              <p className="text-lg text-neutral-600 mb-6 font-body leading-relaxed">
                Managed IT Services provide a comprehensive solution for businesses that want to focus on their core operations while leaving technology management to experts.
              </p>
              <p className="text-lg text-neutral-600 mb-8 font-body leading-relaxed">
                We act as an extension of your team, providing proactive monitoring, strategic guidance, and rapid support to ensure your technology drives business success.
              </p>
              <Button href="/contact" className="group">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl p-8 text-white">
              <h3 className="font-heading font-bold text-2xl mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="font-body">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-violet-50 text-violet-700 rounded-full text-sm font-medium mb-4 font-body">
              Our Services
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive Managed Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              End-to-end IT management solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-violet-600">{service.icon}</div>
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Levels */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-body">
              Service Tiers
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Flexible Service Plans
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              Choose the level of service that matches your business requirements and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Essential',
                description: 'Basic monitoring and support for small businesses',
                features: ['24/7 Monitoring', 'Help Desk Support', 'Basic Security'],
                color: 'from-blue-500 to-cyan-500',
              },
              {
                name: 'Professional',
                description: 'Comprehensive management for growing businesses',
                features: ['Proactive Maintenance', 'Advanced Security', 'Strategic Planning'],
                color: 'from-violet-500 to-purple-500',
              },
              {
                name: 'Enterprise',
                description: 'Full-scale IT management for large organizations',
                features: ['Dedicated Team', 'Compliance Management', 'Business Continuity'],
                color: 'from-primary-500 to-accent-500',
              },
            ].map((tier, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white p-8 text-center`}>
                  <h3 className="font-heading font-bold text-2xl mb-2">{tier.name}</h3>
                  <p className="font-body">{tier.description}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-neutral-700 font-body">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" className="w-full justify-center">
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-violet text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8">
              Ready to Simplify Your IT Management?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-body">
              Partner with us to build scalable, secure, and innovative IT solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-violet-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Assessment
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
            <p className="text-sm text-white/70 mt-8 font-body">
              No commitment required • 30-minute discovery call • Custom service proposal
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}