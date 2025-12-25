'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Smartphone,
  Palette,
  Camera,
  Users,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  Sparkles,
} from 'lucide-react';

export default function AppsPage() {
  const apps = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Contact SyncMate',
      description: 'Intelligent contact management and synchronization across all your devices and platforms.',
      href: '/apps/contact-syncmate',
      features: ['Cross-Platform Sync', 'Smart Deduplication', 'Backup & Recovery'],
      gradient: 'from-blue-500 to-cyan-500',
      status: 'Live',
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: 'Pixel Color Picker',
      description: 'Advanced color detection tool with palette generation and accessibility checking.',
      href: '/apps/pixel-color-picker',
      features: ['Color Detection', 'Palette Generation', 'Accessibility Tools'],
      gradient: 'from-violet-500 to-purple-500',
      status: 'Live',
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: 'ScreenGrabber',
      description: 'Professional screenshot and screen recording tool with annotation capabilities.',
      href: '/apps/screengrabber',
      features: ['Screen Recording', 'Annotation Tools', 'Cloud Storage'],
      gradient: 'from-emerald-500 to-green-500',
      status: 'Live',
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'DeepTicker',
      description: 'Real-time financial data analysis and market insights platform.',
      href: '/apps/deepticker',
      features: ['Real-Time Data', 'Market Analysis', 'Custom Alerts'],
      gradient: 'from-amber-500 to-orange-500',
      status: 'Live',
    },
  ];

  const benefits = [
    {
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed with user experience as the top priority.',
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: 'Cross-Platform',
      description: 'Applications that work seamlessly across web, mobile, and desktop platforms.',
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, authentication, and compliance standards.',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Regular Updates',
      description: 'Continuous improvement with feature updates and performance enhancements.',
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Innovative
              <span className="block text-gradient-primary mt-2">Applications</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Cutting-edge software solutions designed to solve real-world problems and enhance productivity.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Request Custom App
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Apps Grid Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Applications
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Featured Software Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Discover our portfolio of innovative applications built with modern technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <Card
                key={index}
                hoverable
                className="animate-scale-in border border-neutral-200 hover:border-transparent hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-2">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.gradient} flex items-center justify-center shadow-lg`}>
                      <div className="text-white">{app.icon}</div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium font-inter">
                      {app.status}
                    </span>
                  </div>

                  <h3 className="font-poppins font-semibold text-2xl text-neutral-900 mb-4">
                    {app.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 font-inter leading-relaxed">
                    {app.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                        <span className="text-neutral-700 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button href={app.href} variant="ghost" className="group w-full justify-center">
                    Explore App
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
              Development Excellence
            </div>
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Why Our Apps Stand Out
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              We combine technical expertise with user-centered design to create exceptional applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-primary-600">{benefit.icon}</div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom Development CTA */}
      <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              We specialize in building bespoke applications tailored to your specific business requirements.
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
                View Our Services
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-8 font-inter">
              Free consultation • Detailed proposal • Agile development process
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}