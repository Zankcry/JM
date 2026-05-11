import React from 'react';

import { Photo } from '../data/photos';

type PicsFilterProps = {
  tags: string[];
  filter: string;
  setFilter: (tag: string) => void;
  allPhotos: Photo[];
};

export default function PicsFilter({ tags, filter, setFilter, allPhotos }: PicsFilterProps) {
  const getCount = (tag: string) => {
    if (tag === 'all') return allPhotos.length;
    return allPhotos.filter(p => p.tags.includes(tag)).length;
  };
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => setFilter(tag)}
          className={`px-3 py-1 text-sm rounded-full transition ${filter === tag
            ? 'bg-theme-accent text-theme-bg font-semibold'
            : 'bg-theme-surface text-theme-text-muted hover:text-theme-text hover:border-theme-accent/50'
            }`}
        >
          {tag.charAt(0).toUpperCase() + tag.slice(1)} <span className="opacity-60 text-xs ml-1">({getCount(tag)})</span>
        </button>
      ))}
    </div>
  );
}
