import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Case Studies | W1IT Solutions - Bellevue IT Managed Services",
  description: "Real-world IT case studies showcasing our expertise in VMware, Veeam, backup architecture, and virtualization for businesses in Bellevue and beyond.",
  keywords: "IT case studies, VMware, Veeam, backup architecture, virtualization, Bellevue IT services",
};

const caseStudies = [
  {
    id: "modernizing-multi-site-veeam-vmware-backup-architecture",
    title: "Modernizing Multi‑Site Veeam + VMware Backup Architecture",
    excerpt: "Consolidated complex backup infrastructure for a European ferry company, reducing complexity by 40% and eliminating snapshot failures.",
    category: "Backup & Disaster Recovery",
    client: "European Ferry Company",
    industry: "Transportation & Logistics",
    duration: "3 months",
    technologies: ["VMware vSphere", "Veeam Backup", "Dell Storage", "PRTG Monitoring"],
    slug: "modernizing-multi-site-veeam-vmware-backup-architecture",
  },
  {
    id: "vmware-snapshot-governance-high-io-workload-protection",
    title: "VMware Snapshot Governance & High‑I/O Workload Protection",
    excerpt: "Implemented snapshot governance reducing incidents by 90% and improving backup reliability for financial trading systems.",
    category: "Virtualization",
    client: "Financial Trading Company",
    industry: "Financial Services",
    duration: "1 month",
    technologies: ["VMware vSphere", "Veeam", "ReFS", "Performance Monitoring"],
    slug: "vmware-snapshot-governance-high-io-workload-protection",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">IT Case Studies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real-world examples of how W1IT Solutions transforms IT infrastructure for businesses in Bellevue and beyond.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Our Expertise Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Backup & Disaster Recovery", "Virtualization", "Financial Services IT", "Transportation IT"].map((area) => (
            <span key={area} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {caseStudies.map((study) => (
          <div key={study.id} className="border rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {study.category}
                </span>
                <span className="text-gray-500 text-sm">{study.duration}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.excerpt}</p>
              
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="font-medium">Client:</span>
                  <span className="ml-2">{study.client}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Industry:</span>
                  <span className="ml-2">{study.industry}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {study.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/case-studies/${study.slug}`}
                className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                View Case Study
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-lg mb-6">
            Like what you see in our case studies? Let&apos;s discuss how we can apply these proven strategies to your Bellevue business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">Bellevue IT Solutions Expertise</h2>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            W1IT Solutions specializes in delivering comprehensive IT managed services for businesses in Bellevue, Washington. 
            Our case studies demonstrate real-world success in transforming complex IT environments into efficient, secure, and scalable infrastructure.
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Why Choose W1IT for Your Bellevue IT Needs?</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Local Bellevue Expertise:</strong> Deep understanding of Bellevue business environment and technology needs</li>
            <li><strong>Proven Methodologies:</strong> Documented success across multiple industries including finance, transportation, and technology</li>
            <li><strong>Comprehensive Solutions:</strong> End-to-end IT services from infrastructure to cloud migration</li>
            <li><strong>Industry Experience:</strong> Specialized knowledge in financial services, transportation, and enterprise IT requirements</li>
            <li><strong>24/7 Support:</strong> Round-the-clock monitoring and support for critical systems</li>
          </ul>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Serving Bellevue Businesses</h3>
          <p className="mb-4">
            Based in Bellevue, W1IT Solutions provides localized IT support with enterprise-grade expertise. 
            Whether you&apos;re a tech startup in downtown Bellevue or an established financial services company, 
            our team has the experience to optimize your IT infrastructure for maximum performance and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
