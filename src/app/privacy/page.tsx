import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Container';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | W1 IT Solutions</title>
        <meta name="description" content="Privacy Policy for W1 IT Solutions. Learn how we collect, use, and protect your data." />
      </Head>
      <div className="bg-brand-gray-light py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-h1 text-brand-navy mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-brand-gray-mid font-body">
              <p>Last updated: October 26, 2023</p>

              <p>Your privacy is important to us. This Privacy Policy explains how W1 IT Solutions ("we," "us," or "our") collects, uses, and protects your personal information when you visit our website, use our services, or interact with us.</p>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li><b>Contact Information:</b> Name, email address, phone number, and company details when you fill out a form or contact us.</li>
                <li><b>Usage Data:</b> IP address, browser type, operating system, and pages visited, collected automatically through cookies and similar technologies.</li>
                <li><b>Client Data:</b> Information provided by you in the course of using our IT services, which is always handled with the strictest confidentiality.</li>
              </ul>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">2. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>To provide, maintain, and improve our services.</li>
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To send you updates, marketing communications, and important notices, with the option to opt out at any time.</li>
                <li>To analyze website usage and improve our user experience.</li>
                <li>To comply with legal obligations and protect our rights.</li>
              </ul>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">3. Data Security</h2>
              <p>We implement robust technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We are committed to ensuring your data is secure.</p>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information. We may share your data with trusted third-party service providers who assist us in our operations, but only under strict confidentiality agreements. We may also disclose information if required by law.</p>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections to any inaccurate data.</li>
                <li>Request deletion of your personal information.</li>
                <li>Object to or restrict our processing of your data.</li>
              </ul>
              <p>To exercise these rights, please contact us at <a href="mailto:privacy@w1it.com" className="text-brand-blue hover:underline">privacy@w1it.com</a>.</p>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">6. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this page periodically for any updates.</p>

              <h2 className="font-heading font-bold text-h2 text-brand-navy mt-12 mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please <Link href="/contact" className="text-brand-blue hover:underline">contact us</Link>.</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
