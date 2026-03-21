import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Services in Seattle | W1IT Solutions",
  description: "Professional IT managed services in Seattle, WA. Local IT support, cybersecurity, cloud solutions, and network management for Seattle businesses.",
};

export default function SeattlePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">IT Services in Seattle, WA</h1>
      <p className="text-lg mb-6">
        W1IT Solutions provides comprehensive IT managed services for businesses in Seattle, Washington. 
        Our local team offers expert IT support, cybersecurity, cloud solutions, and network management 
        tailored to Seattle&apos;s diverse business landscape.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Seattle IT Services</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Serving Seattle Areas</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Downtown Seattle</li>
            <li>Belltown</li>
            <li>South Lake Union</li>
            <li>Capitol Hill</li>
            <li>Queen Anne</li>
            <li>Ballard</li>
            <li>Fremont</li>
            <li>University District</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Contact Our Seattle Team</h2>
        <p className="mb-4">
          Ready to optimize your Seattle business&apos;s IT systems? Contact our local Seattle team today.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Seattle IT Support
        </a>
      </div>
    </div>
  );
}
