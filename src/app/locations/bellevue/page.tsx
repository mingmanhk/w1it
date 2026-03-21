import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services in Bellevue | W1IT Solutions",
  description: "Professional IT managed services in Bellevue, WA. Local IT support, cybersecurity, cloud solutions, and network management for Bellevue businesses.",
};

export default function BellevuePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">IT Services in Bellevue, WA</h1>
      <p className="text-lg mb-6">
        W1IT Solutions provides comprehensive IT managed services for businesses in Bellevue, Washington. 
        Our local team offers expert IT support, cybersecurity, cloud solutions, and network management 
        tailored to Bellevue's technology-focused business community.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Bellevue IT Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Managed IT Services</li>
            <li>Cybersecurity Solutions</li>
            <li>Cloud Infrastructure</li>
            <li>Network Security</li>
            <li>Business Continuity Planning</li>
            <li>IT Compliance & Auditing</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Serving Bellevue Areas</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Downtown Bellevue</li>
            <li>Bel-Red Corridor</li>
            <li>Factoria</li>
            <li>Crossroads</li>
            <li>Lake Hills</li>
            <li>Wilburton</li>
            <li>Eastgate</li>
            <li>Newport Hills</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Our Bellevue Team</h2>
        <p className="mb-4">
          Ready to enhance your Bellevue business's technology infrastructure? Contact our local Bellevue team today.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Bellevue IT Support
        </a>
      </div>
    </div>
  );
}
