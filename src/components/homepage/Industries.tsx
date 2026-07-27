'use client';

import Button from '@/components/Button';
import { Factory, Building, Rocket, Users } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Industries Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const icons = [Factory, Building, Rocket, Users];

export default function Industries() {
  const { dict } = useLanguage();
  const industries = dict.home.industriesTeaser.items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <section className="py-16 bg-surface-0">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-fg mb-4">
            {dict.home.industriesTeaser.heading}
          </h2>
          <p className="text-[16px] text-fg-muted max-w-3xl mx-auto">
            {dict.home.industriesTeaser.subheading}
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-surface-1 p-8 text-center"
              >
                {/* Centered Icon 48x48 */}
                <div className="flex justify-center items-center mb-4">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-semibold text-fg">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button href="/industries" variant="secondary">
            {dict.home.industriesTeaser.cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
