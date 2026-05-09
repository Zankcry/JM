import { statusUpdates } from '../data/status';

export function StatusSidebar() {
  return (
    <aside className="hidden w-full max-w-[320px] flex-col gap-6 lg:flex">
      {/* About Section */}
      <div className="rounded-2xl border border-theme-border/60 bg-theme-surface/30 p-6 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-theme-accent">
          What I&apos;m Doing
        </h3>
        <p className="mt-4 text-[13px] leading-relaxed text-theme-text-muted">
          I post whatever I find interesting sometimes unrelated to web dev, but never anything indecent. 💀
        </p>
      </div>

      {/* Recent Updates List */}
      <div className="rounded-2xl border border-theme-border/60 bg-theme-surface/30 p-6 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-theme-text-subtle">
          Recent Status
        </h3>
        <div className="mt-6 flex flex-col gap-6">
          {statusUpdates.slice().reverse().map((status) => (
            <div key={status.id} className="flex flex-col gap-2">
              <div className="flex items-center text-[10px] font-bold uppercase tracking-tight">
                <span className="text-theme-accent">{status.category}</span>
              </div>
              <p className="text-[13px] leading-snug text-theme-text transition-colors hover:text-theme-accent">
                {status.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer-like detail */}
      <div className="px-4 text-[11px] text-theme-text-muted/40">
        <p>© 2024 James Michael Duque. Built with coffee and curiosity.</p>
      </div>
    </aside>
  );
}
