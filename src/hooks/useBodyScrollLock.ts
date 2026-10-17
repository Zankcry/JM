import { useEffect } from 'react';

// Shared across callers so a lightbox inside a modal does not unlock the page when it closes
let lockCount = 0;

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    if (lockCount++ === 0) {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      }
    }

    return () => {
      if (--lockCount > 0) return;
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.removeProperty('--scrollbar-width');
    };
  }, [isLocked]);
}
