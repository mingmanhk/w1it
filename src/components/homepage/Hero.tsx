import Button from '@/components/Button';
import Image from 'next/image';

/**
 * W1IT Hero Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function Hero() {
  return (
    <section className="bg-[#FFFFFF] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - TextBlock / Hero */}
          <div>
            <h1 className="text-[32px] md:text-[42px] font-bold text-[#050816] mb-6">
              Enterprise-Grade IT Support Built for Small Business Success
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#4A4A4A] mb-8">
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
            <div className="w-full h-[400px] bg-[#F8FAFC] overflow-hidden">
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
