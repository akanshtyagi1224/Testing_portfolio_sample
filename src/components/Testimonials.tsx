import { Quote, ExternalLink } from 'lucide-react';
import type { TestimonialsData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import SmartImage from './shared/SmartImage';

export default function Testimonials({ data }: { data: TestimonialsData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="testimonials" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {data.items.map((item, i) => (
            <figure
              key={i}
              className="reveal card-surface flex flex-col p-6 sm:p-8"
              data-reveal-delay={i * 80}
            >
              <Quote className="h-7 w-7 text-accent opacity-50" />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink sm:text-lg">
                "{item.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {item.image ? (
                  <SmartImage
                    src={item.image}
                    alt={item.author}
                    className="h-11 w-11 rounded-full"
                    fallbackClassName="rounded-full"
                  />
                ) : (
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-sm font-bold text-ink">
                    {item.author.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-1.5">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-ink hover:text-accent"
                      >
                        {item.author}
                      </a>
                    ) : (
                      <span className="font-semibold text-ink">{item.author}</span>
                    )}
                  </div>
                  <p className="text-sm text-ink-muted">
                    {item.role}{item.company ? `, ${item.company}` : ''}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
