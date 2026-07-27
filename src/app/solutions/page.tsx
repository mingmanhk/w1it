'use client';

import { Cpu, Shield, Globe, BarChart3, Sliders } from 'lucide-react';
import Button from '@/components/Button';
import Image from 'next/image';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Solutions Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const icons = [Cpu, Sliders, Globe, Shield, BarChart3];

export default function SolutionsPage() {
  const { dict } = useLanguage();
  const solutions = dict.solutionsHub.items.map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <div className="bg-surface-0">
      {/* Section / Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand/hero-graphic.webp"
            alt="W1IT Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-black mb-6">
              {dict.solutionsHub.hero.title}
            </h1>
            <p className="text-[17px] text-black/90">
              {dict.solutionsHub.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Section / Services */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
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
                      {solution.title}
                    </h3>
                    <p className="text-[16px] text-fg-muted">
                      {solution.description}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <h4 className="text-[16px] font-semibold text-fg mb-4">
                      {dict.solutionsHub.keyOutcomesLabel}
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {solution.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="inline-block w-2 h-2 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[16px] text-fg-muted">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary" className="w-full">
                      {dict.solutionsHub.learnMore}
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
              {dict.solutionsHub.cta.heading}
            </h2>
            <p className="text-[17px] text-fg-muted mb-8 max-w-[600px] mx-auto">
              {dict.solutionsHub.cta.body}
            </p>
            <Button href="/contact" variant="primary">
              {dict.solutionsHub.cta.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
