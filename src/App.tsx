import { useEffect, useMemo } from 'react';
import type { PortfolioConfig } from './types';
import data from './data.json';
import { useTheme } from './hooks/useTheme';
import { useScrollReveal } from './hooks/useScrollReveal';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Products from './components/Products';
import Services from './components/Services';
import Writing from './components/Writing';
import Achievements from './components/Achievements';
import Investment from './components/Investment';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import SocialProof from './components/SocialProof';
import Newsletter from './components/Newsletter';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

const config = data as PortfolioConfig;

/** Apply theme CSS variables from data.json */
function useApplyTheme(theme: PortfolioConfig['theme']) {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', theme.accentColor);
    root.style.setProperty('--accent-fg', getContrastColor(theme.accentColor));
    root.style.setProperty('--accent-soft', hexToRgba(theme.accentColor, 0.08));
    root.style.setProperty('--accent-ring', hexToRgba(theme.accentColor, 0.4));
    if (theme.accentColorSecondary) {
      root.style.setProperty('--accent-secondary', theme.accentColorSecondary);
    }
    if (theme.font) {
      root.style.setProperty('--font', theme.font);
    }
    const radiusMap = { none: '0px', medium: '0.5rem', large: '1rem', full: '999px' };
    root.style.setProperty('--radius', radiusMap[theme.borderRadius] || '1rem');
  }, [theme]);
}

/** Apply SEO meta tags from data.json */
function useApplySEO(site: PortfolioConfig['site'], person: PortfolioConfig['person']) {
  useEffect(() => {
    document.title = site.title || person.name;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', site.description);
    setMeta('canonical', site.url);

    // Open Graph
    setMeta('og:title', site.title, 'property');
    setMeta('og:description', site.description, 'property');
    setMeta('og:url', site.url, 'property');
    setMeta('og:type', 'website', 'property');
    if (site.ogImage) setMeta('og:image', site.ogImage, 'property');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', site.title);
    setMeta('twitter:description', site.description);
    if (site.ogImage) setMeta('twitter:image', site.ogImage);

    // Robots
    setMeta('robots', site.noIndex ? 'noindex, nofollow' : 'index, follow');

    // Language
    if (site.language) document.documentElement.lang = site.language;

    // Favicon
    if (site.favicon) {
      let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = site.favicon;
    }
  }, [site, person]);
}

function hexToRgba(hex: string, alpha: number): string {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getContrastColor(hex: string): string {
  const cleaned = hex.replace('#', '');
  const r = parseInt(cleaned.substring(0, 2), 16);
  const g = parseInt(cleaned.substring(2, 4), 16);
  const b = parseInt(cleaned.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#18181b' : '#ffffff';
}

/** Section registry — order determines page flow */
const sectionRegistry: { key: keyof PortfolioConfig; component: React.ComponentType<{ data: any }> }[] = [
  { key: 'about', component: About },
  { key: 'stats', component: Stats },
  { key: 'experience', component: Experience },
  { key: 'projects', component: Projects },
  { key: 'products', component: Products },
  { key: 'services', component: Services },
  { key: 'writing', component: Writing },
  { key: 'achievements', component: Achievements },
  { key: 'investment', component: Investment },
  { key: 'caseStudies', component: CaseStudies },
  { key: 'skills', component: Skills },
  { key: 'education', component: Education },
  { key: 'testimonials', component: Testimonials },
  { key: 'socialProof', component: SocialProof },
  { key: 'newsletter', component: Newsletter },
  { key: 'faq', component: FAQ },
];

function App() {
  const { theme: currentTheme, toggleTheme } = useTheme(
    config.theme.defaultMode,
    config.theme.darkMode
  );

  useApplyTheme(config.theme);
  useApplySEO(config.site, config.person);
  useScrollReveal(config.features.scrollReveal);

  const sections = useMemo(
    () =>
      sectionRegistry
        .filter(({ key }) => {
          const section = config[key] as { enabled?: boolean };
          return section?.enabled;
        })
        .map(({ key, component: Component }) => ({
          key,
          Component,
        })),
    []
  );

  return (
    <div className="min-h-screen bg-surface-0 text-ink">
      <Navbar
        data={config.navigation}
        person={config.person}
        theme={config.theme}
        currentTheme={currentTheme}
        onToggleTheme={toggleTheme}
      />

      {config.features.showScrollProgress && <ScrollProgress />}

      <main>
        <Hero data={config.hero} person={config.person} socials={config.socials} />

        {sections.map(({ key, Component }) => (
          <Component key={key} data={config[key]} />
        ))}

        <Contact data={config.contact} socials={config.socials} />
      </main>

      <Footer data={config.footer} socials={config.socials} person={config.person} />

      {config.features.backToTop && <BackToTop />}
    </div>
  );
}

export default App;
