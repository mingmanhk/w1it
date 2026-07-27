'use client';

import Button from '@/components/Button';
import {
  Monitor,
  Settings,
  Zap,
  Lock,
  Mail,
  Lightbulb,
} from 'lucide-react';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';

const serviceIcons = [Monitor, Settings, Zap, Lock, Mail, Lightbulb];

export default function RemoteSupportContent() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.remoteSupport;
  const services = d.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));

  return (
    <div className="bg-surface-0">
      <Hero
          title={d.hero.title}
          subtitle={d.hero.subtitle}
          imageAlt="Remote IT Support"
          ctaButton={{ href: "/contact", text: d.hero.cta }}
      />

      {/* How It Works Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-fg text-center mb-12">
            {d.howItWorks.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {d.howItWorks.steps.map((item, index) => (
              <div key={index} className="bg-surface-1 p-8 text-center">
                <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6 mx-auto">
                  <span className="text-[24px] font-bold text-white">{item.step}</span>
                </div>
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

      {/* Services Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-fg mb-12">
            {d.services.heading}
          </h2>

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

      {/* Benefits Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-fg text-center mb-12">
            {d.benefits.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {d.benefits.items.map((benefit, index) => (
              <div key={index} className="bg-surface-1 p-8">
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[16px] text-fg-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-surface-2 p-8">
            <h3 className="text-[20px] font-semibold text-fg mb-4">
              {d.benefits.perfectForRemoteWorkers.title}
            </h3>
            <p className="text-[16px] text-fg-muted leading-relaxed">
              {d.benefits.perfectForRemoteWorkers.body}
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-surface-0 p-8 border-2 border-[#3A81F7]">
            <h2 className="text-[28px] font-bold text-fg mb-4 text-center">
              {d.security.title}
            </h2>
            <p className="text-[16px] text-fg-muted mb-6 leading-relaxed">
              {d.security.body}
            </p>
            <div className="space-y-4">
              {d.security.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-[16px] text-fg-muted">{feature}</span>
                </div>
              ))}
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
