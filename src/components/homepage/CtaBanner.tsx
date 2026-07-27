'use client';

import Button from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT CTA Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function CtaBanner() {
  const { dict } = useLanguage();

  return (
    <section className="py-16 bg-surface-0">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          {/* Title - Heading / 28 Bold */}
          <h2 className="text-[28px] font-bold text-fg mb-6">
            {dict.home.ctaBanner.heading}
          </h2>

          {/* Subtitle - Heading / 20 Semibold */}
          <h3 className="text-[20px] font-semibold text-fg mb-6">
            {dict.home.ctaBanner.subheading}
          </h3>

          {/* Body - Body / 17 Regular */}
          <p className="text-[17px] text-fg-muted mb-8 max-w-2xl mx-auto">
            {dict.home.ctaBanner.body}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button href="/contact" variant="primary">
              {dict.home.ctaBanner.ctaPrimary}
            </Button>
            <Button href="/services" variant="secondary">
              {dict.home.ctaBanner.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
