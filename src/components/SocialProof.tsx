import type { SocialProofData } from '@/types';

export default function SocialProof({ data }: { data: SocialProofData }) {
  if (!data.enabled || !data.logos || data.logos.length === 0) return null;

  return (
    <section className="px-5 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="container-content">
        {data.title && (
          <p className="reveal mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-subtle">
            {data.title}
          </p>
        )}
        <div className="reveal flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {data.logos.map((logo, i) => (
            <div key={i} className="flex items-center">
              {logo.image ? (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-50 dark:hover:opacity-100"
                />
              ) : (
                <span
                  className="text-lg font-bold text-ink-subtle opacity-60 transition-opacity hover:opacity-100"
                >
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
