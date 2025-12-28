import Button from '@/components/Button';

/**
 * W1IT CTA Component
 * Matches: Section / CTA
 * Specs: Padding 96px top/bottom, Center alignment, Background Gray100
 * Typography: Heading/32 Bold, Heading/20 Bold, Body/18 Regular
 * Spacing: 32px between text blocks, 24px between buttons
 */

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center">
          {/* Title - Heading / 32 Bold */}
          <h2 className="text-heading-lg text-[#050816] mb-8">
            Ready to Get Started?
          </h2>

          {/* Subtitle - Heading / 20 Bold - Spacing 32px */}
          <h3 className="text-heading-md text-[#050816] mb-8">
            Let&apos;s Build Your Success Story Together
          </h3>

          {/* Body - Body / 18 Regular - Spacing 32px */}
          <p className="text-body-lg text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
            Talk to us about your goals, your challenges, and how W1IT can help you build a stronger, smarter foundation for growth.
          </p>

          {/* CTA Buttons - Spacing 24px */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button href="/contact" variant="primary">
              Get Your Free Consultation
            </Button>
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
