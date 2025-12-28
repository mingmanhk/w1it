import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Wrench,
  Cpu,
  Code,
  Server,
  Zap,
  CheckCircle2,
  ArrowRight,
  Users,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Custom IT Solutions - Tailored Technology Packages & Bespoke Development',
  description:
    'Bespoke IT solutions and tailored technology packages designed for unique business needs. Custom development, integration services, and specialized solutions.',
  keywords: [
    'custom IT solutions',
    'bespoke technology',
    'tailored IT packages',
    'custom software development',
    'integration services',
    'specialized IT solutions',
    'business-specific technology',
  ],
  canonical: '/solutions/custom-it-solutions',
  openGraph: {
    title: 'Custom IT Solutions | w1IT',
    description: 'Tailored packages and bespoke technology solutions for unique business needs.',
    type: 'article',
  },
});

export default function CustomITSolutionsPage() {
  const solutionTypes = [
    {
      title: 'Tailored Packages',
      description: 'Customized service bundles combining our standard offerings in unique ways.',
      icon: <Wrench className="w-8 h-8" />,
      examples: [
        'Hybrid support models (onsite + remote)',
        'Industry-specific compliance packages',
        'Growth-stage business bundles',
        'Multi-location enterprise packages',
      ],
    },
    {
      title: 'Bespoke Solutions',
      description: 'Completely custom-built technology solutions for unique business challenges.',
      icon: <Code className="w-8 h-8" />,
      examples: [
        'Custom workflow automation systems',
        'Proprietary data processing pipelines',
        'Specialized reporting and analytics',
        'Unique customer-facing applications',
      ],
    },
    {
      title: 'Integration Services',
      description: 'Connecting disparate systems and creating seamless data flows.',
      icon: <Server className="w-8 h-8" />,
      examples: [
        'API development and integration',
        'Legacy system modernization',
        'Cloud-to-on-premise connectivity',
        'Third-party software integration',
      ],
    },
    {
      title: 'Custom Development',
      description: 'Building software applications from scratch to meet specific requirements.',
      icon: <Cpu className="w-8 h-8" />,
      examples: [
        'Web application development',
        'Mobile app development',
        'Desktop software solutions',
        'Embedded systems programming',
      ],
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business processes, challenges, and goals.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: '2',
      title: 'Solution Design',
      description: 'Architecting the optimal technology solution for your needs.',
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      step: '3',
      title: 'Development & Implementation',
      description: 'Building and deploying the custom solution with rigorous testing.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: '4',
      title: 'Support & Evolution',
      description: 'Ongoing maintenance, updates, and feature enhancements.',
      icon: <Zap className="w-6 h-6" />,
    },
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
              <Wrench className="w-4 h-4" />
              <span className="font-body">Bespoke Solutions</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Custom
              <span className="block text-gradient-primary mt-2">IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Tailored packages and bespoke technology solutions designed specifically for your unique business needs and challenges.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Discuss Your Custom Needs
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-body">
                Tailored Approach
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
                When Standard Solutions Don&apos;t Fit
              </h2>
              <p className="text-lg text-neutral-600 mb-6 font-body leading-relaxed">
                Every business is unique, with specific processes, challenges, and goals that off-the-shelf solutions
                often can&apos;t address. That&apos;s where our custom IT solutions come in.
              </p>
              <p className="text-lg text-neutral-600 mb-8 font-body leading-relaxed">
                We combine our deep technical expertise with a thorough understanding of your business to create
                technology solutions that fit your exact requirements—whether that means customizing existing services
                or building something entirely new.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start Custom Project
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Browse Standard Services
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                  Ideal For Businesses That Need:
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  'Unique industry-specific requirements',
                  'Integration of multiple disparate systems',
                  'Proprietary processes or workflows',
                  'Scalability beyond standard offerings',
                  'Specialized compliance needs',
                  'Competitive differentiation through technology',
                ].map((need, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="font-body font-medium text-neutral-900">{need}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Types */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-body">
              Our Custom Solutions
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Types of Custom Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              From tailored service packages to completely bespoke development, we offer multiple approaches to custom solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionTypes.map((solution, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-amber-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-amber-600">{solution.icon}</div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 font-body leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-3">
                    {solution.examples.map((example, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-neutral-700 font-body">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-body">
              Our Process
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              How We Build Custom Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-body">
              A structured, collaborative approach to ensure your custom solution delivers maximum value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading font-bold text-2xl text-white">{step.step}</span>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-amber-600">{step.icon}</div>
                </div>
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 font-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-500 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8">
              Have Unique Technology Needs?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-body">
              Let&apos;s discuss your specific requirements and explore how custom IT solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-amber-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Custom Solution Consultation
              </Button>
              <Button
                href="/case-studies"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                View Custom Solution Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}