import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, FolderOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Case Studies | W1IT Solutions - Bellevue IT Managed Services",
  description: "Explore our technical expertise through detailed case studies showcasing real-world IT solutions for businesses in transportation, finance, and enterprise sectors.",
  keywords: "IT case studies, technical solutions, VMware, Veeam, backup solutions, Bellevue IT services, transportation IT, maritime systems",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "VMware & Veeam Backup Modernization for European Ferry Company",
      slug: "ferry-company-backup-modernization",
      excerpt: "How we transformed critical backup infrastructure for a major European ferry operator, reducing complexity by 40% and eliminating snapshot failures across maritime systems.",
      category: "Backup & Disaster Recovery",
      industry: "Transportation & Logistics",
      readTime: "10 min read",
      date: "Mar 15, 2026",
      image: "/images/optimized/mockup_new.png",
      tags: ["VMware", "Veeam", "Maritime Systems", "High-I/O", "Snapshot Governance"],
    },
    {
      title: "How a Missing Daily IT Checklist Led to a Full Outage",
      slug: "missing-it-checklist-outage-recovery",
      excerpt: "Learn how a professional services firm experienced a complete outage due to missing IT checklists, and how structured recovery procedures restored operations within hours.",
      category: "IT Operations",
      industry: "Professional Services",
      readTime: "8 min read",
      date: "Dec 26, 2024",
      image: "/images/optimized/mockup_new.png",
      tags: ["Checklists", "Incident Response", "Documentation", "Recovery"],
    },
    {
      title: "Transforming Fragmented IT into Standardized Infrastructure",
      slug: "fragmented-it-standardized-infrastructure",
      excerpt: "How we transformed a mid-sized corporate client's fragmented IT environment into a documented, standardized, and automated infrastructure with centralized management.",
      category: "Infrastructure",
      industry: "Corporate",
      readTime: "7 min read",
      date: "Dec 26, 2024",
      image: "/images/optimized/hero-graphic.webp",
      tags: ["Standardization", "Automation", "Documentation", "Centralized Management"],
    },
  ];

  const industries = [
    { name: "Transportation & Logistics", count: 1 },
    { name: "Professional Services", count: 1 },
    { name: "Corporate", count: 1 },
  ];

  const categories = [
    { name: "Backup & Disaster Recovery", count: 1 },
    { name: "IT Operations", count: 1 },
    { name: "Infrastructure", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT Case Studies & Technical Solutions
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Explore detailed technical implementations and real-world solutions
              for businesses across various industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">{caseStudies.length}</span> Case Studies
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">{industries.length}</span> Industries
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="font-semibold">{categories.length}</span> Categories
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Filters & Sidebar */}
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Industries Filter */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <FolderOpen className="w-5 h-5" />
                    Industries
                  </h3>
                  <ul className="space-y-2">
                    {industries.map((industry) => (
                      <li key={industry.name}>
                        <button className="flex justify-between items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                          <span>{industry.name}</span>
                          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {industry.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Categories Filter */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button className="flex justify-between items-center w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                          <span>{category.name}</span>
                          <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Need Similar Solutions?</h3>
                  <p className="text-gray-700 mb-4 text-sm">
                    Our team specializes in custom IT solutions for businesses of all sizes.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Featured Case Studies</h2>
                <p className="text-gray-600">
                  Detailed technical implementations with measurable business impact.
                </p>
              </div>

              <div className="space-y-8">
                {caseStudies.map((study) => (
                  <article
                    key={study.slug}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
                  >
                    <div className="md:flex">
                      {/* Image */}
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20" />
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: 'url(' + study.image + ')' }}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {study.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {study.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {study.readTime}
                          </div>
                          <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {study.industry}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                          {study.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                          {study.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Link
                            href={`/case-studies/${study.slug}`}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Read Full Case Study
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                          <span className="text-sm text-gray-500">
                            Detailed technical analysis
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Blog Link */}
              <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">More Technical Insights</h3>
                    <p className="text-gray-600">
                      Explore our blog for additional articles, tips, and IT best practices.
                    </p>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition font-medium"
                  >
                    Visit Blog
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
