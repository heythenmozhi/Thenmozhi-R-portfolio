import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUp, 
  Heart,
  Code2 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand & Professional Title */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-sm">
                TR
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm font-medium text-emerald-400">
              {PERSONAL_INFO.title}
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              B.Tech Information Technology undergraduate at Sri Shakthi Institute of Engineering and Technology (SIET), Coimbatore. Focused on modern full-stack web applications and practical AI integration.
            </p>
          </div>

          {/* Column 2: Navigation Links (Exact 9 sections) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Sections
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-emerald-400 transition-colors">Certifications</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-emerald-400 transition-colors">Achievements</a>
              </li>
              <li>
                <a href="#publications" className="hover:text-emerald-400 transition-colors">Publications</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Social & Communication */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <a 
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a 
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub (heythenmozhi)</span>
              </a>

              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Thenmozhi R. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, TypeScript, Tailwind CSS & Google Gemini API</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
