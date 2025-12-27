import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Sparkles, Quote, Star, Users, Building, Briefcase } from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Client Testimonials & Success Stories - W1IT Solutions',
  description:
    'Read what our clients say about our IT services, consulting, and website optimization work. Real results from healthcare, manufacturing, finance, and tech companies.',
  keywords: [
    'IT testimonials Seattle',
    'client success stories',
    'IT consulting reviews',
    'website optimization results',
    'managed services testimonials',
  ],
  canonical: '/testimonials',
  openGraph: {
    title: 'Client Testimonials & Success Stories | W1IT',
    description: 'Real client feedback and results from our IT services and consulting work.',
    type: 'website',
  },
});

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: 'W1IT provided the clarity and expertise we needed to stabilize our systems and scale confidently. Their documentation and processes are exceptional.',
      author: 'CTO, Healthcare Startup',
      role: 'Technology Leadership',
      industry: 'Healthcare',
      rating: 5,
      project: 'Infrastructure Modernization',
    },
    {
      quote: 'Their structured approach to automation significantly reduced our maintenance overhead. We went from daily firefighting to proactive optimization.',
      author: 'Operations Director, Manufacturing Firm',
      role: 'Operations Management',
      industry: 'Manufacturing',
      rating: 5,
      project: 'Process Automation',
    },
    {
      quote: 'Victor\'s attention to detail and clear documentation made our cloud migration seamless and stress-free. The project was completed ahead of schedule.',
      author: 'IT Manager, Financial Services',
      role: 'IT Management',
      industry: 'Financial Services',
      rating: 5,
      project: 'Cloud Migration',
    },
    {
      quote: 'The website optimization work resulted in a 40% increase in page load speed and better user engagement. Our conversion rates improved noticeably.',
      author: 'Marketing Director, E-commerce Company',
      role: 'Marketing Leadership',
      industry: 'E-commerce',
      rating: 5,
      project: 'Website Optimization',
    },
    {
      quote: 'As a small business, we needed reliable IT support without the enterprise price tag. W1IT delivered exactly that - professional, responsive, and affordable.',
      author: 'Owner, Professional Services Firm',
      role: 'Business Owner',
      industry: 'Professional Services',
      rating: 5,
      project: 'Managed IT Services',
    },
    {
      quote: 'The cybersecurity audit identified vulnerabilities we had missed. Their remediation plan was clear, actionable, and significantly improved our security posture.',
      author: 'Security Officer, Technology Company',
      role: 'Security Leadership',
      industry: 'Technology',
      rating: 5,
      project: 'Cybersecurity Audit',
    },
  ];

  const industries = [
    { name: 'Healthcare', count: 12, icon: <Building className="w-6 h-6" /> },
    { name: 'Manufacturing', count: 8, icon: <Briefcase className="w-6 h-6" /> },
    { name: 'Financial Services', count: 10, icon: <Building className="w-6 h-6" /> },
    { name: 'Technology', count: 15, icon: <Sparkles className="w-6 h-6" /> },
    { name: 'E-commerce', count: 7, icon: <Users className="w-6 h-6" /> },
    { name: 'Professional Services', count: 11, icon: <Briefcase className="w-6 h-6" /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="font-inter">Client Success</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Client Testimonials
              <span className="block text-gradient-primary mt-2">Real Results, Real Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Don&apos;t just take our word for it. Hear from businesses across industries who have transformed their operations with W1IT&apos;s IT solutions, consulting, and website optimization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Share Your Success Story
                <Sparkles className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/case-studies" variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                Read Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonials Grid */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Client Feedback
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Authentic feedback from businesses we&apos;ve helped transform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                hoverable
                padding="lg"
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-2 text-amber-500 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary-500/30 mb-4" />
                  <blockquote className="text-neutral-700 font-inter text-lg leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                </div>
                <div className="pt-6 border-t border-neutral-200">
                  <div className="font-display font-bold text-neutral-900">{testimonial.author}</div>
                  <div className="text-neutral-600 text-sm font-inter mb-2">{testimonial.role}</div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-inter px-3 py-1 bg-primary-50 text-primary-700 rounded-full">
                      {testimonial.industry}
                    </span>
                    <span className="text-xs font-inter px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Served */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Trusted Across Industries
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              We&apos;ve delivered results for businesses across diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-6 border-2 border-neutral-200 rounded-2xl hover:border-primary-300 hover:shadow-lg transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {industry.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900">
                  {industry.name}
                </h3>
                <div className="text-sm text-neutral-500 font-inter mt-2">
                  {industry.count}+ Clients
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="font-inter">Ready to Join Them?</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Become Our Next Success Story
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Schedule a consultation to discuss how we can help transform your IT operations and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Free Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}