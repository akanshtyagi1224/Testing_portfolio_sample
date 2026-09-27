import { Briefcase, ExternalLink, MapPin } from 'lucide-react';
import type { ExperienceData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function Experience({ data }: { data: ExperienceData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="experience" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="mt-12">
          <ol className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" aria-hidden />

            {data.items.map((item, i) => (
              <li
                key={i}
                className="reveal relative pl-10 pb-10 last:pb-0"
                data-reveal-delay={i * 80}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className={`h-3 w-3 rounded-full border-2 border-surface-0 ${item.current ? 'bg-accent' : 'bg-ink-subtle'}`} />
                </div>

                <div className="group">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-ink">{item.role}</h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          Current
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-ink-subtle">{item.period}</span>
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-accent hover:opacity-80"
                      >
                        {item.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">{item.company}</span>
                    )}
                    {item.location && (
                      <span className="inline-flex items-center gap-1 text-ink-subtle">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
