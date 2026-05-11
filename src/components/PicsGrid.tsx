import React from 'react';
import { Photo } from '../data/photos';

type PicsGridProps = {
  photos: Photo[];
  onPhotoClick: (globalIndex: number) => void;
};

export default function PicsGrid({ photos, onPhotoClick }: PicsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[0, 1].map((colIdx) => (
        <div key={colIdx} className="flex flex-col gap-4">
          {photos
            .filter((_, i) => i % 2 === colIdx)
            .map((photo) => {
              const globalIndex = photos.findIndex(p => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  className="relative group cursor-pointer overflow-hidden bg-theme-surface/30"
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
      ))}
    </div>
  );
}
