import React, { useEffect, useState, useRef } from 'react';
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
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset loaded state whenever the photo changes
  useEffect(() => {
    setLoaded(false);
    // Immediately mark as loaded if already cached
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [currentIndex]);

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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
      onClick={() => setCurrentIndex(null)}
    >
      <button
        onClick={() => setCurrentIndex(null)}
        className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white transition bg-black/40 hover:bg-black/80 rounded-full p-2"
      >
        <IconX size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute bottom-4 left-4 h-12 w-12 sm:bottom-auto sm:top-0 sm:left-0 sm:h-full sm:w-[120px] z-[110] flex items-center justify-center cursor-pointer group bg-transparent focus:outline-none border-none"
        aria-label="Previous photo"
      >
        <IconChevronLeft
          size={36}
          className="text-white/60 sm:text-white/20 group-hover:text-white/90 group-active:scale-95 transition-all duration-300"
        />
      </button>

      <div
        className="relative z-[105] flex flex-col items-center max-w-full max-h-full group"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Subtle spinner shown while next image loads */}
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white/70 animate-spin" />
            </div>
          )}
          <img
            ref={imgRef}
            key={currentIndex}
            src={photos[currentIndex].src}
            alt="fullscreen"
            onLoad={() => setLoaded(true)}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl transition-opacity duration-400"
            style={{ opacity: loaded ? 1 : 0 }}
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
        className="absolute bottom-4 right-4 h-12 w-12 sm:bottom-auto sm:top-0 sm:right-0 sm:h-full sm:w-[120px] z-[110] flex items-center justify-center cursor-pointer group bg-transparent focus:outline-none border-none"
        aria-label="Next photo"
      >
        <IconChevronRight
          size={36}
          className="text-white/60 sm:text-white/20 group-hover:text-white/90 group-active:scale-95 transition-all duration-300"
        />
      </button>
    </div>
  );
}
