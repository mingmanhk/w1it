'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import {
  Wrench,
  Cpu,
  Code,
  Server,
  Zap,
  Users,
  BarChart3,
} from 'lucide-react';

/**
 * W1IT Custom IT Solutions Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function CustomITSolutionsPage() {
  const solutionTypes = [
    {
      title: 'Tailored Packages',
      description: 'Customized service bundles combining our standard offerings in unique ways.',
      icon: Wrench,
      examples: [
        'Hybrid support models (onsite + remote)',
        'Industry-specific compliance packages',
        'Growth-stage business bundles',
        'Multi-location enterprise packages',
      ],
    },
    {
      title: 'Bespoke Solutions',
      description: 'Completely custom-built technology solutions for unique business challenges.',
      icon: Code,
      examples: [
        'Custom workflow automation systems',
        'Proprietary data processing pipelines',
        'Specialized reporting and analytics',
        'Unique customer-facing applications',
      ],
    },
    {
      title: 'Integration Services',
      description: 'Connecting disparate systems and creating seamless data flows.',
      icon: Server,
      examples: [
        'API development and integration',
        'Legacy system modernization',
        'Cloud-to-on-premise connectivity',
        'Third-party software integration',
      ],
    },
    {
      title: 'Custom Development',
      description: 'Building software applications from scratch to meet specific requirements.',
      icon: Cpu,
      examples: [
        'Web application development',
        'Mobile app development',
        'Desktop software solutions',
        'Embedded systems programming',
      ],
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business processes, challenges, and goals.',
      icon: Users,
    },
    {
      step: '2',
      title: 'Solution Design',
      description: 'Architecting the optimal technology solution for your needs.',
      icon: BarChart3,
    },
    {
      step: '3',
      title: 'Development & Implementation',
      description: 'Building and deploying the custom solution with rigorous testing.',
      icon: Code,
    },
    {
      step: '4',
      title: 'Support & Evolution',
      description: 'Ongoing maintenance, updates, and feature enhancements.',
      icon: Zap,
    },
  ];

  const needs = [
    'Unique industry-specific requirements',
    'Integration of multiple disparate systems',
    'Proprietary processes or workflows',
    'Scalability beyond standard offerings',
    'Specialized compliance needs',
    'Competitive differentiation through technology',
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Custom IT Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Custom IT Solutions
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Tailored packages and bespoke technology solutions designed specifically for your unique business needs and challenges.
            </p>
            <Button href="/contact" variant="primary">
              Discuss Your Custom Needs
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
                When Standard Solutions Don't Fit
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                Every business is unique, with specific processes, challenges, and goals that off-the-shelf solutions often can't address. That's where our custom IT solutions come in.
              </p>
              <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed">
                We combine our deep technical expertise with a thorough understanding of your business to create technology solutions that fit your exact requirements—whether that means customizing existing services or building something entirely new.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary">
                  Start Custom Project
                </Button>
                <Button href="/services" variant="secondary">
                  Browse Standard Services
                </Button>
              </div>
            </div>
            <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-[#3A81F7] flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                  Ideal For Businesses That Need:
                </h3>
              </div>
              <div className="space-y-4">
                {needs.map((need, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-[#4A4A4A]">{need}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Types */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Types of Custom Solutions
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              From tailored service packages to completely bespoke development, we offer multiple approaches to custom solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionTypes.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8 border-2 border-[#D9D9D9]">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-3">
                    {solution.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[16px] text-[#4A4A4A]">{example}</span>
                      </div>
                    ))}
                  </div>
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
              How We Build Custom Solutions
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              A structured, collaborative approach to ensure your custom solution delivers maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="bg-[#FFFFFF] p-8 border-2 border-[#D9D9D9] text-center">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mx-auto mb-6">
                    <span className="text-[20px] font-semibold text-white">{step.step}</span>
                  </div>
                  <div className="w-12 h-12 bg-[#F8FAFC] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#3A81F7]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Have Unique Technology Needs?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and explore how custom IT solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Custom Solution Consultation
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
