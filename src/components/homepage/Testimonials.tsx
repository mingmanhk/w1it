import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { CheckCircle2, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "W1IT transformed our outdated website into a modern, professional platform that truly represents our company's legacy. They implemented advanced analytics, live chat support, and multilingual capabilities that have significantly improved our customer engagement.",
    author: 'Kam Ling Trading Team',
    role: 'International Trading Company',
    company: 'Kam Ling International Trading Co.',
    logo: '🌏',
    results: ['Modern website with SEO optimization', 'Integrated analytics and live chat support', 'Multilingual support for global customers'],
  },
];

export default function Testimonials() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        <div className="text-center mb-32">
          <div className="inline-block px-5 py-2.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-body">
            Client Success Stories
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-dark-text mb-8">
            Trusted by Small Businesses Across Bellevue & Seattle
          </h2>
          <p className="text-xl md:text-2xl text-dark-text/80 max-w-3xl mx-auto font-body leading-relaxed">
            Real results from real businesses. See how we&apos;ve helped small businesses like yours solve tech challenges and achieve measurable growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              hoverable
              className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-10">
                {/* Company Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center text-2xl">
                    {testimonial.logo}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark-text">
                      {testimonial.company}
                    </h3>
                    <p className="text-dark-text/70 font-body text-sm">
                      {testimonial.role || 'Technology Solutions'}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-dark-text/90 font-body text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-heading font-semibold text-lg text-dark-text mb-4">
                    Measurable Results:
                  </h4>
                  <div className="space-y-3">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-dark-text/80 font-body">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="pt-6 border-t border-neutral-200">
                  <div className="font-heading font-bold text-dark-text">
                    {testimonial.author}
                  </div>
                  <div className="text-dark-text/70 font-body">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials CTA */}
        <div className="text-center mt-20 pt-16 border-t border-neutral-200">
          <p className="text-xl text-dark-text/80 mb-8 font-body">
            Ready to become our next success story?
          </p>
          <Button
            href="/testimonials"
            variant="outline"
            size="xl"
            className="border-primary-500 text-primary-600 hover:bg-primary-50 transition-colors"
          >
            <Sparkles className="w-6 h-6 mr-3" />
            Read More Success Stories
          </Button>
        </div>
      </Container>
    </section>
  );
}
