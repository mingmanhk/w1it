import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Factory, Building, Rocket, Users } from 'lucide-react';

const industries = [
  { name: 'Manufacturing', icon: <Factory className="w-8 h-8" />, color: 'text-secondary-500' },
  { name: 'Small Business', icon: <Building className="w-8 h-8" />, color: 'text-primary-500' },
  { name: 'Startups', icon: <Rocket className="w-8 h-8" />, color: 'text-accent-500' },
  { name: 'Professional Services', icon: <Users className="w-8 h-8" />, color: 'text-primary-700' },
];

export default function Industries() {
  return (
    <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-body">
            Who We Serve
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark-text mb-6">
            Supporting Small Businesses Across Industries
          </h2>
          <p className="text-xl text-dark-text/80 max-w-3xl mx-auto font-body">
            From manufacturing to professional services, we understand the unique challenges facing small businesses in every sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              hoverable
              padding="lg"
              className="animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`${industry.color} mb-4 flex justify-center`}>
                {industry.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-dark-text">
                {industry.name}
              </h3>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/industries" variant="outline" size="lg">
            Explore All Industries
          </Button>
        </div>
      </Container>
    </section>
  );
}
