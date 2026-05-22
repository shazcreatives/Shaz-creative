"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, Heart, Eye, ArrowUpRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  category: string;
  projectName: string;
  tagline: string;
  metric: string;
  metricLabel: string;
  accentClass: string;
  renderVisual: () => React.ReactNode;
}

export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      category: "Restaurants",
      projectName: "L'Aura Bistro",
      tagline: "Rebranding a Michelin-star dining brand.",
      metric: "+140%",
      metricLabel: "Table Bookings Growth",
      accentClass: "from-amber-650 to-amber-900",
      renderVisual: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-amber-950/20 to-shaz-black border border-white/5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-radial-glow-gold opacity-10 group-hover:scale-110 transition-transform duration-700" />
          
          {/* Mock Elegant Menu Typography */}
          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-amber-500/60 uppercase">RESTAURANTS // CAS EST. 2025</span>
            <Heart className="w-4 h-4 text-amber-500/60 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-350" />
          </div>

          <div className="my-auto flex flex-col items-center justify-center text-center z-10">
            <span className="font-serif italic text-2xl md:text-3xl text-amber-200 tracking-wide">L&apos;Aura</span>
            <span className="text-[8px] tracking-[0.4em] font-light text-white/50 uppercase mt-1">BISTRO DE LUXE</span>
            
            {/* Minimalist plate outline */}
            <div className="w-20 h-20 rounded-full border border-white/5 mt-4 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-amber-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end z-10">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30 uppercase font-mono">Deliverables</span>
              <span className="text-xs text-white/70">Menu styling & SMM strategy</span>
            </div>
            <div className="text-[10px] text-amber-200 font-mono">BISTRO_KIT.ZIP</div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      category: "Fashion",
      projectName: "Studio MÆR",
      tagline: "Autumn apparel digital showcase campaign.",
      metric: "+8.5M",
      metricLabel: "Campaign Impressions",
      accentClass: "from-zinc-700 to-zinc-950",
      renderVisual: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-zinc-900/30 to-shaz-black border border-white/5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30 pointer-events-none" />

          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-white/40 uppercase">APPAREL // AUTUMN COLLECTION</span>
            <Eye className="w-4 h-4 text-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-350" />
          </div>

          <div className="my-auto flex flex-col items-center justify-center text-center z-10">
            <span className="text-3xl font-black font-display tracking-tight text-white">MÆR</span>
            <span className="text-[9px] tracking-[0.3em] font-light text-white/55 uppercase mt-1">Ready To Wear</span>
            
            {/* Minimalist luxury tags */}
            <div className="flex gap-2 mt-4 text-[7px] font-mono">
              <span className="border border-white/10 px-2 py-0.5 rounded text-white/40">COLOR: NOIR</span>
              <span className="border border-white/10 px-2 py-0.5 rounded text-white/40">SIZE: OS</span>
            </div>
          </div>

          <div className="flex justify-between items-end z-10">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30 uppercase font-mono">Directing</span>
              <span className="text-xs text-white/70">Concept shoot & editorial video</span>
            </div>
            <div className="text-[10px] text-white/50 font-mono">MAER_CO.MOV</div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      category: "Real Estate",
      projectName: "The Lumina",
      tagline: "3D visual positioning & architectural branding.",
      metric: "95%",
      metricLabel: "Pre-Leased Rate",
      accentClass: "from-blue-900 to-indigo-950",
      renderVisual: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-blue-950/20 to-shaz-black border border-white/5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_60%)]" />

          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-blue-450/70 uppercase">ARCHITECTURE // DIGITAL MAPPING</span>
            <Sparkles className="w-4 h-4 text-blue-450/60 group-hover:scale-110 transition-transform" />
          </div>

          <div className="my-auto flex flex-col items-center justify-center z-10">
            {/* Abstract architectural grid */}
            <div className="relative w-28 h-20 border border-white/10 flex items-center justify-center rounded-lg">
              <div className="absolute inset-2 border border-dashed border-blue-500/25" />
              <span className="text-[9px] font-mono text-blue-450 tracking-wider">LUMINA HEIGHTS</span>
            </div>
            <span className="text-xs font-mono text-white/30 mt-3">COORDINATES // 40.7128° N, 74.0060° W</span>
          </div>

          <div className="flex justify-between items-end z-10">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30 uppercase font-mono">Scope</span>
              <span className="text-xs text-white/70">3D Positioning & Landing Funnel</span>
            </div>
            <div className="text-[10px] text-blue-450 font-mono">T-L_ARCH.CAD</div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      category: "Influencers",
      projectName: "Vibe Media Co",
      tagline: "Content funnel scaling & branding takeover.",
      metric: "+12M",
      metricLabel: "YouTube Views Generated",
      accentClass: "from-pink-850 to-purple-950",
      renderVisual: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-pink-950/20 to-shaz-black border border-white/5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-radial-glow-magenta opacity-10" />

          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-pink-500/70 uppercase">INFLUENCER SCALING // MULTI-PLATFORM</span>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>

          <div className="my-auto flex flex-col items-center justify-center text-center z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-shaz-purple via-shaz-magenta to-shaz-gold p-0.5 mb-2 shadow-lg">
              <div className="w-full h-full bg-shaz-black rounded-full flex items-center justify-center text-[10px] font-bold text-white">VMC</div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Vibe Media Co.</span>
            <span className="text-[8px] font-mono text-shaz-magenta mt-1 uppercase tracking-widest">Growth Phase B</span>
          </div>

          <div className="flex justify-between items-end z-10">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30 uppercase font-mono">Scope</span>
              <span className="text-xs text-white/70">Short-form editing & hook funnel</span>
            </div>
            <div className="text-[10px] text-pink-500 font-mono">GROWTH_REPORT.PDF</div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      category: "Product Photography",
      projectName: "Elysian Skincare",
      tagline: "Cinematic commercial packaging and item shoot.",
      metric: "+75%",
      metricLabel: "E-Commerce Conversion",
      accentClass: "from-emerald-900 to-teal-950",
      renderVisual: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-emerald-950/20 to-shaz-black border border-white/5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,rgba(0,0,0,0)_60%)]" />

          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-emerald-500/70 uppercase">COMMERCIAL // HIGH-SPEED SHOOT</span>
            <span className="text-[9px] font-mono text-emerald-450">F1.4 ACTIVE</span>
          </div>

          <div className="my-auto flex flex-col items-center justify-center text-center z-10">
            <span className="text-2xl font-bold tracking-[0.2em] text-emerald-100 font-serif uppercase">ELYSIAN</span>
            <span className="text-[7px] tracking-[0.3em] font-light text-white/40 uppercase mt-0.5">Organics & Skincare</span>
            
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/60 rounded-full mt-4" />
          </div>

          <div className="flex justify-between items-end z-10">
            <div className="flex flex-col">
              <span className="text-[8px] text-white/30 uppercase font-mono">Scope</span>
              <span className="text-xs text-white/70">4K Macro photos & lighting set</span>
            </div>
            <div className="text-[10px] text-emerald-400 font-mono">ELYSIAN_RAW.DNG</div>
          </div>
        </div>
      ),
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 380; // card width + gaps
    const targetScroll = 
      direction === "left" 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-shaz-black overflow-hidden z-10">
      {/* Background glow meshes */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-shaz-magenta/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-xl flex flex-col text-left">
            <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3">
              CREATIVE ARCHIVES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-6">
              Selected Showcase.{" "}
              <span className="text-gradient-purple-magenta">High-Status Projects.</span>
            </h2>
            <p className="text-shaz-white/60 font-light text-base md:text-lg leading-relaxed">
              Explore key visual campaigns across restaurants, fashion houses, real estate projects, and influencers.
            </p>
          </div>

          {/* Desktop Navigation buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 interactive"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white flex items-center justify-center transition-all duration-300 interactive"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Apple-style horizontal scroll snap track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-scroll snap-x snap-mandatory pb-8 scrollbar-none select-none scroll-smooth touch-pan-x cursor-grab active:cursor-grabbing"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 snap-start flex flex-col gap-5 group"
            >
              {/* Image visual wrapper */}
              <div className="aspect-[3/4] w-full relative rounded-3xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                {item.renderVisual()}
              </div>

              {/* Detail block */}
              <div className="px-2 flex flex-col gap-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-shaz-magenta tracking-wider uppercase font-bold">
                    {item.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/25" />
                  <span className="text-[10px] font-mono text-white/40">PROJECT_N°0{item.id}</span>
                </div>

                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-gradient-purple-magenta transition-all flex items-center gap-1">
                    {item.projectName}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0 duration-300" />
                  </h3>
                  
                  {/* Dynamic metric bubble */}
                  <div className="text-right">
                    <span className="block text-sm font-bold text-shaz-gold font-mono tracking-tight leading-none">
                      {item.metric}
                    </span>
                    <span className="text-[7px] text-white/40 uppercase font-mono tracking-wider">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/50 font-light leading-relaxed">
                  {item.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
