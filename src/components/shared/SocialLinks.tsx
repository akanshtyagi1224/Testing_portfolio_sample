import { Linkedin, Twitter, Github, Instagram, Youtube, Rss, Globe, Mail, AtSign } from 'lucide-react';
import type { SocialsData } from '@/types';

interface SocialLinksProps {
  socials: SocialsData;
  size?: 'sm' | 'md';
  className?: string;
}

const socialConfig: { key: keyof SocialsData; icon: typeof Linkedin; label: string }[] = [
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'twitter', icon: Twitter, label: 'X (Twitter)' },
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'youtube', icon: Youtube, label: 'YouTube' },
  { key: 'substack', icon: Rss, label: 'Substack' },
  { key: 'website', icon: Globe, label: 'Website' },
  { key: 'email', icon: Mail, label: 'Email' },
];

export default function SocialLinks({ socials, size = 'md', className = '' }: SocialLinksProps) {
  const links = socialConfig.filter((s) => socials[s.key]);
  if (links.length === 0) return null;

  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]';
  const btnSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10';

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map(({ key, icon: Icon, label }) => {
        const href = socials[key];
        if (!href) return null;
        const isEmail = href.startsWith('mailto:');
        return (
          <a
            key={key}
            href={href}
            aria-label={label}
            title={label}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            className={`${btnSize} inline-flex items-center justify-center rounded-full border border-line bg-surface-1 text-ink-muted transition-all duration-200 hover:border-accent hover:text-accent hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-0`}
          >
            {key === 'substack' ? <AtSign className={iconSize} /> : <Icon className={iconSize} />}
          </a>
        );
      })}
    </div>
  );
}
