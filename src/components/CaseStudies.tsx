import { ArrowUpRight } from 'lucide-react';
import type { CaseStudiesData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import SmartImage from './shared/SmartImage';
import Tag from './shared/Tag';

export default function CaseStudies({ data }: { data: CaseStudiesData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="case-studies" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.items.map((study, i) => (
            <a
              key={i}
              href={study.link || undefined}
              target={study.link ? '_blank' : undefined}
              rel={study.link ? 'noopener noreferrer' : undefined}
              className="reveal group card-surface overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              data-reveal-delay={i * 80}
            >
              {study.image && (
                <div className="relative h-44 overflow-hidden">
                  <SmartImage src={study.image} alt={study.title} className="h-full w-full" />
                </div>
              )}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-bold text-ink">{study.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{study.description}</p>
                {study.result && (
                  <div className="mt-4 rounded-lg bg-accent-soft px-4 py-3">
                    <p className="text-sm font-semibold text-accent">{study.result}</p>
                  </div>
                )}
                {study.tags && study.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {study.tags.map((tag, j) => (
                      <Tag key={j} text={tag} />
                    ))}
                  </div>
                )}
                {study.link && (
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
