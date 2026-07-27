'use client';

import { Cpu, RefreshCw, Wrench } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Feature Highlights Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const icons = [Cpu, RefreshCw, Wrench];

export default function FeatureHighlights() {
  const { dict } = useLanguage();
  const featureHighlights = dict.home.featureHighlights.items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <section className="py-16 bg-surface-1">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-fg mb-4">{dict.home.featureHighlights.heading}</h2>
          <p className="text-[16px] text-fg-muted max-w-3xl mx-auto">
            {dict.home.featureHighlights.subheading}
          </p>
        </div>

        {/* Three Columns - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureHighlights.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon 48x48 */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Heading 20 semibold */}
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {feature.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-[16px] text-fg-muted max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
