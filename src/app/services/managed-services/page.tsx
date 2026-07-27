'use client';

import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Cpu,
  Headphones,
  Shield,
  Database,
  Globe,
  Users,
} from 'lucide-react';

/**
 * W1IT Managed Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const icons = [Cpu, Headphones, Shield, Database, Globe, Users];

export default function ManagedServicesPage() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.managedServices;
  const services = d.services.items.map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <div className="bg-surface-0">
      <Hero
        title={d.hero.title}
        subtitle={d.hero.subtitle}
        ctaButton={{
          href: '/contact',
          text: d.hero.cta,
        }}
      />

      {/* Overview Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[28px] font-bold text-fg mb-6">
                {d.overview.heading}
              </h2>
              <p className="text-[16px] text-fg-muted mb-6 leading-relaxed">
                {d.overview.paragraph1}
              </p>
              <p className="text-[16px] text-fg-muted mb-8 leading-relaxed">
                {d.overview.paragraph2}
              </p>
              <Button href="/contact" variant="primary">
                {d.overview.cta}
              </Button>
            </div>
            <div className="bg-surface-0 p-8 border-2 border-[#3A81F7]">
              <h3 className="text-[20px] font-semibold text-fg mb-6">{d.overview.benefitsHeading}</h3>
              <div className="space-y-4">
                {d.overview.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-fg-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.services.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.services.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-surface-1 p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-fg mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-fg-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.tiers.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.tiers.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.tiers.items.map((tier, index) => (
              <div key={index} className="bg-surface-0 border-2 border-line">
                <div className="bg-surface-2 p-8 text-center">
                  <h3 className="text-[20px] font-semibold text-fg mb-2">{tier.name}</h3>
                  <p className="text-[16px] text-fg-muted">{tier.description}</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[16px] text-fg-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button href="/contact" variant="primary" className="w-full">
                    {d.tiers.getStarted}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-fg mb-6">
              {d.cta.heading}
            </h2>
            <p className="text-[16px] text-fg-muted mb-8 max-w-2xl mx-auto">
              {d.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                {d.cta.ctaPrimary}
              </Button>
              <Button href="/services" variant="secondary">
                {d.cta.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
