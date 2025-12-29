'use client';

import { Factory, Building, Rocket, Users } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT Industries Page - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
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
      {/* Section / Hero */}
      <section className="bg-[#050816] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[48px] font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-[18px] text-[#D9D9D9]">
              Tailored IT solutions for the unique challenges of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* Section / WhoWeServe */}
      <section className="py-24 md:py-32 bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
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
                      {industry.name}
                    </h3>
                    <p className="text-[16px] text-[#D9D9D9]">
                      {industry.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-bold text-[#050816] mb-4">
                      Our Services:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-[#4A4A4A]">{service}</span>
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

      {/* Section / CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[32px] font-bold text-[#050816] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-[18px] text-[#4A4A4A] mb-8 max-w-[600px] mx-auto">
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
