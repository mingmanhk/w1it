import Container from '@/components/Container';
import Card from '@/components/Card';
import { Target, Shield, TrendingUp } from 'lucide-react';

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

export default function ValuePillars() {
  return (
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
  );
}
