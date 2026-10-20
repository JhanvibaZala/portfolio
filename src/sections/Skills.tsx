import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBadge } from '../components/SkillBadge';
import { skillGroups } from '../data/skills';
import { Layout, Server, Database, Wrench, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Layout,
  Server,
  Database,
  Wrench,
};

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const shouldReduceMotion = useReducedMotion();

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredGroups =
    selectedFilter === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === selectedFilter);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="TECHNICAL CAPABILITIES"
          title="Skills calibrated for modern"
          gradientText="full-stack velocity."
          subtitle="A comprehensive overview of core technologies across client, server, and data architecture. Categorized cleanly without artificial percentage bars."
        />

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-950 font-semibold'
                    : 'bg-[#141224] text-slate-300 hover:text-white hover:bg-[#1e1b36] border border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filteredGroups.map((group, groupIdx) => {
            const IconComponent = iconMap[group.icon] || Sparkles;

            return (
              <motion.div
                key={group.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                className="rounded-2xl bg-[#0f0d1b] border border-purple-500/20 p-6 sm:p-7 shadow-xl shadow-purple-950/20 hover:border-purple-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Group Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{group.category}</h3>
                      <span className="text-[11px] text-purple-300/80 uppercase font-mono tracking-wider">
                        {group.skills.length} Core Technologies
                      </span>
                    </div>
                  </div>

                  {/* Group Description */}
                  <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Badges Array */}
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/[0.06]">
                  {group.skills.map((skill, sIdx) => (
                    <SkillBadge key={skill.name} skill={skill} index={sIdx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        </div>
    </section>
  );
}
