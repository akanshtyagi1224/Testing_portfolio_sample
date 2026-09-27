import { TrendingUp, ExternalLink } from 'lucide-react';
import type { InvestmentData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function Investment({ data }: { data: InvestmentData }) {
  if (!data.enabled) return null;

  const hasThesis = data.thesis && data.thesis.length > 0;
  const hasPortfolio = data.portfolio && data.portfolio.length > 0;
  if (!data.headline && !data.description && !hasThesis && !hasPortfolio) return null;

  return (
    <section id="investment" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading
            title={data.sectionTitle}
            description={data.description}
          />
        </div>

        {data.headline && (
          <p className="reveal mt-6 text-xl font-semibold text-ink">{data.headline}</p>
        )}

        {hasThesis && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.thesis.map((item, i) => (
              <div key={i} className="reveal card-surface p-6" data-reveal-delay={i * 70}>
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
              </div>
            ))}
          </div>
        )}

        {hasPortfolio && (
          <div className="mt-12">
            <p className="reveal mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle">
              Portfolio
            </p>
            <div className="reveal grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.portfolio.map((company, i) => (
                <div key={i} className="card-surface flex items-center gap-3 p-4">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="h-10 w-10 rounded-lg object-cover" />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-2 text-sm font-bold text-ink">
                      {company.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate font-semibold text-ink">{company.name}</h4>
                    {company.description && (
                      <p className="truncate text-sm text-ink-muted">{company.description}</p>
                    )}
                  </div>
                  {company.url && (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-subtle hover:text-accent"
                      aria-label={`Visit ${company.name}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
