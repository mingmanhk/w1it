import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { CheckSquare, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Checklists | W1IT Solutions',
  description: 'Download free IT checklists for security, maintenance, onboarding, and more from W1IT Solutions.',
}

export default function ChecklistsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        <div className="relative max-w-4xl mx-auto text-center px-8">
            <CheckSquare className="w-20 h-20 mx-auto mb-6 opacity-90 text-white" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
              IT Checklists
            </h1>
            <p className="text-xl md:text-2xl text-black/90 mb-8">
              Free downloadable IT checklists for your business
            </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Download className="w-16 h-16 mx-auto mb-6 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We&apos;re preparing comprehensive IT checklists for security, maintenance, onboarding, and disaster recovery. Check back soon for free downloads!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/blog">
                Read IT Best Practices
              </Button>
              <Button href="/contact" variant="secondary">
                Request Custom Checklist
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
