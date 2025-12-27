import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | W1 IT Solutions',
  description: 'Terms of service for W1 IT Solutions. Learn about our terms, conditions, and user agreements.',
};

export default function TermsOfService() {
  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: December 25, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="lead text-slate-700 mb-8">
                Welcome to W1 IT Solutions. These Terms of Service govern your use of our website
                w1it.com and our IT services. By accessing or using our services, you agree to be
                bound by these terms.
              </p>

              <div className="space-y-10">
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the W1 IT Solutions website and services, you accept and agree
                    to be bound by these Terms of Service. If you do not agree to these terms, please do
                    not use our website or services.
                  </p>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Description</h2>
                  <p>
                    W1 IT Solutions provides IT consulting, cloud infrastructure, serverless migration,
                    managed services, and related technology solutions. We reserve the right to modify,
                    suspend, or discontinue any part of our services at any time without prior notice.
                  </p>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts</h2>
                  <div className="space-y-4">
                    <p>When creating an account with us, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Notify us immediately of any unauthorized access or security breach</li>
                      <li>Accept responsibility for all activities that occur under your account</li>
                    </ul>
                    <p>
                      We reserve the right to suspend or terminate accounts that violate these terms or
                      engage in fraudulent or abusive behavior.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Service Agreements</h2>
                  <p>
                    Specific IT services provided by W1 IT Solutions are governed by separate Service
                    Level Agreements (SLAs) and Statements of Work (SOWs). These documents outline
                    specific terms, deliverables, timelines, and payment terms for each engagement.
                  </p>
                </section>

                {/* Section 5 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Terms</h2>
                  <div className="space-y-4">
                    <p>For paid services, the following terms apply:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fees are as specified in your service agreement or invoice</li>
                      <li>Payment is due according to the terms specified in your agreement</li>
                      <li>Late payments may incur interest charges or service suspension</li>
                      <li>All fees are non-refundable unless otherwise specified</li>
                      <li>We may change our pricing with 30 days notice to existing customers</li>
                    </ul>
                  </div>
                </section>

                {/* Section 6 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Intellectual Property</h2>
                  <div className="space-y-4">
                    <p>
                      All content on our website, including text, graphics, logos, and software, is the
                      property of W1 IT Solutions or its licensors and is protected by intellectual
                      property laws.
                    </p>
                    <p>
                      Services provided may include proprietary tools, methodologies, and documentation.
                      Unless otherwise specified in a service agreement, these remain the property of
                      W1 IT Solutions.
                    </p>
                  </div>
                </section>

                {/* Section 7 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. User Content</h2>
                  <p>
                    You retain ownership of any content you submit to us. By submitting content, you grant
                    us a license to use, reproduce, and modify the content as necessary to provide our
                    services. You are responsible for ensuring you have the rights to any content you
                    submit.
                  </p>
                </section>

                {/* Section 8 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Prohibited Activities</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our services for any illegal or unauthorized purpose</li>
                    <li>Violate any laws, regulations, or third-party rights</li>
                    <li>Interfere with or disrupt the security or functionality of our services</li>
                    <li>Attempt to gain unauthorized access to our systems or data</li>
                    <li>Use our services to transmit malware, viruses, or harmful code</li>
                    <li>Engage in any activity that could damage our reputation or business</li>
                  </ul>
                </section>

                {/* Section 9 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Disclaimer of Warranties</h2>
                  <p>
                    Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                    either express or implied. We do not warrant that our services will be uninterrupted,
                    error-free, or completely secure.
                  </p>
                </section>

                {/* Section 10 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, W1 IT Solutions shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages arising from your
                    use of our services. Our total liability shall not exceed the amount paid by you for
                    the services in the six months preceding the claim.
                  </p>
                </section>

                {/* Section 11 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless W1 IT Solutions, its officers, directors,
                    employees, and agents from any claims, damages, losses, or expenses arising from your
                    use of our services, violation of these terms, or infringement of any rights.
                  </p>
                </section>

                {/* Section 12 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
                  <p>
                    We may terminate or suspend your access to our services at any time, with or without
                    cause, with or without notice. Upon termination, your right to use our services will
                    immediately cease.
                  </p>
                </section>

                {/* Section 13 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law</h2>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws
                    of the State of Washington, without regard to its conflict of law provisions.
                  </p>
                </section>

                {/* Section 14 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Dispute Resolution</h2>
                  <p>
                    Any disputes arising from these terms shall first be attempted to be resolved through
                    good faith negotiation. If unresolved, disputes shall be submitted to binding
                    arbitration in Seattle, Washington, in accordance with the rules of the American
                    Arbitration Association.
                  </p>
                </section>

                {/* Section 15 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms of Service at any time. We will notify you
                    of material changes by posting the updated terms on our website. Your continued use
                    of our services after changes constitutes acceptance of the modified terms.
                  </p>
                </section>

                {/* Section 16 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Information</h2>
                  <div className="space-y-2">
                    <p>
                      <strong>W1 IT Solutions</strong>
                    </p>
                    <p>Seattle, WA</p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:legal@w1it.com" className="text-sky-600 hover:text-sky-700 font-medium">
                        legal@w1it.com
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong> 832 472 7991
                    </p>
                  </div>
                </section>
              </div>

              {/* Related Policies */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Related Policies</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/privacy"
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/cookies"
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-lg transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}