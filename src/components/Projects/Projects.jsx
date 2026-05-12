import React from 'react';
import "./Projects.css"
import ProjectCard from './ProjectCard';
import projectArray from './projectArray';

const Projects = () => {
    return (
        <section id='projects' className='relative w-full flex flex-col bg-slate-950 text-white overflow-hidden py-12 px-4 md:px-12'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[160px]"></div>
                <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[160px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
                {/* Heading Section */}
                <div className="flex flex-col items-center md:items-start space-y-4">

                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">
                            Featured Projects
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg font-medium text-center md:text-left">
                        Deep dive into my recent engineering projects, ranging from AI applications to full-stack platforms.
                    </p>
                </div>

                {/* Uniform Grid - Fits all screens cleanly */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectArray.map((obj) => (
                        <div key={obj.id} className="h-full">
                            <ProjectCard
                                name={obj.name}
                                date={obj.date}
                                link={obj.link}
                                github={obj.gitHub}
                                screenshot={obj.screenshot}
                                about={obj.about}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
