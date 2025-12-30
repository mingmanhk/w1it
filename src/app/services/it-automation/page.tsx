'use client';

import { RefreshCw, Zap, Clock, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import Button from '@/components/Button';
import Hero from '@/components/Hero';

/**
 * W1IT IT Automation Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
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
    <div className="bg-[#FFFFFF]">
        <Hero
            title="IT Automation Services"
            subtitle="Streamline your operations with automated workflows and intelligent systems that work for you 24/7."
            imageAlt="IT Automation Services"
            ctaButton={{ href: "/contact", text: "Get Started" }}
        />

      {/* Introduction Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Automation That Works for You
            </h2>
            <p className="text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              In today's fast-paced business environment, manual processes slow you down and increase the risk of errors. Our IT automation solutions help small businesses reduce manual overhead, increase efficiency, and scale operations without adding headcount.
            </p>
            <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
              From workflow automation to infrastructure management, we implement predictable, repeatable automation that lets you focus on growing your business instead of managing routine tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Services Grid */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Our Automation Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Comprehensive automation solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-[#FFFFFF] overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="bg-[#F1F5F9] p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#3A81F7] mb-6">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[16px] text-[#4A4A4A]">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-bold text-[#050816] mb-4">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-[#4A4A4A]">{benefit}</span>
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
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Why Automate with W1IT?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] max-w-3xl mx-auto">
              The benefits of intelligent automation for your small business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {automationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-[#F8FAFC]">
                  <CheckCircle2 className="w-6 h-6 text-[#00A878] mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[16px] text-[#4A4A4A]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold text-[#050816] mb-8 text-center">
              Our Automation Process
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                  <span className="text-[20px] font-semibold text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-2">Assessment</h3>
                  <p className="text-[16px] text-[#4A4A4A]">
                    We analyze your current workflows to identify automation opportunities and bottlenecks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                  <span className="text-[20px] font-semibold text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-2">Strategy</h3>
                  <p className="text-[16px] text-[#4A4A4A]">
                    We design a custom automation strategy aligned with your business goals and priorities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                  <span className="text-[20px] font-semibold text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-2">Implementation</h3>
                  <p className="text-[16px] text-[#4A4A4A]">
                    We build and deploy automation solutions with minimal disruption to your operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                  <span className="text-[20px] font-semibold text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-2">Optimization</h3>
                  <p className="text-[16px] text-[#4A4A4A]">
                    We monitor, refine, and continuously improve your automation for maximum efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let's discuss how automation can transform your operations and free your team to focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
