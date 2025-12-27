'use client';

import Container from '@/components/Container';
import { CheckCircle2, Users, Rocket, Shield, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      name: 'Clarity',
      description: 'We believe in clear communication, transparent processes, and straightforward solutions.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      name: 'Resilience',
      description: 'We build robust systems and processes that withstand challenges and ensure business continuity.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      name: 'Partnership',
      description: 'We work as an extension of your team, dedicated to your success.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      name: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
      icon: <Rocket className="w-8 h-8" />,
    },
  ];

  const whyChooseUs = [
    'Expertise in modern IT infrastructure and cloud technologies.',
    'A proactive approach to problem-solving and support.',
    'A commitment to understanding your business and its unique needs.',
    'A track record of delivering measurable results.',
    'Transparent pricing and a focus on long-term value.',
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
              Your trusted partner in navigating the complexities of modern IT.
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
                Our mission is to empower businesses with clear, resilient, and high-performing IT solutions. We strive to demystify technology, enabling our clients to focus on their core business while we handle the complexities of their IT infrastructure.
              </p>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed">
                We are committed to building long-term partnerships based on trust, transparency, and a deep understanding of our clients&apos; needs.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <Image
                src="https://placehold.co/600x400/0172F5/FFFFFF"
                alt="A diverse team of IT professionals collaborating around a whiteboard in a modern office, brainstorming solutions."
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
                src="https://placehold.co/600x400/8A2BE2/FFFFFF"
                alt="A portrait of the founder, Victor, smiling confidently in front of a modern server rack, representing his expertise."
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in-up order-1 md:order-2" style={{ animationDelay: '100ms' }}>
              <h2 className="font-display font-bold text-4xl text-neutral-900 mb-6">Founder Story</h2>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed mb-6">
                W1IT was founded by Victor, a seasoned IT professional with over a decade of experience in building and managing complex IT systems. Frustrated by the lack of clarity and transparency in the industry, he set out to create a different kind of IT consultancy – one that prioritizes partnership, clear communication, and a relentless focus on client success.
              </p>
              <p className="text-lg text-neutral-600 font-inter leading-relaxed">
                Today, W1IT is a trusted partner for businesses across Seattle, helping them navigate the ever-changing technology landscape with confidence.
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
