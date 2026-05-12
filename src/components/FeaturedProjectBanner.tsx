import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { ProjectPreview } from './ProjectPreview';

type Project = {
  title: string;
  description: string;
  image: string;
  poster?: string;
  links: {
    github?: string;
    live?: string;
  };
};

export function FeaturedProjectBanner({ project }: { project: Project }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg">
      <div className="flex min-h-[320px] flex-col md:flex-row">
        {/* Left Content */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 md:p-10 lg:p-12">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-theme-text md:text-4xl lg:text-5xl">
            {project.title}
          </h2>
          
          <p className="max-w-md text-base leading-relaxed text-theme-text-muted">
            {project.description}
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a 
              href={project.links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-bold text-theme-text transition hover:text-theme-accent"
            >
              <IconBrandGithub size={18} />
              REPOSITORY
            </a>
            <a 
              href={project.links.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-xs font-bold text-theme-text transition hover:text-theme-accent"
            >
              <IconExternalLink size={18} />
              LIVE PREVIEW
            </a>
          </div>
        </div>

        {/* Right Image/Slanted Area */}
        <div className="relative h-[240px] w-full overflow-hidden md:h-auto md:w-[50%] lg:w-[55%]">
          <div 
            className="absolute inset-0 bg-theme-accent"
            style={{
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-theme-accent to-theme-accent-strong opacity-80" />
            <ProjectPreview project={project} className="h-full w-full" />
            <div className="absolute inset-0 bg-theme-accent/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
