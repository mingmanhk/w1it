'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Link from 'next/link';
import {
  Zap,
  Shield,
  TrendingUp,
  Server,
  BarChart3,
  Globe,
  Database,
  CheckCircle2,
  ArrowRight,
  Building,
  Factory,
  Briefcase,
  Store,
  Heart,
  Users,
  MessageSquare,
  Calendar,
  Rocket,
  Sparkles,
  Target,
  Cpu,
  RefreshCw,
  Wrench,
} from 'lucide-react';

export default function Home() {
  // Value proposition cards
  const valuePillars = [
    {
      title: 'Clarity',
      description: 'Clean, predictable systems designed with operational discipline.',
      icon: <Target className="w-10 h-10" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Resilience',
      description: 'Modern, fault‑tolerant infrastructure built for uptime and stability.',
      icon: <Shield className="w-10 h-10" />,
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Performance',
      description: 'Evidence‑driven upgrades that eliminate ambiguity and guesswork.',
      icon: <TrendingUp className="w-10 h-10" />,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  // Core services overview
  const coreServices = [
    {
      title: 'Managed IT Services',
      description: 'Proactive monitoring, help desk support, and on‑site/remote troubleshooting.',
      icon: <Server className="w-10 h-10" />,
      gradient: 'from-blue-500 to-cyan-500',
      includes: [
        'Network setup',
        'Device configuration',
        'Windows repair',
        'Co‑managed IT',
        'Monitoring & maintenance',
      ],
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Clarity‑first consulting for infrastructure, cloud, and cybersecurity.',
      icon: <BarChart3 className="w-10 h-10" />,
      gradient: 'from-emerald-500 to-green-500',
      includes: [
        'Infrastructure planning',
        'Cloud migration',
        'Cybersecurity audits',
        'Process optimization',
        'Technical documentation',
      ],
    },
    {
      title: 'Website Development & Optimization',
      description: 'Client websites built for performance, usability, and measurable growth.',
      icon: <Globe className="w-10 h-10" />,
      gradient: 'from-violet-500 to-purple-500',
      includes: [
        'Website creation',
        'Feature implementation',
        'UX improvements',
        'SEO & traffic growth',
        'Analytics & conversion optimization',
      ],
    },
    {
      title: 'Data & Analytics',
      description: 'Turn raw data into decisions with modern analytics.',
      icon: <Database className="w-10 h-10" />,
      gradient: 'from-indigo-500 to-blue-500',
      includes: [
        'BI dashboards',
        'Predictive analytics',
        'Reporting automation',
        'Data cleanup',
      ],
    },
  ];

  // Feature highlights
  const featureHighlights = [
    {
      title: 'Modern Infrastructure, Built Right',
      description: 'High availability, zero‑trust security, and scalable automation.',
      icon: <Cpu className="w-10 h-10" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Automation That Works for You',
      description: 'Reduce manual overhead with predictable, repeatable workflows.',
      icon: <RefreshCw className="w-10 h-10" />,
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Migration Without the Chaos',
      description: 'Structured, step‑by‑step modernization with zero guesswork.',
      icon: <Wrench className="w-10 h-10" />,
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  // Industries served
  const industries = [
    { name: 'Healthcare', icon: <Heart className="w-8 h-8" />, color: 'text-rose-500' },
    { name: 'Finance', icon: <Briefcase className="w-8 h-8" />, color: 'text-emerald-500' },
    { name: 'Manufacturing', icon: <Factory className="w-8 h-8" />, color: 'text-amber-500' },
    { name: 'Small Business', icon: <Building className="w-8 h-8" />, color: 'text-blue-500' },
    { name: 'Startups', icon: <Rocket className="w-8 h-8" />, color: 'text-violet-500' },
    { name: 'Professional Services', icon: <Users className="w-8 h-8" />, color: 'text-indigo-500' },
  ];

  // Testimonials
  const testimonials = [
    {
      quote: 'W1IT provided the clarity and expertise we needed to stabilize our systems and scale confidently.',
      author: 'CTO, Healthcare Startup',
    },
    {
      quote: 'Their structured approach to automation significantly reduced our maintenance overhead.',
      author: 'Operations Director, Manufacturing Firm',
    },
    {
      quote: 'Victor\'s attention to detail and clear documentation made our cloud migration seamless and stress-free.',
      author: 'IT Manager, Financial Services',
    },
    {
      quote: 'The website optimization work resulted in a 40% increase in page load speed and better user engagement.',
      author: 'Marketing Director, E-commerce Company',
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
              <Zap className="w-4 h-4" />
              <span className="font-inter">Operational Clarity</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Modern IT Infrastructure
              <span className="block text-gradient-primary mt-2">Built for Clarity & Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              We help Seattle businesses transform IT chaos into operational clarity. From infrastructure modernization to website optimization — we deliver precision, resilience, and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Value Pillars */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Foundation
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Built on Three Pillars of Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Every solution we deliver is grounded in these core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valuePillars.map((pillar, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${pillar.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {pillar.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-neutral-700 font-inter text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Services Overview */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Core Services
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              From infrastructure management to strategic consulting — everything your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/90 font-inter">
                    {service.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4">
                    Includes:
                  </h4>
                  <div className="space-y-3">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-neutral-700 font-inter">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    href="/services"
                    variant="outline"
                    className="w-full mt-6"
                  >
                    Learn More About {service.title}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature Highlights */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              What Sets Us Apart
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Feature Highlights
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Our approach combines technical excellence with operational clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureHighlights.map((feature, index) => (
              <Card
                key={index}
                hoverable
                padding="lg"
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {feature.description}
                </p>
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
              Industry Expertise
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Tailored solutions for diverse business environments.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                hoverable
                padding="lg"
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`${industry.color} mb-4 flex justify-center`}>
                  {industry.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-900">
                  {industry.name}
                </h3>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/industries" variant="outline" size="lg">
              Explore All Industries
            </Button>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Client Success
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Trusted by businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-amber-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-700 font-inter text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-neutral-600 font-inter font-medium">
                    — {testimonial.author}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <MessageSquare className="w-4 h-4" />
              <span className="font-inter">Ready to Modernize?</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Schedule a consultation to discuss how we can help transform your IT operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule a Consultation
              </Button>
              <Button
                href="/solutions"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Explore Strategic Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
