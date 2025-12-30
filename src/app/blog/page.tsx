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
      image: '/images/optimized/hero-graphic.webp',
    },
    {
      title: 'Top 5 IT Mistakes Small Businesses Make',
      slug: 'top-it-mistakes-small-businesses',
      excerpt: 'Learn about the most common IT pitfalls that cost Seattle small businesses time and money, and how to avoid them.',
      category: 'Business IT',
      readTime: '5 min read',
      date: 'Dec 8, 2024',
      image: '/images/optimized/founder-story.svg',
    },
    {
      title: 'How Bilingual Documentation Improves Global Trade',
      slug: 'bilingual-documentation-global-trade',
      excerpt: 'Discover why professional bilingual technical documentation is essential for businesses working across English and Chinese-speaking markets.',
      category: 'Documentation',
      readTime: '6 min read',
      date: 'Dec 5, 2024',
      image: '/images/optimized/about-mission.svg',
    },
    {
      title: 'Network Security Essentials for Remote Teams',
      slug: 'network-security-remote-teams',
      excerpt: 'Essential security practices for Seattle businesses with remote workers. VPN setup, secure access, and best practices.',
      category: 'Security',
      readTime: '7 min read',
      date: 'Dec 1, 2024',
      image: '/images/optimized/hero.svg',
    },
    {
      title: 'WiFi Setup Guide for Seattle Homes and Offices',
      slug: 'wifi-setup-guide-seattle',
      excerpt: 'Professional tips for optimal WiFi coverage in Seattle area homes and offices. From router placement to mesh networks.',
      category: 'Networking',
      readTime: '8 min read',
      date: 'Nov 28, 2024',
      image: '/images/optimized/mockup_new.png',
    },
    {
      title: 'Why Your Business Needs IT Documentation',
      slug: 'why-businesses-need-it-documentation',
      excerpt: 'The critical role of IT documentation in business continuity, onboarding, and reducing technical debt.',
      category: 'Best Practices',
      readTime: '5 min read',
      date: 'Nov 25, 2024',
      image: '/images/optimized/hero-graphic.webp',
    },
    {
      title: 'Choosing the Right IT Support Model for Your Seattle Business',
      slug: 'choosing-it-support-model',
      excerpt: 'Compare managed services, on-demand support, and consulting to find the best IT support approach for your business.',
      category: 'Business IT',
      readTime: '6 min read',
      date: 'Nov 20, 2024',
      image: '/images/optimized/founder-story.svg',
    },
  ];

  const featuredArticle = articles[0];
  const latestArticles = articles.slice(1);

  return (
    <div className="bg-surface-0">
        <Hero
            title="IT Insights & Resources"
            subtitle="Expert advice on IT management, network security, and technology best practices to help your Seattle business thrive in the digital age."
            imageAlt="W1IT Blog Hero"
        />

      {/* Featured Article */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Featured Article
          </h2>

          <article className="bg-surface-1 p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 w-full lg:h-full min-h-[300px]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <span className="inline-block text-base font-semibold text-green mb-4">
                  {featuredArticle.category}
                </span>
                <h3 className="text-2xl font-semibold text-navy mb-4">
                  {featuredArticle.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 text-base text-gray-600 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
                <Button
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Latest Articles Grid */}
      <section className="py-16 bg-surface-1">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-surface-0 p-8 flex flex-col rounded-lg shadow-sm"
              >
                <div className="relative mb-6 h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <span className="inline-block text-base font-semibold text-green mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold text-navy mb-4 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-base text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <span>{article.date}</span>
                  <span className="text-gray-300">•</span>
                  <span>{article.readTime}</span>
                </div>
                <Button
                  variant="secondary"
                  href={`/blog/${article.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-surface-0">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-surface-1 p-12 text-center rounded-lg">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest IT insights, tips, and Seattle tech news delivered to your inbox.
            </p>
            <Button href="/contact" className="inline-flex items-center gap-2">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
