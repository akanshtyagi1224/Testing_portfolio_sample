import { ArrowUp } from 'lucide-react';
import { useScrolled } from '@/hooks/useScroll';

export default function BackToTop() {
  const scrolled = useScrolled(600);
  if (!scrolled) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-1 text-ink-muted shadow-lg transition-all duration-300 hover:border-accent hover:text-accent hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring animate-fade-in"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
