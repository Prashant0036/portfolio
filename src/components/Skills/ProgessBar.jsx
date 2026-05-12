import React, { useEffect, useState } from "react";

const ProgressBar = ({ level, level_per }) => {
  const [progress, setProgress] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(level_per);
    }, 100);
    return () => clearTimeout(timer);
  }, [level_per]);

  const getBarColor = () => {
    if (level.includes("🐉")) return "from-emerald-400 to-green-600 shadow-[0_0_10px_rgba(52,211,153,0.5)]";
    if (level.includes("🦅")) return "from-cyan-400 to-blue-600 shadow-[0_0_10px_rgba(34,211,238,0.5)]";
    if (level.includes("🐣")) return "from-yellow-300 to-orange-500 shadow-[0_0_10px_rgba(253,224,71,0.5)]";
    return "from-slate-400 to-slate-600";
  };

  return (
    <div className="w-full flex justify-center items-center flex-col px-4">
      <div className="w-full flex justify-center items-center mb-1.5 px-1 text-center">
        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-cyan-400/80">{level}</span>
      </div>

      {/* Animated Bar Container */}
      <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden border border-white/5">
        <div
          className={`h-full rounded-full transition-all duration-[2000ms] ease-out bg-gradient-to-r ${getBarColor()}`}
          style={{ width: progress }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

