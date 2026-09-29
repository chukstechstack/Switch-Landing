import React from "react";
import { motion } from "framer-motion";
import heroBg from "../Assets/Switch.jpg";

const CINEMATIC_EASE = [0.16, 1, 0.3, 1];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-end justify-start overflow-hidden pb-16 pl-8 lg:pl-20">

      {/* 1. 100% ORIGINAL COLORS (Unmatched vibrant background with continuous cinematic drift) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full will-change-transform"
          initial={{ scale: 1.35 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 2.2, ease: CINEMATIC_EASE }}
        >
          <motion.img
            src={heroBg}
            alt="Switch Field Background"
            className="h-full w-full object-cover object-center"
            animate={{ scale: [1.15, 1.45] }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>

      {/* 2. INVISIBLE BLEND GLASS (Seamlessly diffuses light behind text with zero harsh edges) */}
      <div
        className="relative z-10 p-8 sm:p-12 rounded-[2rem] bg-black/20 backdrop-blur-[12px] max-w-5xl"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)",
          WebkitMaskComposite: "intersect",
          maskComposite: "intersect",
        }}
      >

        {/* Massive Clean Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(16px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: CINEMATIC_EASE }}
        >
          <h1 className="font-black uppercase tracking-[-0.04em] text-[clamp(3rem,9vw,9.5rem)] leading-[0.85] text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            WIN FOCUS GOALS
          </h1>
        </motion.div>

        {/* Minimal action button below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: CINEMATIC_EASE }}
          className="mt-6 flex items-center gap-4"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 rounded-xl bg-white/90 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white hover:scale-[1.02]"
          >
            <span>Download for PC</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;