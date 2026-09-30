import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolledToLightSection, setIsScrolledToLightSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section2 = document.getElementById("section-2");
            if (section2) {
                const rect = section2.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setIsScrolledToLightSection(true);
                } else {
                    setIsScrolledToLightSection(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none transition-colors duration-300">
            {/* Header bar container with balanced padding */}
            <div className="relative w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 h-28 sm:h-36 flex items-center justify-between">

                {/* 1. SWITCH Logo locked flush to the absolute left monitor edge */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="pointer-events-auto flex items-center gap-3 sm:gap-4 group text-left cursor-pointer z-25 -ml-4 sm:-ml-8 lg:-ml-12"
                >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-r-2xl sm:rounded-r-3xl rounded-l-none bg-emerald-400 flex items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.6)] group-hover:scale-105 transition-transform">
                        <span className="text-black font-black text-2xl sm:text-3xl tracking-tighter">S</span>
                    </div>
                    <div className="flex flex-col">
                        <span className={`font-black tracking-[0.25em] text-lg sm:text-2xl uppercase italic transition-colors duration-300 ${isScrolledToLightSection ? "text-zinc-900 [text-shadow:_none]" : "text-white [text-shadow:_0_2px_15px_rgb(0_0_0_/_100%),_0_0_30px_rgb(0_0_0_/_80%)]"
                            }`}>
                            SWITCH<span className="text-emerald-500">_</span>
                        </span>
                        <span className={`text-[10px] sm:text-xs font-mono tracking-[0.2em] font-extrabold italic transition-colors duration-300 ${isScrolledToLightSection ? "text-emerald-700 [text-shadow:_none]" : "text-emerald-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]"
                            }`}>
                        </span>
                    </div>
                </button>

                {/* 2. Desktop Navigation links moved back to a balanced middle-right position */}
                <nav className="pointer-events-auto hidden md:flex items-center gap-6 font-mono text-base lg:text-lg tracking-[0.2em] z-25 mr-12 lg:mr-24">
                    <button
                        onClick={() => scrollToSection("section-2")}
                        className={`px-6 lg:px-8 py-3 lg:py-4 rounded-[1.5rem] backdrop-blur-[12px] transition-all duration-300 uppercase font-black italic cursor-pointer ${isScrolledToLightSection
                            ? "bg-white/80 border border-zinc-300 text-zinc-900 shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-emerald-500 hover:text-black hover:border-emerald-600"
                            : "bg-black/20 border border-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-emerald-400/50 hover:text-emerald-300 hover:bg-black/40 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]"
                            }`}
                    >
                        // FEATURES
                    </button>
                    <button
                        onClick={() => scrollToSection("footer")}
                        className={`px-6 lg:px-8 py-3 lg:py-4 rounded-[1.5rem] backdrop-blur-[12px] transition-all duration-300 uppercase font-black italic cursor-pointer ${isScrolledToLightSection
                            ? "bg-white/80 border border-zinc-300 text-zinc-900 shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:bg-emerald-500 hover:text-black hover:border-emerald-600"
                            : "bg-black/20 border border-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-emerald-400/50 hover:text-emerald-300 hover:bg-black/40 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]"
                            }`}
                    >
                        // FOOTER
                    </button>
                </nav>

                {/* 3. Mobile Hamburger Toggle Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`pointer-events-auto md:hidden p-3 rounded-2xl backdrop-blur-[12px] focus:outline-none z-25 shadow-xl transition-all duration-300 ml-auto ${isScrolledToLightSection ? "bg-white/80 border border-zinc-300 text-zinc-900" : "bg-black/30 border border-white/15 text-white"
                        }`}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8h16M4 16h16" />
                        )}
                    </svg>
                </button>

            </div>

            {/* Mobile Dropdown Overlay Menu */}
            {isMobileMenuOpen && (
                <div className={`pointer-events-auto md:hidden absolute top-full left-0 w-full backdrop-blur-[20px] border-b px-6 py-8 flex flex-col gap-4 shadow-[0_25px_50px_rgba(0,0,0,0.15)] animate-in fade-in slide-in-from-top-4 duration-300 ${isScrolledToLightSection ? "bg-white/95 border-zinc-200 text-zinc-900" : "bg-black/70 border-emerald-500/20 text-white"
                    }`}>
                    <button
                        onClick={() => scrollToSection("section-2")}
                        className={`w-full py-4 rounded-2xl border font-mono text-sm tracking-[0.25em] font-black italic uppercase text-center shadow-lg ${isScrolledToLightSection ? "bg-zinc-100 border-zinc-300 text-zinc-900" : "bg-black/30 border-white/10 text-emerald-300"
                            }`}
                    >
                        // FEATURES
                    </button>
                    <button
                        onClick={() => scrollToSection("footer")}
                        className={`w-full py-4 rounded-2xl border font-mono text-sm tracking-[0.25em] font-black italic uppercase text-center shadow-lg ${isScrolledToLightSection ? "bg-zinc-100 border-zinc-300 text-zinc-900" : "bg-black/30 border-white/10 text-emerald-300"
                            }`}
                    >
                        // FOOTER
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;