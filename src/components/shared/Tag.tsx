interface TagProps {
  text: string;
  variant?: 'default' | 'accent';
}

export default function Tag({ text, variant = 'default' }: TagProps) {
  const base =
    'inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium transition-colors';
  const styles =
    variant === 'accent'
      ? 'bg-accent-soft text-accent'
      : 'bg-surface-2 text-ink-muted border border-line';
  return <span className={`${base} ${styles}`}>{text}</span>;
}
