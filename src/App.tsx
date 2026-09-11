import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem } from './types';

export default function App() {
  // Default to clean, professional light theme as requested
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('thenmozhi_portfolio_theme');
      if (saved) return saved === 'dark';
      return false; // Default to false for executive light theme
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('thenmozhi_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('thenmozhi_portfolio_theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100 selection:bg-emerald-500 selection:text-white transition-colors duration-300 relative">
      {/* Dynamic Reading Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 origin-left z-50 shadow-xs"
        style={{ scaleX }}
      />

      {/* 1. Header / Top Sticky Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* Main Flow: Single Source of Truth, No Duplications */}
      <main className="relative">
        {/* 2. Hero (Two-column: Bio & CTAs left, Photo right) */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 3. About Me (Bio, College, Career Goal, Strengths, Languages) */}
        <About />

        {/* 4. Education (College only: B.E. IT @ SIET, 8.3 CGPA) */}
        <Education />

        {/* 5. Skills (Exact technical skills from resume) */}
        <Skills />

        {/* 6. Experience (Exact 2 internships: Skill Nexis & ApexPlanet) */}
        <Experience />

        {/* 7. Projects (Capacity Connect Flagship + 5 Verified Projects — Single Section) */}
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 8. Certifications (11 verified certifications from resume) */}
        <Certifications />

        {/* 9. Achievements & Activities (SIH, HackSprint '26, quizzes, AWS meetup) */}
        <Achievements />

        {/* 10. Research & Publications (2 journal publications with app numbers) */}
        <Publications />

        {/* 11. Contact (Direct communication, form, no old URL) */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-emerald-600 dark:text-emerald-400 border border-slate-200/90 dark:border-slate-700 shadow-lg backdrop-blur-md hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Interactive Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* ATS-Optimized Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
