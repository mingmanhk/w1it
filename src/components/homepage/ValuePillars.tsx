import { Circle, Shield, TrendingUp } from 'lucide-react';

/**
 * W1IT Foundation Component (Three Pillars)
 * Matches: Section / Foundation
 * Components: PillarCard / Clarity, Resilience, Optimization
 * Specs: Three columns, Icon 64x64, Heading 20 bold, Description 16 regular, Spacing 16px then 12px
 */

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
    <section className="py-16 md:py-24 bg-[#050816]">
      <div className="max-w-content mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-heading-lg text-white mb-4">Our Foundation</h2>
          <p className="text-body text-[#D9D9D9]">The three pillars that guide everything we do</p>
        </div>

        {/* Three Columns - PillarCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon 64x64 */}
                <div className="flex justify-center mb-4">
                  <Icon
                    className="w-16 h-16"
                    strokeWidth={1.5}
                    style={{ color: pillar.color }}
                  />
                </div>

                {/* Heading 20 bold - Spacing 16px */}
                <h3 className="text-heading-md text-white mb-3">
                  {pillar.title}
                </h3>

                {/* Description 16 regular - Spacing 12px */}
                <p className="text-body text-[#D9D9D9] max-w-sm mx-auto">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
