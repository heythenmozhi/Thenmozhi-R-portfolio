import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Printer, 
  FileText, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Award, 
  Layers, 
  Terminal, 
  BookOpen, 
  FileCheck2, 
  Cpu, 
  Users, 
  HeartHandshake, 
  Sparkles,
  Download
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PERSONAL_DETAILS, 
  REFERENCES, 
  DECLARATION, 
  EDUCATION_DATA, 
  SKILL_CATEGORIES, 
  EXPERIENCES, 
  PROJECTS, 
  ADDITIONAL_PROJECTS, 
  CERTIFICATIONS_DATA, 
  PUBLICATIONS_DATA, 
  ACHIEVEMENTS_DATA, 
  VOLUNTEER_EXPERIENCE 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activePage, setActivePage] = useState<'all' | 1 | 2 | 3 | 4>('all');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-slate-100 dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full my-4 overflow-hidden flex flex-col max-h-[94vh] border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 shrink-0 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Thenmozhi_R_Resume_Professional.docx (Official Document View)
            </span>
          </div>

          {/* Page Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setActivePage('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                activePage === 'all' 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Pages (1–4)
            </button>
            <button
              onClick={() => setActivePage(1)}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                activePage === 1 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Page 1
            </button>
            <button
              onClick={() => setActivePage(2)}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                activePage === 2 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Page 2
            </button>
            <button
              onClick={() => setActivePage(3)}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                activePage === 3 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Page 3
            </button>
            <button
              onClick={() => setActivePage(4)}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                activePage === 4 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Page 4
            </button>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              id="resume-print-btn"
              onClick={handlePrint}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </motion.button>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-8 bg-slate-200/70 dark:bg-slate-950 flex flex-col items-center">
          
          {/* ==================== PAGE 1 ==================== */}
          {(activePage === 'all' || activePage === 1) && (
            <div className="bg-white text-slate-900 w-full max-w-3xl p-8 sm:p-12 shadow-xl rounded-sm border border-slate-300 text-xs leading-relaxed print:shadow-none print:border-none print:m-0 print:p-8 print:break-after-page">
              
              {/* Header */}
              <div className="border-b border-indigo-900/40 pb-4 mb-4">
                <h1 className="text-2xl sm:text-3xl font-black text-indigo-950 tracking-tight">
                  THENMOZHI R
                </h1>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mt-0.5">
                  INFORMATION TECHNOLOGY UNDERGRADUATE | FULL STACK DEVELOPER
                </p>

                {/* Contact Coordinates */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-700 mt-2">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-indigo-700" />
                    <span>thenmozhiraja22@gmail.com</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-indigo-700" />
                    <span>+91 7010995334</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3 h-3 text-indigo-700" />
                    <a href="https://linkedin.com/in/thenmozhi-r-935422338" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                      linkedin.com/in/thenmozhi-r-935422338
                    </a>
                  </span>
                  <span className="flex items-center gap-1">
                    <Github className="w-3 h-3 text-indigo-700" />
                    <a href="https://github.com/heythenmozhi" target="_blank" rel="noreferrer" className="text-blue-700 underline">
                      github.com/heythenmozhi
                    </a>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-5 text-slate-800 leading-relaxed text-justify">
                Information Technology undergraduate and full stack developer with hands-on experience building responsive, user-focused web applications using React.js, Node.js, Express.js, MongoDB and REST APIs. Practical exposure gained through a web development internship, multiple full-stack and frontend projects, and active participation in hackathons and technical events. Comfortable working across the stack, from designing clean, responsive UI to building backend logic and APIs, with experience integrating AI APIs such as Google Gemini into web applications.
              </div>

              {/* Education */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🎓 EDUCATION</span>
                </div>
                <div className="space-y-2 text-slate-800">
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Bachelor of Engineering – Information Technology | <span className="font-normal text-slate-700">2024 – 2028 (Expected)</span> | <span className="font-bold">CGPA: 8.3</span>
                    </div>
                    <div className="text-slate-600 pl-3">
                      Sri Shakthi Institute of Engineering and Technology
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Higher Secondary (XII) | <span className="font-normal text-slate-700">2024</span> | <span className="font-bold">79.3%</span>
                    </div>
                    <div className="text-slate-600 pl-3">
                      Tamil Nadu State Board
                    </div>
                  </div>
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🎯 AREAS OF INTEREST</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-800">
                  <span>• Full Stack Development</span>
                  <span>• Frontend Development</span>
                  <span>• Backend Development</span>
                  <span>• REST API Development</span>
                  <span>• Web Application Development</span>
                  <span>• Cloud & DevOps</span>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🛠 TECHNICAL SKILLS</span>
                </div>
                <div className="space-y-1 text-slate-800">
                  <div>
                    <span className="font-bold text-slate-900">Web Technologies: </span>
                    <span>HTML, CSS, JavaScript, Responsive Web Design</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Frontend / UI: </span>
                    <span>React.js, Responsive UI Design, Web Development, TypeScript</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Backend / Database: </span>
                    <span>Node.js, Express.js, REST APIs, PHP, MongoDB, MySQL</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Programming Languages: </span>
                    <span>Python, Java, C, C++</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Tools: </span>
                    <span>Git, GitHub, Vercel, VS Code</span>
                  </div>
                </div>
              </div>

              {/* Internship */}
              <div className="mb-2">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>💼 INTERNSHIP</span>
                </div>
                <div className="space-y-3.5 text-slate-800">
                  {/* Internship 1 */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Web Developer Intern – ApexPlanet Software Pvt. Ltd. | <span className="font-normal">11 May 2026 – 24 June 2026 (6 Weeks & 2 Days) | Virtual / Online</span>
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-800 pl-3">
                      Domain: Web Developer in PHP & MySQL
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Successfully completed an internship in Web Development using PHP & MySQL.</li>
                      <li>Participated in assigned web development tasks, project development activities and practical learning exercises. Gained practical exposure to web development workflows.</li>
                    </ul>
                  </div>

                  {/* Internship 2 */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Full Stack Developer Intern – Skill Nexis | <span className="font-normal">29 July 2026 – 09 September 2026 (6 Weeks) | Virtual / Online</span>
                    </div>
                    <div className="text-[11px] font-semibold text-emerald-800 pl-3">
                      Domain: Full Stack Web Development (MERN)
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Successfully completed a 6-week internship in Full Stack Web Development using the MERN stack.</li>
                      <li>Participated in assigned web development tasks, project development activities, and practical learning exercises.</li>
                      <li>Gained hands-on exposure to React.js, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, CRUD operations, and frontend-backend integration.</li>
                      <li>Developed and integrated full-stack web applications following practical development workflows.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Page Number */}
              <div className="pt-4 mt-6 border-t border-slate-200 text-right text-[10px] text-slate-400 font-mono">
                Page 1 of 4 • Thenmozhi_R_Resume_Professional.docx
              </div>
            </div>
          )}

          {/* ==================== PAGE 2 ==================== */}
          {(activePage === 'all' || activePage === 2) && (
            <div className="bg-white text-slate-900 w-full max-w-3xl p-8 sm:p-12 shadow-xl rounded-sm border border-slate-300 text-xs leading-relaxed print:shadow-none print:border-none print:m-0 print:p-8 print:break-after-page">
              
              {/* Certifications */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>📜 CERTIFICATIONS</span>
                </div>
                <div className="space-y-1 text-slate-800">
                  <div>• ReactJS Course — Unstop</div>
                  <div>• Full Stack Developer Internship – Skill Nexis</div>
                  <div>• Web Developer in PHP & MySQL Internship — ApexPlanet Software Pvt. Ltd.</div>
                  <div>• Git Training — SkillUp</div>
                  <div>• CS105: Introduction to Python — Saylor Academy (36 hours, Grade: 92.10)</div>
                  <div>• Use Generative AI for Software Development — IBM SkillsBuild</div>
                  <div>• Prompt Engineering — Infosys Springboard (24 May 2026)</div>
                  <div>• Learn the Basics of Web Accessibility — Microsoft</div>
                  <div>• GenAI Powered Data Analytics Job Simulation — Forage (25 March 2026)</div>
                  
                  <div className="font-bold text-slate-900 pt-1">◆ Additional Certifications</div>
                  <div>• Introduction to Generative AI Concepts — Microsoft</div>
                  <div>• AI/ML Mastery — Unstop</div>
                </div>
              </div>

              {/* Key Strengths */}
              <div className="mb-5">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>⭐ KEY STRENGTHS</span>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-800">
                  <span>• Quick Learner</span>
                  <span>• Adaptability</span>
                  <span>• Team Collaboration</span>
                  <span>• Time Management</span>
                  <span>• Attention to Detail</span>
                  <span>• Self-Motivated</span>
                  <span>• Continuous Learning</span>
                </div>
              </div>

              {/* Projects (Part 1: 4 Projects) */}
              <div className="mb-2">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🚀 PROJECTS</span>
                </div>
                
                <div className="space-y-4 text-slate-800">
                  {/* Project 1: Capacity Connect */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Capacity Connect – AI-Powered Competency-Based Organizational Learning & Training Platform
                    </div>
                    <div className="text-[11px] text-slate-600 pl-3">
                      <span className="font-semibold">Technologies: </span>
                      <span>React, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, Google Gemini API</span>
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Built a competency-based organizational learning platform covering competency assessment, skill-gap identification, and personalized training recommendations.</li>
                      <li>Implemented an Assess → Identify Skill Gap → Match Trainer → Recommend Training → Learn → Measure Improvement workflow.</li>
                      <li>Used the Google Gemini API for competency analysis, assessment/MCQ generation, and trainer-recommendation reasoning.</li>
                    </ul>
                    <div className="pl-3 mt-0.5 text-blue-700 text-[11px]">
                      Link: <a href="https://github.com/heythenmozhi/Capacity-Connect" target="_blank" rel="noreferrer" className="underline">github.com/heythenmozhi/Capacity-Connect</a>
                    </div>
                  </div>

                  {/* Project 2: Campus Marketplace */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Campus Marketplace | <span className="font-normal text-slate-600">January 2026 – March 2026</span>
                    </div>
                    <div className="text-[11px] text-slate-600 pl-3">
                      <span className="font-semibold">Technologies: </span>
                      <span>HTML, CSS, JavaScript, MongoDB</span>
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Built a campus-focused web application enabling students to buy and sell items within their college community.</li>
                      <li>Implemented product listings and authentication with a responsive interface focused on usability and clear navigation.</li>
                    </ul>
                    <div className="pl-3 mt-0.5 text-blue-700 text-[11px]">
                      Link: <a href="https://github.com/heythenmozhi/CampusMarketplace" target="_blank" rel="noreferrer" className="underline">github.com/heythenmozhi/CampusMarketplace</a>
                    </div>
                  </div>

                  {/* Project 3: College Ride Sharing */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ College Ride Sharing Application | <span className="font-normal text-slate-600">November 2025 – January 2026</span>
                    </div>
                    <div className="text-[11px] text-slate-600 pl-3">
                      <span className="font-semibold">Technologies: </span>
                      <span>HTML, CSS, JavaScript</span>
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Developed a web application connecting college students for shared travel and coordinated ride planning.</li>
                      <li>Built student signup/login, ride posting and ride matching features; contributed to the frontend browsing and coordination interface.</li>
                    </ul>
                    <div className="pl-3 mt-0.5 text-blue-700 text-[11px]">
                      Link: <a href="https://github.com/heythenmozhi/CollegeRideSharingApp" target="_blank" rel="noreferrer" className="underline">github.com/heythenmozhi/CollegeRideSharingApp</a>
                    </div>
                  </div>

                  {/* Project 4: CareerPilot */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ CareerPilot
                    </div>
                    <div className="text-[11px] text-slate-600 pl-3">
                      <span className="font-semibold">Technologies: </span>
                      <span>React.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, AI</span>
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Built an AI-powered career guidance platform to help students explore career paths and plan their professional development.</li>
                      <li>Implemented personalized career recommendations, skill-gap analysis, and AI-driven guidance through an interactive full-stack web application.</li>
                    </ul>
                    <div className="pl-3 mt-0.5 text-blue-700 text-[11px]">
                      Link: <a href="https://github.com/heythenmozhi/CareerPilot-Ai" target="_blank" rel="noreferrer" className="underline">github.com/heythenmozhi/CareerPilot-Ai</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page Number */}
              <div className="pt-4 mt-6 border-t border-slate-200 text-right text-[10px] text-slate-400 font-mono">
                Page 2 of 4 • Thenmozhi_R_Resume_Professional.docx
              </div>
            </div>
          )}

          {/* ==================== PAGE 3 ==================== */}
          {(activePage === 'all' || activePage === 3) && (
            <div className="bg-white text-slate-900 w-full max-w-3xl p-8 sm:p-12 shadow-xl rounded-sm border border-slate-300 text-xs leading-relaxed print:shadow-none print:border-none print:m-0 print:p-8 print:break-after-page">
              
              {/* Projects Continued */}
              <div className="mb-4">
                <div className="space-y-4 text-slate-800">
                  {/* Project 5: NBA Mapping System */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ NBA CO-PO-PSO Mapping System | <span className="font-normal text-emerald-700 font-semibold">Status: Ongoing</span>
                    </div>
                    <div className="text-[11px] text-slate-600 pl-3">
                      <span className="font-semibold">Technologies: </span>
                      <span>React, Vite, Tailwind CSS, Node.js/Express, MongoDB, Gemini API</span>
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Developing a full-stack CO/PO/PSO academic outcome mapping system supporting NBA accreditation workflows, including faculty login, dashboard, course details and syllabus management.</li>
                      <li>Building PDF upload and CO-PO-PSO mapping workflows with backend validation enforcing blank cells (never zero) for no-correlation values.</li>
                      <li>Designing a comprehensive React/Vite/Tailwind frontend with 14+ pages, a collapsible sidebar, and editable matrix components.</li>
                    </ul>
                  </div>

                  {/* Project 6: Student Career Enhancement Analyzer */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Student Career Enhancement Analyzer
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li>Research-oriented project focused on analyzing and enhancing student career outcomes; published as a research paper.</li>
                    </ul>
                  </div>

                  {/* Additional Projects */}
                  <div>
                    <div className="font-bold text-slate-900">
                      ◆ Additional Projects
                    </div>
                    <ul className="list-disc list-outside pl-7 mt-1 space-y-0.5 text-slate-700">
                      <li><strong>Learnify – Learning Platform for Students (Aug 2025 – Dec 2025):</strong> educational web app for students in Class 1–6.</li>
                      <li><strong>Medicine Reminder Application (Jul 2025 – Sep 2025):</strong> app to schedule and track medication reminders.</li>
                      <li><strong>Python Hangman Console:</strong> console-based Hangman game built in Python.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Languages Known */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🗣 LANGUAGES KNOWN</span>
                </div>
                <div className="flex gap-6 text-slate-800 pl-3">
                  <span>• English</span>
                  <span>• Tamil</span>
                </div>
              </div>

              {/* Patent / Research */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>📄 PATENT / RESEARCH</span>
                </div>
                <div className="space-y-1 text-slate-800">
                  <div>
                    ◆ <strong>Student Career Enhancement Analyzer</strong> | <span className="font-mono">Application Number: 202441119642</span> | Status: Published | Date: 06/05/2026
                  </div>
                  <div>
                    ◆ <strong>Learnify</strong> | <span className="font-mono">Application Number: 202541119662</span> | Status: Published | Date: 01/12/2025
                  </div>
                </div>
              </div>

              {/* Publications */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>📚 PUBLICATIONS</span>
                </div>
                <div className="text-slate-800 pl-1">
                  <div className="font-semibold italic text-slate-900">Journal of Advance and Future Research</div>
                  <div className="pl-3 mt-0.5">• Student Career Enhancement Analyzer</div>
                  <div className="pl-3">• Learnify</div>
                </div>
              </div>

              {/* Workshops */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🧰 WORKSHOPS</span>
                </div>
                <div className="text-slate-800">
                  <div className="font-bold text-slate-900">
                    ◆ AWS Summer Meetup 2026 – AWS User Group Coimbatore, Coimbatore
                  </div>
                  <div className="pl-4 mt-0.5">• Building Production-Ready AI Agents with Amazon Bedrock AgentCore</div>
                  <div className="pl-4">• Building an AI Startup on AWS: From Zero to Production</div>
                </div>
              </div>

              {/* Technical Activities & Achievements */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🏆 TECHNICAL ACTIVITIES & ACHIEVEMENTS</span>
                </div>
                <div className="space-y-1 text-slate-800">
                  <div>◆ <strong>SIH Internal Hackathon</strong> | Top Performer — 25/08/2026</div>
                  <div>◆ <strong>HackSprint '26</strong> | 24-Hour Hackathon, AI Research Laboratory, Sri Shakthi Institute of Engineering and Technology | 22–23 July 2026 | Participant</div>
                  <div>◆ <strong>AI & Technology Quiz 2026</strong> | Campus Unite | Participant</div>
                  <div>◆ <strong>DevQuest 2.0</strong> | International Frontend, C, C++, DSA, AI & Computer Science Challenge | Participant</div>
                  <div>◆ <strong>AI Trivia Challenge</strong> | AI Arena 2026 — Online MCQ Quiz Competition | Participant</div>
                </div>
              </div>

              {/* Volunteer Experience */}
              <div className="mb-2">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-2 text-xs">
                  <span>🤝 VOLUNTEER EXPERIENCE</span>
                </div>
                <div className="text-slate-800">
                  <div>◆ <strong>Women Empowerment Awareness</strong></div>
                  <div className="pl-4 mt-0.5">• Participated in an awareness initiative focused on promoting women's empowerment and social awareness.</div>
                </div>
              </div>

              {/* Page Number */}
              <div className="pt-4 mt-6 border-t border-slate-200 text-right text-[10px] text-slate-400 font-mono">
                Page 3 of 4 • Thenmozhi_R_Resume_Professional.docx
              </div>
            </div>
          )}

          {/* ==================== PAGE 4 ==================== */}
          {(activePage === 'all' || activePage === 4) && (
            <div className="bg-white text-slate-900 w-full max-w-3xl p-8 sm:p-12 shadow-xl rounded-sm border border-slate-300 text-xs leading-relaxed print:shadow-none print:border-none print:m-0 print:p-8">
              
              {/* Personal Details */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-3 text-xs">
                  <span>🪪 PERSONAL DETAILS</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-slate-800">
                  <div>
                    <span className="font-bold text-slate-900">Date of Birth: </span>
                    <span>22/01/2007</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Gender: </span>
                    <span>Female</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Nationality: </span>
                    <span>Indian</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Hometown: </span>
                    <span>Palani</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-bold text-slate-900">Permanent Address: </span>
                    <span>Barathi Dasan Road, Dindigul Road, Palani</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900">Phone No.: </span>
                    <span>+91 7010995334</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="font-bold text-slate-900">Mobility: </span>
                    <span>Willing to relocate anywhere in India</span>
                  </div>
                </div>
              </div>

              {/* References */}
              <div className="mb-6">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-3 text-xs">
                  <span>👥 REFERENCES</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-800">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-bold text-slate-900 text-sm">Sathya T.</div>
                    <div className="text-slate-600">Assistant Professor</div>
                    <div className="text-slate-800 font-mono mt-1">Contact: 9698146506</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="font-bold text-slate-900 text-sm">Prakash S.</div>
                    <div className="text-slate-600">Head of the Department</div>
                    <div className="text-slate-800 font-mono mt-1">Contact: 9942650818</div>
                  </div>
                </div>
              </div>

              {/* Declaration */}
              <div className="mb-8 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-indigo-950 border-b border-indigo-900/30 pb-1 mb-3 text-xs">
                  <span>✍ DECLARATION</span>
                </div>
                <p className="text-slate-800 italic leading-relaxed mb-6">
                  "I hereby declare that the information provided above is true and correct to the best of my knowledge and belief."
                </p>
                <div className="flex justify-between items-end text-slate-800 font-medium">
                  <div>
                    <div>Place: Coimbatore</div>
                    <div className="mt-1">Date: {new Date().toLocaleDateString('en-GB')}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-900 text-sm font-serif">Thenmozhi R</div>
                    <div className="text-slate-600 text-[11px]">Name: Thenmozhi R</div>
                  </div>
                </div>
              </div>

              {/* Page Number */}
              <div className="pt-4 border-t border-slate-200 text-right text-[10px] text-slate-400 font-mono">
                Page 4 of 4 • Thenmozhi_R_Resume_Professional.docx
              </div>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
