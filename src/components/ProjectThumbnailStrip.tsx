import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { thumbnailVariants } from '../utils/animations';

// ── Types ─────────────────────────────────────────────────────────────────────

type ProjectThumbnailStripProps = {
  screenshots: string[];
  /** Used as the AnimatePresence key so thumbnails re-animate on project change */
  activeTitle: string;
  direction: 'next' | 'prev' | null;
  onScreenshotClick: () => void;
};

// ── Component ─────────────────────────────────────────────────────────────────

export function ProjectThumbnailStrip({
  screenshots,
  activeTitle,
  direction,
  onScreenshotClick,
}: ProjectThumbnailStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrollingPaused = useRef(false);

  // Infinite horizontal auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    const scrollSpeed = 0.65; // Slow, premium sliding motion

    const scroll = () => {
      if (el && !isScrollingPaused.current) {
        el.scrollLeft += scrollSpeed;

        // Find the first duplicated card to calculate the exact seamless loop offset
        const firstDuplicatedCard = el.children[screenshots.length] as HTMLElement;

        if (firstDuplicatedCard) {
          // Reset to 0 when the first duplicated card reaches the starting alignment position
          if (el.scrollLeft >= firstDuplicatedCard.offsetLeft - 20) {
            el.scrollLeft = 0;
          }
        } else {
          // Fallback if elements aren't measured yet
          if (el.scrollLeft >= el.scrollWidth / 2) {
            el.scrollLeft = 0;
          }
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [screenshots]);

  const variants = thumbnailVariants(0.05);

  return (
    <div
      className="absolute left-[480px] bottom-10 right-0 h-[175px] z-10 overflow-hidden bg-transparent max-lg:left-[440px] max-lg:bottom-[30px] max-lg:h-[135px] max-md:hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, white 50px)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, white 50px)',
      }}
    >
      <div
        className="flex gap-5 overflow-x-auto overflow-y-hidden w-full h-full pt-2.5 pb-2.5 pl-5 pr-[120px] items-end [scrollbar-width:none] [-ms-overflow-style:none] bg-transparent [&::-webkit-scrollbar]:hidden max-lg:pl-5 max-lg:pr-[100px]"
        ref={scrollRef}
        onMouseEnter={() => { isScrollingPaused.current = true; }}
        onMouseLeave={() => { isScrollingPaused.current = false; }}
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          {[...screenshots, ...screenshots].map((screenshot, idx) => {
            // The local index within one copy of the original array, used for stagger delay
            const localIdx = idx % screenshots.length;

            return (
              <motion.div
                key={`${activeTitle}-screenshot-${idx}`}
                custom={direction}
                variants={variants}
                initial="initial"
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    x: { type: 'spring', stiffness: 220, damping: 26, delay: localIdx * 0.05 },
                    opacity: { duration: 0.35, delay: localIdx * 0.05 },
                  },
                }}
                exit="exit"
                className="flex-shrink-0 w-[260px] h-[155px] bg-center bg-cover rounded-md cursor-pointer transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 hover:scale-[1.05] max-lg:w-[190px] max-lg:h-[115px]"
                style={{ backgroundImage: `url(${screenshot})` }}
                onClick={onScreenshotClick}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
