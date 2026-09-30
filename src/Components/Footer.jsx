import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer
            id="footer"
            className="relative w-full bg-zinc-950 text-zinc-300 flex flex-col justify-between py-20 px-6 sm:px-12 lg:px-24 rounded-t-[3rem] border-t border-zinc-800/60 overflow-hidden font-sans"
        >
            <div className="max-w-[1400px] mx-auto w-full">

                {/* TOP HEADER / CTA SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-zinc-800/60 pb-16"
                >
                    <div>
                        {/* Scoreboard / Digital Badge Style */}
                        <span className="text-emerald-400 font-mono text-[11px] uppercase tracking-[0.25em] mb-5 inline-block bg-emerald-500/5 px-3 py-1 rounded border border-emerald-500/20 font-semibold">
                            [SYS_READY // 01]
                        </span>
                        <h2 className="text-[clamp(2.5rem,5.5vw,5.5rem)] font-light uppercase tracking-tight leading-[0.95] text-white">
                            SECURE YOUR <br />
                            <span className="font-mono font-medium tracking-wider text-emerald-400">
                                DIGITAL_FOCUS
                            </span>
                        </h2>
                    </div>

                    {/* Download & CTA */}
                    <div className="flex flex-col items-start lg:items-end gap-5">
                        <p className="text-zinc-400 max-w-sm text-sm leading-relaxed font-light lg:text-right">
                            Engineered for Windows 10 & 11 (.NET 10). Download the release package to initialize background telemetry.
                        </p>

                        <a
                            href="https://github.com/chukstechstack/SwitchInstaller/releases/latest/download/SwitchInstaller.msi"
                            download
                            className="inline-flex items-center gap-3 rounded-xl bg-emerald-400 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-emerald-300 hover:scale-[1.01]"
                        >
                            <span>DOWNLOAD_MSI (.msi)</span>
                            <span className="font-mono">↓</span>
                        </a>
                    </div>
                </motion.div>

                {/* MIDDLE GRID: CLEAN EDITORIAL LAYOUT */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-zinc-800/60 text-sm"
                >
                    {/* Column 1: Brand Info */}
                    <div>
                        <h3 className="font-mono text-xs text-white uppercase tracking-widest mb-3 font-bold">SWITCH_CORE</h3>
                        <p className="text-zinc-400 font-light leading-relaxed">
                            High-assurance desktop enforcement utility featuring persistent background service monitoring.
                        </p>
                    </div>

                    {/* Column 2: Direct Channels */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 font-semibold">CHANNELS</h4>
                        <ul className="space-y-2.5 font-mono text-xs">
                            <li>
                                <a href="https://github.com/chukstechstack/Switch" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center justify-between py-1 border-b border-zinc-900">
                                    <span>GITHUB_REPO</span>
                                    <span>↗</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/chukstechstack" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center justify-between py-1 border-b border-zinc-900">
                                    <span>LINKEDIN_PROFILE</span>
                                    <span>↗</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Tech Stack */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 font-semibold">ARCHITECTURE</h4>
                        <ul className="space-y-2 font-mono text-xs text-zinc-400">
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-400">#</span> WPF Desktop UI
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-400">#</span> .NET 10 Framework
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-400">#</span> Windows Service Host
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-emerald-400">#</span> JSON State Store
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Inquiries */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 font-semibold">INQUIRIES</h4>
                        <p className="text-zinc-400 font-light mb-2 text-xs">Direct contact line:</p>
                        <a href="mailto:chuks.techstack@gmail.com" className="text-emerald-400 font-mono text-xs underline underline-offset-4 hover:text-emerald-300 transition-colors block">
                            chuks.techstack@gmail.com
                        </a>
                    </div>
                </motion.div>

            </div>

            {/* BOTTOM COPYRIGHT ROW */}
            <div className="max-w-[1400px] mx-auto w-full pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-zinc-500">
                <p>© {new Date().getFullYear()} SWITCH. ALL RIGHTS RESERVED.</p>
                <p className="text-zinc-400 tracking-wider">BUILT_FOR_FOCUS // HARDENED_PERSISTENCE</p>
            </div>
        </footer>
    );
};

export default Footer;