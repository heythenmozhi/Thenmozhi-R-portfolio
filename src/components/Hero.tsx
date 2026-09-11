import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  BrainCircuit, 
  GraduationCap, 
  MapPin, 
  Camera, 
  Upload,
  Layers,
  Star
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Check localStorage for a user-uploaded image first, then fallback to public paths
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const photoCandidates = [
    '/profile.jpg',
    '/profile.png',
    '/1777629825356 (1).png',
    '/1777629825356.png',
    '/thenmozhi.png',
    '/thenmozhi.jpg',
    '/profile.svg'
  ];

  useEffect(() => {
    try {
      const saved = localStorage.getItem('thenmozhi_custom_photo');
      if (saved) {
        setCustomPhoto(saved);
      }
    } catch {
      // ignore storage error
    }
  }, []);

  const handleImageError = () => {
    if (customPhoto) {
      setCustomPhoto(null);
    } else {
      setFallbackIndex((prev) => (prev < photoCandidates.length - 1 ? prev + 1 : prev));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          try {
            localStorage.setItem('thenmozhi_custom_photo', result);
          } catch {
            // storage quota fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          try {
            localStorage.setItem('thenmozhi_custom_photo', result);
          } catch {
            // storage quota fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentImageSrc = customPhoto || photoCandidates[fallbackIndex];

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden transition-colors"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-blue-500/10 dark:from-emerald-500/10 dark:to-blue-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-36 right-10 w-72 h-72 bg-emerald-500/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio, Positioning & CTAs with motion */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            {/* Status & Identity Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/90 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full Stack Developer with AI Capabilities</span>
            </motion.div>

            {/* Main Name Heading */}
            <div>
              <motion.h1 
                id="hero-name-heading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]"
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              {/* Sub-heading / Professional Positioning */}
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-3 text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400 tracking-tight"
              >
                {PERSONAL_INFO.title}
              </motion.p>
            </div>

            {/* Description matching exact resume */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Information Technology undergraduate and full stack developer with hands-on experience building responsive, user-focused web applications using React.js, Node.js, Express.js, MongoDB and REST APIs. Comfortable working across the stack with practical AI integration using the Google Gemini API.
            </motion.p>

            {/* Quick Resume Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 pt-1 text-xs"
            >
              <motion.span 
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 shadow-xs cursor-default"
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>B.Tech IT (2024–2028) • CGPA 8.3</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 shadow-xs cursor-default"
              >
                <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>MERN Full Stack & PHP/MySQL</span>
              </motion.span>
              <motion.span 
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium border border-slate-200 dark:border-slate-700 shadow-xs cursor-default"
              >
                <BrainCircuit className="w-3.5 h-3.5 text-amber-500" />
                <span>Google Gemini AI Integration</span>
              </motion.span>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <motion.a
                id="hero-view-projects-btn"
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                id="hero-download-resume-btn"
                onClick={onOpenResume}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-700 shadow-xs transition-all"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Resume (Docx View)</span>
              </motion.button>

              <div className="flex items-center gap-2 pl-2">
                <motion.a
                  id="hero-github-link"
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-300 transition-all shadow-xs"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </motion.a>

                <motion.a
                  id="hero-linkedin-link"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-all shadow-xs"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Location & Academic Base */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Sri Shakthi Institute of Engineering and Technology (SIET), Coimbatore</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photo Card with Floating Badges & Animations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Floating Badge: CGPA 8.3 */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 shadow-md text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">CGPA</div>
                <div className="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm">8.3 / 10</div>
              </div>
            </motion.div>

            {/* Floating Badge: Gemini & Full Stack */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.4 }}
              className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 shadow-md text-xs font-bold text-slate-800 dark:text-slate-200"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center">
                <BrainCircuit className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Architecture</div>
                <div className="text-blue-700 dark:text-blue-400 font-extrabold text-xs">MERN + Gemini AI</div>
              </div>
            </motion.div>

            <div 
              className="relative w-full max-w-[340px] sm:max-w-[380px] group"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
            >
              {/* Ambient gradient halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-blue-500/20 rounded-[28px] blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Photo Frame */}
              <div className="relative rounded-[24px] overflow-hidden bg-slate-900 border-2 border-slate-200/90 dark:border-slate-700/80 shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                <div className="aspect-[3/4] w-full relative bg-slate-950 flex items-center justify-center overflow-hidden">
                  <img
                    id="hero-profile-image"
                    src={currentImageSrc}
                    alt="Thenmozhi R - Full Stack Developer"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top Photo Overlay Bar */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold tracking-wider border border-white/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>THENMOZHI R</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="pointer-events-auto p-1.5 rounded-xl bg-slate-900/80 hover:bg-emerald-600 backdrop-blur-md text-white border border-white/20 transition-colors shadow-xs"
                      title="Upload or Change Photo (supports your attached photo)"
                    >
                      <Camera className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Gradient with Name & Role */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent p-4 text-white">
                    <div className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
                      <span>Thenmozhi R</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-emerald-400 font-medium">
                      Full Stack Developer | B.Tech IT @ SIET
                    </p>

                    {/* Quick photo upload button */}
                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1 text-emerald-300 hover:text-white font-medium transition-colors"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Upload photo file</span>
                      </button>
                      <span className="text-slate-400">Coimbatore, India</span>
                    </div>
                  </div>
                </div>

                {/* Hidden File Input for Custom Upload */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  aria-label="Upload profile image"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
