import { motion, useReducedMotion } from 'motion/react';
import { SectionHeading } from '../components/SectionHeading';
import { Layout, Server, Database, Sparkles, MapPin } from 'lucide-react';

export function About() {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      icon: Server,
      title: 'Backend & RESTful Services',
      description:
        'Building secure backend services and API architectures with Node.js, Express, and NestJS, implementing authentication and error handling.',
    },
    {
      icon: Layout,
      title: 'Frontend Engineering',
      description:
        'Translating designs into responsive, accessible React applications. Focused on state management, reusable components, and polished interactions.',
    },
    {
      icon: Database,
      title: 'Data Modeling & Persistence',
      description:
        'Working with relational databases like PostgreSQL and MySQL alongside MongoDB, designing normalized schemas and using modern ORMs like Prisma.',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="ABOUT ME"
          title="Bridging design intuition with"
          gradientText="reliable engineering."
          subtitle="A recruiter-friendly overview of my engineering philosophy, technical background, and approach to building modern web software."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0d1b] border border-purple-500/20 shadow-xl shadow-purple-950/20 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Passionate About Clean, Thoughtful Code</span>
              </h3>

              <p>
                I'm <strong className="text-white font-semibold">Jhanviba Zala</strong>, a Full-Stack Developer driven by the challenge of turning complex operational problems into intuitive, reliable digital solutions.
              </p>

              <p>
                My development journey centers around building modern web interfaces with <span className="text-purple-300 font-medium">React.js</span> and <span className="text-purple-300 font-medium">TypeScript</span>, while ensuring the underlying server layers—powered by <span className="text-purple-300 font-medium">Node.js</span>, <span className="text-purple-300 font-medium">NestJS</span>, and <span className="text-purple-300 font-medium">PostgreSQL</span>—are resilient, performant, and secure.
              </p>

              <p>
                Through my work on production systems such as enterprise CRM tools at <span className="text-purple-300 font-medium">eSparkBiz Technologies</span>, I have gained practical experience developing scalable components, integrating authenticated endpoints, and collaborating closely with engineering teams in agile sprints.
              </p>

              <p>
                I believe that good software is not just about what is visible on the screen, but about writing code that fellow engineers can read, maintain, and extend with confidence.
              </p>

              {/* Recruiter Quick Details Box */}
              <div className="pt-4 border-t border-white/[0.08] grid sm:grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Location: <strong className="text-slate-200">Ahmedabad, India</strong></span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Work Authorization: <strong className="text-slate-200">Ready to hire</strong></span>
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* Core Pillars 2x2 Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {corePillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-[#120f24] border border-purple-500/15 hover:border-purple-400/35 transition-all duration-200 shadow-md shadow-purple-950/20 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-500/30 flex items-center justify-center text-purple-300 mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
