import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Users, Phone, Mail, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sales Inquiries | W1IT Solutions',
  description: 'Contact W1IT Solutions sales team for pricing, demos, and custom IT solutions for your business.',
}

export default function SalesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Sales Inquiries
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Let&apos;s discuss how W1IT Solutions can transform your IT infrastructure
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
                Get in Touch with Sales
              </h2>
              <p className="text-lg text-neutral-600">
                Our sales team is ready to help you find the perfect IT solution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow text-center">
                <Phone className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  Call Sales
                </h3>
                <p className="text-neutral-600 mb-4">
                  Speak directly with our sales team
                </p>
                <a
                  href="tel:8324727991"
                  className="text-brand-blue hover:text-brand-cyan font-medium"
                >
                  (832) 472-7991
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow text-center">
                <Mail className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  Email Sales
                </h3>
                <p className="text-neutral-600 mb-4">
                  Send us your requirements
                </p>
                <a
                  href="mailto:contact@w1it.com?subject=Sales Inquiry"
                  className="text-brand-blue hover:text-brand-cyan font-medium"
                >
                  contact@w1it.com
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow text-center">
                <Calendar className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  Schedule Demo
                </h3>
                <p className="text-neutral-600 mb-4">
                  Book a personalized consultation
                </p>
                <Button href="/contact" className="w-full">
                  Book Meeting
                </Button>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-brand-gray-light rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-6 text-center">
                What to Expect
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-neutral-900 mb-2">Discovery Call</h4>
                    <p className="text-neutral-600">
                      We&apos;ll discuss your business needs, current challenges, and goals
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-neutral-900 mb-2">Custom Proposal</h4>
                    <p className="text-neutral-600">
                      Receive a tailored solution with transparent pricing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-neutral-900 mb-2">Demo & Q&A</h4>
                    <p className="text-neutral-600">
                      See our solutions in action and get all your questions answered
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-blue text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-neutral-900 mb-2">Seamless Onboarding</h4>
                    <p className="text-neutral-600">
                      Quick implementation with minimal disruption to your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <Container>
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and custom quote for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                Request Quote
              </Button>
              <Button href="/services" size="lg" className="bg-brand-navy text-white hover:bg-opacity-90">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
