'use client';

import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import {
  FileText,
  BookOpen,
  Code,
  CheckCircle,
  GraduationCap,
  Globe,
} from 'lucide-react';

/**
 * W1IT Technical Writing Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const serviceIcons = [FileText, BookOpen, Code, CheckCircle, GraduationCap, Globe];
const benefitIcons = [Globe, FileText, CheckCircle, BookOpen];

export default function TechnicalWriting() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.technicalWriting;
  const services = d.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  const benefits = d.benefits.items.map((b, i) => ({ ...b, icon: benefitIcons[i] }));

  return (
    <div className="bg-surface-0">
        <Hero
            title={d.hero.title}
            subtitle={d.hero.subtitle}
            imageSrc="/images/brand/hero-graphic.webp"
            imageAlt="Bilingual Technical Writing Services"
            ctaButton={{
                href: '/contact',
                text: d.hero.cta,
            }}
        />

      {/* Why Bilingual Documentation Matters */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-fg mb-6">
            {d.whyMatters.heading}
          </h2>
          <div className="bg-surface-0 p-8 border-2 border-[#3A81F7]">
            <p className="text-[16px] text-fg-muted leading-relaxed mb-6">
              {d.whyMatters.paragraph1}
            </p>
            <p className="text-[16px] text-fg-muted leading-relaxed">
              {d.whyMatters.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.services.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.services.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-surface-1 p-8">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.benefits.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-surface-0 p-8 text-center">
                  <div className="w-16 h-16 bg-[#00A878] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-fg mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[16px] text-fg-muted leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.useCases.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            {d.useCases.items.map((useCase, index) => (
              <div key={index} className="bg-surface-1 p-8">
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {useCase.title}
                </h3>
                <p className="text-[16px] text-fg-muted leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface-1">
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
