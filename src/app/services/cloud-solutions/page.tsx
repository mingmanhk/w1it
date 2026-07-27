'use client';

import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  TrendingUp,
} from 'lucide-react';

/**
 * W1IT Cloud Solutions Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const serviceIcons = [Cloud, Server, Database, Shield, Zap, Globe];
const benefitIcons = [TrendingUp, Zap, Shield, Cloud];
const platforms = ['AWS', 'Azure', 'Google Cloud', 'IBM Cloud'];

export default function CloudSolutionsPage() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.cloudSolutions;
  const services = d.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  const benefits = d.benefits.items.map((b, i) => ({ ...b, icon: benefitIcons[i] }));

  return (
    <div className="bg-surface-0">
        <Hero
            title={d.hero.title}
            subtitle={d.hero.subtitle}
            imageSrc="/images/brand/hero-graphic.webp"
            imageAlt="Cloud Solutions"
            ctaButton={{
                href: '/contact',
                text: d.hero.cta,
            }}
        />

      {/* Platforms Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-[20px] font-semibold text-fg mb-6">
              {d.platformsHeading}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="px-8 py-4 bg-[#3A81F7] text-white text-[16px] font-bold"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-6">
              {d.benefits.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-fg mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[16px] text-fg-muted">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
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
