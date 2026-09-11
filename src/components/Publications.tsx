import React from 'react';
import { motion } from 'motion/react';
import { 
  FileCheck2, 
  Calendar, 
  Hash, 
  CheckCircle2, 
  BookOpen 
} from 'lucide-react';
import { PUBLICATIONS_DATA } from '../data/portfolioData';

export const Publications: React.FC = () => {
  return (
    <section 
      id="publications" 
      className="py-20 bg-slate-50/70 dark:bg-[#0b0f19] transition-colors"
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
            08 / Academic Research & IP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Patents & Research Publications
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Published research architectures in the Journal of Advance and Future Research covering student career analytics and competency-driven learning.
          </p>
        </motion.div>

        {/* Publications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {PUBLICATIONS_DATA.map((pub, idx) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 group-hover:scale-105 transition-transform shadow-2xs">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Status: {pub.status}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {pub.title}
                </h3>

                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Journal of Advance and Future Research</span>
                </div>

                {pub.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {pub.description}
                  </p>
                )}
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Publication Date:</span>
                  </span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded border border-slate-200/80 dark:border-slate-700">
                    {pub.date}
                  </span>
                </div>

                {pub.applicationNumber && (
                  <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Hash className="w-4 h-4 text-amber-500" />
                      <span>Application No.:</span>
                    </span>
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                      {pub.applicationNumber}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
