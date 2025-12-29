'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import {
  Rocket,
  Cloud,
  Database,
  Smartphone,
  Users,
  BarChart3,
  Shield,
} from 'lucide-react';

/**
 * W1IT Digital Transformation Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud platforms with minimal disruption to your operations.',
    },
    {
      icon: Database,
      title: 'Data Modernization',
      description: 'Transform legacy data systems into modern, scalable data platforms.',
    },
    {
      icon: Smartphone,
      title: 'Digital Experience',
      description: 'Create engaging digital experiences for customers and employees.',
    },
    {
      icon: BarChart3,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business workflows.',
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Build security into every layer of your digital transformation.',
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Support your team through technology adoption and cultural change.',
    },
  ];

  const benefits = [
    'Increased operational efficiency',
    'Enhanced customer experience',
    'Improved data-driven decision making',
    'Reduced operational costs',
    'Greater business agility',
    'Competitive advantage in the market',
  ];

  const phases = [
    { step: '01', title: 'Assessment', description: 'Current state analysis and opportunity identification' },
    { step: '02', title: 'Strategy', description: 'Roadmap development and business case creation' },
    { step: '03', title: 'Implementation', description: 'Phased execution with agile methodology' },
    { step: '04', title: 'Optimization', description: 'Continuous improvement and value realization' },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Digital Transformation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Accelerate Your Digital Journey
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Transform your business with strategic technology adoption, process optimization, and innovative digital solutions.
            </p>
            <Button href="/contact" variant="primary">
              Start Transformation
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">
                Strategic Digital Transformation
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                Digital transformation is more than just technology adoption—it's a fundamental rethinking of how your organization uses technology, people, and processes to fundamentally change business performance.
              </p>
              <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed">
                We take a holistic approach that aligns technology investments with business objectives, ensuring measurable ROI and sustainable growth.
              </p>
              <Button href="/contact" variant="primary">
                Schedule Consultation
              </Button>
            </div>
            <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
              <h3 className="text-[20px] font-semibold text-[#050816] mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-[#4A4A4A]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Comprehensive Transformation Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              End-to-end digital transformation solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Structured Transformation Methodology
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              A proven approach to ensure successful digital transformation outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="text-center bg-[#FFFFFF] p-8 border-2 border-[#D9D9D9]">
                <div className="w-16 h-16 bg-[#3A81F7] text-white flex items-center justify-center text-[20px] font-semibold mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                  {phase.title}
                </h3>
                <p className="text-[16px] text-[#4A4A4A]">
                  {phase.description}
                </p>
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
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Partner with us to build a digital future that drives growth, innovation, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Start Your Journey
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
