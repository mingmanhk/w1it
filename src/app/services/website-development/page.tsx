import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Code, Smartphone, Zap, Globe, Search, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Website Development & Optimization | W1IT Solutions',
  description: 'Professional website development and optimization services. Build fast, responsive, and SEO-friendly websites that drive business growth.',
}

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored websites built with modern frameworks like Next.js, React, and TypeScript for optimal performance.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times with optimized images, code splitting, and edge caching.',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices with metadata, sitemaps, and structured data for better rankings.',
    },
    {
      icon: Globe,
      title: 'E-Commerce Solutions',
      description: 'Robust online stores with secure payment processing and inventory management.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Integrated analytics to track performance, user behavior, and conversion metrics.',
    },
  ]

  const technologies = [
    'Next.js 15+',
    'React 19',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Vercel',
    'AWS',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Website Development & Optimization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Build fast, beautiful, and conversion-focused websites that drive business growth
            </p>
            <Button href="/contact" className="bg-white text-brand-navy hover:bg-gray-100">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-neutral-600">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-brand-blue mb-4" />
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-32 bg-brand-gray-light">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Modern Technology Stack
            </h2>
            <p className="text-lg text-neutral-600">
              We use industry-leading technologies to build robust, scalable websites
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-white px-6 py-3 rounded-lg border border-neutral-200 text-neutral-700 font-medium"
              >
                {tech}
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
              Ready to Build Your Website?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss your project and create a website that exceeds expectations
            </p>
            <Button href="/contact" className="bg-white text-brand-blue hover:bg-gray-100">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
