'use client';

import Container from '@/components/Container';
import { Server, BarChart3, Globe, Database, HelpCircle, Zap } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const serviceCategories = [
  {
    title: 'Managed IT Services',
    description: 'Proactive, comprehensive IT support to ensure your systems are always running at peak performance.',
    icon: <Server className="w-10 h-10" />,
    gradient: 'from-blue-500 to-cyan-500',
    features: [
      '24/7 monitoring and maintenance',
      'Help desk and end-user support',
      'Network and server management',
      'Security and patch management',
      'Backup and disaster recovery',
    ],
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Expert guidance to align your technology with your business goals and drive growth.',
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: 'from-emerald-500 to-green-500',
    features: [
      'IT roadmap and strategy development',
      'Cloud strategy and migration planning',
      'Cybersecurity assessments and planning',
      'IT budget and cost optimization',
      'Digital transformation consulting',
    ],
  },
  {
    title: 'Website Development & Optimization',
    description: 'High-performance websites designed to deliver exceptional user experiences and drive conversions.',
    icon: <Globe className="w-10 h-10" />,
    gradient: 'from-violet-500 to-purple-500',
    features: [
      'Custom website design and development',
      'E-commerce solutions',
      'Performance and speed optimization',
      'Search engine optimization (SEO)',
      'Analytics and conversion rate optimization',
    ],
  },
  {
    title: 'Data & Analytics',
    description: 'Unlock the power of your data to make smarter, data-driven decisions.',
    icon: <Database className="w-10 h-10" />,
    gradient: 'from-indigo-500 to-blue-500',
    features: [
      'Business intelligence (BI) dashboards',
      'Data warehousing and ETL',
      'Predictive analytics and machine learning',
      'Data governance and quality',
      'Reporting and visualization',
    ],
  },
  {
    title: 'On-Demand IT Support',
    description: 'Flexible, as-needed IT support to resolve immediate issues and keep your business moving.',
    icon: <HelpCircle className="w-10 h-10" />,
    gradient: 'from-amber-500 to-orange-500',
    features: [
      'Pay-as-you-go hourly support',
      'Remote and on-site assistance',
      'Troubleshooting and issue resolution',
      'Software installation and configuration',
      'Hardware repair and upgrades',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
       <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Comprehensive IT solutions to meet the needs of modern businesses.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${category.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {category.title}
                  </h3>
                  <p className="text-white/90 font-inter">
                    {category.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-5">
                    Key Features:
                  </h4>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-emerald-500" />
                        <span className="text-neutral-700 font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <Button href="/contact" className="w-full">
                      Request a Quote
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
