'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  Cloud,
  Server,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Database,
  Globe,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and data to cloud platforms.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cloud Database Solutions',
      description: 'Managed database services and data platform optimization.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cloud Security',
      description: 'Comprehensive security architecture and compliance management.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cost Optimization',
      description: 'Monitoring and optimization of cloud spending and resources.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Cloud Strategy',
      description: 'Strategic planning and implementation across multiple cloud providers.',
    },
  ];

  const platforms = [
    { name: 'AWS', color: 'from-orange-500 to-yellow-500' },
    { name: 'Azure', color: 'from-blue-500 to-cyan-500' },
    { name: 'Google Cloud', color: 'from-green-500 to-emerald-500' },
    { name: 'IBM Cloud', color: 'from-purple-500 to-violet-500' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Cloud className="w-4 h-4" />
              <span className="font-inter">Cloud Solutions</span>
            </div>
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Enterprise
              <span className="block text-gradient-blue mt-2">Cloud Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Transform your infrastructure with scalable, secure, and cost-effective cloud solutions from certified experts.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-blue hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start Cloud Journey
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h3 className="font-poppins font-semibold text-2xl text-neutral-900 mb-6">
              Certified Cloud Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`px-8 py-4 bg-gradient-to-r ${platform.color} text-white rounded-xl font-poppins font-bold text-lg`}
                >
                  {platform.name}
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
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Services
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              End-to-end cloud solutions designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-900 mb-4">
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

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Cloud Benefits
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Why Move to the Cloud?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Scalability',
                description: 'Easily scale resources up or down based on demand',
                icon: <TrendingUp className="w-8 h-8" />,
              },
              {
                title: 'Cost Efficiency',
                description: 'Pay only for what you use with flexible pricing models',
                icon: <CheckCircle2 className="w-8 h-8" />,
              },
              {
                title: 'Security',
                description: 'Enterprise-grade security with continuous monitoring',
                icon: <Shield className="w-8 h-8" />,
              },
              {
                title: 'Innovation',
                description: 'Access to latest technologies and services',
                icon: <Zap className="w-8 h-8" />,
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 font-inter">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-blue text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8">
              Ready for Cloud Transformation?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Partner with certified cloud experts to build scalable, secure, and innovative cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-blue-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Cloud Assessment
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