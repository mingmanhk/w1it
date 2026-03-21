import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Modernizing Multi-Site Veeam + VMware Backup Architecture | W1IT Solutions",
  description: "Case study: Consolidated complex backup infrastructure for a municipal government, reducing complexity by 40% and eliminating snapshot failures.",
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
            <li className="text-gray-600">Modernizing Multi-Site Veeam + VMware Backup Architecture</li>
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
            Modernizing Multi‑Site Veeam + VMware Backup Architecture
          </h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Client</h3>
              <p className="text-gray-600">Municipal Government</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Location</h3>
              <p className="text-gray-600">Washington State</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["VMware vSphere", "Veeam Backup", "Dell Storage", "PRTG Monitoring"].map((tech) => (
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
            A municipal government in Washington State operated a multi-site VMware environment with four Veeam proxy servers, inconsistent backup job design, and frequent snapshot consolidation failures. The environment suffered from:
          </p>
          <ul>
            <li>Inconsistent backup success rates across sites</li>
            <li>Frequent snapshot consolidation failures impacting production</li>
            <li>Complex management across multiple administrators</li>
            <li>Lack of standardized monitoring and reporting</li>
          </ul>

          <h2>Solution</h2>
          <p>
            W1IT Solutions conducted a comprehensive assessment and implemented a standardized backup architecture:
          </p>
          <ul>
            <li>Consolidated four proxy servers into two high-performance units</li>
            <li>Standardized backup job configuration across all sites</li>
            <li>Implemented proactive monitoring with PRTG</li>
            <li>Created comprehensive documentation and training</li>
            <li>Established regular health check procedures</li>
          </ul>

          <h2>Results</h2>
          <p>
            The modernization project delivered significant improvements:
          </p>
          <ul>
            <li><strong>40% reduction</strong> in backup infrastructure complexity</li>
            <li><strong>100% elimination</strong> of snapshot consolidation failures</li>
            <li><strong>99.9% backup success rate</strong> across all sites</li>
            <li>Standardized processes reducing administrative overhead</li>
            <li>Proactive monitoring preventing issues before impacting users</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
            <ul>
              <li>Standardized backup architecture improves reliability and reduces complexity</li>
              <li>Proactive monitoring prevents issues before they impact production</li>
              <li>Comprehensive documentation ensures knowledge retention</li>
              <li>Regular health checks maintain optimal performance</li>
            </ul>
          </div>

          <h2>Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {["VMware vSphere 7.0", "Veeam Backup & Replication 11", "Dell PowerStore Storage", "PRTG Network Monitor", "Windows Server 2022", "PowerShell Automation", "SNMP Monitoring", "ReFS Filesystem"].map((tech) => (
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
              Whether you&apos;re dealing with backup complexity, snapshot issues, or need a complete backup modernization, our team can help.
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
