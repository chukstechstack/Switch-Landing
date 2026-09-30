import React, { useState, useEffect, useRef } from "react";
import dashboardImg from "../Assets/Landing.jpg";
import createImg from "../Assets/Create.jpg";
import { Star } from "lucide-react";

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="section-2"
            className="relative w-full bg-[#FAFAFA] py-28 px-6 sm:px-12 lg:px-24 text-zinc-950 overflow-hidden font-mono"
        >
            <div className="max-w-[1400px] mx-auto space-y-28">

                {/* --- LIGHTWEIGHT, PAPER-STYLE FRAMER SOCIAL PROOF BAR --- */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all duration-1000 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}>

                    {/* Left: Huge Stat / Rating Block */}
                    <div className="lg:col-span-5 flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-amber-400/15 border border-amber-500/40 flex items-center justify-center shrink-0 shadow-sm">
                            <svg className="w-7 h-7 text-amber-500 fill-amber-400" viewBox="0 0 24 24">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                            </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                                ))}
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">4.9 / 5.0</span>
                                <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full">Verified</span>
                            </div>
                            <p className="text-zinc-600 text-xs sm:text-sm mt-1.5 font-normal">
                                Elite trust score from <span className="text-zinc-950 font-semibold underline decoration-amber-400 decoration-1 underline-offset-2">1,400+ developers</span> & deep workers.
                            </p>
                        </div>
                    </div>

                    {/* Center: Vibrant Full-Color Avatars with Overlapping Scale */}
                    <div className="lg:col-span-4 flex items-center gap-6">
                        <div className="flex -space-x-3 overflow-hidden py-1">
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAFAFA] object-cover shadow-sm transition-transform hover:z-10 hover:scale-105"
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces"
                                alt="User"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAFAFA] object-cover shadow-sm transition-transform hover:z-10 hover:scale-105"
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces"
                                alt="User"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAFAFA] object-cover shadow-sm transition-transform hover:z-10 hover:scale-105"
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces"
                                alt="User"
                            />
                            <img
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-[#FAFAFA] object-cover shadow-sm transition-transform hover:z-10 hover:scale-105"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
                                alt="User"
                            />
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-amber-400 text-xs font-bold ring-2 ring-[#FAFAFA] shadow-sm">
                                +1K
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-zinc-950 text-xs font-bold uppercase tracking-widest">Active Cohort</span>
                            <span className="text-zinc-600 text-xs font-normal">Zero distractions daily</span>
                        </div>
                    </div>
                </div>

                {/* Editorial Lightweight Header (Pencil-Style Monospace Blueprint) */}
                <div className={`transition-all duration-1000 delay-150 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}>
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                        <span className="text-zinc-500 text-[11px] tracking-[0.2em] uppercase font-normal">
                            ARCHITECTURE: .NET 10 + WPF + WinService
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
                        <div className="lg:col-span-8">
                            <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-normal uppercase tracking-[0.05em] leading-[1.1] text-zinc-900">
                                <span className="text-zinc-400 font-light"></span> LOCK DISTRACTIONS.
                                <br />
                                <span className="inline-flex items-center gap-3 mt-2 text-emerald-700 font-medium">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span>ENFORCE_FOCUS<span className="text-emerald-500 animate-pulse font-normal">()</span></span>
                                </span>
                            </h2>
                        </div>

                        <div className="lg:col-span-4 lg:pb-1">
                            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal border-l border-emerald-600 pl-4">
                                Switch bypasses typical wrapper limits by pairing a fluid WPF interface with an autonomous background Windows service watchdog—keeping your blocks locked even when the main UI closes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- MODULE 1: DASHBOARD --- */}
                <div className={`transition-all duration-1000 delay-300 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
                        <div>
                            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">MODULE 01</span>
                            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-zinc-950 mt-0.5">
                                Active Process & App Enforcement
                            </h3>
                        </div>
                        <p className="text-zinc-600 text-xs max-w-xs font-normal">
                            Real-time monitoring across desktop apps, browser background loops, and installer processes.
                        </p>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden bg-zinc-950 shadow-lg">
                        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-[11px] text-zinc-400 font-bold tracking-wider">SWITCH_DASHBOARD_V2.exe</span>
                            </div>
                        </div>

                        <img
                            src={dashboardImg}
                            alt="Switch Blocked Apps Dashboard"
                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                        />
                    </div>
                </div>

                {/* --- MODULE 2: CREATE BLOCK FLOW --- */}
                <div className={`transition-all duration-1000 delay-400 ease-out transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-4">
                        <div>
                            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">MODULE 02</span>
                            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-zinc-950 mt-0.5">
                                Granular Block Configuration
                            </h3>
                        </div>
                        <p className="text-zinc-600 text-xs max-w-xs font-normal">
                            Define focus targets, folder lock directories, and end times with absolute precision.
                        </p>
                    </div>

                    <div className="w-full rounded-2xl overflow-hidden bg-zinc-950 shadow-lg">
                        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span className="text-[11px] text-zinc-400 font-bold tracking-wider">SWITCH_CREATE_BLOCK.exe</span>
                            </div>
                        </div>

                        <img
                            src={createImg}
                            alt="Switch Create New Block Interface"
                            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;