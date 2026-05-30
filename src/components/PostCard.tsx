import { Link } from 'react-router-dom';
import { Post } from '../data/posts';
import { useTerminal } from '../context/TerminalContext';

export function PostCard({ post }: { post: Post }) {
  const { setHoveredCommand } = useTerminal();

  return (
    <div className="w-full h-full flex">
      <Link
        to={`/posts/${post.id}`}
        className="group flex w-full"
        onMouseEnter={() => setHoveredCommand(`posts/${post.id}`)}
        onMouseLeave={() => setHoveredCommand(null)}
      >
        <article className="relative flex w-full flex-col justify-between gap-3.5 rounded-2xl border border-theme-accent/10 bg-theme-bg p-6 shadow-lg">
          <div className="flex flex-col gap-3.5">
            {/* Top Metadata */}
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-wider text-theme-text-muted/60 uppercase w-full overflow-hidden">
              <span className="shrink-0">{post.date}</span>
              <span aria-hidden="true" className="text-theme-accent/40 font-bold shrink-0">•</span>
              <div className="truncate tracking-widest font-mono text-theme-accent flex-1">
                {post.tags.map(tag => `#${tag.toUpperCase()}`).join(' ')}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2.5">
              <h2 className="flex items-center gap-2 text-lg font-bold tracking-tight text-theme-text transition-colors duration-300 group-hover:text-theme-accent sm:text-xl line-clamp-2">
                <span>{post.title}</span>
              </h2>
              <p className="text-[14px] leading-relaxed text-theme-text-muted sm:text-[15px] max-w-4xl font-light line-clamp-2">
                {post.description}
              </p>
            </div>
          </div>

          {/* Bottom indicator */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-theme-accent/70 group-hover:text-theme-accent transition-colors duration-300 mt-auto pt-4">
            <span>Read full article</span>
          </div>
        </article>
      </Link>
    </div>
  );
}

