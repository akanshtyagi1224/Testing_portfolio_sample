import { ArrowUpRight, Calendar } from 'lucide-react';
import type { WritingData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import SmartImage from './shared/SmartImage';

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function Writing({ data }: { data: WritingData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="writing" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.items.map((article, i) => (
            <a
              key={i}
              href={article.url || undefined}
              target={article.url ? '_blank' : undefined}
              rel={article.url ? 'noopener noreferrer' : undefined}
              className="reveal group card-surface overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              data-reveal-delay={i * 80}
            >
              <div className="flex flex-col sm:flex-row">
                {article.image && (
                  <div className="relative h-40 overflow-hidden sm:h-auto sm:w-32 shrink-0">
                    <SmartImage src={article.image} alt={article.title} className="h-full w-full" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  {article.publication && (
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {article.publication}
                    </p>
                  )}
                  <h3 className="mt-1 text-base font-bold leading-snug text-ink group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    {article.date && (
                      <span className="inline-flex items-center gap-1 text-xs text-ink-subtle">
                        <Calendar className="h-3 w-3" />
                        {formatDate(article.date)}
                      </span>
                    )}
                    {article.url && (
                      <ArrowUpRight className="h-4 w-4 text-ink-subtle transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
