import { Mail, ArrowRight } from 'lucide-react';
import type { ContactData, SocialsData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import SocialLinks from './shared/SocialLinks';

interface ContactProps {
  data: ContactData;
  socials: SocialsData;
}

export default function Contact({ data, socials }: ContactProps) {
  if (!data.enabled) return null;

  return (
    <section id="contact" className="section-pad">
      <div className="container-content">
        <div className="reveal card-surface overflow-hidden p-8 text-center sm:p-12 md:p-16">
          <div className="mx-auto max-w-2xl">
            <div className="reveal mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Mail className="h-6 w-6" />
            </div>
            {data.headline && (
              <h2 className="reveal text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
                {data.headline}
              </h2>
            )}
            {data.description && (
              <p className="reveal mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {data.description}
              </p>
            )}
            {data.email && (
              <div className="reveal mt-8">
                <a href={`mailto:${data.email}`} className="btn-primary">
                  {data.ctaLabel || 'Send an email'}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            )}
            <div className="reveal mt-8 flex justify-center">
              <SocialLinks socials={socials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
