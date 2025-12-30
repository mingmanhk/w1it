'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import Hero from '@/components/Hero';
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  TrendingUp,
} from 'lucide-react';

/**
 * W1IT Cloud Solutions Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of applications and data to cloud platforms.',
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management.',
    },
    {
      icon: Database,
      title: 'Cloud Database Solutions',
      description: 'Managed database services and data platform optimization.',
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security architecture and compliance management.',
    },
    {
      icon: Zap,
      title: 'Cost Optimization',
      description: 'Monitoring and optimization of cloud spending and resources.',
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Strategy',
      description: 'Strategic planning and implementation across multiple cloud providers.',
    },
  ];

  const platforms = [
    { name: 'AWS' },
    { name: 'Azure' },
    { name: 'Google Cloud' },
    { name: 'IBM Cloud' },
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Easily scale resources up or down based on demand',
      icon: TrendingUp,
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing models',
      icon: Zap,
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security with continuous monitoring',
      icon: Shield,
    },
    {
      title: 'Innovation',
      description: 'Access to latest technologies and services',
      icon: Cloud,
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
        <Hero
            title="Enterprise Cloud Excellence"
            subtitle="Transform your infrastructure with scalable, secure, and cost-effective cloud solutions."
            imageSrc="/images/optimized/hero-graphic.webp"
            imageAlt="Cloud Solutions"
            ctaButton={{
                href: '/contact',
                text: 'Start Cloud Journey',
            }}
        />

      {/* Platforms Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-[20px] font-semibold text-[#050816] mb-6">
              Cloud Platforms We Support
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="px-8 py-4 bg-[#3A81F7] text-white text-[16px] font-bold"
                >
                  {platform.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Comprehensive Cloud Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              End-to-end cloud solutions designed to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
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
              Why Move to the Cloud?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready for Cloud Transformation?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Partner with experienced cloud specialists to build scalable, secure, and innovative cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Cloud Assessment
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
