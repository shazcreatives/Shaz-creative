"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Camera, Layers, Sliders, Smartphone, Sparkles } from "lucide-react";

interface ShowcaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tagline: string;
  icon: React.ComponentType<any>;
  accentColor: string;
  // This renders the custom premium interactive UI mockup for this category
  renderMockup: () => React.ReactNode;
}

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const items: ShowcaseItem[] = [
    {
      id: 1,
      category: "BRAND IDENTITIES",
      title: "Archetype Guidelines",
      tagline: "Structuring visual foundations.",
      description: "We map mathematical grid ratios, typography hierarchies, and curated dark color systems to establish an unforgettable, premium brand footprint.",
      icon: Layers,
      accentColor: "from-shaz-purple to-shaz-magenta",
      renderMockup: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-shaz-purple/10 to-shaz-black/40 border border-white/5 rounded-3xl overflow-hidden group">
          {/* Decorative Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
          
          {/* Glowing central math circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-shaz-purple/20 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full border border-dashed border-shaz-magenta/30 flex items-center justify-center animate-spin [animation-duration:20s]" />
            <div className="absolute w-28 h-28 rounded-full border border-shaz-gold/20" />
            <div className="absolute w-12 h-12 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10">
              <span className="text-shaz-gold font-mono text-sm">Φ</span>
            </div>
          </div>

          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-white/40">SYSTEM // BRAND KIT v1.0</span>
            <span className="text-[10px] font-mono text-shaz-gold">GRID CALIBRATION ACTIVE</span>
          </div>

          <div className="z-10 flex flex-col gap-2">
            <div className="h-[1px] w-full bg-white/10" />
            <div className="flex justify-between items-end text-xs font-mono">
              <span className="text-white/60">HEADING SF PRO // BOLD</span>
              <span className="text-shaz-magenta">98% SYMMETRY</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: "SOCIAL MEDIA CREATIVES",
      title: "High-Engagement Feeds",
      tagline: "Crafting thumb-stopping compositions.",
      description: "Bold layouts designed around social psychology. Micro-animations, customized font families, and contrasting gold-orange gradients that stand out in crowded feeds.",
      icon: Smartphone,
      accentColor: "from-shaz-magenta to-shaz-orange",
      renderMockup: () => (
        <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-br from-shaz-magenta/10 to-shaz-black/40 border border-white/5 rounded-3xl overflow-hidden">
          {/* Staggered Phone Layout mockups */}
          <div className="relative w-44 h-80 rounded-[32px] border-[6px] border-white/15 bg-shaz-black shadow-2xl flex flex-col justify-between p-3 overflow-hidden">
            <div className="w-16 h-3 bg-white/15 rounded-full mx-auto mb-1.5" />
            
            {/* Mock post */}
            <div className="flex-grow bg-white/5 rounded-2xl p-2.5 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-b from-shaz-magenta/10 to-transparent pointer-events-none" />
              
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-shaz-purple to-shaz-magenta" />
                <div className="w-16 h-1.5 bg-white/20 rounded-full" />
              </div>

              <div className="w-full aspect-square rounded-lg bg-gradient-to-tr from-shaz-purple/40 to-shaz-gold/40 flex items-center justify-center p-2">
                <span className="text-[10px] font-bold text-center tracking-tight text-white line-clamp-2">DOMINATE ATTENTION</span>
              </div>

              <div className="flex flex-col gap-1">
                <div className="w-full h-1.5 bg-white/15 rounded-full" />
                <div className="w-3/4 h-1.5 bg-white/15 rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Floating tags */}
          <div className="absolute top-12 right-6 glass-card px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-mono text-shaz-gold shadow-lg flex items-center gap-1 animate-bounce [animation-duration:3s]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>VIRAL FACTOR: 9.8x</span>
          </div>
        </div>
      )
    },
    {
      id: 3,
      category: "VIDEO CAMPAIGNS",
      title: "Commercial Direction",
      tagline: "Cinematic depth in vertical scales.",
      description: "Dynamic video editing matching beat drop cues, luxury color palettes (teal/amber & golden-purple), with precise sound design hooks that keep retention high.",
      icon: Sliders,
      accentColor: "from-shaz-orange to-shaz-gold",
      renderMockup: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-shaz-orange/10 to-shaz-black/40 border border-white/5 rounded-3xl overflow-hidden">
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono text-white/40">TIMELINE_SEQUENCE_24FPS</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              <span className="text-[10px] font-mono text-red-500">REC</span>
            </div>
          </div>

          {/* Sound waves and timeline player */}
          <div className="flex-grow flex items-center justify-center">
            <div className="flex items-end gap-1 h-20">
              {[30, 60, 45, 90, 75, 50, 80, 40, 65, 85, 35, 70, 55, 90, 60, 40, 75, 50, 30].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [h * 0.4, h, h * 0.4] }}
                  transition={{ duration: 1.5 + (i * 0.1) % 1, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-full bg-gradient-to-t from-shaz-orange to-shaz-gold"
                />
              ))}
            </div>
          </div>

          <div className="z-10 bg-white/5 border border-white/10 rounded-xl p-3 flex justify-between items-center text-xs font-mono">
            <span className="text-white/60">00:14:23:09</span>
            <span className="text-shaz-gold">LUT_CINEMATIC_GOLD</span>
            <span className="text-white/60">L-R STEREO</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      category: "PRODUCT SHOOTS",
      title: "Macro Luxury Framing",
      tagline: "Highlighting physical craftsmanship.",
      description: "Macro-level photography capturing texture details, premium highlights, and surface droplets to construct high-status commercial assets for product branding.",
      icon: Camera,
      accentColor: "from-shaz-gold to-shaz-purple",
      renderMockup: () => (
        <div className="w-full h-full relative flex items-center justify-center p-6 bg-gradient-to-br from-shaz-gold/10 to-shaz-black/40 border border-white/5 rounded-3xl overflow-hidden">
          {/* Camera Viewfinder Crosshair */}
          <div className="absolute inset-8 border border-white/10 pointer-events-none flex items-center justify-center rounded-2xl">
            <div className="w-8 h-[1px] bg-white/30 absolute" />
            <div className="h-8 w-[1px] bg-white/30 absolute" />
            
            {/* Viewfinder brackets */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/30" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/30" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/30" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/30" />
          </div>

          {/* Premium Glowing Liquid Bottle mockup inside finder */}
          <div className="w-24 h-44 rounded-2xl bg-gradient-to-b from-shaz-gold/30 via-white/5 to-shaz-black border border-white/10 flex flex-col justify-between p-3 relative shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-radial-glow-gold pointer-events-none" />
            <div className="w-6 h-3 bg-shaz-gold/40 border border-shaz-gold/20 rounded-md mx-auto" />
            <div className="flex-grow flex items-center justify-center">
              <span className="text-[10px] tracking-[0.3em] font-light text-white/30 uppercase text-center rotate-90">N°7</span>
            </div>
            <div className="text-[6px] font-mono text-center text-shaz-gold/80">SHAZ PARFUM</div>
          </div>

          <div className="absolute bottom-12 right-12 text-[10px] font-mono text-shaz-gold">F2.8 // ISO 100 // 85MM</div>
        </div>
      )
    },
    {
      id: 5,
      category: "LUXURY CLIENT VISUALS",
      title: "Cinematic High-Status Aesthetics",
      tagline: "Telling stories of exclusivity.",
      description: "Tailored to elite brands, we align content styles to luxury trends. Rich contrast values, glowing highlights, and premium digital pacing.",
      icon: Sparkles,
      accentColor: "from-shaz-purple to-shaz-magenta",
      renderMockup: () => (
        <div className="w-full h-full relative flex flex-col justify-between p-6 bg-gradient-to-br from-shaz-purple/10 to-shaz-black/40 border border-white/5 rounded-3xl overflow-hidden">
          {/* Abstract elegant network mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,43,226,0.1)_0%,rgba(0,0,0,0)_60%)]" />
          
          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono text-white/40">RENDER_ENGINE // RAY_TRACE</span>
            <span className="text-[10px] font-mono text-white/60">ACTIVE</span>
          </div>

          <div className="flex-grow flex items-center justify-center">
            {/* Spinning orbital rings */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/5 border-t-shaz-purple/40"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-dashed border-white/5 border-b-shaz-magenta/40"
              />
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-shaz-purple to-shaz-magenta opacity-25 blur-lg" />
              <Sparkles className="w-6 h-6 text-shaz-gold animate-pulse z-10" />
            </div>
          </div>

          <div className="flex justify-between items-end z-10">
            <span className="text-[9px] font-mono text-white/30">CLIENT EXCLUSIVITY PROTOCOL</span>
            <span className="text-[9px] font-mono text-shaz-magenta">SECURE NETWORK</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="showcase" ref={containerRef} className="relative bg-shaz-black z-10">
      {/* Scrollable track height: 5 items = 500vh */}
      <div className="h-[450vh] relative w-full">
        {/* Sticky inner container */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-12">
          
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Sequential Info Cards */}
            <div className="relative z-10 flex flex-col justify-center h-full">
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase">
                  CINEMATIC SHOWCASE
                </span>
              </div>

              <div className="relative min-h-[320px]">
                {items.map((item, idx) => {
                  const rangeStart = idx / items.length;
                  const rangeEnd = (idx + 1) / items.length;

                  // Create scroll triggers for opacity/translation
                  const opacity = useTransform(
                    smoothScrollProgress, 
                    [rangeStart - 0.08, rangeStart, rangeEnd - 0.08, rangeEnd], 
                    [0, 1, 1, 0]
                  );
                  const y = useTransform(
                    smoothScrollProgress, 
                    [rangeStart - 0.08, rangeStart, rangeEnd - 0.08, rangeEnd], 
                    [30, 0, 0, -30]
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={{ opacity, y, pointerEvents: idx === 0 ? "auto" : "none" }}
                      className={`absolute inset-0 flex flex-col justify-center ${idx === 0 ? "relative" : ""}`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.accentColor} flex items-center justify-center`}>
                          <item.icon className="w-4 h-4 text-shaz-white" />
                        </div>
                        <span className="text-xs font-bold tracking-[0.2em] font-mono text-shaz-white/60 uppercase">
                          {item.category}
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-4 leading-tight">
                        {item.title}
                      </h2>
                      
                      <p className="text-sm md:text-base font-semibold text-gradient-purple-magenta mb-4">
                        {item.tagline}
                      </p>

                      <p className="text-sm md:text-base text-shaz-white/50 font-light leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar Indicators */}
              <div className="mt-8 flex gap-2">
                {items.map((item, idx) => {
                  const rangeStart = idx / items.length;
                  const rangeEnd = (idx + 1) / items.length;

                  const widthScale = useTransform(
                    smoothScrollProgress,
                    [rangeStart, rangeEnd],
                    ["0%", "100%"]
                  );

                  return (
                    <div key={item.id} className="h-[2px] flex-grow bg-white/10 rounded-full overflow-hidden relative">
                      <motion.div
                        style={{
                          width: widthScale,
                          backgroundColor: idx % 2 === 0 ? "#8A2BE2" : "#D946EF"
                        }}
                        className="h-full absolute left-0 top-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Visual Mockup Showcase Container */}
            <div className="relative w-full aspect-square md:max-w-xl mx-auto flex items-center justify-center">
              {/* Radial backgrounds for visual depth */}
              <div className="absolute inset-0 bg-radial-glow-purple scale-125 z-0" />
              
              <div className="w-full h-full relative z-10">
                {items.map((item, idx) => {
                  const rangeStart = idx / items.length;
                  const rangeEnd = (idx + 1) / items.length;

                  // Transform scales and translations for right-hand previews
                  const scale = useTransform(
                    smoothScrollProgress, 
                    [rangeStart - 0.08, rangeStart, rangeEnd - 0.08, rangeEnd], 
                    [0.85, 1, 1, 0.85]
                  );
                  const opacity = useTransform(
                    smoothScrollProgress, 
                    [rangeStart - 0.08, rangeStart, rangeEnd - 0.08, rangeEnd], 
                    [0, 1, 1, 0]
                  );
                  const rotate = useTransform(
                    smoothScrollProgress, 
                    [rangeStart - 0.08, rangeStart, rangeEnd - 0.08, rangeEnd], 
                    [4, 0, 0, -4]
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={{ scale, opacity, rotate, zIndex: items.length - idx }}
                      className="absolute inset-0"
                    >
                      {item.renderMockup()}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
