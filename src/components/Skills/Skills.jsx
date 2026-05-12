import React from 'react';
import "./Skills.css"
import skillsArray from "./SkillsArray.js"
import SkillCard from './Skill_Card';
import FilterContainer from './Filter/FilterContainer.jsx';
import { useSelector } from 'react-redux';
import { selectFilteredDomains } from '../../store/slice1.js';

const Skills = () => {
    const filteredDomains = useSelector(selectFilteredDomains);

    const filteredArray = skillsArray.filter(val =>
        filteredDomains.includes(val.domain)
    );

    // Group skills by domain for the Bento layout
    const groupedSkills = filteredArray.reduce((acc, skill) => {
        if (!acc[skill.domain]) acc[skill.domain] = [];
        acc[skill.domain].push(skill);
        return acc;
    }, {});

    return (
        <section id="skills" className='relative w-full flex flex-col bg-slate-950 text-white overflow-hidden py-16 px-3 sm:px-4 md:px-12'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[140px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
                {/* Heading Section */}
                <div className="flex flex-col items-center md:items-start space-y-4">

                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">
                            Technical Skills
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg font-medium text-center md:text-left">
                        A comprehensive overview of my technical stack and proficiency across different domains.
                    </p>
                </div>

                {/* Filter Controls */}
                <div className="w-full flex justify-center md:justify-start">
                    <FilterContainer />
                </div>

                {/* Optimized Bento Grid of Categories */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                    {Object.entries(groupedSkills).map(([domain, skills], idx) => (
                        <div 
                            key={domain}
                            className={`${
                                skills.length >= 8 ? 'md:col-span-12' : 
                                skills.length >= 4 ? 'md:col-span-6' : 
                                'md:col-span-4'
                            } p-4 sm:p-6 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-4 md:space-y-6 group hover:border-cyan-500/30 transition-all duration-500`}
                        >
                            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                <h3 className="text-xl md:text-2xl font-black text-cyan-400 uppercase tracking-tight">{domain}</h3>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-950/50 px-3 py-1 rounded-full border border-white/5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                    {skills.length} Skills
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 md:gap-5 justify-center md:justify-start">
                                {skills.map((val) => (
                                    <SkillCard 
                                        key={val.id} 
                                        skill_logo={val.img} 
                                        level={val.level} 
                                        name={val.skill_name} 
                                        level_per={val.level_per} 
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
