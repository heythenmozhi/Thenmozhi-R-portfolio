import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Sparkles, 
  School,
  Award,
  BookOpen
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const college = EDUCATION_DATA[0];
  const school = EDUCATION_DATA[1];

  return (
    <section 
      id="education" 
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
            02 / Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Academic qualifications from Sri Shakthi Institute of Engineering & Technology and Tamil Nadu State Board.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Primary College Education Card */}
          {college && (
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-7 sm:p-10 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all relative overflow-hidden group"
            >
              {/* Subtle light mode decorative accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 opacity-80" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 shrink-0 shadow-2xs">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Undergraduate Degree</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {college.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{college.institution}</span>
                    </div>
                    {college.affiliation && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 pl-6">
                        {college.affiliation}
                      </p>
                    )}
                  </div>
                </div>

                {/* CGPA Badge with animated hover lift */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex sm:flex-col items-start sm:items-end justify-between sm:justify-center gap-1 bg-gradient-to-br from-emerald-50 to-teal-50/80 dark:from-emerald-950/50 dark:to-teal-950/30 p-4 sm:px-6 rounded-2xl border border-emerald-200/90 dark:border-emerald-800/80 shrink-0 shadow-2xs"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cumulative GPA</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-700 dark:text-emerald-400">
                    8.3 <span className="text-sm font-semibold text-emerald-600">/ 10</span>
                  </div>
                </motion.div>
              </div>

              {/* Timing & Location Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Duration: <strong>{college.period}</strong></span>
                </div>
                {college.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Location: <strong>{college.location}</strong></span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              {college.highlights && (
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Academic Highlights & Core Competencies</span>
                  </div>
                  {college.highlights.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Secondary Higher Secondary Card */}
          {school && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
                  <School className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {school.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                    {school.institution}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Year of Passing: <strong>{school.period}</strong></span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-800 px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 sm:text-right shrink-0">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Score / Percentage
                </div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">
                  {school.gradeValue}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
