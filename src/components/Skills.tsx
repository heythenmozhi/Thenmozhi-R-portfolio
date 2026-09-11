import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Server, 
  Terminal, 
  Wrench, 
  Globe, 
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Frontend / UI':
        return <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Backend / Database':
        return <Server className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Developer Tools':
        return <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-600" />;
    }
  };

  const categoriesToDisplay = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === selectedCategory);

  return (
    <section 
      id="skills" 
      className="py-20 bg-white dark:bg-[#0e1424] border-y border-slate-200/80 dark:border-slate-800/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-200 dark:border-emerald-800">
            03 / Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Practical full-stack competencies, server runtimes, databases, programming fundamentals, and modern developer tooling.
          </p>
        </motion.div>

        {/* Category Selection Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'All'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            All Skills ({SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)})
          </motion.button>

          {SKILL_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.category}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.category
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </motion.div>

        {/* Visual Category Cards with Animated Chips */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {categoriesToDisplay.map((cat, idx) => (
              <motion.div
                key={cat.category}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -3 }}
                className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {cat.category}
                      </h3>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {cat.skills.length} verified competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-emerald-400 transition-colors cursor-default"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    <span>Production ready</span>
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
