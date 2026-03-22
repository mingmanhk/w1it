import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = generateSEO({
  title: 'Top 5 IT Mistakes Small Businesses Make - Seattle IT Guide',
  description:
    'Avoid costly IT mistakes! Learn the top 5 IT pitfalls Seattle small businesses face and how to prevent them. Expert advice on backups, security, documentation, and IT planning.',
  keywords: [
    'small business IT mistakes',
    'Seattle small business IT',
    'IT planning small business',
    'business technology errors',
    'IT best practices',
  ],
  canonical: '/blog/top-it-mistakes-small-businesses',
  openGraph: {
    title: 'Top 5 IT Mistakes Small Businesses Make',
    description: 'Essential IT advice for Seattle small businesses. Avoid these common costly mistakes.',
    type: 'article',
  },
});

export default function TopITMistakes() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-blush">
        <Container>
          <div className="animate-fade-in">
            <span className="text-xs font-body font-medium text-rose bg-white px-3 py-1 rounded-full">
              Business IT
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-6 mt-4">
              Top 5 IT Mistakes Small Businesses Make
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-medium font-body mb-6">
              <span>December 8, 2024</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Business IT</span>
            </div>
            <p className="text-lg text-gray-medium font-body">
              Running a small business in Seattle? These common IT mistakes could be costing you time, money,
              and productivity. Here&apos;s how to avoid them.
            </p>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="prose prose-lg max-w-none">
            <Card className="mb-12">
              <p className="text-gray-medium font-body leading-relaxed">
                After years of working with small businesses in the Seattle area, I&apos;ve seen the same IT
                mistakes repeated again and again. The good news? They&apos;re all preventable. Let&apos;s dive into the
                top 5 IT mistakes that could be holding your business back—and more importantly, how to fix
                them.
              </p>
            </Card>

            {/* Mistake 1 */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                1. No Backup Strategy (or Untested Backups)
              </h2>
              <Card className="mb-6 bg-rose/5">
                <p className="text-charcoal font-body font-semibold">
                  &quot;We have backups!&quot; they said. Until they needed to restore and discovered the backups hadn&apos;t
                  been running for 6 months.
                </p>
              </Card>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Problem:</strong> Many Seattle businesses set up backups once and never test them.
                Others have no backup strategy at all, assuming cloud services like Google Workspace or Office
                365 are &quot;backup enough.&quot; Spoiler: they&apos;re not.
              </p>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Fix:</strong>
              </p>
              <ul className="space-y-2 text-gray-medium font-body mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Follow the 3-2-1 rule: 3 copies of data, on 2 different media, with 1 offsite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Test restores quarterly—actually restore a file or folder</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Automate backup monitoring and get alerts when backups fail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Document your backup process so anyone can restore if needed</span>
                </li>
              </ul>
            </div>

            {/* Mistake 2 */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                2. Weak Password Policies
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Problem:</strong> &quot;Password123&quot; is still more common than you&apos;d think. Shared
                passwords, passwords written on sticky notes, or the same password used everywhere—these are
                gold mines for hackers.
              </p>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Fix:</strong>
              </p>
              <ul className="space-y-2 text-gray-medium font-body mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Implement a password manager (1Password, LastPass, Bitwarden)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Require multi-factor authentication (MFA) on all business accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Use unique passwords for every service—let the password manager remember them</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Train employees on password security basics</span>
                </li>
              </ul>
              <Card className="bg-blush">
                <p className="text-charcoal font-body">
                  <strong>Seattle Pro Tip:</strong> Many local businesses qualify for cybersecurity grants or
                  training programs. Check with the Seattle Office of Economic Development.
                </p>
              </Card>
            </div>

            {/* Mistake 3 */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                3. No IT Documentation
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Problem:</strong> The network password is in your IT person&apos;s head. The WiFi
                password is... somewhere? When that person leaves or is unavailable, your business grinds to a
                halt.
              </p>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Fix:</strong> Create and maintain basic IT documentation:
              </p>
              <ul className="space-y-2 text-gray-medium font-body mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Network diagram and configuration details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>List of all software licenses and renewal dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Passwords and credentials (in a password manager)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Vendor contacts and support information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Common troubleshooting procedures</span>
                </li>
              </ul>
              <p className="text-gray-medium font-body leading-relaxed">
                Need help with technical documentation? We offer <a href="/services/technical-writing" className="text-rose hover:underline">bilingual technical writing services</a> for businesses that need clear, professional IT documentation.
              </p>
            </div>

            {/* Mistake 4 */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                4. Reactive Instead of Proactive IT
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Problem:</strong> Only calling IT support when something breaks is like only going
                to the doctor when you&apos;re sick. It&apos;s more expensive, more stressful, and leads to preventable
                problems.
              </p>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Fix:</strong>
              </p>
              <ul className="space-y-2 text-gray-medium font-body mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Schedule regular system maintenance and updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Set up monitoring for critical systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Plan for technology refresh cycles (don&apos;t wait for hardware to die)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Consider <a href="/it-services" className="text-rose hover:underline">managed IT services</a> for ongoing support</span>
                </li>
              </ul>
            </div>

            {/* Mistake 5 */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                5. Ignoring Employee IT Training
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Problem:</strong> Your employees are your first line of defense against security
                threats, but also your biggest vulnerability. Without proper training, they&apos;ll click phishing
                links, use weak passwords, and bypass security measures &quot;to get work done faster.&quot;
              </p>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                <strong>The Fix:</strong>
              </p>
              <ul className="space-y-2 text-gray-medium font-body mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Quarterly security awareness training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Phishing simulation tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Clear, simple IT policies everyone can understand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose mt-1">•</span>
                  <span>Make it easy to report suspicious emails or security concerns</span>
                </li>
              </ul>
            </div>

            {/* Conclusion */}
            <Card className="bg-blush mb-12">
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">
                The Bottom Line
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                These IT mistakes are common, but they don&apos;t have to happen to your business. With a little
                planning and the right support, you can build a solid IT foundation that grows with your
                company.
              </p>
              <p className="text-gray-medium font-body leading-relaxed">
                Need help getting your IT house in order? We work with small businesses across Seattle,
                Bellevue, Issaquah, and the greater King County area to build reliable, secure IT
                infrastructure.
              </p>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="font-heading font-semibold text-2xl text-charcoal mb-4">
                Let&apos;s Fix Your IT Together
              </h3>
              <p className="text-gray-medium font-body mb-6">
                Schedule a free IT assessment to identify issues before they become problems.
              </p>
              <Button href="/contact">
                Schedule Free Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-gray-bg">
        <Container>
          <h2 className="font-heading font-bold text-3xl text-charcoal mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable>
              <span className="text-xs font-body font-medium text-rose mb-2 block">Security</span>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Network Security Essentials for Remote Teams
              </h3>
              <Button variant="secondary" href="/blog/network-security-remote-teams" className="w-full mt-4">
                Read More →
              </Button>
            </Card>
            <Card hoverable>
              <span className="text-xs font-body font-medium text-rose mb-2 block">Best Practices</span>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Why Your Business Needs IT Documentation
              </h3>
              <Button variant="secondary" href="/blog/why-businesses-need-it-documentation" className="w-full mt-4">
                Read More →
              </Button>
            </Card>
            <Card hoverable>
              <span className="text-xs font-body font-medium text-rose mb-2 block">Business IT</span>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Choosing the Right IT Support Model
              </h3>
              <Button variant="secondary" href="/blog/choosing-it-support-model" className="w-full mt-4">
                Read More →
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
