'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { searchIndex, type SearchEntry } from '@/lib/searchIndex';

function scoreEntry(entry: SearchEntry, query: string): number {
  const q = query.toLowerCase();
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  if (title === q) return 100;
  if (title.startsWith(q)) return 80;
  if (title.includes(q)) return 60;
  if (desc.includes(q)) return 30;
  // loose word-overlap fallback
  const words = q.split(/\s+/).filter(Boolean);
  const hits = words.filter((w) => title.includes(w) || desc.includes(w)).length;
  return hits > 0 ? hits * 5 : 0;
}

/**
 * Global site search. Mounted once in the root layout; opens via the
 * header's search button or Cmd/Ctrl+K, and listens for a window
 * 'open-site-search' custom event so any component can trigger it without
 * prop-drilling.
 */
export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('open-site-search', openHandler);

    const keyHandler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('open-site-search', openHandler);
      window.removeEventListener('keydown', keyHandler);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchIndex
      .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.entry);
  }, [query]);

  function go(entry: SearchEntry) {
    setOpen(false);
    router.push(entry.url);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[activeIndex]) {
      e.preventDefault();
      go(results[activeIndex]);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-start justify-center pt-24 px-4 print:hidden">
      <button aria-label="Close search" className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl bg-surface-0 rounded-xl shadow-2xl border border-line overflow-hidden">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
          <Search className="w-5 h-5 text-fg-subtle shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search case studies, services, solutions…"
            className="flex-1 bg-transparent outline-none text-base text-fg placeholder:text-fg-subtle"
          />
          <button onClick={() => setOpen(false)} aria-label="Close search">
            <X className="w-5 h-5 text-fg-subtle" />
          </button>
        </div>
        {query.trim() && (
          <ul className="max-h-[60vh] overflow-y-auto py-2">
            {results.length === 0 && (
              <li className="px-4 py-6 text-sm text-fg-muted text-center">No results for &ldquo;{query}&rdquo;.</li>
            )}
            {results.map((entry, i) => (
              <li key={entry.url}>
                <button
                  onClick={() => go(entry)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`w-full text-left px-4 py-3 flex flex-col gap-0.5 ${
                    i === activeIndex ? 'bg-surface-1' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-fg">{entry.title}</span>
                    <span className="text-[10px] uppercase tracking-wide text-fg-subtle border border-line rounded px-1.5 py-0.5">
                      {entry.category}
                    </span>
                  </span>
                  <span className="text-xs text-fg-muted line-clamp-1">{entry.description}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
