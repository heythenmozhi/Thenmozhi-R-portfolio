import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Github, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Bot, 
  ExternalLink,
  Code2,
  Database,
  Cpu,
  ChevronRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsProps {
  onSelectProject: (proj: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const flagshipProject = PROJECTS.find(p => p.id === 'capacity-connect') || PROJECTS[0];
  const otherProjects = PROJECTS.filter(p => p.id !== 'capacity-connect');

  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-[#0e1424] border-y border-slate-200/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 dark:border-emerald-800">
            05 / Technical Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production-Oriented Web & AI Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            End-to-end full-stack architectures, closed-loop organizational intelligence, and campus platforms.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* FLAGSHIP PROJECT: CAPACITY CONNECT */}
        {/* ========================================================================= */}
        {flagshipProject && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span>FLAGSHIP PROJECT</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 border border-slate-700">
                    Full Stack & Applied AI
                  </span>
                </div>

                {flagshipProject.githubUrl && (
                  <motion.a
                    id="capacity-connect-github-btn"
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </motion.a>
                )}
              </div>

              {/* Title & Philosophy */}
              <div className="max-w-4xl mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
                  {flagshipProject.name} – <span className="text-emerald-400">{flagshipProject.subtitle}</span>
                </h3>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  {flagshipProject.longDescription || flagshipProject.description}
                </p>
                {flagshipProject.coreMessage && (
                  <blockquote className="mt-4 text-emerald-300 font-semibold italic text-base border-l-2 border-emerald-400 pl-4 py-0.5">
                    {flagshipProject.coreMessage}
                  </blockquote>
                )}
              </div>

              {/* Interactive Full Workflow Diagram */}
              {flagshipProject.workflow && (
                <div className="my-8 p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                      <Workflow className="w-4 h-4" />
                      <span>Closed-Loop Competency Lifecycle</span>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">8 Integrated Phases</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                    {flagshipProject.workflow.map((step, idx) => (
                      <motion.div
                        key={step}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/70 text-center flex flex-col items-center justify-center relative group hover:border-emerald-400 transition-colors cursor-default"
                      >
                        <span className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] font-bold text-slate-200 tracking-tight leading-tight">
                          {step}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* AI Integration & Tech Stack Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6 pt-6 border-t border-slate-800">
                {/* AI Integration Highlight */}
                <div className="lg:col-span-7 p-5 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                    <Bot className="w-4 h-4" />
                    <span>Google Gemini API Integration Highlights</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Dynamic Assessment Generation:</strong> Calibrates adaptive domain-specific MCQs directly from syllabus targets.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Competency Analysis & Diagnostics:</strong> Analyzes responses and maps exact organizational skill gaps.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Trainer Matching Reasoning:</strong> Pairs employees with optimal trainers based on verified subject matter expertise.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span><strong>Personalized Learning Paths:</strong> Curates milestone training roadmaps to measure measurable improvement.</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack & Modal Action */}
                <div className="lg:col-span-5 space-y-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
                      Technical Architecture
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {flagshipProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <motion.button
                      id="view-capacity-connect-details"
                      onClick={() => onSelectProject(flagshipProject)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-sm"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                    {flagshipProject.githubUrl && (
                      <motion.a
                        href={flagshipProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* REMAINING 5 PROJECTS */}
        {/* ========================================================================= */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Additional Verified Engineering Projects
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Carefully engineered applications with real database schemas and domain problem statements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {project.category}
                  </span>
                  {project.aiIntegration && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      <Sparkles className="w-3 h-3" />
                      <span>AI Integrated</span>
                    </span>
                  )}
                </div>

                {/* Name & Subtitle */}
                <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h4>
                {project.subtitle && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3 mt-0.5 line-clamp-1">
                    {project.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-200/60 dark:border-slate-800">
                    {project.keyFeatures.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Tech Stack & Links */}
              <div>
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Details & Architecture</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  {/* GitHub button ONLY if URL exists in resume */}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors shadow-2xs"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
