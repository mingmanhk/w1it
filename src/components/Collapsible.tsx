'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Accordion-style expand/collapse section. Use for FAQ-style content or long
 * technical detail that most readers will skim past — collapsed by default
 * keeps the page scannable, expand-on-click reveals the detail.
 */
export default function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-line rounded-lg overflow-hidden print:border-none">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-surface-1 hover:bg-surface-2 transition-colors print:hidden"
      >
        <span className="font-semibold text-fg">{title}</span>
        <ChevronDown className={`w-5 h-5 text-fg-muted shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`${open ? 'block' : 'hidden'} print:block px-5 py-5 bg-surface-0`}>
        {children}
      </div>
    </div>
  );
}
