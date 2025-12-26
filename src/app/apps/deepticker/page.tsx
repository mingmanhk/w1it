'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function DeepTicker() {
  const features = [
    {
      icon: '📈',
      title: 'Real-Time Charts',
      description: 'Interactive Chart.js powered visualizations with multiple timeframes',
    },
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find any stock instantly with autocomplete and historical search',
    },
    {
      icon: '⭐',
      title: 'Watchlist',
      description: 'Create custom watchlists to monitor your favorite stocks',
    },
    {
      icon: '📊',
      title: 'Performance Metrics',
      description: 'Detailed analytics including P/E ratio, 52-week highs, and more',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-white to-blush">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <span className="text-xs font-inter font-medium text-rose bg-blush px-3 py-1.5 rounded-full">
                  iOS • Finance & Trading
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                DeepTicker
              </h1>
              <p className="text-lg md:text-xl text-gray-medium mb-8 font-inter">
                DeepTicker is a modern iOS stock market application that brings professional-grade
                investment tools to your pocket. Search stocks, track real-time performance,
                analyze charts, and maintain a personalized watchlist. Built with React, GraphQL,
                Apollo, Chart.js, and Material-UI for a seamless trading experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="#" size="lg">
                  Download App ↗
                </Button>
                <div className="text-center sm:text-left">
                  <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg">
                    <span className="text-sm font-inter font-medium text-blue-700">
                      November 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blush to-white rounded-2xl p-8 shadow-xl">
                <div className="relative aspect-square w-full max-w-[800px] mx-auto">
                  <Image
                    src="/DeepTicker.webp"
                    alt="DeepTicker"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            Professional Trading Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display font-semibold text-xl text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-medium font-inter">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blush">
        <Container size="sm">
          <div className="text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Stay Ahead of the Market
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-inter">
              Download DeepTicker and get professional-grade stock market tools right in your
              pocket.
            </p>
            <Button href="#" size="lg">
              Download for iOS ↗
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
