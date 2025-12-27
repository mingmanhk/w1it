import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { AlertTriangle, Phone, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency IT Support | W1IT Solutions',
  description: '24/7 emergency IT support for critical issues. Get immediate help from W1IT Solutions expert team.',
}

export default function EmergencyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-24 h-24 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Emergency IT Support
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Critical IT issues? We&apos;re here to help 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="tel:8324727991"
                size="lg"
                className="bg-white text-red-700 hover:bg-gray-100 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (832) 472-7991
              </Button>
              <Button
                href="mailto:contact@w1it.com"
                size="lg"
                className="bg-red-900 text-white hover:bg-red-950 text-lg"
              >
                Email Emergency Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What Qualifies as Emergency */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8 text-center">
              What Qualifies as an Emergency?
            </h2>
            <div className="bg-white rounded-xl p-8 border-2 border-red-200">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Complete network outage affecting business operations</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Security breach or suspected cyberattack</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Critical server or infrastructure failure</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Data loss or ransomware attack</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Website completely down affecting revenue</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">Email system failure preventing communication</span>
                </li>
              </ul>
            </div>
            <p className="text-center text-neutral-600 mt-6">
              For non-emergency support, please visit our <a href="/support" className="text-brand-blue hover:underline">Support Portal</a>
            </p>
          </div>
        </Container>
      </section>

      {/* Response Times */}
      <section className="py-20 md:py-32 bg-brand-gray-light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-12 text-center">
              Emergency Response Times
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl text-center border border-neutral-200">
                <Clock className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <div className="text-4xl font-bold text-brand-blue mb-2">15 min</div>
                <p className="text-neutral-600">Initial Response</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center border border-neutral-200">
                <Shield className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <div className="text-4xl font-bold text-brand-blue mb-2">24/7</div>
                <p className="text-neutral-600">Availability</p>
              </div>
              <div className="bg-white p-6 rounded-xl text-center border border-neutral-200">
                <Phone className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <div className="text-4xl font-bold text-brand-blue mb-2">1 hour</div>
                <p className="text-neutral-600">On-Site (if needed)</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Prevent Emergencies with Managed Services
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Proactive monitoring and maintenance to prevent critical issues before they happen
            </p>
            <Button href="/services/managed-services" size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              Learn About Managed Services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
