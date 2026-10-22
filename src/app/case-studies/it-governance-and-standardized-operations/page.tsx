import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Card from '@/components/Card';
import TableOfContents from '@/components/TableOfContents';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';

export const metadata: Metadata = generateSEO({
  title: 'IT Governance and Standardizing Operations - A Practical Guide',
  description:
    'A practical, right-sized approach to IT governance and standardized operations for small and mid-size businesses: what frameworks like ITIL and NIST actually offer, and where to start without an enterprise budget.',
  keywords: [
    'IT governance',
    'standardize IT operations',
    'ITIL for small business',
    'IT change management',
    'IT standard operating procedures',
    'IT operations framework',
  ],
  canonical: '/case-studies/it-governance-and-standardized-operations',
  openGraph: {
    title: 'IT Governance and Standardizing Operations',
    description:
      'What IT governance actually means for a growing business, and a practical path to standardized operations without an enterprise-sized budget.',
    type: 'article',
  },
});

export default function ITGovernanceAndStandardizedOperations() {
  return (
    <div>
      <TableOfContents />
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-surface-0 to-blush">
        <Container>
          <div className="animate-fade-in">
            <span className="text-xs font-body font-medium text-rose bg-surface-0 px-3 py-1 rounded-full">
              IT Operations
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-charcoal mb-6 mt-4">
              IT Governance and Standardizing Operations: A Practical Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-medium font-body mb-6">
              <span>October 22, 2026</span>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>IT Operations</span>
            </div>
            <p className="text-lg text-gray-medium font-body">
              &quot;Governance&quot; sounds like something only a Fortune 500 IT department needs. It isn&apos;t.
              Every business that runs on technology is already being governed somehow — either by a
              deliberate set of standards, or by whoever made the last undocumented decision under
              pressure. Here&apos;s how to make it the first one, without buying an enterprise framework
              you&apos;ll never finish implementing.
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
                Most businesses don&apos;t lack IT governance because nobody thought of it. They lack it
                because &quot;governance&quot; got filed in the same mental folder as 200-page compliance
                binders and year-long consulting engagements. In practice, IT governance is just the
                answer to three questions: who&apos;s allowed to decide things, what the standard way of
                doing something is, and how you&apos;d know if either one broke down. Everything below is
                built around answering those three questions cheaply and keeping the answers current.
              </p>
            </Card>

            {/* Section 1: What governance actually means */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                What &quot;IT Governance&quot; Actually Means
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                Strip away the framework jargon and IT governance is decision rights plus accountability:
                who can approve a change, who owns a system, and what happens when something goes wrong.
                Standardization is the half that makes governance workable day to day — the agreed way
                configurations, access, and processes should look, so decisions don&apos;t have to be
                re-litigated from scratch every time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                    Governance Answers
                  </h3>
                  <ul className="space-y-2 text-gray-medium font-body text-sm">
                    <li className="flex items-start gap-2"><span className="text-rose mt-1">•</span><span>Who can approve a production change?</span></li>
                    <li className="flex items-start gap-2"><span className="text-rose mt-1">•</span><span>Who owns this system if it breaks at 2am?</span></li>
                    <li className="flex items-start gap-2"><span className="text-rose mt-1">•</span><span>What has to happen before something ships?</span></li>
                  </ul>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-lg text-charcoal mb-3">
                    Standardization Answers
                  </h3>
                  <ul className="space-y-2 text-gray-medium font-body text-sm">
                    <li className="flex items-start gap-2"><span className="text-rose mt-1">•</span><span>What does a correctly-built server/account/device look like?</span></li>
                    <li className="flex items-start gap-2"><span className="text-rose mt-1">•</span><span>What&apos;s the one accepted way to do this routine task?</span></li>
                    <li className="flex items-start gap-2"><span className="text-rose mt-1">•</span><span>Where does &quot;current and correct&quot; information live?</span></li>
                  </ul>
                </Card>
              </div>
            </div>

            {/* Section 2: The frameworks in plain English */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                The Major Frameworks, in Plain English
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                You don&apos;t need to adopt any of these wholesale. Knowing what each one is actually for
                helps you borrow the right piece instead of buying the whole book:
              </p>
              <div className="space-y-6">
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">ITIL (v4)</h3>
                  <p className="text-gray-medium font-body text-sm">
                    A service-management playbook: how requests, incidents, changes, and problems should
                    flow. Most useful idea for a smaller business: the separation between an
                    <em> incident</em> (fix it now) and a <em>problem</em> (fix why it keeps happening) —
                    almost nobody does the second part, and it&apos;s where recurring issues actually get
                    solved.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">COBIT (2019)</h3>
                  <p className="text-gray-medium font-body text-sm">
                    A governance-and-control framework aimed at aligning IT decisions with business
                    objectives and risk appetite. Heavier than most businesses need in full, but its
                    core question — &quot;who is accountable for this, specifically?&quot; — is worth
                    answering for every system you depend on.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">ISO/IEC 20000-1</h3>
                  <p className="text-gray-medium font-body text-sm">
                    The certifiable international standard for IT service management. Relevant mainly if
                    a customer or partner contractually requires certification; otherwise, its underlying
                    structure (documented processes, defined roles, continual improvement) is useful
                    without ever pursuing the certificate itself.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-2">NIST Cybersecurity Framework (CSF 2.0)</h3>
                  <p className="text-gray-medium font-body text-sm">
                    Security-focused, but its six functions — Govern, Identify, Protect, Detect,
                    Respond, Recover — double as a decent skeleton for IT governance generally, and it&apos;s
                    free, public, and written in plain enough language to actually use without a
                    consultant.
                  </p>
                </Card>
              </div>
              <Card className="bg-blush mt-6">
                <p className="text-charcoal font-body">
                  <strong>The practical takeaway:</strong> pick the one framework whose vocabulary your
                  team already half-uses, borrow its structure, and stop there. A framework you partially
                  adopt and actually follow beats one you fully diagram and never implement.
                </p>
              </Card>
            </div>

            {/* Section 3: Building blocks of standardized operations */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                The Building Blocks of Standardized Operations
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                None of these require enterprise tooling. They require someone deciding on a standard,
                writing it down, and enforcing it the next time a shortcut is tempting.
              </p>
              <div className="space-y-6">
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">1. A Change Management Process — Even a Lightweight One</h3>
                  <p className="text-gray-medium font-body text-sm">
                    A single shared log of what changed, who approved it, and when — even a spreadsheet —
                    turns &quot;who touched the firewall Friday night&quot; from a mystery into a lookup. The
                    approval step matters more than the tooling: someone other than the person making the
                    change should sign off on anything touching production.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">2. A Documented Standard Build</h3>
                  <p className="text-gray-medium font-body text-sm">
                    One accepted configuration for a new server, workstation, or cloud account — naming
                    convention, baseline software, security settings — so the tenth one looks like the
                    first, not like whatever seemed reasonable that week.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">3. Access Control With a Review Cadence</h3>
                  <p className="text-gray-medium font-body text-sm">
                    Least-privilege access, granted through a documented process — and a recurring review
                    (quarterly is plenty for most small businesses) that actually revokes access nobody
                    uses anymore. The review is the part that gets skipped; it&apos;s also the part that
                    matters most.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">4. Runbooks for Routine and Recovery Tasks</h3>
                  <p className="text-gray-medium font-body text-sm">
                    Written steps for the things that happen often (onboarding a new hire) and the things
                    that happen rarely but matter a lot (restoring from backup). The second category is
                    where undocumented tribal knowledge causes the most damage, precisely because nobody
                    practices it until it&apos;s needed.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">5. A Monitoring and Logging Baseline</h3>
                  <p className="text-gray-medium font-body text-sm">
                    Agreement on what gets logged, for how long, and who looks at it. Governance without
                    visibility is just a policy document — you can&apos;t enforce a standard you can&apos;t
                    verify is being followed.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-heading font-semibold text-xl text-charcoal mb-3">6. A Regular Review Cadence</h3>
                  <p className="text-gray-medium font-body text-sm">
                    Standards drift the moment nobody revisits them. A short quarterly review — what
                    changed, what broke the standard, what the standard should be now — keeps governance
                    from becoming a document nobody opens again after the kickoff meeting.
                  </p>
                </Card>
              </div>
            </div>

            {/* Section 4: Right-sized model */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                A Right-Sized Governance Model for Small and Mid-Size Businesses
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                You don&apos;t need a Change Advisory Board, a service catalog, or a dedicated governance
                committee. A minimum viable version looks like this:
              </p>
              <Card className="bg-blush">
                <ol className="space-y-3 text-gray-medium font-body">
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">One change log.</span>
                    <span>Every production change, logged with who and when, approved by someone other than the person making it.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">One standard build doc</span>
                    <span>per system type (server, workstation, cloud account) that new deployments are checked against.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">One access review</span>
                    <span>every quarter, with actual revocations, not just a spreadsheet nobody acts on.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">One source of truth</span>
                    <span>for documentation — not scattered across email, Slack, and sticky notes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-semibold text-charcoal">One owner</span>
                    <span>per critical system, named, not implied.</span>
                  </li>
                </ol>
              </Card>
            </div>

            {/* Section 5: Where it breaks down */}
            <div className="mb-16">
              <h2 className="font-heading font-bold text-3xl text-charcoal mb-4">
                Where This Usually Breaks Down
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-6">
                In practice, the failure pattern repeats across businesses we&apos;ve worked with:
                undocumented tribal knowledge concentrated in one person, no change control so fixes
                happen under pressure with no second set of eyes, inconsistent builds across sites or
                time, and no named owner for systems everyone assumes someone else is watching. Each of
                those has shown up as its own incident:
              </p>
              <ul className="space-y-3 text-gray-medium font-body mb-6">
                <li className="flex items-start gap-3"><span className="text-rose mt-1">•</span><span>No documentation, no checklist → a single missing daily IT check became a full outage.</span></li>
                <li className="flex items-start gap-3"><span className="text-rose mt-1">•</span><span>No standard build across sites → fragmented infrastructure nobody could reason about as a whole.</span></li>
                <li className="flex items-start gap-3"><span className="text-rose mt-1">•</span><span>No written-down knowledge → the same small mistakes repeating across different small businesses.</span></li>
              </ul>
            </div>

            {/* Conclusion */}
            <Card className="bg-blush mb-12">
              <h2 className="font-heading font-bold text-2xl text-charcoal mb-4">
                The Bottom Line
              </h2>
              <p className="text-gray-medium font-body leading-relaxed mb-4">
                IT governance isn&apos;t a framework you install. It&apos;s a small set of standing answers —
                who decides, what&apos;s standard, how you&apos;d know if it slipped — kept current enough that
                nobody has to improvise them under pressure.
              </p>
              <p className="text-gray-medium font-body leading-relaxed">
                Start with one change log and one standard build document. Everything else in this guide
                builds on having those two things first.
              </p>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <h3 className="font-heading font-semibold text-2xl text-charcoal mb-4">
                Want Help Standing Up a Right-Sized Governance Model?
              </h3>
              <p className="text-gray-medium font-body mb-6">
                We help growing businesses put the minimum viable version of IT governance in place —
                change control, standard builds, access reviews, and the documentation to back it up —
                without an enterprise-sized budget or timeline.
              </p>
              <Button href="/contact">
                Talk Through Your Setup
              </Button>
            </div>

            <RelatedCaseStudies
              items={[
                {
                  slug: 'fragmented-it-standardized-infrastructure',
                  title: 'Fragmented IT to Standardized Infrastructure',
                  blurb: 'This guide\'s standard-build principle, applied to a real, fragmented environment.',
                },
                {
                  slug: 'why-businesses-need-it-documentation',
                  title: 'Why Your Business Needs IT Documentation',
                  blurb: 'The single-source-of-truth documentation piece, in depth.',
                },
                {
                  slug: 'missing-it-checklist-outage-recovery',
                  title: 'A Missing IT Checklist and a Full Outage',
                  blurb: 'What happens when the standard operating procedure piece is skipped entirely.',
                },
              ]}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
