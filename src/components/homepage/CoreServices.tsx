'use client';

import { Server, Shield, Cloud, Network, DollarSign, SearchCheck } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Services Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const icons = [DollarSign, Network, SearchCheck, Server, Cloud, Shield];

export default function CoreServices() {
  const { dict } = useLanguage();
  const coreServices = dict.home.services.items.map((item, i) => ({ ...item, icon: icons[i] }));

  return (
    <section className="py-16 bg-surface-0">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-fg mb-4">{dict.home.services.heading}</h2>
          <p className="text-[16px] text-fg-muted">{dict.home.services.subheading}</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-surface-1 p-8"
              >
                {/* Icon 48x48 */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>

                {/* Heading 20 semibold */}
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {service.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-[16px] text-fg-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
