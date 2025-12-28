import { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { BookOpen, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Knowledge Base | W1IT Solutions',
  description: 'Access comprehensive IT guides, tutorials, and best practices from W1IT Solutions.',
}

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-cyan text-white py-24 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-20 h-20 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Knowledge Base
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive IT guides, tutorials, and best practices
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Search className="w-16 h-16 mx-auto mb-6 text-brand-blue" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We&apos;re building a comprehensive knowledge base with IT guides, troubleshooting tips, and best practices. Check back soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/blog">
                Read Our Blog
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Support
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
