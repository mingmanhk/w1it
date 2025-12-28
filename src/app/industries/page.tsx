'use client';

import { Factory, Building, Rocket, Users } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT Industries Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

const industries = [
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Efficient and scalable IT solutions for the manufacturing sector.',
    services: [
      'Factory automation and IoT solutions',
      'Supply chain management systems',
      'Enterprise Resource Planning (ERP) support',
      'Process optimization and automation',
    ],
  },
  {
    name: 'Small Business',
    icon: Building,
    description: 'Affordable and effective IT solutions for small businesses.',
    services: [
      'Managed IT services',
      'Cloud solutions (Office 365, Google Workspace)',
      'Data backup and recovery',
      'Website and email hosting',
    ],
  },
  {
    name: 'Startups',
    icon: Rocket,
    description: 'Scalable and agile IT solutions to fuel startup growth.',
    services: [
      'Cloud infrastructure setup (AWS, Azure, GCP)',
      'DevOps and CI/CD automation',
      'Scalable and secure application architecture',
      'Cost-effective IT strategy and consulting',
    ],
  },
  {
    name: 'Professional Services',
    icon: Users,
    description: 'Reliable and efficient IT for professional service firms.',
    services: [
      'Client relationship management (CRM) systems',
      'Secure document management',
      'Remote work and collaboration tools',
      'Time and billing software support',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/optimized/hero-graphic.webp)' }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#050816]/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
              Tailored IT solutions for the unique challenges of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
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
                      {industry.name}
                    </h3>
                    <p className="text-body text-[#D9D9D9]">
                      {industry.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-body font-bold text-[#050816] mb-4">
                      Our Services:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-body text-[#4A4A4A]">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary" className="w-full">
                      Inquire Now
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
              Ready to Get Started?
            </h2>
            <p className="text-body text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let's discuss how we can support your industry's specific needs.
            </p>
            <Button href="/contact" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
