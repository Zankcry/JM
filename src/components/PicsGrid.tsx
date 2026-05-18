import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Photo } from '../data/photos';

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

export default function PicsGrid({ photos, onPhotoClick }: PicsGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="columns-1 sm:columns-2 gap-4 space-y-4"
    >
      {photos.map((photo) => {
        const globalIndex = photos.findIndex(p => p.id === photo.id);
        return (
          <motion.div
            key={photo.id}
            variants={cardVariants}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-theme-bg shadow-lg mb-4 rounded-3xl"
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
          </motion.div>
        );
      })}
    </motion.div>
  );
}
