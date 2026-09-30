import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="relative w-full bg-zinc-950 text-white min-h-screen flex flex-col justify-between py-24 px-6 sm:px-12 lg:px-24 rounded-t-[3.5rem] border-t border-zinc-800 will-change-transform">

            {/* TOP HEADER / CTA SECTION */}
            <div className="max-w-[1400px] mx-auto w-full">

                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-zinc-800/80 pb-20">

                    <div>
                        <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.3em] mb-6 block bg-emerald-500/10 px-4 py-2 rounded-full w-fit font-bold border border-emerald-500/20">
                            READY FOR DEPLOYMENT
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
                            href="https://github.com/chukstechstack/SwitchInstaller/releases/latest/download/SwitchInstaller.msi"
                            download
                            className="inline-flex items-center gap-3 rounded-2xl bg-emerald-400 px-8 py-5 text-sm font-black uppercase tracking-wider text-black transition-all duration-300 hover:bg-emerald-300 hover:scale-[1.03]"
                        >
                            <span>Download for PC (.msi)</span>
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

                    {/* Column 2: Stunning Bold Social Cards (GitHub & LinkedIn) */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6"> DIRECT CHANNELS</h4>
                        <div className="flex flex-col gap-3">
                            {/* GitHub Card */}
                            <a
                                href="https://github.com/chukstechstack/Switch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-400/50 hover:bg-zinc-900 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-400 group-hover:text-black transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">Source Code</span>
                                        <span className="text-sm font-bold tracking-wide text-white">GitHub</span>
                                    </div>
                                </div>
                                <span className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300 font-mono">↗</span>
                            </a>

                            {/* LinkedIn Card */}
                            <a
                                href="https://www.linkedin.com/in/chukstechstack"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-400/50 hover:bg-zinc-900 transition-all duration-300"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-zinc-800 flex items-center justify-center text-white group-hover:bg-emerald-400 group-hover:text-black transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="block text-xs font-mono text-zinc-400 group-hover:text-emerald-400 transition-colors">Professional</span>
                                        <span className="text-sm font-bold tracking-wide text-white">LinkedIn</span>
                                    </div>
                                </div>
                                <span className="text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300 font-mono">↗</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Tech Stack (Clean, Bold, No Heavy Backgrounds) */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6">ARCHITECTURE</h4>
                        <ul className="space-y-4 font-mono text-sm sm:text-base text-zinc-200 font-bold tracking-tight">
                            <li className="hover:text-emerald-400 transition-colors cursor-default">• WPF Desktop UI</li>
                            <li className="hover:text-emerald-400 transition-colors cursor-default">• .NET 10 Framework</li>
                            <li className="hover:text-emerald-400 transition-colors cursor-default">• Windows Service Host</li>
                            <li className="hover:text-emerald-400 transition-colors cursor-default">• JSON State Persistence</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact / Email */}
                    <div>
                        <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-6"> INQUIRIES</h4>
                        <p className="text-zinc-300 text-sm font-bold mb-2">Get in touch:</p>
                        <a href="mailto:chuks.techstack@gmail.com" className="text-emerald-400 font-mono text-sm underline underline-offset-4 hover:text-emerald-300 transition-colors">
                            chuks.techstack@gmail.com
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