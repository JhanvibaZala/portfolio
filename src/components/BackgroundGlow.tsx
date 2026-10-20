export function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top Center Purple Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-700/15 rounded-full blur-[140px]" />

      {/* Mid Left Violet Glow */}
      <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-indigo-700/10 rounded-full blur-[130px]" />

      {/* Mid Right Fuchsia/Violet Glow */}
      <div className="absolute top-[65%] -right-32 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[150px]" />

      {/* Bottom Center Subtle Glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/15 rounded-full blur-[150px]" />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  );
}
