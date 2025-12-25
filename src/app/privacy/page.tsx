import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Container';
import Button from '@/components/Button';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | W1 IT Solutions</title>
        <meta name="description" content="Privacy Policy for W1 IT Solutions. Learn how we collect, use, and protect your data." />
      </Head>
      <Container>
        <div className="py-20 md:py-32">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-medium font-inter mb-8">
            Your privacy is important to us. This Privacy Policy explains how W1 IT Solutions collects, uses, and protects your personal information.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-poppins font-bold text-3xl text-charcoal mt-12 mb-4">Information We Collect</h2>
            <p className="text-gray-medium font-inter leading-relaxed">
              We may collect personal information from you such as your name, email address, phone number, or other contact details when you use our website, contact us for support, or engage with our services. We also collect non-personal information such as your IP address, browser type, and operating system to help us improve our services.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-charcoal mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-gray-medium font-inter leading-relaxed">
              We use the information we collect to provide and improve our services, to communicate with you, and to personalize your experience. We may also use your information to send you marketing communications, but you can opt out at any time.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-charcoal mt-12 mb-4">How We Protect Your Information</h2>
            <p className="text-gray-medium font-inter leading-relaxed">
              We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect it from unauthorized access, use, or disclosure.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-charcoal mt-12 mb-4">Sharing Your Information</h2>
            <p className="text-gray-medium font-inter leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="font-poppins font-bold text-3xl text-charcoal mt-12 mb-4">Your Rights</h2>
            <p className="text-gray-medium font-inter leading-relaxed">
              You have the right to access, correct, or delete your personal information. You also have the right to object to or restrict our processing of your personal information. If you have any questions or concerns about our Privacy Policy, please contact us.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;