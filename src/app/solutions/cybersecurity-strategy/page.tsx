import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Shield,
  Lock,
  AlertTriangle,
  FileCheck,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Cybersecurity Strategy Solutions - Risk Management & Compliance Services',
  description:
    'Comprehensive cybersecurity strategy services including risk management, penetration testing, compliance, and security governance for businesses.',
  keywords: [
    'cybersecurity strategy',
    'risk management',
    'penetration testing',
    'security compliance',
    'security governance',
    'SOC 2 compliance',
    'HIPAA security',
    'GDPR compliance',
  ],
  canonical: '/solutions/cybersecurity-strategy',
  openGraph: {
    title: 'Cybersecurity Strategy Solutions | w1IT',
    description: 'Risk management, penetration testing, compliance, and security governance services.',
    type: 'article',
  },
});

export default function CybersecurityStrategyPage() {
  const services = [
    {
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate security risks across your organization.',
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ['Risk Assessment', 'Vulnerability Management', 'Threat Modeling', 'Risk Treatment Plans'],
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to identify security weaknesses before attackers do.',
      icon: <Lock className="w-8 h-8" />,
      features: ['Network Penetration Testing', 'Web Application Testing', 'Social Engineering', 'Wireless Security'],
    },
    {
      title: 'Compliance',
      description: 'Achieve and maintain regulatory compliance with industry standards.',
      icon: <FileCheck className="w-8 h-8" />,
      features: ['SOC 2 Compliance', 'HIPAA Security', 'GDPR Compliance', 'PCI DSS'],
    },
    {
      title: 'Security Governance',
      description: 'Establish security policies, procedures, and organizational structure.',
      icon: <Users className="w-8 h-8" />,
      features: ['Security Policies', 'Incident Response Plans', 'Security Training', 'Governance Framework'],
    },
  ];

  const benefits = [
    'Reduced security incidents and data breaches',
    'Compliance with industry regulations',
    'Improved customer trust and reputation',
    'Lower insurance premiums through risk reduction',
    'Proactive rather than reactive security posture',
    'Clear security roadmap and investment strategy',
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
              <Shield className="w-4 h-4" />
              <span className="font-inter">Security Solution</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Cybersecurity
              <span className="block text-gradient-primary mt-2">Strategy</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Comprehensive security strategy services including risk management, penetration testing, compliance, and security governance.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Get Security Assessment
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
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
                Strategic Security
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
                Beyond Basic Security
              </h2>
              <p className="text-lg text-neutral-600 mb-6 font-inter leading-relaxed">
                Cybersecurity strategy goes beyond installing antivirus software. It's about creating a comprehensive
                framework that protects your business assets, ensures regulatory compliance, and builds customer trust.
              </p>
              <p className="text-lg text-neutral-600 mb-8 font-inter leading-relaxed">
                Our strategic approach combines risk assessment, technical controls, policy development, and ongoing
                governance to create a security posture that evolves with your business and the threat landscape.
              </p>
              <Button href="/contact" size="lg">
                Schedule Security Consultation
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl text-neutral-900 mb-4">
                  Security Maturity Assessment
                </h3>
                <p className="text-neutral-600 font-inter">
                  We evaluate your current security posture across five key domains:
                </p>
              </div>
              <div className="space-y-4">
                {['Governance & Risk Management', 'Technical Controls', 'Compliance', 'Incident Response', 'Security Awareness'].map((domain, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="font-inter font-medium text-neutral-900">{domain}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Approach
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              We provide end-to-end cybersecurity strategy services tailored to your business needs and risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-violet-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-violet-600">{service.icon}</div>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-neutral-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 font-inter leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-violet-500 flex-shrink-0" />
                        <span className="text-neutral-700 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Business Benefits
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Why Invest in Cybersecurity Strategy?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              A strategic approach to cybersecurity delivers measurable business value beyond just protection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-4">
                  Benefit {index + 1}
                </h3>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-violet-500 to-purple-500 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Contact us for a comprehensive security assessment and strategic roadmap tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-violet-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Security Assessment
              </Button>
              <Button
                href="/services/security"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                View Security Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}