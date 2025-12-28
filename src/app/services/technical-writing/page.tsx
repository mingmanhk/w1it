import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = generateSEO({
  title: 'Bilingual Technical Writing Services - English & Chinese',
  description:
    'Professional bilingual technical writing and documentation services in English and Chinese. IT documentation, user guides, and cross-cultural technical communication for Seattle businesses and international teams.',
  keywords: [
    'bilingual technical writing',
    'English Chinese technical documentation',
    'IT documentation services',
    'technical writer Seattle',
    'cross-cultural communication',
    'software documentation',
    'user guide writing',
    'API documentation',
    'bilingual IT documentation',
  ],
  canonical: '/services/technical-writing',
  openGraph: {
    title: 'Bilingual Technical Writing Services | w1IT',
    description: 'Professional technical documentation in English and Chinese for IT and software projects.',
    type: 'website',
  },
});

export default function TechnicalWriting() {
  const serviceSchema = generateServiceSchema({
    name: 'Bilingual Technical Writing Services',
    description:
      'Professional technical writing and documentation in English and Chinese, specializing in IT documentation, user guides, and cross-cultural technical communication.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Bellevue', 'Redmond', 'Remote Worldwide'],
    serviceType: 'Technical Writing',
  });

  const services = [
    {
      title: 'IT Documentation',
      description: 'System architecture docs, runbooks, SOPs, and infrastructure documentation in English and Chinese.',
    },
    {
      title: 'User Guides & Manuals',
      description: 'Clear, user-friendly documentation for software applications and technical products.',
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API references, integration guides, and developer documentation.',
    },
    {
      title: 'Release Notes',
      description: 'Professional release notes and changelog documentation for software updates.',
    },
    {
      title: 'Training Materials',
      description: 'Technical training guides and educational content for teams and end users.',
    },
    {
      title: 'Cross-Cultural Communication',
      description: 'Bridge technical and business communication for international teams working across English and Chinese-speaking markets.',
    },
  ];

  const benefits = [
    {
      icon: '🌐',
      title: 'True Bilingual Expertise',
      description: 'Native-level proficiency in both English and Chinese, not just translation.',
    },
    {
      icon: '💼',
      title: 'IT Industry Experience',
      description: 'Deep understanding of technical concepts, infrastructure, and software development.',
    },
    {
      icon: '📊',
      title: 'Clear & Structured',
      description: 'Documentation that follows industry best practices and is easy to maintain.',
    },
    {
      icon: '🤝',
      title: 'Cultural Nuance',
      description: 'Understanding of business culture in both Western and Chinese markets.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <div>
        {/* Hero Section */}
        <section className="pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-white to-blush">
          <Container>
            <div className="text-center animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Bilingual Technical Writing
              </h1>
              <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto mb-8 font-body">
                Professional technical documentation in English and Chinese. Bridge the communication gap for
                international teams and global businesses.
              </p>
              <Button href="/contact">
                Request a Quote
              </Button>
            </div>
          </Container>
        </section>

        {/* Why Bilingual Documentation Matters */}
        <section className="py-20 md:py-32">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
              Why Bilingual Documentation Matters
            </h2>
            <Card className="mb-8">
              <p className="text-gray-medium font-body text-lg leading-relaxed mb-4">
                In today&apos;s global economy, businesses increasingly operate across English and Chinese-speaking
                markets. Effective technical communication isn&apos;t just about translation—it requires deep
                understanding of both technical concepts and cultural context.
              </p>
              <p className="text-gray-medium font-body text-lg leading-relaxed">
                Whether you&apos;re a Seattle-based company expanding to Asian markets, or an international team
                needing documentation in both languages, professional bilingual technical writing ensures
                clarity, accuracy, and consistency across all your technical communications.
              </p>
            </Card>
          </Container>
        </section>

        {/* Services Offered */}
        <section className="py-20 md:py-32 bg-gray-bg">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
              Documentation Services
            </h2>
            <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
              Comprehensive technical writing services tailored to your needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
              What Sets Us Apart
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  hoverable
                  className="animate-fade-in-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-medium font-body">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Use Cases */}
        <section className="py-20 md:py-32 bg-blush">
          <Container>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-12">
              Common Use Cases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  For Seattle Businesses Going Global
                </h3>
                <p className="text-gray-medium font-body">
                  You&apos;re expanding to China or working with Chinese partners. You need product documentation,
                  user guides, or technical specs that work for both English and Chinese-speaking audiences.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  For International Teams
                </h3>
                <p className="text-gray-medium font-body">
                  Your development team spans multiple countries. You need consistent technical documentation
                  that serves both your US-based engineers and your Chinese development center.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  For Software Companies
                </h3>
                <p className="text-gray-medium font-body">
                  You&apos;re selling software in both markets and need API docs, SDKs, and integration guides that
                  work seamlessly in English and Chinese.
                </p>
              </Card>

              <Card>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  For Enterprise IT Teams
                </h3>
                <p className="text-gray-medium font-body">
                  Your company has offices in Seattle and Asia. You need IT documentation, procedures, and
                  training materials that work across all locations.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Ready to Improve Your Global Communication?
              </h2>
              <p className="text-lg text-gray-medium mb-8 font-body">
                Let&apos;s discuss how bilingual technical documentation can support your business goals.
              </p>
              <Button href="/contact">
                Get Started
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
