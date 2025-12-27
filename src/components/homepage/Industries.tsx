import Container from '@/components/Container';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Heart, Briefcase, Factory, Building, Rocket, Users } from 'lucide-react';

const industries = [
  { name: 'Healthcare', icon: <Heart className="w-8 h-8" />, color: 'text-rose-500' },
  { name: 'Finance', icon: <Briefcase className="w-8 h-8" />, color: 'text-emerald-500' },
  { name: 'Manufacturing', icon: <Factory className="w-8 h-8" />, color: 'text-amber-500' },
  { name: 'Small Business', icon: <Building className="w-8 h-8" />, color: 'text-blue-500' },
  { name: 'Startups', icon: <Rocket className="w-8 h-8" />, color: 'text-violet-500' },
  { name: 'Professional Services', icon: <Users className="w-8 h-8" />, color: 'text-indigo-500' },
];

export default function Industries() {
  return (
    <section className="py-32 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
            Industry Expertise
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
            Tailored solutions for diverse business environments.
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
              <h3 className="font-display font-semibold text-lg text-neutral-900">
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
