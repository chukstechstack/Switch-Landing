import React, { useState, useEffect } from "react";
import { ArrowDown, ShieldCheck } from "lucide-react";
import heroBg from "../Assets/Switch.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait 300ms after landing, then trigger the content slide-in animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-end justify-start overflow-hidden pb-12 sm:pb-16 px-4 sm:px-8 lg:px-20 pt-20 bg-black">

      {/* 1. BACKGROUND (Loads instantly, zero opacity transition delay) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <div className="absolute inset-0 h-full w-full">
          <img
            src={heroBg}
            alt="Switch Background"
            className="h-full w-full object-cover lg:object-center opacity-100 scale-100"
          />
        </div>
      </div>

      {/* FINAL SHIFTED & HIGH-CONTRAST MOTIVATIONAL SIGNATURE */}
      <div className="absolute right-56 bottom-10 z-25 hidden xl:flex flex-col items-end pointer-events-none select-none">
        <span className="font-mono text-xl lg:text-2xl font-bold tracking-[0.2em] text-white uppercase leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          Achieve. Win.
        </span>
        <span className="font-mono text-3xl lg:text-4xl font-bold tracking-[0.15em] text-zinc-200 uppercase mt-3 italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Set your <span className="text-red-500 font-black not-italic text-4xl lg:text-5xl drop-shadow-[0_0_15px_rgba(239,68,68,0.6)]">goals</span>
        </span>
      </div>

      {/* 2. DECLUTTERED TEXT CONTAINER (Delayed Slide Up) */}
      <div
        className={`relative z-30 p-5 sm:p-10 lg:p-14 bg-emerald-950/60 sm:bg-emerald-950/50 border-l-2 border-emerald-500/60 max-w-5xl w-full rounded-2xl sm:rounded-none transition-all duration-1000 ease-out transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >

        {/* TOP-LEFT TIMER MODE BADGE */}
        <div className="flex items-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl sm:rounded-2xl bg-black/80 border border-emerald-500/40 shadow-sm">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider leading-none">Timer Mode</span>
              <span className="text-[11px] sm:text-xs font-mono text-white font-bold leading-tight mt-0.5">25:00 DEEP WORK</span>
            </div>
          </div>
        </div>

        {/* Title & Core Subtitle */}
        <div>
          <h1 className="font-black uppercase tracking-[-0.04em] text-white text-[clamp(2rem,7vw,7rem)] leading-[0.95]">
            APP LOCK ON TIMER
          </h1>
        </div>

        {/* Download Button */}
        <div className="mt-5 sm:mt-6 flex items-center gap-4">
          <a
            href="https://github.com/chukstechstack/SwitchInstaller/releases/latest/download/SwitchInstaller.msi"
            download
            className="group relative inline-flex items-center gap-3 rounded-xl sm:rounded-2xl bg-white/10 border border-white/25 px-6 sm:px-8 py-4 sm:py-5 text-xs sm:text-sm font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">Download for PC</span>
            <ArrowDown className="relative z-10 h-4 w-4 text-emerald-300 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-black" />
          </a>
        </div>
      </div>

      {/* 3. VERTICAL POMODORO TIMER WIDGET (Delayed Slide From Right) */}
      <div
        className={`hidden xl:flex flex-col items-center justify-between absolute right-12 top-1/2 -translate-y-1/2 z-30 w-40 py-8 bg-black/95 border-2 border-emerald-400/80 rounded-[3rem] shadow-[0_0_35px_rgba(16,185,129,0.35)] transition-all duration-1000 ease-out transform delay-150 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
          }`}
      >
        {/* Top Explicit Pomodoro Label */}
        <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/60 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[9px] font-black tracking-widest text-emerald-300 uppercase">POMODORO</span>
        </div>

        {/* Vertical Countdown Timer */}
        <div className="my-6 [writing-mode:vertical-lr] rotate-180 flex items-center gap-3">
          <span className="font-mono font-black text-5xl tracking-[0.2em] text-emerald-300 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]">
            25:00
          </span>
          <div className="w-12 h-[2px] bg-emerald-400/80 my-3" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-white font-black uppercase whitespace-nowrap">
            WORK INTERVAL
          </span>
        </div>

        {/* VISIBLE POMODORO SESSION CYCLE TRACKER */}
        <div className="w-full px-4 flex flex-col items-center gap-2">
          <div className="flex items-center justify-between w-full font-mono text-[10px] font-bold text-emerald-400 px-1">
            <span>CYCLE</span>
            <span className="text-white">02 / 04</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 w-full">
            <div className="h-2.5 rounded-sm bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <div className="h-2.5 rounded-sm bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <div className="h-2.5 rounded-sm bg-zinc-800 border border-zinc-700" />
            <div className="h-2.5 rounded-sm bg-zinc-800 border border-zinc-700" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;