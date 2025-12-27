'use client';

import Container from '@/components/Container';
import { Heart, Briefcase, Factory, Building, Rocket, Users, CheckCircle2 } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const industries = [
  {
    name: 'Healthcare',
    icon: <Heart className="w-10 h-10" />,
    color: 'text-rose-500',
    description: 'Secure and compliant IT solutions for the healthcare industry.',
    services: [
      'HIPAA-compliant cloud solutions',
      'Electronic Health Record (EHR) system support',
      'Telemedicine infrastructure',
      'Data security and patient privacy',
    ],
  },
  {
    name: 'Finance',
    icon: <Briefcase className="w-10 h-10" />,
    color: 'text-emerald-500',
    description: 'Reliable and secure IT services for financial institutions.',
    services: [
      'PCI DSS compliance solutions',
      'Secure network infrastructure',
      'High-availability trading systems',
      'Data encryption and protection',
    ],
  },
  {
    name: 'Manufacturing',
    icon: <Factory className="w-10 h-10" />,
    color: 'text-amber-500',
    description: 'Efficient and scalable IT solutions for the manufacturing sector.',
    services: [
      'Factory automation and IoT solutions',
      'Supply chain management systems',
      'Enterprise Resource Planning (ERP) support',
      'Process optimization and automation',
    ],
  },
  {
    name: 'Small Business',
    icon: <Building className="w-10 h-10" />,
    color: 'text-blue-500',
    description: 'Affordable and effective IT solutions for small businesses.',
    services: [
      'Managed IT services',
      'Cloud solutions (Office 365, Google Workspace)',
      'Data backup and recovery',
      'Website and email hosting',
    ],
  },
  {
    name: 'Startups',
    icon: <Rocket className="w-10 h-10" />,
    color: 'text-violet-500',
    description: 'Scalable and agile IT solutions to fuel startup growth.',
    services: [
      'Cloud infrastructure setup (AWS, Azure, GCP)',
      'DevOps and CI/CD automation',
      'Scalable and secure application architecture',
      'Cost-effective IT strategy and consulting',
    ],
  },
  {
    name: 'Professional Services',
    icon: <Users className="w-10 h-10" />,
    color: 'text-indigo-500',
    description: 'Reliable and efficient IT for professional service firms.',
    services: [
      'Client relationship management (CRM) systems',
      'Secure document management',
      'Remote work and collaboration tools',
      'Time and billing software support',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Tailored IT solutions for the unique challenges of your industry.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {industries.map((industry, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-8 rounded-t-2xl`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`${industry.color}`}>
                      {industry.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-neutral-900">{industry.name}</h3>
                  </div>
                  <p className="text-neutral-600 font-inter mb-6">{industry.description}</p>
                  <ul className="space-y-3">
                    {industry.services.map((service, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        <span className="text-neutral-700 font-inter">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-neutral-100">
                    <Button href="/contact" className="w-full">
                      Inquire Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
