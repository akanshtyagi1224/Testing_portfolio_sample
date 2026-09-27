import { ArrowUpRight } from 'lucide-react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function ExternalLink({ href, children, className = '', external = true }: ExternalLinkProps) {
  const isEmail = href.startsWith('mailto:');
  const isInternal = href.startsWith('#') || !external || isEmail;

  return (
    <a
      href={href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noopener noreferrer'}
      className={className}
    >
      {children}
    </a>
  );
}

export function ArrowLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <ExternalLink href={href} className={`group inline-flex items-center gap-1 text-sm font-semibold text-accent transition-opacity hover:opacity-80 ${className}`}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </ExternalLink>
  );
}
