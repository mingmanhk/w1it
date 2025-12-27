import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { CheckCircle2, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: 'W1IT provided the clarity and expertise we needed to stabilize our systems and scale confidently. Their structured approach transformed our chaotic IT environment into a reliable foundation for growth.',
    author: 'Michael Chen',
    role: 'CTO',
    company: 'HealthTech Innovations',
    logo: '🏥',
    results: ['Reduced system downtime by 85%', 'Improved team productivity by 40%'],
  },
  {
    quote: 'Their structured approach to automation significantly reduced our maintenance overhead. What used to take days now takes hours, allowing our team to focus on strategic initiatives instead of firefighting.',
    author: 'Sarah Johnson',
    role: 'Operations Director',
    company: 'Precision Manufacturing Co.',
    logo: '🏭',
    results: ['Cut maintenance time by 70%', 'Increased operational efficiency by 35%'],
  },
  {
    quote: 'Victor\'s attention to detail and clear documentation made our cloud migration seamless and stress-free. The transition was so smooth that our team barely noticed the changeover.',
    author: 'David Rodriguez',
    role: 'IT Manager',
    company: 'Northwest Financial Group',
    logo: '💼',
    results: ['Zero downtime during migration', 'Reduced cloud costs by 25%'],
  },
  {
    quote: 'The website optimization work resulted in a 40% increase in page load speed and better user engagement. Our conversion rates improved significantly, directly impacting our bottom line.',
    author: 'Jennifer Lee',
    role: 'Marketing Director',
    company: 'Urban E-commerce Collective',
    logo: '🛒',
    results: ['40% faster page loads', '28% increase in conversions'],
  },
];

export default function Testimonials() {
  return (
    <section className="py-40 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        <div className="text-center mb-32">
          <div className="inline-block px-5 py-2.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-inter">
            Client Success Stories
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-8">
            Trusted by Seattle Businesses
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-inter leading-relaxed">
            See how we&apos;ve helped businesses across industries achieve measurable results and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    <h3 className="font-display font-bold text-xl text-neutral-900">
                      {testimonial.company}
                    </h3>
                    <p className="text-neutral-500 font-inter text-sm">
                      {testimonial.role || 'Technology Solutions'}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-neutral-700 font-inter text-lg leading-relaxed mb-8 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                {/* Results */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4">
                    Measurable Results:
                  </h4>
                  <div className="space-y-3">
                    {testimonial.results.map((result, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-neutral-600 font-inter">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
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

        {/* Testimonials CTA */}
        <div className="text-center mt-20 pt-16 border-t border-neutral-200">
          <p className="text-xl text-neutral-600 mb-8 font-inter">
            Ready to join our satisfied clients?
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
