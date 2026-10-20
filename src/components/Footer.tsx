import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/15 bg-[#07060c] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-2">
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-bold text-lg text-white group"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs font-black">
                J
              </div>
              <span className="group-hover:text-purple-300 transition-colors">Jhanviba Zala</span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer crafting intuitive, high-performance web applications with React.js, TypeScript, and Node.js.
            </p>
          </div>

          {/* Quick links & socials */}
          <div className="md:col-span-6 flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  window.open(
                    'https://github.com/JhanvibaZala/',
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
                className="p-2.5 rounded-xl bg-[#131122] border border-white/[0.08] text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#1a172e] transition-colors"
                title="GitHub"
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
                className="p-2.5 rounded-xl bg-[#131122] border border-white/[0.08] text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#1a172e] transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  window.location.href = "mailto:jhanvibazala3@gmail.com";
                }}
                className="p-2.5 rounded-xl bg-[#131122] border border-white/[0.08] text-slate-300 hover:text-white hover:border-purple-400/40 hover:bg-[#1a172e] transition-colors"
                title="Email"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToTop}
                className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors ml-2"
                title="Scroll back to top"
                aria-label="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

           
          </div>
        </div>
      </div>
    </footer>
  );
}
