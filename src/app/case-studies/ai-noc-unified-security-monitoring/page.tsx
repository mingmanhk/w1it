import Link from 'next/link';
import { generateSEO } from '@/lib/seo';
import RingExplorer from './RingExplorer';
import MermaidChart from './MermaidChart';

const DATA_FLOW_DIAGRAM = `flowchart LR
    FA["Firewall Analytics<br/>Ring 1"] --> SIEM
    IM["Infra Monitoring + SNMP<br/>Ring 2"] --> SIEM
    EDRMDM["EDR + MDM<br/>Ring 3"] --> SIEM
    ID["Identity &amp; Email Suite<br/>Ring 4"] --> SIEM
    SIEM["Self-Hosted SIEM<br/>Ring 5"] --> LLM["On-Prem LLM<br/>NAS + GPU"]
    LLM --> DASH["Real-Time NOC Dashboard"]`;

export const metadata = generateSEO({
  title: 'Building a Unified, AI-Assisted NOC',
  description:
    'How we correlated six previously disconnected tools - firewall analytics, infrastructure monitoring, SNMP polling, an EDR platform, an MDM platform, and a cloud identity and email suite - into one real-time security baseline through a new Linux SIEM, with a local, on-prem LLM on a NAS appliance with GPU acceleration assisting threat prediction.',
  keywords: [
    'NOC modernization',
    'infrastructure monitoring platform',
    'EDR integration',
    'SIEM correlation',
    'firewall analytics platform',
    'MDM device management',
    'local LLM security',
    'on-prem AI threat detection',
    'NAS GPU appliance',
    'security baseline defense in depth',
  ],
  canonical: '/case-studies/ai-noc-unified-security-monitoring',
  openGraph: {
    title: 'Unified, AI-Assisted NOC Case Study',
    description:
      'Six disconnected monitoring tools, one real-time dashboard - with a local, on-prem LLM assisting threat prediction instead of sending data to the cloud.',
    type: 'article',
  },
});

