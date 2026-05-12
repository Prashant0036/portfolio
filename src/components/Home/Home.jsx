import React from 'react';
import "./Home.css"
import assets from '../../assets/assets';

const Home = () => {
    return (
        <section id="home" className='relative min-h-screen w-full flex flex-col bg-slate-950 text-white overflow-x-hidden'>
            {/* Isolated Background Container to prevent horizontal overflow without breaking sticky items */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/30 rounded-full blur-[140px] z-0 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[140px] z-0"></div>
            </div>

            {/* Header / Navbar */}
            <header className="sticky top-0 z-50 w-full bg-slate-950/60 backdrop-blur-xl border-b border-white/5 py-3 md:py-4">
                <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-center min-h-[40px]">
                    {/* Logo - Flush left/top completely */}
                    <div className="absolute left-0 top-[-8px] md:top-[-12px]">
                        <img
                            className='w-12 md:w-20 h-auto object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]'
                            src={assets.monkey1}
                            alt='logo'
                        />
                    </div>

                    {/* Centered Navigation for All Screens */}
                    <nav className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12">
                        <a href='#skills' className='text-xs sm:text-sm md:text-base font-bold text-gray-400 hover:text-cyan-400 transition-all'>Skills</a>
                        <a href='#experience' className='text-xs sm:text-sm md:text-base font-bold text-gray-400 hover:text-cyan-400 transition-all'>Experience</a>
                        <a href='#projects' className='text-xs sm:text-sm md:text-base font-bold text-gray-400 hover:text-cyan-400 transition-all'>Projects</a>
                        <a href='#certifications' className='text-xs sm:text-sm md:text-base font-bold text-gray-400 hover:text-cyan-400 transition-all'>
                            <span className="sm:hidden">Certs</span>
                            <span className="hidden sm:inline">Certifications</span>
                        </a>
                        
                        {/* Dropdown for 'Other' */}
                        <div className="relative group/other">
                            <button className='flex items-center gap-1 text-xs sm:text-sm md:text-base font-bold text-gray-400 hover:text-cyan-400 transition-all cursor-pointer'>
                                Other
                                <svg className="w-3 h-3 transition-transform group-hover/other:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/other:opacity-100 group-hover/other:visible transition-all duration-300">
                                <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[140px]">
                                    <a href='#research' className='block px-4 py-2.5 text-sm font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all'>Research</a>
                                    <a href='#gallery' className='block px-4 py-2.5 text-sm font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-all'>Gallery</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Main Content - Bento Grid Layout */}
            <main className="relative z-10 flex-grow grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-12 py-8 max-w-7xl mx-auto w-full md:items-stretch items-center">

                {/* Main Hero Card (Large) */}
                <div className="md:col-span-8 flex flex-col justify-center p-8 md:p-10 rounded-[2rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-4 md:space-y-6 items-center md:items-start text-center md:text-left">
                    <div className="space-y-2 md:space-y-4">

                        <h2 className="text-2xl md:text-4xl font-bold text-slate-400 tracking-tight">Hey, I'm</h2>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600 drop-shadow-sm">
                                Prashant Saraswat
                            </span>
                        </h1>
                    </div>

                    <p className="text-base md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                        Full-stack developer <span className="text-cyan-400">solving complex problems</span> through programming and bringing innovative ideas to life.
                    </p>

                    <div className="flex flex-wrap gap-4 md:gap-5 pt-2 justify-center md:justify-start">
                        <a href='https://wa.me/9084648414' target='_blank' rel="noreferrer" className="group">
                            <button className="px-6 md:px-7 py-2 md:py-2.5 text-xl md:text-2xl font-black rounded-2xl bg-white text-slate-950 shadow-xl group-hover:bg-cyan-400 group-hover:scale-105 transition-all cursor-pointer">
                                Hire Me
                            </button>
                        </a>
                        <a href='https://drive.google.com/drive/folders/1ooCuQV4u3ACzoA5AYKlMJHGN0iEYYyEA?usp=sharing' target='_blank' rel="noreferrer" className="group">
                            <button className="px-6 md:px-7 py-2 md:py-2.5 text-xl md:text-2xl font-black rounded-2xl border-2 border-slate-700 bg-slate-800/40 backdrop-blur-md group-hover:border-cyan-500 group-hover:text-cyan-400 group-hover:scale-105 transition-all cursor-pointer">
                                Resume
                            </button>
                        </a>
                    </div>
                </div>

                {/* Profile Image Card */}
                <div className="md:col-span-4 flex items-center justify-center p-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-slate-800/50 backdrop-blur-xl overflow-hidden group h-full">
                    <div className="relative w-full h-full max-w-[300px] md:max-w-none rounded-3xl overflow-hidden border-2 border-white/5 group-hover:border-cyan-400/50 transition-colors shadow-2xl">
                        <img
                            src={assets.PP_Formal_bg}
                            alt='Prashant Saraswat'
                            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* Social Bento Card */}
                <div className="md:col-span-6 flex flex-wrap items-center justify-center gap-4 md:gap-5 p-6 md:p-8 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-xl">
                    {[
                        { url: 'https://github.com/Prashant0036', img: assets.github_logo },
                        { url: 'https://leetcode.com/u/prashant_saraswat/', img: assets.leetcode_logo },
                        { url: 'https://www.hackerrank.com/profile/prashantsaraswa4', img: assets.Hckrnk },
                        { url: 'https://www.linkedin.com/in/prashantsaraswat036/', img: assets.linkedIn_logo },
                        { url: 'https://x.com/PrashantS036', img: assets.x_icon },
                        { url: 'https://wa.me/9084648414', img: assets.whatsapp },
                        { url: 'https://www.instagram.com/prashant__saraswat/', img: assets.instagramPng },
                        { url: 'https://www.geeksforgeeks.org/user/prashantsaraswat036/', img: assets.gfg },
                        { url: 'mailto:prashantsaraswat036@gmail.com', img: assets.gmail }
                    ].map((platform, index) => (
                        <a key={index} href={platform.url} target='_blank' rel="noreferrer" className="group">
                            <img
                                className='w-12 h-12 md:w-14 md:h-14 p-2 md:p-3 rounded-2xl bg-slate-800 border border-slate-700 group-hover:bg-slate-700 group-hover:border-cyan-500 group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300'
                                src={platform.img}
                                alt="social"
                            />
                        </a>
                    ))}
                </div>

                {/* Tech Status Card */}
                <div className="md:col-span-6 flex flex-col justify-center p-8 rounded-[2rem] bg-cyan-900/10 border border-cyan-500/20 backdrop-blur-xl shadow-inner">
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 rounded-2xl bg-slate-950/40 border border-white/5">
                            <p className="text-2xl font-black text-white">15+</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Projects Completed</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-950/40 border border-white/5">
                            <p className="text-2xl font-black text-white">Open</p>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">to Collaborate</p>
                        </div>
                        <div className="col-span-2 p-4 rounded-2xl bg-slate-950/40 border border-white/5">
                            <p className="text-lg font-black text-cyan-400 italic">"Wait..., Let me solve it through coding"</p>
                        </div>
                    </div>
                </div>

            </main>

            {/* Decorative Grid Mesh Overlay */}
            <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0,transparent_70%)]"></div>
        </section>
    );
}

export default Home;
