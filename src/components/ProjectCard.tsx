import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, ChevronRight, Sparkles } from 'lucide-react';
import type { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  onPlaceholderNotice: (type: 'github' | 'demo', projectName: string) => void;
}

export function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-2xl bg-[#0f0d1a]/90 border border-purple-500/15 hover:border-purple-400/40 transition-all duration-300 flex flex-col overflow-hidden shadow-lg shadow-purple-950/20 hover:shadow-purple-900/25 relative"
    >
      {/* Top Graphic Mockup */}
      <div
        onClick={() => onSelect(project)}
        className="cursor-pointer relative overflow-hidden group/mockup"
        role="button"
        tabIndex={0}
        aria-label={`Open details for ${project.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(project);
          }
        }}
      >
        <ProjectMockup type={project.mockupType} />
        <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover/mockup:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="text-xs font-semibold text-white bg-black/75 px-3 py-1.5 rounded-full border border-purple-400/40 flex items-center gap-1.5 shadow-lg">
            <span>View Architecture</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Header Badges */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400 bg-purple-950/50 px-2.5 py-0.5 rounded-full border border-purple-500/20">
              {project.category}
            </span>
            {project.badge && (
              <span className="text-[11px] font-medium text-indigo-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                {project.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-sm text-purple-200/80 mt-1 font-medium leading-snug">
            {project.tagline}
          </p>

          {/* Problem statement */}
          <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
            <span className="text-slate-300 font-semibold">Problem:</span> {project.problem}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161326] text-slate-300 border border-white/[0.07]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-purple-950/40 text-purple-300 border border-purple-500/20">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
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
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-purple-600/80 hover:bg-purple-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              title="Launch Live Demo (Sample Placeholder)"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </button>

            <button
              type="button"
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
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-[#171428] hover:bg-[#201c38] border border-white/10 hover:border-purple-400/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              title="View Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="text-xs font-medium text-purple-300 hover:text-white flex items-center gap-0.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 rounded px-1"
          >
            <span>Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
