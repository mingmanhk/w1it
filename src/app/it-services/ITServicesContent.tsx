'use client';

import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { useLanguage } from '@/components/LanguageProvider';

export default function ITServicesContent() {
  const { dict } = useLanguage();
  const d = dict.itServices;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-surface-0 to-blush">
        <Container>
          <div className="text-center animate-fade-in">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              {d.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-medium max-w-3xl mx-auto mb-8 font-body">
              {d.hero.subtitleBeforeLink}
              <a href="/it-consulting" className="text-rose hover:underline">{d.hero.linkText}</a>
              {d.hero.subtitleAfterLink}
            </p>
            <Button href="/contact">
              {d.hero.cta}
            </Button>
          </div>
        </Container>
      </section>

      {/* About Me Section */}
      <section className="py-20 md:py-32">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-6">
            {d.about.heading}
          </h2>
          <Card className="mb-8">
            <p className="text-gray-medium font-body text-lg leading-relaxed">
              {d.about.paragraph}
            </p>
          </Card>
        </Container>
      </section>

      {/* IT Experience Section */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-4">
            {d.experience.heading}
          </h2>
          <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
            {d.experience.subheading}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {d.experience.items.map((item, index) => (
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
            {d.servicesOffered.heading}
          </h2>
          <p className="text-gray-medium text-lg mb-12 max-w-3xl font-body">
            {d.servicesOffered.subheading}
          </p>

          <Card>
            <ul className="space-y-4">
              {d.servicesOffered.items.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-rose text-xl font-bold mt-1">✓</span>
                  <span className="text-gray-medium font-body text-lg">{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blush rounded-lg">
              <p className="text-charcoal font-body text-sm">
                {d.servicesOffered.note}
              </p>
            </div>
          </Card>
        </Container>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal text-center mb-16">
            {d.whyWorkWithMe.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {d.whyWorkWithMe.items.map((item, index) => (
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
              {d.cta.heading}
            </h2>
            <p className="text-lg text-gray-medium mb-8 font-body">
              {d.cta.body}
            </p>
            <Button href="/contact">
              {d.cta.cta}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
