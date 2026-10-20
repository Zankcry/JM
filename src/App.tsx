import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { KonamiEasterEgg } from './components/KonamiEasterEgg';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PostsPage from './pages/PostsPage';

// Not needed on the landing page; loaded on first visit to keep the main bundle small
const PostDetailPage = lazy(() => import('./pages/PostDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PicsPage = lazy(() => import('./pages/PicsPage'));

import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { TerminalProvider } from './context/TerminalContext';
import { LanguageProvider } from './context/LanguageContext';
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

    // Up to ~3s: the 0.75s page fade plus downloading a lazy page on a slow connection
    let attempts = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tryScroll = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (attempts < 30) {
        attempts++;
        timer = setTimeout(tryScroll, 100);
      }
    };

    timer = setTimeout(tryScroll, 300);
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
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="flex flex-col flex-1"
      >
        <div className="mx-auto flex flex-1 w-full max-w-7xl flex-col px-5 pb-16 pt-32 sm:px-8 lg:px-12 xl:pl-32 xl:pr-32 2xl:px-12">
          <Suspense fallback={null}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:id" element={<PostDetailPage />} />
              <Route path="/photos" element={<PicsPage />} />
              {/* Unknown URLs (typos, old links) land on the home page instead of a blank one */}
              <Route path="*" element={<HomePage />} />
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
    <LanguageProvider>
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
  </LanguageProvider>
  );
}
