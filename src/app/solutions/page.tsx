'use client';

import { Cpu, Shield, Globe, BarChart3, Sliders } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT Solutions Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

const solutions = [
  {
    title: 'Managed IT Solutions',
    description: 'Comprehensive IT management and support designed to keep your small business running smoothly 24/7.',
    icon: Cpu,
    outcomes: [
      'Proactive monitoring and maintenance',
      '24/7 help desk support',
      'Reduced downtime and IT costs',
      'Predictable monthly budgeting',
    ],
  },
  {
    title: 'Hardware & Software Integration',
    description: 'Seamlessly integrate new hardware and software into your existing infrastructure for optimal performance.',
    icon: Sliders,
    outcomes: [
      'Smooth integration with minimal disruption',
      'Improved system compatibility',
      'Enhanced productivity and efficiency',
      'Expert configuration and setup',
    ],
  },
  {
    title: 'Migration & Deployment',
    description: 'Expert migration services to move your systems, data, and applications with zero downtime.',
    icon: Globe,
    outcomes: [
      'Zero-downtime migrations',
      'Cloud and on-premise deployments',
      'Data integrity and security',
      'Complete testing and validation',
    ],
  },
  {
    title: 'Cybersecurity & Protection',
    description: 'Protect your business from evolving cyber threats with comprehensive security solutions.',
    icon: Shield,
    outcomes: [
      'Multi-layered security protection',
      'Regular security assessments',
      'Virus and malware prevention',
      'Compliance and risk management',
    ],
  },
  {
    title: 'Business Continuity Planning',
    description: 'Ensure your business stays operational with robust backup, recovery, and disaster recovery solutions.',
    icon: BarChart3,
    outcomes: [
      'Automated backup solutions',
      'Quick disaster recovery',
      'Business continuity planning',
      'Minimal data loss protection',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/optimized/hero-graphic.webp)' }}
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-[#050816]/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              IT Solutions for Small Business Success
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
              From managed IT to migrations, we provide the complete technology solutions your business needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-card overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="bg-[#050816] p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#3A81F7] rounded-card mb-6">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-heading-md text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-body text-[#D9D9D9]">
                      {solution.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-body font-bold text-[#050816] mb-4">
                      Key Outcomes:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {solution.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-body text-[#4A4A4A]">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help your business succeed.
            </p>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
