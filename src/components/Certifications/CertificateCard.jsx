import React, { useEffect, useRef, useState } from "react";
import assets from "../../assets/assets";

const CertificateCard = ({ name, issuedBy, link }) => {
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
      className={`group relative flex flex-col items-center w-full max-w-[22rem] bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] px-8 py-5 space-y-3 transition-all duration-700 overflow-hidden
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:border-cyan-500/50 hover:shadow-[0_20px_40px_-15px_rgba(6,211,238,0.15)] hover:-translate-y-2`}
    >
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Icon/Illustration Container */}
      <div className="relative w-24 h-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-transparent group-hover:from-cyan-500/20 group-hover:to-cyan-900/10 border border-white/5 group-hover:border-cyan-500/30 transition-all duration-500 shadow-inner group-hover:scale-105 z-10">
        <img
          src={assets.certificate}
          className="h-14 w-14 filter brightness-200 opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:scale-110 relative z-20"
          alt="Certificate Icon"
        />
        {/* Glow behind icon */}
        <div className="absolute inset-0 bg-cyan-500/30 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full scale-50 group-hover:scale-100 z-0"></div>
      </div>

      {/* Content */}
      <div className="text-center space-y-1 flex-grow">
        <h3 className="text-lg font-black text-white leading-tight transition-colors group-hover:text-cyan-400">
          {name}
        </h3>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          {issuedBy}
        </p>
      </div>

      {/* Action Button */}
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-cyan-500 text-slate-950 rounded-full text-[10px] font-black shadow-lg hover:bg-cyan-400 transition-all active:scale-95"
      >
        View Certificate
        <img className="h-2.5 filter invert opacity-80" src={assets.linkIcon} alt="link" />
      </a>
    </div>
  );
};

export default CertificateCard;