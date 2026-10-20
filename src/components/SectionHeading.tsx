import { motion, useReducedMotion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  label: string;
  title: string;
  gradientText?: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  gradientText,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'} ${className}`}
    >
      {/* Category Pill Tag */}
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-purple-500/25 bg-purple-950/40 text-purple-300 shadow-sm shadow-purple-950/40 ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
        <span>{label}</span>
      </div>

      {/* Main Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
        {title}{' '}
        {gradientText && (
          <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
            {gradientText}
          </span>
        )}
      </h2>

      {/* Subtitle Description */}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
