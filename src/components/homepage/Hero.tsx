'use client';

import Hero from '@/components/Hero';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Hero Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function HomeHero() {
  const { dict } = useLanguage();

  return (
    <Hero
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        imageSrc="/images/brand/hero-graphic.webp"
        imageAlt="W1IT IT Solutions Hero Graphic"
        ctaButton={{
          href: "/contact",
          text: dict.home.hero.cta
        }}
    />
  );
}
