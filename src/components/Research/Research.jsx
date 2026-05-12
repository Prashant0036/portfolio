import React from 'react';
import researchArray from "./ResearchArray";
import ResearchCard from "./ResearchCard";

const Research = () => {
    return (
        <section id="research" className='relative w-full flex flex-col bg-slate-950 text-white overflow-hidden py-12 px-4 md:px-12'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] left-[-5%] w-[45%] h-[45%] bg-purple-900/20 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[20%] right-[-5%] w-[45%] h-[45%] bg-blue-900/20 rounded-full blur-[140px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
                {/* Heading Section */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-blue-600">
                            Research & Patents
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg font-medium text-center md:text-left leading-relaxed">
                        Pushing the boundaries of technology through academic research and intellectual property development.
                    </p>
                </div>

                {/* List Container */}
                <div className="flex flex-col gap-6 md:gap-8">
                    {researchArray.map((paper) => (
                        <ResearchCard
                            key={paper.id}
                            title={paper.title}
                            date={paper.date}
                            link={paper.link}
                            type={paper.type}
                            details={paper.details}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Research;
