import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Button from '@/components/Button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Hero from '@/components/Hero';

export const metadata: Metadata = generateSEO({
  title: 'IT Insights & Tech Blog - Seattle IT Tips',
  description:
    'Expert IT insights, technical tips, and business technology advice from Seattle. Learn about network security, bilingual documentation, remote work, and IT best practices.',
  keywords: [
    'IT blog Seattle',
    'technology insights',
    'IT tips',
    'business technology',
    'network security tips',
    'remote work IT',
  ],
  canonical: '/blog',
  openGraph: {
    title: 'IT Insights & Tech Blog | w1IT',
    description: 'Expert IT insights and technical tips from Seattle-based IT professionals.',
    type: 'website',
  },
});

export default function Blog() {
  const articles = [
    {
      title: 'Case Study: VMware & Veeam Backup Modernization for European Ferry Company',
      slug: 'vmware-veeam-backup-modernization-ferry-company',
      excerpt: 'How W1IT Solutions transformed critical backup infrastructure for a major European ferry operator, reducing complexity by 40% and eliminating snapshot failures.',
      category: 'Case Study',
      readTime: '10 min read',
      date: 'Mar 15, 2026',
      image: '/images/optimized/mockup_new.png',
    },
    {
      title: 'Case Study: How a Missing Daily IT Checklist Led to a Full Outage — and How Rapid Recovery Saved the Business',
      slug: 'missing-it-checklist-outage-recovery',
      excerpt: 'Learn how a professional services firm in Seattle experienced a complete outage due to missing IT checklists, and how structured recovery procedures restored operations within hours.',
      category: 'Case Study',
      readTime: '8 min read',
      date: 'Dec 26, 2024',
      image: '/images/optimized/mockup_new.png',
    },
    {
      title: 'Case Study: Transforming a Fragmented IT Environment Into a Documented, Standardized, and Automated Infrastructure',
      slug: 'fragmented-it-standardized-infrastructure',
      excerpt: 'Learn how we transformed a mid‑sized corporate client\'s fragmented IT environment into a documented, standardized, and automated infrastructure with centralized management.',
      category: 'Case Study',
      readTime: '7 min read',
      date: 'Dec 26, 2024',
      image: '/images/optimized/mockup_new.png',
    },
    {
      title: 'Top 5 IT Mistakes Small Businesses Make',
      slug: 'top-it-mistakes-small-businesses',
      excerpt: 'Avoid these common IT pitfalls that can cost your business time, money, and security. Learn proactive strategies to protect your technology investment.',
      category: 'Best Practices',
      readTime: '6 min read',
      date: 'Dec 8, 2024',
      image: '/images/optimized/founder-story.svg',
    },
    {
      title: 'Why Your Business Needs IT Documentation (Even If You Think You Don\'t)',
      slug: 'why-businesses-need-it-documentation',
      excerpt: 'IT documentation isn\'t just for large enterprises. Discover how proper documentation can save your business during crises and streamline daily operations.',
      category: 'Best Practices',
      readTime: '5 min read',
      date: 'Dec 5, 2024',
      image: '/images/optimized/about-mission.svg',
    },
    {
      title: 'Choosing the Right IT Support Model for Your Seattle Business',
      slug: 'choosing-it-support-model',
      excerpt: 'Break‑fix, managed services, or co‑managed IT? Learn which support model aligns best with your business goals, budget, and growth trajectory.',
      category: 'Business IT',
      readTime: '7 min read',
      date: 'Dec 1, 2024',
      image: '/images/optimized/hero.svg',
    },
    {
      title: 'Bilingual IT Documentation for Global Trade Companies',
      slug: 'bilingual-documentation-global-trade',
      excerpt: 'How we created bilingual IT documentation for a global trade company, improving cross‑team collaboration and reducing miscommunication.',
      category: 'Technical Writing',
      readTime: '5 min read',
      date: 'Nov 28, 2024',
      image: '/images/optimized/mockup_new.png',
    },
    {
      title: 'Network Security for Remote Teams: A Seattle Business Guide',
      slug: 'network-security-remote-teams',
      excerpt: 'Practical security measures for businesses with remote or hybrid teams. Protect your data while maintaining productivity and collaboration.',
      category: 'Security',
      readTime: '8 min read',
      date: 'Nov 25, 2024',
      image: '/images/optimized/mockup_new.png',
    },
    {
      title: 'Wi‑Fi Setup Guide for Seattle Apartments and Small Offices',
      slug: 'wifi-setup-guide-seattle',
      excerpt: 'Step‑by‑step guide to optimizing Wi‑Fi performance in Seattle\'s dense urban environment. Avoid common pitfalls and achieve reliable connectivity.',
      category: 'Networking',
      readTime: '6 min read',
      date: 'Nov 20, 2024',
      image: '/images/optimized/founder-story.svg',
    },
  ];

  return (
    <>
      <Hero
        title="IT Insights & Tech Blog"
        subtitle="Expert advice, case studies, and technical insights for Seattle businesses"
        
        
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Button
                    href={`/blog/${article.slug}`}
                    
                    className="inline-flex items-center gap-2"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
