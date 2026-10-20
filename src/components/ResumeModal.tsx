import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, FileText, CheckCircle2, Briefcase, GraduationCap, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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


const RESUME_PDF_URL = `${import.meta.env.BASE_URL}resume.pdf`;

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = RESUME_PDF_URL;
  link.download = "Jhanviba-Zala-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

const handlePrint = () => {
  window.open(RESUME_PDF_URL, "_blank", "noopener,noreferrer");
};


  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0e0c19] border border-purple-500/25 shadow-2xl shadow-purple-950/70 z-10 p-5 sm:p-8 custom-scrollbar text-slate-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 id="resume-title" className="text-lg font-bold text-white">
                  Resume Preview • Jhanviba Zala
                </h2>
                <span className="text-xs text-purple-300/80">MERN Stack Developer | Full-Stack Engineer</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1a172e] hover:bg-[#252042] border border-white/10 text-slate-200 transition-colors"
                title="Print or save as PDF"
              >
                <Printer className="w-4 h-4" /> Print / Save PDF
              </button>
              
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-600 hover:bg-purple-500 text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#151226] text-slate-400 hover:text-white hover:bg-purple-950/60 border border-white/10 transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Recruiter Placeholder Notice */}
          {/* <div className="mb-6 p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/25 flex items-start gap-3 text-xs text-purple-200">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-white">Notice for Recruiters & Jhanviba:</p>
              <p className="text-purple-200/80 mt-0.5">
                This digital resume snapshot reflects Jhanviba Zala's stack and experience at eSparkBiz Technologies. To attach an official downloadable PDF file, place your compiled PDF file at <code className="text-purple-300 bg-purple-900/60 px-1 py-0.5 rounded">public/resume.pdf</code>.
              </p>
            </div>
          </div> */}

          {/* Resume Document Content */}
          <div className="space-y-6 text-sm bg-[#120f22] p-6 sm:p-8 rounded-xl border border-white/[0.05]">
            {/* Header */}
            <div className="border-b border-white/[0.08] pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Jhanviba Zala</h1>
              <p className="text-purple-400 font-semibold mt-0.5 text-sm">
                Full-Stack Developer | React.js & Node.js Specialist
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 mt-3 font-mono">
                <span>Location: Ahmedabad, India</span>
                <span>•</span>
                <span>Email: jhanvibazala3@gmail.com</span>
                <span>•</span>
                <span>LinkedIn: linkedin.com/in/jhanviba-zala-cte-gecbvn-it-507061283</span>
                <span>•</span>
                <span>GitHub: github.com/JhanvibaZala</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-purple-300 mb-2">
                Professional Summary
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Full-Stack Developer with hands-on experience building performant, responsive web applications and reliable RESTful APIs. Adept in React.js, TypeScript, Node.js, NestJS, and relational database systems. Contributed to production-grade enterprise software including live CRM workflows with a focus on component architecture, data integrity, and clean code principles.
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-purple-300 mb-2.5 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-purple-400" /> Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="bg-[#18152b] p-2.5 rounded-lg border border-white/[0.05]">
                  <span className="font-semibold text-white block mb-1">Frontend:</span>
                  React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Component Architecture
                </div>
                <div className="bg-[#18152b] p-2.5 rounded-lg border border-white/[0.05]">
                  <span className="font-semibold text-white block mb-1">Backend:</span>
                  Node.js, Express.js, NestJS, RESTful APIs, JWT Authentication, Middleware Architecture
                </div>
                <div className="bg-[#18152b] p-2.5 rounded-lg border border-white/[0.05]">
                  <span className="font-semibold text-white block mb-1">Databases & ORM/ODM:</span>
                  PostgreSQL, MySQL, MongoDB, Prisma, Sequelize, Mongoose
                </div>
                <div className="bg-[#18152b] p-2.5 rounded-lg border border-white/[0.05]">
                  <span className="font-semibold text-white block mb-1">Tools & Workflows:</span>
                  Git, GitHub, Postman, Swagger / OpenAPI, Vite, Agile Development
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-purple-300 mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-purple-400" /> Work Experience
              </h3>
              <div className="bg-[#18152b] p-4 rounded-xl border border-purple-500/20 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">Junior Software Developer</h4>
                    <span className="text-xs text-purple-300 font-medium">eSparkBiz Technologies</span>
                  </div>
                  <span className="text-xs font-mono text-purple-400/90 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 w-fit">
                    Jan 2026 – Present 
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Contributed to key frontend and backend modules on a production CRM platform serving cross-functional client teams.
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Developed reusable React.js and TypeScript components for CRM customer accounts and contact management views.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Assisted in building and maintaining backend API endpoints using NestJS and PostgreSQL.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Conducted unit testing, resolved UI defects, and coordinated sprint deliverables with senior engineering peers.</span>
                  </li>
                </ul>
              </div>
              <br />
              <div className="bg-[#18152b] p-4 rounded-xl border border-purple-500/20 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">Software Developement Trainee</h4>
                    <span className="text-xs text-purple-300 font-medium">Tatvasoft</span>
                  </div>
                  <span className="text-xs font-mono text-purple-400/90 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 w-fit">
                    June 2025 – July 2025 
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Completed hands-on development of web application modules using Angular, .NET, and PostgreSQL, gaining experience in full-stack development and REST API integration.
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Developed web application features using Angular and TypeScript, building responsive and reusable UI components.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Gained hands-on experience with .NET and C# for backend development and REST API integration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Worked with PostgreSQL to understand database operations, data management, and full-stack application development.</span>
                  </li>
                </ul>
              </div>
              <br />
              <div className="bg-[#18152b] p-4 rounded-xl border border-purple-500/20 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-white">AI/ML Intern</h4>
                    <span className="text-xs text-purple-300 font-medium">Intel AI for manufacturing</span>
                  </div>
                  <span className="text-xs font-mono text-purple-400/90 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30 w-fit">
                    March 2025 – June 2025 
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    Developed an AI-powered packaging defect detection system using Python and YOLOv8 for real-time defect identification.
                </p>
                <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Applied Python and machine learning techniques to address manufacturing-related challenges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Implemented YOLOv8-based object detection for identifying packaging defects.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>Explored computer vision techniques to support automated quality inspection in manufacturing.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-bold text-purple-300 mb-2.5 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-purple-400" /> Education
              </h3>
              <div className="bg-[#18152b] p-3.5 rounded-xl border border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <div>
                  <h4 className="font-bold text-white">Bachelor of Engineering</h4>
                  <p className="text-slate-400">Government Engineering College Bhavnagar</p>
                  <p className="text-slate-400">Branch: IT | CGPA: 9.07</p>
                </div>
                <span className="font-mono text-slate-400 text-[11px]">[2022 – 2026]</span>
              </div>
            </div>
          </div>

          
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
