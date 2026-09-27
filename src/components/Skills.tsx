import type { SkillsData } from '@/types';
import SectionHeading from './shared/SectionHeading';

export default function Skills({ data }: { data: SkillsData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  return (
    <section id="skills" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>
        <div className="reveal mt-10">
          <ul className="flex flex-wrap gap-2.5">
            {data.items.map((skill, i) => (
              <li
                key={i}
                className="rounded-full border border-line bg-surface-1 px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:border-accent hover:text-accent hover:scale-105 cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
