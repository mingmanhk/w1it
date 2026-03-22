import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Case Studies | W1IT Solutions - Bellevue IT Managed Services",
  description: "Explore our technical expertise through detailed case studies and blog articles showcasing real-world IT solutions for businesses.",
  keywords: "IT case studies, technical blog, VMware, Veeam, backup solutions, Bellevue IT services",
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">IT Case Studies & Technical Insights</h1>
          <p className="text-xl text-gray-600">
            Explore our detailed technical articles and case studies showcasing real-world IT solutions
            for businesses in Bellevue and across Washington State.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-3">Featured Technical Article</h2>
              <h3 className="text-xl font-semibold mb-3">
                VMware & Veeam Backup Architecture for Financial Services
              </h3>
              <p className="text-gray-700 mb-4">
                Discover how we transformed backup infrastructure for a financial trading company,
                reducing complexity by 40% and eliminating critical snapshot failures.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Backup & Disaster Recovery
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  Virtualization
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Financial Services
                </span>
              </div>
              <Link
                href="/blog/vmware-veeam-backup-architecture-financial-services"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read Full Article
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-3">Key Results</h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Backup Complexity</span>
                    <span className="font-bold text-green-700">-40%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Snapshot Issues</span>
                    <span className="font-bold text-green-700">-90%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Recovery Time</span>
                    <span className="font-bold text-green-700">+60%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Browse All Technical Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Technical Blog</h3>
              <p className="text-gray-600 mb-4">
                In-depth articles on IT infrastructure, cybersecurity, cloud solutions, and best practices.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Blog
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-3">Our Services</h3>
              <p className="text-gray-600 mb-4">
                Explore our comprehensive IT managed services, from backup solutions to cybersecurity.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                View Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Have a Complex IT Challenge?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team specializes in solving complex IT infrastructure problems. Contact us to discuss
            how we can help transform your technology environment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
