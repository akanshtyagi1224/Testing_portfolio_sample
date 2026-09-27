import type { AboutData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function About({ data }: { data: AboutData }) {
  if (!data.enabled) return null;
  if (!data.paragraphs || data.paragraphs.length === 0) return null;

  return (
    <section id="about" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          <div className="md:col-span-2">
            {data.paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal text-lg leading-relaxed text-ink-muted first:mt-0 mt-5"
                data-reveal-delay={i * 80}
              >
                {p}
              </p>
            ))}
          </div>
          {data.highlights && data.highlights.length > 0 && (
            <div className="reveal" data-reveal-delay="120">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle">
                Focus areas
              </p>
              <ul className="flex flex-wrap gap-2">
                {data.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="rounded-full border border-line bg-surface-1 px-3 py-1.5 text-sm font-medium text-ink"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
