import type { Metadata } from 'next';
import Image from 'next/image';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = generateSEO({
  title: 'IT Consulting Services Seattle - Strategic Technology Planning',
  description:
    'Expert IT consulting services in Seattle. Technology strategy, network architecture, process optimization, security compliance guidance, and bilingual technical writing (English/Chinese). Remote and local consulting available.',
  keywords: [
    'IT consulting Seattle',
    'technology strategy Seattle',
    'network architecture consulting',
    'IT process optimization',
    'security compliance consulting',
    'bilingual technical writing',
    'cross-cultural IT communication',
    'Seattle IT consultant',
    'technology roadmapping',
    'IT infrastructure consulting',
    'cloud architecture consulting',
  ],
  canonical: '/it-consulting',
  openGraph: {
    title: 'IT Consulting Services Seattle | w1IT',
    description:
      'Smart IT consulting with clear strategies for secure, scalable growth. Bilingual support available.',
    type: 'website',
  },
});

export default function ITConsulting() {
  // Generate structured data for SEO
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'w1IT - IT Consulting',
    description:
      'Strategic IT consulting services including technology roadmapping, system architecture design, process optimization, and security compliance guidance with bilingual support.',
    url: 'https://w1it.com/it-consulting',
    email: 'contact@w1it.com',
    address: {
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County'],
  });

  const serviceSchema = generateServiceSchema({
    name: 'IT Consulting Services',
    description:
      'Strategic IT consulting for businesses including technology strategy, network architecture, security compliance, and process optimization with clear, actionable recommendations.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County', 'Remote Worldwide'],
    serviceType: 'IT Consulting',
  });

  const services = [
    {
      title: 'Technology Strategy & Roadmapping',
      description:
        'Helping organizations plan IT investments, align infrastructure with business objectives, and prepare for future growth.',
    },
    {
      title: 'System & Network Architecture Consulting',
      description:
        'Advising on secure, efficient designs for networks, servers, and cloud environments, tailored to your operational needs.',
    },
    {
      title: 'Process Optimization',
      description:
        'Identifying inefficiencies in IT workflows and recommending automation or restructuring to improve productivity.',
    },
    {
      title: 'Security & Compliance Guidance',
      description:
        'Consulting on SSL/DNS configurations, MFA integration, and best practices to keep systems secure and compliant.',
    },
    {
      title: 'Cross-Cultural Communication in IT',
      description:
        'Supporting international teams with bilingual (English/Chinese) documentation and messaging to bridge technical and business communication gaps.',
    },
  ];

  const benefits = [
    {
      title: 'Clarity in Decision-Making',
      description: 'Complex IT challenges explained in simple, actionable terms.',
    },
    {
      title: 'Cost Efficiency',
      description: 'Strategic recommendations that reduce unnecessary spending and maximize ROI.',
    },
    {
      title: 'Scalability',
      description: 'Solutions designed to grow with your business.',
    },
    {
      title: 'Local & Remote Support',
      description:
        'Available for consulting sessions both remotely worldwide and locally in the Greater Seattle area.',
    },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <div>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-32 md:pb-40">
        <div className="absolute inset-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="IT Consulting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <Container>
          <div className="relative text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-black mb-6">
              IT Consulting Services
            </h1>
            <p className="text-lg md:text-xl text-black/90 max-w-3xl mx-auto mb-8 font-body">
              Smart IT Consulting — Clear Strategies for Secure, Scalable Growth. Need hands-on support? Explore our <a href="/it-services" className="text-rose hover:underline">managed IT services</a>.
            </p>
            <Button href="/contact">
              Schedule a Consultation
            </Button>
          </div>
        </Container>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <Container>
          <Card>
            <p className="text-gray-medium font-body text-lg leading-relaxed">
              Beyond hands-on IT management, I provide consulting services that help businesses
              make informed, strategic technology decisions. My consulting approach blends
              technical expertise with clear communication, ensuring that every recommendation is
              practical, scalable, and aligned with business goals.
            </p>
          </Card>
        </Container>
      </section>

      {/* What I Offer Section */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            What I Offer
          </h2>
          <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
            Strategic consulting services designed to help your business make smarter technology
            decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-medium font-body">{service.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* How Clients Benefit Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            How Clients Benefit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-medium font-body">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-blush">
        <Container>
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Ready to Make Smarter IT Decisions?
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-body">
              Let&apos;s discuss how strategic IT consulting can help your business grow securely
              and efficiently.
            </p>
            <Button href="/contact">
              Get Started Today
            </Button>
          </div>
        </Container>
      </section>
    </div>
    </>
  );
}
