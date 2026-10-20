import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Sparkles, Layers } from 'lucide-react';
import type { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPlaceholderNotice: (type: 'github' | 'demo', projectName: string) => void;
}

export function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  // Handle ESC key
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f0d1b] border border-purple-500/25 shadow-2xl shadow-purple-950/60 z-10 custom-scrollbar"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-black/40 text-slate-300 hover:text-white hover:bg-purple-950/80 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Mockup Graphic */}
          <div className="relative">
            <ProjectMockup type={project.mockupType} />
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/30">
                  {project.category}
                </span>
                {project.badge && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {project.badge}
                  </span>
                )}
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-base text-purple-200/90 mt-1 font-medium">{project.tagline}</p>
            </div>

            {/* Problem & Solution */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#141126] border border-rose-500/15">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-300 mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-400" /> Problem Identified
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#141126] border border-emerald-500/15">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Engineering Solution
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Core Technical Features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#18152b] border border-purple-500/20 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Notice about placeholder links */}
            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-start gap-2.5 text-xs text-purple-200/80">
              <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-purple-300">Recruiter Note:</span> This is a showcase portfolio entry. Source code and live staging environments can be linked via the respective project repositories once publicly staged.
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  if (project.liveDemoUrl) {
                    window.open(
                      project.liveDemoUrl,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }

                }}
                disabled={!project.liveDemoUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all shadow-md shadow-purple-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo Preview
              </button>

              <button
                onClick={() => {
                  if (project.githubUrl) {
                    window.open(
                      project.githubUrl,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }

                }}
                disabled={!project.githubUrl}

                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-slate-200 bg-[#17142a] hover:bg-[#201c3b] border border-purple-500/20 hover:border-purple-400/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <GithubIcon className="w-4 h-4" /> View Source Code
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
