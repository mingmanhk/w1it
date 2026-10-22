import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type RelatedItem = {
  slug: string;
  title: string;
  blurb: string;
};

/**
 * Standardized cross-reference block linking to other case studies on the
 * site. Use at the bottom of every case study page so readers can keep
 * reading related work instead of dead-ending on one article.
 */
export default function RelatedCaseStudies({ items }: { items: RelatedItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4 text-fg">Related Case Studies</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/case-studies/${item.slug}`}
            className="group block bg-surface-1 hover:bg-surface-2 border border-line rounded-lg p-5 transition-colors"
          >
            <p className="font-semibold text-fg mb-2 leading-snug">{item.title}</p>
            <p className="text-sm text-fg-muted mb-3 leading-relaxed">{item.blurb}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#3A81F7] group-hover:gap-2 transition-all">
              Read case study <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
