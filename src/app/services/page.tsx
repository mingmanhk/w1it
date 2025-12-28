'use client';

import { Server, BarChart3, Globe, Database, HelpCircle } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT Services Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

const serviceCategories = [
  {
    title: 'Managed IT Services',
    description: 'Proactive, comprehensive IT support to ensure your systems are always running at peak performance.',
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
    description: 'Expert guidance to align your technology with your business goals and drive growth.',
    icon: BarChart3,
    features: [
      'IT roadmap and strategy development',
      'Cloud strategy and migration planning',
      'Cybersecurity assessments and planning',
      'IT budget and cost optimization',
      'Digital transformation consulting',
    ],
  },
  {
    title: 'Website Development & Optimization',
    description: 'High-performance websites designed to deliver exceptional user experiences and drive conversions.',
    icon: Globe,
    features: [
      'Custom website design and development',
      'E-commerce solutions',
      'Performance and speed optimization',
      'Search engine optimization (SEO)',
      'Analytics and conversion rate optimization',
    ],
  },
  {
    title: 'Data & Analytics',
    description: 'Unlock the power of your data to make smarter, data-driven decisions.',
    icon: Database,
    features: [
      'Business intelligence (BI) dashboards',
      'Data warehousing and ETL',
      'Predictive analytics and machine learning',
      'Data governance and quality',
      'Reporting and visualization',
    ],
  },
  {
    title: 'On-Demand IT Support',
    description: 'Flexible, as-needed IT support to resolve immediate issues and keep your business moving.',
    icon: HelpCircle,
    features: [
      'Pay-as-you-go hourly support',
      'Remote and on-site assistance',
      'Troubleshooting and issue resolution',
      'Software installation and configuration',
      'Hardware repair and upgrades',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/optimized/hero-graphic.png)' }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#050816]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              Our Services
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
              Comprehensive IT solutions to meet the needs of modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
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
                      {category.title}
                    </h3>
                    <p className="text-body text-[#D9D9D9]">
                      {category.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-body font-bold text-[#050816] mb-4">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-body text-[#4A4A4A]">{feature}</span>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-body text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help your business thrive.
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
