// Simple blog page
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Insights & Tech Blog | W1IT Solutions",
  description: "Expert IT insights, case studies, and technology guides for Seattle businesses.",
  keywords: "IT blog, technology insights, Seattle IT tips, business technology",
};

const blogPosts = [
  {
    id: 1,
    title: "VMware & Veeam Backup Modernization for European Ferry Company",
    slug: "vmware-veeam-backup-modernization-ferry-company",
    excerpt: "How we transformed critical backup infrastructure for a major European ferry operator.",
    category: "Case Study",
    readTime: "10 min read",
    date: "Mar 15, 2026",
    image: "/images/optimized/mockup_new.png",
    featured: true,
  },
  {
    id: 2,
    title: "How a Missing Daily IT Checklist Led to a Full Outage",
    slug: "missing-it-checklist-outage-recovery",
    excerpt: "Learn how a professional services firm experienced a complete outage due to missing IT checklists.",
    category: "Case Study",
    readTime: "8 min read",
    date: "Dec 26, 2024",
    image: "/images/optimized/mockup_new.png",
    featured: true,
  },
  {
    id: 3,
    title: "Top 5 IT Mistakes Small Businesses Make",
    slug: "top-it-mistakes-small-businesses",
    excerpt: "Avoid these common IT pitfalls that can cost your business time, money, and security.",
    category: "Best Practices",
    readTime: "6 min read",
    date: "Dec 8, 2024",
    image: "/images/optimized/founder-story.svg",
    featured: false,
  },
  {
    id: 4,
    title: "Why Your Business Needs IT Documentation",
    slug: "why-businesses-need-it-documentation",
    excerpt: "IT documentation isn't just for large enterprises. Discover how proper documentation can save your business.",
    category: "Best Practices",
    readTime: "5 min read",
    date: "Dec 5, 2024",
    image: "/images/optimized/about-mission.svg",
    featured: false,
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">IT Insights & Tech Blog</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Practical technology guidance, case studies, and expert advice for Seattle businesses.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Featured Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: 'url(' + post.image + ')' }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                    <p className="text-gray-600 mb-6">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-48">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: 'url(' + post.image + ')' }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-600 text-white px-2.5 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-blue-600 text-sm font-medium"
                    >
                      Read Article
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
