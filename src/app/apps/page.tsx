'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';

interface App {
  icon: string;
  title: string;
  description: string;
  href: string;
  learnMore: string;
}

// Component for a single app card
const AppCard = ({ app }: { app: App }) => (
  <div className="bg-surface-2 p-8">
    <div className="mb-6">
      <Image src={app.icon} alt={`${app.title} icon`} width={48} height={48} />
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-navy">{app.title}</h3>
    <p className="text-fg-muted mb-6">{app.description}</p>
    <Button href={app.href} variant="secondary" className="w-full">
      {app.learnMore} <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </div>
);

const appHrefs = ['/apps/contact-syncmate', '/apps/pixel-color-picker', '/apps/screengrabber', '/apps/deepticker'];

// Main Apps Page Component
export default function AppsPage() {
  const { dict } = useLanguage();
  const apps: App[] = dict.appsHub.apps.map((a, i) => ({
    icon: '/images/brand/logo.webp',
    title: a.title,
    description: a.description,
    href: appHrefs[i],
    learnMore: dict.appsHub.learnMore,
  }));

  return (
    <div className="bg-surface-0">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/brand/hero-graphic.webp"
            alt="W1IT Applications Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold leading-tight text-black mb-6">
            {dict.appsHub.hero.title}
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            {dict.appsHub.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <AppCard key={index} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Apps Section */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">{dict.appsHub.whyHeading}</h2>
          <p className="text-lg text-fg-muted max-w-3xl mx-auto mb-12">
            {dict.appsHub.whySubheading}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.appsHub.benefits.map((benefit, index) => (
              <div key={index} className="bg-surface-2 p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">{benefit.title}</h3>
                <p className="text-fg-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{dict.appsHub.cta.heading}</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
            {dict.appsHub.cta.body}
          </p>
          <Button href="/contact" className="bg-green text-white">
            {dict.appsHub.cta.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
