import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import TableOfContents from '@/components/TableOfContents';
import RelatedCaseStudies from '@/components/RelatedCaseStudies';

export const metadata = generateSEO({
  title: 'FortiGate FortiBleed Incident Response',
  description:
    'FortiBleed was a credential-based attack campaign against exposed FortiGate admin and SSL-VPN logins, not a patchable CVE. How we locked down exposure, rotated every credential, enforced MFA, and rebuilt monitoring around FortiAnalyzer, a SIEM, and an infrastructure monitoring platform.',
  keywords: [
    'FortiGate FortiBleed',
    'FortiGate credential attack',
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
      'A credential-based attack campaign against the perimeter firewall - and why rotating credentials and enforcing MFA mattered more than any patch.',
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
            FortiGate FortiBleed Response: Why This Wasn&apos;t a Patch Problem
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            FortiBleed is often assumed to be a single software vulnerability you patch and move
            on from. It isn&apos;t. The 2026 FortiBleed campaign targeted exposed FortiGate admin
            interfaces and SSL-VPN logins with credentials that had already been stolen or exposed
            in earlier incidents, replayed via brute-force and password spraying — not a single
            new zero-day you patch and walk away from. Fortinet&apos;s own analysis attributed the
            activity to credential reuse rather than a newly disclosed vulnerability, and
            security researchers covering the campaign made the same point: you can&apos;t patch
            your way out of a credential attack. The fix is credential hygiene first, then the
            monitoring to make sure it stays fixed.
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
                  <span>Reused Credentials + Password Spraying</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">CVE Involved:</span>
                  <span>None — Not a Software Exploit</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Response Window:</span>
                  <span>All Credentials Rotated &lt;24 Hrs</span>
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
          <h2 className="text-lg font-semibold mb-4 text-center">Response Sequence — Credentials First, Not Firmware</h2>
          <svg viewBox="0 0 1040 220" className="w-full min-w-[720px]" role="img" aria-label="Six-step response flow: limit exposure, revoke and rotate credentials, enforce MFA, review logs, deploy FortiAnalyzer, correlate with a SIEM and an infrastructure monitoring platform">
            {[
              { n: '1', t: 'Limit', s: 'Lock down VPN &', s2: 'admin exposure' },
              { n: '2', t: 'Revoke & Rotate', s: 'Every credential —', s2: 'admin, VPN, AD, API' },
              { n: '3', t: 'Enforce MFA', s: 'Close the gap a', s2: 'patch can’t close' },
              { n: '4', t: 'Review Logs', s: 'Hunt for anomalous', s2: 'logins, no CVE to match' },
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
            Steps 1–3 close the actual attack path (credentials). Steps 4–6 confirm nothing was missed and keep watching.
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Risk: A Credential Attack Wearing a Vulnerability&apos;s Name</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              It&apos;s tempting to read &quot;FortiBleed&quot; and assume it means the same thing every time —
              a specific, numbered software flaw with a patch that closes it. The 2026 FortiBleed
              campaign wasn&apos;t that. There was no CVE behind it, and Fortinet and third-party
              researchers (Qualys included) were explicit that it was unrelated to the 2024
              FortiOS SSL-VPN vulnerability the name gets confused with. What actually happened was
              simpler and, in some ways, scarier: attackers used previously leaked or reused
              credentials, combined with brute force and password spraying, against FortiGate
              management interfaces and SSL-VPN logins left reachable from the internet.
            </p>
            <p className="text-fg-muted leading-relaxed">
              That distinction matters because it changes what &quot;fixed&quot; means. A code vulnerability
              is closed by a patch. A credential attack is closed by assuming every password,
              API token, and shared secret that touched that exposed login may already be
              compromised — which means patching the firmware and calling it done would have left
              the actual attack path, valid-looking credentials, completely open. We treated this
              as a credential-compromise incident from the first report, not a patching ticket.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Did: Credentials First, Monitoring to Make Sure It Stays Fixed</h2>
            <p className="text-fg-muted leading-relaxed mb-6">
              Six steps, in order of what actually closes the exposure versus what confirms and
              sustains it.
            </p>
            <div className="space-y-6">
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">1. Limit the Exposure — Lock Down VPN &amp; Admin Access</h3>
                <p className="text-fg-muted leading-relaxed">
                  The FortiGate&apos;s administrative interface and SSL-VPN portal were restricted to
                  known management IPs immediately, cutting off the open-internet attack surface
                  the campaign depends on before anything else was touched.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">2. Revoke &amp; Rotate — Every Credential, Not Just One</h3>
                <p className="text-fg-muted leading-relaxed">
                  Every active session was terminated and every credential that could have touched
                  the exposed logins was rotated within 24 hours: local admin accounts, VPN user
                  credentials, AD/LDAP bind accounts, RADIUS secrets, API tokens, and SNMP
                  community strings. A credential attack isn&apos;t over until the credentials
                  themselves are no longer valid — this was the step that actually closed the door.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">3. Enforce MFA — Close the Gap a Patch Can&apos;t</h3>
                <p className="text-fg-muted leading-relaxed">
                  Multi-factor authentication was enforced on both VPN and administrative logins.
                  Password rotation protects against the credentials that were already exposed;
                  MFA protects against the next leaked password — which is the actual, durable fix
                  for a campaign built entirely on credential reuse.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">4. Review the Logs — Hunt With No CVE to Match Against</h3>
                <p className="text-fg-muted leading-relaxed">
                  With no patch advisory or exploit signature to check against, the only way to
                  know if the campaign had succeeded here was the logs themselves: VPN session
                  history, admin login events, and config-change timestamps, checked for unfamiliar
                  source IPs, off-hours admin activity, and the repeated-failed-login pattern
                  typical of password spraying. The firm&apos;s seven-day log retention was enough to
                  clear the immediate window, but not enough to be fully confident — which is what
                  drove the retention change below.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">5. Add FortiAnalyzer — Centralize What the Firewall Sees</h3>
                <p className="text-fg-muted leading-relaxed">
                  FortiGate logs previously lived on the device itself and rotated out within days.
                  FortiAnalyzer now pulls every log stream — traffic, VPN sessions, authentication
                  events, admin activity — into one searchable, retained archive, so the next
                  &quot;was this login legitimate&quot; question is a query, not a guess.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">6. SIEM + Infrastructure Monitoring — Correlate and Monitor Going Forward</h3>
                <p className="text-fg-muted leading-relaxed">
                  A SIEM now correlates FortiAnalyzer&apos;s authentication events with broader network
                  signals, while an infrastructure monitoring platform watches servers and services
                  network-wide. Together they
                  catch the pattern a credential attack actually looks like — repeated logins from
                  unfamiliar locations, failed-then-successful auth sequences — rather than waiting
                  on a vendor advisory that, in this case, never existed.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Tying It Together: Credential Hygiene as the Perimeter</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The lesson this incident reinforced is that the perimeter isn&apos;t only firmware
              version numbers — it&apos;s every credential that can authenticate to it. FortiAnalyzer
              and the infrastructure monitoring platform are the sensors; the SIEM is what correlates authentication behavior
              into a signal worth acting on. None of that replaces rotating credentials and
              enforcing MFA — it&apos;s what keeps the fix from quietly expiring the next time a
              password turns up in a leaked-credential dump somewhere else entirely.
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
              No evidence of compromise was found in the logs available for review once the
              incident response began. Every credential that could have touched the exposed
              logins — admin, VPN, AD/LDAP, RADIUS, API tokens, and SNMP community strings — was
              rotated within 24 hours, and MFA now covers both VPN and administrative access. The
              firm also now runs with twelve months of retained, centralized logging and
              correlated alerting that didn&apos;t exist before this incident.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The campaign forced the question. Credential rotation and MFA answered it. Monitoring
              makes sure the answer holds the next time a password shows up somewhere it shouldn&apos;t.
            </p>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Is Your Perimeter Exposed to the Same Attack?</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              If your FortiGate&apos;s admin interface or SSL-VPN is reachable from the open internet,
              if MFA isn&apos;t enforced on every VPN and admin login, or if credentials have never
              been rotated after a staff change or a vendor breach notification, the exposure this
              case study closes is very likely open on your network too — and no amount of
              firmware patching will close it, because it isn&apos;t a firmware problem.
            </p>
            <p className="text-fg-muted leading-relaxed">
              We run a credential and perimeter exposure review: what&apos;s reachable from the
              internet, where MFA is missing, how old your credentials and shared secrets are, and
              how far back your logs actually go — with a prioritized plan, not a scare report.
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
