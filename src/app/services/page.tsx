'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Cloud,
  Shield,
  Cpu,
  Database,
  Smartphone,
  Rocket,
  Server,
  Zap,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Globe,
  Lock,
  Code,
  BarChart3,
} from 'lucide-react';

export default function ServicesPage() {
  const allServices = [
    {
      icon: <Rocket className="w-10 h-10" />,
      title: 'Digital Transformation',
      description: 'Accelerate your business growth with cutting-edge digital solutions and strategic technology roadmaps.',
      href: '/solutions/digital-transformation',
      features: ['Strategy Planning', 'Technology Adoption', 'Process Optimization'],
      gradient: 'from-primary-500 to-accent-500',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Cloud & Infrastructure',
      description: 'Enterprise-grade cloud solutions with multi-cloud strategy, migration, and optimization services.',
      href: '/services/cloud-solutions',
      features: ['AWS/Azure/GCP', 'Hybrid Cloud', 'Cost Optimization'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, compliance, and risk management.',
      href: '/services/security',
      features: ['SOC 2 Compliance', 'Penetration Testing', '24/7 Monitoring'],
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Managed IT Services',
      description: 'End-to-end IT management with proactive monitoring, support, and strategic consulting.',
      href: '/services/managed-services',
      features: ['Proactive Support', 'SLA Guaranteed', 'Strategic Planning'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights with modern data platforms and analytics solutions.',
      href: '/solutions/data-analytics',
      features: ['Data Warehousing', 'Business Intelligence', 'AI/ML Integration'],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: 'App Development',
      description: 'Custom software and mobile applications built with modern frameworks and best practices.',
      href: '/apps',
      features: ['Custom Solutions', 'Mobile Apps', 'Web Applications'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'Network Setup',
      description: 'Professional network design, implementation, and optimization for businesses of all sizes.',
      href: '/services/network-setup',
      features: ['Network Design', 'Hardware Setup', 'Performance Optimization'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: 'Remote Support',
      description: '24/7 technical support and troubleshooting for your business systems and applications.',
      href: '/services/remote-support',
      features: ['24/7 Availability', 'Rapid Response', 'Expert Technicians'],
      gradient: 'from-teal-500 to-emerald-500',
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Technical Writing',
      description: 'Professional documentation, user guides, and technical content for your products and services.',
      href: '/services/technical-writing',
      features: ['API Documentation', 'User Manuals', 'Technical Guides'],
      gradient: 'from-gray-500 to-neutral-500',
    },
  ];

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Certified professionals with decades of combined experience in enterprise technology.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Proven Methodology',
      description: 'Structured approach ensuring successful project delivery and measurable results.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support with guaranteed response times.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Scalable Solutions',
      description: 'Future-proof technology designed to grow with your business needs.',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Comprehensive
              <span className="block text-gradient-tech mt-2">IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              End-to-end technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-tech hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* All Services Section */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Services
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
              Complete Technology Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
              From strategy to implementation and support, we provide comprehensive IT services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-scale-in border border-slate-200 hover:border-transparent hover:shadow-xl transition-all duration-300 border-gradient-tech"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <h3 className="font-poppins font-semibold text-2xl text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 font-inter leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-slate-700 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button href={service.href} variant="ghost" className="group w-full justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Why Choose Our Services
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
              The W1 IT Advantage
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
              Experience the difference with our client-centric approach and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:border-gradient-tech"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-primary-600">{benefit.icon}</div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-tech text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Partner with us to build scalable, secure, and innovative technology solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-slate-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Our Team
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-8 font-inter">
              No commitment required • 30-minute discovery call • Custom solution proposal
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}