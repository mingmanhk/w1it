'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
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

  // Enhanced Testimonials with Company Logos/Names
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

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section with Stronger Narrative */}
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark bg-hero-mobile md:bg-hero-desktop text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }} />

        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-10 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span className="font-inter">Operational Clarity for Seattle Businesses</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-10 leading-tight animate-fade-in-up">
              Transform IT Chaos Into
              <span className="block text-gradient-primary mt-3">Operational Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-14 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              We help Seattle businesses modernize infrastructure, optimize websites, and solve complex IT challenges with precision and clarity. Stop fighting technology — start leveraging it for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300">
                <Server className="w-5 h-5 mr-3" />
                Explore Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 pt-10 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <p className="text-sm text-neutral-400 font-inter mb-6">Trusted by Seattle businesses across industries</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
                <div className="text-center">
                  <div className="font-display font-bold text-3xl text-white mb-1">10+</div>
                  <div className="text-xs text-neutral-400 font-inter">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl text-white mb-1">200+</div>
                  <div className="text-xs text-neutral-400 font-inter">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl text-white mb-1">99.9%</div>
                  <div className="text-xs text-neutral-400 font-inter">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl text-white mb-1">50+</div>
                  <div className="text-xs text-neutral-400 font-inter">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Value Pillars with More Whitespace */}
      <section className="py-40 bg-white">
        <Container>
          <div className="text-center mb-32">
            <div className="inline-block px-5 py-2.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-inter">
              Our Foundation
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-8">
              Built on Three Pillars of Excellence
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Every solution we deliver is grounded in these core principles that define our approach to modern IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {valuePillars.map((pillar, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-100 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${pillar.gradient} p-10 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-3xl mb-6">
                    {pillar.title}
                  </h3>
                </div>
                <div className="p-10">
                  <p className="text-neutral-700 font-inter text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <p className="text-sm text-neutral-500 font-inter mb-3">How this benefits you:</p>
                    <ul className="space-y-2">
                      {pillar.title === 'Clarity' && (
                        <>
                          <li className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span>Reduced confusion and faster decision-making</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span>Clear documentation and processes</span>
                          </li>
                        </>
                      )}
                      {pillar.title === 'Resilience' && (
                        <>
                          <li className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            <span>Minimized downtime and business disruption</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                            <span>Robust systems that withstand challenges</span>
                          </li>
                        </>
                      )}
                      {pillar.title === 'Performance' && (
                        <>
                          <li className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                            <span>Faster systems and improved productivity</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                            <span>Data-driven improvements and optimizations</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced Core Services Overview */}
      <section className="py-40 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-32">
            <div className="inline-block px-5 py-2.5 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-6 font-inter">
              Core Services
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-8">
              Comprehensive IT Solutions for Modern Businesses
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-inter leading-relaxed">
              From proactive infrastructure management to strategic consulting — everything your Seattle business needs to thrive in today&apos;s digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreServices.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${service.gradient} p-10 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-3xl mb-6">
                    {service.title}
                  </h3>
                  <p className="text-white/90 font-inter text-lg">
                    {service.description}
                  </p>
                </div>
                <div className="p-10">
                  <h4 className="font-display font-semibold text-xl text-neutral-900 mb-6">
                    What&apos;s Included:
                  </h4>
                  <div className="space-y-4 mb-8">
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-4 p-3 bg-neutral-50 rounded-lg hover:bg-white transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-700 font-inter text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    href="/services"
                    variant="outline"
                    className="w-full py-4 text-lg font-medium hover:bg-primary-50 transition-colors"
                  >
                    Explore {service.title} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Services CTA */}
          <div className="text-center mt-20 pt-16 border-t border-neutral-200">
            <p className="text-xl text-neutral-600 mb-8 font-inter">
              Need a custom solution or have specific requirements?
            </p>
            <Button
              href="/contact"
              size="xl"
              className="bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Schedule Custom Consultation
            </Button>
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

      {/* Enhanced Testimonials Section */}
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
