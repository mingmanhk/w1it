import Button from '@/components/Button';
import { Factory, Building, Rocket, Users } from 'lucide-react';

/**
 * W1IT Industries Component - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
 */

const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Small Business', icon: Building },
  { name: 'Startups', icon: Rocket },
  { name: 'Professional Services', icon: Users },
];

export default function Industries() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#050816] mb-4">
            Supporting Small Businesses Across Industries
          </h2>
          <p className="text-[16px] text-[#4A4A4A] max-w-3xl mx-auto">
            From manufacturing to professional services, we understand the unique challenges facing small businesses in every sector.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-[#F5F5F5] p-8 text-center"
              >
                {/* Centered Icon 48x48 */}
                <div className="flex justify-center items-center mb-4">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-bold text-[#050816]">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button href="/industries" variant="secondary">
            Explore All Industries
          </Button>
        </div>
      </div>
    </section>
  );
}
