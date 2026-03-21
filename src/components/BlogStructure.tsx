import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Top 5 Cybersecurity Threats for Washington Businesses in 2026",
    excerpt: "Learn about the most critical cybersecurity threats facing Washington businesses and how to protect your company.",
    slug: "cybersecurity-threats-2026",
    date: "March 15, 2026",
    category: "Cybersecurity"
  },
  {
    title: "Cloud Migration Best Practices for Small Businesses",
    excerpt: "A step-by-step guide to successfully migrating your business to the cloud without disrupting operations.",
    slug: "cloud-migration-best-practices",
    date: "March 10, 2026",
    category: "Cloud Solutions"
  },
  {
    title: "How Managed IT Services Can Save Your Business Money",
    excerpt: "Discover how outsourcing your IT management can reduce costs and improve efficiency.",
    slug: "managed-it-services-cost-savings",
    date: "March 5, 2026",
    category: "IT Management"
  },
  {
    title: "Washington State IT Compliance Requirements 2026",
    excerpt: "Stay compliant with the latest IT regulations and requirements for Washington businesses.",
    slug: "washington-it-compliance-2026",
    date: "February 28, 2026",
    category: "Compliance"
  }
];

export default function BlogStructure() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">IT Insights & Resources</h1>
      <p className="text-lg mb-8">
        Stay updated with the latest IT trends, cybersecurity tips, and technology insights for Washington businesses.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="border rounded-lg p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            
            <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            
            <Link 
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our IT Newsletter</h2>
        <p className="mb-6">Get monthly IT tips, security alerts, and technology insights delivered to your inbox.</p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
