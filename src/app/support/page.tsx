import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { Headphones, Mail, Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Support Portal | W1IT Solutions',
  description: 'Get IT support from W1IT Solutions. Access our support portal, submit tickets, and get help from our expert team.',
}

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us directly for immediate assistance',
      action: 'Call (832) 472-7991',
      href: 'tel:8324727991',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we&apos;ll respond within 24 hours',
      action: 'Email Us',
      href: 'mailto:contact@w1it.com',
    },
    {
      icon: MessageCircle,
      title: 'Contact Form',
      description: 'Fill out our contact form for non-urgent requests',
      action: 'Go to Contact',
      href: '/contact',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Support Portal
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              We&apos;re here to help with all your IT needs
            </p>
          </div>
        </Container>
      </section>

      {/* Support Options Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-neutral-600">
              Choose the best way to reach our support team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition-shadow text-center"
              >
                <option.icon className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-neutral-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-neutral-600 mb-6">{option.description}</p>
                <Button href={option.href} className="w-full">
                  {option.action}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Business Hours Section */}
      <section className="py-20 md:py-32 bg-brand-gray-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-8 text-center">
              Business Hours
            </h2>
            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                  <span className="font-medium text-neutral-700">Monday - Friday</span>
                  <span className="text-neutral-600">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                  <span className="font-medium text-neutral-700">Saturday</span>
                  <span className="text-neutral-600">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-neutral-700">Sunday</span>
                  <span className="text-neutral-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                <p className="text-sm text-neutral-600">
                  For emergency support outside business hours, please call our emergency line
                </p>
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
              Need Managed IT Support?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Upgrade to our managed services for 24/7 support and proactive monitoring
            </p>
            <Button href="/services/managed-services" className="bg-white text-brand-blue hover:bg-gray-100">
              Learn About Managed Services
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}
