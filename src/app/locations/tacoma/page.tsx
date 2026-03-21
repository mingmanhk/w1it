import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services in Tacoma | W1IT Solutions",
  description: "Professional IT managed services in Tacoma, WA. Local IT support, cybersecurity, cloud solutions, and network management for Tacoma businesses.",
};

export default function TacomaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">IT Services in Tacoma, WA</h1>
      <p className="text-lg mb-6">
        W1IT Solutions provides comprehensive IT managed services for businesses in Tacoma, Washington. 
        Our local team offers expert IT support, cybersecurity, cloud solutions, and network management 
        tailored to Tacoma's diverse business landscape.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Tacoma IT Services</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>IT Support & Maintenance</li>
            <li>Network Security</li>
            <li>Data Backup Solutions</li>
            <li>Cloud Services</li>
            <li>Hardware Management</li>
            <li>Software Support</li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Serving Tacoma Areas</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Downtown Tacoma</li>
            <li>North End</li>
            <li>South End</li>
            <li>West End</li>
            <li>East Side</li>
            <li>University Place</li>
            <li>Fircrest</li>
            <li>Lakewood</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Our Tacoma Team</h2>
        <p className="mb-4">
          Ready to optimize your Tacoma business's IT systems? Contact our local Tacoma team today.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Tacoma IT Support
        </a>
      </div>
    </div>
  );
}
