'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

interface App {
  icon: string;
  title: string;
  description: string;
  href: string;
}

// Component for a single app card
const AppCard = ({ app }: { app: App }) => (
  <div className="bg-surface-2 p-8">
    <div className="mb-6">
      <Image src={app.icon} alt={`${app.title} icon`} width={48} height={48} />
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-navy">{app.title}</h3>
    <p className="text-gray-600 mb-6">{app.description}</p>
    <Button href={app.href} variant="secondary" className="w-full">
      Learn More <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </div>
);

// Main Apps Page Component
export default function AppsPage() {
  const apps: App[] = [
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Contact SyncMate',
      description: 'Intelligent contact management and synchronization across all your devices and platforms.',
      href: '/apps/contact-syncmate',
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Pixel Color Picker',
      description: 'Advanced color detection tool with palette generation and accessibility checking.',
      href: '/apps/pixel-color-picker',
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'ScreenGrabber',
      description: 'Professional screenshot and screen recording tool with annotation capabilities.',
      href: '/apps/screengrabber',
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'DeepTicker',
      description: 'Real-time financial data analysis and market insights platform.',
      href: '/apps/deepticker',
    },
  ];

  return (
    <div className="bg-surface-0">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="W1IT Applications Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold leading-tight text-black mb-6">
            W1IT Applications
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            We build powerful, user-focused applications to streamline your workflows and solve critical business challenges.
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
          <h2 className="text-3xl font-bold text-navy mb-4">Why Our Apps Stand Out</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We combine technical expertise with user-centered design to create applications that are both powerful and easy to use.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              title: 'User-Centric Design',
              description: 'Intuitive interfaces designed with user experience as the top priority.',
            }, {
              title: 'Cross-Platform',
              description: 'Applications that work seamlessly across web, mobile, and desktop platforms.',
            }, {
              title: 'Enterprise Security',
              description: 'Bank-level security with encryption, authentication, and compliance standards.',
            }, {
              title: 'Regular Updates',
              description: 'Continuous improvement with feature updates and performance enhancements.',
            }].map((benefit, index) => (
              <div key={index} className="bg-surface-2 p-8">
                <h3 className="text-xl font-semibold text-navy mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Custom App Idea?</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
            We specialize in building bespoke applications tailored to your unique business needs. Let’s turn your vision into reality.
          </p>
          <Button href="/contact" className="bg-green text-white">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
