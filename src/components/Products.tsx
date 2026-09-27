import { ArrowUpRight } from 'lucide-react';
import type { ProductsData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import SmartImage from './shared/SmartImage';
import Tag from './shared/Tag';

export default function Products({ data }: { data: ProductsData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="products" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} description={data.description} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((product, i) => (
            <a
              key={i}
              href={product.url || undefined}
              target={product.url ? '_blank' : undefined}
              rel={product.url ? 'noopener noreferrer' : undefined}
              className="reveal group card-surface overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              data-reveal-delay={i * 80}
            >
              {product.image && (
                <div className="relative h-40 overflow-hidden">
                  <SmartImage src={product.image} alt={product.name} className="h-full w-full" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                  {product.status && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {product.status}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{product.description}</p>
                {product.tags && product.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.tags.map((tag, j) => (
                      <Tag key={j} text={tag} />
                    ))}
                  </div>
                )}
                {product.url && (
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Visit
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
