import { Server, Shield, Cloud } from 'lucide-react';

/**
 * W1IT Services Component
 * Matches: Section / Services
 * Components: ServiceCard / ManagedIT, Automation, Migration
 * Specs: Cards 360px width, Padding 32px, Radius 12px, Icon 48x48, Heading 20 bold, Description 16 regular
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
    <section className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-content mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-16">
          <h2 className="text-heading-lg text-[#050816] mb-4">Our Services</h2>
          <p className="text-body text-[#4A4A4A]">Complete IT solutions designed for small businesses</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-card w-full md:w-service-card"
              >
                {/* Icon 48x48 */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>

                {/* Heading 20 bold */}
                <h3 className="text-heading-md text-[#050816] mb-4">
                  {service.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-body text-[#4A4A4A]">
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
