import { ExternalLink } from 'lucide-react';
import type { EducationData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function Education({ data }: { data: EducationData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="education" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="mt-12 space-y-4">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="reveal card-surface flex flex-col gap-3 p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between"
              data-reveal-delay={i * 70}
            >
              <div className="flex items-start gap-4">
                {item.logo ? (
                  <img src={item.logo} alt={item.institution} className="h-12 w-12 rounded-lg object-cover" />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-2 text-lg font-bold text-ink">
                    {item.institution.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-ink">{item.degree}</h3>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-accent hover:opacity-80"
                      >
                        {item.institution}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">{item.institution}</span>
                    )}
                    {item.period && <span className="text-ink-subtle">· {item.period}</span>}
                  </div>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
