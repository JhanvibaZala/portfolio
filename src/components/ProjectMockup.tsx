import {
  CheckCircle2,
  Clock,
  TrendingUp,
  MapPin,
  Calendar,
  ShieldCheck,
  CreditCard,
  UtensilsCrossed,
} from 'lucide-react';

interface ProjectMockupProps {
  type: 'taskora' | 'piggypilot' | 'tiffinwallah' | 'wanderlust' | 'eventhub';
}

export function ProjectMockup({ type }: ProjectMockupProps) {
  return (
    <div className="w-full h-56 sm:h-64 rounded-t-2xl bg-gradient-to-b from-[#131122] to-[#0d0c18] border-b border-purple-500/15 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Window Controls & Path header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-purple-300/70 truncate">
            {type === 'taskora' && 'taskora.app/workspace/board'}
            {type === 'piggypilot' && 'piggypilot.io/analytics/summary'}
            {type === 'tiffinwallah' && 'tiffinwallah.com/meals/weekly-plan'}
            {type === 'wanderlust' && 'wanderlust.io/itineraries/japan-autumn'}
            {type === 'eventhub' && 'eventhub.net/tickets/rsvp-pass'}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-[10px] text-purple-400/80 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Preview
        </div>
      </div>

      {/* Mockup Body Content depending on project */}
      <div className="flex-1 pt-3 flex flex-col justify-center">
        {type === 'taskora' && (
          <div className="grid grid-cols-3 gap-2 h-full items-start">
            {/* Column 1 */}
            <div className="rounded-lg bg-[#18152b] border border-white/[0.05] p-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 pb-1 border-b border-white/[0.05]">
                <span>To Do</span>
                <span className="text-[10px] px-1 rounded bg-purple-950 text-purple-300">2</span>
              </div>
              <div className="bg-[#201c38] p-1.5 rounded border border-purple-500/20 text-[10px]">
                <p className="font-medium text-slate-200">Role-based Auth</p>
                <div className="flex items-center justify-between mt-1 text-[9px] text-purple-300/80">
                  <span className="flex items-center gap-0.5"><ShieldCheck className="w-2.5 h-2.5" /> High</span>
                  <span className="bg-purple-900/40 px-1 rounded">JWT</span>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="rounded-lg bg-[#18152b] border border-purple-500/20 p-2 flex flex-col gap-1.5 shadow-sm shadow-purple-950">
              <div className="flex items-center justify-between text-[11px] font-semibold text-purple-300 pb-1 border-b border-white/[0.05]">
                <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5 text-amber-400" /> In Progress</span>
                <span className="text-[10px] px-1 rounded bg-purple-900 text-purple-200">1</span>
              </div>
              <div className="bg-[#231e3d] p-1.5 rounded border border-purple-400/30 text-[10px]">
                <p className="font-medium text-white">Prisma Schema v2</p>
                <div className="w-full bg-purple-950/80 rounded-full h-1 mt-1.5 overflow-hidden">
                  <div className="bg-purple-400 h-1 rounded-full w-3/4" />
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="rounded-lg bg-[#18152b] border border-white/[0.05] p-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-400 pb-1 border-b border-white/[0.05]">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-2.5 h-2.5" /> Done</span>
                <span className="text-[10px] px-1 rounded bg-emerald-950/60 text-emerald-300">4</span>
              </div>
              <div className="bg-[#201c38] p-1.5 rounded border border-white/[0.05] text-[10px]">
                <p className="font-medium text-slate-300 line-through opacity-75">Workspace UI</p>
                <span className="text-[9px] text-emerald-400/90 font-mono">Sprint 1 • Passed</span>
              </div>
            </div>
          </div>
        )}

        {type === 'piggypilot' && (
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#19162c] p-2.5 rounded-xl border border-purple-500/25">
                <span className="text-[10px] text-purple-300/80 font-medium">Net Balance</span>
                <p className="text-base sm:text-lg font-bold text-white tracking-tight">$14,850.00</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +8.4% this month
                </div>
              </div>
              <div className="bg-[#19162c] p-2.5 rounded-xl border border-white/[0.07] flex flex-col justify-between">
                <span className="text-[10px] text-slate-400">Monthly Spending</span>
                <div className="flex items-end gap-1.5 h-8 mt-1">
                  <div className="flex-1 bg-purple-900/60 rounded-t h-4" />
                  <div className="flex-1 bg-purple-800/80 rounded-t h-6" />
                  <div className="flex-1 bg-purple-600 rounded-t h-7" />
                  <div className="flex-1 bg-purple-400 rounded-t h-5" />
                  <div className="flex-1 bg-indigo-500 rounded-t h-8" />
                </div>
              </div>
            </div>

            <div className="bg-[#18152b] px-3 py-1.5 rounded-lg border border-white/[0.05] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-slate-200 text-[11px]">AWS Cloud Services</span>
              </div>
              <span className="text-rose-400 font-mono text-[11px] font-semibold">-$64.20</span>
            </div>
          </div>
        )}

        {type === 'tiffinwallah' && (
          <div className="space-y-2">
            <div className="bg-[#1b172f] border border-purple-500/25 p-2.5 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Daily Standard Meal</h4>
                  <p className="text-[10px] text-purple-300/80">3 Rotis, Dal, Paneer Sabzi, Rice, Salad</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                Pure Veg
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="bg-[#161426] p-1.5 rounded-lg border border-white/[0.05]">
                <span className="text-[9px] text-slate-400 block">Plan</span>
                <span className="text-[11px] font-bold text-purple-300">Monthly</span>
              </div>
              <div className="bg-[#161426] p-1.5 rounded-lg border border-white/[0.05]">
                <span className="text-[9px] text-slate-400 block">Delivery</span>
                <span className="text-[11px] font-bold text-emerald-400">12:30 PM</span>
              </div>
              <div className="bg-[#161426] p-1.5 rounded-lg border border-white/[0.05]">
                <span className="text-[9px] text-slate-400 block">Status</span>
                <span className="text-[11px] font-bold text-amber-300">Dispatched</span>
              </div>
            </div>
          </div>
        )}

        {type === 'wanderlust' && (
          <div className="space-y-2">
            <div className="bg-[#1b1730] border border-purple-500/25 p-2.5 rounded-xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  Kyoto & Osaka Autumn Tour
                </div>
                <span className="text-[10px] text-slate-400">5 Days • 8 Curated Landmarks</span>
              </div>
              <span className="text-[11px] font-mono font-bold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                Est: $850
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto text-[10px] py-1">
              <div className="flex-1 bg-[#161327] px-2 py-1.5 rounded-lg border border-white/[0.05] whitespace-nowrap">
                <span className="text-purple-400 font-semibold">Day 1</span> Bamboo Grove
              </div>
              <div className="flex-1 bg-[#161327] px-2 py-1.5 rounded-lg border border-white/[0.05] whitespace-nowrap">
                <span className="text-purple-400 font-semibold">Day 2</span> Fushimi Inari
              </div>
              <div className="flex-1 bg-[#161327] px-2 py-1.5 rounded-lg border border-white/[0.05] whitespace-nowrap">
                <span className="text-purple-400 font-semibold">Day 3</span> Dotonbori
              </div>
            </div>
          </div>
        )}

        {type === 'eventhub' && (
          <div className="space-y-2">
            <div className="bg-[#1b1730] border border-purple-500/25 p-2.5 rounded-xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 text-[10px] text-purple-400 font-semibold">
                  <Calendar className="w-3 h-3" /> OCT 24 • HYBRID
                </div>
                <h4 className="text-xs font-semibold text-white mt-0.5">React Ecosystem Summit</h4>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded font-medium">
                  Confirmed RSVP
                </span>
              </div>
            </div>

            <div className="bg-[#161327] p-2 rounded-lg border border-white/[0.05] flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Seats Reserved:</span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-white font-semibold">184 / 200</span>
                <span className="text-[9px] text-amber-400 font-medium">Almost Full</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Decorative ambient backdrop */}
      <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
    </div>
  );
}
