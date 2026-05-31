import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// ── Helpers ──────────────────────────────────────────────────────────────────

function pathToSegment(pathname: string): string {
  if (pathname === '/') return 'home';
  if (pathname === '/about') return 'about';
  if (pathname === '/projects') return 'projects';
  if (pathname === '/photos') return 'photos';
  if (pathname.startsWith('/posts/')) return 'posts/article';
  if (pathname === '/posts') return 'posts';
  return 'home';
}

// ── Component ─────────────────────────────────────────────────────────────────

type TerminalHomeButtonProps = {
  currentPath: string;
  hoverCommand: string | null;
  onHoverChange: (cmd: string | null) => void;
  onClick: () => void;
};

export function TerminalHomeButton({
  currentPath,
  hoverCommand,
  onHoverChange,
  onClick,
}: TerminalHomeButtonProps) {
  const segment = pathToSegment(currentPath);
  const [commandText, setCommandText] = useState('');
  const [typing, setTyping] = useState(false);
  const typingTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typingTimer.current) {
      clearInterval(typingTimer.current);
      typingTimer.current = null;
    }

    let target = '';
    if (hoverCommand) {
      const allowedPages = ['home', 'about', 'projects', 'posts', 'photos'];
      const normalizedCmd = hoverCommand.toLowerCase().trim();
      let pageName = normalizedCmd;
      if (normalizedCmd.startsWith('cd ')) {
        pageName = normalizedCmd.substring(3).trim();
      }

      if (allowedPages.includes(pageName)) {
        target = `cd ${pageName}`;
      }
    }
    setTyping(true);

    typingTimer.current = setInterval(() => {
      setCommandText((current) => {
        if (current === target) {
          if (typingTimer.current) clearInterval(typingTimer.current);
          setTyping(false);
          return current;
        }

        // Type forward
        if (target.startsWith(current) && current.length < target.length) {
          return target.slice(0, current.length + 1);
        }

        // Backspace/erase
        return current.slice(0, -1);
      });
    }, 30);

    return () => {
      if (typingTimer.current) clearInterval(typingTimer.current);
    };
  }, [hoverCommand]);

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Go to home"
      className="group focus:outline-none"
      onMouseEnter={() => onHoverChange('home')}
      onMouseLeave={() => onHoverChange(null)}
    >
      <motion.div
        className="
          inline-flex items-center gap-0
          rounded-lg
          bg-transparent
          px-3 py-1.5
          font-mono text-xs sm:text-sm
          shadow-[0_0_0_1px_transparent]
          transition-all duration-300
          hover:shadow-[0_0_12px_0px_var(--color-theme-accent,rgba(99,102,241,0.15))]
          hover:bg-theme-accent/5
          focus-visible:ring-2 focus-visible:ring-theme-focus
        "
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <span className="text-theme-accent font-semibold">root@james</span>
        <span className="text-theme-text/40">:</span>
        <span className="text-theme-text/70">~/{segment}</span>
        <span className="text-theme-text/40">$</span>
        {commandText && (
          <span className="ml-1 text-theme-text/80">{commandText}</span>
        )}
        <motion.span
          className="ml-0.5 inline-block h-[0.85em] w-[0.55ch] rounded-[1px] bg-theme-accent align-middle"
          animate={{ opacity: typing ? 1 : [1, 0] }}
          transition={typing ? { duration: 0 } : { repeat: Infinity, repeatType: 'mirror', duration: 0.55 }}
        />
      </motion.div>
    </Link>
  );
}
