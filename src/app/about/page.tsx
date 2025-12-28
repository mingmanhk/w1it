'use client';

import { Target, Shield, Users, Rocket } from 'lucide-react';
import Image from 'next/image';

/**
 * W1IT About Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

export default function AboutPage() {
  const values = [
    {
      name: 'Confidence',
      description: 'We give small businesses the confidence to embrace technology and drive growth.',
      icon: Target,
    },
    {
      name: 'Clarity',
      description: 'We believe in clear communication, transparent pricing, and straightforward solutions.',
      icon: Shield,
    },
    {
      name: 'Control',
      description: 'We empower you with the tools and knowledge to take control of your technology.',
      icon: Users,
    },
    {
      name: 'Partnership',
      description: 'We don&apos;t believe in one-size-fits-all. Every business is unique — and so is our approach.',
      icon: Rocket,
    },
  ];

  const whyChooseUs = [
    'Expert support tailored specifically for small business needs.',
    'Proactive monitoring and prevention — stop problems before they start.',
    'Fast, friendly help desk services when you need us most.',
    'Transparent pricing with custom plans that fit your budget.',
    'Strategic IT consulting to help you grow smarter, not just bigger.',
    'Enterprise-grade security without enterprise-level complexity.',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              About{' '}
              <span className="inline-flex items-baseline gap-1" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif' }}>
                <span>W</span>
                <span className="text-[#00A878]">1</span>
                <span>IT</span>
              </span>
              {' '}
              <span style={{ letterSpacing: '0.12em' }}>SOLUTIONS</span>
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
              Empowering small businesses with enterprise-grade IT solutions — without the complexity or overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-lg text-[#050816] mb-6">Our Mission</h2>
              <p className="text-body text-[#4A4A4A] leading-relaxed mb-6">
                At W1IT, we believe small businesses deserve enterprise-grade IT support without the complexity or overhead. Whether you&apos;re just starting out or scaling fast, our mission is simple: help you succeed by making your technology work smarter, faster, and safer.
              </p>
              <p className="text-body text-[#4A4A4A] leading-relaxed">
                We specialize in solving everyday tech issues and preventing future disruptions — so you can focus on growing your business, not troubleshooting it.
              </p>
            </div>
            <div>
              <Image
                src="/images/optimized/about-mission.svg"
                alt="W1IT's mission: Empowering businesses with clear, resilient, and high-performing IT solutions"
                width={600}
                height={400}
                className="rounded-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">Our Values</h2>
            <p className="text-body-lg text-[#4A4A4A] max-w-3xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-white rounded-card">
                  <div className="flex justify-center items-center w-16 h-16 bg-[#3A81F7] rounded-card mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-heading-md text-[#050816] mb-4">{value.name}</h3>
                  <p className="text-body text-[#4A4A4A]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/optimized/founder-story.svg"
                alt="W1IT Founder: Over a decade of IT expertise, building partnerships with Seattle businesses"
                width={600}
                height={400}
                className="rounded-card"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-heading-lg text-[#050816] mb-6">Built for Small Business Success</h2>
              <p className="text-body text-[#4A4A4A] leading-relaxed mb-6">
                W1IT was founded by Victor, a seasoned IT professional with over a decade of experience in building and managing complex IT systems. Frustrated by seeing small businesses struggle with overpriced, overcomplicated IT support, he set out to create something different — a consultancy that treats small businesses like valued partners, not ticket numbers.
              </p>
              <p className="text-body text-[#4A4A4A] leading-relaxed">
                Today, W1IT is a trusted technology partner for small businesses across Bellevue and the Seattle Metro Area. We&apos;re here to help you build a stronger, smarter foundation for growth — one where technology empowers you instead of holding you back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">Why Choose Us?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-white rounded-card">
                  <span className="inline-block w-1.5 h-1.5 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-body text-[#4A4A4A]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
