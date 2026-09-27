import { ArrowUpRight } from 'lucide-react';
import type { ProjectsData } from '@/types';
import SectionHeading from './shared/SectionHeading';
import SmartImage from './shared/SmartImage';
import Tag from './shared/Tag';

export default function Projects({ data }: { data: ProjectsData }) {
  if (!data.enabled || !data.items || data.items.length === 0) return null;

  const featured = data.items.filter((p) => p.featured);
  const regular = data.items.filter((p) => !p.featured);
  const hasFeatured = featured.length >= 2;

  return (
    <section id="projects" className="section-pad">
      <div className="container-content">
        <div className="reveal">
          <SectionHeading title={data.sectionTitle} />
        </div>

        {/* Featured grid */}
        {hasFeatured && (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard key={i} project={project} large />
            ))}
          </div>
        )}

        {/* Regular grid */}
        {regular.length > 0 && (
          <div className={`mt-6 grid gap-6 sm:grid-cols-2 ${hasFeatured ? '' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
            {regular.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        )}

        {/* If no featured, show all in grid */}
        {!hasFeatured && featured.length === 0 && data.items.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, large = false }: { project: ProjectsData['items'][number]; large?: boolean }) {
  return (
    <a
      href={project.link || undefined}
      target={project.link ? '_blank' : undefined}
      rel={project.link ? 'noopener noreferrer' : undefined}
      className={`reveal group card-surface overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-ring ${large ? '' : ''}`}
    >
      {project.image && (
        <div className={`relative overflow-hidden ${large ? 'h-56 sm:h-64' : 'h-44'}`}>
          <SmartImage
            src={project.image}
            alt={project.title}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-bold text-ink ${large ? 'text-xl' : 'text-lg'}`}>{project.title}</h3>
          {project.link && (
            <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-subtle transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          )}
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag, i) => (
              <Tag key={i} text={tag} />
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
