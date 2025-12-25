'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Cloud,
  Server,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Cpu,
  Database,
  Globe,
  Lock,
  Code,
  BarChart3,
  Smartphone,
  Headphones,
  Rocket,
  Sparkles,
} from 'lucide-react';

export default function Home() {
  const services = [
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
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation-Driven',
      description: 'Leverage cutting-edge technologies and modern frameworks to stay ahead of the competition.',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support with rapid response times and dedicated account managers.',
      color: 'text-secondary-600',
      bgColor: 'bg-secondary-50',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Expertise',
      description: 'Experience working with clients across industries and geographies, delivering scalable solutions.',
      color: 'text-accent-600',
      bgColor: 'bg-accent-50',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Security First',
      description: 'Enterprise-grade security protocols and compliance standards built into every solution.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
  ];

  const stats = [
    { value: '200+', label: 'Projects Delivered', icon: <CheckCircle2 className="w-5 h-5" /> },
    { value: '99.9%', label: 'Client Satisfaction', icon: <Award className="w-5 h-5" /> },
    { value: '24/7', label: 'Support Coverage', icon: <Zap className="w-5 h-5" /> },
    { value: '50+', label: 'Expert Team Members', icon: <Users className="w-5 h-5" /> },
  ];

  const clients = [
    'Fortune 500 Companies',
    'Startups & Scale-ups',
    'Government Agencies',
    'Healthcare Organizations',
    'Financial Institutions',
    'Educational Institutions',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Clean Professional */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-48 bg-gradient-primary text-white overflow-hidden">
        {/* Simple background */}
        <div className="absolute inset-0 bg-blue-600 opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

        <Container>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="font-inter">Professional IT Services & Support</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight animate-fade-in-up">
              Expert IT Solutions for
              <span className="block mt-2">Your Business Success</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Reliable technology support, cloud infrastructure, and managed services to keep your business running smoothly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-white text-blue-600 hover:bg-blue-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {stat.icon}
                    <div className="text-4xl font-bold text-white font-poppins">{stat.value}</div>
                  </div>
                  <div className="text-sm text-white/80 font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section - Professional Cards */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Services
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
              Professional technology services to support your business growth and operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-scale-in border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Icon with solid background */}
                  <div className={`w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6`}>
                    <div className="text-blue-600">{service.icon}</div>
                  </div>

                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button href={service.href} variant="ghost" className="group w-full justify-center text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us - Professional Benefits */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 font-inter">
              Why Choose Us
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              The W1 IT Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter">
              Professional IT services with a focus on reliability, expertise, and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-8 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:border-blue-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6`}>
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Client Types */}
          <div className="mt-24 text-center">
            <h3 className="font-poppins font-semibold text-2xl text-gray-900 mb-8">
              Trusted by Businesses
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white text-gray-700 rounded-full text-sm font-medium font-inter hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-200"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        {/* Simple background */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8">
              Ready for Professional IT Support?
            </h2>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Get reliable technology solutions and expert support for your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Services
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-8 font-inter">
              No commitment required • Expert consultation • Customized solutions
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}



