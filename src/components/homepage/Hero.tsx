import Button from '@/components/Button';
import Hero from '@/components/Hero';

/**
 * W1IT Hero Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function HomeHero() {
  return (
    <Hero
        title="Enterprise-Grade IT Support Built for Small Business Success"
        subtitle="Small businesses deserve powerful IT solutions without the complexity. We solve your tech problems and prevent future disruptions — so you can focus on growing your business, not troubleshooting it."
        imageSrc="/images/optimized/hero-graphic.webp"
        imageAlt="W1IT IT Solutions Hero Graphic"
    >
        <div className="flex flex-col md:flex-row gap-4">
            <Button href="/contact" variant="primary">
                Schedule Free Consultation
            </Button>
            <Button href="/services" variant="secondary">
                Explore Our Services
            </Button>
        </div>
    </Hero>
  );
}
