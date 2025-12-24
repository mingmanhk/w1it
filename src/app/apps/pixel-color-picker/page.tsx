'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function PixelColorPicker() {
  const features = [
    {
      icon: '✨',
      title: 'Beautiful & Intuitive',
      description: 'Modern SwiftUI interface that feels right at home on macOS',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Pick colors in milliseconds with keyboard shortcuts',
    },
    {
      icon: '🎨',
      title: 'Professional Tools',
      description: 'Interactive color wheel, format conversion, and smart history',
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Works completely offline, no data collection, 100% open source',
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
                  macOS • Design Tools
                </span>
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Pixel Color Picker
              </h1>
              <p className="text-lg md:text-xl text-gray-medium mb-8 font-inter">
                Transform your creative workflow with Pixel Color Picker – the fastest, most
                elegant way to capture, explore, and copy colors on macOS. Whether you&apos;re
                designing a website, creating digital art, or perfecting your brand palette, get
                instant access to any color on your screen with pixel-perfect precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="#" size="lg">
                  Download App ↗
                </Button>
                <div className="text-center sm:text-left">
                  <div className="inline-block px-4 py-2 bg-green-100 rounded-lg">
                    <span className="text-sm font-inter font-medium text-green-700">
                      Available now
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blush to-white rounded-2xl p-8 shadow-xl">
                <Image
                  src="/PixelColorPicker.png"
                  alt="Pixel Color Picker"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            Everything You Need
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
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
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
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-inter">
              Download Pixel Color Picker today and experience the fastest way to work with colors
              on macOS.
            </p>
            <Button href="#" size="lg">
              Download for macOS ↗
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
