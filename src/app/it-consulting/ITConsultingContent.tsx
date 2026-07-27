'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { useLanguage } from '@/components/LanguageProvider';

export default function ITConsultingContent() {
  const { dict } = useLanguage();
  const d = dict.itConsulting;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0">
          <Image
            src="/images/brand/hero-graphic.webp"
            alt="IT Consulting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <Container>
          <div className="relative text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              {d.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-black/90 max-w-3xl mx-auto mb-8 font-body">
              {d.hero.subtitleBeforeLink}
              <a href="/it-services" className="text-rose hover:underline">{d.hero.linkText}</a>
              {d.hero.subtitleAfterLink}
            </p>
            <Button href="/contact">
              {d.hero.cta}
            </Button>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <Container>
          <Card>
            <p className="text-gray-medium font-body text-lg leading-relaxed">
              {d.intro}
            </p>
          </Card>
        </Container>
      </section>

      {/* What I Offer Section */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            {d.offer.heading}
          </h2>
          <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
            {d.offer.subheading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.offer.items.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-medium font-body">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How Clients Benefit Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            {d.benefits.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.benefits.items.map((benefit, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-medium font-body">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-blush">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              {d.cta.heading}
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-body">
              {d.cta.body}
            </p>
            <Button href="/contact">
              {d.cta.cta}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
