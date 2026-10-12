import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Building an In-House Private AI Assistant',
  description:
    'Why we built our own on-prem AI assistant instead of using a commercial cloud tool for internal work: two open-weight models, 53 skills, and zero data ever sent off our own hardware.',
  keywords: [
    'on-prem AI assistant',
    'local LLM',
    'private AI for IT teams',
    'data confidentiality AI',
    'self-hosted AI',
    'open-weight models',
    'GPU server AI',
    'internal tooling',
    'no cloud AI',
  ],
  canonical: '/case-studies/building-in-house-private-ai-assistant',
  openGraph: {
    title: 'Building an In-House Private AI Assistant',
    description:
      'Two open-weight models, 53 skills, zero data sent to the cloud - how we built our own AI assistant for the internal work we can’t run through a third party.',
    type: 'article',
  },
});

export default function BuildingInHousePrivateAiAssistant() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb is rendered once, sitewide, by case-studies/layout.tsx */}

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Internal Tooling
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Security
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              AI &amp; Automation
            </span>
            <span className="text-fg-muted">• October 12, 2026</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">
            Building an In-House Private AI Assistant: Why We Run Our Own Models Instead of the Cloud
          </h1>

          <p className="text-xl text-fg-muted mb-8">
            We handle the same category of sensitive data our clients trust us with every day —
            credentials, network diagrams, configuration exports, incident notes. None of that
            belongs in a prompt sent to a commercial cloud AI service. So rather than avoid AI
            assistance for that work entirely, we built our own: a ChatGPT-style assistant running
            two open-weight models and 53 purpose-built skills, entirely on a GPU server we own.
            Nothing we type into it ever leaves our own hardware.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-1 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Project:</span>
                  <span>Internal AI Assistant (W1IT)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Starting Point:</span>
                  <span>No safe way to use AI on sensitive data</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Compute:</span>
                  <span>On-Prem GPU Server (96GB-class)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Models:</span>
                  <span>2 open-weight, co-resident</span>
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
                  <span className="font-medium">Skills Linked:</span>
                  <span className="text-brand-green font-semibold">53</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Data Sent to Third-Party Cloud:</span>
                  <span className="text-brand-green font-semibold">Zero</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Recurring Per-Seat AI Subscription:</span>
                  <span className="text-brand-green font-semibold">$0</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Models Co-Resident on One GPU:</span>
                  <span className="text-brand-green font-semibold">2</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Vendor Lock-In:</span>
                  <span className="text-brand-green font-semibold">None</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture diagram */}
        <div className="mb-12 bg-surface-1 rounded-lg p-6 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4 text-center">One GPU Server, Four Decoupled Layers</h2>
          <svg viewBox="0 0 1040 420" className="w-full min-w-[720px]" role="img" aria-label="Diagram: browser, CLI tool, and internal wiki clients connect to a service layer (Open WebUI and a LiteLLM bridge), which calls a GPU inference engine running two open-weight models, which loads from local on-prem storage">
            {[
              { label: 'Browser (staff)', sub: 'internal network only', y: 20 },
              { label: 'CLI Coding Tool', sub: 'agentic coding', y: 110 },
              { label: 'Internal Wiki', sub: 'self-hosted · MCP', y: 200 },
            ].map((client) => (
              <g key={client.label}>
                <rect x={20} y={client.y} width={240} height={75} rx={10} className="fill-surface-0" stroke="#3A81F7" strokeWidth={1.5} />
                <text x={140} y={client.y + 32} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">{client.label}</text>
                <text x={140} y={client.y + 52} textAnchor="middle" fontSize="11.5" fill="currentColor" opacity={0.7}>{client.sub}</text>
                <path d={`M 262 ${client.y + 37} L 400 ${client.y + 37} L 400 155`} fill="none" stroke="#00A878" strokeWidth={2} />
              </g>
            ))}
            <path d="M 400 155 L 440 155" stroke="#00A878" strokeWidth={3} markerEnd="url(#arrow3)" />

            <rect x={450} y={95} width={230} height={120} rx={10} className="fill-surface-0" stroke="#3A81F7" strokeWidth={2} />
            <text x={565} y={125} textAnchor="middle" fontSize="13" fontWeight="700" fill="currentColor">Open WebUI :3000</text>
            <text x={565} y={145} textAnchor="middle" fontSize="11.5" fill="currentColor" opacity={0.75}>Assistant portal</text>
            <text x={565} y={163} textAnchor="middle" fontSize="11" fill="currentColor" opacity={0.6}>53 skills · vision · files</text>
            <text x={565} y={190} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="currentColor">LiteLLM Bridge :4000</text>
            <text x={565} y={206} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.6}>CLI tool → local model</text>

            <path d="M 680 155 L 730 155" stroke="#00A878" strokeWidth={3} markerEnd="url(#arrow3)" />

            <rect x={740} y={70} width={280} height={170} rx={12} className="fill-surface-0" stroke="#b45309" strokeWidth={2} />
            <text x={880} y={98} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#b45309">vLLM Engine · GPU · FP8</text>
            <rect x={755} y={110} width={250} height={60} rx={8} fill="none" stroke="#b45309" strokeWidth={1.3} />
            <text x={880} y={132} textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">Vision + Reasoning Model</text>
            <text x={880} y={150} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.7}>65K context · GPU 0.50</text>
            <rect x={755} y={178} width={250} height={55} rx={8} fill="none" stroke="#b45309" strokeWidth={1.3} />
            <text x={880} y={200} textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor">Coding Model</text>
            <text x={880} y={217} textAnchor="middle" fontSize="10.5" fill="currentColor" opacity={0.7}>98K context · GPU 0.45</text>

            <rect x={450} y={290} width={570} height={55} rx={10} className="fill-surface-0" stroke="#5b6473" strokeWidth={1.4} />
            <text x={735} y={322} textAnchor="middle" fontSize="12" fill="currentColor" opacity={0.75}>On-prem ZFS storage · local model cache · nothing synced off-box</text>
            <path d="M 880 240 L 880 290" stroke="#8a94a6" strokeWidth={2} markerEnd="url(#arrow3)" />

            <defs>
              <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#00A878" />
              </marker>
            </defs>
          </svg>
          <p className="text-center text-sm text-fg-muted mt-3">
            Clients talk to the service layer; the service layer calls the GPU engine; the engine
            loads models from local storage. Every hop stays inside hardware we control.
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold mb-4">The Problem: We Couldn&apos;t Use AI on the Work That Needed It Most</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              Modern AI assistants are genuinely useful for IT work — summarizing logs, drafting
              documentation, reasoning through an architecture. The problem is where the data goes.
              Commercial AI tools send prompts and attachments to a third party by design, and a
              meaningful share of what we work with day to day — client network details,
              credentials, incident timelines, internal documentation — simply isn&apos;t something we
              can paste into a public chatbot, no matter how good the model is.
            </p>
            <p className="text-fg-muted leading-relaxed">
              The result, before this project, was an awkward split: use commercial AI tools for
              generic, non-sensitive tasks, and fall back to doing everything else by hand. That
              gap was exactly the kind of thing we&apos;d flag for a client — good capability sitting
              unused because of a data-handling concern nobody had actually solved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Approach: Run the Models Ourselves</h2>
            <p className="text-fg-muted leading-relaxed mb-6">
              Instead of waiting for a commercial vendor to offer a private-enough tier, we built
              the stack ourselves on a single GPU-equipped on-prem server, split into four layers
              so each piece can be swapped independently.
            </p>
            <div className="space-y-6">
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Engine: vLLM on a Dedicated GPU</h3>
                <p className="text-fg-muted leading-relaxed">
                  vLLM serves two open-weight models side by side on one 96GB-class GPU — FP8
                  weights and FP8 KV cache keep both resident at once, with a concurrency cap to
                  stay responsive under load.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Service: Open WebUI + a LiteLLM Bridge</h3>
                <p className="text-fg-muted leading-relaxed">
                  Open WebUI is the portal staff actually use — vision, file upload, web search,
                  and 53 skills layered onto an assistant preset. A LiteLLM bridge translates
                  requests so our CLI coding tool can run against the local model instead of a
                  cloud endpoint.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Apps: Browser, CLI, and an Internal Wiki</h3>
                <p className="text-fg-muted leading-relaxed">
                  The same assistant is reachable from a browser for day-to-day questions, from a
                  CLI coding tool for development work, and from a self-hosted internal wiki over
                  MCP — one backend, several front doors.
                </p>
              </div>
              <div className="bg-surface-1 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Platform: Storage, Auto-Update, Version Control</h3>
                <p className="text-fg-muted leading-relaxed">
                  ZFS-backed local storage holds the model cache; Watchtower keeps the UI
                  container current; the whole stack — compose file, README, and architecture
                  diagram — lives in a self-hosted Git repo so the setup is reproducible.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-surface-1 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why This, Instead of Just Using a Commercial Tool</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              We weren&apos;t trying to build a better chatbot than what&apos;s already commercially
              available — we were solving a narrower, more specific problem: giving ourselves
              somewhere to use AI on data that a third-party service was never going to be an
              acceptable destination for.
            </p>
            <p className="text-fg-muted leading-relaxed mb-4">
              Because the stack is fully decoupled into layers, upgrading the model later — moving
              to a stronger vision model and a larger context window — took a single container
              recreate, with no changes to the UI, the skills, or anything downstream. That
              modularity turned out to matter more in practice than any single model choice.
            </p>
            <p className="text-fg-muted leading-relaxed">
              It also removed a recurring cost line entirely: one hardware purchase instead of a
              per-seat subscription that scales with headcount, with no vendor able to change
              pricing, retire a feature, or shift a data-retention policy out from under us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">The Result</h2>
            <p className="text-fg-muted leading-relaxed mb-4">
              We now have an assistant with the same general capability as a commercial AI
              product — multimodal, long-context, 53 domain skills — that we can point at our own
              box and say: that&apos;s where this data lives, and it doesn&apos;t go anywhere else.
              Nothing typed into it, uploaded to it, or generated by it is ever sent to a
              third-party API.
            </p>
            <p className="text-fg-muted leading-relaxed">
              It&apos;s also the clearest internal proof we have that this architecture works — the
              same pattern (local engine, decoupled service layer, domain-specific skills) is what
              we reach for whenever a client has data that genuinely can&apos;t leave their own
              network either.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Have Data That Can&apos;t Go Through a Commercial AI Tool?</h2>
            <p className="text-fg-muted mb-6 max-w-2xl mx-auto">
              If regulated records, credentials, or confidential documents are keeping your team
              from using AI assistance at all, a private, on-prem setup is usually more
              achievable than it sounds. We can assess whether it&apos;s the right fit for your
              environment and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2968D8] transition-colors"
              >
                Talk Through Your Options
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
