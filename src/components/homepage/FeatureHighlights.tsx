import { Cpu, RefreshCw, Wrench } from 'lucide-react';

/**
 * W1IT Feature Highlights Component
 * Matches: W1IT Design System
 * Specs: Three columns, Icons 48x48, Clean minimal design
 */

const featureHighlights = [
  {
    title: 'Modern Infrastructure, Built Right',
    description: 'High availability, zero‑trust security, and scalable automation.',
    icon: Cpu,
  },
  {
    title: 'Automation That Works for You',
    description: 'Reduce manual overhead with predictable, repeatable workflows.',
    icon: RefreshCw,
  },
  {
    title: 'Migration Without the Chaos',
    description: 'Structured, step‑by‑step modernization with zero guesswork.',
    icon: Wrench,
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-heading-lg text-[#050816] mb-4">What Sets Us Apart</h2>
          <p className="text-body text-[#4A4A4A] max-w-3xl mx-auto">
            Our approach combines technical excellence with operational clarity.
          </p>
        </div>

        {/* Three Columns - Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featureHighlights.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                {/* Icon 48x48 */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#3A81F7] rounded-card flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Heading 20 bold */}
                <h3 className="text-heading-md text-[#050816] mb-4">
                  {feature.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-body text-[#4A4A4A] max-w-sm mx-auto">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
