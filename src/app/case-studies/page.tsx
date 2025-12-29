'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button';

interface CaseStudy {
  icon: string;
  title: string;
  description: string;
  results: string[];
  link: string | null;
}

const CaseStudyCard = ({ study }: { study: CaseStudy }) => (
  <div className="bg-surface-2 p-8">
    <div className="mb-6">
      <Image src={study.icon} alt={`${study.title} icon`} width={48} height={48} />
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-navy">{study.title}</h3>
    <p className="text-gray-600 mb-6">{study.description}</p>
    <div className="space-y-3 mb-8">
      {study.results.map((result, idx) => (
        <div key={idx} className="flex items-center space-x-3">
          <CheckCircle2 className="w-5 h-5 text-green flex-shrink-0" strokeWidth={1.5} />
          <span className="text-navy">{result}</span>
        </div>
      ))}
    </div>
    {study.link && (
      <Button href={study.link} variant="secondary" className="w-full">
        Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    )}
  </div>
);

export default function CaseStudiesPage() {
  const caseStudies: CaseStudy[] = [
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Healthcare Provider Cloud Migration',
      description: 'Migrated critical healthcare applications to AWS with 99.99% uptime and HIPAA compliance.',
      results: ['40% cost reduction', '99.99% uptime', 'HIPAA compliant'],
      link: null,
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Financial Services Security Overhaul',
      description: 'Implemented comprehensive security framework for financial institution achieving SOC 2 compliance.',
      results: ['SOC 2 certified', 'Zero security incidents', '24/7 monitoring'],
      link: null,
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Manufacturing Digital Transformation',
      description: 'Modernized legacy systems and implemented IoT solutions for predictive maintenance.',
      results: ['30% efficiency gain', 'Predictive maintenance', 'Real-time analytics'],
      link: null,
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Retail Data Analytics Platform',
      description: 'Built real-time analytics platform for retail chain enabling data-driven decision making.',
      results: ['25% sales increase', 'Real-time insights', 'Customer personalization'],
      link: null,
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'IT Checklist Failure & Rapid Recovery',
      description: 'How a missing daily IT checklist led to a full outage and how rapid recovery saved the business.',
      results: ['Same-day full recovery', 'Zero data loss', 'Proactive monitoring implemented'],
      link: '/blog/missing-it-checklist-outage-recovery',
    },
    {
      icon: '/images/optimized/Logo-AppIcon-Original.webp',
      title: 'Fragmented IT to Standardized Infrastructure',
      description: 'Transforming a fragmented IT environment into a documented, standardized, and automated infrastructure.',
      results: ['80% reduction in undocumented systems', 'Centralized credential management', 'Automated operational processes'],
      link: '/blog/fragmented-it-standardized-infrastructure',
    },
  ];

  return (
    <div className="bg-surface-0">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="W1IT Case Studies Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy/90" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold leading-tight text-white mb-6">
            Client Success Stories
          </h1>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours transform their technology and achieve remarkable results.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy text-white py-24">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto mb-8">
            Partner with us to achieve transformative results with innovative technology solutions.
          </p>
          <Button href="/contact" className="bg-green text-white">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}
