'use client';

import { Target, Shield, Users, Rocket } from 'lucide-react';
import Image from 'next/image';

/**
 * W1IT About Page - STRICT Design System Compliance
 * NO gradients, NO shadows, NO rounded-card (not approved)
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
 */

export default function AboutPage() {
  const values = [
    {
      name: 'Clarity',
      description: 'Clear communication, transparent pricing, and straightforward solutions.',
      icon: Shield,
    },
    {
      name: 'Resilience',
      description: 'Reliable IT infrastructure that keeps your business running smoothly.',
      icon: Target,
    },
    {
      name: 'Partnership',
      description: 'We treat your business like our own—tailored solutions, not one-size-fits-all.',
      icon: Rocket,
    },
    {
      name: 'Confidence',
      description: 'Empower your team with technology that drives growth, not frustration.',
      icon: Users,
    },
  ];

  const whyChooseUs = [
    'Expert support tailored for small business needs',
    'Proactive monitoring—stop problems before they start',
    'Fast, responsive help desk when you need us',
    'Transparent pricing with plans that fit your budget',
    'Strategic IT consulting for smarter growth',
    'Enterprise-grade security without the complexity',
  ];

  return (
    <div className="bg-white">
      {/* Section / Hero */}
      <section className="bg-[#050816] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[48px] font-bold text-white mb-6">
              About W1IT Solutions
            </h1>
            <p className="text-[18px] text-[#D9D9D9]">
              Enterprise-grade IT support designed for small businesses—without the complexity or overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Section / Foundation (Values) */}
      <section className="py-24 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-bold text-[#050816] mb-4">
              Our Values
            </h2>
            <p className="text-[18px] text-[#4A4A4A] max-w-[700px] mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-white">
                  <div className="flex justify-center items-center w-16 h-16 bg-[#3A81F7] mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#050816] mb-4">{value.name}</h3>
                  <p className="text-[16px] text-[#4A4A4A]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section / Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] font-bold text-[#050816] mb-6">Our Mission</h2>
              <p className="text-[18px] text-[#4A4A4A] mb-6 leading-relaxed">
                W1IT provides small businesses with enterprise-grade IT support—minus the complexity. We solve everyday tech problems and prevent future disruptions so you can focus on growth, not troubleshooting.
              </p>
              <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                Founded by Victor, a seasoned IT professional with over a decade of experience, W1IT was born from frustration with overpriced, overcomplicated IT support. We treat small businesses like valued partners, not ticket numbers.
              </p>
            </div>
            <div>
              <Image
                src="/images/optimized/about-mission.svg"
                alt="W1IT Mission"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section / WhyChooseUs */}
      <section className="py-24 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] font-bold text-[#050816] mb-4">Why Choose W1IT?</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-white">
                  <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-[16px] text-[#4A4A4A]">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section / CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#050816] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] text-[#4A4A4A] mb-8 max-w-[600px] mx-auto">
              Let's build a stronger IT foundation for your business.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block px-8 py-4 bg-[#3A81F7] text-white text-[16px] font-bold text-center">
                Schedule Consultation
              </a>
              <a href="/services" className="inline-block px-8 py-4 border-2 border-[#3A81F7] text-[#3A81F7] text-[16px] font-bold text-center">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
