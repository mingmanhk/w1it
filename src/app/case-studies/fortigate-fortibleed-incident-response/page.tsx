import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'FortiGate FortiBleed Incident Response',
  description:
    'A critical FortiOS SSL-VPN vulnerability put unauthenticated remote access on the table. How we patched, hunted for compromise, and rebuilt network monitoring into one real-time threat-prediction and alerting picture.',
  keywords: [
    'FortiGate FortiBleed',
    'CVE-2024-21762',
    'FortiOS SSL-VPN vulnerability',
    'FortiAnalyzer',
    'SIEM implementation',
    'Check_MK monitoring',
    'network security incident response',
    'Seattle cybersecurity consulting',
  ],
  canonical: '/case-studies/fortigate-fortibleed-incident-response',
  openGraph: {
    title: 'FortiGate FortiBleed Incident Response Case Study',
    description:
      'From an unpatched, pre-auth RCE on the perimeter firewall to a real-time, data-driven NOC with unified threat prediction, prevention, and protection.',
    type: 'article',
  },
});

export default function FortiGateFortiBleedIncidentResponse() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb is rendered once, sitewide, by case-studies/layout.tsx */}

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
            FortiGate FortiBleed Response: From Unauthorized-Access Risk to a Real-Time NOC
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            A critical, pre-authentication FortiOS SSL-VPN vulnerability — publicly dubbed
            &quot;FortiBleed&quot; (CVE-2024-21762) — meant anyone who could reach the firewall&apos;s
            VPN portal could potentially execute code on it without a username or password.
            For a perimeter firewall, that is the worst-case exposure: the device guarding the
            network becomes the way in. We patched it, hunted for signs it had already been used,
            and used the incident as the forcing function to rebuild network visibility from the
            ground up — FortiAnalyzer, SNMP, a SIEM, and Check_MK, tied into one real-time,
            data-driven picture of everything moving in and out of the network.
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
                  <span>FortiOS SSL-VPN CVE (FortiBleed)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Exposure:</span>
                  <span>Unauthenticated, pre-auth RCE</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Response Window:</span>
                  <span>Patched within 24 hours</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Follow-on Scope:</span>
                  <span>Full monitoring &amp; SIEM rebuild</span>
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
                  <span className="font-medium">Firmware Patch:</span>
                  <span className="text-brand-green font-semibold">Same-Day</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Log Retention:</span>
                  <span className="text-brand-green font-semibold">7 Days → 1 Year</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Network Visibility:</span>
                  <span className="text-brand-green font-semibold">Perimeter-Only → Full</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Alerting:</span>
                  <span className="text-brand-green font-semibold">Real-Time, 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Risk: When the Firewall Itself Is the Opening</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Most breaches start with a phished employee or a stolen password. FortiBleed was
              different and more dangerous: a critical out-of-bounds write in FortiOS&apos; SSL-VPN
              component let an attacker send a specially crafted request to the VPN login page and
              potentially run their own code on the firewall — no credentials, no user interaction,
              no click required. Because the device sits at the network edge with trust relationships
              into everything behind it, a compromised FortiGate is not an isolated incident. It is a
              foothold into the entire corporate network: file servers, domain controllers, backups,
              and every device that firewall was supposed to protect.
            </p>
            <p className="text-fg-muted leading-relaxed">
              That is the risk profile that makes perimeter device vulnerabilities a board-level
              concern, not just a patching ticket. Unauthenticated access at the edge erases the
              assumption most internal security controls are built on — that anything already past
              the firewall has been through some form of authentication. We treated this as an
              active incident from the moment it was flagged, not a routine update.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We Did: Six Steps, One Objective</h2>
            <p className="text-fg-muted leading-relaxed mb-6">
              Patching alone answers &quot;is the hole closed?&quot; It doesn&apos;t answer &quot;was it already
              used, and would we know if something like it happened again?&quot; We ran both tracks in
              parallel, then used the incident to permanently close the second gap.
            </p>
            <div className="space-y-6">
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">1. Patch the Firmware — Same Day</h3>
                <p className="text-fg-muted leading-relaxed">
                  The FortiOS build with the fix was staged and applied to the affected FortiGate
                  within 24 hours of the advisory, outside the normal change window, with a
                  verified configuration backup taken first. SSL-VPN was temporarily restricted to
                  known management IPs until the patch was confirmed live, closing the immediate
                  attack surface before the forensic review even began.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">2. Review the Logs — Hunt for Prior Compromise</h3>
                <p className="text-fg-muted leading-relaxed">
                  Firmware version history, SSL-VPN session logs, admin login events, and
                  configuration-change timestamps were all pulled and checked against the
                  published indicators of compromise and the exposure window. We looked for
                  unrecognized admin accounts, unexpected config changes, and session activity
                  from unfamiliar source IPs. The firm&apos;s existing log retention was only seven
                  days — enough to clear the immediate incident, but not enough to be confident
                  about the full exposure window, which is what drove the retention change below.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">3. Add FortiAnalyzer — Centralize What the Firewall Sees</h3>
                <p className="text-fg-muted leading-relaxed">
                  Before this incident, FortiGate logs lived on the device itself, rotating out
                  after days. We deployed FortiAnalyzer to pull every log stream — traffic, VPN
                  sessions, threat events, admin activity — off the firewall and into one
                  searchable, retained archive. That turns &quot;what happened last Tuesday&quot; from a
                  guess into a query, and it&apos;s the raw material everything else below runs on.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">4. Implement SNMP — Know When a Device Changes State</h3>
                <p className="text-fg-muted leading-relaxed">
                  SNMP polling was enabled across the firewall, switches, and core network
                  hardware so that interface state, CPU/memory load, and configuration-relevant
                  traps feed into monitoring continuously — not just when someone happens to log
                  in and look. This is the layer that answers &quot;is something behaving differently
                  right now&quot; at the infrastructure level, independent of application logs.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">5. Implement a SIEM — Correlate, Don&apos;t Just Collect</h3>
                <p className="text-fg-muted leading-relaxed">
                  Logs and SNMP data are only useful if patterns across them get flagged
                  automatically. We stood up a SIEM to correlate FortiAnalyzer events with
                  authentication logs and endpoint signals — so a VPN login from a new country
                  followed by an off-hours admin change raises one alert instead of living as two
                  unrelated log lines nobody cross-references at 2 a.m.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">6. Monitor via Check_MK — Watch the Whole Estate, Not Just the Firewall</h3>
                <p className="text-fg-muted leading-relaxed">
                  Check_MK was deployed to monitor servers, switches, and critical services
                  network-wide, feeding its own alerting alongside the SIEM. The firewall was the
                  entry point for this incident, but ongoing visibility had to cover the whole
                  estate — because the next incident won&apos;t necessarily start in the same place.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Tying It Together: One Thing — Threat Prediction, Prevention, Protection</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Six tools are not six separate projects; they are one data pipeline. FortiAnalyzer and
              Check_MK are the sensors. SNMP is the heartbeat. The SIEM is the brain that correlates
              all of it into a single signal: what is going in, what is going out, and whether that
              matches what &quot;normal&quot; looks like for this network. That is the difference between
              reactive security — finding out about an incident after the fact — and a system built
              for prediction and prevention, where an anomalous pattern gets flagged before it
              becomes a headline.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The output is a real-time, data-driven NOC view: live risk status, a single dashboard
              for monitoring and alerting, and a documented trail for every event instead of a
              seven-day log that was already gone by the time anyone thought to look for it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Result</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              No evidence of compromise was found for the exposure window we could analyze — the
              patch landed before any indicator of exploitation appeared in available logs. More
              durably, the firm now operates with a NOC-style real-time dashboard that didn&apos;t exist
              before this incident: live firewall and network health via SNMP, a full retained log
              history via FortiAnalyzer, correlated alerting via the SIEM, and estate-wide service
              monitoring via Check_MK. Unauthorized access risk went from &quot;we&apos;d find out if someone
              told us&quot; to &quot;we&apos;d see it the moment it started.&quot;
            </p>
            <p className="text-fg-muted leading-relaxed">
              The vulnerability forced the patch. The response built the system that makes the next
              one far less likely to matter.
            </p>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Is Your Perimeter Exposed Like This?</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Unauthenticated access at the network edge is not a hypothetical — FortiOS SSL-VPN
              vulnerabilities of this class have been listed on CISA&apos;s Known Exploited
              Vulnerabilities catalog and actively exploited in the wild. If your firewall firmware
              isn&apos;t on a tracked patch cadence, if your logs rotate out in days rather than months,
              or if &quot;monitoring&quot; means someone checks a dashboard occasionally rather than an
              alert reaching a person, the gap this case study closes is almost certainly open on
              your network too.
            </p>
            <p className="text-fg-muted leading-relaxed">
              We run a firewall and perimeter risk assessment that checks firmware currency against
              published CVEs, log retention, and monitoring coverage — and comes back with a
              prioritized plan, not a 40-page scare report.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Worried About Unpatched Perimeter Risk?</h2>
            <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
              Get a firewall and network visibility assessment: firmware/CVE exposure check, log
              retention review, and a concrete plan for monitoring and alerting that actually
              reaches someone.
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
