import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import {
  Building,
  Briefcase,
  Users,
  GraduationCap,
  Store,
  Factory,
  Heart,
  DollarSign,
} from 'lucide-react';

export const metadata: Metadata = generateSEO({
  title: 'Industries We Serve - Seattle IT Solutions for Healthcare, SMB, Startups & More',
  description:
    'Specialized IT solutions tailored for healthcare providers, small businesses, startups, education, retail, manufacturing, and professional services in Seattle.',
  keywords: [
    'Seattle healthcare IT',
    'small business IT Seattle',
    'startup IT solutions',
    'education technology Seattle',
    'retail IT solutions',
    'manufacturing IT',
    'professional services IT',
  ],
  canonical: '/industries',
  openGraph: {
    title: 'Industries We Serve | w1IT',
    description: 'Specialized IT solutions for healthcare, SMBs, startups, education, retail, and manufacturing.',
    type: 'website',
  },
});

export default function IndustriesPage() {
  const industries = [
    {
      title: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for clinics, hospitals, and medical practices.',
      icon: <Heart className="w-10 h-10" />,
      href: '/industries/healthcare',
      features: ['HIPAA Compliance', 'EMR/EHR Integration', 'Medical Device Security', 'Patient Data Protection'],
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Small & Medium Businesses',
      description: 'Cost-effective IT solutions for growing businesses in the Seattle area.',
      icon: <Building className="w-10 h-10" />,
      href: '/industries/small-business',
      features: ['Managed IT Services', 'Network Setup', 'Cybersecurity', 'Cloud Solutions'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Startups & Tech Companies',
      description: 'Scalable infrastructure and agile IT support for high-growth technology companies.',
      icon: <Briefcase className="w-10 h-10" />,
      href: '/industries/startups',
      features: ['Scalable Infrastructure', 'DevOps Support', 'Cloud Migration', 'Technical Hiring'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      title: 'Education',
      description: 'Technology solutions for schools, universities, and educational institutions.',
      icon: <GraduationCap className="w-10 h-10" />,
      href: '/industries/education',
      features: ['Learning Management Systems', 'Campus Networks', 'Student Data Security', 'EdTech Integration'],
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Retail & E-commerce',
      description: 'Point-of-sale systems, inventory management, and e-commerce platform support.',
      icon: <Store className="w-10 h-10" />,
      href: '/industries/retail',
      features: ['POS Systems', 'Inventory Management', 'E-commerce Platforms', 'Customer Data Analytics'],
      gradient: 'from-emerald-500 to-green-500',
    },
    {
      title: 'Manufacturing',
      description: 'Industrial IoT, automation, and operational technology solutions.',
      icon: <Factory className="w-10 h-10" />,
      href: '/industries/manufacturing',
      features: ['Industrial IoT', 'Process Automation', 'Supply Chain Systems', 'Quality Control'],
      gradient: 'from-gray-500 to-neutral-500',
    },
    {
      title: 'Professional Services',
      description: 'IT solutions for law firms, accounting practices, consulting, and agencies.',
      icon: <Users className="w-10 h-10" />,
      href: '/industries/professional-services',
      features: ['Document Management', 'Client Portal Security', 'Time Tracking Systems', 'Collaboration Tools'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Financial Services',
      description: 'Secure, compliant IT infrastructure for financial institutions.',
      icon: <DollarSign className="w-10 h-10" />,
      href: '/industries/financial-services',
      features: ['SOC 2 Compliance', 'Data Encryption', 'Transaction Security', 'Regulatory Compliance'],
      gradient: 'from-teal-500 to-emerald-500',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Building className="w-4 h-4" />
              <span className="font-inter">Industry Expertise</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Industries
              <span className="block text-gradient-primary mt-2">We Serve</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Specialized IT solutions tailored to the unique challenges and compliance requirements of your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Schedule Industry Consultation
                <Building className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="/services" variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Industry Solutions
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Tailored Technology for Your Sector
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              We understand that each industry has unique technology needs, compliance requirements, and operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${industry.gradient} p-8 text-white rounded-t-2xl`}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-white/90 font-inter">
                    {industry.description}
                  </p>
                </div>
                <div className="p-8">
                  <h4 className="font-display font-semibold text-lg text-neutral-900 mb-4">
                    Key Solutions
                  </h4>
                  <div className="space-y-3 mb-6">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                        <span className="text-neutral-700 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    href={industry.href}
                    variant="outline"
                    className="w-full"
                  >
                    Explore {industry.title} Solutions
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-primary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              We work with businesses across all sectors. Contact us to discuss how we can create
              customized IT solutions for your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Industry Consultation
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                Browse All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}