export default function AiNocUnifiedSecurityMonitoring() {
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
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Network Monitoring
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              AI &amp; Automation
            </span>
            <span className="text-fg-muted">• October 12, 2026</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            Building a Unified, AI-Assisted NOC: From Six Disconnected Tools to One Real-Time Dashboard
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            Good monitoring tools scattered across an environment don&apos;t add up to good
            monitoring. This client had real capability — a firewall analytics platform, an
            infrastructure monitoring platform, SNMP polling across network gear, an EDR platform,
            an MDM platform, and a cloud identity and email suite were all deployed — but each one
            only saw its own slice, and nothing talked to anything else. We tied all six into a
            new, self-hosted Linux SIEM, arranged them into layered security baseline rings, and
            added a local LLM running on an on-premises NAS appliance with GPU acceleration to turn
            correlated alerts into plain-language, predictive threat summaries — entirely
            on-premises, with no security data ever leaving the building.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-1 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Client:</span>
                  <span>Multi-Site Corporate Environment</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Starting Point:</span>
                  <span>6 disconnected monitoring tools</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Correlation Layer:</span>
                  <span>Self-hosted, Linux SIEM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">AI Compute:</span>
                  <span>On-Prem NAS + GPU, on-prem LLM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Data Residency:</span>
                  <span>100% on-premises</span>
                </li>
              </ul>
            </div>

            <div className="bg-surface-1 p-6 rounded-lg border border-brand-green/30">
              <h2 className="text-xl font-semibold mb-4">Key Results</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Visibility:</span>
                  <span className="text-brand-green font-semibold">6 Consoles → 1 Dashboard</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Mean Time to Detect (MTTD):</span>
                  <span className="text-brand-green font-semibold">Hours → Minutes</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Mean Triage Time per Incident:</span>
                  <span className="text-brand-green font-semibold">~40 Min → ~10 Min</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Security Data Sent to Third-Party Cloud:</span>
                  <span className="text-brand-green font-semibold">Zero</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Monitoring Tools Replaced:</span>
                  <span className="text-brand-green font-semibold">Zero (All Integrated)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">How the Five Rings Feed One Dashboard</h2>
          <svg viewBox="0 0 1040 400" className="w-full min-w-[720px]" role="img" aria-label="Diagram: Perimeter (firewall analytics), Network (infrastructure monitoring and SNMP), Endpoint (EDR and MDM), and Identity (cloud identity and email suite) all feed into a central SIEM with a local LLM on an on-premises NAS and GPU, which outputs to a real-time NOC dashboard">
            {[
              { ring: 'Ring 1 — Perimeter', tools: 'Firewall Analytics', y: 20 },
              { ring: 'Ring 2 — Network', tools: 'Infra Monitoring + SNMP', y: 110 },
              { ring: 'Ring 3 — Endpoint', tools: 'EDR + MDM', y: 200 },
              { ring: 'Ring 4 — Identity', tools: 'Identity & Email Suite', y: 290 },
            ].map((layer) => (
              <g key={layer.ring}>
                <rect x={20} y={layer.y} width={260} height={80} rx={10} className="fill-surface-0" stroke="#3A81F7" strokeWidth={1.5} />
                <text x={150} y={layer.y + 32} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">{layer.ring}</text>
                <text x={150} y={layer.y + 54} textAnchor="middle" fontSize="12" fill="currentColor" opacity={0.75}>{layer.tools}</text>
                <path d={`M 282 ${layer.y + 40} L 420 ${layer.y + 40} L 420 200`} fill="none" stroke="#00A878" strokeWidth={2} />
              </g>
            ))}
            <path d="M 420 200 L 460 200" stroke="#00A878" strokeWidth={3} markerEnd="url(#arrow2)" />

            {/* Center: SIEM + Local LLM */}
            <circle cx={580} cy={200} r={110} className="fill-surface-0" stroke="#3A81F7" strokeWidth={2} />
            <text x={580} y={178} textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor">Ring 5</text>
            <text x={580} y={198} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">SIEM Correlation</text>
            <text x={580} y={218} textAnchor="middle" fontSize="12" fill="currentColor" opacity={0.75}>+ Local LLM</text>
            <text x={580} y={236} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.6}>On-Prem NAS + GPU</text>

            <path d="M 690 200 L 760 200" stroke="#00A878" strokeWidth={3} markerEnd="url(#arrow2)" />

            <rect x={770} y={150} width={250} height={100} rx={10} className="fill-surface-0" stroke="#00A878" strokeWidth={2} />
            <text x={895} y={190} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">Real-Time NOC</text>
            <text x={895} y={210} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">Dashboard</text>
            <text x={895} y={230} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.6}>Monitoring + Alerting</text>

            <defs>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#00A878" />
              </marker>
            </defs>
          </svg>
          <p className="text-center text-sm text-fg-muted mt-3">
            Nothing was replaced — all six source tools, grouped into four rings, keep doing their original job. The SIEM and local LLM in Ring 5 are the new correlation layer, running entirely on-premises.
          </p>
        </div>

        {/* Interactive ring explorer */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4 text-center">Explore Each Ring</h2>
          <RingExplorer />
        </div>

        {/* Mermaid data-flow diagram */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">Data Flow at a Glance</h2>
          <MermaidChart
            chart={DATA_FLOW_DIAGRAM}
            ariaLabel="Flowchart: Firewall Analytics, Infra Monitoring plus SNMP, EDR plus MDM, and Identity and Email Suite all feed into a self-hosted SIEM, which feeds an on-prem LLM running on a NAS with GPU, which feeds a real-time NOC dashboard"
          />
          <p className="text-center text-sm text-fg-muted mt-3">
            Same five rings as above, read left to right as a pipeline: every source feeds the SIEM, the SIEM feeds the local LLM, and the LLM feeds the dashboard analysts actually watch.
          </p>
        </div>

        {/* Visibility maturity scorecard */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">Visibility Maturity by Layer</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line text-left">
                <th className="py-2 pr-4 font-semibold">Ring</th>
                <th className="py-2 pr-4 font-semibold">Tool(s)</th>
                <th className="py-2 pr-4 font-semibold">Before: Standalone</th>
                <th className="py-2 font-semibold">After: Correlated</th>
              </tr>
            </thead>
            <tbody className="text-fg-muted">
              <tr className="border-b border-line/50">
                <td className="py-3 pr-4 font-medium text-fg">Perimeter</td>
                <td className="py-3 pr-4">Firewall Analytics</td>
                <td className="py-3 pr-4">Own console, reviewed on its own schedule</td>
                <td className="py-3">Feeds Ring 5 correlation in real time</td>
              </tr>
              <tr className="border-b border-line/50">
                <td className="py-3 pr-4 font-medium text-fg">Network</td>
                <td className="py-3 pr-4">Infra Monitoring + SNMP</td>
                <td className="py-3 pr-4">Health alerts isolated from security context</td>
                <td className="py-3">Correlated against identity &amp; endpoint signals</td>
              </tr>
              <tr className="border-b border-line/50">
                <td className="py-3 pr-4 font-medium text-fg">Endpoint</td>
                <td className="py-3 pr-4">EDR + MDM</td>
                <td className="py-3 pr-4">Detection and compliance tracked separately</td>
                <td className="py-3">Joined to the same incident timeline</td>
              </tr>
              <tr className="border-b border-line/50">
                <td className="py-3 pr-4 font-medium text-fg">Identity</td>
                <td className="py-3 pr-4">Identity &amp; Email Suite</td>
                <td className="py-3 pr-4">Sign-in risk reviewed only on explicit alert</td>
                <td className="py-3">Cross-checked against device &amp; network activity</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-fg">Correlation</td>
                <td className="py-3 pr-4">SIEM + On-Prem LLM</td>
                <td className="py-3 pr-4 text-fg-muted/60">— (didn&apos;t exist)</td>
                <td className="py-3">Produces one prioritized, plain-language incident</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-fg-muted mt-3">
            Illustrative visibility states, not a vendor-specific or per-client score.
          </p>
        </div>

        {/* Triage-time chart */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">Mean Triage Time per Incident</h2>
          <svg viewBox="0 0 560 120" className="w-full max-w-xl mx-auto" role="img" aria-label="Bar chart: mean triage time per incident dropped from about 40 minutes before correlation to about 10 minutes after correlation">
            <text x={0} y={22} fontSize="12" fill="currentColor" opacity={0.75}>Before (6 consoles)</text>
            <rect x={0} y={30} width={400} height={20} rx={4} className="fill-surface-0" stroke="#3A81F7" strokeWidth={1.5} />
            <text x={410} y={45} fontSize="13" fontWeight="700" fill="currentColor">~40 min</text>

            <text x={0} y={82} fontSize="12" fill="currentColor" opacity={0.75}>After (1 dashboard)</text>
            <rect x={0} y={90} width={100} height={20} rx={4} className="fill-surface-0" stroke="#00A878" strokeWidth={1.5} />
            <text x={110} y={105} fontSize="13" fontWeight="700" fill="#00A878">~10 min</text>
          </svg>
          <p className="text-center text-sm text-fg-muted mt-3">
            Same figures as the Key Results card above, shown to scale — correlation didn&apos;t just add a dashboard, it cut the time an analyst spends reconstructing what happened.
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Problem: Good Tools, No Single Picture</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              This is one of the most common gaps we find in mid-sized environments, and it rarely
              looks like a budget problem. The client already owned strong individual tools: an
              infrastructure monitoring platform for service and infrastructure health, SNMP
              polling across network gear, an EDR platform for endpoint detection and response, a
              cloud identity and email suite plus an MDM platform for device management, and a
              firewall analytics platform logging perimeter traffic. Each tool did its job well —
              in isolation.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The risk in that setup isn&apos;t any single blind spot; it&apos;s the seams between tools.
              An unusual cloud identity sign-in, an EDR detection on the same laptop an hour
              later, and a spike in outbound traffic on the firewall look like three unrelated
              low-priority events to three different consoles. Looked at together, in sequence,
              they tell the story of an account compromise moving from cloud identity to endpoint
              to network egress. Without correlation, that story never gets told until after
              something has already gone wrong.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Approach: Defense in Concentric Rings</h2>
            <p className="text-fg-muted leading-relaxed mb-6">
              Rather than replacing any of the existing tools, we built a security baseline around
              them, organized as layered rings — each ring covering a different part of the
              environment, all of them reporting into one correlation point.
            </p>
            <div className="space-y-6">
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Ring 1 — Perimeter: Firewall Analytics</h3>
                <p className="text-fg-muted leading-relaxed">
                  Centralized, retained firewall and traffic analytics covering what crosses the
                  network edge — the outermost ring, and the first place an external threat shows up.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Ring 2 — Network &amp; Infrastructure: Monitoring + SNMP</h3>
                <p className="text-fg-muted leading-relaxed">
                  The infrastructure monitoring platform watches service and infrastructure health;
                  SNMP polling covers switches, routers, and core hardware state continuously.
                  Together they answer &quot;is the
                  network itself behaving normally&quot; independent of what&apos;s happening at the edge
                  or on endpoints.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Ring 3 — Endpoint: EDR + MDM</h3>
                <p className="text-fg-muted leading-relaxed">
                  The EDR platform supplies endpoint detection and response telemetry; the MDM
                  platform supplies device compliance and configuration state. Together they cover both &quot;is this
                  device compromised&quot; and &quot;is this device configured the way policy says it
                  should be.&quot;
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Ring 4 — Identity &amp; Cloud: Email &amp; Identity Suite</h3>
                <p className="text-fg-muted leading-relaxed">
                  Sign-in logs, conditional access events, and mail-flow anomalies from the cloud
                  identity and email suite feed in as the identity layer — covering account-level risk that never touches a
                  physical device or network segment at all.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Ring 5 — Correlation: The Linux SIEM</h3>
                <p className="text-fg-muted leading-relaxed">
                  All four rings feed into a self-hosted, Linux-based SIEM, which is where the real
                  value shows up: an identity anomaly, an endpoint detection, and a traffic spike
                  that each look minor alone get correlated into a single, prioritized incident
                  when they involve the same user, device, or time window.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">The Local AI Layer: Prediction Without Sending Data to the Cloud</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Security logs are some of the most sensitive data an organization holds, so sending
              them to a third-party cloud AI service to get summarized was never on the table. Instead,
              we built the AI layer entirely on-premises: a NAS appliance with GPU acceleration runs a
              local large language model directly against the SIEM&apos;s correlated event stream — no
              log data, baseline profile, or alert content ever leaves the building.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              In practice, the local model does two things well. First, it turns a correlated,
              multi-source incident into a plain-language summary an analyst can read in seconds
              instead of reconstructing from six raw log sources. Second, it continuously compares
              current activity against the environment&apos;s established baseline — normal login
              geographies, normal traffic volumes, normal process behavior — and flags deviations
              as they emerge, rather than waiting for a static rule to trigger after the fact.
            </p>
            <p className="text-fg-muted leading-relaxed">
              We&apos;re explicit with clients about what this is and isn&apos;t: it is a prediction and
              triage assistant that makes a human analyst faster and catches drift a fixed rule set
              would miss. It is not an autonomous system making block/allow decisions on its own —
              every action it informs still goes through a person.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Result: One Dashboard, Live</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              The output is a real-time, dynamic NOC dashboard that reflects all five rings
              simultaneously — perimeter, network, endpoint, identity, and the AI-generated
              incident summaries sitting on top. What used to require checking six separate
              consoles, by hand, after something had already been noticed, now surfaces as one
              correlated, prioritized view the moment a pattern across data sources emerges.
            </p>
            <p className="text-fg-muted leading-relaxed">
              Just as important: every tool the client already owned is still doing its original
              job. Nothing was ripped out. What changed is that the seams between them — where risk
              used to hide — are now actively watched, in real time, by a system that runs entirely
              on hardware the client controls.
            </p>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Do Your Tools Talk to Each Other?</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              If your organization already runs endpoint protection, a firewall analytics tool,
              network monitoring, and a cloud identity and email suite — but each one lives in its own console and
              nobody is correlating them — you likely have the same seam risk this client had. The
              fix is rarely &quot;buy more tools.&quot; It&apos;s building the correlation and baseline layer
              that makes the tools you already own work together.
            </p>
            <p className="text-fg-muted leading-relaxed">
              We start with a monitoring and visibility assessment: what you have, what it already
              sees, where the seams are, and whether a correlation layer — with or without a local
              AI component — is the right next step for your environment and budget.
            </p>
          </section>

          {/* Related case studies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Related Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/building-in-house-private-ai-assistant"
                className="block bg-surface-1 p-6 rounded-lg hover:border-brand-blue border border-transparent transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">Building an In-House Private AI Assistant</h3>
                <p className="text-fg-muted text-sm">
                  The same on-prem-only philosophy behind Ring 5&apos;s local LLM, applied to a
                  general-purpose internal assistant.
                </p>
              </Link>
              <Link
                href="/case-studies/fortigate-active-active-asymmetric-traffic-troubleshooting"
                className="block bg-surface-1 p-6 rounded-lg hover:border-brand-blue border border-transparent transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Asymmetric Traffic in a FortiGate Active-Active Cluster
                </h3>
                <p className="text-fg-muted text-sm">
                  A field lesson on why perimeter telemetry (Ring 1) can look healthy while
                  something underneath is quietly wrong.
                </p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Running Monitoring Tools That Don&apos;t Talk to Each Other?</h2>
            <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
              Get a visibility assessment: an inventory of what your current tools actually cover,
              where the correlation gaps are, and a concrete plan for a unified, real-time view.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2968D8] transition-colors"
              >
                Request a Visibility Assessment
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
