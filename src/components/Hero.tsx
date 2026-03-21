'use client';

import React from 'react';
import Button from '@/components/Button';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaButton?: {
    href: string;
    text: string;
  };
}

export default function Hero({
  title,
  subtitle,
  imageSrc = "/images/optimized/hero-graphic.webp",
  imageAlt = "Hero background",
  ctaButton,
}: HeroProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
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
        </div>
      </div>
    </section>
  );
}
