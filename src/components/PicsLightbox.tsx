import React, { useEffect } from 'react';
import { IconX, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Photo } from '../data/photos';

type PicsLightboxProps = {
  photos: Photo[];
  currentIndex: number | null;
  setCurrentIndex: (index: number | null) => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function PicsLightbox({
  photos,
  currentIndex,
  setCurrentIndex,
  onPrev,
  onNext
}: PicsLightboxProps) {

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') setCurrentIndex(null);
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onPrev, onNext]);

  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={() => setCurrentIndex(null)}
    >
      <button
        onClick={() => setCurrentIndex(null)}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition bg-black/40 hover:bg-black/80 rounded-full p-2"
      >
        <IconX size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 text-white/70 hover:text-white transition bg-black/40 hover:bg-black/80 rounded-full p-3"
      >
        <IconChevronLeft size={32} />
      </button>

      <div
        className="relative flex flex-col items-center max-w-full max-h-full group"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={photos[currentIndex].src}
            alt="fullscreen"
            className="max-w-full max-h-[85vh] object-contain shadow-2xl"
          />
        </div>

        <div className="mt-6 w-full flex flex-col items-center gap-2 font-mono pointer-events-none text-center">
          <p className="text-white text-sm sm:text-base max-w-xl">
            "{photos[currentIndex].comment}"
          </p>
          <p className="text-white/40 text-xs tracking-widest">
            {currentIndex + 1} / {photos.length}
          </p>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 text-white/70 hover:text-white transition bg-black/40 hover:bg-black/80 rounded-full p-3"
      >
        <IconChevronRight size={32} />
      </button>
    </div>
  );
}
