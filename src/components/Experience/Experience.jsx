import React from 'react';
import experienceArray from './experienceArray';
import BrandShowcase from './BrandShowcase';


const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Experience = () => {
    return (
        <section id='experience' className='relative w-full flex flex-col bg-slate-950 text-white overflow-hidden py-12 px-4 md:px-12'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[160px]"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[160px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
                {/* Heading Section */}
                <div className="flex flex-col items-center md:items-start space-y-4">

                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-indigo-600">
                            Work Experience
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg font-medium text-center md:text-left">
                        My professional journey and the roles that have shaped my expertise.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                    {experienceArray.map((exp) => (
                        <div key={exp.id} className="relative pl-8 md:pl-12 group">
                            {/* Timeline Node */}
                            <div className="absolute w-6 h-6 bg-slate-900 border border-slate-700 rounded-full -left-[12.5px] top-1.5 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-900/30 transition-all duration-300">
                                <div className="w-2 h-2 bg-slate-600 rounded-full group-hover:bg-purple-400 transition-all duration-300"></div>
                            </div>

                            {/* Content Card */}
                            <div className="bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-slate-900/80 backdrop-blur-sm shadow-xl">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-2 text-lg font-medium text-slate-300">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                {exp.logo ? (
                                                    <img src={exp.logo} alt={exp.company} className="h-6 w-auto object-contain rounded-sm" />
                                                ) : (
                                                    <BriefcaseIcon />
                                                )}
                                                <span>{exp.company}</span>
                                            </div>
                                            <span className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-400 ml-2">{exp.type}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-sm text-slate-400 space-y-2 md:items-end md:mt-1">
                                        <div className="flex items-center gap-2">
                                            <CalendarIcon />
                                            <span>{exp.date} • {exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <LocationIcon />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {exp.description && (
                                    <p className="text-slate-400 mt-4 mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>
                                )}

                                {(!exp.description && exp.skills && exp.skills.length > 0) && (
                                    <div className="mt-6"></div>
                                )}

                                {exp.skills && exp.skills.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-950/80 border border-white/5 rounded-xl text-xs font-medium text-purple-300/80 hover:text-purple-300 hover:border-purple-500/30 transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Brand Showcase */}
                <BrandShowcase />
            </div>

        </section>
    );
};

export default Experience;
