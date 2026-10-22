import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import TableOfContents from '@/components/TableOfContents';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';

export const metadata = generateSEO({
  title: 'FortiGate FortiBleed Incident Response',
  description:
    'FortiBleed is a chained campaign stacking known, patchable FortiOS vulnerabilities with large-scale credential reuse against FortiGate admin and SSL-VPN logins. How we patched to a current build, hunted for persistence, rotated every credential, enforced MFA, and rebuilt monitoring around FortiAnalyzer, a SIEM, and an infrastructure monitoring platform.',
  keywords: [
    'FortiGate FortiBleed',
    'FortiGate credential attack',
    'FortiOS vulnerability patching',
    'FortiOS brute force password spraying',
    'MFA enforcement',
    'FortiAnalyzer',
    'SIEM implementation',
    'infrastructure monitoring platform',
    'network security incident response',
    'Seattle cybersecurity consulting',
  ],
  canonical: '/case-studies/fortigate-fortibleed-incident-response',
  openGraph: {
    title: 'FortiGate FortiBleed Incident Response Case Study',
    description:
      'A chained campaign of known FortiOS vulnerabilities plus large-scale credential reuse against the perimeter firewall - why patching, credential rotation, and MFA all had to happen, in that order.',
    type: 'article',
  },
});

export default function FortiGateFortiBleedIncidentResponse() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb is rendered once, sitewide, by case-studies/layout.tsx */}
      <TableOfContents />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Security
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Incident Response
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Network Monitoring
            </span>
            <span className="text-fg-muted">• October 12, 2026</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            FortiGate FortiBleed Response: Why Patching Was the Start, Not the Whole Fix
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            FortiBleed is often assumed to be a single software vulnerability you patch and move
            on from. It isn&apos;t that simple either way. The 2026 FortiBleed campaign isn&apos;t one
            bug — security researchers tracking it describe it as years of known FortiOS flaws
            chained together with large-scale credential reuse: leaked and infostealer-sourced
            credentials tested against internet-facing FortiGate admin interfaces and SSL-VPN
            logins, with the underlying vulnerabilities used for persistence and to harvest more
            credentials off the device itself. That combination is exactly why &quot;just patch it&quot;
            and &quot;just rotate the passwords&quot; are both incomplete on their own. As one research
            write-up on the campaign puts it: patching is the beginning of the response, not the
            end of it.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-1 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Client:</span>
                  <span>Multi-Site Professional Services Firm</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Trigger:</span>
                  <span>FortiBleed Credential Attack Campaign</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Attack Method:</span>
                  <span>Chained Known CVEs + Credential Reuse</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Firmware Status:</span>
                  <span>Behind — Patched to a Fixed Build First</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Response Window:</span>
                  <span>Patched &amp; All Credentials Rotated &lt;24 Hrs</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-1 p-6 rounded-lg border border-brand-green/30">
              <h2 className="text-xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Evidence of Compromise:</span>
                  <span className="text-brand-green font-semibold">None Found</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Credentials Rotated:</span>
                  <span className="text-brand-green font-semibold">100% / &lt;24 Hrs</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Log Retention:</span>
                  <span className="text-brand-green font-semibold">7 Days → 12 Months</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Monitored Log Sources:</span>
                  <span className="text-brand-green font-semibold">1 → 4</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Mean Time to Alert:</span>
                  <span className="text-brand-green font-semibold">Manual Review → ~5 Min</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Response flow diagram */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">Response Sequence — Patch First, Then Assume Compromise</h2>
          <svg viewBox="0 0 1040 220" className="w-full min-w-[720px]" role="img" aria-label="Six-step response flow: patch to a fixed FortiOS build, hunt for persistence, revoke and rotate credentials, enforce MFA, deploy FortiAnalyzer, correlate with a SIEM and an infrastructure monitoring platform">
            {[
              { n: '1', t: 'Patch', s: 'Update to a current,', s2: 'fixed FortiOS build' },
              { n: '2', t: 'Hunt & Rebuild', s: 'Check for persistence;', s2: 'rebuild if compromised' },
              { n: '3', t: 'Revoke & Rotate', s: 'Every credential —', s2: 'admin, VPN, AD, API' },
              { n: '4', t: 'Enforce MFA', s: 'Close the gap a', s2: 'patch alone can’t' },
              { n: '5', t: 'FortiAnalyzer', s: 'Centralize &', s2: 'retain every log' },
              { n: '6', t: 'SIEM + Monitoring', s: 'Correlate &', s2: 'monitor going forward' },
            ].map((step, i) => {
              const x = 20 + i * 170;
              return (
                <g key={step.n}>
                  <rect x={x} y={40} width={150} height={130} rx={10} className="fill-surface-0" stroke="#3A81F7" strokeWidth={1.5} />
                  <circle cx={x + 75} cy={68} r={16} fill="#3A81F7" />
                  <text x={x + 75} y={73} textAnchor="middle" fontSize="16" fontWeight="700" fill="#fff">{step.n}</text>
                  <text x={x + 75} y={102} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">{step.t}</text>
                  <text x={x + 75} y={130} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.7}>{step.s}</text>
                  <text x={x + 75} y={146} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.7}>{step.s2}</text>
                  {i < 5 && (
                    <path d={`M ${x + 152} 105 L ${x + 168} 105`} stroke="#00A878" strokeWidth={3} markerEnd="url(#arrow)" />
                  )}
                </g>
              );
            })}
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#00A878" />
              </marker>
            </defs>
          </svg>
          <p className="text-center text-sm text-fg-muted mt-3">
            Steps 1–2 close the known vulnerability chain and check for anything attackers already planted. Steps 3–4 close the credential path patching alone can&apos;t. Steps 5–6 make sure nothing like this goes unnoticed again.
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Risk: Neither &quot;Just Patch It&quot; Nor &quot;It&apos;s Not a Patch Problem&quot; Is Right</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              It&apos;s tempting to read &quot;FortiBleed&quot; and assume it means one thing — a single
              numbered flaw with a patch that closes it. It&apos;s just as tempting, once you learn
              credential reuse is involved, to swing the other way and assume firmware doesn&apos;t
              matter at all. Both are wrong. Security researchers tracking the 2026 FortiBleed
              campaign describe it as a chain of previously disclosed, patchable FortiOS
              vulnerabilities (the device-takeover flaw behind CVE-2024-21762 among them) combined
              with large-scale credential reuse: attackers test leaked and infostealer-sourced
              credentials against internet-facing FortiGate admin interfaces and SSL-VPN logins,
              then use the chained vulnerabilities for persistence and to harvest still more
              credentials directly off the device.
            </p>
            <p className="text-fg-muted leading-relaxed">
              That combination is what makes either shortcut dangerous. Patching alone closes the
              entry points but does nothing about credentials an attacker may have already
              captured, or persistence they may have already planted before the patch landed.
              Rotating credentials alone leaves the same known, exploitable firmware gaps open to
              the next pass of the same campaign. We treated this as both a patching gap and a
              credential-compromise incident from the first report — not a choice between the two.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Did: Patch, Verify, Rotate, Then Make Sure It Stays Fixed</h2>
            <p className="text-fg-muted leading-relaxed mb-6">
              Six steps, in order of what actually closes the exposure versus what confirms and
              sustains it.
            </p>
            <div className="space-y-6">
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">1. Patch — Update to a Current, Fixed FortiOS Build</h3>
                <p className="text-fg-muted leading-relaxed">
                  The device was behind on firmware, sitting on a build still exposed to the known
                  vulnerabilities the campaign chains together. Before anything else, it was
                  upgraded to a current, fixed FortiOS build and the admin interface and SSL-VPN
                  portal were restricted to known management IPs — closing the open-internet
                  attack surface and the specific exploit paths at the same time.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">2. Hunt for Persistence — Then Decide Whether to Rebuild</h3>
                <p className="text-fg-muted leading-relaxed">
                  A patch closes the door but doesn&apos;t evict anyone already inside. We reviewed
                  configuration history, admin accounts, and scheduled jobs for anything an
                  attacker could have planted before the patch, and checked VPN session history,
                  admin login events, and config-change timestamps for unfamiliar source IPs,
                  off-hours admin activity, and the repeated-failed-login pattern typical of
                  password spraying. Finding any of that would have meant rebuilding from a trusted
                  image rather than trusting the patch alone.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">3. Revoke &amp; Rotate — Every Credential, Not Just One</h3>
                <p className="text-fg-muted leading-relaxed">
                  Every active session was terminated and every credential that could have touched
                  the exposed logins was rotated within 24 hours: local admin accounts, VPN user
                  credentials, AD/LDAP bind accounts, RADIUS secrets, API tokens, and SNMP
                  community strings. Patching stops the next exploit attempt; it does nothing about
                  credentials that may already be sitting in a leaked-credential dump — rotation is
                  what closes that half of the exposure.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">4. Enforce MFA — Close the Gap a Patch Alone Can&apos;t</h3>
                <p className="text-fg-muted leading-relaxed">
                  Multi-factor authentication was enforced on both VPN and administrative logins.
                  Patching and rotation deal with this incident; MFA is what keeps the next leaked
                  or reused password from being enough on its own — the durable fix for a campaign
                  built on credential reuse at scale.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">5. Add FortiAnalyzer — Centralize What the Firewall Sees</h3>
                <p className="text-fg-muted leading-relaxed">
                  FortiGate logs previously lived on the device itself and rotated out within days —
                  not long enough to confidently rule out earlier compromise. FortiAnalyzer now
                  pulls every log stream — traffic, VPN sessions, authentication events, admin
                  activity — into one searchable, retained archive, so the next &quot;was this login
                  legitimate&quot; question is a query, not a guess.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">6. SIEM + Infrastructure Monitoring — Correlate and Monitor Going Forward</h3>
                <p className="text-fg-muted leading-relaxed">
                  A SIEM now correlates FortiAnalyzer&apos;s authentication events with broader network
                  signals, while an infrastructure monitoring platform watches servers and services
                  network-wide. Together they catch the pattern a credential attack actually looks
                  like — repeated logins from unfamiliar locations, failed-then-successful auth
                  sequences, firmware drifting out of date again — instead of relying on a single
                  patch cycle or a single credential reset to hold forever.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Tying It Together: the Perimeter Is Firmware and Credentials, Not One or the Other</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The lesson this incident reinforced is that the perimeter is both the firmware
              version and every credential that can authenticate to it — treating either one as
              the whole fix leaves the other half of the campaign&apos;s playbook open. FortiAnalyzer
              and the infrastructure monitoring platform are the sensors; the SIEM is what
              correlates authentication behavior into a signal worth acting on. None of that
              replaces staying current on firmware, rotating credentials, or enforcing MFA — it&apos;s
              what catches it quickly the next time firmware drifts out of date or a password turns
              up in a leaked-credential dump somewhere else entirely.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The output is a real-time, data-driven view of authentication and network activity:
              live alerting instead of a seven-day log window, and a documented trail for every
              login instead of a guess about whether one was legitimate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Result</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The FortiGate was brought onto a current, fixed firmware build, and no evidence of
              persistence or prior compromise was found during the hunt that followed. Every
              credential that could have touched the exposed logins — admin, VPN, AD/LDAP, RADIUS,
              API tokens, and SNMP community strings — was rotated within 24 hours, and MFA now
              covers both VPN and administrative access. The firm also now runs with twelve months
              of retained, centralized logging and correlated alerting that didn&apos;t exist before
              this incident.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The campaign forced the question on two fronts at once. Patching and a persistence
              hunt answered the firmware side; credential rotation and MFA answered the other.
              Monitoring makes sure the answer holds the next time either one drifts.
            </p>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Is Your Perimeter Exposed to the Same Attack?</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              If your FortiGate is behind on firmware, if its admin interface or SSL-VPN is
              reachable from the open internet, if MFA isn&apos;t enforced on every VPN and admin
              login, or if credentials have never been rotated after a staff change or a vendor
              breach notification, the exposure this case study closes is very likely open on your
              network too — and closing only one of those gaps still leaves the campaign&apos;s other
              path in.
            </p>
            <p className="text-fg-muted leading-relaxed">
              We run a credential and perimeter exposure review: current firmware status, what&apos;s
              reachable from the internet, where MFA is missing, how old your credentials and
              shared secrets are, and how far back your logs actually go — with a prioritized plan,
              not a scare report.
            </p>
          </section>

          <RelatedCaseStudies
            items={[
              {
                slug: 'ai-noc-unified-security-monitoring',
                title: 'Building a Unified, AI-Assisted NOC',
                blurb: 'The SIEM and correlation layer this incident forced into existence, generalized across six tools.',
              },
              {
                slug: 'network-security-remote-teams',
                title: 'Network Security Essentials for Remote Teams',
                blurb: 'VPN and MFA fundamentals for distributed teams — the same gaps FortiBleed exploited.',
              },
              {
                slug: 'fortigate-active-active-asymmetric-traffic-troubleshooting',
                title: 'Asymmetric Traffic in a FortiGate Active-Active Cluster',
                blurb: 'Another FortiGate field case: a cluster that looked healthy while quietly failing.',
              },
            ]}
          />

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Not Sure Your Perimeter Credentials Are Clean?</h2>
            <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
              Get a credential and exposure review: internet-facing admin/VPN check, MFA coverage,
              credential age, and a concrete monitoring plan that actually reaches someone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2968D8] transition-colors"
              >
                Request a Security Assessment
              </Link>
              <Link
                href="/case-studies"
                className="border border-line text-fg px-8 py-3 rounded-lg font-semibold hover:bg-surface-1 transition-colors"
              >
                More Case Studies
              </Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
