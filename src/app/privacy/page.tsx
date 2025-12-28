import Link from 'next/link';
import Container from '@/components/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for W1IT Solutions. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="overflow-hidden py-20 md:py-32 bg-white">
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in-up">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Your privacy is important to us
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-neutral-500 font-body mb-8">Last updated: December 28, 2025</p>

              <p className="text-lg text-neutral-700 font-body leading-relaxed mb-8">
                Your privacy is important to us. This Privacy Policy explains how W1IT Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects your personal information when you visit our website, use our services, or interact with us.
              </p>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">1. Information We Collect</h2>
              <p className="text-neutral-700 font-body leading-relaxed mb-4">We may collect the following types of personal information:</p>
              <ul className="space-y-3 mb-8">
                <li className="text-neutral-700 font-body"><strong className="text-neutral-900">Contact Information:</strong> Name, email address, phone number, and company details when you fill out a form or contact us.</li>
                <li className="text-neutral-700 font-body"><strong className="text-neutral-900">Usage Data:</strong> IP address, browser type, operating system, and pages visited, collected automatically through cookies and similar technologies.</li>
                <li className="text-neutral-700 font-body"><strong className="text-neutral-900">Client Data:</strong> Information provided by you in the course of using our IT services, which is always handled with the strictest confidentiality.</li>
              </ul>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">2. How We Use Your Information</h2>
              <p className="text-neutral-700 font-body leading-relaxed mb-4">We use your information for the following purposes:</p>
              <ul className="space-y-3 mb-8">
                <li className="text-neutral-700 font-body">To provide, maintain, and improve our services</li>
                <li className="text-neutral-700 font-body">To respond to your inquiries and provide customer support</li>
                <li className="text-neutral-700 font-body">To send you updates, marketing communications, and important notices (with the option to opt out)</li>
                <li className="text-neutral-700 font-body">To analyze website usage and improve our user experience</li>
                <li className="text-neutral-700 font-body">To comply with legal obligations and protect our rights</li>
              </ul>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">3. Data Security</h2>
              <p className="text-neutral-700 font-body leading-relaxed mb-8">
                We implement robust technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. As an IT security provider, we are committed to ensuring your data is secure using industry-leading practices.
              </p>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">4. Information Sharing</h2>
              <p className="text-neutral-700 font-body leading-relaxed mb-8">
                We do not sell, trade, or rent your personal information. We may share your data with trusted third-party service providers who assist us in our operations, but only under strict confidentiality agreements. We may also disclose information if required by law.
              </p>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">5. Your Rights</h2>
              <p className="text-neutral-700 font-body leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-3 mb-4">
                <li className="text-neutral-700 font-body">Access the personal information we hold about you</li>
                <li className="text-neutral-700 font-body">Request corrections to any inaccurate data</li>
                <li className="text-neutral-700 font-body">Request deletion of your personal information</li>
                <li className="text-neutral-700 font-body">Object to or restrict our processing of your data</li>
              </ul>
              <p className="text-neutral-700 font-body leading-relaxed mb-8">
                To exercise these rights, please contact us at <a href="mailto:contact@w1it.com" className="text-primary-600 hover:underline font-medium">contact@w1it.com</a> or call <a href="tel:+18324727991" className="text-primary-600 hover:underline font-medium">(832) 472-7991</a>.
              </p>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">6. Changes to This Policy</h2>
              <p className="text-neutral-700 font-body leading-relaxed mb-8">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this page periodically for any updates.
              </p>

              <h2 className="font-heading font-bold text-3xl text-neutral-900 mt-12 mb-6">Contact Us</h2>
              <p className="text-neutral-700 font-body leading-relaxed">
                If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-primary-600 hover:underline font-medium">contact us</Link>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
