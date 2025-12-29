import Button from '@/components/Button';
import Image from 'next/image';

/**
 * W1IT Hero Component
 * Matches: Section / Hero
 * Specs: Two-column layout, Gap 64px, Padding 96px top/bottom, Left column 520px
 * Mobile: Stack vertically, Headline 32px, Subheadline 16px, CTA full width
 */

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-hero items-center">
          {/* Left Column - TextBlock / Hero */}
          <div className="md:w-hero-left">
            <h1 className="text-display md:text-[48px] text-[32px] text-[#050816] mb-6">
              Enterprise-Grade IT Support Built for Small Business Success
            </h1>
            <p className="text-body-lg md:text-body text-[#4A4A4A] mb-8">
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
            <div className="w-full h-[400px] bg-[#F5F5F5] rounded-card overflow-hidden">
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
