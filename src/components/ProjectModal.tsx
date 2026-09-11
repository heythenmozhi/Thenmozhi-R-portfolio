import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Layers, 
  Workflow, 
  Code2, 
  Terminal 
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white dark:bg-[#0e1424] rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-2xl max-w-3xl w-full my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white relative">
          <motion.button
            id="close-project-modal-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </motion.button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {project.category}
            </span>
            {project.aiIntegration && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Google Gemini API</span>
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.name}
          </h3>

          {project.subtitle && (
            <p className="text-sm text-slate-300 mt-1 font-medium">
              {project.subtitle}
            </p>
          )}

          {project.coreMessage && (
            <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/15">
              <p className="text-xs sm:text-sm italic text-amber-300 font-semibold">
                {project.coreMessage}
              </p>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Architecture & Objective
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Workflow Steps if present */}
          {project.workflow && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-emerald-600" />
                <span>Core Execution Workflow</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.workflow.map((step, idx) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                  >
                    <span className="text-emerald-600 dark:text-emerald-400">{idx + 1}.</span>
                    <span>{step}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Key Features & Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Integration Details */}
          {project.aiIntegration && (
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Practical AI Integration</span>
              </div>
              <p className="text-xs text-amber-950/90 dark:text-amber-200 leading-relaxed">
                {project.aiIntegration}
              </p>
            </div>
          )}

          {/* Team Members if applicable */}
          {project.teamMembers && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
              <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-600" />
                <span>Collaborative Team Members</span>
              </div>
              <div className="font-semibold text-slate-800 dark:text-slate-200">
                {project.teamMembers.join(' • ')}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-slate-50 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Project Architecture Dossier
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-colors flex items-center gap-2 shadow-xs"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            )}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
