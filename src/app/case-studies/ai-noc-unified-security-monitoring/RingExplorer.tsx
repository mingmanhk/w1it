'use client';

import { useState } from 'react';

const RINGS = [
  {
    id: 'perimeter',
    label: 'Ring 1 — Perimeter',
    tool: 'Firewall Analytics',
    description:
      'Centralized, retained firewall and traffic analytics covering what crosses the network edge — the outermost ring, and the first place an external threat shows up.',
  },
  {
    id: 'network',
    label: 'Ring 2 — Network',
    tool: 'Infra Monitoring + SNMP',
    description:
      'Infrastructure monitoring watches service and device health; SNMP polling covers switches, routers, and core hardware state continuously — together answering whether the network itself is behaving normally, independent of the edge or endpoints.',
  },
  {
    id: 'endpoint',
    label: 'Ring 3 — Endpoint',
    tool: 'EDR + MDM',
    description:
      'EDR telemetry plus MDM compliance state together cover both "is this device compromised" and "is this device configured the way policy says it should be."',
  },
  {
    id: 'identity',
    label: 'Ring 4 — Identity',
    tool: 'Identity &amp; Email Suite',
    description:
      'Sign-in logs, conditional access events, and mail-flow anomalies feed in as the identity layer — covering account-level risk that never touches a physical device or network segment at all.',
  },
  {
    id: 'correlation',
    label: 'Ring 5 — Correlation',
    tool: 'SIEM + On-Prem LLM',
    description:
      'All four rings feed into a self-hosted SIEM. A local LLM running on an on-prem NAS with GPU acceleration turns correlated, multi-source events into plain-language, prioritized incidents — entirely on hardware the client controls.',
  },
];

export default function RingExplorer() {
  const [activeId, setActiveId] = useState(RINGS[4].id);
  const active = RINGS.find((r) => r.id === activeId) ?? RINGS[0];

  return (
    <div className="bg-surface-1 rounded-lg p-6">
      <div
        className="flex flex-wrap gap-2 mb-6"
        role="tablist"
        aria-label="Security baseline rings"
      >
        {RINGS.map((r) => (
          <button
            key={r.id}
            type="button"
            role="tab"
            aria-selected={activeId === r.id}
            onClick={() => setActiveId(r.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              activeId === r.id
                ? 'bg-brand-blue text-white border-brand-blue'
                : 'border-line text-fg-muted hover:border-brand-blue hover:text-fg'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>
      <div key={active.id}>
        <h3 className="text-lg font-semibold mb-2">
          {active.label}: {active.tool}
        </h3>
        <p className="text-fg-muted leading-relaxed">{active.description}</p>
      </div>
    </div>
  );
}
