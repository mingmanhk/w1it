import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Zap, Search, Target, TrendingUp, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website Optimization Solutions | W1IT Solutions',
  description: 'Transform your website performance with expert optimization. Improve speed, SEO, conversions, and user experience.',
}

export default function WebsiteOptimizationPage() {
  const services = [
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Dramatically improve page load speeds with image optimization, code splitting, and caching strategies.',
    },
    {
      icon: Search,
      title: 'SEO Enhancement',
      description: 'Boost search rankings with technical SEO improvements, metadata optimization, and structured data.',
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization',
      description: 'Increase conversions through A/B testing, UX improvements, and strategic call-to-action placement.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Data-driven optimization using advanced analytics to identify and fix performance bottlenecks.',
    },
    {
      icon: Users,
      title: 'User Experience Audit',
      description: 'Comprehensive UX analysis to improve navigation, accessibility, and user satisfaction.',
    },
    {
      icon: Shield,
      title: 'Security Hardening',
      description: 'Implement security best practices, SSL, and protection against common vulnerabilities.',
    },
  ]

  const benefits = [
    {
      metric: '3x Faster',
      description: 'Average page load speed improvement',
    },
    {
      metric: '50%+',
      description: 'Increase in organic search traffic',
    },
    {
      metric: '2x Higher',
      description: 'Conversion rate improvements',
    },
    {
      metric: '90+',
      description: 'Google PageSpeed score',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Website Optimization Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transform your website into a high-performance, conversion-focused powerhouse
            </p>
            <Button href="/contact" className="bg-white text-brand-navy hover:bg-gray-100">
              Get Free Audit
            </Button>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-neutral-600">
              Real performance improvements from our optimization services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.metric} className="text-center">
                <div className="text-5xl font-heading font-bold text-brand-blue mb-2">
                  {benefit.metric}
                </div>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-brand-gray-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Optimization Services
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive solutions to maximize your website&apos;s potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Optimize Your Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free performance audit and discover optimization opportunities
            </p>
            <Button href="/contact" className="bg-white text-brand-blue hover:bg-gray-100">
              Request Free Audit
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
