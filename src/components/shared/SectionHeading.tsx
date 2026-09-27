interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
