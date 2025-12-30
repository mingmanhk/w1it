import { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Wrench, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free IT Tools | W1IT Solutions',
  description: 'Free IT tools, calculators, and utilities from W1IT Solutions to help manage your technology.',
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Free IT Tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-8">
            <Wrench className="w-20 h-20 mx-auto mb-6 opacity-90 text-white" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
              Free IT Tools
            </h1>
            <p className="text-xl md:text-2xl text-black/90 mb-8">
              Helpful tools and utilities for your IT needs
            </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Settings className="w-16 h-16 mx-auto mb-6 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We&apos;re developing free IT tools including network calculators, security scanners, and performance analyzers. Stay tuned!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/apps">
                View Our Apps
              </Button>
              <Button href="/contact" variant="secondary">
                Suggest a Tool
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
