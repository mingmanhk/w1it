import React from 'react';
import Container from '@/components/Container';
import Link from 'next/link';

export const metadata = {
  title: 'Cookie Policy | W1 IT Solutions',
  description: 'Cookie policy for W1 IT Solutions. Learn about how we use cookies and tracking technologies.',
};

export default function CookiePolicy() {
  return (
    <Container>
      <div className="py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: December 25, 2025
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="lead text-slate-700 mb-8">
                This Cookie Policy explains how W1 IT Solutions uses cookies and similar tracking
                technologies on our website w1it.com. By using our website, you consent to the use
                of cookies as described in this policy.
              </p>

              <div className="space-y-10">
                {/* Section 1 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
                  <p>
                    Cookies are small text files that are placed on your device (computer, tablet,
                    or mobile phone) when you visit a website. They are widely used to make websites
                    work more efficiently and provide information to website owners.
                  </p>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Types of Cookies We Use</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Essential Cookies</h3>
                      <p>
                        These cookies are necessary for the website to function properly. They enable
                        basic functions like page navigation and access to secure areas of the website.
                        The website cannot function properly without these cookies.
                      </p>
                      <div className="mt-3 bg-slate-50 p-4 rounded-lg">
                        <p className="font-medium text-slate-700">Examples:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Session management and authentication</li>
                          <li>Security and fraud prevention</li>
                          <li>Load balancing and performance</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Analytics Cookies</h3>
                      <p>
                        These cookies help us understand how visitors interact with our website by
                        collecting and reporting information anonymously. This helps us improve our
                        website and services.
                      </p>
                      <div className="mt-3 bg-slate-50 p-4 rounded-lg">
                        <p className="font-medium text-slate-700">Examples:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Google Analytics for traffic analysis</li>
                          <li>Vercel Analytics for performance monitoring</li>
                          <li>Heatmap and session recording tools</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Preference Cookies</h3>
                      <p>
                        These cookies enable the website to remember information that changes the way
                        the website behaves or looks, like your preferred language or region.
                      </p>
                      <div className="mt-3 bg-slate-50 p-4 rounded-lg">
                        <p className="font-medium text-slate-700">Examples:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Language and regional preferences</li>
                          <li>Font size and accessibility settings</li>
                          <li>Cookie consent preferences</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Marketing Cookies</h3>
                      <p>
                        These cookies are used to track visitors across websites. The intention is to
                        display ads that are relevant and engaging for individual users.
                      </p>
                      <div className="mt-3 bg-slate-50 p-4 rounded-lg">
                        <p className="font-medium text-slate-700">Examples:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Retargeting and remarketing campaigns</li>
                          <li>Conversion tracking for advertising</li>
                          <li>Social media integration and sharing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Third-Party Cookies</h2>
                  <p>
                    In addition to our own cookies, we may also use various third-party cookies to
                    report usage statistics, deliver advertisements, and provide other services.
                  </p>
                  <div className="mt-4 space-y-3">
                    <p><strong>Google Analytics:</strong> Used to understand how visitors engage with our website.</p>
                    <p><strong>Vercel Analytics:</strong> Used for performance monitoring and optimization.</p>
                    <p><strong>Social Media Platforms:</strong> Used for sharing content and integration.</p>
                  </div>
                </section>

                {/* Section 4 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How Long Cookies Stay on Your Device</h2>
                  <div className="space-y-4">
                    <p>Cookies have different lifespans:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser
                      </li>
                      <li>
                        <strong>Persistent Cookies:</strong> Remain on your device for a set period or until deleted
                      </li>
                      <li>
                        <strong>First-Party Cookies:</strong> Set by our website domain
                      </li>
                      <li>
                        <strong>Third-Party Cookies:</strong> Set by domains other than ours
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Managing Your Cookie Preferences</h2>
                  <div className="space-y-4">
                    <p>You have several options to manage cookies:</p>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Browser Settings</h3>
                      <p>
                        Most web browsers allow you to control cookies through their settings. You can:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Delete existing cookies</li>
                        <li>Block all or specific cookies</li>
                        <li>Set preferences for different websites</li>
                        <li>Receive notifications when cookies are set</li>
                      </ul>
                      <p className="mt-2 text-sm text-slate-600">
                        Note: Blocking cookies may affect your ability to use certain features of our website.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Cookie Consent Tool</h3>
                      <p>
                        When you first visit our website, you will see a cookie consent banner that allows
                        you to choose which categories of cookies to accept.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Opt-Out Tools</h3>
                      <p>
                        For third-party advertising cookies, you can use industry opt-out tools:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>
                          <a
                            href="https://optout.aboutads.info/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 hover:text-sky-700"
                          >
                            Digital Advertising Alliance (DAA) Opt-Out
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.youronlinechoices.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-600 hover:text-sky-700"
                          >
                            European Interactive Digital Advertising Alliance (EDAA) Opt-Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Section 6 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Do Not Track Signals</h2>
                  <p>
                    Some browsers have a "Do Not Track" feature that lets you tell websites you do not
                    want to be tracked. Currently, we do not respond to "Do Not Track" signals because
                    there is no standard for how websites should respond to these signals.
                  </p>
                </section>

                {/* Section 7 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Changes to This Cookie Policy</h2>
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our
                    practices or for other operational, legal, or regulatory reasons. We will notify
                    you of any material changes by posting the new policy on this page.
                  </p>
                </section>

                {/* Section 8 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Contact Us</h2>
                  <p>
                    If you have any questions about our use of cookies or this Cookie Policy, please
                    contact us:
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

              {/* Cookie Categories Table */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-xl font-semibold text-slate-800 mb-6">Cookie Categories Summary</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200">
                    <thead>
                      <tr className="bg-slate-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Category</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Purpose</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Examples</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Can Disable?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">Essential</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Website functionality and security</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Session, authentication, security</td>
                        <td className="px-4 py-3 text-sm text-slate-700">No (site won't work properly)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">Analytics</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Website improvement and optimization</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Google Analytics, Vercel Analytics</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">Preference</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Personalization and settings</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Language, accessibility, consent</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">Marketing</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Advertising and targeting</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Retargeting, social media</td>
                        <td className="px-4 py-3 text-sm text-slate-700">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                    href="/terms"
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                  >
                    Terms of Service
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