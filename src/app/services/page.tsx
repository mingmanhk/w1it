'use client';

import { Server, BarChart3, Globe, Database, HelpCircle } from 'lucide-react';
import Button from '@/components/Button';
import Image from 'next/image';

/**
 * W1IT Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular, Caption/14 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 * Hero sections: 96px top/bottom, Standard sections: 64px top/bottom
 */

const serviceCategories = [
  {
    title: 'Managed IT Services',
    description: 'Proactive IT support that keeps your systems running smoothly and your team productive.',
    icon: Server,
    features: [
      '24/7 monitoring and maintenance',
      'Help desk and end-user support',
      'Network and server management',
      'Security and patch management',
      'Backup and disaster recovery',
    ],
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Expert guidance to align technology with business goals and drive measurable growth.',
    icon: BarChart3,
    features: [
      'IT roadmap and strategy development',
      'Cloud strategy and migration planning',
      'Cybersecurity assessments',
      'IT budget optimization',
      'Digital transformation consulting',
    ],
  },
  {
    title: 'Website Development & Optimization',
    description: 'High-performance websites that deliver results and exceptional user experiences.',
    icon: Globe,
    features: [
      'Custom website design and development',
      'E-commerce solutions',
      'Performance optimization',
      'Search engine optimization (SEO)',
      'Analytics and conversion tracking',
    ],
  },
  {
    title: 'Data & Analytics',
    description: 'Turn your data into actionable insights for smarter business decisions.',
    icon: Database,
    features: [
      'Business intelligence dashboards',
      'Data warehousing and ETL',
      'Predictive analytics',
      'Data governance',
      'Reporting and visualization',
    ],
  },
  {
    title: 'On-Demand IT Support',
    description: 'Flexible support when you need it—no long-term commitments required.',
    icon: HelpCircle,
    features: [
      'Pay-as-you-go hourly support',
      'Remote and on-site assistance',
      'Troubleshooting and resolution',
      'Software installation',
      'Hardware repair and upgrades',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#FFFFFF]">
      {/* Section / Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="W1IT Services Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-[17px] text-white/90">
              Enterprise-grade IT solutions designed for small business success.
            </p>
          </div>
        </div>
      </section>

      {/* Section / Services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FFFFFF]"
                >
                  {/* Card Header */}
                  <div className="bg-[#F1F5F9] p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#3A81F7] mb-6">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                      {category.title}
                    </h3>
                    <p className="text-[16px] text-[#4A4A4A]">
                      {category.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-semibold text-[#050816] mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-[#4A4A4A]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary" className="w-full">
                      Request a Quote
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section / CTA */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[17px] text-[#4A4A4A] mb-8 max-w-[600px] mx-auto">
              We help small businesses succeed with reliable, enterprise-grade IT solutions.
            </p>
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
