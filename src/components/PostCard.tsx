import { Link } from 'react-router-dom';
import { IconNews } from '@tabler/icons-react';
import { Post } from '../data/posts';


export function PostCard({ post }: { post: Post }) {
  return (
    <Link to={`/posts/${post.id}`} className="block w-full">
      <article className="group relative flex w-full flex-col gap-3 rounded-xl border border-theme-accent/20 bg-theme-bg p-4 shadow-lg transition-all hover:border-theme-accent/50">
      {/* Top Metadata */}
      <div className="flex items-center gap-3 text-[11px] font-medium tracking-wide text-theme-text-muted/70">
        <IconNews size={14} className="text-theme-accent/60" />
        <span>{post.date}</span>
        <span aria-hidden="true">•</span>
        <div className="flex gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="text-theme-accent uppercase">#{tag}</span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold tracking-tight text-theme-text transition-colors group-hover:text-theme-accent sm:text-2xl">
          {post.title}
        </h2>
        <p className="line-clamp-2 text-[14px] leading-relaxed text-theme-text-muted sm:text-[15px]">
          {post.description}
        </p>
      </div>

      {/* Interaction Bar (Optional Reddit-style detail) */}
      <div className="mt-2 flex items-center gap-4 text-xs font-semibold text-theme-text-muted/60">
        <span className="cursor-pointer transition-colors hover:text-theme-accent">Read full post</span>
      </div>
      </article>
    </Link>
  );
}
