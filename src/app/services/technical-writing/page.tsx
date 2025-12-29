'use client';

import type { Metadata } from 'next';
import Button from '@/components/Button';
import Image from 'next/image';
import {
  FileText,
  BookOpen,
  Code,
  CheckCircle,
  GraduationCap,
  Globe,
} from 'lucide-react';

/**
 * W1IT Technical Writing Services Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function TechnicalWriting() {
  const services = [
    {
      icon: FileText,
      title: 'IT Documentation',
      description: 'System architecture docs, runbooks, SOPs, and infrastructure documentation in English and Chinese.',
    },
    {
      icon: BookOpen,
      title: 'User Guides & Manuals',
      description: 'Clear, user-friendly documentation for software applications and technical products.',
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Comprehensive API references, integration guides, and developer documentation.',
    },
    {
      icon: CheckCircle,
      title: 'Release Notes',
      description: 'Professional release notes and changelog documentation for software updates.',
    },
    {
      icon: GraduationCap,
      title: 'Training Materials',
      description: 'Technical training guides and educational content for teams and end users.',
    },
    {
      icon: Globe,
      title: 'Cross-Cultural Communication',
      description: 'Bridge technical and business communication for international teams working across English and Chinese-speaking markets.',
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'True Bilingual Expertise',
      description: 'Native-level proficiency in both English and Chinese, not just translation.',
    },
    {
      icon: FileText,
      title: 'IT Industry Experience',
      description: 'Deep understanding of technical concepts, infrastructure, and software development.',
    },
    {
      icon: CheckCircle,
      title: 'Clear & Structured',
      description: 'Documentation that follows industry best practices and is easy to maintain.',
    },
    {
      icon: BookOpen,
      title: 'Cultural Nuance',
      description: 'Understanding of business culture in both Western and Chinese markets.',
    },
  ];

  const useCases = [
    {
      title: 'For Seattle Businesses Going Global',
      description: 'You\'re expanding to China or working with Chinese partners. You need product documentation, user guides, or technical specs that work for both English and Chinese-speaking audiences.',
    },
    {
      title: 'For International Teams',
      description: 'Your development team spans multiple countries. You need consistent technical documentation that serves both your US-based engineers and your Chinese development center.',
    },
    {
      title: 'For Software Companies',
      description: 'You\'re selling software in both markets and need API docs, SDKs, and integration guides that work seamlessly in English and Chinese.',
    },
    {
      title: 'For Enterprise IT Teams',
      description: 'Your company has offices in Seattle and Asia. You need IT documentation, procedures, and training materials that work across all locations.',
    },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Bilingual Technical Writing Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Bilingual Technical Writing
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Professional technical documentation in English and Chinese. Bridge the communication gap for international teams and global businesses.
            </p>
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Why Bilingual Documentation Matters */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[28px] font-bold text-[#050816] mb-6">
            Why Bilingual Documentation Matters
          </h2>
          <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
            <p className="text-[16px] text-[#4A4A4A] leading-relaxed mb-6">
              In today&apos;s global economy, businesses increasingly operate across English and Chinese-speaking markets. Effective technical communication isn&apos;t just about translation—it requires deep understanding of both technical concepts and cultural context.
            </p>
            <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
              Whether you&apos;re a Seattle-based company expanding to Asian markets, or an international team needing documentation in both languages, professional bilingual technical writing ensures clarity, accuracy, and consistency across all your technical communications.
            </p>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Documentation Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              Comprehensive technical writing services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-[#FFFFFF] p-8 text-center">
                  <div className="w-16 h-16 bg-[#00A878] flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Common Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1200px] mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#F8FAFC] p-8">
                <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                  {useCase.title}
                </h3>
                <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Improve Your Global Communication?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how bilingual technical documentation can support your business goals.
            </p>
            <Button href="/contact" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
