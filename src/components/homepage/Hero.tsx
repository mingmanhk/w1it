import Container from '@/components/Container';
import Button from '@/components/Button';
import { Zap, Calendar, ArrowRight, Server } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[480px] lg:min-h-[640px] pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-dark bg-hero-mobile md:bg-hero-desktop text-white overflow-hidden">
      {/* Background patterns and decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Geometric backdrop - positioned right on desktop, centered on mobile */}
      <div className="absolute top-1/4 left-1/2 md:left-auto md:right-1/4 w-80 h-80 md:w-96 md:h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-subtle -translate-x-1/2 md:translate-x-0" />
      <div className="absolute bottom-1/4 left-1/2 md:left-auto md:right-1/3 w-64 h-64 bg-secondary-400/10 rounded-full blur-3xl animate-pulse-subtle -translate-x-1/2 md:translate-x-0" style={{ animationDelay: '2s' }} />

      <Container className="h-full">
        <div className="max-w-5xl mx-auto text-center md:text-left relative z-10">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-10 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span className="font-body">Your Technology Partner in Bellevue, WA</span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-10 leading-tight animate-fade-in-up">
            Enterprise-Grade IT Support
            <span className="block text-gradient-primary mt-2 md:mt-3">Built for Small Business Success</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-dark-text mb-10 md:mb-14 max-w-3xl mx-auto md:mx-0 leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Small businesses deserve powerful IT solutions without the complexity. We solve your tech problems and prevent future disruptions — so you can focus on growing your business, not troubleshooting it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start items-stretch sm:items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Button href="/contact" size="xl" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
              <Calendar className="w-5 h-5 mr-3" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
            <Button href="/services" variant="outline" size="xl" className="border-white/50 text-white hover:bg-white/10 hover:border-white transition-all duration-300">
              <Server className="w-5 h-5 mr-3" />
              Explore Our Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <p className="text-sm text-dark-text/80 font-body mb-6 text-center md:text-left">Trusted by small businesses across Bellevue and the Seattle Metro Area</p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center md:justify-start items-center gap-6 sm:gap-8 md:gap-12 opacity-80">
              <div className="text-center md:text-left">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white mb-1">10+</div>
                <div className="text-xs text-dark-text/80 font-body">Years Experience</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white mb-1">200+</div>
                <div className="text-xs text-dark-text/80 font-body">Projects Delivered</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white mb-1">99.9%</div>
                <div className="text-xs text-dark-text/80 font-body">Uptime Guarantee</div>
              </div>
              <div className="text-center md:text-left">
                <div className="font-heading font-bold text-2xl md:text-3xl text-white mb-1">24/7</div>
                <div className="text-xs text-dark-text/80 font-body">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
