'use client';

import Container from '@/components/Container';
import { CheckCircle2 } from 'lucide-react';
import Card from '@/components/Card';

const testimonials = [
  {
    quote: 'W1IT transformed our outdated website into a modern, professional platform that truly represents our company's legacy. They implemented advanced analytics, live chat support, and multilingual capabilities that have significantly improved our customer engagement.',
    author: 'Kam Ling Trading Team',
    role: 'International Trading Company',
    company: 'Kam Ling International Trading Co.',
    logo: '🌏',
    results: ['Modern website with SEO optimization', 'Integrated analytics and live chat support', 'Multilingual support for global customers'],
  },
];

export default function TestimonialsPage() {
  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              Client Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Real stories from businesses we&apos;ve helped to succeed.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-2xl">
                      {testimonial.logo}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-neutral-900">
                        {testimonial.company}
                      </h3>
                      <p className="text-neutral-500 font-inter text-sm">
                        {testimonial.role || 'Technology Solutions'}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-neutral-700 font-inter text-lg leading-relaxed mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4">
                      Measurable Results:
                    </h4>
                    <ul className="space-y-3">
                      {testimonial.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-neutral-600 font-inter">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-neutral-200">
                    <div className="font-display font-bold text-neutral-900">
                      {testimonial.author}
                    </div>
                    <div className="text-neutral-500 font-inter">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
