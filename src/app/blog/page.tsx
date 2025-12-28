import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { BookOpen, MessageSquare, ArrowRight, Sparkles, Calendar, Clock, TrendingUp, Shield, Globe, Database, FileText } from 'lucide-react';

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
    },
    {
      title: 'Case Study: Transforming a Fragmented IT Environment Into a Documented, Standardized, and Automated Infrastructure',
      slug: 'fragmented-it-standardized-infrastructure',
      excerpt: 'Learn how we transformed a mid‑sized corporate client’s fragmented IT environment into a documented, standardized, and automated infrastructure with centralized management.',
      category: 'Case Study',
      readTime: '7 min read',
      date: 'Dec 26, 2024',
    },
    {
      title: 'Top 5 IT Mistakes Small Businesses Make',
      slug: 'top-it-mistakes-small-businesses',
      excerpt: 'Learn about the most common IT pitfalls that cost Seattle small businesses time and money, and how to avoid them.',
      category: 'Business IT',
      readTime: '5 min read',
      date: 'Dec 8, 2024',
    },
    {
      title: 'How Bilingual Documentation Improves Global Trade',
      slug: 'bilingual-documentation-global-trade',
      excerpt: 'Discover why professional bilingual technical documentation is essential for businesses working across English and Chinese-speaking markets.',
      category: 'Documentation',
      readTime: '6 min read',
      date: 'Dec 5, 2024',
    },
    {
      title: 'Network Security Essentials for Remote Teams',
      slug: 'network-security-remote-teams',
      excerpt: 'Essential security practices for Seattle businesses with remote workers. VPN setup, secure access, and best practices.',
      category: 'Security',
      readTime: '7 min read',
      date: 'Dec 1, 2024',
    },
    {
      title: 'WiFi Setup Guide for Seattle Homes and Offices',
      slug: 'wifi-setup-guide-seattle',
      excerpt: 'Professional tips for optimal WiFi coverage in Seattle area homes and offices. From router placement to mesh networks.',
      category: 'Networking',
      readTime: '8 min read',
      date: 'Nov 28, 2024',
    },
    {
      title: 'Why Your Business Needs IT Documentation',
      slug: 'why-businesses-need-it-documentation',
      excerpt: 'The critical role of IT documentation in business continuity, onboarding, and reducing technical debt.',
      category: 'Best Practices',
      readTime: '5 min read',
      date: 'Nov 25, 2024',
    },
    {
      title: 'Choosing the Right IT Support Model for Your Seattle Business',
      slug: 'choosing-it-support-model',
      excerpt: 'Compare managed services, on-demand support, and consulting to find the best IT support approach for your business.',
      category: 'Business IT',
      readTime: '6 min read',
      date: 'Nov 20, 2024',
    },
  ];

  const categories = ['All', 'Case Study', 'Business IT', 'Security', 'Networking', 'Documentation', 'Best Practices'];

  return (
    <div className="overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '2s' }} />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-10 animate-fade-in bg-white/80 backdrop-blur-sm">
              <BookOpen className="w-4 h-4" />
              <span className="font-body">Expert IT Insights</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-neutral-900 mb-10 leading-tight animate-fade-in-up">
              IT Insights & Resources
              <span className="block text-gradient-primary mt-3">For Seattle Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-14 max-w-3xl mx-auto leading-relaxed font-body animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Expert advice on IT management, network security, and technology best practices to help your Seattle business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" className="group bg-gradient-primary hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <MessageSquare className="w-5 h-5 mr-3" />
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button href="#featured" variant="secondary" className="border-primary-500 text-primary-600 hover:bg-primary-50 transition-all duration-300">
                <Sparkles className="w-5 h-5 mr-3" />
                Read Featured Article
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Category Filter */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <Container>
          <div className="text-center mb-8">
            <h3 className="font-heading font-semibold text-lg text-neutral-700 mb-4 font-body">
              Browse by Category
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-primary text-white shadow-md hover:shadow-lg'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-800'
                  }`}
                >
                  {category}
                  {category === 'Case Study' && ' 📊'}
                  {category === 'Security' && ' 🔒'}
                  {category === 'Networking' && ' 📡'}
                  {category === 'Documentation' && ' 📝'}
                </button>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-neutral-500 font-body">
            Filter articles by topic to find exactly what you need
          </p>
        </Container>
      </section>

      {/* Enhanced Featured Article */}
      <section id="featured" className="py-20 md:py-32 bg-gradient-to-b from-white to-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-sm font-medium mb-6 font-body">
              <Sparkles className="w-4 h-4" />
              <span>Editor&apos;s Pick</span>
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Featured Article
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-body">
              Our most popular and impactful article for Seattle businesses
            </p>
          </div>

          <Card hoverable className="mb-16 border-2 border-neutral-200 hover:border-primary-300 transition-all duration-300 hover:shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary-500 to-cyan-500 p-12 text-white flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium font-body">
                    <TrendingUp className="w-4 h-4" />
                    <span>Business IT</span>
                  </span>
                </div>
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-8 leading-tight">
                  Top 5 IT Mistakes Small Businesses Make
                </h2>
                <p className="text-white/90 font-body text-lg mb-8 leading-relaxed">
                  Running a small business in Seattle? These common IT mistakes could be costing you time,
                  money, and productivity. Learn how to avoid them and set your business up for success.
                </p>
                <div className="flex items-center gap-6 mb-8 text-white/80 font-body">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Dec 8, 2024</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>5 min read</span>
                  </div>
                </div>
                <Button
                  href="/blog/top-it-mistakes-small-businesses"
                  variant="secondary"
                 
                  className="bg-white text-primary-600 hover:bg-neutral-100 w-fit"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
              <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-neutral-50 to-white">
                <h3 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                  Key Takeaways:
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-neutral-900 mb-1">Poor Security Practices</h4>
                      <p className="text-neutral-600 font-body text-sm">Weak passwords and lack of backups put your business at risk</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Database className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-neutral-900 mb-1">No Data Backup Strategy</h4>
                      <p className="text-neutral-600 font-body text-sm">Critical data loss can cripple small businesses</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-neutral-900 mb-1">Outdated Technology</h4>
                      <p className="text-neutral-600 font-body text-sm">Old systems slow productivity and increase security risks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-neutral-900 mb-1">Lack of Documentation</h4>
                      <p className="text-neutral-600 font-body text-sm">No processes documented leads to chaos during transitions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-charcoal mb-12">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card
                key={article.slug}
                hoverable
                className="flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-blush to-white rounded-lg h-48 mb-4 flex items-center justify-center">
                  <span className="text-5xl">
                    {article.category === 'Documentation' && '📝'}
                    {article.category === 'Security' && '🔒'}
                    {article.category === 'Networking' && '📡'}
                    {article.category === 'Best Practices' && '✨'}
                    {article.category === 'Business IT' && '💼'}
                  </span>
                </div>
                <span className="text-xs font-body font-medium text-rose mb-2">{article.category}</span>
                <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-medium font-body text-sm mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-medium font-body mb-4">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <Button variant="secondary" href={`/blog/${article.slug}`} className="w-full">
                  Read More →
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32">
        <Container>
          <Card className="bg-blush text-center">
            <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-medium font-body mb-6">
              Get the latest IT insights, tips, and Seattle tech news delivered to your inbox.
            </p>
            <Button href="/contact">
              Subscribe to Newsletter
            </Button>
          </Card>
        </Container>
      </section>
    </div>
  );
}
