import { Star } from 'lucide-react';

/**
 * W1IT Industry Expertise Component (Testimonials)
 * Matches: Section / IndustryExpertise
 * Components: TestimonialCard / Default
 * Specs: Width 800px, Padding 32px, Radius 12px, Stars 20px, Quote 18 italic, Attribution 16 medium, Shadow / Card
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-heading-lg text-[#050816] mb-4">Industry Expertise</h2>
          <p className="text-body text-[#4A4A4A]">Trusted by businesses across diverse industries</p>
        </div>

        {/* TestimonialCard / Default */}
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-testimonial bg-white p-8 rounded-card shadow-card"
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
