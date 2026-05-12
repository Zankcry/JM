import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { ProjectPreview } from './ProjectPreview';

type Project = {
  title: string;
  description: string;
  image: string;
  poster?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
};

export function ProjectCard({ project, id, padding = 'p-5' }: { project: Project; id?: string; padding?: string }) {
  return (
    <div
      id={id}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg transition-all hover:border-theme-accent/50"
    >
      <ProjectPreview project={project} />

      <div className={`flex flex-1 flex-col ${padding}`}>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[17px] font-semibold tracking-tight text-theme-text transition-colors group-hover:text-theme-accent">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-theme-text-muted">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="hover:text-theme-accent transition-colors">
                <IconBrandGithub size={18} stroke={1.8} />
              </a>
            )}
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live Project" className="group/link hover:text-theme-accent transition-colors">
                <IconExternalLink size={18} stroke={1.8} className="transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2.5 text-[13px] leading-relaxed text-theme-text-muted">
          {project.description}
        </p>

        <div className="mt-auto pt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-theme-bg-elevated/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-theme-text-subtle shadow-sm ring-1 ring-theme-border/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
