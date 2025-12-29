import Button from '@/components/Button';

/**
 * W1IT CTA Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function CtaBanner() {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center">
          {/* Title - Heading / 28 Bold */}
          <h2 className="text-[28px] font-bold text-[#050816] mb-6">
            Ready to Get Started?
          </h2>

          {/* Subtitle - Heading / 20 Semibold */}
          <h3 className="text-[20px] font-semibold text-[#050816] mb-6">
            Let&apos;s Build Your Success Story Together
          </h3>

          {/* Body - Body / 17 Regular */}
          <p className="text-[17px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
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
