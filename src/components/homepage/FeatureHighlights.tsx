import Container from '@/components/Container';
import Card from '@/components/Card';
import { Cpu, RefreshCw, Wrench } from 'lucide-react';

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

export default function FeatureHighlights() {
  return (
    <section className="py-32 bg-white">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
            What Sets Us Apart
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-dark-text mb-6">
            Feature Highlights
          </h2>
          <p className="text-xl text-dark-text/80 max-w-3xl mx-auto font-inter">
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
                <h3 className="font-display font-bold text-xl text-dark-text">
                  {feature.title}
                </h3>
              </div>
              <p className="text-dark-text/80 font-inter leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
