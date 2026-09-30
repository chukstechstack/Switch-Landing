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
                        {/* System Utility Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
                                SYSTEM_WATCHDOG ACTIVE
                            </span>
                        </div>

                        <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
                            .NET 10 + WPF + WinService
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8">
                            <h2 className="text-[clamp(2.8rem,6.5vw,7rem)] font-black uppercase tracking-[-0.04em] leading-[0.95] text-zinc-950">
                                LOCK DISTRACTIONS.
                                <br />
                                <span className="relative inline-flex items-center gap-3 mt-3">
                                    {/* System Lock Icon Accent */}
                                    <svg className="w-10 h-10 sm:w-14 sm:h-14 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-zinc-900 to-zinc-800 font-mono tracking-tight">
                                        ENFORCE_FOCUS<span className="text-emerald-500 animate-pulse">()</span>
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