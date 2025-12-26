'use client';

import React, { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import BentoGrid from '@/components/BentoGrid';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryNav from '@/components/CategoryNav';
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
  Phone,
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('hero');

  // Handle scroll to detect active category
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'benefits', 'stats', 'clients', 'bento', 'cta'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(`category-${section}`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Managed IT Services',
      description: 'Comprehensive IT management with proactive monitoring, support, and strategic consulting for your business.',
      href: '/services/managed-services',
      features: ['24/7 Monitoring', 'Proactive Maintenance', 'Strategic IT Planning'],
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Virus Removal & Prevention',
      description: 'Protect your business from malware, ransomware, and cyber threats with expert security solutions.',
      href: '/services/security',
      features: ['Malware Removal', 'Threat Prevention', 'Security Audits'],
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'Microsoft Windows Management',
      description: 'Expert implementation, management, and optimization of Microsoft Windows environments.',
      href: '/services/windows-management',
      features: ['Windows Deployment', 'System Updates', 'Performance Optimization'],
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: 'Data Backup & Recovery',
      description: 'Secure data protection with reliable backup solutions and disaster recovery planning.',
      href: '/services/data-backup',
      features: ['Automated Backups', 'Disaster Recovery', 'Business Continuity'],
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: 'IT Help Desk Services',
      description: 'Responsive technical support and troubleshooting for your business technology needs.',
      href: '/services/help-desk',
      features: ['Remote Support', 'Quick Response', 'Expert Troubleshooting'],
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: 'Email & VOIP Communications',
      description: 'Reliable business communication solutions including email hosting and VOIP phone systems.',
      href: '/services/communications',
      features: ['Email Hosting', 'VOIP Systems', 'Unified Communications'],
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Virus Removal & Prevention',
      description: 'Comprehensive protection against malware, ransomware, and cyber threats with expert security solutions.',
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Windows & Apple Support',
      description: 'Expert management and implementation for both Microsoft Windows and Apple device environments.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Backup & Recovery',
      description: 'Reliable disaster recovery and business continuity planning to protect your critical business data.',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Email & VOIP Communications',
      description: 'Professional business communication solutions including email hosting and VOIP phone systems.',
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
      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 py-4">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/', isCurrent: true },
            ]}
            className="text-sm"
          />
        </Container>
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Category Navigation Sidebar */}
        <div className="lg:w-64 lg:sticky lg:top-24 lg:self-start lg:pt-8">
          <Container className="lg:px-0">
            <CategoryNav
              activeCategoryId={activeCategory}
              onCategoryClick={setActiveCategory}
              sticky={false}
            />
          </Container>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Section - Modern Design */}
          <section
            id="category-hero"
            className="relative pt-12 pb-32 md:pt-20 md:pb-48 bg-gradient-primary text-white overflow-hidden"
          >
        {/* Modern background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-secondary-900/90" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Modern Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="font-inter">Modern IT Solutions for Forward-Thinking Businesses</span>
            </div>

            {/* Modern Heading */}
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight animate-fade-in-up">
              Transform Your Business with
              <span className="block mt-2 text-gradient-accent">Modern IT Solutions</span>
            </h1>

            {/* Modern Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              We deliver cutting-edge IT solutions that drive growth, enhance security, and streamline operations. From cloud migration to cybersecurity, we help businesses leverage technology as a competitive advantage.
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-white text-primary-600 hover:bg-white/90 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                Explore Services
              </Button>
            </div>

            {/* Modern Stats - Moved to separate section below */}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section
        id="category-stats"
        className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
      >
        <Container>
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm font-medium mb-4 font-inter">
              <span>Company Stats</span>
            </div>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
              Our Performance Metrics
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl font-inter">
              Quantifiable results and achievements that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="text-purple-600 dark:text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white font-poppins">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

          {/* Bento Grid Section - Modern Layout */}
          <section
            id="category-bento"
            className="py-16 bg-white dark:bg-gray-950"
          >
            <Container>
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 rounded-full text-sm font-medium mb-4 font-inter">
                  <span>Solutions Grid</span>
                </div>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">
                  Interactive Solutions Explorer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 font-inter">
                  Explore our comprehensive IT services through our interactive bento grid
                </p>
              </div>
              <BentoGrid />
            </Container>
          </section>

          {/* Services Section - Professional Cards */}
          <section
            id="category-services"
            className="py-24 bg-white"
          >
            <Container>
              <div className="mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4 font-inter">
                  <span>IT Services</span>
                </div>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                  Full Suite of Enterprise-Grade Solutions
                </h2>
                <p className="text-gray-600 max-w-3xl font-inter">
                  W1IT provides comprehensive IT services tailored to small and midsize businesses in Bellevue and the surrounding area.
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
          <section
            id="category-benefits"
            className="py-24 bg-gray-50"
          >
            <Container>
              <div className="mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4 font-inter">
                  <span>Business Benefits</span>
                </div>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                  Expert Guidance for Your Business
                </h2>
                <p className="text-gray-600 max-w-3xl font-inter">
                  No problem. Just reach out — we'll assess your environment, listen to your goals, and recommend the right solutions to keep your business secure, efficient, and future-ready.
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
        </Container>
      </section>

      {/* Client Types Section */}
      <section
        id="category-clients"
        className="py-16 bg-white"
      >
        <Container>
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium mb-4 font-inter">
              <span>Client Types</span>
            </div>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-gray-900 mb-2">
              Trusted by Businesses
            </h2>
            <p className="text-gray-600 max-w-3xl font-inter">
              We serve a diverse range of organizations across various industries
            </p>
          </div>

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
        </Container>
      </section>

      {/* CTA Section - Professional */}
      <section
        id="category-cta"
        className="py-24 bg-blue-600 text-white relative overflow-hidden"
      >
        {/* Simple background */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-90" />
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8">
              Ready to Maximize Your Business Technology?
            </h2>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Whether you're facing common issues or complex infrastructure challenges, our expert IT support team is ready to respond with precision and care.
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
        </div> {/* Close main content */}
      </div> {/* Close flex container */}
    </div>
  );
}



