import Container from '@/components/Container';
import { Circle, Shield, TrendingUp } from 'lucide-react';

const valuePillars = [
  {
    title: 'Clarity',
    description: 'Clean, predictable systems built on operational insight.',
    icon: Circle,
    color: '#3A81F7', // Electric Blue
  },
  {
    title: 'Resilience',
    description: 'Fault‑tolerant infrastructure engineered for uptime.',
    icon: Shield,
    color: '#00A878', // Teal Green
  },
  {
    title: 'IT Optimization & Strategy',
    description: 'Clarity‑first planning with scalable pathways forward.',
    icon: TrendingUp,
    color: '#FFFFFF', // White
  },
];

export default function ValuePillars() {
  return (
    <section className="py-20 md:py-32 bg-[#050816]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-8">
                  <Icon
                    className="w-16 h-16 md:w-20 md:h-20"
                    strokeWidth={1}
                    style={{ color: pillar.color }}
                  />
                </div>

                {/* Heading */}
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-body text-base md:text-lg text-white/90 leading-relaxed max-w-sm mx-auto">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
