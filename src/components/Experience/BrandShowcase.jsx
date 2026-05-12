import React from 'react';
import assets from '../../assets/assets';

const BrandShowcase = () => {
    const brands = [
        { id: 1, name: "Admark Digital Media", logo: assets.AdmarkDigital },
        { id: 2, name: "Apple Tree Infotech", logo: assets.AppleTreeInfotech },
        { id: 3, name: "Cadera Edu", logo: assets.CaderaEdu },
        { id: 4, name: "Cadera Abroad", logo: assets.CaderaAbroad },
        { id: 5, name: "Bhagwati Generators", logo: assets.BhagwatiGenerator },
        { id: 6, name: "Krayonnz", logo: assets.Krayonnz },
    ];

    return (
        <div className="mt-24 space-y-8">
            <div className="flex flex-col items-center md:items-start space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                    Brands I've <span className="text-purple-400">Worked With</span>
                </h3>
                <p className="text-slate-400 font-medium">Collaborating with industry leaders and innovative startups.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px]">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        className={`group relative overflow-hidden rounded-3xl bg-slate-900/40 border border-slate-800/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm flex items-center justify-center p-8`}
                    >
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Image Container */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 ease-out">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="max-w-full max-h-full object-contain transition-all duration-500"
                            />
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrandShowcase;
