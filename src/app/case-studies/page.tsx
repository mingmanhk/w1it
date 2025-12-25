'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Shield,
  Cpu,
  Database,
  Users,
  Zap,
} from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Healthcare Provider Cloud Migration',
      description: 'Migrated critical healthcare applications to AWS with 99.99% uptime and HIPAA compliance.',
      results: ['40% cost reduction', '99.99% uptime', 'HIPAA compliant'],
      icon: <Cloud className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Financial Services Security Overhaul',
      description: 'Implemented comprehensive security framework for financial institution achieving SOC 2 compliance.',
      results: ['SOC 2 certified', 'Zero security incidents', '24/7 monitoring'],
      icon: <Shield className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Manufacturing Digital Transformation',
      description: 'Modernized legacy systems and implemented IoT solutions for predictive maintenance.',
      results: ['30% efficiency gain', 'Predictive maintenance', 'Real-time analytics'],
      icon: <Cpu className="w-8 h-8" />,
      gradient: 'from-primary-500 to-accent-500',
    },
    {
      title: 'Retail Data Analytics Platform',
      description: 'Built real-time analytics platform for retail chain enabling data-driven decision making.',
      results: ['25% sales increase', 'Real-time insights', 'Customer personalization'],
      icon: <Database className="w-8 h-8" />,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Education Technology Modernization',
      description: 'Transformed university IT infrastructure with cloud-based learning management system.',
      results: ['Scalable platform', 'Enhanced learning', 'Cost optimized'],
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Startup Infrastructure Scaling',
      description: 'Designed and implemented scalable cloud infrastructure for high-growth tech startup.',
      results: ['10x scalability', 'Auto-scaling', 'Cost management'],
      icon: <Zap className="w-8 h-8" />,
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <TrendingUp className="w-4 h-4" />
              <span className="font-inter">Success Stories</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Client
              <span className="block text-gradient-primary mt-2">Success Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Discover how we've helped businesses transform their technology and achieve remarkable results.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Featured Projects
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Transformative Technology Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Real-world examples of how we've helped clients achieve their technology goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${study.gradient} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {study.icon}
                    </div>
                  </div>
                  <h3 className="font-poppins font-bold text-2xl mb-4">
                    {study.title}
                  </h3>
                  <p className="text-white/90 font-inter">
                    {study.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-poppins font-semibold text-lg text-neutral-900 mb-4">
                    Key Results
                  </h4>
                  <div className="space-y-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-neutral-700 font-inter">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              By The Numbers
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Our track record of delivering exceptional value to clients across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Projects Completed' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '40%', label: 'Average Cost Reduction' },
              { value: '50+', label: 'Enterprise Clients' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary-600 font-poppins mb-4">
                  {stat.value}
                </div>
                <div className="text-lg text-neutral-700 font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Partner with us to achieve transformative results with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Project
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}