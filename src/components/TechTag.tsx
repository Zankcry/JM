import { techStack, projectOnlyTech, techStackIcons } from '../data/tech';

type TechTagProps = {
  tag: string;
  variant?: 'card' | 'modal' | 'overlay';
};

const styles = {
  card: {
    plain: 'rounded-lg border border-theme-accent/10 bg-theme-bg/50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-theme-text-muted',
    wrap: 'gap-1.5 rounded-lg border border-theme-accent/10 bg-theme-bg/50 px-2 py-1 transition-all hover:border-theme-accent/30 hover:bg-theme-bg',
    iconBox: 'h-4 w-4 transition-transform',
    icon: { size: 14, stroke: 2 },
    label: 'text-[10px] font-semibold uppercase tracking-wider text-theme-text-muted transition-colors group-hover/tag:text-theme-text',
  },
  modal: {
    plain: 'rounded-md border border-theme-border/20 bg-theme-bg-elevated/40 px-2 py-0.5 text-[9px] font-medium tracking-wide text-theme-text-muted/95',
    wrap: 'gap-1.5 rounded-md border border-theme-border/10 bg-theme-bg-elevated/30 px-2 py-0.5 transition-all duration-200 hover:border-theme-accent/20 hover:bg-theme-bg-elevated/60',
    iconBox: 'h-3.5 w-3.5 transition-transform duration-300',
    icon: { size: 11, stroke: 2.5 },
    label: 'text-[9px] font-semibold tracking-wide text-theme-text-muted/80 transition-colors duration-200 group-hover/tag:text-theme-text',
  },
  // White text over the home carousel video
  overlay: {
    plain: 'rounded-md bg-white/5 px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-white/70',
    wrap: 'gap-1 rounded-md bg-white/5 px-2 py-1 transition-all hover:bg-white/10',
    iconBox: 'h-3 w-3 transition-transform',
    icon: { size: 12, stroke: 2 },
    label: 'text-[9px] font-semibold uppercase tracking-wider text-white/70 transition-colors group-hover/tag:text-white',
  },
};

export function TechTag({ tag, variant = 'card' }: TechTagProps) {
  const s = styles[variant];
  const tech = [...techStack, ...projectOnlyTech].find(t =>
    t.label.toLowerCase() === tag.toLowerCase() ||
    t.shortLabel.toLowerCase() === tag.toLowerCase()
  );

  if (!tech) {
    return <span className={s.plain}>{tag}</span>;
  }

  const TechIcon = techStackIcons[tech.icon];

  return (
    <div className={`group/tag flex items-center ${s.wrap}`}>
      <div
        className={`flex items-center justify-center group-hover/tag:scale-110 ${s.iconBox}`}
        style={{ color: tech.tone }}
      >
        <TechIcon size={s.icon.size} stroke={s.icon.stroke} aria-hidden="true" />
      </div>
      <span className={s.label}>{tech.label}</span>
    </div>
  );
}
