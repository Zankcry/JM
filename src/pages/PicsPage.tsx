import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IconBrandGooglePhotos } from '@tabler/icons-react';
import { allPhotos } from '../data/photos';
import PicsFilter from '../components/PicsFilter';
import PicsGrid from '../components/PicsGrid';
import Lightbox from '../components/Lightbox';

export default function PicsPage() {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const tags = ['all', ...Array.from(new Set(allPhotos.flatMap(p => p.tags)))];

  const displayedPhotos = filter === 'all'
    ? allPhotos
    : allPhotos.filter(p => p.tags.includes(filter));

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => prev !== null ? (prev === 0 ? displayedPhotos.length - 1 : prev - 1) : null);
  }, [displayedPhotos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => prev !== null ? (prev === displayedPhotos.length - 1 ? 0 : prev + 1) : null);
  }, [displayedPhotos.length]);

  return (
    <main className="flex flex-1 flex-col gap-8 w-full pt-8 sm:pt-14 lg:pt-16 pb-20 sm:pb-32">

      <div className="flex flex-col gap-6">

        {/* ── Page header ─────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <header className="flex w-full items-center gap-6">
            <h1 className="shrink-0 flex items-center gap-3 text-4xl font-bold tracking-tight text-theme-text sm:text-5xl">
              <IconBrandGooglePhotos className="w-10 h-10 sm:w-12 sm:h-12 text-theme-accent" />
              Photos
            </h1>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-theme-accent/40" />
          </header>
          <p className="text-theme-text-muted text-base sm:text-lg leading-relaxed">
            A collection of memories, random snaps, random thoughts, and visual sceneries.
          </p>
        </div>

        {/* ── Filters ─────────────────────────────────────── */}
        <PicsFilter
          tags={tags}
          filter={filter}
          setFilter={setFilter}
          allPhotos={allPhotos}
        />
      </div>

      {/* ── Masonry Grid ────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <PicsGrid
          key={filter}
          photos={displayedPhotos}
          onPhotoClick={setCurrentIndex}
        />
      </AnimatePresence>

      {/* ── Lightbox ────────────────────────────────────── */}
      <Lightbox
        items={displayedPhotos}
        currentIndex={currentIndex}
        onClose={() => setCurrentIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

    </main>
  );
}
