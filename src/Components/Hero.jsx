
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

  // Exact 3-step sequence: Step 0 (Hero) -> Step 1 (Landing) -> Step 2 (Hero & Lock)
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStep(1); // Swipe to landing
    }, 6500);

    const timer2 = setTimeout(() => {
      setCurrentStep(2); // Swipe back to hero and lock permanently
    }, 13000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const slide = slides[currentStep];

  return (
    <section className="relative flex min-h-screen w-full items-end justify-start overflow-hidden pb-16 pl-8 lg:pl-20">

      {/* 1. DYNAMIC BACKGROUND SWAP */}
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

        {/* Dynamic Typography - Slides smoothly from the left */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.8, ease: CINEMATIC_EASE }}
          >
            <h1 className={`font-black uppercase tracking-[-0.04em] text-white drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] ${slide.isAppView ? "text-[clamp(2.5rem,7vw,7rem)] leading-[0.9]" : "text-[clamp(3rem,9vw,9.5rem)] leading-[0.85]"
              }`}>
              {slide.title}
            </h1>
          </motion.div>
        </AnimatePresence>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: CINEMATIC_EASE }}
          className="mt-6 flex items-center gap-4"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2.5 rounded-xl bg-white/90 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-white hover:scale-[1.02]"
          >
            <span>{slide.buttonText}</span>
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>

      </div>

      {/* Slide Indicators / Dots (Mapped to 2 visible states for UI) */}
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