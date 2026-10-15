import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Asymmetric Traffic in a FortiGate Active-Active Cluster',
  description:
    'A field lesson from early in a networking career: an active-active FortiGate HA cluster that looked perfectly healthy while quietly dropping sessions, because the upstream network and the cluster were load-balancing traffic two different ways.',
  keywords: [
    'FortiGate active-active',
    'FGCP HA troubleshooting',
    'asymmetric routing firewall',
    'FortiGate HA cluster',
    'session table reset',
    'stateful inspection failure',
    'HA load balancing',
    'network troubleshooting',
  ],
  canonical: '/case-studies/fortigate-active-active-asymmetric-traffic-troubleshooting',
  openGraph: {
    title: 'Asymmetric Traffic in a FortiGate Active-Active Cluster',
    description:
      'The HA cluster showed green across the board. The traffic pattern underneath it did not match how the cluster was load-balancing - and that mismatch was the whole problem.',
    type: 'article',
  },
});

export default function FortigateActiveActiveTroubleshooting() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb is rendered once, sitewide, by case-studies/layout.tsx */}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Networking
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              High Availability
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Troubleshooting
            </span>
            <span className="text-fg-muted">• Lessons From the Field</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            Asymmetric Traffic in a FortiGate Active-Active Cluster: The HA Setup That Fought Itself
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            Early in my networking career, before founding W1IT, I inherited a FortiGate cluster
            running in active-active mode that intermittently broke live sessions — dropped VPN
            tunnels, reset connections, calls that cut out mid-sentence. HA status showed green on
            both units the entire time. The cluster wasn&apos;t failing. It was working exactly as
            configured — the problem was that the network around it wasn&apos;t sending traffic the
            way the cluster expected, and nothing in the standard health checks was built to catch
            that mismatch.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-1 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">The Setup</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Role at the Time:</span>
                  <span>Network Engineer (pre-W1IT)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Cluster Mode:</span>
                  <span>FortiGate FGCP, Active-Active</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">HA Health Checks:</span>
                  <span>Green, the entire time</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Symptom:</span>
                  <span>Intermittent, load-dependent</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">First Suspects:</span>
                  <span>ISP, routing, firewall policy</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-1 p-6 rounded-lg border border-brand-green/30">
              <h2 className="text-xl font-semibold mb-4">Why It Was Hard</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Reproducibility:</span>
                  <span className="text-brand-green font-semibold">Inconsistent</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Visible in HA Status:</span>
                  <span className="text-brand-green font-semibold">No</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Visible in Single-Unit Logs:</span>
                  <span className="text-brand-green font-semibold">No</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Root Cause Layer:</span>
                  <span className="text-brand-green font-semibold">Upstream + HA mismatch</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">What Found It:</span>
                  <span className="text-brand-green font-semibold">Dual-unit packet capture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagram */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">Two Load-Balancing Decisions, Disagreeing With Each Other</h2>
          <svg viewBox="0 0 1000 380" className="w-full min-w-[720px]" role="img" aria-label="Diagram: a client's outbound request is hashed by the upstream switch to one cluster member, but the matching return traffic is hashed to the other cluster member, which never saw the opening handshake and treats the reply as invalid">
            <rect x={30} y={40} width={220} height={70} rx={10} className="fill-surface-0" stroke="#3A81F7" strokeWidth={1.5} />
            <text x={140} y={70} textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Client Session</text>
            <text x={140} y={90} textAnchor="middle" fontSize="11.5" fill="currentColor" opacity={0.7}>One TCP connection</text>

            <path d="M 252 60 L 420 60" stroke="#8a94a6" strokeWidth={2} markerEnd="url(#arrowA)" />
            <text x={335} y={48} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.7}>outbound</text>

            <rect x={430} y={20} width={230} height={70} rx={10} className="fill-surface-0" stroke="#b45309" strokeWidth={2} />
            <text x={545} y={48} textAnchor="middle" fontSize="13" fontWeight="700" fill="#8a5a12">Upstream Switch</text>
            <text x={545} y={66} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.7}>hashes flow → Unit A</text>

            <path d="M 545 90 L 545 150" stroke="#0d652d" strokeWidth={2.5} markerEnd="url(#arrowB)" />

            <rect x={330} y={160} width={200} height={80} rx={10} className="fill-surface-0" stroke="#0d652d" strokeWidth={2} />
            <text x={430} y={190} textAnchor="middle" fontSize="14" fontWeight="700" fill="#0d652d">Cluster Unit A</text>
            <text x={430} y={210} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.75}>sees SYN, opens session</text>
            <text x={430} y={226} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.6}>HA status: up ✓</text>

            <rect x={560} y={160} width={200} height={80} rx={10} className="fill-surface-0" stroke="#b42318" strokeWidth={2} />
            <text x={660} y={190} textAnchor="middle" fontSize="14" fontWeight="700" fill="#b42318">Cluster Unit B</text>
            <text x={660} y={210} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.75}>sees reply, no matching session</text>
            <text x={660} y={226} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.6}>HA status: up ✓</text>

            <path d="M 760 200 L 870 260" stroke="#b42318" strokeWidth={2} strokeDasharray="5 4" markerEnd="url(#arrowC)" />
            <text x={820} y="248" textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.7}>return path</text>

            <rect x={870} y={270} width={100} height={70} rx={10} className="fill-surface-0" stroke="#b42318" strokeWidth={1.8} />
            <text x={920} y={300} textAnchor="middle" fontSize="12" fontWeight="700" fill="#b42318">Reset</text>
            <text x={920} y={318} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.7}>treated as invalid</text>

            <path d="M 430 240 L 430 300 L 830 300 L 920 300" fill="none" stroke="#8a94a6" strokeWidth={1.4} strokeDasharray="3 3" />
            <text x={630} y={320} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.6}>same connection, two different units saw half of it each</text>

            <defs>
              <marker id="arrowA" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#8a94a6" />
              </marker>
              <marker id="arrowB" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#0d652d" />
              </marker>
              <marker id="arrowC" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#b42318" />
              </marker>
            </defs>
          </svg>
          <p className="text-center text-sm text-fg-muted mt-3">
            Both units reported healthy HA status the entire time, because HA health checks test
            whether the cluster is in sync with itself — not whether the upstream network is
            routing flows symmetrically through it.
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Problem: Everything Looked Fine</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The complaints started small and vague — a VoIP call that cut out for no reason, a
              VPN tunnel that dropped and reconnected, a file transfer that stalled partway
              through. None of it was severe enough to call an emergency, and none of it
              reproduced on demand. Checking the obvious things first turned up nothing: both
              FortiGate cluster members showed HA synchronized and healthy, CPU and memory were
              unremarkable, interface error counters were clean, and the ISP link had no reported
              outages.
            </p>
            <p className="text-fg-muted leading-relaxed">
              That combination — real, user-reported symptoms with a completely clean dashboard —
              is the single hardest kind of problem to chase, because every quick check tells you
              the thing you&apos;re suspecting is fine. It pushes you toward blaming whatever you
              can&apos;t directly see: the ISP, a flaky switch port, &quot;the network.&quot;
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Why Active-Active Hides This Particular Failure</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              An active-active FGCP cluster distributes sessions across its member units using a
              load-balancing hash, and each unit does full stateful inspection only on the
              sessions it owns. That works perfectly as long as every packet belonging to a given
              session consistently reaches the same unit in both directions.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              The upstream switching and routing layer has its own, independent idea of how to
              load-balance that same traffic — usually a port-channel or ECMP hash based on
              source/destination IP and port. When that upstream hash doesn&apos;t line up with the
              cluster&apos;s own hash, a session&apos;s outbound packets can land on Unit A while the
              matching return traffic gets steered to Unit B. Unit B never saw the handshake that
              opened the session, has no state for it, and — correctly, by its own logic — drops
              or resets what looks like an invalid, unsolicited packet.
            </p>
            <p className="text-fg-muted leading-relaxed">
              Nothing about that is a fault condition. Both units are doing exactly what
              they&apos;re configured to do. The failure lives entirely in the gap between two
              independently-correct load-balancing decisions — which is exactly why HA status,
              single-unit logs, and interface counters all stayed clean the entire time.
            </p>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">The Troubleshooting Path That Actually Worked</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              A lot of time went into things that felt productive and weren&apos;t: restarting
              services, reviewing firewall policies line by line, escalating to the ISP, swapping
              cables. All reasonable first moves. None of them touched the actual cause, because
              the cause wasn&apos;t in any single device&apos;s logs — it was in the relationship between
              two devices&apos; independent decisions.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              What finally surfaced it was running packet captures on <em>both</em> cluster
              members at the same time, during an active failure, and lining up the timestamps.
              That showed the signature clearly: the SYN landing on one unit, the SYN-ACK or later
              data packets landing on the other, with neither unit ever seeing a complete,
              consistent flow for the affected sessions. Once that pattern was visible, it stopped
              being a mystery and became a known, documented FGCP behavior — the hard part was
              never the fix, it was getting to a diagnostic view that could show two units&apos;
              independent realities at the same moment.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The fix itself was a design correction, not a patch: aligning the upstream
              load-balancing hash with the cluster&apos;s own session distribution so a flow&apos;s
              forward and return traffic consistently land on the same member, and tightening the
              failover/session-pickup settings so a hash mismatch degraded gracefully instead of
              silently dropping sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What It Changed</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              This is the kind of problem that doesn&apos;t show up in a vendor&apos;s quick-start guide,
              because it isn&apos;t a misconfiguration in the usual sense — it&apos;s two correctly
              configured systems disagreeing about something neither one can see on its own. It
              stuck with me because the standard troubleshooting instinct — check the device
              that&apos;s complaining — actively pointed away from the real cause.
            </p>
            <p className="text-fg-muted leading-relaxed">
              It&apos;s a big part of why, when we design or inherit an active-active HA deployment
              today, we don&apos;t stop at &quot;HA status is green.&quot; We verify that the upstream
              network&apos;s load-balancing actually agrees with the cluster&apos;s, under real traffic,
              before calling it done — and when something intermittent defies single-device
              logs, dual-point packet capture is usually where we go next, not last.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">HA Cluster Showing Green, But Something&apos;s Still Off?</h2>
            <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
              Intermittent, load-dependent failures in an HA environment are exactly the kind of
              problem that resists single-device troubleshooting. We can take a look at how your
              cluster and your upstream network are actually agreeing with each other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2968D8] transition-colors"
              >
                Talk Through Your Setup
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
