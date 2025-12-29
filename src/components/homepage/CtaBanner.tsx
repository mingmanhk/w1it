import Button from '@/components/Button';

/**
 * W1IT CTA Component - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
 */

export default function CtaBanner() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          {/* Title - Heading / 32 Bold */}
          <h2 className="text-[32px] font-bold text-[#050816] mb-8">
            Ready to Get Started?
          </h2>

          {/* Subtitle - Heading / 20 Bold */}
          <h3 className="text-[20px] font-bold text-[#050816] mb-8">
            Let&apos;s Build Your Success Story Together
          </h3>

          {/* Body - Body / 18 Regular */}
          <p className="text-[18px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
            Talk to us about your goals, your challenges, and how W1IT can help you build a stronger, smarter foundation for growth.
          </p>

          {/* CTA Buttons */}
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
