'use client';

import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ScreenGrabber() {
  const features = [
    {
      icon: '📸',
      title: 'Global Hotkeys',
      description: 'Customizable shortcuts for full-screen, window, and region captures',
    },
    {
      icon: '🎯',
      title: 'Smart Organization',
      description: 'Automatic categorization and intelligent folder management',
    },
    {
      icon: '⚡',
      title: 'Menu Bar Integration',
      description: 'Quick access from your menu bar for lightning-fast captures',
    },
    {
      icon: '🔗',
      title: 'Instant Sharing',
      description: 'Copy to clipboard, save to file, or share directly with cloud services',
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
                  macOS • Productivity
                </span>
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                ScreenGrabber
              </h1>
              <p className="text-lg md:text-xl text-gray-medium mb-8 font-inter">
                ScreenGrabber revolutionizes how you capture, organize, and manage screenshots on
                macOS. With native SwiftUI interface, global hotkey support, intelligent
                organization, and seamless menu bar integration, capturing and sharing screenshots
                has never been easier.
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
                <Image
                  src="/ScreenGrabber.png"
                  alt="ScreenGrabber"
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
            Powerful Screenshot Features
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
              Capture Screenshots Like a Pro
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-inter">
              Download ScreenGrabber and experience the most powerful screenshot tool for macOS.
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
