import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services in Bellevue | W1IT Solutions - Bellevue IT Managed Services",
  description: "Professional IT managed services in Bellevue, WA. Local IT support, cybersecurity, cloud solutions, and network management for Bellevue businesses.",
  keywords: "Bellevue IT services, IT support Bellevue, managed IT services Bellevue, cybersecurity Bellevue, cloud solutions Bellevue",
};

export default function BellevuePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">IT Services in Bellevue, WA</h1>
      <p className="text-lg mb-6">
        W1IT Solutions provides comprehensive IT managed services for businesses in Bellevue, Washington. 
        As a Bellevue-based IT company, we offer expert IT support, cybersecurity, cloud solutions, and network management 
        specifically tailored to Bellevue&apos;s dynamic business environment.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Bellevue IT Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Managed IT Support & Maintenance</li>
            <li>Network Security & Cybersecurity</li>
            <li>Data Backup & Disaster Recovery</li>
            <li>Cloud Migration & Management</li>
            <li>Hardware & Software Management</li>
            <li>IT Consulting & Strategy</li>
            <li>Virtualization & Server Management</li>
            <li>24/7 Monitoring & Support</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose W1IT in Bellevue</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Local Bellevue Team:</strong> We&apos;re based in Bellevue and understand the local business landscape</li>
            <li><strong>Quick Response Times:</strong> On-site support available throughout Bellevue</li>
            <li><strong>Industry Expertise:</strong> Experience with Bellevue&apos;s tech, finance, and healthcare sectors</li>
            <li><strong>Scalable Solutions:</strong> Services that grow with your Bellevue business</li>
            <li><strong>Proven Results:</strong> Case studies demonstrating success with Bellevue companies</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Serving Bellevue Business Districts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Downtown Bellevue", "Bellevue Downtown Park", "Crossroads", "Factoria", "Eastgate", "Wilburton", "Bridle Trails", "Medina"].map((area) => (
            <div key={area} className="bg-white p-4 rounded-lg text-center shadow-sm">
              <span className="font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 p-8 bg-blue-600 text-white rounded-2xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Contact Our Bellevue Team</h2>
          <p className="text-lg mb-6">
            Ready to optimize your Bellevue business&apos;s IT systems? As a local Bellevue IT company, 
            we provide personalized service and quick response times for businesses throughout the area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition text-center"
            >
              Get Bellevue IT Support
            </a>
            <a 
              href="tel:+14258889999" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/10 transition text-center"
            >
              Call: (425) 888-9999
            </a>
          </div>
          <p className="mt-4 text-sm opacity-80">
            * Serving Bellevue and surrounding areas. Remote support available for select services.
          </p>
        </div>
      </div>

      {/* Bellevue Business Focus */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6">IT Solutions for Bellevue Industries</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Technology Companies</h3>
            <p className="text-gray-600">
              Specialized IT support for Bellevue&apos;s growing tech sector, including startups and established software companies.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Financial Services</h3>
            <p className="text-gray-600">
              Secure, compliant IT solutions for Bellevue&apos;s finance and investment firms with regulatory expertise.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">Healthcare & Professional Services</h3>
            <p className="text-gray-600">
              HIPAA-compliant IT solutions for Bellevue healthcare providers and professional service firms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
