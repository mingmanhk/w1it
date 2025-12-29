'use client';

import { Server, BarChart3, Globe, Database, HelpCircle } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT Services Page - STRICT Design System Compliance
 * NO gradients, NO shadows, NO custom spacing
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16, Caption/14
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
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
    <div className="bg-white">
      {/* Section / Hero */}
      <section className="bg-[#050816] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[48px] font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-[18px] text-[#D9D9D9]">
              Enterprise-grade IT solutions designed for small business success.
            </p>
          </div>
        </div>
      </section>

      {/* Section / Services */}
      <section className="py-24 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
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
                      {category.title}
                    </h3>
                    <p className="text-[16px] text-[#D9D9D9]">
                      {category.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-bold text-[#050816] mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
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
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#050816] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] text-[#4A4A4A] mb-8 max-w-[600px] mx-auto">
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
