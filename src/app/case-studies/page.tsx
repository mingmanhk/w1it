import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Case Studies | W1IT Solutions - Washington IT Managed Services",
  description: "Real-world IT case studies showcasing our expertise in VMware, Veeam, UPS modernization, hardware lifecycle, cloud architecture, and IT governance for Washington businesses.",
  keywords: "IT case studies, VMware, Veeam, backup architecture, UPS modernization, hardware lifecycle, cloud migration, IT governance, Washington IT services",
};

const caseStudies = [
  {
    id: "modernizing-multi-site-veeam-vmware-backup-architecture",
    title: "Modernizing Multi‑Site Veeam + VMware Backup Architecture",
    excerpt: "Consolidated complex backup infrastructure for a municipal government, reducing complexity by 40% and eliminating snapshot failures.",
    category: "Backup & Disaster Recovery",
    client: "Municipal Government",
    location: "Washington State",
    duration: "3 months",
    technologies: ["VMware vSphere", "Veeam Backup", "Dell Storage", "PRTG Monitoring"],
    slug: "modernizing-multi-site-veeam-vmware-backup-architecture",
  },
  {
    id: "vmware-snapshot-governance-high-io-workload-protection",
    title: "VMware Snapshot Governance & High‑I/O Workload Protection",
    excerpt: "Implemented snapshot governance reducing incidents by 90% and improving backup reliability for critical systems.",
    category: "Virtualization",
    client: "Government Agency",
    location: "Washington",
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
          Real-world examples of how W1IT Solutions transforms IT infrastructure for Washington businesses and government agencies.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Our Expertise Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Backup & Disaster Recovery", "Virtualization"].map((area) => (
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
                  <span className="font-medium">Location:</span>
                  <span className="ml-2">{study.location}</span>
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
            Like what you see in our case studies? Let&apos;s discuss how we can apply these proven strategies to your business.
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
        <h2 className="text-3xl font-bold mb-6">Washington IT Solutions Expertise</h2>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            W1IT Solutions specializes in delivering comprehensive IT managed services for businesses and government agencies across Washington State. 
            Our case studies demonstrate real-world success in transforming complex IT environments into efficient, secure, and scalable infrastructure.
          </p>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Why Choose W1IT for Your Washington IT Needs?</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Local Expertise:</strong> Deep understanding of Washington business regulations and compliance requirements</li>
            <li><strong>Proven Methodologies:</strong> Documented success across multiple industries and organization sizes</li>
            <li><strong>Comprehensive Solutions:</strong> End-to-end IT services from infrastructure to cloud migration</li>
            <li><strong>Government Experience:</strong> Specialized knowledge in public sector IT requirements and security standards</li>
            <li><strong>24/7 Support:</strong> Round-the-clock monitoring and support for critical systems</li>
          </ul>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">Serving Washington Businesses</h3>
          <p className="mb-4">
            With locations serving Seattle, Bellevue, Tacoma, and surrounding areas, W1IT Solutions provides localized IT support 
            with enterprise-grade expertise. Whether you&apos;re a small business in downtown Seattle or a government agency in Washington State, 
            our team has the experience to optimize your IT infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
