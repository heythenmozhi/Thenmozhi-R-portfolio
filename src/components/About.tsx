import React from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Target, 
  Sparkles, 
  GraduationCap, 
  Languages, 
  Compass, 
  HeartHandshake,
  Briefcase,
  FileCheck2,
  Award,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const quickStats = [
    { label: 'Academic CGPA', value: '8.3', sub: 'SIET Coimbatore', icon: GraduationCap, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/50' },
    { label: 'Internships', value: '2', sub: 'MERN & Full Stack', icon: Briefcase, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/50' },
    { label: 'Certifications', value: '11+', sub: 'Verified Credentials', icon: Award, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/50' },
    { label: 'Publications', value: '2', sub: 'Advance & Future Res.', icon: FileCheck2, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-950/50' },
    { label: 'Projects Built', value: '6+', sub: 'Applied AI & Web', icon: Layers, color: 'text-teal-600 dark:text-teal-400', bg: 'bg-teal-50 dark:bg-teal-950/50' },
  ];

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-[#0e1424] border-y border-slate-200/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 dark:border-emerald-800">
            01 / Profile & Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Thenmozhi R
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Engineering modern full-stack web applications with practical artificial intelligence integration.
          </p>
        </motion.div>

        {/* Quick Highlights Stats Grid with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12"
        >
          {quickStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03, y: -2 }}
                className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl ${stat.bg} ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">{stat.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Story & Positioning */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-slate-50 dark:bg-slate-900/70 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Professional Biography</span>
              </h3>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                <p>
                  I am a <strong className="text-slate-900 dark:text-white font-semibold">B.Tech Information Technology</strong> undergraduate at{' '}
                  <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">{PERSONAL_INFO.institution}</strong>, Coimbatore, affiliated with Anna University (Batch 2024 – 2028).
                </p>

                <p>
                  My core technical positioning is as a <strong className="text-slate-900 dark:text-white font-semibold">Full Stack Developer with AI</strong> capabilities. I design and build responsive web applications, structured RESTful backend APIs, document and relational databases, and practical generative AI workflows using tools like the Google Gemini API.
                </p>

                <p>
                  Having completed intensive internships in both MERN full-stack engineering and PHP/MySQL development, I bring hands-on familiarity with authentication mechanisms, component-driven user interfaces, state management, and real-world software delivery pipelines.
                </p>

                {/* Career Goal Callout */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 mt-6"
                >
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        Primary Career Goal
                      </div>
                      <p className="text-sm text-slate-800 dark:text-slate-200 font-medium mt-1">
                        {PERSONAL_INFO.careerGoal}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Core Strengths from Resume */}
            <div className="bg-slate-50 dark:bg-slate-900/70 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Professional Strengths</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PERSONAL_INFO.strengths.map((strength) => (
                  <motion.div
                    key={strength}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-xs cursor-default"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Principles, Target Domains & Languages */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Career Positioning Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-7 shadow-md border border-slate-700"
            >
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Primary Positioning</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Full Stack Developer + AI
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                I position myself specifically as a full-stack engineer who builds real products and connects them with artificial intelligence services, rather than an abstract analyst.
              </p>
              <div className="pt-4 border-t border-slate-700/80 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Modern React.js & TypeScript frontends</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Node.js, Express.js & REST APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>MongoDB & MySQL data management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Google Gemini API & GenAI application flows</span>
                </div>
              </div>
            </motion.div>

            {/* Areas of Interest */}
            <div className="bg-slate-50 dark:bg-slate-900/70 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>Areas of Interest</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.careerInterests.map((interest) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages Known */}
            <div className="bg-slate-50 dark:bg-slate-900/70 rounded-3xl p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <Languages className="w-4 h-4 text-emerald-600" />
                <span>Languages</span>
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {PERSONAL_INFO.languages.map((lang) => (
                  <motion.div
                    key={lang.language}
                    whileHover={{ scale: 1.03 }}
                    className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs"
                  >
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {lang.language}
                    </div>
                    <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium mt-0.5">
                      {lang.proficiency}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
