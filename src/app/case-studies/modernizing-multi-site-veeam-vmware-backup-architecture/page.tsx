import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Modernizing Multi-Site Veeam + VMware Backup Architecture for European Ferry Company | W1IT Solutions",
  description: "Case study: Consolidated complex backup infrastructure for a European ferry company, reducing complexity by 40% and eliminating snapshot failures.",
};

export default function CaseStudyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li><a href="/" className="text-blue-600 hover:underline">Home</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="/case-studies" className="text-blue-600 hover:underline">Case Studies</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">Modernizing Multi-Site Backup for Ferry Company</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Backup & Disaster Recovery
            </span>
            <span className="text-gray-500">• 3 months</span>
          </div>
          
          <h1 className="text-4xl font-bold mb-6">
            Modernizing Multi‑Site Veeam + VMware Backup Architecture for European Ferry Company
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Client</h3>
              <p className="text-gray-600">European Ferry & Transportation Company</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Industry</h3>
              <p className="text-gray-600">Transportation & Logistics</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["VMware vSphere", "Veeam Backup", "Dell Storage", "PRTG Monitoring", "Maritime Systems"].map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Results</h3>
              <p className="text-gray-600">40% complexity reduction, zero snapshot failures</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none">
          <h2>Challenge</h2>
          <p>
            A major European ferry company operating routes across the North Sea and Baltic Sea faced critical backup infrastructure challenges. With IT systems spanning multiple ports in Germany, Denmark, and Sweden, they struggled with:
          </p>
          <ul>
            <li>Inconsistent backup success rates across international locations</li>
            <li>Frequent snapshot consolidation failures impacting booking and logistics systems</li>
            <li>Complex management across different IT teams in multiple countries</li>
            <li>Lack of standardized monitoring for critical maritime operations systems</li>
            <li>Compliance challenges with maritime industry data protection regulations</li>
          </ul>

          <h2>Solution</h2>
          <p>
            W1IT Solutions conducted a comprehensive assessment of their multi-national IT infrastructure and implemented a standardized backup architecture:
          </p>
          <ul>
            <li>Consolidated multiple backup proxy servers across Germany, Denmark, and Sweden</li>
            <li>Standardized backup job configuration for all maritime operations systems</li>
            <li>Implemented proactive monitoring with PRTG for 24/7 visibility</li>
            <li>Created comprehensive documentation in multiple languages (German, English, Swedish)</li>
            <li>Established regular health check procedures compliant with maritime industry standards</li>
            <li>Implemented geo-redundant backup copies for critical booking and logistics data</li>
          </ul>

          <h2>Results</h2>
          <p>
            The modernization project delivered significant improvements for the ferry company&apos;s operations:
          </p>
          <ul>
            <li><strong>40% reduction</strong> in backup infrastructure complexity across all locations</li>
            <li><strong>100% elimination</strong> of snapshot consolidation failures affecting booking systems</li>
            <li><strong>99.9% backup success rate</strong> across all international sites</li>
            <li>Standardized processes reducing administrative overhead by 60%</li>
            <li>Proactive monitoring preventing issues before impacting ferry operations</li>
            <li>Full compliance with maritime industry data protection regulations</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
            <ul>
              <li>Standardized backup architecture improves reliability for multi-national operations</li>
              <li>Proactive monitoring is critical for 24/7 transportation industry systems</li>
              <li>Multi-language documentation ensures knowledge retention across international teams</li>
              <li>Industry-specific compliance requirements must be built into backup strategies</li>
            </ul>
          </div>

          <h2>Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {["VMware vSphere 7.0", "Veeam Backup & Replication 11", "Dell PowerStore Storage", "PRTG Network Monitor", "Windows Server 2022", "PowerShell Automation", "SNMP Monitoring", "Maritime Operations Systems"].map((tech) => (
              <div key={tech} className="bg-white border rounded-lg p-4 text-center">
                <span className="font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Similar Backup Architecture Improvements?</h2>
            <p className="text-lg mb-6 opacity-90">
              Whether you&apos;re dealing with backup complexity, snapshot issues, or need a complete backup modernization for your business, our team can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
              >
                Schedule Consultation
              </a>
              <a
                href="/services/managed-services"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition"
              >
                View Backup Services
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t">
          <a
            href="/case-studies"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Back to All Case Studies
          </a>
        </div>
      </div>
    </div>
  );
}
