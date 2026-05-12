import React, { useEffect, Suspense, lazy } from "react";
import Lenis from "@studio-freight/lenis";
import Home from "./components/Home/Home";
import ChatBot from "./components/ChatBot/chatBot";

// Lazy load below-the-fold components for faster initial load
const Skills = lazy(() => import("./components/Skills/Skills"));
const Experience = lazy(() => import("./components/Experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Certification = lazy(() => import("./components/Certifications/Certifications"));
const Research = lazy(() => import("./components/Research/Research"));
const Gallery = lazy(() => import("./components/Gallery/Gallery"));

const App = () => {
  // Initialize Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <ChatBot />
      <Home />
      
      {/* Fallback while components are loading */}
      <Suspense fallback={<div className="h-screen flex items-center justify-center bg-slate-950 text-white font-bold">Loading...</div>}>
        <Skills />
        <Experience />
        <Projects />
        <Certification />
        <Research />
        <Gallery />
      </Suspense>
    </div>
  );
}

export default App;
