import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Server, BarChart3, Globe, Database, CheckCircle2, Calendar } from 'lucide-react';

const coreServices = [
  {
    title: 'Managed IT Services',
    description: 'Proactive monitoring, help desk support, and on‑site/remote troubleshooting.',
    icon: <Server className="w-10 h-10" />,
    gradient: 'from-blue-500 to-cyan-500',
    includes: [
      'Network setup',
      'Device configuration',
      'Windows repair',
      'Co‑managed IT',
      'Monitoring & maintenance',
    ],
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Clarity‑first consulting for infrastructure, cloud, and cybersecurity.',
    icon: <BarChart3 className="w-10 h-10" />,
    gradient: 'from-emerald-500 to-green-500',
    includes: [
      'Infrastructure planning',
      'Cloud migration',
      'Cybersecurity audits',
      'Process optimization',
      'Technical documentation',
    ],
  },
  {
    title: 'Website Development & Optimization',
    description: 'Client websites built for performance, usability, and measurable growth.',
    icon: <Globe className="w-10 h-10" />,
    gradient: 'from-violet-500 to-purple-500',
    includes: [
      'Website creation',
      'Feature implementation',
      'UX improvements',
      'SEO & traffic growth',
      'Analytics & conversion optimization',
    ],
  },
  {
    title: 'Data & Analytics',
    description: 'Turn raw data into decisions with modern analytics.',
    icon: <Database className="w-10 h-10" />,
    gradient: 'from-indigo-500 to-blue-500',
    includes: [
      'BI dashboards',
      'Predictive analytics',
      'Reporting automation',
      'Data cleanup',
    ],
  },
];

export default function CoreServices() {
  return (
    <section className="py-40 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="text-center mb-32">
          <div className="inline-block px-5 py-2.5 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-6 font-inter">
            Core Services
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-8">
            Comprehensive IT Solutions for Modern Businesses
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-inter leading-relaxed">
            From proactive infrastructure management to strategic consulting — everything your Seattle business needs to thrive in today&apos;s digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coreServices.map((service, index) => (
            <Card
              key={index}
              hoverable
              className="animate-fade-in-up border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-10 text-white rounded-t-2xl`}>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-3xl mb-6">
                  {service.title}
                </h3>
                <p className="text-white/90 font-inter text-lg">
                  {service.description}
                </p>
              </div>
              <div className="p-10">
                <h4 className="font-display font-semibold text-xl text-neutral-900 mb-6">
                  What&apos;s Included:
                </h4>
                <div className="space-y-4 mb-8">
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-3 bg-neutral-50 rounded-lg hover:bg-white transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 font-inter text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <Button
                  href="/services"
                  variant="outline"
                  className="w-full py-4 text-lg font-medium hover:bg-primary-50 transition-colors"
                >
                  Explore {service.title} →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Services CTA */}
        <div className="text-center mt-20 pt-16 border-t border-neutral-200">
          <p className="text-xl text-neutral-600 mb-8 font-inter">
            Need a custom solution or have specific requirements?
          </p>
          <Button
            href="/contact"
            size="xl"
            className="bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Calendar className="w-6 h-6 mr-3" />
            Schedule Custom Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
