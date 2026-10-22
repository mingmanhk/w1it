'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * Small copy-to-clipboard button for code snippets, commands, or config blocks.
 * Drop into any <pre>/<code> wrapper: <CopyButton text={rawSnippetText} />.
 */
export default function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable (e.g. insecure context); fail quietly.
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied' : label}
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-line bg-surface-0 text-fg-muted hover:text-fg hover:border-[#3A81F7] transition-colors print:hidden"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-[#00A878]" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? 'Copied' : label}
    </button>
  );
}
