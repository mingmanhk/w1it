'use client';

import Container from '@/components/Container';
import { ArrowRight, CheckCircle2, Cpu, Shield, Globe, BarChart3, Sliders } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const solutions = [
  {
    title: 'Digital Transformation',
    description: 'Modernize your business from the ground up with our comprehensive digital transformation solutions.',
    icon: <Cpu className="w-10 h-10" />,
    gradient: 'from-blue-500 to-cyan-500',
    outcomes: [
      'Increased operational efficiency',
      'Enhanced customer experience',
      'Improved data-driven decision making',
      'Greater business agility and scalability',
    ],
  },
  {
    title: 'Cybersecurity & Risk Management',
    description: 'Protect your business from evolving cyber threats with our proactive and strategic cybersecurity solutions.',
    icon: <Shield className="w-10 h-10" />,
    gradient: 'from-emerald-500 to-green-500',
    outcomes: [
      'Reduced risk of data breaches and cyber attacks',
      'Improved compliance with industry regulations',
      'Enhanced brand reputation and customer trust',
      'Increased business resilience',
    ],
  },
  {
    title: 'Website Optimization & Growth',
    description: 'Transform your website into a powerful engine for growth with our optimization and analytics services.',
    icon: <Globe className="w-10 h-10" />,
    gradient: 'from-violet-500 to-purple-500',
    outcomes: [
      'Increased website traffic and lead generation',
      'Improved user engagement and conversion rates',
      'Enhanced brand visibility and online presence',
      'Data-driven insights for continuous improvement',
    ],
  },
  {
    title: 'Data & Analytics Solutions',
    description: 'Leverage the power of data to gain a competitive edge and drive business growth.',
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: 'from-indigo-500 to-blue-500',
    outcomes: [
      'Actionable insights from your data',
      'Improved decision-making at all levels',
      'Enhanced operational efficiency',
      'New revenue streams and business opportunities',
    ],
  },
  {
    title: 'Custom IT Solutions',
    description: 'Bespoke IT solutions designed to meet your unique business challenges and goals.',
    icon: <Sliders className="w-10 h-10" />,
    gradient: 'from-amber-500 to-orange-500',
    outcomes: [
      'Solutions tailored to your specific needs',
      'Increased efficiency and productivity',
      'Competitive advantage in your industry',
      'Long-term value and ROI',
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
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              Strategic Solutions
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Outcome-focused solutions to solve your most complex business challenges.
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
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 font-inter">
                    {solution.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-5">
                    Key Outcomes:
                  </h4>
                  <ul className="space-y-3">
                    {solution.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-neutral-700 font-inter">{outcome}</span>
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
