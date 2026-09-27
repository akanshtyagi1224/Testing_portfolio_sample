import {
  Rocket, Users, Newspaper, Award, Trophy, BookOpen,
  Star, TrendingUp, Medal, GraduationCap, type LucideIcon,
} from 'lucide-react';
import type { AchievementsData } from '@/types';
import SectionHeading from './shared/SectionHeading';

const iconMap: Record<string, LucideIcon> = {
  Rocket, Users, Newspaper, Award, Trophy, BookOpen,
  Star, TrendingUp, Medal, GraduationCap,
};

export default function Achievements({ data }: { data: AchievementsData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="achievements" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, i) => {
            const Icon = item.icon ? iconMap[item.icon] : Award;
            return (
              <div
                key={i}
                className="reveal card-surface p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
                data-reveal-delay={i * 70}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    {item.value && (
                      <p className="text-2xl font-extrabold tracking-tight text-ink">{item.value}</p>
                    )}
                    <h3 className="font-bold text-ink">{item.title}</h3>
                    {item.description && (
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
