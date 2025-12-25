import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | W1 IT Solutions',
  description: 'Privacy policy for W1 IT Solutions. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: December 25, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="lead text-slate-700 mb-8">
                At W1 IT Solutions, we are committed to protecting your privacy and personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website w1it.com or use our services.
              </p>

              <div className="space-y-10">
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-slate-800">Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide to us, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name, email address, phone number, and company information</li>
                      <li>Contact information when you submit inquiries or contact forms</li>
                      <li>Payment information for service purchases (processed securely through third-party providers)</li>
                      <li>Communications and correspondence with our team</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-slate-800 mt-6">Automatically Collected Information</h3>
                    <p>When you visit our website, we may automatically collect certain information, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address, browser type, and operating system</li>
                      <li>Pages visited, time spent on pages, and navigation patterns</li>
                      <li>Device information and location data (general, not precise)</li>
                      <li>Cookies and similar tracking technologies (see Cookie Policy)</li>
                    </ul>
                  </div>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
                  <p>We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing, operating, and maintaining our IT services</li>
                    <li>Responding to your inquiries and providing customer support</li>
                    <li>Sending service-related communications and updates</li>
                    <li>Improving our website, services, and user experience</li>
                    <li>Analyzing usage patterns and website performance</li>
                    <li>Preventing fraud and enhancing security measures</li>
                    <li>Complying with legal obligations and regulatory requirements</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information Sharing and Disclosure</h2>
                  <p>We do not sell, trade, or rent your personal information to third parties. We may share information in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website and providing services (e.g., hosting, analytics, payment processing)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of W1 IT Solutions, our users, or others</li>
                  </ul>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and vulnerability testing</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Secure development practices and code reviews</li>
                    <li>Employee training on data protection and privacy</li>
                  </ul>
                  <p className="mt-4">
                    While we strive to protect your information, no method of transmission over the Internet or electronic storage
                    is 100% secure. We cannot guarantee absolute security.
                  </p>
                </section>

                {/* Section 5 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Your Privacy Rights</h2>
                  <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information under certain circumstances</li>
                    <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Data Portability:</strong> Request transfer of your information to another organization</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at{' '}
                    <a href="mailto:privacy@w1it.com" className="text-sky-600 hover:text-sky-700 font-medium">
                      privacy@w1it.com
                    </a>
                    . We will respond to your request within 30 days.
                  </p>
                </section>

                {/* Section 6 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to collect information about your browsing behavior.
                    Cookies are small data files stored on your device. We use cookies for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Essential website functionality and security</li>
                    <li>Remembering your preferences and settings</li>
                    <li>Analyzing website traffic and user behavior</li>
                    <li>Personalizing content and advertisements</li>
                  </ul>
                  <p className="mt-4">
                    You can control cookies through your browser settings. However, disabling cookies may affect
                    your ability to use certain features of our website. For more information, please see our{' '}
                    <Link href="/cookies" className="text-sky-600 hover:text-sky-700 font-medium">
                      Cookie Policy
                    </Link>
                    .
                  </p>
                </section>

                {/* Section 7 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Third-Party Links and Services</h2>
                  <p>
                    Our website may contain links to third-party websites or services. This Privacy Policy does not apply to
                    those third-party sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                {/* Section 8 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Children's Privacy</h2>
                  <p>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                    information from children. If you believe we have collected information from a child, please contact us
                    immediately so we can take appropriate action.
                  </p>
                </section>

                {/* Section 9 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">9. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence.
                    These countries may have data protection laws that differ from your country. We take appropriate safeguards
                    to ensure your information remains protected in accordance with this Privacy Policy.
                  </p>
                </section>

                {/* Section 10 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to
                    review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                {/* Section 11 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:privacy@w1it.com" className="text-sky-600 hover:text-sky-700 font-medium">
                        privacy@w1it.com
                      </a>
                    </p>
                    <p>
                      <strong>Address:</strong> W1 IT Solutions, Seattle, WA
                    </p>
                    <p>
                      <strong>Phone:</strong> (206) 555-1234
                    </p>
                  </div>
                </section>
              </div>

              {/* Related Policies */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Related Policies</h3>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/terms"
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    Terms of Service
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