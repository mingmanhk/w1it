import { Server, Shield, Cloud } from 'lucide-react';

/**
 * W1IT Services Component - STRICT Design System Compliance
 * NO gradients, NO rounded-card, NO shadows
 * Colors: navy, blue, green, white, gray-600, gray-300, gray-100
 * Typography: Display/48, Heading/32, Heading/20, Body/18, Body/16
 * Spacing: 8, 16, 24, 32, 48, 64, 96, 128px only
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
    <section className="py-24 md:py-32 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-[#050816] mb-4">Our Services</h2>
          <p className="text-[16px] text-[#4A4A4A]">Complete IT solutions designed for small businesses</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8"
              >
                {/* Icon 48x48 */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>

                {/* Heading 20 bold */}
                <h3 className="text-[20px] font-bold text-[#050816] mb-4">
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
