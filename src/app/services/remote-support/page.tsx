import type { Metadata } from 'next';
import { generateSEO, generateServiceSchema } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = generateSEO({
  title: 'Remote IT Support & Troubleshooting - Seattle & Worldwide',
  description:
    'Fast remote IT support and troubleshooting from Seattle. Secure remote desktop support, system diagnostics, software troubleshooting, and technical assistance available worldwide.',
  keywords: [
    'remote IT support Seattle',
    'remote troubleshooting',
    'remote desktop support',
    'virtual IT help',
    'online technical support',
    'remote system administration',
    'work from home IT support',
  ],
  canonical: '/services/remote-support',
  openGraph: {
    title: 'Remote IT Support & Troubleshooting | w1IT',
    description: 'Fast, secure remote IT support available worldwide from Seattle-based experts.',
    type: 'website',
  },
});

export default function RemoteSupport() {
  const serviceSchema = generateServiceSchema({
    name: 'Remote IT Support & Troubleshooting',
    description:
      'Professional remote IT support and troubleshooting services providing fast technical assistance via secure remote connections.',
    provider: {
      name: 'w1IT',
      url: 'https://w1it.com',
    },
    areaServed: ['Seattle', 'Worldwide'],
    serviceType: 'Remote IT Support',
  });

  const services = [
    {
      icon: '🖥️',
      title: 'Remote Desktop Support',
      description: 'Secure remote access to diagnose and fix issues on your computer in real-time.',
    },
    {
      icon: '🔧',
      title: 'Software Troubleshooting',
      description: 'Fix application errors, installation problems, and software configuration issues.',
    },
    {
      icon: '⚡',
      title: 'System Performance',
      description: 'Optimize slow computers, clean up systems, and improve overall performance.',
    },
    {
      icon: '🔒',
      title: 'Security Updates',
      description: 'Ensure systems are updated, secure, and protected from vulnerabilities.',
    },
    {
      icon: '📧',
      title: 'Email & Cloud Setup',
      description: 'Configure email clients, cloud storage, and productivity tools.',
    },
    {
      icon: '💡',
      title: 'User Training',
      description: 'Remote training sessions on software, tools, and best practices.',
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
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Remote IT Support
              </h1>
              <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto mb-4 font-inter">
                Fast, secure remote troubleshooting from Seattle. Available worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="text-sm font-inter bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  ⚡ Same-Day Support Available
                </span>
                <span className="text-sm font-inter bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  🔒 Secure Connections
                </span>
                <span className="text-sm font-inter bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  🌐 Bilingual (English/Chinese)
                </span>
              </div>
              <Button href="/contact" size="lg">
                Get Help Now
              </Button>
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-32">
          <Container>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
              How Remote Support Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="font-poppins font-semibold text-lg text-charcoal mb-2">
                  Contact Us
                </h3>
                <p className="text-gray-medium font-inter text-sm">
                  Email or call to describe your issue
                </p>
              </Card>

              <Card className="text-center">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="font-poppins font-semibold text-lg text-charcoal mb-2">
                  Schedule Session
                </h3>
                <p className="text-gray-medium font-inter text-sm">
                  We'll find a time that works for you
                </p>
              </Card>

              <Card className="text-center">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="font-poppins font-semibold text-lg text-charcoal mb-2">
                  Secure Connection
                </h3>
                <p className="text-gray-medium font-inter text-sm">
                  We connect remotely via secure tools
                </p>
              </Card>

              <Card className="text-center">
                <div className="text-4xl mb-4">4️⃣</div>
                <h3 className="font-poppins font-semibold text-lg text-charcoal mb-2">
                  Problem Solved
                </h3>
                <p className="text-gray-medium font-inter text-sm">
                  We fix the issue while you watch
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32 bg-gray-bg">
          <Container>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal mb-12">
              Remote Support Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  hoverable
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-medium font-inter">{service.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-20 md:py-32">
          <Container>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
              Why Choose Remote Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card hoverable>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                  ⚡ Faster Response
                </h3>
                <p className="text-gray-medium font-inter">
                  No need to wait for an on-site visit. We can start helping you within hours, not days.
                </p>
              </Card>

              <Card hoverable>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                  💰 More Affordable
                </h3>
                <p className="text-gray-medium font-inter">
                  No travel time or trip charges. You only pay for the time spent solving your problem.
                </p>
              </Card>

              <Card hoverable>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                  🌍 Available Anywhere
                </h3>
                <p className="text-gray-medium font-inter">
                  Whether you're in Seattle or working remotely from anywhere in the world.
                </p>
              </Card>
            </div>

            <Card className="bg-blush">
              <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                Perfect for Remote Workers
              </h3>
              <p className="text-gray-medium font-inter">
                Working from home in the Seattle area or anywhere else? We specialize in supporting remote workers
                with home office setup, VPN configuration, video conferencing troubleshooting, and productivity tool
                support. Get back to work faster with expert remote assistance.
              </p>
            </Card>
          </Container>
        </section>

        {/* Security */}
        <section className="py-20 md:py-32 bg-gray-bg">
          <Container size="sm">
            <Card>
              <h2 className="font-poppins font-bold text-2xl text-charcoal mb-4 text-center">
                🔒 Secure & Private
              </h2>
              <p className="text-gray-medium font-inter mb-4">
                Your security is our priority. We use industry-standard remote support tools with end-to-end
                encryption. You control the session and can see everything we do. We never access your system
                without your explicit permission.
              </p>
              <ul className="space-y-2 text-gray-medium font-inter">
                <li className="flex items-start gap-2">
                  <span className="text-rose">✓</span>
                  <span>Encrypted remote connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose">✓</span>
                  <span>You approve every action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose">✓</span>
                  <span>Session recordings available on request</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose">✓</span>
                  <span>No persistent access to your systems</span>
                </li>
              </ul>
            </Card>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32">
          <Container size="sm">
            <div className="text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Need IT Help Right Now?
              </h2>
              <p className="text-lg text-gray-medium mb-8 font-inter">
                Contact us for fast, secure remote support. Available for Seattle locals and worldwide clients.
              </p>
              <Button href="/contact" size="lg">
                Request Remote Support
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
