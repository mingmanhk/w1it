'use client';

import Button from '@/components/Button';
import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  Users,
  Globe,
  Database,
} from 'lucide-react';

/**
 * W1IT Security Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const serviceIcons = [Shield, Lock, Eye, AlertTriangle, Database, Globe];
const threatIcons = [Lock, Users, AlertTriangle, Eye];

export default function SecurityPage() {
  const { dict } = useLanguage();
  const d = dict.servicesDetail.security;
  const services = d.services.items.map((s, i) => ({ ...s, icon: serviceIcons[i] }));
  const threats = d.threats.items.map((t, i) => ({ ...t, icon: threatIcons[i] }));

  return (
    <div className="bg-surface-0">
        <Hero
            title={d.hero.title}
            subtitle={d.hero.subtitle}
            ctaButton={{
                href: '/contact',
                text: d.hero.cta,
            }}
        />

      {/* Compliance Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-8">
              {d.compliance.heading}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {d.compliance.items.map((standard, index) => (
                <div
                  key={index}
                  className="bg-surface-0 p-6 text-center border-2 border-[#3A81F7]"
                >
                  <div className="text-[20px] font-semibold text-fg mb-2">
                    {standard.name}
                  </div>
                  <div className="text-[16px] text-fg-muted">
                    {standard.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Threat Landscape */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.threats.heading}
            </h2>
            <p className="text-[17px] text-fg-muted max-w-3xl mx-auto">
              {d.threats.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threats.map((threat, index) => {
              const Icon = threat.icon;
              return (
                <div key={index} className="bg-surface-0 p-8 text-center">
                  <div className="w-16 h-16 bg-[#00A878] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-fg mb-4">
                    {threat.title}
                  </h3>
                  <p className="text-[16px] text-fg-muted leading-relaxed">
                    {threat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Network Security Assessment */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-[28px] font-bold text-fg mb-4">
              {d.networkAssessment.heading}
            </h2>
            <p className="text-[16px] text-fg-muted">
              {d.networkAssessment.body}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.networkAssessment.items.map((item, index) => (
              <div key={index} className="bg-surface-0 p-6 rounded-card shadow-soft">
                <h3 className="text-[18px] font-semibold text-fg mb-2">{item.title}</h3>
                <p className="text-[14px] text-fg-muted">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[14px] text-fg-subtle mt-8">
            {d.networkAssessment.footer}
          </p>
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
