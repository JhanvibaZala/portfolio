import { motion, useReducedMotion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="CAREER TRAJECTORY"
          title="Professional experience &"
          gradientText="engineering background."
          subtitle="A transparent record of software development roles, production project contributions, and foundational coursework."
        />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((item, index) => {
            const isWork = item.type === 'Employment';

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative pl-6 sm:pl-10"
              >
                {/* Node icon on timeline border */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0f0d1b] border-2 border-purple-500 flex items-center justify-center text-purple-300 shadow-md shadow-purple-950">
                  {isWork ? <Briefcase className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5" />}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0d1b] border border-purple-500/20 shadow-xl shadow-purple-950/20 space-y-5">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30">
                          {item.badge}
                        </span>
                        {item.isCurrent && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{item.role}</h3>
                      <h4 className="text-sm sm:text-base font-semibold text-purple-300 mt-0.5">
                        {item.company}
                      </h4>
                    </div>

                    <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                      <div className="flex items-center sm:justify-end gap-1.5 text-purple-300/90 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>

                  {/* Contributions List */}
                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> Key Responsibilities & Contributions
                    </h5>
                    <ul className="space-y-2">
                      {item.contributions.map((contribution, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/90">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#161328] border border-white/[0.08] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
