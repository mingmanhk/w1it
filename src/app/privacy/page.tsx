import Link from 'next/link';
import { Metadata } from 'next';

/**
 * W1IT Privacy Policy Page
 * Matches: W1IT Design System
 * Specs: Clean layout, W1IT colors, typography, spacing
 */

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for W1IT Solutions. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#050816]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-body-lg text-[#D9D9D9] max-w-3xl mx-auto">
              Your privacy is important to us
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[#F5F5F5]">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-card p-8 md:p-12">
            <p className="text-caption text-[#4A4A4A] mb-8">Last updated: December 28, 2025</p>

            <p className="text-body text-[#4A4A4A] leading-relaxed mb-8">
              Your privacy is important to us. This Privacy Policy explains how W1IT Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when you visit our website, use our services, or interact with us.
            </p>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">1. Information We Collect</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">We may collect the following types of personal information:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]"><strong className="text-[#050816]">Contact Information:</strong> Name, email address, phone number, and company details when you fill out a form or contact us.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]"><strong className="text-[#050816]">Usage Data:</strong> IP address, browser type, operating system, and pages visited, collected automatically through cookies and similar technologies.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]"><strong className="text-[#050816]">Client Data:</strong> Information provided by you in the course of using our IT services, which is always handled with the strictest confidentiality.</span>
              </li>
            </ul>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">2. How We Use Your Information</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">We use your information for the following purposes:</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">To provide, maintain, and improve our services</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">To respond to your inquiries and provide customer support</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">To send you updates, marketing communications, and important notices (with the option to opt out)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">To analyze website usage and improve our user experience</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">To comply with legal obligations and protect our rights</span>
              </li>
            </ul>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">3. Data Security</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-8">
              We implement robust technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. As an IT security provider, we are committed to ensuring your data is secure using industry-leading practices.
            </p>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">4. Information Sharing</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-8">
              We do not sell, trade, or rent your personal information. We may share your data with trusted third-party service providers who assist us in our operations, but only under strict confidentiality agreements. We may also disclose information if required by law.
            </p>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">5. Your Rights</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">Access the personal information we hold about you</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">Request corrections to any inaccurate data</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">Request deletion of your personal information</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="inline-block w-1.5 h-1.5 bg-[#3A81F7] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-body text-[#4A4A4A]">Object to or restrict our processing of your data</span>
              </li>
            </ul>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-8">
              To exercise these rights, please contact us at <a href="mailto:contact@w1it.com" className="text-[#3A81F7] hover:underline font-bold">contact@w1it.com</a> or call <a href="tel:+18324727991" className="text-[#3A81F7] hover:underline font-bold">(832) 472-7991</a>.
            </p>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">6. Changes to This Policy</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed mb-8">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this page periodically for any updates.
            </p>

            <h2 className="text-heading-md text-[#050816] mt-12 mb-6">Contact Us</h2>
            <p className="text-body text-[#4A4A4A] leading-relaxed">
              If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-[#3A81F7] hover:underline font-bold">contact us</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
