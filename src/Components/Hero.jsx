import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../Assets/Switch.jpg";
import switchAppBg from "../Assets/Landing.jpg";

const CINEMATIC_EASE = [0.16, 1, 0.3, 1];

const slides = [
  {
    image: heroBg,
    title: "WIN FOCUS GOALS",
    buttonText: "Download for PC",
    isAppView: false,
    initialScale: 1.35,
    animateScale: 1.15,
    scaleRange: [1.15, 1.45],
  },
  {
    image: switchAppBg,
    title: "SET YOUR FOCUS BLOCKS",
    buttonText: "Explore App Features",
    isAppView: true,
    initialScale: 1.05,
    animateScale: 1.0,
    scaleRange: [1.0, 1.04],
  },
  {
    image: heroBg,
    title: "WIN FOCUS GOALS",
    buttonText: "Download for PC",
    isAppView: false,
    initialScale: 1.15,
    animateScale: 1.10,
    scaleRange: [1.10, 1.20],
  },
];

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStep(1);
    }, 6500);

    const timer2 = setTimeout(() => {
      setCurrentStep(2);
    }, 13000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const slide = slides[currentStep];

  return (
    <section className="relative flex min-h-screen w-full items-end justify-start overflow-hidden pb-16 pl-8 lg:pl-20 pt-20">

      {/* 1. DYNAMIC BACKGROUND SWAP WITH SEAMLESS RADIAL VIGNETTE */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentStep}
            className="absolute inset-0 h-full w-full will-change-transform"
            initial={{ opacity: 0, scale: slide.initialScale }}
            animate={{ opacity: 1, scale: slide.animateScale }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: CINEMATIC_EASE }}
          >
            <motion.img
              src={slide.image}
              alt="Switch Background"
              className="h-full w-full object-cover object-center"
              animate={{ scale: slide.scaleRange }}
              transition={{
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Seamless Soft Top Header Shadow & Natural Edge Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. INVISIBLE BLEND GLASS CONTAINING DYNAMIC CONTENT */}
      <div
        className="relative z-10 p-8 sm:p-12 rounded-[2rem] bg-black/20 backdrop-blur-[12px] max-w-5xl"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)",
          WebkitMaskComposite: "intersect",
          maskComposite: "intersect",
        }}
      >

        {/* Brand Logo Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: CINEMATIC_EASE }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-9 h-9 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center shadow-lg">
            <span className="text-emerald-400 font-black text-base tracking-tighter">S</span>
          </div>
          <span className="text-white font-black tracking-widest text-sm font-mono [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">
            SWITCH<span className="text-emerald-400">_</span>
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
          >
            {/* Ultra-bold text with layered shadows for maximum crispness */}
            <h1 className={`font-black uppercase tracking-[-0.04em] text-white [text-shadow:_0_5px_25px_rgb(0_0_0_/_90%),_0_0_50px_rgb(0_0_0_/_60%)] ${slide.isAppView ? "text-[clamp(2.5rem,7vw,7rem)] leading-[0.9]" : "text-[clamp(3rem,9vw,9.5rem)] leading-[0.85]"
              }`}>
              {slide.title}
            </h1>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: CINEMATIC_EASE }}
          className="mt-6 flex items-center gap-4"
        >
          {/* Snowish moisture frosted button with live diagonal wave shine */}
          <a
            href="https://github.com/chukstechstack/SwitchInstaller/releases/latest/download/SwitchInstaller.msi"
            download
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-white/25 backdrop-blur-[24px] border border-white/50 px-8 py-5 text-sm font-black uppercase tracking-wider text-white shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.8)] transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.6)] hover:scale-[1.03] overflow-hidden"
          >
            {/* Diagonal sliding white wave / shimmer overlay */}
            <motion.div
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[30deg] pointer-events-none"
              animate={{ x: ["-150%", "350%"] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">Download for PC (.msi)</span>
            <svg className="relative z-10 h-4 w-4 text-emerald-300 transition-colors duration-300 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </motion.div>

      </div>

      <div className="absolute bottom-6 right-8 z-20 flex gap-2">
        {[0, 1].map((dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentStep(dotIndex === 0 ? 0 : 1)}
            className={`h-1.5 rounded-full transition-all duration-500 ${(currentStep === dotIndex) || (currentStep === 2 && dotIndex === 0) ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;