'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * W1IT Testimonials Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

const testimonials = [
  {
    quote: "W1IT transformed our outdated website into a modern, professional platform that truly represents our company's legacy. They implemented advanced analytics, live chat support, and multilingual capabilities that have significantly improved our customer engagement.",
    author: 'Kam Ling Trading Team',
    role: 'International Trading Company',
    company: 'Kam Ling International Trading Co.',
    url: 'https://kamlingtrading.com',
    logo: '🌏',
    results: ['Modern website with SEO optimization', 'Integrated analytics and live chat support', 'Multilingual support for global customers'],
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Testimonials"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <div className="relative max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-black mb-6">
              Client Success Stories
            </h1>
            <p className="text-body-lg text-black/90 max-w-3xl mx-auto">
              Real stories from businesses we&apos;ve helped to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-card p-8 border-2 border-[#D9D9D9]"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-[#3A81F7] rounded-card flex items-center justify-center text-2xl">
                    {testimonial.logo}
                  </div>
                  <div>
                    <h3 className="text-heading-md text-[#050816]">
                      {testimonial.url ? (
                        <Link 
                          href={testimonial.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:text-[#3A81F7] transition-colors"
                        >
                          {testimonial.company}
                        </Link>
                      ) : (
                        testimonial.company
                      )}
                    </h3>
                    <p className="text-caption text-[#4A4A4A]">
                      {testimonial.role || 'Technology Solutions'}
                    </p>
                  </div>
                </div>
                <blockquote className="text-body text-[#4A4A4A] leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="mb-6">
                  <h4 className="text-body font-bold text-[#050816] mb-4">
                    Measurable Results:
                  </h4>
                  <ul className="space-y-3">
                    {testimonial.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-[#D9D9D9]">
                  <div className="text-body font-bold text-[#050816]">
                    {testimonial.author}
                  </div>
                  <div className="text-caption text-[#4A4A4A]">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
