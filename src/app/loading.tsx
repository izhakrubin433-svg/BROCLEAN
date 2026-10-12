export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Logo placeholder */}
        <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center animate-pulse">
          <span className="text-white font-black text-2xl">B</span>
        </div>

        {/* Silver shimmer bar */}
        <div className="relative w-48 h-1 bg-silver-100 rounded-full overflow-hidden">
          <div
            className="absolute inset-y-0 w-1/2 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, #9ca3af, #d1d5db, #9ca3af, transparent)",
              animation: "shimmerLoad 1.5s ease-in-out infinite",
            }}
          />
        </div>

        <p className="text-gray-400 text-sm font-medium">Broclean</p>
      </div>

      <style>{`
        @keyframes shimmerLoad {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
