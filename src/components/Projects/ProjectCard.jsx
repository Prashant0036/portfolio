import assets from "../../assets/assets";

const ProjectCard = ({ name, date, link, github, screenshot, about }) => {
  return (
    <div
      className="group relative flex flex-col h-full w-full bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
    >
      {/* Date Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-md border border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-cyan-400">
          {date}
        </span>
      </div>

      {/* Screenshot Section - Reduced height */}
      <div className="relative h-40 md:h-48 overflow-hidden bg-slate-950/50">
        <img
          src={screenshot}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Section - Compact padding */}
      <div className="flex flex-col flex-grow p-4 md:p-5 space-y-3">
        <h3 className="text-lg font-black text-white leading-tight group-hover:text-cyan-400 transition-colors">
          {name}
        </h3>

        <p className="text-xs md:text-sm font-medium text-slate-400 line-clamp-3">
          {about}
        </p>

        {/* Action Buttons - Equal width */}
        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-cyan-500 text-slate-950 rounded-xl text-[10px] md:text-xs font-black shadow-lg hover:bg-cyan-400 transition-all"
          >
            Live Demo
            <img className="h-3 filter invert opacity-80" src={assets.linkIcon} alt="link" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={github}
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-800 text-slate-200 border border-white/10 rounded-xl text-[10px] md:text-xs font-black hover:bg-slate-700 hover:text-white transition-all"
          >
            GitHub
            <img className="h-4 filter invert opacity-80" src={assets.github_logo} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;