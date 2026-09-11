import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Lightbulb, 
  Cloud, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Award
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Top Performer')) return <Trophy className="w-5 h-5 text-amber-500" />;
    if (category.includes('Hackathon')) return <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    if (category.includes('AWS')) return <Cloud className="w-5 h-5 text-sky-500" />;
    return <Award className="w-5 h-5 text-indigo-500" />;
  };

  return (
    <section 
      id="achievements" 
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
            07 / Competitions & Meetups
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements, Hackathons & Activities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Active competitive coding, 24-hour hackathons, technical quizzes, and cloud developer meetups.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(item.category)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Activity</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
