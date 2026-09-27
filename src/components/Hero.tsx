import { ArrowRight, MapPin } from 'lucide-react';
import type { HeroData, PersonData, SocialsData } from '@/types';
import SmartImage from './shared/SmartImage';
import SocialLinks from './shared/SocialLinks';

interface HeroProps {
  data: HeroData;
  person: PersonData;
  socials: SocialsData;
}

export default function Hero({ data, person, socials }: HeroProps) {
  if (!data.enabled) return null;

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pt-40 md:pb-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
      </div>

      <div className="container-content">
        <div className={`flex flex-col items-center gap-12 lg:gap-16 ${data.showImage ? 'lg:flex-row lg:items-center lg:justify-between' : ''}`}>
          {/* Text */}
          <div className="max-w-2xl text-center lg:text-left">
            {data.eyebrow && (
              <p className="mb-5 animate-fade-in text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {data.eyebrow}
              </p>
            )}

            <h1 className="animate-fade-up text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              {data.headline}
            </h1>

            {data.description && (
              <p className="mt-6 animate-fade-up text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl" style={{ animationDelay: '0.1s' }}>
                {data.description}
              </p>
            )}

            {/* Location + availability */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-ink-subtle lg:justify-start" style={{ animationDelay: '0.15s' }}>
              {person.location && (
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {person.location}
                </span>
              )}
              {data.showAvailability && person.availability && (
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {person.availability}
                </span>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start" style={{ animationDelay: '0.2s' }}>
              {data.primaryCta?.label && data.primaryCta?.url && (
                <a href={data.primaryCta.url} className="btn-primary w-full sm:w-auto">
                  {data.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              )}
              {data.secondaryCta?.label && data.secondaryCta?.url && (
                <a href={data.secondaryCta.url} className="btn-ghost w-full sm:w-auto">
                  {data.secondaryCta.label}
                </a>
              )}
            </div>

            {/* Socials */}
            {data.showSocials && (
              <div className="mt-8 flex justify-center lg:justify-start" style={{ animationDelay: '0.25s' }}>
                <SocialLinks socials={socials} />
              </div>
            )}
          </div>

          {/* Image */}
          {data.showImage && person.profileImage && (
            <div className="relative animate-scale-in" style={{ animationDelay: '0.15s' }}>
              <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] border border-line shadow-2xl shadow-black/5 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <SmartImage
                  src={person.profileImage}
                  alt={person.name}
                  loading="eager"
                  className="h-full w-full"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 -z-10 rounded-[2.5rem] border border-line opacity-50" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
