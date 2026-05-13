import React from 'react';
import { Photo } from '../data/photos';

type PicsGridProps = {
  photos: Photo[];
  onPhotoClick: (globalIndex: number) => void;
};

export default function PicsGrid({ photos, onPhotoClick }: PicsGridProps) {
  return (
    <div className="columns-1 sm:columns-2 gap-4 space-y-4">
      {photos.map((photo) => {
        const globalIndex = photos.findIndex(p => p.id === photo.id);
        return (
          <div
            key={photo.id}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl border border-theme-accent/20 bg-theme-bg shadow-lg mb-4"
            onClick={() => onPhotoClick(globalIndex)}
          >
            <img
              src={photo.src}
              alt={photo.id}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
              <p className="text-white text-xs font-mono drop-shadow-[0_1px_2px_rgba(0,0,0,1)] line-clamp-2">
                "{photo.comment}"
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
