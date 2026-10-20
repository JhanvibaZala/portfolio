import { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import type { Project } from '../types';

interface ProjectsProps {
  onPlaceholderNotice: (type: 'github' | 'demo', projectName: string) => void;
}

export function Projects({ onPlaceholderNotice }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Frontend'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FEATURED PROJECTS"
          title="Engineered solutions with"
          gradientText="measurable purpose."
          subtitle="A selection of full-stack and frontend systems highlighting domain problems, architecture decisions, and custom interactive previews."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950 font-semibold'
                    : 'bg-[#141224] text-slate-300 hover:text-white hover:bg-[#1f1b38] border border-white/[0.06]'
                }`}
              >
                {cat} Projects {cat === 'All' && `(${projectsData.length})`}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setActiveProjectModal(p)}
              onPlaceholderNotice={onPlaceholderNotice}
            />
          ))}
        </div>

        {/* Modal for In-depth Case Study */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
          onPlaceholderNotice={onPlaceholderNotice}
        />
      </div>
    </section>
  );
}
