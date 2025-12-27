import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Shield, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Level Agreement (SLA) | W1IT Solutions',
  description: 'W1IT Solutions Service Level Agreement - Response times, uptime guarantees, and service commitments.',
}

export default function SLAPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Service Level Agreement
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Our commitment to quality, reliability, and responsive support
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
                Service Level Agreement Overview
              </h2>
              <p className="text-neutral-600 mb-8">
                This Service Level Agreement (SLA) outlines W1IT Solutions&apos; commitment to providing reliable,
                high-quality IT services to our clients. We guarantee specific response times, uptime levels,
                and support availability to ensure your business operations run smoothly.
              </p>

              {/* Response Times */}
              <div className="bg-white rounded-xl p-8 border border-neutral-200 mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-brand-blue mr-3" />
                  <h3 className="text-2xl font-heading font-bold text-neutral-900">
                    Response Time Guarantees
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                    <div>
                      <span className="font-bold text-red-600">Critical (P1)</span>
                      <p className="text-sm text-neutral-600">Complete service outage</p>
                    </div>
                    <span className="font-bold text-brand-blue">15 minutes</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                    <div>
                      <span className="font-bold text-orange-600">High (P2)</span>
                      <p className="text-sm text-neutral-600">Major functionality impaired</p>
                    </div>
                    <span className="font-bold text-brand-blue">1 hour</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                    <div>
                      <span className="font-bold text-yellow-600">Medium (P3)</span>
                      <p className="text-sm text-neutral-600">Minor issues, workaround available</p>
                    </div>
                    <span className="font-bold text-brand-blue">4 hours</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <span className="font-bold text-green-600">Low (P4)</span>
                      <p className="text-sm text-neutral-600">General questions or requests</p>
                    </div>
                    <span className="font-bold text-brand-blue">24 hours</span>
                  </div>
                </div>
              </div>

              {/* Uptime Guarantee */}
              <div className="bg-white rounded-xl p-8 border border-neutral-200 mb-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-brand-blue mr-3" />
                  <h3 className="text-2xl font-heading font-bold text-neutral-900">
                    Uptime Guarantee
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-brand-gray-light rounded-lg">
                    <div className="text-4xl font-bold text-brand-blue mb-2">99.9%</div>
                    <p className="text-neutral-600">Monthly Uptime</p>
                  </div>
                  <div className="text-center p-6 bg-brand-gray-light rounded-lg">
                    <div className="text-4xl font-bold text-brand-blue mb-2">24/7</div>
                    <p className="text-neutral-600">Monitoring</p>
                  </div>
                  <div className="text-center p-6 bg-brand-gray-light rounded-lg">
                    <div className="text-4xl font-bold text-brand-blue mb-2">&lt;1hr</div>
                    <p className="text-neutral-600">Max Downtime/Month</p>
                  </div>
                </div>
              </div>

              {/* Support Hours */}
              <div className="bg-white rounded-xl p-8 border border-neutral-200 mb-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-brand-blue mr-3" />
                  <h3 className="text-2xl font-heading font-bold text-neutral-900">
                    Support Availability
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Standard Support</span>
                    <span className="text-neutral-600">Mon-Fri, 9 AM - 6 PM PST</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Emergency Support</span>
                    <span className="text-neutral-600">24/7/365</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-neutral-700">Email Response</span>
                    <span className="text-neutral-600">Within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* Exclusions */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-900 mb-4">
                  SLA Exclusions
                </h3>
                <p className="text-neutral-600 mb-4">
                  This SLA does not apply to the following situations:
                </p>
                <ul className="list-disc list-inside space-y-2 text-neutral-600">
                  <li>Issues caused by client&apos;s equipment or third-party software</li>
                  <li>Scheduled maintenance windows (communicated 48 hours in advance)</li>
                  <li>Force majeure events beyond our control</li>
                  <li>Issues resulting from client modifications without our approval</li>
                  <li>Denial of Service (DoS) attacks or other malicious activities</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-brand-gray-light">
        <Container>
          <div className="bg-gradient-to-r from-brand-blue to-brand-cyan rounded-2xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Questions About Our SLA?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team to discuss custom SLA requirements for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
                Contact Sales
              </Button>
              <Button href="/services/managed-services" size="lg" className="bg-brand-navy text-white hover:bg-opacity-90">
                View Managed Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
