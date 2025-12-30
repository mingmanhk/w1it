import Link from 'next/link';
import Image from 'next/image';

/**
 * W1IT Terms of Service Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

export const metadata = {
  title: 'Terms of Service | W1 IT Solutions',
  description: 'Terms of service for W1 IT Solutions. Learn about our terms, conditions, and user agreements.',
};

export default function TermsOfService() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Terms of Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/80" />
        </div>
        <div className="relative max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-black mb-6">
              Terms of Service
            </h1>
            <p className="text-body-lg text-black/90 max-w-3xl mx-auto">
              Last updated: December 25, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-card p-8 md:p-12">
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-8">
              Welcome to W1 IT Solutions. These Terms of Service govern your use of our website
              w1it.com and our IT services. By accessing or using our services, you agree to be
              bound by these terms.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">1. Acceptance of Terms</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  By accessing and using the W1 IT Solutions website and services, you accept and agree
                  to be bound by these Terms of Service. If you do not agree to these terms, please do
                  not use our website or services.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">2. Services Description</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  W1 IT Solutions provides IT consulting, cloud infrastructure, serverless migration,
                  managed services, and related technology solutions. We reserve the right to modify,
                  suspend, or discontinue any part of our services at any time without prior notice.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">3. User Accounts</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">When creating an account with us, you agree to:</p>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Provide accurate, current, and complete information</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Maintain the security of your account credentials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Notify us immediately of any unauthorized access or security breach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Accept responsibility for all activities that occur under your account</span>
                  </li>
                </ul>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  We reserve the right to suspend or terminate accounts that violate these terms or
                  engage in fraudulent or abusive behavior.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">4. Service Agreements</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  Specific IT services provided by W1 IT Solutions are governed by separate Service
                  Level Agreements (SLAs) and Statements of Work (SOWs). These documents outline
                  specific terms, deliverables, timelines, and payment terms for each engagement.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">5. Payment Terms</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">For paid services, the following terms apply:</p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Fees are as specified in your service agreement or invoice</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Payment is due according to the terms specified in your agreement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Late payments may incur interest charges or service suspension</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">All fees are non-refundable unless otherwise specified</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">We may change our pricing with 30 days notice to existing customers</span>
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">6. Intellectual Property</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">
                  All content on our website, including text, graphics, logos, and software, is the
                  property of W1 IT Solutions or its licensors and is protected by intellectual
                  property laws.
                </p>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  Services provided may include proprietary tools, methodologies, and documentation.
                  Unless otherwise specified in a service agreement, these remain the property of
                  W1 IT Solutions.
                </p>
              </section>

              {/* Contact Section */}
              <section className="pt-8 border-t border-[#D9D9D9]">
                <h2 className="text-heading-md text-[#050816] mb-4">Contact Information</h2>
                <div className="space-y-2">
                  <p className="text-body text-[#4A4A4A]"><strong className="text-[#050816]">W1 IT Solutions</strong></p>
                  <p className="text-body text-[#4A4A4A]">Seattle, WA</p>
                  <p className="text-body text-[#4A4A4A]">
                    <strong className="text-[#050816]">Email:</strong>{' '}
                    <a href="mailto:legal@w1it.com" className="text-[#3A81F7] hover:underline font-bold">
                      legal@w1it.com
                    </a>
                  </p>
                  <p className="text-body text-[#4A4A4A]">
                    <strong className="text-[#050816]">Phone:</strong> 832 472 7991
                  </p>
                </div>
              </section>

              {/* Related Policies */}
              <div className="pt-8 border-t border-[#D9D9D9]">
                <h3 className="text-heading-md text-[#050816] mb-4">Related Policies</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/privacy"
                    className="px-6 py-3 bg-[#F5F5F5] hover:bg-[#D9D9D9] text-[#050816] rounded-card transition-colors text-body font-bold"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/cookies"
                    className="px-6 py-3 bg-[#F5F5F5] hover:bg-[#D9D9D9] text-[#050816] rounded-card transition-colors text-body font-bold"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-[#3A81F7] hover:bg-[#2563EB] text-white rounded-card transition-colors text-body font-bold"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
