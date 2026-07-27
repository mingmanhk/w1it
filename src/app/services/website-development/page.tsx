'use client';

import Button from '@/components/Button';
import { Code, Smartphone, Zap, Globe, Search, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Website Development Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const featureIcons = [Code, Smartphone, Zap, Search, Globe, TrendingUp];
const technologies = ['Next.js 15+', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS'];

export default function WebsiteDevelopmentPage() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.websiteDevelopment;
  const features = d.features.items.map((f, i) => ({ ...f, icon: featureIcons[i] }));

  return (
    <div className="bg-surface-0">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-black mb-6">
              {d.hero.title}
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              {d.hero.subtitle}
            </p>
            <Button href="/contact" variant="primary">
              {d.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.features.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.features.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-surface-1 p-8">
                  <Icon className="w-16 h-16 text-[#3A81F7] mb-6" strokeWidth={1.5} />
                  <h3 className="text-[20px] font-semibold text-fg mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[16px] text-fg-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.technologies.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.technologies.subheading}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-surface-0 px-6 py-3 border-2 border-[#3A81F7] text-fg text-[16px] font-bold"
              >
                {tech}
              </div>
            ))}
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
            <Button href="/contact" variant="primary">
              {d.cta.cta}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
