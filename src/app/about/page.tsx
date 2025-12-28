'use client';

import Container from '@/components/Container';
import { CheckCircle2, Users, Rocket, Shield, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      name: 'Confidence',
      description: 'We give small businesses the confidence to embrace technology and drive growth.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      name: 'Clarity',
      description: 'We believe in clear communication, transparent pricing, and straightforward solutions.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: 'Control',
      description: 'We empower you with the tools and knowledge to take control of your technology.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: 'Partnership',
      description: 'We don&apos;t believe in one-size-fits-all. Every business is unique — and so is our approach.',
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  const whyChooseUs = [
    'Expert support tailored specifically for small business needs.',
    'Proactive monitoring and prevention — stop problems before they start.',
    'Fast, friendly help desk services when you need us most.',
    'Transparent pricing with custom plans that fit your budget.',
    'Strategic IT consulting to help you grow smarter, not just bigger.',
    'Enterprise-grade security without enterprise-level complexity.',
  ];

  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              About W1IT
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Empowering small businesses with enterprise-grade IT solutions — without the complexity or overhead.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Our Mission</h2>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed mb-6">
                At W1IT, we believe small businesses deserve enterprise-grade IT support without the complexity or overhead. Whether you&apos;re just starting out or scaling fast, our mission is simple: help you succeed by making your technology work smarter, faster, and safer.
              </p>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed">
                We specialize in solving everyday tech issues and preventing future disruptions — so you can focus on growing your business, not troubleshooting it.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Image
                src="/images/optimized/about-mission.svg"
                alt="W1IT's mission: Empowering businesses with clear, resilient, and high-performing IT solutions"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Our Values</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center items-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900 mb-4">{value.name}</h3>
                <p className="text-neutral-600 font-inter">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up order-2 md:order-1">
              <Image
                src="/images/optimized/founder-story.svg"
                alt="W1IT Founder: Over a decade of IT expertise, building partnerships with Seattle businesses"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in-up order-1 md:order-2" style={{ animationDelay: '100ms' }}>
              <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Built for Small Business Success</h2>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed mb-6">
                W1IT was founded by Victor, a seasoned IT professional with over a decade of experience in building and managing complex IT systems. Frustrated by seeing small businesses struggle with overpriced, overcomplicated IT support, he set out to create something different — a consultancy that treats small businesses like valued partners, not ticket numbers.
              </p>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed">
                Today, W1IT is a trusted technology partner for small businesses across Bellevue and the Seattle Metro Area. We&apos;re here to help you build a stronger, smarter foundation for growth — one where technology empowers you instead of holding you back.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Why Choose Us?</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-neutral-700 font-inter">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
