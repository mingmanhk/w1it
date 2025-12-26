import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Container from '@/components/Container';

const SolutionsPage: NextPage = () => {
  const solutions = [
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics solutions.',
      href: '/solutions/data-analytics',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Analytics', 'Reporting Dashboards']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack for the digital age.',
      href: '/solutions/digital-transformation',
      features: ['Process Automation', 'Cloud Migration', 'Legacy System Modernization', 'Digital Strategy']
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions | W1 IT Solutions</title>
        <meta name="description" content="Explore our comprehensive IT solutions designed to transform your business operations and drive growth." />
      </Head>
      <div className="bg-brand-gray-light py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading font-bold text-h1 text-brand-navy mb-4">Our Solutions</h1>
            <p className="text-body-lg text-brand-gray-mid">
              Tailored IT solutions designed to address your specific business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-white border border-[#E2E8F0] rounded-card p-8 shadow-card hover:shadow-lg transition-shadow">
                <h2 className="font-heading font-bold text-h2 text-brand-navy mb-3">{solution.title}</h2>
                <p className="text-body-md text-brand-gray-mid mb-6">{solution.description}</p>

                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-body-md text-brand-gray-mid">
                      <span className="w-2 h-2 bg-brand-blue rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={solution.href}
                  className="inline-block bg-brand-blue text-white font-body text-base font-medium px-6 py-3 rounded-btn hover:opacity-90 transition-opacity"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="font-heading font-bold text-h2 text-brand-navy mb-4">Need a Custom Solution?</h2>
            <p className="text-body-lg text-brand-gray-mid mb-8">
              Every business is unique. Contact us to discuss how we can create a tailored solution for your specific needs.
            </p>
            <Link
              href="/contact"
              className="bg-brand-navy text-white font-body text-base font-medium px-8 py-4 rounded-btn hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SolutionsPage;