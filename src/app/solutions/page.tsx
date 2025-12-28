'use client';

import Container from '@/components/Container';
import { ArrowRight, CheckCircle2, Cpu, Shield, Globe, BarChart3, Sliders } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const solutions = [
  {
    title: 'Managed IT Solutions',
    description: 'Comprehensive IT management and support designed to keep your small business running smoothly 24/7.',
    icon: <Cpu className="w-10 h-10" />,
    gradient: 'from-blue-500 to-cyan-500',
    outcomes: [
      'Proactive monitoring and maintenance',
      '24/7 help desk support',
      'Reduced downtime and IT costs',
      'Predictable monthly budgeting',
    ],
  },
  {
    title: 'Hardware & Software Integration',
    description: 'Seamlessly integrate new hardware and software into your existing infrastructure for optimal performance.',
    icon: <Sliders className="w-10 h-10" />,
    gradient: 'from-emerald-500 to-green-500',
    outcomes: [
      'Smooth integration with minimal disruption',
      'Improved system compatibility',
      'Enhanced productivity and efficiency',
      'Expert configuration and setup',
    ],
  },
  {
    title: 'Migration & Deployment',
    description: 'Expert migration services to move your systems, data, and applications with zero downtime.',
    icon: <Globe className="w-10 h-10" />,
    gradient: 'from-violet-500 to-purple-500',
    outcomes: [
      'Zero-downtime migrations',
      'Cloud and on-premise deployments',
      'Data integrity and security',
      'Complete testing and validation',
    ],
  },
  {
    title: 'Cybersecurity & Protection',
    description: 'Protect your business from evolving cyber threats with comprehensive security solutions.',
    icon: <Shield className="w-10 h-10" />,
    gradient: 'from-rose-500 to-red-500',
    outcomes: [
      'Multi-layered security protection',
      'Regular security assessments',
      'Virus and malware prevention',
      'Compliance and risk management',
    ],
  },
  {
    title: 'Business Continuity Planning',
    description: 'Ensure your business stays operational with robust backup, recovery, and disaster recovery solutions.',
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: 'from-indigo-500 to-blue-500',
    outcomes: [
      'Automated backup solutions',
      'Quick disaster recovery',
      'Business continuity planning',
      'Minimal data loss protection',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              IT Solutions for Small Business Success
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              From managed IT to migrations, we provide the complete technology solutions your business needs to thrive.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${solution.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 font-body">
                    {solution.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-heading font-semibold text-lg text-neutral-900 mb-5">
                    Key Outcomes:
                  </h4>
                  <ul className="space-y-3">
                    {solution.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-neutral-700 font-body">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <Button href="/contact" className="w-full group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
