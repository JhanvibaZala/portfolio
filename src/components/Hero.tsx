import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Terminal,
  Cpu,
  Layers,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
  onPlaceholderNotice: (type: 'github' | 'linkedin' | 'email') => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-gradient-to-tr from-purple-700/20 via-indigo-600/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top Row: Small introductory label + Availability Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-purple-500/30 bg-purple-950/40 text-purple-300 shadow-sm shadow-purple-950/40">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>HELLO, I'M JHANVIBA ZALA</span>
              </div>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#131024] border border-emerald-500/30 text-slate-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 font-semibold">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              Building{' '}
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                thoughtful digital
              </span>{' '}
              experiences.
            </motion.h1>

            {/* Compact role label */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="inline-block px-3.5 py-1 rounded-lg bg-white/[0.04] border border-purple-400/20 text-purple-200 text-xs sm:text-sm font-mono font-medium tracking-wide"
            >
              MERN Stack Developer | Full-Stack Engineer
            </motion.div>

            {/* Supporting text */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300/85 leading-relaxed max-w-2xl"
            >
              I'm a Full-Stack Developer passionate about creating responsive interfaces, reliable APIs, and meaningful web applications.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Explore My Work Button */}
              <button
                type="button"
                onClick={handleScrollToProjects}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-300 shadow-lg shadow-purple-950/70 hover:shadow-purple-700/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Download Resume Button */}
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-[#161329] hover:bg-[#201b3b] border border-purple-500/25 hover:border-purple-400/45 transition-all duration-200 shadow-md shadow-purple-950/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </button>
            </motion.div>

            {/* Social pills */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 pt-4 text-slate-400"
            >
              <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">Connect:</span>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://github.com/JhanvibaZala/',
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="p-2 rounded-lg bg-[#141224] border border-white/[0.08] text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#1d1933] transition-colors"
                title="https://github.com/JhanvibaZala"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://www.linkedin.com/in/jhanviba-zala-cte-gecbvn-it-507061283',
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="p-2 rounded-lg bg-[#141224] border border-white/[0.08] text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#1d1933] transition-colors"
                title="LinkedIn (Placeholder link)"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:jhanvibazala3@gmail.com";
                }}
                className="p-2 rounded-lg bg-[#141224] border border-white/[0.08] text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#1d1933] transition-colors"
                title="Email (Placeholder link)"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Sleek Abstract Developer Architecture Terminal / Visual Element */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-violet-500/30 rounded-2xl blur-xl opacity-75" />

              {/* Terminal Window Card */}
              <div className="relative rounded-2xl bg-[#0f0d1c] border border-purple-500/25 shadow-2xl shadow-purple-950/60 overflow-hidden">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#151229] border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    <span className="ml-2 font-mono text-xs text-purple-300/80 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                      jhanviba.profile.ts
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/90 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    compiled
                  </span>
                </div>

                {/* Code body */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
                  <div className="text-slate-400">
                    <span className="text-purple-400">const</span> developer = {'{'}
                  </div>

                  <div className="pl-4 space-y-1.5 text-slate-300">
                    <div>
                      <span className="text-slate-400">name:</span> <span className="text-violet-300">"Jhanviba Zala"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">focus:</span> <span className="text-violet-300">"Full-Stack Engineering"</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">clientTier:</span>{' '}
                      <span className="text-indigo-300">["React.js", "TypeScript", "Tailwind CSS"]</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">serviceTier:</span>{' '}
                      <span className="text-indigo-300">["Node.js", "NestJS", "Express.js"]</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">dataTier:</span>{' '}
                      <span className="text-indigo-300">["PostgreSQL", "MySQL", "MongoDB"]</span>,
                    </div>
                    <div>
                      <span className="text-slate-400">methodology:</span>{' '}
                      <span className="text-emerald-300">"Clean Code & Resilient APIs"</span>,
                    </div>
                  </div>

                  <div className="text-slate-400">{'}'};</div>

                  {/* Live Status Sub-card */}
                  <div className="pt-3 border-t border-white/[0.08] space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                        <Cpu className="w-3.5 h-3.5 text-purple-400" /> Current Production Work
                      </span>
                      <span className="text-emerald-400 font-mono text-[10px]">Active</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#181430] border border-purple-500/20 text-[11px] text-slate-300 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">eSparkBiz Technologies</p>
                        <p className="text-[10px] text-purple-300/80">Enterprise CRM Module Development</p>
                      </div>
                      <Layers className="w-4 h-4 text-purple-400 shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="px-4 py-2 bg-[#120f24] border-t border-white/[0.04] flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>UTF-8</span>
                  <span className="text-purple-400 font-medium">React 19 • TypeScript • Tailwind</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
