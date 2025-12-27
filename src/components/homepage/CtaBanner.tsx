import Container from '@/components/Container';
import Button from '@/components/Button';
import { MessageSquare, Calendar, Rocket } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-32 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

      <Container size="lg">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <MessageSquare className="w-4 h-4" />
            <span className="font-inter">Ready to Modernize?</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
            Ready to modernize your infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
            Schedule a consultation to discuss how we can help transform your IT operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              href="/contact"
              variant="secondary"
              size="xl"
              className="bg-white text-primary-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Schedule a Consultation
            </Button>
            <Button
              href="/solutions"
              variant="outline"
              size="xl"
              className="border-white text-white hover:bg-white/10"
            >
              <Rocket className="w-5 h-5 mr-3" />
              Explore Strategic Solutions
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
