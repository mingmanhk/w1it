'use client';

import { Cpu, Shield, Globe, BarChart3, Sliders } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT Solutions Page - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
 */

const solutions = [
  {
    title: 'Managed IT Solutions',
    description: 'Proactive IT management keeps your business running smoothly 24/7.',
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
    description: 'Seamless integration for new hardware and software without disruption.',
    icon: Sliders,
    outcomes: [
      'Minimal disruption to operations',
      'Improved system compatibility',
      'Enhanced productivity',
      'Expert configuration',
    ],
  },
  {
    title: 'Migration & Deployment',
    description: 'Expert migration services with zero downtime and complete data integrity.',
    icon: Globe,
    outcomes: [
      'Zero-downtime migrations',
      'Cloud and on-premise deployments',
      'Data integrity guaranteed',
      'Complete testing and validation',
    ],
  },
  {
    title: 'Cybersecurity & Protection',
    description: 'Protect your business from cyber threats with comprehensive security.',
    icon: Shield,
    outcomes: [
      'Multi-layered protection',
      'Regular security assessments',
      'Virus and malware prevention',
      'Compliance and risk management',
    ],
  },
  {
    title: 'Business Continuity Planning',
    description: 'Robust backup and disaster recovery to keep your business operational.',
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
      {/* Section / Hero */}
      <section className="bg-[#050816] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[48px] font-bold text-white mb-6">
              IT Solutions for Small Business Success
            </h1>
            <p className="text-[18px] text-[#D9D9D9]">
              Complete technology solutions designed to help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Section / Services */}
      <section className="py-24 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-white"
                >
                  {/* Card Header */}
                  <div className="bg-[#050816] p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#3A81F7] mb-6">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[20px] font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-[16px] text-[#D9D9D9]">
                      {solution.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-bold text-[#050816] mb-4">
                      Key Outcomes:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {solution.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-[#4A4A4A]">{outcome}</span>
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

      {/* Section / CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#050816] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] text-[#4A4A4A] mb-8 max-w-[600px] mx-auto">
              We help small businesses succeed with reliable IT solutions.
            </p>
            <Button href="/contact" variant="primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
