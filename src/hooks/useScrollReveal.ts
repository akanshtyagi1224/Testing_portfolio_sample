import { useEffect } from 'react';

/**
 * Observes all `.reveal` elements and adds `.reveal-visible` when they enter
 * the viewport. Respects prefers-reduced-motion (CSS handles the no-op).
 * Uses a single IntersectionObserver for efficiency.
 */
export function useScrollReveal(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.reveal-visible)'));
    if (els.length === 0) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      els.forEach((el) => el.classList.add('reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('reveal-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);
}
