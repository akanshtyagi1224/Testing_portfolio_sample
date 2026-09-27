import {
  Code, Palette, Rocket, Users, LineChart, Lightbulb,
  PenTool, Megaphone, Shield, Briefcase, Globe, Zap,
  type LucideIcon,
} from 'lucide-react';
import type { ServicesData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import { ArrowLink } from './shared/ExternalLink';

const iconMap: Record<string, LucideIcon> = {
  Code, Palette, Rocket, Users, LineChart, Lightbulb,
  PenTool, Megaphone, Shield, Briefcase, Globe, Zap,
};

export default function Services({ data }: { data: ServicesData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="services" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} description={data.description} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((service, i) => {
            const Icon = service.icon ? iconMap[service.icon] : null;
            return (
              <div
                key={i}
                className="reveal card-surface p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
                data-reveal-delay={i * 70}
              >
                {Icon && (
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                {service.link && (
                  <div className="mt-4">
                    <ArrowLink href={service.link}>Learn more</ArrowLink>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
