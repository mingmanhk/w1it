'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { Zap, Search, Target, TrendingUp, Users, Shield } from 'lucide-react';

/**
 * W1IT Website Optimization Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function WebsiteOptimizationPage() {
  const services = [
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Dramatically improve page load speeds with image optimization, code splitting, and caching strategies.',
    },
    {
      icon: Search,
      title: 'SEO Enhancement',
      description: 'Boost search rankings with technical SEO improvements, metadata optimization, and structured data.',
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      description: 'Increase conversions through A/B testing, UX improvements, and strategic call-to-action placement.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Data-driven optimization using advanced analytics to identify and fix performance bottlenecks.',
    },
    {
      icon: Users,
      title: 'User Experience Audit',
      description: 'Comprehensive UX analysis to improve navigation, accessibility, and user satisfaction.',
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      description: 'Implement security best practices, SSL, and protection against common vulnerabilities.',
    },
  ];

  const benefits = [
    {
      metric: '3x Faster',
      description: 'Average page load speed improvement',
    },
    {
      metric: '50%+',
      description: 'Increase in organic search traffic',
    },
    {
      metric: '2x Higher',
      description: 'Conversion rate improvements',
    },
    {
      metric: '90+',
      description: 'Google PageSpeed score',
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Website Optimization Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Website Optimization Solutions
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Transform your website into a high-performance, conversion-focused powerhouse with expert optimization services.
            </p>
            <Button href="/contact" variant="primary">
              Get Free Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Proven Results
            </h2>
            <p className="text-[17px] text-[#4A4A4A]">
              Real performance improvements from our optimization services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.metric} className="text-center bg-[#FFFFFF] p-8 border-2 border-[#D9D9D9]">
                <div className="text-[42px] font-bold text-[#3A81F7] mb-2">
                  {benefit.metric}
                </div>
                <p className="text-[16px] text-[#4A4A4A]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Optimization Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Comprehensive solutions to maximize your website's potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-[#F8FAFC] p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Optimize Your Website?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Get a free performance audit and discover optimization opportunities for your website.
            </p>
            <Button href="/contact" variant="primary">
              Request Free Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
