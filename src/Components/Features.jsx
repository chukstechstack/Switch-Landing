import React from "react";
import { motion } from "framer-motion";
import dashboardImg from "../Assets/Landing.jpg";
import createImg from "../Assets/Create.jpg";

const CINEMATIC_EASE = [0.16, 1, 0.3, 1];

const Features = () => {
    return (
        <section className="relative w-full bg-[#FAFAFA] py-32 px-6 sm:px-12 lg:px-24 text-zinc-950 overflow-hidden rounded-t-[3.5rem] border-t border-zinc-200">

            <div className="max-w-[1400px] mx-auto">

                {/* Editorial Header - Next-Gen 2026 Typography Masterpiece */}
                <div className="mb-32 border-b border-zinc-300 pb-20">

                    {/* Top Meta Tag Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
                        className="flex items-center justify-between mb-12 flex-wrap gap-4"
                    >
                        <div className="flex items-center gap-3 bg-zinc-200/80 px-4 py-2 rounded-full border border-zinc-300">
                            <span className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse" />
                            <span className="text-zinc-950 font-mono text-xs uppercase tracking-[0.25em] font-bold">
                                Architecture & Enforcement Engine
                            </span>
                        </div>
                        <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">
              // .NET 10 + WPF + WinService
                        </span>
                    </motion.div>

                    {/* Jaw-Dropping Asymmetric Headline Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

                        <motion.div
                            className="lg:col-span-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, ease: CINEMATIC_EASE }}
                        >
                            <h2 className="text-[clamp(2.8rem,6.5vw,7rem)] font-extrabold uppercase tracking-[-0.05em] leading-[0.9] text-zinc-950">
                                <span className="block font-light tracking-[0.05em] text-zinc-400 text-[0.5em] mb-2">
                                    01 // SYSTEM CORE
                                </span>
                                ENGINEERED <br />
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-400">
                                        FOR PERSISTENCE.
                                    </span>
                                    <span className="absolute -bottom-2 left-0 w-full h-3 bg-zinc-200/60 -z-10 rounded-full transform -rotate-1" />
                                </span>
                            </h2>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-4 lg:pb-3"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 1, delay: 0.15, ease: CINEMATIC_EASE }}
                        >
                            <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-medium border-l-2 border-zinc-950 pl-6">
                                Switch bypasses typical wrapper limits by pairing a fluid WPF interface with an autonomous background Windows service watchdog—keeping your blocks locked even when the main UI closes.
                            </p>
                        </motion.div>

                    </div>
                </div>

                {/* --- STICKER CARD 1: THE ENFORCEMENT DASHBOARD --- */}
                <div className="mb-36">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
                    >
                        <div>
                            <span className="font-mono text-xs text-zinc-500 font-bold tracking-widest uppercase">// MODULE 01</span>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-1">
                                Active Process & App Enforcement
                            </h3>
                        </div>
                        <p className="text-zinc-700 text-sm font-mono max-w-xs font-medium">
                            Real-time monitoring across desktop apps, browser background loops, and installer processes.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, ease: CINEMATIC_EASE }}
                        className="relative w-full rounded-[2.5rem] border border-zinc-200 bg-white p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden will-change-transform"
                    >
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 font-bold tracking-wider">SWITCH_DASHBOARD_V2.exe</span>
                        </div>

                        <div className="rounded-[1.5rem] overflow-hidden border border-zinc-200 bg-zinc-950">
                            <img
                                src={dashboardImg}
                                alt="Switch Blocked Apps Dashboard"
                                className="w-full h-auto object-cover [image-rendering:-webkit-optimize-contrast]"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* --- STICKER CARD 2: THE CREATE BLOCK FLOW --- */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
                    >
                        <div>
                            <span className="font-mono text-xs text-zinc-500 font-bold tracking-widest uppercase">// MODULE 02</span>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-1">
                                Granular Block Configuration
                            </h3>
                        </div>
                        <p className="text-zinc-700 text-sm font-mono max-w-xs font-medium">
                            Define focus targets, folder lock directories, and end times with absolute precision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 1, ease: CINEMATIC_EASE }}
                        className="relative w-full rounded-[2.5rem] border border-zinc-200 bg-white p-4 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden will-change-transform"
                    >
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                                <div className="w-3 h-3 rounded-full bg-zinc-300" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 font-bold tracking-wider">SWITCH_CREATE_BLOCK.exe</span>
                        </div>

                        <div className="rounded-[1.5rem] overflow-hidden border border-zinc-200 bg-zinc-950">
                            <img
                                src={createImg}
                                alt="Switch Create New Block Interface"
                                className="w-full h-auto object-cover [image-rendering:-webkit-optimize-contrast]"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Features;