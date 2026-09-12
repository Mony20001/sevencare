import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide as slideData } from "../Data/Products";

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        // 2. កែប្រែ៖ ការពារ Error ប្រសិនបើ slideData គ្មានទិន្នន័យ
        if (!slideData || slideData.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[650px] bg-[#FAF7F2] text-[#2C2A29] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12 lg:py-20 overflow-hidden">
            <div className="absolute top-10 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
                <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6 text-stone-700 font-medium">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-100/80 text-amber-900 border border-amber-200/60">
                        <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                        ផលិតផលថ្មីៗ
                    </span>
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] tracking-tight">
                        ថែសម្រស់រាល់ថ្ងៃ<span className="text-6xl text-amber-900">
                            <br />ក្មេងជាងវ័យរាល់ថ្ងៃ</span>
                    </h1>
                    <p className="text-sm sm:text-lg text-neutral-600 max-w-lg leading-relaxed font-light">
                        ចង់បានសម្រស់កាន់តែស្អាតនិងក្មេងជាងវ័យកុំភ្លេច <span className='text-amber-800 font-bold'>SEVENT⁷ CARE</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto pt-2">
                        <button 
                            onClick={() => navigate('/Products1')} 
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#2C2A29] text-white rounded-full font-medium text-sm hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer"
                        >
                            ស្វែងរកផលិតផល
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#2C2A29] rounded-full font-medium text-sm border border-[#2C2A29]/20 hover:bg-[#2C2A29]/5 transition-all">
                            ទំនាក់ទំនង
                        </button>
                    </div>
                </div>
                
                <div className="lg:col-span-6 flex items-center justify-center gap-3 sm:gap-6 w-full max-w-full">
                    <div className="relative w-36 xs:w-44 sm:w-56 lg:w-64 aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-2 sm:border-4 border-white/80 transform -rotate-3 hover:rotate-0 transition-transform duration-500 shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src="/images/hero.png"
                            alt="Beauty product highlight"
                        />
                    </div>

                    <div className="relative w-40 xs:w-48 sm:w-64 lg:w-72 aspect-[3/4] rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-white shrink-0 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div
                            className="flex h-full transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {slideData && slideData.map((photo, index) => (
                                <div key={photo.alt || index} className="w-full h-full shrink-0">
                                    <img
                                        className="w-full h-full object-cover"
                                        src={photo.src}
                                        alt={photo.alt || `Slide ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-3 sm:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 z-20">
                            {slideData && slideData.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1.5 sm:h-2 rounded-full transition-all ${
                                        currentIndex === idx ? "w-5 sm:w-6 bg-white" : "w-1.5 sm:w-2 bg-white/50"
                                    }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slide;