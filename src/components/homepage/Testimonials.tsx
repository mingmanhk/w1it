import { Star } from 'lucide-react';

/**
 * W1IT Industry Expertise Component - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
 */

const testimonials = [
  {
    quote: "W1IT transformed our outdated website into a modern, professional platform that truly represents our company's legacy.",
    author: 'Kam Ling Trading Team',
    company: 'Kam Ling International Trading Co.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#050816] mb-4">Industry Expertise</h2>
          <p className="text-[16px] text-[#4A4A4A]">Trusted by businesses across diverse industries</p>
        </div>

        {/* TestimonialCard / Default */}
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:max-w-[800px] bg-white p-8 border-2 border-[#D9D9D9]"
            >
              {/* Stars - 20px */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#3A81F7] text-[#3A81F7]" />
                ))}
              </div>

              {/* Quote - 18 italic */}
              <blockquote className="text-[18px] italic leading-[150%] text-[#050816] mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Attribution - 16 medium */}
              <div>
                <div className="text-[16px] font-medium text-[#050816]">
                  {testimonial.author}
                </div>
                <div className="text-[16px] text-[#4A4A4A]">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
