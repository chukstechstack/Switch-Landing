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

      {/* Hero section in normal document flow - No sticky jitter */}
      <Hero />



      {/* Section 2: Clean architectural overlay */}
      <div id="section-2" className="relative z-20 bg-black shadow-[0_-50px_90px_rgba(0,0,0,0.8)]">
        <Features />
      </div>

      {/* Section 3: Final closing footer */}
      <div id="footer" className="relative z-30 bg-black">
        <Footer />
      </div>
    </main>
  );
}

export default App;