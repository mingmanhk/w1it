// Modern blog page with all case studies
import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Search, BookOpen, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Case Studies & Tech Insights | W1IT Solutions - Seattle IT Expertise",
  description: "Expert IT case studies, technology insights, and practical guides for Seattle businesses. Real-world solutions for backup, security, networking, and IT operations.",
  keywords: "IT case studies, technology insights, Seattle IT solutions, business technology, cybersecurity, backup solutions, networking, IT documentation",
};

const caseStudies = [
  {
    id: 1,
    title: "VMware & Veeam Backup Modernization for European Ferry Company",
    slug: "ferry-company-backup-modernization",
    excerpt: "How we transformed critical backup infrastructure for a major European ferry operator, reducing complexity by 40% and eliminating snapshot failures.",
    category: "Backup & Recovery",
    categoryColor: "bg-blue-100 text-blue-800",
    readTime: "10 min read",
    date: "Mar 15, 2026",
    image: "/images/optimized/mockup_new.png",
    author: "W1IT Team",
    featured: true,
    tags: ["Backup Solutions", "VMware", "Veeam", "Maritime IT"],
  },
  {
    id: 2,
    title: "How a Missing Daily IT Checklist Led to a Full Outage — and How Rapid Recovery Saved the Business",
    slug: "missing-it-checklist-outage-recovery",
    excerpt: "Learn how a professional services firm experienced a complete outage due to missing IT checklists, and how structured recovery procedures restored operations.",
    category: "IT Operations",
    categoryColor: "bg-purple-100 text-purple-800",
    readTime: "8 min read",
    date: "Dec 26, 2024",
    image: "/images/optimized/mockup_new.png",
    author: "W1IT Team",
    featured: true,
    tags: ["IT Operations", "Checklists", "Disaster Recovery"],
  },
  {
    id: 3,
    title: "From Fragmented to Standardized: Transforming IT Infrastructure for a Growing Financial Trading Company",
    slug: "fragmented-it-standardized-infrastructure",
    excerpt: "Case study on consolidating disparate IT systems into a unified, scalable infrastructure for a financial trading firm.",
    category: "Infrastructure",
    categoryColor: "bg-green-100 text-green-800",
    readTime: "12 min read",
    date: "Jan 15, 2025",
    image: "/images/optimized/founder-story.svg",
    author: "W1IT Team",
    featured: false,
    tags: ["Infrastructure", "Standardization", "Financial IT"],
  },
  {
    id: 4,
    title: "Top 5 IT Mistakes Small Businesses Make (And How to Avoid Them)",
    slug: "top-it-mistakes-small-businesses",
    excerpt: "Avoid these common IT pitfalls that can cost your business time, money, and security. Learn proactive strategies to protect your technology investment.",
    category: "Best Practices",
    categoryColor: "bg-yellow-100 text-yellow-800",
    readTime: "6 min read",
    date: "Dec 8, 2024",
    image: "/images/optimized/founder-story.svg",
    author: "W1IT Team",
    featured: false,
    tags: ["Small Business", "IT Strategy", "Cost Optimization"],
  },
  {
    id: 5,
    title: "Why Your Business Needs IT Documentation (Even If You Think You Don't)",
    slug: "why-businesses-need-it-documentation",
    excerpt: "IT documentation isn't just for large enterprises. Discover how proper documentation can save your business during crises and streamline daily operations.",
    category: "Best Practices",
    categoryColor: "bg-yellow-100 text-yellow-800",
    readTime: "5 min read",
    date: "Dec 5, 2024",
    image: "/images/optimized/about-mission.svg",
    author: "W1IT Team",
    featured: false,
    tags: ["Documentation", "Standardization", "Business Continuity"],
  },
  {
    id: 6,
    title: "Choosing the Right IT Support Model for Your Seattle Business",
    slug: "choosing-it-support-model",
    excerpt: "Break‑fix, managed services, or co‑managed IT? Learn which support model aligns best with your business goals, budget, and growth trajectory.",
    category: "Business IT",
    categoryColor: "bg-indigo-100 text-indigo-800",
    readTime: "7 min read",
    date: "Dec 1, 2024",
    image: "/images/optimized/hero.svg",
    author: "W1IT Team",
    featured: false,
    tags: ["IT Support Models", "Managed Services", "Business Strategy"],
  },
  {
    id: 7,
    title: "Network Security for Remote Teams: A Seattle Business Guide",
    slug: "network-security-remote-teams",
    excerpt: "Practical security measures for businesses with remote or hybrid teams. Protect your data while maintaining productivity and collaboration.",
    category: "Security",
    categoryColor: "bg-red-100 text-red-800",
    readTime: "8 min read",
    date: "Nov 25, 2024",
    image: "/images/optimized/hero-graphic.webp",
    author: "W1IT Team",
    featured: false,
    tags: ["Cybersecurity", "Remote Work", "Data Protection"],
  },
  {
    id: 8,
    title: "Wi‑Fi Setup Guide for Seattle Apartments and Small Offices",
    slug: "wifi-setup-guide-seattle",
    excerpt: "Step‑by‑step guide to optimizing Wi‑Fi performance in Seattle's dense urban environment. Avoid common pitfalls and achieve reliable connectivity.",
    category: "Networking",
    categoryColor: "bg-orange-100 text-orange-800",
    readTime: "6 min read",
    date: "Nov 20, 2024",
    image: "/images/optimized/founder-story.svg",
    author: "W1IT Team",
    featured: false,
    tags: ["Wi-Fi", "Network Setup", "Urban IT"],
  },
  {
    id: 9,
    title: "Bilingual IT Documentation for Global Trade Companies",
    slug: "bilingual-documentation-global-trade",
    excerpt: "How we created bilingual IT documentation for a global trade company, improving cross‑team collaboration and reducing miscommunication.",
    category: "Best Practices",
    categoryColor: "bg-yellow-100 text-yellow-800",
    readTime: "5 min read",
    date: "Nov 28, 2024",
    image: "/images/optimized/mockup_new.png",
    author: "W1IT Team",
    featured: false,
    tags: ["Documentation", "Global Teams", "Communication"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Expert IT Case Studies</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              IT Case Studies & Insights
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
              Real-world technology solutions, expert analysis, and practical guides for Seattle businesses navigating digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies, solutions, or IT topics..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Featured Case Studies */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Case Studies</h2>
              <div className="flex items-center gap-2 text-blue-600">
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Most Popular</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.filter(post => post.featured).map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20"></div>
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: 'url(' + post.image + ')' }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className={'px-3 py-1.5 rounded-full text-sm font-medium ' + post.categoryColor}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={'/case-studies/' + post.slug}
                        className="inline-flex items-center text-blue-600 font-medium group/link"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Case Studies */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Case Studies</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: 'url(' + post.image + ')' }}
                      />
                      <div className="absolute top-3 left-3">
                        <span className={'px-2.5 py-1 rounded-full text-xs font-medium ' + post.categoryColor}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <Link
                        href={'/case-studies/' + post.slug}
                        className="inline-flex items-center text-blue-600 text-sm font-medium"
                      >
                        Read Case Study
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with IT Insights
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Get weekly IT tips, security updates, and case studies delivered to your inbox. 
                Perfect for Seattle business owners and IT decision-makers.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your business email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-500 text-sm mt-3">
                  No spam. Unsubscribe anytime. Seattle-focused content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
