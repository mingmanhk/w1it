import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import Card from '@/components/Card'
import {
  Wrench,
  QrCode,
  Eraser,
  PenTool,
  Minimize2,
  Maximize2,
  IdCard,
  RefreshCw,
  KeyRound,
  LineChart,
  FlaskConical,
  ArrowUpRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free IT Tools | W1IT Solutions',
  description:
    'Free, no-signup browser tools from W1IT: QR codes, background removal, image compression and resizing, passport photos, file conversion, password generation, and more - all hosted on taskin.app.',
}

const tools = [
  {
    icon: QrCode,
    name: 'QR Code Generator',
    description: 'Custom QR codes with colors, frames, and a center logo. Optional URL shortening.',
    href: 'https://taskin.app/qr-code',
  },
  {
    icon: Eraser,
    name: 'Background Remover',
    description: 'One-click photo background removal to a transparent PNG.',
    href: 'https://taskin.app/background-remover',
  },
  {
    icon: PenTool,
    name: 'Logo Generator',
    description: 'Minimal logos generated from a brand name, downloadable as SVG.',
    href: 'https://taskin.app/logo-generator',
  },
  {
    icon: Minimize2,
    name: 'Image Compressor',
    description: 'Shrink JPG, PNG, and WebP files with little visible quality loss.',
    href: 'https://taskin.app/image-compressor',
  },
  {
    icon: Maximize2,
    name: 'Image Resizer',
    description: 'Resize images to exact pixel dimensions, with optional aspect-ratio lock.',
    href: 'https://taskin.app/image-resizer',
  },
  {
    icon: IdCard,
    name: 'Passport Photo Maker',
    description: 'Passport and visa photos for 32 countries, with a printable 4x6 sheet at 300 DPI.',
    href: 'https://taskin.app/passport-photo',
  },
  {
    icon: RefreshCw,
    name: 'File Converter',
    description: 'Convert PDF to Word, Word to PDF, and between common image formats.',
    href: 'https://taskin.app/file-converter',
  },
  {
    icon: KeyRound,
    name: 'Password Generator',
    description: 'Strong, random passwords generated entirely in your browser.',
    href: 'https://taskin.app/password-generator',
  },
  {
    icon: LineChart,
    name: 'Stock Analysis',
    description: 'AI-generated analysis for a ticker. Educational only, not financial advice.',
    href: 'https://taskin.app/stock-analysis',
  },
  {
    icon: FlaskConical,
    name: 'Strategy Lab',
    description: 'Virtual-money bots running public trading strategies on the same data. Not financial advice.',
    href: 'https://taskin.app/strategy-lab',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/brand/hero-graphic.webp"
            alt="Free IT Tools"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-8">
          <Wrench className="w-20 h-20 mx-auto mb-6 opacity-90 text-white" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black mb-6">
            Free IT Tools
          </h1>
          <p className="text-xl md:text-2xl text-black/90 mb-8">
            Free, browser-based tools for everyday tasks - no signup required
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-neutral-600">
              These tools live on{' '}
              <Link
                href="https://taskin.app"
                className="text-brand-blue font-medium hover:underline"
              >
                taskin.app
              </Link>
              , a free toolkit built and maintained by W1IT. Everything runs in your browser - no
              account, no upload to a third party, no cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon
              return (
                <Link key={tool.name} href={tool.href} className="block h-full">
                  <Card hoverable className="h-full flex flex-col">
                    <Icon className="w-10 h-10 mb-4 text-brand-blue" />
                    <h2 className="text-lg font-heading font-semibold text-neutral-900 mb-2 flex items-center gap-1.5">
                      {tool.name}
                      <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                    </h2>
                    <p className="text-sm text-neutral-600 flex-1">{tool.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-neutral-600">
              Looking for native desktop or mobile apps instead?{' '}
              <Link href="/apps" className="text-brand-blue font-medium hover:underline">
                See our apps
              </Link>
              , or{' '}
              <Link href="/contact" className="text-brand-blue font-medium hover:underline">
                suggest a tool
              </Link>{' '}
              you&apos;d like us to build.
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}
