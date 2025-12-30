'use client';

import React from 'react';
import Button from '@/components/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaButton?: {
    href: string;
    text: string;
  };
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  imageSrc = "/images/optimized/hero-graphic.webp",
  imageAlt = "Hero background",
  ctaButton,
  children,
}: HeroProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-[42px] font-bold text-white mb-6">
            {title}
          </h1>
          <p className={`text-[17px] text-white/90 ${ctaButton ? 'max-w-3xl mx-auto' : ''}`}>
            {subtitle}
          </p>
          {ctaButton && (
            <div className="mt-8">
                <Button href={ctaButton.href} variant="primary">
                {ctaButton.text}
                </Button>
            </div>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
