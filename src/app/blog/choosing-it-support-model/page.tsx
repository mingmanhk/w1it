import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = generateSEO({
  title: 'Choosing the Right IT Support Model for Your Seattle Business',
  description:
    'Compare managed services, on-demand support, and IT consulting to find the best approach for your Seattle business. Cost breakdowns, pros and cons, and when each model makes sense.',
  keywords: [
    'IT support models',
    'managed IT services Seattle',
    'on-demand IT support',
    'IT consulting',
    'MSP Seattle',
    'break-fix IT support',
  ],
  canonical: '/blog/choosing-it-support-model',
  openGraph: {
    title: 'Choosing the Right IT Support Model for Your Seattle Business',
    description: 'Find the best IT support approach for your business needs and budget.',
    type: 'article',
  },
});

export default function ChoosingITSupportModel() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-white to-blush">
        <Container size="sm">
          <div className="animate-fade-in">
            <span className="text-xs font-body font-medium text-rose bg-white px-3 py-1 rounded-full">
              Business IT
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-6 mt-4">
              Choosing the Right IT Support Model for Your Seattle Business
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-medium font-body mb-6">
              <span>November 20, 2024</span>
              <span>•</span>
              <span>6 min read</span>
              <span>•</span>
              <span>Business IT</span>
            </div>
            <p className="text-lg text-gray-medium font-body">
              Not all IT support is created equal. From managed services to on-demand help, here&apos;s how to choose the right model for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <Container size="sm">
          <div className="prose prose-lg max-w-none">
            <Card className="mb-12">
              <p className="text-gray-medium font-body leading-relaxed">
                Your IT needs are unique. A 5-person startup has different requirements than a 50-person company. A retail business has different needs than a professional services firm. Yet most businesses default to whatever IT support model they stumbled into, rather than choosing the approach that actually fits their needs. Let&apos;s fix that.
              </p>
            </Card>

            {/* Section 1: The Three Main Models */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                The Three Main IT Support Models
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                Most Seattle businesses use one of these three approaches—or some hybrid combination:
              </p>

              <div className="space-y-8">
                <Card className="bg-blush">
                  <h3 className="font-heading font-semibold text-2xl text-charcoal mb-3">
                    1. Managed Services (MSP)
                  </h3>
                  <p className="text-gray-medium font-body mb-4">
                    You pay a flat monthly fee for comprehensive IT management. Your MSP monitors systems 24/7, handles updates and maintenance, and provides help desk support. Think of it like having an entire IT department on retainer.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-charcoal mb-2">Typical Costs:</p>
                      <ul className="text-sm text-gray-medium space-y-1">
                        <li>• $100-200 per user/month</li>
                        <li>• Usually 10-user minimum</li>
                        <li>• 1-3 year contracts common</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-2">What&apos;s Included:</p>
                      <ul className="text-sm text-gray-medium space-y-1">
                        <li>• 24/7 monitoring</li>
                        <li>• Help desk support</li>
                        <li>• Proactive maintenance</li>
                        <li>• Security management</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="bg-rose/5">
                  <h3 className="font-heading font-semibold text-2xl text-charcoal mb-3">
                    2. Break-Fix / On-Demand Support
                  </h3>
                  <p className="text-gray-medium font-body mb-4">
                    Pay only when you need help. No monthly fees, no contracts—just call when something breaks and pay by the hour. This is the &quot;pay-as-you-go&quot; approach to IT.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-charcoal mb-2">Typical Costs:</p>
                      <ul className="text-sm text-gray-medium space-y-1">
                        <li>• $125-200 per hour</li>
                        <li>• Emergency rates higher</li>
                        <li>• Project quotes available</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-2">What You Get:</p>
                      <ul className="text-sm text-gray-medium space-y-1">
                        <li>• On-demand troubleshooting</li>
                        <li>• Project-based work</li>
                        <li>• No ongoing commitment</li>
                        <li>• Flexible scheduling</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="bg-blush">
                  <h3 className="font-heading font-semibold text-2xl text-charcoal mb-3">
                    3. Consulting / Strategic IT
                  </h3>
                  <p className="text-gray-medium font-body mb-4">
                    High-level guidance and planning without day-to-day support. A consultant helps you make strategic IT decisions, plan projects, and optimize your technology—but doesn&apos;t handle help desk tickets.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-charcoal mb-2">Typical Costs:</p>
                      <ul className="text-sm text-gray-medium space-y-1">
                        <li>• $150-300 per hour</li>
                        <li>• Retainer options available</li>
                        <li>• Project-based pricing</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal mb-2">Best For:</p>
                      <ul className="text-sm text-gray-medium space-y-1">
                        <li>• Strategic planning</li>
                        <li>• Major projects</li>
                        <li>• Technology selection</li>
                        <li>• Vendor management</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Section 2: When Each Model Makes Sense */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                Which Model Is Right for You?
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                The right choice depends on your business size, IT complexity, and how critical technology is to your operations. Here&apos;s how to decide:
              </p>

              <div className="space-y-6">
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    Choose Managed Services If:
                  </h3>
                  <ul className="space-y-3 text-gray-medium font-body">
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You have 10+ employees who depend on technology daily</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>Downtime costs you money (retail, e-commerce, professional services)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You want predictable IT costs with no surprise bills</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You need someone watching for security threats and system issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You don&apos;t have in-house IT staff (or want to supplement them)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>Compliance requirements (HIPAA, PCI-DSS, etc.)</span>
                    </li>
                  </ul>
                  <Card className="bg-blush mt-4">
                    <p className="text-charcoal font-body text-sm">
                      <strong>Seattle Example:</strong> A 25-person accounting firm pays $3,500/month for managed services. Before switching, they were spending $5,000-8,000 per month on reactive support, plus dealing with constant fires. MSP was actually cheaper and way less stressful.
                    </p>
                  </Card>
                </Card>

                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    Choose On-Demand Support If:
                  </h3>
                  <ul className="space-y-3 text-gray-medium font-body">
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You&apos;re a very small business (under 5 employees)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>Your IT needs are simple and stable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>Someone on your team is tech-savvy and handles day-to-day issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You rarely have IT problems (maybe once or twice a quarter)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You&apos;re comfortable with occasional downtime</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You&apos;re bootstrapping and watching every dollar</span>
                    </li>
                  </ul>
                  <Card className="bg-blush mt-4">
                    <p className="text-charcoal font-body text-sm">
                      <strong>Warning:</strong> Many businesses think they&apos;re saving money with break-fix support, but end up spending more when problems pile up. If you&apos;re calling for help more than once a month, managed services is probably cheaper.
                    </p>
                  </Card>
                </Card>

                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">
                    Choose IT Consulting If:
                  </h3>
                  <ul className="space-y-3 text-gray-medium font-body">
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You have in-house IT staff but need strategic guidance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You&apos;re planning a major IT project (office move, cloud migration, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You need help selecting technology or vendors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You want a technology roadmap aligned with business goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-rose mt-1">✓</span>
                      <span>You need specialized expertise for a specific project</span>
                    </li>
                  </ul>
                  <Card className="bg-blush mt-4">
                    <p className="text-charcoal font-body text-sm">
                      <strong>Pro Tip:</strong> Many businesses combine consulting with one of the other models. For example, managed services for day-to-day support plus consulting for strategic projects.
                    </p>
                  </Card>
                </Card>
              </div>
            </div>

            {/* Section 3: Hybrid Approaches */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                Hybrid Approaches: The Best of Both Worlds
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                You don&apos;t have to pick just one model. Many Seattle businesses I work with use hybrid approaches:
              </p>

              <div className="space-y-4 mb-6">
                <Card className="bg-rose/5">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                    &quot;Core + On-Demand&quot;
                  </h3>
                  <p className="text-gray-medium font-body text-sm">
                    A light managed services package (monitoring and basic support) plus on-demand support for projects or complex issues. Good for growing businesses that aren&apos;t ready for full MSP pricing.
                  </p>
                </Card>

                <Card className="bg-rose/5">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                    &quot;In-House + MSP Backup&quot;
                  </h3>
                  <p className="text-gray-medium font-body text-sm">
                    One in-house IT person handles day-to-day support, while an MSP provides backup, after-hours coverage, and specialized expertise. Reduces risk of the &quot;what if they&apos;re sick/on vacation/quit&quot; scenario.
                  </p>
                </Card>

                <Card className="bg-rose/5">
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                    &quot;Consulting + Break-Fix&quot;
                  </h3>
                  <p className="text-gray-medium font-body text-sm">
                    Quarterly consulting sessions for strategic planning plus on-demand support for issues. Works well for businesses with simple IT needs but big growth plans.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 4: Red Flags */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                Red Flags When Choosing an IT Provider
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                Not all IT support providers are created equal. Watch out for these warning signs:
              </p>

              <Card className="bg-rose/5 mb-6">
                <ul className="space-y-3 text-gray-medium font-body">
                  <li className="flex items-start gap-3">
                    <span className="text-rose mt-1">⚠</span>
                    <span><strong>No clear SLA (Service Level Agreement):</strong> What response times can you expect? What&apos;s covered? Get it in writing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose mt-1">⚠</span>
                    <span><strong>Lock-in contracts without trial period:</strong> A confident provider will offer a trial or short initial term.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose mt-1">⚠</span>
                    <span><strong>Pressure to buy hardware/software through them:</strong> Good providers recommend solutions, not push products for commissions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose mt-1">⚠</span>
                    <span><strong>No documentation or knowledge transfer:</strong> You should own documentation of your systems, not be held hostage to it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose mt-1">⚠</span>
                    <span><strong>Can&apos;t provide local references:</strong> Any established Seattle IT provider should have happy local clients willing to talk.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose mt-1">⚠</span>
                    <span><strong>&quot;Unlimited support&quot; promises:</strong> Nothing is truly unlimited. Look for clear definitions of what&apos;s included.</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Section 5: Making the Switch */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                Switching IT Support Models
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                Already have IT support but considering a change? Here&apos;s how to transition smoothly:
              </p>

              <Card className="mb-6">
                <ol className="space-y-4 text-gray-medium font-body">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">1.</span>
                    <div>
                      <strong className="text-charcoal">Document everything first:</strong> Before switching providers, make sure you have all passwords, documentation, and account information. Don&apos;t depend on your current provider to hand it over gracefully.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">2.</span>
                    <div>
                      <strong className="text-charcoal">Check your contract:</strong> What&apos;s your termination notice period? Any penalties for early cancellation?
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">3.</span>
                    <div>
                      <strong className="text-charcoal">Overlap transition:</strong> If possible, have your new provider start before you end with the old one. Makes for a smoother handoff.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">4.</span>
                    <div>
                      <strong className="text-charcoal">Plan for discovery period:</strong> Your new provider will need time to learn your systems. Budget extra support time for the first month.
                    </div>
                  </li>
                </ol>
              </Card>
            </div>

            {/* Conclusion */}
            <Card className="bg-blush mb-12">
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">
                The Bottom Line
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                The right IT support model depends on your business size, technical complexity, and how critical technology is to your operations. There&apos;s no one-size-fits-all answer.
              </p>
              <p className="text-gray-medium font-body leading-relaxed">
                Start by honestly assessing your needs, not your budget. Cheap IT support is expensive when it leads to downtime, security breaches, or lost productivity. Invest appropriately for your business stage and growth plans.
              </p>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="font-heading font-semibold text-2xl text-charcoal mb-4">
                Not Sure Which Model Is Right for You?
              </h3>
              <p className="text-gray-medium font-body mb-6">
                Let&apos;s talk about your business needs. We offer flexible IT support tailored to Seattle businesses.
              </p>
              <Button href="/contact" size="lg">
                Schedule Free Consultation
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
              <span className="text-xs font-body font-medium text-rose mb-2 block">Business IT</span>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Top 5 IT Mistakes Small Businesses Make
              </h3>
              <Button variant="secondary" href="/blog/top-it-mistakes-small-businesses" className="w-full mt-4">
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
              <span className="text-xs font-body font-medium text-rose mb-2 block">Security</span>
              <h3 className="font-heading font-semibold text-lg text-charcoal mb-2">
                Network Security Essentials for Remote Teams
              </h3>
              <Button variant="secondary" href="/blog/network-security-remote-teams" className="w-full mt-4">
                Read More →
              </Button>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
