'use client';

import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-brand-gray-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Stack */}
            <div className="text-center lg:text-left">
              <h1 className="font-heading font-bold text-h1 text-brand-navy mb-6">
                Modern IT for Modern Business
              </h1>
              <p className="text-body-lg text-brand-gray-mid mb-8 max-w-lg mx-auto lg:mx-0">
                W1IT delivers reliable, scalable, and secure IT solutions that empower your business to thrive in a digital-first world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="bg-brand-blue text-white font-body text-base font-medium px-8 py-4 rounded-btn hover:opacity-90 transition-opacity">
                  Get a Free Consultation
                </Link>
                <Link href="/services" className="bg-transparent text-brand-blue font-body text-base font-medium px-8 py-4 rounded-btn border-2 border-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right: Geometric Illustration */}
            <div className="hidden lg:block">
              <div className="relative w-full h-full aspect-square">
                <div className="absolute inset-0 bg-brand-blue rounded-2xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-brand-cyan rounded-2xl transform rotate-6"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading font-bold text-h2 text-brand-navy mb-4">Your Trusted IT Partner</h2>
            <p className="text-body-lg text-brand-gray-mid">
              We provide the expertise and support you need to navigate the complexities of modern technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="bg-white border border-[#E2E8F0] rounded-card p-6 shadow-card">
              <h3 className="font-heading font-bold text-h3 text-brand-navy mb-3">Infrastructure</h3>
              <p className="text-body-md text-brand-gray-mid">Robust and scalable solutions for cloud, on-premise, and hybrid environments.</p>
            </div>
            {/* Value Prop 2 */}
            <div className="bg-white border border-[#E2E8F0] rounded-card p-6 shadow-card">
              <h3 className="font-heading font-bold text-h3 text-brand-navy mb-3">Automation</h3>
              <p className="text-body-md text-brand-gray-mid">Streamline your operations with custom automation and CI/CD pipelines.</p>
            </div>
            {/* Value Prop 3 */}
            <div className="bg-white border border-[#E2E8F0] rounded-card p-6 shadow-card">
              <h3 className="font-heading font-bold text-h3 text-brand-navy mb-3">Security</h3>
              <p className="text-body-md text-brand-gray-mid">Protect your assets with comprehensive security audits and threat mitigation.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-navy py-24">
        <Container className="text-center">
          <h2 className="font-heading font-bold text-h2 text-white mb-4">Ready to Elevate Your IT?</h2>
          <p className="text-body-lg text-brand-gray-light mb-8 max-w-2xl mx-auto">Let W1IT Solutions be your partner in building a resilient and future-proof technology foundation.</p>
          <Link href="/contact" className="bg-brand-blue text-white font-body text-base font-medium px-8 py-4 rounded-btn hover:opacity-90 transition-opacity">
            Schedule a Call
          </Link>
        </Container>
      </section>
    </>
  );
}
