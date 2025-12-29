import Button from '@/components/Button';
import Image from 'next/image';

/**
 * W1IT Hero Component - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
 */

export default function Hero() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - TextBlock / Hero */}
          <div>
            <h1 className="text-[32px] md:text-[48px] font-bold text-[#050816] mb-6">
              Enterprise-Grade IT Support Built for Small Business Success
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#4A4A4A] mb-8">
              Small businesses deserve powerful IT solutions without the complexity. We solve your tech problems and prevent future disruptions — so you can focus on growing your business, not troubleshooting it.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button href="/contact" variant="primary">
                Schedule Free Consultation
              </Button>
              <Button href="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>

          {/* Right Column - Image / HeroBackdrop */}
          <div className="hidden md:block">
            <div className="w-full h-[400px] bg-[#F5F5F5] overflow-hidden">
              <Image
                src="/images/optimized/hero-graphic.webp"
                alt="W1IT IT Solutions Hero Graphic"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
