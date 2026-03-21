import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modernizing Multi-Site Veeam + VMware Backup Architecture | W1IT Case Study",
  description: "Case study: How W1IT Solutions consolidated complex backup infrastructure for a Washington municipal government, reducing complexity by 40% and eliminating snapshot failures.",
  keywords: "Veeam backup, VMware backup, disaster recovery, Washington IT services, municipal IT, backup architecture",
};

export default function CaseStudy1() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          Backup & Disaster Recovery
        </span>
        <span className="ml-3 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          Government IT
        </span>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">Modernizing a Multi‑Site Veeam + VMware Backup Architecture</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="font-medium">Client:</span>
              <span>City of Lakewood, Washington</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Duration:</span>
              <span>3 months</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Team Size:</span>
              <span>2 IT Specialists</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium">Technologies:</span>
              <span>VMware, Veeam, Dell Storage</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Results</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-3">✓</span>
              <span>40% reduction in backup job complexity</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-3">✓</span>
              <span>Snapshot consolidation failures reduced to near zero</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-3">✓</span>
              <span>Improved RPO/RTO consistency</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-2xl mr-3">✓</span>
              <span>Clear documentation for leadership and auditors</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">Executive Summary</h2>
        <p className="text-lg mb-6">
          The City of Lakewood operated a multi‑site VMware environment with four Veeam proxy servers, inconsistent backup job design, 
          and limited visibility into snapshot consolidation. As IT leadership transitioned, the goal was to simplify the architecture, 
          reduce operational risk, and create a scalable, audit‑ready backup strategy.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Problem Statement</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Four Veeam proxies deployed across two sites with unclear roles</li>
          <li>Snapshot consolidation delays causing datastore latency</li>
          <li>No unified documentation of backup flows</li>
          <li>Lack of monitoring for VMware snapshot health</li>
          <li>No proof of concept to validate future architecture options</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Technical Environment</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {["VMware vSphere ESXi clusters", "Dell SCv3200 storage", "Veeam Backup & Replication", "Windows Server backup repositories", "PRTG for monitoring"].map((item) => (
            <div key={item} className="bg-gray-50 p-4 rounded">
              {item}
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Solution Architecture</h2>
        <p className="mb-4">Our team implemented a comprehensive backup modernization strategy:</p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Consolidated proxy roles into a two‑tier architecture (transport + management)</li>
          <li>Enabled VMware snapshot consolidation alerts</li>
          <li>Implemented PRTG monitoring for datastore latency</li>
          <li>Designed a new Veeam job taxonomy aligned with workload tiers</li>
          <li>Launched a POC to evaluate simplified proxy deployment</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Implementation Steps</h2>
        <ol className="list-decimal pl-5 space-y-3 mb-6">
          <li>Mapped all Veeam components and dependencies across both sites</li>
          <li>Identified redundant proxies and merged workloads for efficiency</li>
          <li>Enabled comprehensive email notifications for backup completion and failures</li>
          <li>Implemented automated snapshot monitoring and cleanup workflows</li>
          <li>Documented the new architecture for audit compliance and team onboarding</li>
        </ol>

        <h2 className="text-3xl font-bold mt-8 mb-4">Outcome & Metrics</h2>
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="text-green-600 font-bold text-xl mr-3">40%</span>
              <span>Reduction in backup job complexity</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold text-xl mr-3">100%</span>
              <span>Snapshot consolidation failures eliminated</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold text-xl mr-3">24/7</span>
              <span>Monitoring coverage achieved</span>
            </li>
            <li className="flex items-center">
              <span className="text-green-600 font-bold text-xl mr-3">100%</span>
              <span>Audit documentation completeness</span>
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Lessons Learned</h2>
        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li>Snapshot monitoring is essential in high‑I/O VMware environments</li>
            <li>Proxy sprawl increases operational risk and complexity</li>
            <li>Architecture must be formally documented, not tribal knowledge</li>
            <li>Regular backup testing is critical for disaster recovery readiness</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Recommended Next Steps</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Evaluate immutable backup storage for enhanced ransomware protection</li>
          <li>Implement quarterly backup architecture reviews and optimization</li>
          <li>Expand monitoring to include ReFS health and repository performance</li>
          <li>Conduct regular disaster recovery drills to validate recovery procedures</li>
        </ul>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Need Similar Backup Modernization?</h3>
          <p className="mb-6">
            If your organization faces similar backup challenges, our team can help you implement a robust, 
            scalable backup architecture tailored to your specific needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition"
          >
            Contact Our Backup Experts
          </a>
        </div>
      </div>
    </div>
  );
}
