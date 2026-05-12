import React from 'react';
import certificateArray from "./CertificationArray";
import CertificateCard from "./CertificateCard";

const Certification = () => {
    return (
        <section id="certifications" className='relative w-full flex flex-col bg-slate-950 text-white overflow-hidden py-12 px-4 md:px-12'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] right-[-5%] w-[45%] h-[45%] bg-blue-900/20 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[20%] left-[-5%] w-[45%] h-[45%] bg-cyan-900/20 rounded-full blur-[140px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
                {/* Heading Section */}
                <div className="flex flex-col items-center md:items-start space-y-4">

                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg font-medium text-center md:text-left">
                        Professional milestones and specialized training verified by industry leaders.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {certificateArray.map((arr) => (
                        <CertificateCard
                            key={arr.id}
                            name={arr.name}
                            issuedBy={arr.issuedBy}
                            link={arr.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certification;