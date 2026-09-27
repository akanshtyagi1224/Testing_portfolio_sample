import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import type { NavigationData, PersonData, ThemeData } from '@/types';
import { useScrolled } from '@/hooks/useScroll';

interface NavbarProps {
  data: NavigationData;
  person: PersonData;
  theme: ThemeData;
  currentTheme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ data, person, theme, currentTheme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(24);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!data.enabled) return null;

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-surface-0/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main">
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 font-bold text-ink hover:opacity-80 transition-opacity"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-accent-fg">
            {person.firstName?.charAt(0) || person.name?.charAt(0) || ''}
          </span>
          <span className="hidden sm:inline">{person.name}</span>
        </a>

        {/* Desktop nav */}
        {data.items && data.items.length > 0 && (
          <div className="hidden items-center gap-1 md:flex">
            {data.items.map((item, i) => (
              <a
                key={i}
                href={item.target}
                onClick={(e) => handleNavClick(e, item.target)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {theme.darkMode && (
            <button
              onClick={onToggleTheme}
              aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-1 text-ink-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
            >
              {currentTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-1 text-ink-muted transition-colors hover:text-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div
            className="border-t border-line bg-surface-0 px-5 py-4 sm:px-6 animate-slide-down"
          >
            <div className="flex flex-col gap-1">
              {data.items?.map((item, i) => (
                <a
                  key={i}
                  href={item.target}
                  onClick={(e) => handleNavClick(e, item.target)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
