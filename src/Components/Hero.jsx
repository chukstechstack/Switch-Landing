import React, { useState, useEffect } from "react";
import heroBg from "../Assets/Switch.jpg";
import switchAppBg from "../Assets/Landing.jpg";

const slides = [
  {
    image: heroBg,
    title: "WIN FOCUS GOALS",
    isAppView: false,
  },
  {
    image: switchAppBg,
    isAppView: true,
  },
  {
    image: heroBg,
    title: "WIN FOCUS GOALS",
    isAppView: false,
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
  const isSecondSlide = currentStep === 1;

  return (
    <section className="relative flex min-h-screen w-full items-end justify-start overflow-hidden pb-16 pl-8 lg:pl-20 pt-20 bg-black">

      {/* 1. BACKGROUND WITH PULLED-BACK ZOOM FOR THE APP VIEW */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${currentStep === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img
              src={s.image}
              alt="Switch Background"
              className={`h-full w-full object-cover object-center transition-transform duration-1000 ${index === 1 ? "scale-95" : "scale-110"
                }`}
            />
          </div>
        ))}
      </div>

      {/* 2. DYNAMIC TEXT CONTAINER (ONLY FOR SLIDE 1 & 3) */}
      {!isSecondSlide && (
        <div
          className="relative z-30 p-8 sm:p-14 transition-all duration-700 bg-emerald-950/20 backdrop-blur-md border-l border-emerald-500/20 max-w-5xl"
          style={{
            maskImage: "radial-gradient(circle at 30% 50%, black 30%, rgba(0,0,0,0.6) 60%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(circle at 30% 50%, black 30%, rgba(0,0,0,0.6) 60%, transparent 90%)",
          }}
        >
          {/* Brand Logo Header Badge */}
          <div className="flex items-center gap-3 mb-6 transition-all duration-500">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg">
              <span className="text-emerald-400 font-black text-base tracking-tighter">S</span>
            </div>
            <span className="text-white font-black tracking-widest text-sm font-mono [text-shadow:_0_2px_12px_rgb(0_0_0_/_90%)]">
              SWITCH
            </span>
          </div>

          {/* Title Swap */}
          <div className="transition-all duration-700 ease-out">
            <h1 className="font-black uppercase tracking-[-0.04em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] text-[clamp(3rem,9vw,9.5rem)] leading-[0.85]">
              {slide.title}
            </h1>
          </div>

          {/* Download Button */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/chukstechstack/SwitchInstaller/releases/latest/download/SwitchInstaller.msi"
              download
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/25 px-8 py-5 text-sm font-black uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-300 hover:scale-[1.02] overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10">Download for PC </span>
              <svg className="relative z-10 h-4 w-4 text-emerald-300 transition-colors duration-300 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      )}

      {/* 3. DOWNLOAD BUTTON FOR SECOND SLIDE (FITS OVER THE CLEAN IMAGE) */}
      {isSecondSlide && (
        <div className="absolute bottom-16 left-8 lg:left-20 z-30 flex items-center gap-4 transition-all duration-700">
          <a
            href="https://github.com/chukstechstack/SwitchInstaller/releases/latest/download/SwitchInstaller.msi"
            download
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/25 px-8 py-5 text-sm font-black uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-emerald-400 hover:text-black hover:border-emerald-300 hover:scale-[1.02] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10">Download for PC </span>
            <svg className="relative z-10 h-4 w-4 text-emerald-300 transition-colors duration-300 group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      )}

      {/* Pagination Dots */}
      <div className="absolute bottom-6 right-8 z-30 flex gap-2">
        {[0, 1].map((dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrentStep(dotIndex === 0 ? 0 : 1)}
            className={`h-1.5 rounded-full transition-all duration-500 ${(currentStep === dotIndex) || (currentStep === 2 && dotIndex === 0)
              ? "w-8 bg-white"
              : "w-2 bg-white/40"
              }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;