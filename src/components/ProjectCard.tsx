import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { ProjectPreview } from './ProjectPreview';
import { TechTag } from './TechTag';
import { useTerminal } from '../context/TerminalContext';
import { Project } from '../data/projects';

export function ProjectCard({
  project,
  id,
  padding = 'p-5',
  onClick
}: {
  project: Project;
  id?: string;
  padding?: string;
  onClick?: () => void;
}) {
  const { setHoveredCommand } = useTerminal();
  const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      id={id}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg transition-all hover:border-theme-accent/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-accent/50 selection:bg-transparent"
      onMouseEnter={() => setHoveredCommand(`open projects/${projectSlug}`)}
      onMouseLeave={() => setHoveredCommand(null)}
    >
      <ProjectPreview project={project} />

      <div className={`flex flex-1 flex-col ${padding}`}>
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[17px] font-semibold tracking-tight text-theme-text transition-colors group-hover:text-theme-accent line-clamp-1 min-h-[1.5rem]">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-theme-text-muted">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="hover:text-theme-accent transition-colors relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <IconBrandGithub size={18} stroke={1.8} />
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Project"
                className="group/link hover:text-theme-accent transition-colors relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <IconExternalLink size={18} stroke={1.8} className="transition-transform duration-300 ease-out group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-2.5 text-[13px] leading-relaxed text-theme-text-muted line-clamp-3 h-[3.9rem] overflow-hidden">
          {project.description}
        </p>

        <div className="pt-6 flex flex-wrap gap-2 flex-grow items-start">
          {project.tags.map((tag) => (
            <TechTag key={tag} tag={tag} variant="card" />
          ))}
        </div>
      </div>
    </div>
  );
}

