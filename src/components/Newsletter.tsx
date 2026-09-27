import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import type { NewsletterData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function Newsletter({ data }: { data: NewsletterData }) {
  if (!data.enabled) return null;

  const [email, setEmail] = useState('');

  return (
    <section id="newsletter" className="section-pad">
      <div className="container-content">
        <div className="reveal card-surface overflow-hidden p-8 sm:p-12 md:p-16">
          <div className="mx-auto max-w-xl text-center">
            <div className="reveal mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Mail className="h-6 w-6" />
            </div>
            <div className="reveal">
              <SectionHeading title={data.sectionTitle} align="center" />
            </div>
            {data.description && (
              <p className="reveal mt-4 text-base leading-relaxed text-ink-muted">{data.description}</p>
            )}
            {data.actionUrl && (
              <form
                action={data.actionUrl}
                method="post"
                className="reveal mt-8 mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  if (!email) e.preventDefault();
                }}
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={data.placeholder || 'Enter your email'}
                  required
                  aria-label="Email address"
                  className="flex-1 rounded-lg border border-line bg-surface-0 px-4 py-3 text-sm text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-ring"
                />
                <button type="submit" className="btn-primary shrink-0">
                  {data.buttonLabel || 'Subscribe'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
