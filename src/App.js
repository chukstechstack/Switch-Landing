import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="bg-black min-h-screen text-white relative selection:bg-emerald-400 selection:text-black overflow-x-hidden">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* Section 1: Locked Hero background */}
      <div className="sticky top-0 h-screen w-full z-10 overflow-hidden">
        <Hero />
      </div>

      {/* Section 2: Smooth architectural overlay - ID updated to match Navbar scroll target */}
      <div id="section-2" className="relative z-20 shadow-[0_-50px_90px_rgba(0,0,0,0.8)]">
        <Features />
      </div>

      {/* Section 3: Final closing footer */}
      <div id="footer" className="relative z-30">
        <Footer />
      </div>
    </main>
  );
}

export default App;