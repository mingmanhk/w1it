import { Server, Shield, Cloud } from 'lucide-react';

/**
 * W1IT Services Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const coreServices = [
  {
    title: 'Managed IT Services',
    description: 'Proactive monitoring, updates, and support to keep your systems running smoothly.',
    icon: Server,
  },
  {
    title: 'IT Automation',
    description: 'Streamline your operations with automated workflows and intelligent systems.',
    icon: Shield,
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure with minimal downtime.',
    icon: Cloud,
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#050816] mb-4">Our Services</h2>
          <p className="text-[16px] text-[#4A4A4A]">Complete IT solutions designed for small businesses</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#F8FAFC] p-8"
              >
                {/* Icon 48x48 */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>

                {/* Heading 20 semibold */}
                <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                  {service.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-[16px] text-[#4A4A4A]">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
