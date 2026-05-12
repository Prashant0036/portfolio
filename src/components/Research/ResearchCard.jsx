import React, { useEffect, useRef, useState } from "react";
import assets from "../../assets/assets";

const ResearchCard = ({ title, date, link, type, details }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative flex flex-col md:flex-row md:items-center justify-between w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl px-6 py-5 gap-6 transition-all duration-700 overflow-hidden
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:border-purple-500/50 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] hover:-translate-y-1`}
    >
      {/* Decorative left gradient line */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Main Info */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-grow">
        {/* Icon */}
        <div className="hidden md:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>

        <div className="space-y-1 flex-grow">
          <div className="block">
            <h3 className="inline text-lg md:text-xl font-bold text-white transition-colors group-hover:text-purple-400 mr-3">
                {title}
            </h3>
            <span className="inline-block align-middle px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all">
                {type}
            </span>
          </div>
          {details && (
            <p className="text-sm font-medium text-slate-400 group-hover:text-slate-300 transition-colors">
              {details}
            </p>
          )}
        </div>
      </div>

      {/* Right Side Info & Action */}
      <div className="flex flex-col md:items-end justify-between gap-4 flex-shrink-0">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter bg-slate-950/50 px-3 py-1 rounded-lg border border-white/5">
          {date}
        </span>
        
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-600 text-white rounded-full text-xs font-bold shadow-lg transition-all active:scale-95 group/btn"
        >
          View {type === 'Patent' ? 'Patent' : 'Paper'}
          <img className="h-3 filter invert brightness-200 opacity-80 group-hover/btn:translate-x-1 transition-transform" src={assets.linkIcon} alt="link" />
        </a>
      </div>
    </div>
  );
};

export default ResearchCard;
