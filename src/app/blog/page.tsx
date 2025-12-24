import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

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
    title: 'IT Insights & Tech Blog | Pinkkamii',
    description: 'Expert IT insights and technical tips from Seattle-based IT professionals.',
    type: 'website',
  },
});

export default function Blog() {
  const articles = [
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

  const categories = ['All', 'Business IT', 'Security', 'Networking', 'Documentation', 'Best Practices'];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-24 md:pt-32 md:pb-40 bg-gradient-to-b from-white to-blush">
        <Container>
          <div className="text-center animate-fade-in">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              IT Insights & Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-medium max-w-2xl mx-auto mb-8 font-inter">
              Expert advice on IT management, network security, and technology best practices for
              Seattle businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-inter text-sm transition-colors ${
                  category === 'All'
                    ? 'bg-rose text-white'
                    : 'bg-gray-100 text-gray-medium hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Article */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="mb-12">
            <span className="text-sm font-inter font-medium text-rose bg-blush px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
          <Card hoverable className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-gradient-to-br from-blush to-white rounded-lg h-64 mb-4 flex items-center justify-center">
                  <span className="text-6xl">💼</span>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-inter font-medium text-rose mb-2">Business IT</span>
                <h2 className="font-poppins font-bold text-3xl text-charcoal mb-4">
                  Top 5 IT Mistakes Small Businesses Make
                </h2>
                <p className="text-gray-medium font-inter mb-6">
                  Running a small business in Seattle? These common IT mistakes could be costing you time,
                  money, and productivity. Learn how to avoid them and set your business up for success with
                  proper IT planning and support.
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-medium font-inter">
                  <span>Dec 8, 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <Button href="/blog/top-it-mistakes-small-businesses">
                  Read Article →
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-gray-bg">
        <Container>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-charcoal mb-12">
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
                <span className="text-xs font-inter font-medium text-rose mb-2">{article.category}</span>
                <h3 className="font-poppins font-semibold text-xl text-charcoal mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-medium font-inter text-sm mb-4 flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-medium font-inter mb-4">
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
        <Container size="sm">
          <Card className="bg-blush text-center">
            <h2 className="font-poppins font-bold text-3xl text-charcoal mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-medium font-inter mb-6">
              Get the latest IT insights, tips, and Seattle tech news delivered to your inbox.
            </p>
            <Button href="/contact" size="lg">
              Subscribe to Newsletter
            </Button>
          </Card>
        </Container>
      </section>
    </div>
  );
}
