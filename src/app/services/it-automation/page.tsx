'use client';

import { RefreshCw, Zap, CheckCircle2, TrendingUp, Shield } from 'lucide-react';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT IT Automation Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const serviceIcons = [RefreshCw, Zap, TrendingUp, Shield];

export default function ITAutomationPage() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.itAutomation;
  const automationServices = d.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));

  return (
    <div className="bg-surface-0">
        <Hero
            title={d.hero.title}
            subtitle={d.hero.subtitle}
            imageAlt="IT Automation Services"
            ctaButton={{ href: "/contact", text: d.hero.cta }}
        />

      {/* Introduction Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-6">
              {d.intro.heading}
            </h2>
            <p className="text-[16px] text-fg-muted leading-relaxed mb-6">
              {d.intro.paragraph1}
            </p>
            <p className="text-[16px] text-fg-muted leading-relaxed">
              {d.intro.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Automation Services Grid */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.services.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.services.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-0 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="bg-surface-2 p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#3A81F7] mb-6">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[20px] font-semibold text-fg mb-4">
                      {service.title}
                    </h3>
                    <p className="text-[16px] text-fg-muted">
                      {service.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-bold text-fg mb-4">
                      {d.services.benefitsLabel}
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-fg-muted">{benefit}</span>
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
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-6">
              {d.benefits.heading}
            </h2>
            <p className="text-[16px] text-fg-muted max-w-3xl mx-auto">
              {d.benefits.subheading}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {d.benefits.items.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 p-6 bg-surface-1">
                  <CheckCircle2 className="w-6 h-6 text-[#00A878] mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <p className="text-[16px] text-fg-muted">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[28px] font-bold text-fg mb-8 text-center">
              {d.process.heading}
            </h2>

            <div className="space-y-8">
              {d.process.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#3A81F7] flex items-center justify-center">
                    <span className="text-[20px] font-semibold text-white font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-[20px] font-semibold text-fg mb-2">{step.title}</h3>
                    <p className="text-[16px] text-fg-muted">
                      {step.description}
                    </p>
                  </div>
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
