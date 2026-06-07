import { techStack, techStackIcons } from '../data/tech';

type TechTagProps = {
  tag: string;
  variant?: 'card' | 'modal';
};

export function TechTag({ tag, variant = 'card' }: TechTagProps) {
  const tech = techStack.find(t =>
    t.label.toLowerCase() === tag.toLowerCase() ||
    t.shortLabel.toLowerCase() === tag.toLowerCase()
  );

  if (variant === 'card') {
    if (!tech) {
      return (
        <span className="rounded-lg border border-theme-accent/10 bg-theme-bg/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-theme-text-muted">
          {tag}
        </span>
      );
    }

    const TechIcon = techStackIcons[tech.icon];

    return (
      <div className="group/tag flex items-center gap-1.5 rounded-lg border border-theme-accent/10 bg-theme-bg/50 px-2 py-1 transition-all hover:border-theme-accent/30 hover:bg-theme-bg">
        <div
          className="flex h-4 w-4 items-center justify-center transition-transform group-hover/tag:scale-110"
          style={{ color: tech.tone }}
        >
          <TechIcon size={14} stroke={2} aria-hidden="true" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-theme-text-muted transition-colors group-hover/tag:text-theme-text">
          {tech.label}
        </span>
      </div>
    );
  } else {
    // variant === 'modal'
    if (!tech) {
      return (
        <span className="rounded-md border border-theme-border/20 bg-theme-bg-elevated/40 px-2 py-0.5 text-[9px] font-medium tracking-wide text-theme-text-muted/95">
          {tag}
        </span>
      );
    }

    const TechIcon = techStackIcons[tech.icon];

    return (
      <div className="group/tag flex items-center gap-1.5 rounded-md border border-theme-border/10 bg-theme-bg-elevated/30 px-2 py-0.5 transition-all duration-200 hover:border-theme-accent/20 hover:bg-theme-bg-elevated/60">
        <div
          className="flex h-3.5 w-3.5 items-center justify-center transition-transform duration-300 group-hover/tag:scale-110"
          style={{ color: tech.tone }}
        >
          <TechIcon size={11} stroke={2.5} aria-hidden="true" />
        </div>
        <span className="text-[9px] font-semibold tracking-wide text-theme-text-muted/80 transition-colors duration-200 group-hover/tag:text-theme-text">
          {tech.label}
        </span>
      </div>
    );
  }
}
