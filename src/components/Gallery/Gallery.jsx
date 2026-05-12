import React from 'react';

const Gallery = () => {
    // Import all images from the my_gallery folder dynamically using Vite
    const images = import.meta.glob('../../assets/my_gallery/*.{webp,png,jpg,jpeg,svg}', { eager: true });
    
    // Convert the glob object into an array of image URLs
    const imageList = Object.values(images).map((module) => module.default);

    return (
        <section id="gallery" className='relative w-full flex flex-col bg-slate-950 text-white overflow-hidden py-16 px-4 md:px-12'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[160px]"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[160px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full space-y-12">
                {/* Heading Section */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-400 to-blue-600">
                            Gallery
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl text-lg font-medium text-center md:text-left">
                        A visual journey through moments, events, and milestones.
                    </p>
                </div>

                {/* Masonry Layout Container */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {imageList.map((src, idx) => (
                        <div 
                            key={idx} 
                            className="break-inside-avoid relative group overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20 transition-all duration-500"
                        >
                            <img
                                src={src}
                                alt={`Gallery capture ${idx + 1}`}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
