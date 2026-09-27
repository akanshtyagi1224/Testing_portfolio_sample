import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function FAQ({ data }: { data: FAQData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="faq" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="reveal mt-10 mx-auto max-w-3xl divide-y divide-line">
          {data.items.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-1">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring rounded-lg"
        aria-expanded={open}
      >
        <span className="font-semibold text-ink">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-subtle transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 pr-8 text-sm leading-relaxed text-ink-muted sm:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
}
