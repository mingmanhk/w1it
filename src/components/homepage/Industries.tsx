import Button from '@/components/Button';
import { Factory, Building, Rocket, Users } from 'lucide-react';

/**
 * W1IT Industries Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Small Business', icon: Building },
  { name: 'Startups', icon: Rocket },
  { name: 'Professional Services', icon: Users },
];

export default function Industries() {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#050816] mb-4">
            Supporting Small Businesses Across Industries
          </h2>
          <p className="text-[16px] text-[#4A4A4A] max-w-3xl mx-auto">
            From manufacturing to professional services, we understand the unique challenges facing small businesses in every sector.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-[#F8FAFC] p-8 text-center"
              >
                {/* Centered Icon 48x48 */}
                <div className="flex justify-center items-center mb-4">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] font-semibold text-[#050816]">
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
