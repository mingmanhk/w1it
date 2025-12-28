import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema, generateLocalBusinessSchema } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = generateSEO({
  title: 'Seattle IT Support & Managed IT Services',
  description:
    'Professional managed IT services in Seattle, WA. Remote IT troubleshooting, network monitoring, system administration, and bilingual technical support (English/Chinese) available worldwide and locally in Greater Seattle.',
  keywords: [
    'Seattle IT support',
    'managed IT services Seattle',
    'remote IT troubleshooting Seattle',
    'IT infrastructure management',
    'network monitoring Seattle',
    'bilingual IT support',
    'technical documentation Seattle',
    'IT services Greater Seattle',
    'system administration Seattle',
    'SSL troubleshooting',
    'DNS configuration',
    'Matrix42',
    'PRTG monitoring',
    'Meraki network management',
  ],
  canonical: '/it-services',
  openGraph: {
    title: 'Seattle IT Support & Managed IT Services | w1IT',
    description:
      'Comprehensive IT service management with bilingual support. Available remotely worldwide and locally in Greater Seattle.',
    type: 'website',
  },
});

export default function ITServices() {
  // Generate structured data for SEO
  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'w1IT - IT Services',
    description:
      'Professional managed IT services including infrastructure management, network monitoring, SSL/DNS troubleshooting, and bilingual technical support.',
    url: 'https://w1it.com/it-services',
    email: 'contact@w1it.com',
    address: {
      addressLocality: 'Seattle',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County'],
  });

  const serviceSchema = generateServiceSchema({
    name: 'Managed IT Services',
    description:
      'Comprehensive IT service management including system administration, network monitoring, workflow automation, and technical documentation for businesses.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Bellevue', 'Issaquah', 'Snoqualmie', 'Redmond', 'Tacoma', 'Greater King County', 'Remote Worldwide'],
    serviceType: 'IT Support and Services',
  });

  const services = [
    'End-to-end IT infrastructure management',
    'Network monitoring and workflow automation',
    'SSL/DNS troubleshooting and secure configuration',
    'Technical documentation and stakeholder communication',
    'Cross-cultural IT messaging for international teams',
  ];

  const expertise = [
    {
      title: 'System Administration & Troubleshooting',
      description:
        'Skilled in managing platforms such as Matrix42, Empirum, JIRA, Confluence, Meraki, and PRTG. I specialize in diagnosing and resolving SSL certificate chain issues, DNS/Cloudflare configurations, and MFA service integrations.',
    },
    {
      title: 'Network Monitoring & Automation',
      description:
        'Advanced workflow design for PRTG, Meraki, and SNMP, including PowerShell automation to streamline device management and monitoring.',
    },
    {
      title: 'Documentation & Communication',
      description:
        'Expert in creating clear, modular documentation for stakeholders, ensuring visibility and alignment across IT projects. I refine technical messaging for cross-cultural audiences, bridging communication between technical teams and business leaders.',
    },
    {
      title: 'Project Management & Optimization',
      description:
        'Proactive in aligning IT processes with business goals, optimizing workflows, and ensuring smooth stakeholder collaboration.',
    },
  ];

  const whyWorkWithMe = [
    {
      title: 'Clarity & Professionalism',
      description: 'I translate complex IT issues into clear, actionable steps.',
    },
    {
      title: 'Reliability',
      description: 'I ensure systems run securely and efficiently, minimizing downtime.',
    },
    {
      title: 'Global Perspective',
      description: 'My bilingual expertise supports international collaboration.',
    },
    {
      title: 'Customization',
      description:
        'I adapt solutions to fit your business needs, whether small-scale or enterprise-level.',
    },
    {
      title: 'Local Presence',
      description:
        "Based in the Seattle area, I'm available for in-person consultations and hands-on support.",
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
      <section className="pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-white to-blush">
        <Container>
          <div className="text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Managed IT Services
            </h1>
            <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto mb-8 font-body">
              Comprehensive IT service management tailored to businesses that need reliable,
              scalable, and secure solutions. Available remotely worldwide and locally in the
              Greater Seattle area. Looking for strategic guidance? See our <a href="/it-consulting" className="text-rose hover:underline">IT consulting services</a>.
            </p>
            <Button href="/contact">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>

      {/* About Me Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
            About Me
          </h2>
          <Card className="mb-8">
            <p className="text-gray-medium font-body text-lg leading-relaxed">
              I am an experienced IT consultant and strategist with a proven track record in
              managing complex systems and delivering clear, actionable solutions. My background
              spans system administration, network monitoring, and technical documentation,
              combined with strong skills in bilingual communication (English/Chinese) for
              international business contexts. I bring both technical rigor and creative
              problem-solving to every project.
            </p>
          </Card>
        </Container>
      </section>

      {/* IT Experience Section */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            My IT Experience
          </h2>
          <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
            Years of hands-on experience across diverse IT environments, from infrastructure
            management to international team collaboration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-medium font-body">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* IT Services Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            IT Services I Offer
          </h2>
          <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
            I provide comprehensive IT service management tailored to businesses that need
            reliable, scalable, and secure solutions.
          </p>

          <Card>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-rose text-xl font-bold mt-1">✓</span>
                  <span className="text-gray-medium font-body text-lg">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blush rounded-lg">
              <p className="text-charcoal font-body text-sm">
                Services are available remotely worldwide and locally in the Greater Seattle area,
                offering flexibility for both on-site and virtual support.
              </p>
            </div>
          </Card>
        </Container>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            Why Work With Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyWorkWithMe.map((item, index) => (
              <Card
                key={index}
                hoverable
                className="animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-medium font-body">{item.description}</p>
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
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-body">
              Let&apos;s discuss how I can help streamline your IT operations and support your
              business goals.
            </p>
            <Button href="/contact">
              Contact Me Today
            </Button>
          </div>
        </Container>
      </section>
    </div>
    </>
  );
}
