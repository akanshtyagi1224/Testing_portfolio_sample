import type { StatsData } from '@/types';

export default function Stats({ data }: { data: StatsData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section className="px-5 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="container-content">
        <dl className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {data.items.map((stat, i) => (
            <div
              key={i}
              className="reveal card-surface flex flex-col items-start gap-1 p-5 sm:p-6"
              data-reveal-delay={i * 70}
            >
              <dt className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-sm text-ink-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
