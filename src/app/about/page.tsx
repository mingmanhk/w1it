'use client';

import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import {
  Target,
  Shield,
  TrendingUp,
  Users,
  Zap,
  FileText,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Rocket,
  Sparkles,
  MessageSquare,
  BookOpen,
  Cpu,
  RefreshCw,
  Wrench,
  Linkedin,
  Github,
  ExternalLink,
} from 'lucide-react';

export default function AboutPage() {
  // Values grid
  const values = [
    {
      title: 'Clarity',
      description: 'We break down complex systems into simple, actionable steps.',
      icon: <Target className="w-10 h-10" />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Resilience',
      description: 'We design infrastructure and workflows that withstand real‑world demands.',
      icon: <Shield className="w-10 h-10" />,
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Performance',
      description: 'Every solution is optimized for speed, reliability, and long‑term growth.',
      icon: <TrendingUp className="w-10 h-10" />,
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Partnership',
      description: 'We work alongside clients as trusted advisors, not just service providers.',
      icon: <Users className="w-10 h-10" />,
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  // Approach framework
  const approachSteps = [
    {
      step: '1',
      title: 'Diagnose with precision',
      description: 'We identify root causes, not symptoms.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      step: '2',
      title: 'Design for clarity',
      description: 'Every solution is documented, structured, and easy to follow.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: '3',
      title: 'Implement with discipline',
      description: 'We use modern best practices and repeatable workflows.',
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      step: '4',
      title: 'Optimize continuously',
      description: 'We monitor, refine, and improve over time.',
      icon: <RefreshCw className="w-8 h-8" />,
    },
  ];

  // Why clients choose W1IT
  const clientBenefits = [
    {
      title: 'Clear communication',
      description: 'Transparent updates and understandable explanations.',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      title: 'Enterprise‑grade expertise',
      description: 'Deep knowledge across infrastructure, cloud, and automation.',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'Fast response times',
      description: 'Guaranteed response times for critical issues.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Modern, scalable solutions',
      description: 'Future‑proof technology designed to grow with your business.',
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: 'A partner who cares',
      description: 'Long‑term stability, not quick fixes.',
      icon: <Users className="w-8 h-8" />,
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
              <Target className="w-4 h-4" />
              <span className="font-inter">Our Mission</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Clarity. Stability.
              <span className="block text-gradient-primary mt-2">Modern IT done right.</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              W1IT was founded on a simple belief: technology should empower people, not overwhelm them.
              We help businesses modernize their infrastructure, optimize their websites, and solve complex IT challenges with precision and operational clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                View Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-inter">
              Our Mission
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-8">
              To deliver modern IT solutions that are stable, scalable, and easy to understand — empowering businesses to operate with confidence and clarity.
            </h2>
          </div>
        </Container>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Values
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Built on Four Core Principles
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              These values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${value.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {value.title}
                  </h3>
                </div>
                <div className="p-8">
                  <p className="text-neutral-700 font-inter text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Founder Bio */}
      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-inter">
                Founder & Principal Consultant
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-8">
                Victor Lam
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 font-inter text-lg leading-relaxed mb-6">
                  Victor is an IT consultant, infrastructure specialist, and technical strategist with years of experience solving complex problems across storage, networking, virtualization, automation, and web optimization.
                </p>
                <p className="text-neutral-700 font-inter text-lg leading-relaxed mb-6">
                  He is known for:
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 font-inter">Evidence‑driven troubleshooting</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 font-inter">Clear, professional documentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 font-inter">Modernization without chaos</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 font-inter">Deep expertise in remote shell environments</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 font-inter">Helping clients build stable, scalable systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-neutral-700 font-inter">Improving websites through UX, SEO, and analytics</span>
                  </li>
                </ul>
                <p className="text-neutral-700 font-inter text-lg leading-relaxed">
                  Victor's approach is calm, methodical, and rooted in operational clarity — ensuring clients always understand the "why" behind every recommendation.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                <a
                  href="https://www.linkedin.com/in/mingmanhk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-inter font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/mingmanhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  title="View GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-inter font-medium">GitHub</span>
                </a>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl border-2 border-neutral-200">
                <h3 className="font-display font-bold text-2xl text-neutral-900 mb-6">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                    <div className="font-display font-bold text-3xl text-primary-500 mb-2">10+</div>
                    <div className="font-inter text-neutral-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                    <div className="font-display font-bold text-3xl text-primary-500 mb-2">200+</div>
                    <div className="font-inter text-neutral-600">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                    <div className="font-display font-bold text-3xl text-primary-500 mb-2">99.9%</div>
                    <div className="font-inter text-neutral-600">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                    <div className="font-display font-bold text-3xl text-primary-500 mb-2">50+</div>
                    <div className="font-inter text-neutral-600">Clients Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach Framework */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Approach
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              A Structured Framework for Success
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              Our four‑step approach ensures consistent, high‑quality results for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-8 border-2 border-neutral-200 rounded-2xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <div className="text-primary-500">
                      {step.icon}
                    </div>
                  </div>
                  <div className="font-display font-bold text-2xl text-primary-500">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Clients Choose W1IT */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Client Benefits
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Why Clients Choose W1IT
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              What sets us apart and keeps clients coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientBenefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-8 border-2 border-neutral-200 rounded-2xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <div className="text-primary-500">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
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
              <Sparkles className="w-4 h-4" />
              <span className="font-inter">Ready to Partner?</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Let's Build Something Stable, Scalable, and Smart
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Schedule a free consultation to discuss your specific needs and discover how we can help transform your IT operations.
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
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <Rocket className="w-5 h-5 mr-3" />
                Explore Our Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}