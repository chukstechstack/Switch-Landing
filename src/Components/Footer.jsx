import React from "react";

const Footer = () => {
    return (
        <footer className="relative w-full bg-zinc-950 text-white min-h-screen flex flex-col justify-between py-24 px-6 sm:px-12 lg:px-24 rounded-t-[3.5rem] border-t border-zinc-800 will-change-transform">

            {/* TOP HEADER / CTA SECTION */}
            <div className="max-w-[1400px] mx-auto w-full">

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-zinc-800/80 pb-20">

                    <div>
                        <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-6 block bg-emerald-500/10 px-4 py-2 rounded-full w-fit font-bold border border-emerald-500/20">
              // READY FOR DEPLOYMENT
                        </span>
                        <h2 className="text-[clamp(3rem,7vw,7.5rem)] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
                            SECURE YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
                                DIGITAL FOCUS.
                            </span>
                        </h2>
                    </div>

                    {/* Bold Download & CTA Card */}
                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <p className="text-zinc-400 max-w-sm text-sm sm:text-base leading-relaxed font-light lg:text-right">
                            Built for Windows 10 & 11 (.NET 10). Download the release package and initialize the service watchdog today.
                        </p>

                        <a
                            href="#download"
                            className="inline-flex items-center gap-3 rounded-2xl bg-emerald-400 px-8 py-5 text-sm font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-emerald-300 hover:scale-[1.03]"
                        >
                            <span>Download for PC (.exe)</span>
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>

                </div>

                {/* MIDDLE GRID: CONTACTS & SOCIALS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-b border-zinc-800/80">

                    {/* Column 1: Brand Info */}
                    <div>
                        <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4">SWITCH_</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light">
                            High-assurance Windows desktop enforcement utility designed with service-backed background monitoring.
                        </p>
                    </div>

                    {/* Column 2: Developer Links (GitHub / LinkedIn) */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6">// DIRECT CHANNELS</h4>
                        <ul className="space-y-4 font-bold text-sm">
                            <li>
                                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    <span>GitHub Repository</span> ↗
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                                    <span>LinkedIn Profile</span> ↗
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Tech Stack */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6">// ARCHITECTURE</h4>
                        <ul className="space-y-3 font-mono text-xs text-zinc-400">
                            <li>• WPF Desktop UI</li>
                            <li>• .NET 10 Framework</li>
                            <li>• Windows Service Host</li>
                            <li>• JSON State Persistence</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact / Email */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6">// INQUIRIES</h4>
                        <p className="text-zinc-300 text-sm font-bold mb-2">Get in touch:</p>
                        <a href="mailto:your.email@domain.com" className="text-emerald-400 font-mono text-sm underline underline-offset-4 hover:text-emerald-300 transition-colors">
                            your.email@domain.com
                        </a>
                    </div>

                </div>

            </div>

            {/* BOTTOM COPYRIGHT ROW */}
            <div className="max-w-[1400px] mx-auto w-full pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-500">
                <p>© {new Date().getFullYear()} SWITCH DESKTOP ENFORCEMENT. ALL RIGHTS RESERVED.</p>
                <p className="text-zinc-400">BUILT FOR FOCUS. HARDENED FOR PERSISTENCE.</p>
            </div>

        </footer>
    );
};

export default Footer;