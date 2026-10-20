import { motion, AnimatePresence } from 'motion/react';
import { Info, X } from 'lucide-react';

export interface PlaceholderNotice {
  isOpen: boolean;
  title: string;
  message: string;
  filePath: string;
}

interface PlaceholderToastProps {
  notice: PlaceholderNotice;
  onClose: () => void;
}

export function PlaceholderToast({ notice, onClose }: PlaceholderToastProps) {
  return (
    <AnimatePresence>
      {notice.isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100vw-3rem)] p-4 rounded-2xl bg-[#110f22] border border-purple-500/40 shadow-2xl shadow-purple-950/80 text-white"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
              <Info className="w-4 h-4 text-purple-400" />
            </div>

            <div className="flex-1 space-y-1 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-purple-300">{notice.title}</span>
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Dismiss notice"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-slate-300 leading-relaxed">{notice.message}</p>
              <div className="pt-1.5 flex items-center gap-1 font-mono text-[10px] text-purple-400/90">
                <span>Configure in:</span>
                <code className="bg-[#1c1836] px-1.5 py-0.5 rounded border border-purple-500/20 text-purple-200">
                  {notice.filePath}
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
