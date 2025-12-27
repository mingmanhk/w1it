'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Server,
  Shield,
  BarChart3,
  Globe,
  Cpu,
  Headphones,
  Wrench,
  Network,
  Monitor,
  FileText,
  Cloud,
  Zap,
  Users,
  Code,
  Search,
  TrendingUp,
  Gauge,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'Managed IT Services',
      icon: <Server className="w-10 h-10" />,
      description: 'Proactive monitoring, support, and infrastructure management with SLA guarantees.',
      gradient: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Proactive Monitoring & Support',
          description: '24/7 system monitoring and preventive maintenance',
          icon: <Monitor className="w-6 h-6" />,
        },
        {
          name: 'SLA-Guaranteed Help Desk',
          description: 'Guaranteed response times for critical issues',
          icon: <Headphones className="w-6 h-6" />,
        },
        {
          name: 'Remote & On-Site Support',
          description: 'Comprehensive support options for all needs',
          icon: <Users className="w-6 h-6" />,
        },
        {
          name: 'Co-Managed IT Services',
          description: 'Augment your existing IT team with our expertise',
          icon: <Cpu className="w-6 h-6" />,
        },
        {
          name: 'Network Setup & Optimization',
          description: 'Professional network design and performance tuning',
          icon: <Network className="w-6 h-6" />,
        },
        {
          name: 'Hardware & Printer Setup',
          description: 'Equipment installation and configuration',
          icon: <Wrench className="w-6 h-6" />,
        },
        {
          name: 'Microsoft Windows Repair',
          description: 'OS troubleshooting and optimization',
          icon: <Monitor className="w-6 h-6" />,
        },
      ],
    },
    {
      title: 'IT Consulting & Strategy',
      icon: <BarChart3 className="w-10 h-10" />,
      description: 'Strategic technology planning, audits, and transformation roadmaps.',
      gradient: 'from-emerald-500 to-green-500',
      services: [
        {
          name: 'Infrastructure Planning',
          description: 'Scalable architecture design for growth',
          icon: <Cloud className="w-6 h-6" />,
        },
        {
          name: 'Cloud Migration & Hybrid Strategy',
          description: 'Seamless transition to cloud platforms',
          icon: <Cloud className="w-6 h-6" />,
        },
        {
          name: 'Cybersecurity Audits & Compliance',
          description: 'Risk assessment and regulatory compliance',
          icon: <Shield className="w-6 h-6" />,
        },
        {
          name: 'Process Optimization',
          description: 'Streamline operations with technology',
          icon: <Zap className="w-6 h-6" />,
        },
        {
          name: 'Technology Roadmapping',
          description: 'Strategic planning for future growth',
          icon: <BarChart3 className="w-6 h-6" />,
        },
        {
          name: 'Data Backup & Recovery',
          description: 'Comprehensive disaster recovery planning',
          icon: <Server className="w-6 h-6" />,
        },
        {
          name: 'IT Training & Documentation',
          description: 'Employee training and process documentation',
          icon: <FileText className="w-6 h-6" />,
        },
      ],
    },
    {
      title: 'Web Development & Optimization',
      icon: <Globe className="w-10 h-10" />,
      description: 'Website creation, enhancement, and growth strategies for client success.',
      gradient: 'from-violet-500 to-purple-500',
      services: [
        {
          name: 'Website Creation',
          description: 'Custom websites for client businesses',
          icon: <Code className="w-6 h-6" />,
        },
        {
          name: 'Feature Implementation',
          description: 'Custom functionality and integrations',
          icon: <Wrench className="w-6 h-6" />,
        },
        {
          name: 'UX Enhancements',
          description: 'User experience design and optimization',
          icon: <Smartphone className="w-6 h-6" />,
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
          icon: <BarChart3 className="w-6 h-6" />,
        },
        {
          name: 'Performance Optimization',
          description: 'Speed, accessibility, and mobile responsiveness',
          icon: <Gauge className="w-6 h-6" />,
        },
      ],
    },
    {
      title: 'On-Demand & Specialized Support',
      icon: <Zap className="w-10 h-10" />,
      description: 'Emergency support, specialized troubleshooting, and technical services.',
      gradient: 'from-amber-500 to-orange-500',
      services: [
        {
          name: 'Virus Removal',
          description: 'Malware detection and eradication',
          icon: <Shield className="w-6 h-6" />,
        },
        {
          name: 'Data Recovery',
          description: 'File and system recovery services',
          icon: <Server className="w-6 h-6" />,
        },
        {
          name: 'High-Speed Internet Setup',
          description: 'Network connectivity optimization',
          icon: <Network className="w-6 h-6" />,
        },
        {
          name: 'Technical Troubleshooting',
          description: 'Diagnostic and repair services',
          icon: <Wrench className="w-6 h-6" />,
        },
        {
          name: 'API Documentation',
          description: 'Technical writing for developers',
          icon: <FileText className="w-6 h-6" />,
        },
        {
          name: 'Technical Writing',
          description: 'Professional documentation services',
          icon: <FileText className="w-6 h-6" />,
        },
        {
          name: 'Emergency Remote Support',
          description: '24/7 urgent technical assistance',
          icon: <Headphones className="w-6 h-6" />,
        },
      ],
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
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Server className="w-4 h-4" />
              <span className="font-inter">Professional Services</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Comprehensive
              <span className="block text-gradient-primary mt-2">IT Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              From proactive monitoring to strategic consulting and specialized support—everything your business needs to thrive in the digital age.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Categories */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Service Categories
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Four Pillars of IT Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Our services are organized into four comprehensive categories to address every aspect of your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${category.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {category.title}
                  </h3>
                  <p className="text-white/90 font-inter">
                    {category.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4">
                    Included Services
                  </h4>
                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-3 bg-neutral-50 rounded-lg hover:bg-white transition-colors">
                        <div className="text-primary-500 mt-1 flex-shrink-0">
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
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual Layout Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              At a Glance
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              A modular card layout showcasing our core service areas with clear icons and descriptions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-8 border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">
                Managed IT Services
              </h3>
              <p className="text-neutral-600 font-inter">
                End-to-end support, monitoring, and infrastructure management.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 border-emerald-200 hover:border-emerald-300 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">
                Data Analytics
              </h3>
              <p className="text-neutral-600 font-inter">
                Turn raw data into actionable insights with BI dashboards and predictive tools.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 border-violet-200 hover:border-violet-300 transition-colors">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">
                Website Optimization
              </h3>
              <p className="text-neutral-600 font-inter">
                Build, enhance, and grow client websites with SEO, UX, and analytics.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 border-amber-200 hover:border-amber-300 transition-colors">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-900 mb-3">
                Cybersecurity
              </h3>
              <p className="text-neutral-600 font-inter">
                Protect your business with audits, compliance, and 24/7 monitoring.
              </p>
            </Card>
          </div>
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
              Schedule a free consultation to discuss your specific needs and discover the perfect service package for your business.
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
                href="/solutions"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Strategic Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}