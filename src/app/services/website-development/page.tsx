'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import { Code, Smartphone, Zap, Globe, Search, TrendingUp } from 'lucide-react';

/**
 * W1IT Website Development Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored websites built with modern frameworks like Next.js, React, and TypeScript for optimal performance.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times with optimized images, code splitting, and edge caching.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices with metadata, sitemaps, and structured data for better rankings.',
    },
    {
      icon: Globe,
      title: 'E-Commerce Solutions',
      description: 'Robust online stores with secure payment processing and inventory management.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Integrated analytics to track performance, user behavior, and conversion metrics.',
    },
  ];

  const technologies = [
    'Next.js 15+',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Vercel',
    'AWS',
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Website Development & Optimization"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Website Development & Optimization
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Build fast, beautiful, and conversion-focused websites that drive business growth
            </p>
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              What We Offer
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-[#F8FAFC] p-8">
                  <Icon className="w-16 h-16 text-[#3A81F7] mb-6" strokeWidth={1.5} />
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              We use industry-leading technologies to build robust, scalable websites
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-[#FFFFFF] px-6 py-3 border-2 border-[#3A81F7] text-[#050816] text-[16px] font-bold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a website that exceeds expectations
            </p>
            <Button href="/contact" variant="primary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
