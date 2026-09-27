import type { FooterData, SocialsData, PersonData } from '@/types';
import SocialLinks from './shared/SocialLinks';

interface FooterProps {
  data: FooterData;
  socials: SocialsData;
  person: PersonData;
}

export default function Footer({ data, socials, person }: FooterProps) {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="container-content">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            {person.name && (
              <p className="font-bold text-ink">{person.name}</p>
            )}
            {data.text && (
              <p className="mt-1 text-sm text-ink-muted">{data.text}</p>
            )}
            {data.copyright && (
              <p className="mt-3 text-xs text-ink-subtle">{data.copyright}</p>
            )}
          </div>
          {data.showSocials && (
            <SocialLinks socials={socials} size="sm" />
          )}
        </div>
      </div>
    </footer>
  );
}
