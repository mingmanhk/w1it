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
    <section className="relative py-24 overflow-hidden bg-[#050816]">
      {/* Background image with simpler approach */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/70 to-[#050816]/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-[42px] font-bold text-white mb-6">
            {title}
          </h1>
          <p className={`text-[17px] text-white/90 mb-8 ${ctaButton ? 'max-w-3xl mx-auto' : ''}`}>
            {subtitle}
          </p>
          {ctaButton && (
            <div className="mt-8">
              <Button 
                href={ctaButton.href} 
                variant="primary"
                className="text-lg px-8 py-4"
              >
                {ctaButton.text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
