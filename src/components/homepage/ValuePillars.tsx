import { Circle, Shield, TrendingUp } from 'lucide-react';

/**
 * W1IT Foundation Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
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
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#050816] mb-4">Our Foundation</h2>
          <p className="text-[16px] text-[#4A4A4A]">The three pillars that guide everything we do</p>
        </div>

        {/* Three Columns - PillarCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="text-center p-8 bg-[#FFFFFF]">
                {/* Icon 64x64 */}
                <div className="flex justify-center mb-4">
                  <Icon
                    className="w-16 h-16"
                    strokeWidth={1.5}
                    style={{ color: pillar.color === '#FFFFFF' ? '#3A81F7' : pillar.color }}
                  />
                </div>

                {/* Heading 20 semibold */}
                <h3 className="text-[20px] font-semibold text-[#050816] mb-3">
                  {pillar.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-[16px] text-[#4A4A4A] max-w-sm mx-auto">
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
