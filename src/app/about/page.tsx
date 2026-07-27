'use client';

import Image from 'next/image';
import { Target, Shield, Users, Rocket } from 'lucide-react';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT About Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const valueIcons = [Shield, Target, Rocket, Users];

export default function AboutPage() {
  const { dict } = useLanguage();
  const values = dict.about.values.items.map((v, i) => ({ ...v, icon: valueIcons[i] }));

  return (
    <div className="bg-surface-0">
      <Hero
        title={dict.about.hero.title}
        subtitle={dict.about.hero.subtitle}
        imageAlt="About W1IT Solutions"
      />

      {/* Section / Foundation (Values) */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {dict.about.values.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-[700px] mx-auto">
              {dict.about.values.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-8 bg-surface-0">
                  <div className="flex justify-center items-center w-16 h-16 bg-[#3A81F7] mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-fg mb-4">{value.name}</h3>
                  <p className="text-[16px] text-fg-muted">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section / Story */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[28px] font-bold text-fg mb-6">{dict.about.mission.heading}</h2>
              <p className="text-[17px] text-fg-muted mb-6 leading-relaxed">
                {dict.about.mission.paragraph1}
              </p>
              <p className="text-[16px] text-fg-muted leading-relaxed">
                {dict.about.mission.paragraph2}
              </p>
            </div>
            <div>
              <Image
                src="/images/brand/about-mission.svg"
                alt="W1IT Mission"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section / WhyChooseUs */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">{dict.about.whyChoose.heading}</h2>
          </div>
          <div className="max-w-[900px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dict.about.whyChoose.items.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-6 bg-surface-0">
                  <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                  <p className="text-[16px] text-fg-muted">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section / CTA */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-fg mb-6">
              {dict.about.cta.heading}
            </h2>
            <p className="text-[17px] text-fg-muted mb-8 max-w-[600px] mx-auto">
              {dict.about.cta.body}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                {dict.about.cta.ctaPrimary}
              </Button>
              <Button href="/services" variant="secondary">
                {dict.about.cta.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
