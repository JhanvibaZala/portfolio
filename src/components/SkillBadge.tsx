import { motion, useReducedMotion } from 'motion/react';
import type { SkillItem } from '../types';

interface SkillBadgeProps {
  skill: SkillItem;
  index?: number;
}

export function SkillBadge({ skill, index = 0 }: SkillBadgeProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
      whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
      className="group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141224]/80 border border-purple-500/15 hover:border-purple-400/40 hover:bg-[#1a1730] transition-colors duration-200 shadow-sm shadow-purple-950/20"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-purple-300 transition-colors" />
      <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
        {skill.name}
      </span>
      {skill.tag && (
        <span className="ml-1 text-[10px] uppercase font-semibold tracking-wider text-purple-300/70 bg-purple-900/30 px-1.5 py-0.5 rounded border border-purple-500/20">
          {skill.tag}
        </span>
      )}
    </motion.div>
  );
}
