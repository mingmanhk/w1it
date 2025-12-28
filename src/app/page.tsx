'use client';

import Hero from '@/components/homepage/Hero';
import ValuePillars from '@/components/homepage/ValuePillars';
import CoreServices from '@/components/homepage/CoreServices';
import FeatureHighlights from '@/components/homepage/FeatureHighlights';
import Industries from '@/components/homepage/Industries';
import Testimonials from '@/components/homepage/Testimonials';
import CtaBanner from '@/components/homepage/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <CoreServices />
      <FeatureHighlights />
      <Industries />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
