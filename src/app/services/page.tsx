'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Server,
  BarChart3,
  Globe,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
  Cpu as CpuIcon,
  Target,
  Award,
  Clock,
  BookOpen,
  RefreshCw,
  LineChart,
  MessageSquare,
  Calendar,
  ChevronRight,
  Sparkles,
  Rocket,
  ShieldCheck,
  TrendingUp as TrendingUpIcon,
  Settings,
  Check,
  Handshake,
  FileText,
} from 'lucide-react';

export default function ServicesPage() {
  // Enhanced services data matching the recommended structure
  const services = [
    {
      id: 'managed-it',
      title: 'Managed IT Services',
      headline: 'Proactive, scalable IT management for growing businesses.',
      description: 'Modern businesses need stable, predictable systems. We provide end‑to‑end IT management designed to reduce downtime, improve performance, and keep your environment secure.',
      icon: <Server className="w-12 h-12" />,
      gradient: 'from-blue-500 to-cyan-500',
      subpoints: [
        'Remote & On‑Site IT Support',
        'SLA‑Guaranteed Help Desk',
        'Co‑Managed IT Services',
        'Network Setup, Optimization & Monitoring',
        'Computer & Printer Setup',
        'Microsoft Windows Repair',
        'Hardware Troubleshooting & Replacement',
      ],
      strengthHighlight: 'With years of enterprise infrastructure experience, we design systems that are stable, scalable, and easy for teams to manage. Our troubleshooting workflows are modular, evidence‑driven, and built for long‑term reliability.',
    },
    {
      id: 'consulting',
      title: 'IT Consulting & Strategy',
      headline: 'Clarity‑first consulting for infrastructure, modernization, and automation.',
      description: 'We help organizations make smart, future‑proof technology decisions. Our consulting focuses on reducing complexity, improving efficiency, and aligning technology with business goals.',
      icon: <BarChart3 className="w-12 h-12" />,
      gradient: 'from-emerald-500 to-green-500',
      subpoints: [
        'Infrastructure Planning & Architecture',
        'Cloud Migration & Hybrid Strategy',
        'Cybersecurity Audits & Hardening',
        'Process Optimization & Automation',
        'Technical Documentation & API Guides',
        'IT Training & Knowledge Transfer',
      ],
      strengthHighlight: 'Victor specializes in operational clarity — breaking down complex systems into actionable steps. His documentation and consulting frameworks help teams implement, scale, and troubleshoot with confidence.',
    },
    {
      id: 'web-dev',
      title: 'Website Development & Optimization',
      headline: 'Client websites built for performance, usability, and measurable growth.',
      description: 'Beyond IT infrastructure, we help clients build and optimize websites that perform under real‑world conditions. Our focus is on clean architecture, intuitive UX, and data‑driven improvements.',
      icon: <Globe className="w-12 h-12" />,
      gradient: 'from-violet-500 to-purple-500',
      subpoints: [
        'Website Creation (client sites)',
        'Feature Implementation & Enhancements',
        'UX Improvements & Accessibility',
        'SEO Strategy & Traffic Growth',
        'Site Analytics & Conversion Optimization',
        'Performance & Speed Optimization',
      ],
      strengthHighlight: 'You don\'t just "build websites" — you improve them. You help clients implement features, enhance user experience, and increase traffic through technical SEO and analytics‑driven decisions.',
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      headline: 'Turn raw data into decisions with modern analytics.',
      description: 'We help businesses understand their data and use it to drive smarter decisions.',
      icon: <Database className="w-12 h-12" />,
      gradient: 'from-indigo-500 to-blue-500',
      subpoints: [
        'Business Intelligence Dashboards',
        'Predictive Analytics',
        'Reporting Automation',
        'Data Cleanup & Transformation',
        'AI‑Assisted Insights',
      ],
      strengthHighlight: 'You bring a strategic lens to data — helping clients extract insights that directly support business outcomes.',
    },
    {
      id: 'on-demand',
      title: 'On‑Demand IT Support',
      headline: 'Fast, reliable help when you need it most.',
      description: 'When something breaks, you need a calm, experienced professional who can diagnose and resolve issues quickly.',
      icon: <Zap className="w-12 h-12" />,
      gradient: 'from-amber-500 to-orange-500',
      subpoints: [
        'Virus & Malware Removal',
        'Data Recovery',
        'High‑Speed Internet Setup',
        'Emergency Remote Support',
        'Computer Troubleshooting & Repair',
      ],
      strengthHighlight: 'You\'ve resolved hundreds of urgent IT incidents — from NAS failures to network outages. Your approach is calm, methodical, and focused on root‑cause resolution.',
    },
  ];

  // Strategic solutions section
  const strategicSolutions = [
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      headline: 'Modernize your systems, processes, and workflows.',
      description: 'We help businesses transition from legacy systems to modern, efficient, cloud‑ready environments.',
      icon: <RefreshCw className="w-12 h-12" />,
      gradient: 'from-purple-500 to-pink-500',
      outcomes: [
        'Reduced operational overhead',
        'Improved system reliability',
        'Faster deployment cycles',
        'Better team productivity',
      ],
      includes: [
        'Cloud migration planning',
        'Hybrid infrastructure design',
        'Automation workflows',
        'Legacy system modernization',
      ],
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Risk Management',
      headline: 'Protect your business with modern security practices.',
      description: 'Security isn\'t optional — it\'s foundational. We help organizations identify risks, strengthen defenses, and maintain compliance.',
      icon: <ShieldCheck className="w-12 h-12" />,
      gradient: 'from-red-500 to-orange-500',
      outcomes: [
        'Reduced security vulnerabilities',
        'Stronger compliance posture',
        'Improved incident response',
        'Peace of mind',
      ],
      includes: [
        'Security audits',
        'Hardening & patching',
        'Zero‑trust strategy',
        'Backup & disaster recovery planning',
      ],
    },
    {
      id: 'data-solutions',
      title: 'Data & Analytics Solutions',
      headline: 'Make smarter decisions with actionable insights.',
      description: 'We turn your data into a strategic asset.',
      icon: <LineChart className="w-12 h-12" />,
      gradient: 'from-indigo-500 to-blue-500',
      outcomes: [
        'Clear visibility into performance',
        'Predictive insights',
        'Automated reporting',
        'Better decision‑making',
      ],
      includes: [
        'BI dashboards',
        'Predictive analytics',
        'Data cleanup & transformation',
        'Reporting automation',
      ],
    },
    {
      id: 'website-optimization',
      title: 'Website Optimization & Digital Growth',
      headline: 'Improve performance, increase traffic, and enhance user experience.',
      description: 'Your website is your digital storefront — we help you make it faster, clearer, and more effective.',
      icon: <TrendingUpIcon className="w-12 h-12" />,
      gradient: 'from-green-500 to-teal-500',
      outcomes: [
        'Higher traffic',
        'Better user engagement',
        'Faster load times',
        'Increased conversions',
      ],
      includes: [
        'SEO strategy',
        'UX improvements',
        'Feature implementation',
        'Analytics & conversion tracking',
      ],
    },
    {
      id: 'custom-solutions',
      title: 'Custom IT Solutions',
      headline: 'Tailored solutions for unique business challenges.',
      description: 'Every business is different — we design solutions that fit your exact needs.',
      icon: <Settings className="w-12 h-12" />,
      gradient: 'from-gray-600 to-gray-800',
      outcomes: [
        'Reduced complexity',
        'Better alignment with business goals',
        'Long‑term scalability',
      ],
      includes: [
        'Custom automation',
        'Specialized integrations',
        'Technical documentation',
        'Workflow optimization',
      ],
    },
  ];

  // Why W1IT section
  const whyW1IT = [
    {
      title: 'Certified Expertise',
      description: 'Deep expertise across infrastructure, cloud, and automation.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Modular Workflows',
      description: 'Modular troubleshooting workflows built for reliability.',
      icon: <CpuIcon className="w-8 h-8" />,
    },
    {
      title: 'Professional Documentation',
      description: 'Professional documentation and communication.',
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      title: 'Measurable Outcomes',
      description: 'Strategic consulting with measurable outcomes.',
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: '24/7 Support',
      description: '24/7 support with guaranteed response times.',
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: 'Long‑Term Partnership',
      description: 'A partner who cares about long‑term stability, not quick fixes.',
      icon: <Handshake className="w-8 h-8" />,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with enhanced title */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Server className="w-4 h-4" />
              <span className="font-inter">Professional IT Services</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              IT Services & Consulting
              <span className="block text-gradient-primary mt-2">Built for Clarity and Growth</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              At W1IT, we deliver modern IT solutions that combine deep technical expertise with strategic clarity. Whether you're optimizing infrastructure, launching a new website, or solving persistent network issues, we bring precision, resilience, and results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule a Free Consultation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/solutions" variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                Explore Strategic Solutions
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Comprehensive Services
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              From proactive IT management to strategic consulting and specialized support—everything your business needs to thrive.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-3xl text-neutral-900">
                          {service.title}
                        </h3>
                        <p className="text-xl text-neutral-600 font-inter mt-2">
                          {service.headline}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-neutral-700 mb-8 font-inter leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-display font-semibold text-xl text-neutral-900 mb-4">
                        Services Include:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.subpoints.map((point, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg hover:bg-white transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-neutral-700 font-inter">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-neutral-50 to-white p-6 rounded-2xl border border-neutral-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <Target className="w-6 h-6 text-primary-500" />
                        <h5 className="font-display font-semibold text-lg text-neutral-900">
                          Victor's Strength Highlight
                        </h5>
                      </div>
                      <p className="text-neutral-700 font-inter leading-relaxed">
                        {service.strengthHighlight}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <Card className="border-2 border-neutral-200 hover:border-primary-300 transition-colors">
                        <div className="p-6">
                          <h4 className="font-display font-bold text-xl text-neutral-900 mb-4">
                            Ready to Get Started?
                          </h4>
                          <p className="text-neutral-600 font-inter mb-6">
                            Let's discuss how {service.title.toLowerCase()} can benefit your business.
                          </p>
                          <Button
                            href="/contact"
                            className="w-full justify-center bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                          >
                            Schedule Consultation
                            <Calendar className="w-4 h-4 ml-2" />
                          </Button>
                          <div className="mt-6 pt-6 border-t border-neutral-200">
                            <p className="text-sm text-neutral-500 font-inter mb-3">
                              What's included:
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm text-neutral-600 font-inter">30-minute discovery call</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm text-neutral-600 font-inter">Custom solution proposal</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Check className="w-4 h-4 text-emerald-500" />
                                <span className="text-sm text-neutral-600 font-inter">No commitment required</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Strategic Solutions Section */}
      <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Strategic Outcomes
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Strategic IT Solutions That Drive Real Business Outcomes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              W1IT delivers strategic, outcome‑driven IT solutions that help organizations modernize, scale, and operate with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicSolutions.map((solution, index) => (
              <Card
                key={solution.id}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${solution.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 font-inter text-lg">
                    {solution.headline}
                  </p>
                </div>
                <div className="p-8">
                  <p className="text-neutral-700 font-inter mb-6">
                    {solution.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-display font-semibold text-lg text-neutral-900 mb-3">
                      Outcomes:
                    </h4>
                    <div className="space-y-2">
                      {solution.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-neutral-600 font-inter">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-semibold text-lg text-neutral-900 mb-3">
                      Includes:
                    </h4>
                    <div className="space-y-2">
                      {solution.includes.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <ChevronRight className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-neutral-600 font-inter">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why W1IT Section */}
      <section className="py-32 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Why Choose W1IT
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Built on Clarity, Resilience, and Technical Excellence
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              We combine deep expertise with a commitment to long‑term stability and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyW1IT.map((item, index) => (
              <div
                key={index}
                className="animate-fade-in-up p-8 border-2 border-neutral-200 rounded-2xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                    <div className="text-primary-500">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="font-inter">Ready to Transform Your IT?</span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Let's Build Something Stable, Scalable, and Smart
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Schedule a free consultation to discuss your specific needs and discover the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Free Consultation
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
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-2">30-Minute Discovery Call</h4>
                    <p className="text-white/80 text-sm font-inter">Understand your challenges and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-2">Custom Solution Proposal</h4>
                    <p className="text-white/80 text-sm font-inter">Tailored recommendations for your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-2">No Commitment Required</h4>
                    <p className="text-white/80 text-sm font-inter">Explore options with zero pressure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}