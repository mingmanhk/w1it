'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  RefreshCw,
  Database,
  Shield,
  Wrench,
  Globe,
  Search,
  TrendingUp,
  Gauge,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function SolutionsPage() {
  const strategicSolutions = [
    {
      title: 'Digital Transformation',
      icon: <RefreshCw className="w-10 h-10" />,
      headline: 'Modernize your systems, processes, and workflows.',
      description: 'We help businesses transition from legacy systems to modern, efficient, cloud‑ready environments.',
      href: '/solutions/digital-transformation',
      outcomes: [
        'Reduced operational overhead',
        'Improved system reliability',
        'Faster deployment cycles',
        'Better team productivity',
      ],
      includes: [
        'Cloud migration planning',
        'Hybrid infrastructure design',
        'Automation workflows',
        'Legacy system modernization',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cybersecurity & Risk Management',
      icon: <Shield className="w-10 h-10" />,
      headline: 'Protect your business with modern security practices.',
      description: 'Security isn\'t optional — it\'s foundational. We help organizations identify risks, strengthen defenses, and maintain compliance.',
      href: '/solutions/cybersecurity-strategy',
      outcomes: [
        'Reduced security vulnerabilities',
        'Stronger compliance posture',
        'Improved incident response',
        'Peace of mind',
      ],
      includes: [
        'Security audits',
        'Hardening & patching',
        'Zero‑trust strategy',
        'Backup & disaster recovery planning',
      ],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Data & Analytics Solutions',
      icon: <Database className="w-10 h-10" />,
      headline: 'Make smarter decisions with actionable insights.',
      description: 'We turn your data into a strategic asset.',
      href: '/solutions/data-analytics',
      outcomes: [
        'Clear visibility into performance',
        'Predictive insights',
        'Automated reporting',
        'Better decision‑making',
      ],
      includes: [
        'BI dashboards',
        'Predictive analytics',
        'Data cleanup & transformation',
        'Reporting automation',
      ],
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Website Optimization & Digital Growth',
      icon: <Globe className="w-10 h-10" />,
      headline: 'Improve performance, increase traffic, and enhance user experience.',
      description: 'Your website is your digital storefront — we help you make it faster, clearer, and more effective.',
      href: '/solutions/website-optimization',
      outcomes: [
        'Higher traffic',
        'Better user engagement',
        'Faster load times',
        'Increased conversions',
      ],
      includes: [
        'SEO strategy',
        'UX improvements',
        'Feature implementation',
        'Analytics & conversion tracking',
      ],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Custom IT Solutions',
      icon: <Wrench className="w-10 h-10" />,
      headline: 'Tailored solutions for unique business challenges.',
      description: 'Every business is different — we design solutions that fit your exact needs.',
      href: '/solutions/custom-it-solutions',
      outcomes: [
        'Reduced complexity',
        'Better alignment with business goals',
        'Long‑term scalability',
      ],
      includes: [
        'Custom automation',
        'Specialized integrations',
        'Technical documentation',
        'Workflow optimization',
      ],
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  const websiteOptimization = {
    title: 'Website Optimization & Growth Consulting',
    icon: <Globe className="w-10 h-10" />,
    description: 'Website creation, enhancement, and growth strategies for client success.',
    services: [
      {
        name: 'Website Creation',
        description: 'Custom websites for client businesses',
        icon: <Wrench className="w-6 h-6" />,
      },
      {
        name: 'Feature Implementation',
        description: 'Custom functionality and integrations',
        icon: <Zap className="w-6 h-6" />,
      },
      {
        name: 'UX Enhancements',
        description: 'User experience design and optimization',
        icon: <Gauge className="w-6 h-6" />,
      },
      {
        name: 'SEO Strategy',
        description: 'Search engine optimization and visibility',
        icon: <Search className="w-6 h-6" />,
      },
      {
        name: 'Site Traffic Growth',
        description: 'Marketing and traffic generation strategies',
        icon: <TrendingUp className="w-6 h-6" />,
      },
      {
        name: 'Analytics & Conversion Tracking',
        description: 'Data-driven optimization and reporting',
        icon: <Database className="w-6 h-6" />,
      },
    ],
    gradient: 'from-indigo-500 to-blue-500',
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <RefreshCw className="w-4 h-4" />
              <span className="font-inter">Strategic Solutions</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Strategic IT Solutions
              <span className="block text-gradient-primary mt-2">That Drive Real Business Outcomes</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              W1IT delivers strategic, outcome‑driven IT solutions that help organizations modernize, scale, and operate with confidence. Our solutions focus on long‑term value, operational clarity, and measurable results.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Explore Strategic Solutions
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Solutions */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Strategic Solutions
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Strategic Solutions for Modern Business
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Each solution is designed to deliver specific business outcomes, not just technical features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicSolutions.map((solution, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${solution.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 font-inter text-lg">
                    {solution.headline}
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-neutral-700 font-inter mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-lg text-neutral-900 mb-3">
                      Outcomes:
                    </h4>
                    <div className="space-y-2">
                      {solution.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-neutral-600 font-inter">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-lg text-neutral-900 mb-3">
                      Includes:
                    </h4>
                    <div className="space-y-2">
                      {solution.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-neutral-600 font-inter">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    href={solution.href}
                    variant="outline"
                    className="w-full"
                  >
                    Explore {solution.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Website Optimization Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              New Service Area
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Website Optimization & Growth Consulting
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              A comprehensive service area focused on building, enhancing, and growing client websites for maximum impact.
            </p>
          </div>

          <Card className="border-2 border-indigo-200">
            <div className={`bg-gradient-to-br ${websiteOptimization.gradient} p-8 text-white rounded-t-2xl`}>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  {websiteOptimization.icon}
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">
                {websiteOptimization.title}
              </h3>
              <p className="text-white/90 font-inter">
                {websiteOptimization.description}
              </p>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {websiteOptimization.services.map((service, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-lg hover:bg-white transition-colors">
                    <div className="text-indigo-500 mt-1 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h5 className="font-display font-semibold text-neutral-900">
                        {service.name}
                      </h5>
                      <p className="text-neutral-600 text-sm font-inter mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Button href="/contact" size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
                  Start Your Website Transformation
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Not Sure What Fits?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Schedule a free consultation to discuss your specific business challenges and discover the perfect strategic solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Browse All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}