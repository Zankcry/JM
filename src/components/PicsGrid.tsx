import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Photo, thumbOf } from '../data/photos';
import { useLanguage } from '../context/LanguageContext';

type PicsGridProps = {
  photos: Photo[];
  onPhotoClick: (globalIndex: number) => void;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.015,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const, // ultra-smooth cubic bezier tuple
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: {
      duration: 0.22,
      ease: [0.7, 0, 0.84, 0] as const,
    },
  },
};


// Individual photo card with shimmer skeleton + fade-in on load (prevents flash/glitch)
type PhotoCardProps = {
  photo: Photo;
  globalIndex: number;
  onPhotoClick: (idx: number) => void;
};

function PhotoCard({ photo, globalIndex, onPhotoClick }: PhotoCardProps) {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handle cached images that fire onLoad before React attaches the handler
  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const commentText = (language === 'ja' && photo.comment_ja) ? photo.comment_ja : photo.comment;

  return (
    <motion.div
      variants={cardVariants}
      className="relative group cursor-pointer overflow-hidden bg-theme-bg shadow-lg rounded-3xl w-full"
      onClick={() => onPhotoClick(globalIndex)}
      style={{
        aspectRatio: `${photo.ratio}`,
      }}
    >
      {/* Shimmer skeleton shown while the image loads */}
      <div
        className={`absolute inset-0 w-full h-full animate-pulse bg-gradient-to-r from-theme-bg-elevated/40 via-theme-bg-elevated/70 to-theme-bg-elevated/40 bg-[length:200%_100%] transition-opacity duration-500 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      />
      <img
        ref={imgRef}
        src={thumbOf(photo.src)}
        alt={commentText}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover transition-[transform,opacity] duration-500 group-hover:scale-105"
        style={{ opacity: loaded ? 1 : 0 }}
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none z-10">
        <p className="text-white text-xs font-mono drop-shadow-[0_1px_2px_rgba(0,0,0,1)] line-clamp-2">
          "{commentText}"
        </p>
      </div>
    </motion.div>
  );
}

export default function PicsGrid({ photos, onPhotoClick }: PicsGridProps) {
  const [columnsCount, setColumnsCount] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 640) {
        setColumnsCount(2);
      } else {
        setColumnsCount(1);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Partition photos using a greedy height-balancing algorithm to keep columns balanced
  const cols = Array.from({ length: columnsCount }, () => [] as Photo[]);
  const colHeights = Array.from({ length: columnsCount }, () => 0);

  photos.forEach((photo) => {
    // Find the column with the minimum height
    let minColIndex = 0;
    let minHeight = colHeights[0];
    for (let i = 1; i < columnsCount; i++) {
      if (colHeights[i] < minHeight) {
        minHeight = colHeights[i];
        minColIndex = i;
      }
    }

    cols[minColIndex].push(photo);
    colHeights[minColIndex] += 1 / photo.ratio;
  });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start"
    >
      {cols.map((col, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {col.map((photo) => {
            const globalIndex = photos.findIndex(p => p.id === photo.id);
            return (
              <PhotoCard
                key={photo.id}
                photo={photo}
                globalIndex={globalIndex}
                onPhotoClick={onPhotoClick}
              />
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}

