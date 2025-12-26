'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import ModularGrid, { GridItem } from '@/components/ModularGrid';
import {
  Cpu,
  Shield,
  Server,
  Database,
  Headphones,
  Phone,
  Zap,
  Users,
  Award,
  CheckCircle2,
  Cloud,
  BarChart3,
  Code,
  MessageSquare,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const gridItems: GridItem[] = [
    // Top row - Key services
    {
      id: 'managed-services',
      title: 'Managed IT Services',
      description: '24/7 monitoring, proactive maintenance, and strategic IT planning for your business.',
      size: 'medium',
      type: 'feature',
      href: '/services/managed-services',
      icon: <Cpu className="w-8 h-8" />,
      tags: ['24/7 Support', 'Proactive'],
      featured: true,
    },
    {
      id: 'security',
      title: 'Cybersecurity Solutions',
      description: 'Protect your business from malware, ransomware, and cyber threats with expert security.',
      size: 'small',
      type: 'card',
      href: '/services/security',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Migration',
      description: 'AWS, Azure, and Google Cloud solutions for scalable infrastructure.',
      size: 'small',
      type: 'card',
      href: '/services/cloud-solutions',
      icon: <Cloud className="w-8 h-8" />,
    },

    // Second row - Stats and solutions
    {
      id: 'stats',
      title: 'Our Impact',
      size: 'medium',
      type: 'stats',
      href: '/case-studies',
      stats: [
        { value: '200+', label: 'Projects' },
        { value: '99.9%', label: 'Satisfaction' },
        { value: '24/7', label: 'Support' },
        { value: '50+', label: 'Experts' },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable business intelligence and insights.',
      size: 'small',
      type: 'card',
      href: '/solutions/data-analytics',
      icon: <BarChart3 className="w-8 h-8" />,
    },

    // Third row - Additional services
    {
      id: 'data-backup',
      title: 'Data Backup & Recovery',
      description: 'Secure data protection with reliable backup solutions and disaster recovery.',
      size: 'small',
      type: 'card',
      href: '/services/data-backup',
      icon: <Database className="w-8 h-8" />,
    },
    {
      id: 'help-desk',
      title: 'IT Help Desk',
      description: 'Responsive technical support and troubleshooting for your business needs.',
      size: 'small',
      type: 'card',
      href: '/services/help-desk',
      icon: <Headphones className="w-8 h-8" />,
    },
    {
      id: 'communications',
      title: 'Email & VOIP',
      description: 'Reliable business communication solutions including email and phone systems.',
      size: 'small',
      type: 'card',
      href: '/services/communications',
      icon: <Phone className="w-8 h-8" />,
    },

    // Fourth row - Solutions and apps
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Modernize processes and drive innovation with our expert guidance.',
      size: 'medium',
      type: 'feature',
      href: '/solutions/digital-transformation',
      icon: <TrendingUp className="w-8 h-8" />,
      tags: ['Innovation', 'Strategy'],
    },
    {
      id: 'custom-apps',
      title: 'Custom Applications',
      description: 'Tailored software solutions for your unique business requirements.',
      size: 'small',
      type: 'card',
      href: '/apps',
      icon: <Code className="w-8 h-8" />,
    },

    // Fifth row - CTA and blog
    {
      id: 'free-consultation',
      title: 'Free IT Consultation',
      description: 'Get expert advice on your technology infrastructure with no commitment required.',
      size: 'xlarge',
      type: 'cta',
      href: '/contact',
      ctaText: 'Schedule Now',
    },
    {
      id: 'latest-insights',
      title: 'Latest IT Insights',
      description: 'Stay updated with the latest IT trends, security tips, and tech insights.',
      size: 'medium',
      type: 'news',
      href: '/blog',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      id: 'testimonials',
      title: 'Client Success Stories',
      description: 'See how we helped businesses transform their technology infrastructure.',
      size: 'small',
      type: 'testimonial',
      href: '/testimonials',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - W1 Core UI Pattern */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 to-brand-blue/90" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            {/* Value Pillar Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-10 animate-fade-in border border-white/20">
              <Sparkles className="w-4 h-4" />
              <span className="font-sans">Operational clarity for modern IT</span>
            </div>

            {/* Hero Heading */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight animate-fade-in-up">
              Infrastructure
              <span className="block mt-4 text-gradient-accent">Done Right</span>
            </h1>

            {/* Hero Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed font-sans animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Modern solutions. Zero guesswork. We deliver clarity, stability, and performance for businesses in Bellevue and beyond.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-brand-blue text-white hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 shadow-md">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
                Explore Services
              </Button>
            </div>

            {/* Value Pillars */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex flex-col items-center space-y-2 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="font-sans font-medium">Clarity</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="font-sans font-medium">Resilience</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="font-sans font-medium">Performance</span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-white/90">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="font-sans font-medium">Modernization</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Proposition Grid - W1 Core UI Pattern */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <Container size="lg">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary dark:text-text-primary mb-6">
              Why Choose W1IT?
            </h2>
            <p className="text-lg text-text-secondary dark:text-text-secondary max-w-2xl mx-auto font-sans">
              Our approach is built on four core pillars that define every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 border border-border-light dark:border-border-dark hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-brand-blue dark:text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary dark:text-text-primary mb-4">Clarity</h3>
              <p className="text-text-secondary dark:text-text-secondary font-sans">
                We eliminate ambiguity with transparent processes, clear communication, and straightforward solutions.
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 border border-border-light dark:border-border-dark hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-brand-blue dark:text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary dark:text-text-primary mb-4">Resilience</h3>
              <p className="text-text-secondary dark:text-text-secondary font-sans">
                Build systems that withstand challenges with robust architecture, redundancy, and proactive monitoring.
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 border border-border-light dark:border-border-dark hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-brand-blue dark:text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary dark:text-text-primary mb-4">Performance</h3>
              <p className="text-text-secondary dark:text-text-secondary font-sans">
                Optimized solutions that deliver speed, efficiency, and scalability for your growing business needs.
              </p>
            </div>

            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 border border-border-light dark:border-border-dark hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-brand-blue dark:text-brand-blue" />
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary dark:text-text-primary mb-4">Modernization</h3>
              <p className="text-text-secondary dark:text-text-secondary font-sans">
                Future-proof your infrastructure with cutting-edge technologies and forward-thinking strategies.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Modular Grid Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <Container size="lg">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary dark:text-text-primary mb-6">
              Explore Our IT Solutions
            </h2>
            <p className="text-lg text-text-secondary dark:text-text-secondary max-w-2xl mx-auto font-sans">
              Navigate through our comprehensive IT services and solutions. Click any card to explore in detail.
            </p>
          </div>

          <ModularGrid
            items={gridItems}
            columns={3}
            gap="lg"
          />

          {/* Quick Navigation */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <h3 className="font-display font-semibold text-2xl text-gray-900 dark:text-white text-center mb-8">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button href="/services" variant="outline" className="justify-center py-4">
                All Services
              </Button>
              <Button href="/solutions" variant="outline" className="justify-center py-4">
                Solutions
              </Button>
              <Button href="/case-studies" variant="outline" className="justify-center py-4">
                Case Studies
              </Button>
              <Button href="/contact" variant="outline" className="justify-center py-4">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Client Types - Simplified */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-6">
              Trusted by Businesses Across Industries
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
              We serve a diverse range of organizations, from startups to enterprise clients
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Fortune 500 Companies',
              'Startups & Scale-ups',
              'Government Agencies',
              'Healthcare Organizations',
              'Financial Institutions',
              'Educational Institutions',
              'Manufacturing',
              'Retail & E-commerce',
            ].map((client, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium font-sans hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-gray-200 dark:border-gray-700"
              >
                {client}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA - W1 Core UI Pattern */}
      <section className="py-20 bg-brand-navy text-white">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-white/90 mb-10 font-sans">
              Whether you're facing common issues or complex infrastructure challenges, our expert IT team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="xl"
                className="bg-brand-blue text-white hover:bg-blue-600 hover:shadow-lg"
              >
                Get Free Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Browse Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}