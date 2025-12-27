'use client';

import Container from '@/components/Container';
import { CheckCircle2 } from 'lucide-react';
import Card from '@/components/Card';

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
  {
    quote: 'The team at W1IT is incredibly responsive and knowledgeable. They are a true partner in our success.',
    author: 'Samantha Green',
    role: 'CEO',
    company: 'GreenLeaf Organics',
    logo: '🌿',
    results: ['Improved IT response time by 90%', 'Increased employee satisfaction with IT support'],
  },
  {
    quote: 'W1IT helped us develop a clear IT roadmap that aligns with our business goals. We now have a solid plan for the future.',
    author: 'Tom Wilson',
    role: 'President',
    company: 'Wilson Construction',
    logo: '🏗️',
    results: ['Developed a 3-year IT roadmap', 'Aligned IT budget with strategic priorities'],
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
