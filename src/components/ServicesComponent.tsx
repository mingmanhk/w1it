interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Managed IT Services",
    description: "Comprehensive IT management and support for your business operations.",
    icon: "🖥️",
    features: [
      "24/7 Help Desk Support",
      "Network Monitoring",
      "System Maintenance",
      "Software Updates",
      "Performance Optimization"
    ]
  },
  {
    title: "Cybersecurity",
    description: "Protect your business from cyber threats with advanced security solutions.",
    icon: "🛡️",
    features: [
      "Threat Detection",
      "Firewall Management",
      "Security Audits",
      "Data Encryption",
      "Incident Response"
    ]
  },
  {
    title: "Cloud Solutions",
    description: "Migrate and manage your infrastructure in the cloud for scalability.",
    icon: "☁️",
    features: [
      "Cloud Migration",
      "AWS/Azure Management",
      "Backup Solutions",
      "Disaster Recovery",
      "Cost Optimization"
    ]
  },
  {
    title: "Network Infrastructure",
    description: "Design, implement, and maintain robust network systems.",
    icon: "🔗",
    features: [
      "Network Design",
      "Wireless Solutions",
      "VPN Setup",
      "Bandwidth Management",
      "Network Security"
    ]
  },
  {
    title: "IT Consulting",
    description: "Strategic IT planning and consulting for business growth.",
    icon: "💡",
    features: [
      "Technology Roadmaps",
      "Budget Planning",
      "Vendor Management",
      "Compliance Guidance",
      "Digital Transformation"
    ]
  },
  {
    title: "Data Management",
    description: "Secure and efficient data storage, backup, and recovery solutions.",
    icon: "💾",
    features: [
      "Data Backup",
      "Storage Solutions",
      "Data Recovery",
      "Database Management",
      "Data Security"
    ]
  }
];

export default function ServicesComponent() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Our IT Services</h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Comprehensive IT solutions tailored to your business needs. From cybersecurity to cloud management, 
        we provide the expertise and support to keep your technology running smoothly.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-6 w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your IT?</h2>
        <p className="mb-6">Schedule a free consultation with our IT experts.</p>
        <a 
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
}
