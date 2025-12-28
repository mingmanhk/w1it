'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Database,
  Smartphone,
  Users,
  BarChart3,
  Shield,
} from 'lucide-react';

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud platforms with minimal disruption to your operations.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Modernization',
      description: 'Transform legacy data systems into modern, scalable data platforms.',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Digital Experience',
      description: 'Create engaging digital experiences for customers and employees.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business workflows.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Integration',
      description: 'Build security into every layer of your digital transformation.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Change Management',
      description: 'Support your team through technology adoption and cultural change.',
    },
  ];

  const benefits = [
    'Increased operational efficiency',
    'Enhanced customer experience',
    'Improved data-driven decision making',
    'Reduced operational costs',
    'Greater business agility',
    'Competitive advantage in the market',
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
              <Rocket className="w-4 h-4" />
              <span className="font-body">Digital Transformation</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Accelerate Your
              <span className="block text-gradient-primary mt-2">Digital Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Transform your business with strategic technology adoption, process optimization, and innovative digital solutions.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Transformation
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
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-body">
                Our Approach
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-8">
                Strategic Digital Transformation
              </h2>
              <p className="text-lg text-neutral-600 mb-6 font-body leading-relaxed">
                Digital transformation is more than just technology adoption—it&apos;s a fundamental rethinking of how your organization uses technology, people, and processes to fundamentally change business performance.
              </p>
              <p className="text-lg text-neutral-600 mb-8 font-body leading-relaxed">
                We take a holistic approach that aligns technology investments with business objectives, ensuring measurable ROI and sustainable growth.
              </p>
              <Button href="/contact" className="group">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-8 text-white">
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
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-body">
              Our Services
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive Transformation Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              End-to-end digital transformation solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-primary-600">{service.icon}</div>
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

      {/* Process Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium mb-4 font-body">
              Our Process
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Structured Transformation Methodology
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              A proven approach to ensure successful digital transformation outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Current state analysis and opportunity identification' },
              { step: '02', title: 'Strategy', description: 'Roadmap development and business case creation' },
              { step: '03', title: 'Implementation', description: 'Phased execution with agile methodology' },
              { step: '04', title: 'Optimization', description: 'Continuous improvement and value realization' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold font-heading mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-900 mb-4">
                  {phase.title}
                </h3>
                <p className="text-neutral-600 font-body">
                  {phase.description}
                </p>
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
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-body">
              Partner with us to build a digital future that drives growth, innovation, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Journey
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