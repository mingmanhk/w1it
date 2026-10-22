'use client';

import { useEffect, useState } from 'react';
import { List, X } from 'lucide-react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

/**
 * Floating, self-positioning table of contents. Scans the page's main content
 * region for h2/h3 headings, assigns stable anchor ids if missing, and tracks
 * scroll position to highlight the active section. Renders as a sticky rail
 * on large screens and a collapsible button on mobile/tablet. Designed to be
 * dropped into any long-form page (case studies, guides) without changing
 * that page's layout.
 */
export default function TableOfContents({ selector = '#main-content' }: { selector?: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = document.querySelector(selector);
    if (!root) return;

    const nodes = Array.from(root.querySelectorAll('h2, h3')) as HTMLElement[];
    if (nodes.length < 3) return; // not worth a TOC for short pages

    const seen = new Set<string>();
    const found: Heading[] = nodes.map((node) => {
      let id = node.id;
      if (!id) {
        const base = slugify(node.textContent || 'section');
        id = base;
        let i = 2;
        while (seen.has(id)) {
          id = `${base}-${i++}`;
        }
        node.id = id;
      }
      seen.add(id);
      return {
        id,
        text: node.textContent || '',
        level: node.tagName === 'H2' ? 2 : 3,
      };
    });

    setHeadings(found);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-96px 0px -70% 0px' }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [selector]);

  if (headings.length < 3) return null;

  const handleJump = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop: sticky rail pinned to the right edge */}
      <nav
        aria-label="Table of contents"
        className="hidden xl:block fixed top-1/2 right-4 -translate-y-1/2 z-40 max-w-[220px] print:hidden"
      >
        <div className="bg-surface-0 border border-line rounded-lg shadow-lg p-4 max-h-[60vh] overflow-y-auto">
          <p className="text-xs font-bold uppercase tracking-wide text-fg-subtle mb-3">On this page</p>
          <ul className="space-y-2">
            {headings.map((h) => (
              <li key={h.id} className={h.level === 3 ? 'pl-3' : ''}>
                <button
                  onClick={() => handleJump(h.id)}
                  className={`text-left text-sm leading-snug hover:text-[#3A81F7] transition-colors ${
                    activeId === h.id ? 'text-[#3A81F7] font-semibold' : 'text-fg-muted'
                  }`}
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile/tablet: floating toggle + slide-up panel */}
      <div className="xl:hidden print:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open table of contents"
          className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full bg-[#3A81F7] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        >
          <List className="w-5 h-5" />
        </button>
        {mobileOpen && (
          <div className="fixed inset-0 z-50 flex items-end">
            <button
              aria-label="Close table of contents"
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative w-full bg-surface-0 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-bold uppercase tracking-wide text-fg-subtle">On this page</p>
                <button onClick={() => setMobileOpen(false)} aria-label="Close">
                  <X className="w-5 h-5 text-fg-muted" />
                </button>
              </div>
              <ul className="space-y-3">
                {headings.map((h) => (
                  <li key={h.id} className={h.level === 3 ? 'pl-4' : ''}>
                    <button
                      onClick={() => handleJump(h.id)}
                      className={`text-left text-base ${
                        activeId === h.id ? 'text-[#3A81F7] font-semibold' : 'text-fg-muted'
                      }`}
                    >
                      {h.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
