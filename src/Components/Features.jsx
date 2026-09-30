import React from "react";
import dashboardImg from "../Assets/Landing.jpg";
import createImg from "../Assets/Create.jpg";

const Features = () => {
    return (
        <section id="section-2" className="relative w-full bg-[#FAFAFA] py-24 px-6 sm:px-12 lg:px-24 text-zinc-950 border-t border-zinc-200">
            <div className="max-w-[1400px] mx-auto">

                {/* Editorial Header */}
                <div className="mb-24 border-b border-zinc-300 pb-16">
                    <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                        {/* Security Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            <svg
                                className="w-3.5 h-3.5 text-emerald-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" />
                            </svg>
                            <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-emerald-800">
                                SECURE_SYSTEM_ENFORCEMENT
                            </span>
                        </div>

                        <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                            .NET 10 + WPF + WinService
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <h2 className="text-[clamp(2.8rem,6.5vw,7rem)] font-extrabold uppercase tracking-[-0.05em] leading-[0.9] text-zinc-950">
                                LOCK DISTRACTIONS.<br />
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-950 via-zinc-800 to-zinc-500 font-mono tracking-tight">
                                        ENFORCE_FOCUS()
                                    </span>
                                </span>
                            </h2>
                        </div>

                        <div className="lg:col-span-4 lg:pb-3">
                            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium border-l-2 border-emerald-600 pl-6">
                                Switch bypasses typical wrapper limits by pairing a fluid WPF interface with an autonomous background Windows service watchdog—keeping your blocks locked even when the main UI closes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- MODULE 1: DASHBOARD --- */}
                <div className="mb-28">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                        <div>
                            <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase">// MODULE 01 — ENFORCEMENT ENGINE</span>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-1">
                                Active Process & App Enforcement
                            </h3>
                        </div>
                        <p className="text-zinc-700 text-sm font-mono max-w-xs font-medium">
                            Real-time monitoring across desktop apps, browser background loops, and installer processes.
                        </p>
                    </div>

                    <div className="w-full rounded-3xl border border-zinc-200 bg-white p-4 sm:p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-mono text-zinc-600 font-bold tracking-wider">SWITCH_DASHBOARD_V2.exe</span>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950">
                            <img
                                src={dashboardImg}
                                alt="Switch Blocked Apps Dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* --- MODULE 2: CREATE BLOCK FLOW --- */}
                <div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
                        <div>
                            <span className="font-mono text-xs text-emerald-600 font-bold tracking-widest uppercase">// MODULE 02 — RULE CONFIGURATION</span>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-1">
                                Granular Block Configuration
                            </h3>
                        </div>
                        <p className="text-zinc-700 text-sm font-mono max-w-xs font-medium">
                            Define focus targets, folder lock directories, and end times with absolute precision.
                        </p>
                    </div>

                    <div className="w-full rounded-3xl border border-zinc-200 bg-white p-4 sm:p-8 shadow-sm">
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-xs font-mono text-zinc-600 font-bold tracking-wider">SWITCH_CREATE_BLOCK.exe</span>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-950">
                            <img
                                src={createImg}
                                alt="Switch Create New Block Interface"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;