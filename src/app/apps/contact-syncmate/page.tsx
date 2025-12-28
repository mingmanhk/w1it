'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function ContactSyncMate() {
  const features = [
    {
      icon: '🔄',
      title: '2-Way Sync',
      description: 'Bi-directional sync between Google and Apple Contacts',
    },
    {
      icon: '🛡️',
      title: 'Privacy First',
      description: 'All processing happens locally, zero data sent to servers',
    },
    {
      icon: '⚙️',
      title: 'Smart Automation',
      description: 'Configurable background sync intervals and intelligent conflict resolution',
    },
    {
      icon: '✅',
      title: 'Full Control',
      description: 'Manual sync with preview, per-contact overrides, and detailed history',
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
                <span className="text-xs font-body font-medium text-rose bg-blush px-3 py-1.5 rounded-full">
                  macOS • Utilities
                </span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Contact SyncMate
              </h1>
              <p className="text-lg md:text-xl text-gray-medium mb-8 font-body">
                Contact SyncMate is a privacy-first macOS application that keeps your Google
                Contacts and Apple Contacts (iCloud / On My Mac) perfectly synchronized. With
                intelligent 2-way and 1-way sync options, manual control with full preview, and
                automated background syncing, managing your contacts across platforms has never been
                easier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Button href="#" size="lg">
                  Download App ↗
                </Button>
                <div className="text-center sm:text-left">
                  <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg">
                    <span className="text-sm font-body font-medium text-blue-700">
                      ETA November 2025
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm">
                <Link
                  href="/privacy"
                  className="text-rose hover:text-charcoal font-body font-medium transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="text-gray-medium">•</span>
                <Link
                  href="/terms"
                  className="text-rose hover:text-charcoal font-body font-medium transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-blush to-white rounded-2xl p-8 shadow-xl">
                <div className="relative aspect-square w-full max-w-[800px] mx-auto">
                  <Image
                    src="/Contact SyncMate Icon.webp"
                    alt="Contact SyncMate"
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
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            Sync Contacts Your Way
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
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-medium font-body">{feature.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blush">
        <Container size="sm">
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Keep Your Contacts in Perfect Sync
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-body">
              Download Contact SyncMate and never worry about managing contacts across platforms
              again.
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
