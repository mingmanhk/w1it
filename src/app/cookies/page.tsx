import Link from 'next/link';

/**
 * W1IT Cookie Policy Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

export const metadata = {
  title: 'Cookie Policy | W1 IT Solutions',
  description: 'Cookie policy for W1 IT Solutions. Learn about how we use cookies and tracking technologies.',
};

export default function CookiePolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
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
              This Cookie Policy explains how W1 IT Solutions uses cookies and similar tracking
              technologies on our website w1it.com. By using our website, you consent to the use
              of cookies as described in this policy.
            </p>

            <div className="space-y-10">
              {/* Section 1 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">1. What Are Cookies?</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  Cookies are small text files that are placed on your device (computer, tablet,
                  or mobile phone) when you visit a website. They are widely used to make websites
                  work more efficiently and provide information to website owners.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-6">
                  <div className="bg-[#F5F5F5] p-6 rounded-card">
                    <h3 className="text-body font-bold text-[#050816] mb-2">Essential Cookies</h3>
                    <p className="text-body text-[#4A4A4A] mb-4">
                      These cookies are necessary for the website to function properly. They enable
                      basic functions like page navigation and access to secure areas of the website.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Session management and authentication</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Security and fraud prevention</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Load balancing and performance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F5F5] p-6 rounded-card">
                    <h3 className="text-body font-bold text-[#050816] mb-2">Analytics Cookies</h3>
                    <p className="text-body text-[#4A4A4A] mb-4">
                      These cookies help us understand how visitors interact with our website by
                      collecting and reporting information anonymously.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Google Analytics for traffic analysis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Vercel Analytics for performance monitoring</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#F5F5F5] p-6 rounded-card">
                    <h3 className="text-body font-bold text-[#050816] mb-2">Preference Cookies</h3>
                    <p className="text-body text-[#4A4A4A] mb-4">
                      These cookies enable the website to remember information that changes the way
                      the website behaves or looks, like your preferred language or region.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Language and regional preferences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-body text-[#4A4A4A]">Cookie consent preferences</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">3. Managing Your Cookie Preferences</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Delete existing cookies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Block all or specific cookies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Set preferences for different websites</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-body text-[#4A4A4A]">Receive notifications when cookies are set</span>
                  </li>
                </ul>
                <p className="text-caption text-[#4A4A4A] mt-4">
                  Note: Blocking cookies may affect your ability to use certain features of our website.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-heading-md text-[#050816] mb-4">4. Contact Us</h2>
                <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, please
                  contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-body text-[#4A4A4A]">
                    <strong className="text-[#050816]">Email:</strong>{' '}
                    <a href="mailto:privacy@w1it.com" className="text-[#3A81F7] hover:underline font-bold">
                      privacy@w1it.com
                    </a>
                  </p>
                  <p className="text-body text-[#4A4A4A]">
                    <strong className="text-[#050816]">Address:</strong> W1 IT Solutions, Seattle, WA
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
                    href="/terms"
                    className="px-6 py-3 bg-[#F5F5F5] hover:bg-[#D9D9D9] text-[#050816] rounded-card transition-colors text-body font-bold"
                  >
                    Terms of Service
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
