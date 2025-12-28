import Container from '@/components/Container';
import Card from '@/components/Card';
import { Target, Shield, TrendingUp } from 'lucide-react';

const valuePillars = [
  {
    title: 'Confidence',
    description: 'Technology solutions that give you the confidence to focus on what matters most — growing your business.',
    icon: <Target className="w-10 h-10" />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Clarity',
    description: 'Clear communication, transparent pricing, and straightforward solutions without the technical jargon.',
    icon: <Shield className="w-10 h-10" />,
    gradient: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Control',
    description: 'Take control of your IT with proactive support that prevents problems before they disrupt your business.',
    icon: <TrendingUp className="w-10 h-10" />,
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function ValuePillars() {
  return (
    <section className="py-40 bg-white">
      <Container>
        <div className="text-center mb-32">
          <div className="inline-block px-5 py-2.5 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 font-inter">
            Our Approach
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-text mb-8">
            Give Your Business the 3 C&apos;s
          </h2>
          <p className="text-xl md:text-2xl text-dark-text/80 max-w-3xl mx-auto font-inter leading-relaxed">
            We give small businesses the confidence, clarity, and control they need to thrive in today&apos;s digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {valuePillars.map((pillar, index) => (
            <Card
              key={index}
              hoverable
              className="animate-fade-in-up border-2 border-neutral-100 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${pillar.gradient} p-10 text-white rounded-t-2xl`}>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-display font-bold text-3xl mb-6">
                  {pillar.title}
                </h3>
              </div>
              <div className="p-10">
                <p className="text-dark-text/90 font-inter text-lg leading-relaxed">
                  {pillar.description}
                </p>
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <p className="text-sm text-dark-text/70 font-inter mb-3">How this benefits you:</p>
                  <ul className="space-y-2">
                    {pillar.title === 'Confidence' && (
                      <>
                        <li className="flex items-center space-x-2 text-sm text-dark-text/80">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>Peace of mind with 24/7 monitoring and support</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm text-dark-text/80">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>Reliable systems that work when you need them</span>
                        </li>
                      </>
                    )}
                    {pillar.title === 'Clarity' && (
                      <>
                        <li className="flex items-center space-x-2 text-sm text-dark-text/80">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>No surprise bills or hidden fees</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm text-dark-text/80">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>Understand exactly what you&apos;re paying for</span>
                        </li>
                      </>
                    )}
                    {pillar.title === 'Control' && (
                      <>
                        <li className="flex items-center space-x-2 text-sm text-dark-text/80">
                          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                          <span>Stop firefighting — prevent issues proactively</span>
                        </li>
                        <li className="flex items-center space-x-2 text-sm text-dark-text/80">
                          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                          <span>Your technology works for you, not against you</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
