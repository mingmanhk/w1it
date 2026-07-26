import { Server, Shield, Cloud, Network, DollarSign, SearchCheck } from 'lucide-react';

/**
 * W1IT Services Component - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

const coreServices = [
  {
    title: 'Network Architecture Optimization',
    description: 'We audit your current network, eliminate over-provisioned hardware and licensing, and redesign the architecture — most clients cut recurring IT costs by 20-40%.',
    icon: DollarSign,
  },
  {
    title: 'Network Design & Build',
    description: 'Complete network build-outs for offices, warehouses, and multi-site businesses: structured cabling plans, WiFi coverage, VPN, and vendor-neutral hardware selection.',
    icon: Network,
  },
  {
    title: 'Network Security Assessment',
    description: 'A practical, prioritized review of your firewall rules, access controls, patching, and exposure — with a remediation plan ranked by risk, not a scare report.',
    icon: SearchCheck,
  },
  {
    title: 'Managed IT Services',
    description: 'Proactive monitoring, patching, and helpdesk support with predictable monthly pricing — problems fixed before they interrupt your team.',
    icon: Server,
  },
  {
    title: 'Cloud Migration',
    description: 'Structured moves to cloud infrastructure with minimal downtime — and honest advice when staying on-prem is the cheaper, better answer.',
    icon: Cloud,
  },
  {
    title: 'IT Automation',
    description: 'Replace repetitive manual work with reliable automated workflows: onboarding, backups, monitoring, and reporting that run themselves.',
    icon: Shield,
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 bg-surface-0">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* SectionHeader / Default */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-fg mb-4">Our Services</h2>
          <p className="text-[16px] text-fg-muted">Complete IT solutions designed for small businesses</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-surface-1 p-8"
              >
                {/* Icon 48x48 */}
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#3A81F7]" strokeWidth={1.5} />
                </div>

                {/* Heading 20 semibold */}
                <h3 className="text-[20px] font-semibold text-fg mb-4">
                  {service.title}
                </h3>

                {/* Description 16 regular */}
                <p className="text-[16px] text-fg-muted">
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
