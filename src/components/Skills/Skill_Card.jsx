import { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgessBar";

const SkillCard = ({ skill_logo, level, name, level_per }) => {
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
      className={`flex flex-col justify-center items-center h-[11rem] w-[8.5rem] gap-3
        bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl transition-all 
        duration-700 transform cursor-pointer p-3 group
        hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="relative p-2 rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors">
        <img 
          className="h-12 w-12 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all" 
          src={skill_logo} 
          alt={name} 
        />
      </div>
      
      <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{name}</h3>
      
      <div className="w-full mt-auto">
        {isVisible && <ProgressBar level={level} level_per={level_per} />}
      </div>
    </div>
  );
};

export default SkillCard;

