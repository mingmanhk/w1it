'use client';

import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Wifi,
  Settings,
  Lock,
  Building2,
  Search,
  Activity,
} from 'lucide-react';

const serviceIcons = [Wifi, Settings, Lock, Building2, Search, Activity];
const cities = ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma'];

export default function NetworkSetupContent() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.networkSetup;
  const services = d.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));

  return (
    <div className="bg-surface-0">
      <Hero
          title={d.hero.title}
          subtitle={d.hero.subtitle}
          imageSrc="/images/brand/hero-graphic.webp"
          imageAlt="Network Setup & Configuration"
          ctaButton={{
              href: '/contact',
              text: d.hero.cta,
          }}
      />

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
                <div key={index} className="bg-surface-0">
                  <div className="bg-surface-2 p-8">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-fg mb-12">
            {d.commonIssues.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {d.commonIssues.items.map((issue, index) => (
              <div key={index} className="bg-surface-0 p-8">
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {issue.title}
                </h3>
                <p className="text-[16px] text-fg-muted leading-relaxed">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-surface-2 p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[28px] font-bold text-fg mb-4">
                {d.serviceArea.heading}
              </h2>
              <p className="text-[17px] text-fg-muted mb-6">
                {d.serviceArea.intro}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {cities.map((city) => (
                  <div key={city} className="bg-surface-0 px-4 py-3 border-2 border-line">
                    <span className="text-[16px] font-semibold text-fg">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-[16px] text-fg-muted mb-6">
                {d.serviceArea.remoteNote}
              </p>
              <Button href="/contact" variant="primary">
                {d.serviceArea.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-fg text-center mb-12">
            {d.whyChoose.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {d.whyChoose.items.map((item, index) => (
              <div key={index} className="bg-surface-0 p-8 text-center">
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {item.title}
                </h3>
                <p className="text-[16px] text-fg-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Architecture Optimization */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.architectureOptimization.heading}
            </h2>
            <p className="text-[16px] text-fg-muted">
              {d.architectureOptimization.body}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-0 p-8 rounded-card shadow-soft">
              <h3 className="text-[20px] font-semibold text-fg mb-3">{d.architectureOptimization.costAudit.title}</h3>
              <p className="text-[16px] text-fg-muted">
                {d.architectureOptimization.costAudit.body}
              </p>
            </div>
            <div className="bg-surface-0 p-8 rounded-card shadow-soft">
              <h3 className="text-[20px] font-semibold text-fg mb-3">{d.architectureOptimization.rightSized.title}</h3>
              <p className="text-[16px] text-fg-muted">
                {d.architectureOptimization.rightSized.body}
              </p>
            </div>
            <div className="bg-surface-0 p-8 rounded-card shadow-soft">
              <h3 className="text-[20px] font-semibold text-fg mb-3">{d.architectureOptimization.migrationPlan.title}</h3>
              <p className="text-[16px] text-fg-muted">
                {d.architectureOptimization.migrationPlan.body}
              </p>
            </div>
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
