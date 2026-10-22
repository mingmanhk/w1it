import CopyButton from '@/components/CopyButton';

/**
 * Preformatted code/command block with a built-in copy button. Use for any
 * CLI command, config snippet, or code sample in case studies, docs, or
 * knowledge-base articles.
 */
export default function CodeBlock({ code, language }: { code: string; language?: string }) {
  return (
    <div className="relative bg-[#0b1120] rounded-lg overflow-hidden my-4">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-white/50 font-mono">{language || 'code'}</span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 overflow-x-auto text-sm text-white/90 font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
