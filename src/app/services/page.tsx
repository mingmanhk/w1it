'use client';

import { Server, BarChart3, Globe, Database, HelpCircle } from 'lucide-react';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular, Caption/14 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 * Hero sections: 96px top/bottom, Standard sections: 64px top/bottom
 */

const icons = [Server, BarChart3, Globe, Database, HelpCircle];

export default function ServicesPage() {
  const { dict } = useLanguage();
  const serviceCategories = dict.servicesHub.categories.map((c, i) => ({ ...c, icon: icons[i] }));

  return (
    <div className="bg-surface-0">
        <Hero
            title={dict.servicesHub.hero.title}
            subtitle={dict.servicesHub.hero.subtitle}
        />

      {/* Section / Services */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-surface-0"
                >
                  {/* Card Header */}
                  <div className="bg-surface-2 p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#3A81F7] mb-6">
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[20px] font-semibold text-fg mb-4">
                      {category.title}
                    </h3>
                    <p className="text-[16px] text-fg-muted">
                      {category.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-semibold text-fg mb-4">
                      {dict.servicesHub.keyFeaturesLabel}
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-fg-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary" className="w-full">
                      {dict.servicesHub.requestQuote}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section / CTA */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-fg mb-6">
              {dict.servicesHub.cta.heading}
            </h2>
            <p className="text-[17px] text-fg-muted mb-8 max-w-[600px] mx-auto">
              {dict.servicesHub.cta.body}
            </p>
            <Button href="/contact" variant="primary">
              {dict.servicesHub.cta.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
