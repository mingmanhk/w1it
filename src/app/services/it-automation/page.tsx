'use client';

import { RefreshCw, Zap, Clock, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import Button from '@/components/Button';

/**
 * W1IT IT Automation Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

const automationServices = [
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline your business processes for maximum efficiency.',
    icon: RefreshCw,
    benefits: [
      'Automated data entry and processing',
      'Document generation and management',
      'Email and communication automation',
      'Task scheduling and reminders',
    ],
  },
  {
    title: 'IT Infrastructure Automation',
    description: 'Automated monitoring, maintenance, and updates to keep your systems running smoothly.',
    icon: Zap,
    benefits: [
      'Automated patch management',
      'System monitoring and alerts',
      'Backup automation',
      'Network configuration management',
    ],
  },
  {
    title: 'Process Optimization',
    description: 'Identify bottlenecks and optimize workflows with intelligent automation solutions.',
    icon: TrendingUp,
    benefits: [
      'Business process analysis',
      'Workflow optimization',
      'Performance monitoring',
      'Continuous improvement automation',
    ],
  },
  {
    title: 'Security Automation',
    description: 'Automated security monitoring and response to protect your business 24/7.',
    icon: Shield,
    benefits: [
      'Automated threat detection',
      'Security patch deployment',
      'Compliance monitoring',
      'Incident response automation',
    ],
  },
];

const automationBenefits = [
  'Reduce manual overhead and human error',
  'Increase productivity and efficiency',
  'Save time and reduce operational costs',
  'Scale operations without adding headcount',
  'Improve accuracy and consistency',
  'Free your team to focus on strategic work',
];

export default function ITAutomationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              IT Automation Services
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
              Streamline your operations with automated workflows and intelligent systems that work for you 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Automation That Works for You
            </h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-6">
              In today's fast-paced business environment, manual processes slow you down and increase the risk of errors. Our IT automation solutions help small businesses reduce manual overhead, increase efficiency, and scale operations without adding headcount.
            </p>
            <p className="text-body text-[#4A4A4A] leading-relaxed">
              From workflow automation to infrastructure management, we implement predictable, repeatable automation that lets you focus on growing your business instead of managing routine tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Services Grid */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Our Automation Services
            </h2>
            <p className="text-body text-[#4A4A4A] max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationServices.map((service, index) => {
              const Icon = service.icon;
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
                      {service.title}
                    </h3>
                    <p className="text-body text-[#D9D9D9]">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-body font-bold text-[#050816] mb-4">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-body text-[#4A4A4A]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Why Automate with W1IT?
            </h2>
            <p className="text-body text-[#4A4A4A] max-w-3xl mx-auto">
              The benefits of intelligent automation for your small business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {automationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-[#F5F5F5] rounded-card">
                  <CheckCircle2 className="w-6 h-6 text-[#00A878] mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-body text-[#4A4A4A]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-[#050816] mb-8 text-center">
              Our Automation Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] rounded-card flex items-center justify-center">
                  <span className="text-heading-md text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-heading-md text-[#050816] mb-2">Assessment</h3>
                  <p className="text-body text-[#4A4A4A]">
                    We analyze your current workflows to identify automation opportunities and bottlenecks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] rounded-card flex items-center justify-center">
                  <span className="text-heading-md text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-heading-md text-[#050816] mb-2">Strategy</h3>
                  <p className="text-body text-[#4A4A4A]">
                    We design a custom automation strategy aligned with your business goals and priorities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] rounded-card flex items-center justify-center">
                  <span className="text-heading-md text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-heading-md text-[#050816] mb-2">Implementation</h3>
                  <p className="text-body text-[#4A4A4A]">
                    We build and deploy automation solutions with minimal disruption to your operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] rounded-card flex items-center justify-center">
                  <span className="text-heading-md text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-heading-md text-[#050816] mb-2">Optimization</h3>
                  <p className="text-body text-[#4A4A4A]">
                    We monitor, refine, and continuously improve your automation for maximum efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center">
            <h2 className="text-heading-lg text-[#050816] mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-body text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let's discuss how automation can transform your operations and free your team to focus on what matters most.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
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
