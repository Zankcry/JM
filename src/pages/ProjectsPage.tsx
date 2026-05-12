import { IconFolderOpen } from '@tabler/icons-react';
import { projects } from '../data/projects';
import { FeaturedProjectBanner } from '../components/FeaturedProjectBanner';
import { ProjectCard } from '../components/ProjectCard';

export default function ProjectsPage() {
  const featuredProject = projects[0];
  const otherProjects = projects.filter(p => p !== featuredProject);

  return (
    <div className="flex flex-1 flex-col items-start gap-16 w-full pt-8 sm:pt-14 lg:pt-16">
      <header className="flex w-full items-center gap-6">
        <h1 className="flex shrink-0 items-center gap-3 text-4xl font-bold tracking-tight text-theme-text sm:text-5xl">
          <IconFolderOpen size={42} stroke={2.5} className="text-theme-accent" />
          Projects
        </h1>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-theme-accent/40" />
      </header>

      {/* Hero Section for the featured project */}
      <FeaturedProjectBanner project={featuredProject} />

      {/* Grid for the rest of the projects */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 w-full">
        {otherProjects.map((project, i) => (
          <ProjectCard key={i} project={project} padding="p-6" />
        ))}
      </div>
    </div>
  );
}
