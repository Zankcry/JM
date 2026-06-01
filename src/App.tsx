import { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { KonamiEasterEgg } from './components/KonamiEasterEgg';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const PostsPage = lazy(() => import('./pages/PostsPage'));
const PostDetailPage = lazy(() => import('./pages/PostDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PicsPage = lazy(() => import('./pages/PicsPage'));

import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { TerminalProvider } from './context/TerminalContext';
import { BackgroundLayer } from './components/BackgroundLayer';
import { BrushStrokeCanvas } from './components/BrushStrokeCanvas';
import { useBackground } from './context/BackgroundContext';


function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    let attempts = 0;
    const tryScroll = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    const timer = setTimeout(tryScroll, 300);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
      }}
    >
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col flex-1"
      >
        <div className="mx-auto flex flex-1 w-full max-w-7xl flex-col px-5 pb-16 pt-32 sm:px-8 lg:px-12 xl:pl-32 xl:pr-32 2xl:px-12">
          <Suspense fallback={
            <div className="flex h-[40vh] w-full flex-col items-center justify-center gap-3 text-sm font-mono tracking-widest text-theme-accent uppercase">
              <div className="h-2 w-24 overflow-hidden rounded-full bg-theme-accent/20">
                <div className="h-full w-1/2 animate-infinite-loading rounded-full bg-theme-accent" />
              </div>
              <span>Initializing Module...</span>
            </div>
          }>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<PostDetailPage />} />
              <Route path="/photos" element={<PicsPage />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const { brushActive } = useBackground();
  const [loaded, setLoaded] = useState(false);

  return (
    <TerminalProvider>
      <Router>
        {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
        <div className="relative z-0 min-h-screen overflow-hidden text-theme-text font-inter selection:bg-theme-accent/30 selection:text-theme-text flex flex-col transition-colors duration-300 ease-out">
          {/* Isolated Hardware-Accelerated Background Pattern */}
          <BackgroundLayer />

          {/* Interactive Japanese sumi-e style brush stroke canvas */}
          {brushActive && <BrushStrokeCanvas />}

          <KonamiEasterEgg />

          <Navbar />

          <AnimatedRoutes />
        </div>
      </Router>
    </TerminalProvider>
  );
}
