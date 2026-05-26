"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Share2, Palette, Video, Film, Sparkles, 
  Camera, TrendingUp, Clapperboard, Megaphone, Laptop,
  ArrowLeft, ArrowRight, Target, Globe
} from "lucide-react";

// Glow Card component with mouse tracking spot-light
function ServiceCard({ 
  title, 
  description, 
  icon: Icon, 
  colorClass,
  label,
  isActive,
  driveUrl
}: { 
  title: string; 
  description: string; 
  icon: React.ComponentType<{ className?: string }>; 
  colorClass: string;
  label: string;
  isActive: boolean;
  driveUrl?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative w-full h-full overflow-hidden rounded-2xl border transition-all duration-500 flex flex-col justify-between p-5 md:p-6 select-none ${
        isActive 
          ? "border-white/25 bg-white/[0.07] shadow-[0_20px_40px_rgba(0,0,0,0.5)]" 
          : "border-white/12 bg-white/[0.03]"
      }`}
    >
      {/* Spotlight overlay effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(220px circle at ${coords.x}px ${coords.y}px, rgba(138, 43, 226, 0.08), transparent 80%)`
        }}
      />
      
      {/* Spotlight border effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(100px circle at ${coords.x}px ${coords.y}px, rgba(217, 70, 239, 0.25), transparent 70%)`,
          padding: "1px",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-10 flex flex-col gap-3.5">
        {/* Label */}
        <span className="text-[9px] font-mono tracking-[0.25em] text-shaz-white/40 uppercase">
          {label}
        </span>

        {/* Icon container */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-500 ${colorClass} ${isActive ? "scale-105 border-white/25 bg-white/10" : ""}`}>
          <Icon className="w-5 h-5" />
        </div>

        {/* Title */}
        <h3 className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
          isActive ? "text-transparent bg-clip-text bg-gradient-to-r from-shaz-white via-shaz-white to-shaz-white/70" : "text-shaz-white"
        }`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-shaz-white/50 font-light leading-relaxed">
          {description}
        </p>
      </div>

      {driveUrl && isActive && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(driveUrl, "_blank", "noopener,noreferrer");
          }}
          className="relative z-20 mt-3 inline-flex items-center gap-1.5 self-start px-3 py-1.5 text-[9px] font-mono font-bold tracking-wider text-shaz-magenta border border-shaz-magenta/30 bg-shaz-magenta/5 hover:bg-shaz-magenta/15 hover:border-shaz-magenta/50 rounded-xl transition-all duration-300 pointer-events-auto shadow-md shadow-black/10 animate-fade-in"
        >
          <span>VIEW DRIVE ASSETS &rarr;</span>
        </button>
      )}
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Social Media Management",
      description: "Complete handling of your digital profiles. Growth, schedule, community management, and optimization.",
      icon: Share2,
      colorClass: "text-shaz-purple group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]",
      label: "[ 01 // SOCIAL ]",
    },
    {
      title: "Graphic Designing",
      description: "Visual assets that speak premium. Brand guides, creatives, typography, and luxury visual storytelling.",
      icon: Palette,
      colorClass: "text-shaz-magenta group-hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]",
      label: "[ 02 // CREATIVE ]",
    },
    {
      title: "Video Shooting",
      description: "Professional high-end, 4K camera gear capturing cinematic visual narratives for commercials and ads.",
      icon: Video,
      colorClass: "text-shaz-orange group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]",
      label: "[ 03 // PRODUCTION ]",
    },
    {
      title: "Video Editing",
      description: "Post-production mastery. Storytelling, color-grading, premium sound engineering, and seamless pacing.",
      icon: Film,
      colorClass: "text-shaz-gold group-hover:shadow-[0_0_15px_rgba(255,213,74,0.5)]",
      label: "[ 04 // EDITING ]",
    },
    {
      title: "Branding",
      description: "Unifying logo designs, messaging, kits, and guidelines that make your business stick out in high society.",
      icon: Sparkles,
      colorClass: "text-shaz-purple group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]",
      label: "[ 05 // STRATEGY ]",
    },
    {
      title: "Product Photography",
      description: "Cinematic commercial shoots for luxury items, restaurants, fashion, and physical packaging.",
      icon: Camera,
      colorClass: "text-shaz-magenta group-hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]",
      label: "[ 06 // MEDIA ]",
    },
    {
      title: "Instagram Growth",
      description: "Actionable funnel strategy, engagement models, and viral content targeting to rapidly scale followers.",
      icon: TrendingUp,
      colorClass: "text-shaz-orange group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]",
      label: "[ 07 // AUDIENCE ]",
    },
    {
      title: "Reels Creation",
      description: "Optimized vertical video curation, hooks research, scripting, trending audio, and caption formatting.",
      icon: Clapperboard,
      colorClass: "text-shaz-gold group-hover:shadow-[0_0_15px_rgba(255,213,74,0.5)]",
      label: "[ 08 // CONTENT ]",
    },
    {
      title: "Meta Ads",
      description: "High-converting campaign setups on Facebook and Instagram. Targeted funnels, copy hooks, and pixel setups.",
      icon: Target,
      colorClass: "text-shaz-purple group-hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]",
      label: "[ 09 // META ]",
      driveUrl: "https://drive.google.com/drive/folders/1qx24p8srT1My2J0lTdS3NwEr1-WaEI9I"
    },
    {
      title: "Google Ads",
      description: "Search, display, and YouTube ad campaigns designed to capture active buyer intent and maximize ROI.",
      icon: Globe,
      colorClass: "text-shaz-magenta group-hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]",
      label: "[ 10 // GOOGLE ]",
      driveUrl: "https://drive.google.com/drive/folders/1qx24p8srT1My2J0lTdS3NwEr1-WaEI9I"
    },
    {
      title: "Ads & Marketing",
      description: "Data-driven targeting strategy. Meta, Google, and Youtube ads managed with premium lead magnets.",
      icon: Megaphone,
      colorClass: "text-shaz-orange group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]",
      label: "[ 11 // MARKETING ]",
    },
    {
      title: "Website Design",
      description: "Luxury websites built with framer layouts, optimized Next.js frameworks, and blazing-fast SEO.",
      icon: Laptop,
      colorClass: "text-shaz-gold group-hover:shadow-[0_0_15px_rgba(255,213,74,0.5)]",
      label: "[ 12 // DIGITAL ]",
    },
  ];

  const N = services.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);
  const [windowWidth, setWindowWidth] = useState(1200);

  const carouselRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);

  // Wheel scroll handler to slide carousel on mouse scroll / trackpad swipe
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleWheelEvent = (e: WheelEvent) => {
      const now = Date.now();
      const threshold = 10;
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      if (absX > threshold || absY > threshold) {
        if (absX > absY) {
          // Horizontal scroll: prevent page navigation (back/forward history swipe gestures)
          e.preventDefault();
          if (now - lastScrollTime.current > 400) {
            if (e.deltaX > 0) {
              setActiveIndex((prev) => prev + 1);
            } else {
              setActiveIndex((prev) => prev - 1);
            }
            lastScrollTime.current = now;
          }
        } else {
          // Vertical scroll: do not preventDefault to avoid scroll trapping, but slide the carousel.
          if (now - lastScrollTime.current > 500) {
            if (e.deltaY > 0) {
              setActiveIndex((prev) => prev + 1);
            } else {
              setActiveIndex((prev) => prev - 1);
            }
            lastScrollTime.current = now;
          }
        }
      }
    };

    el.addEventListener("wheel", handleWheelEvent, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheelEvent);
    };
  }, []);

  // Track responsive screen size updates
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 480) {
        setCardWidth(Math.min(window.innerWidth - 64, 280));
      } else if (window.innerWidth < 640) {
        setCardWidth(Math.min(window.innerWidth - 80, 280));
      } else if (window.innerWidth < 1024) {
        setCardWidth(240);
      } else {
        setCardWidth(280);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto rotation loop (resets automatically on manual interaction)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const normalizedIndex = ((activeIndex % N) + N) % N;
  const isMobile = windowWidth < 640;

  // Calculates x, scale, opacity, blur, and zIndex for a flat, linear scale carousel
  const getCardTransforms = (idxDiff: number) => {
    // Spacing multiplier adjusted to prevent congestion on mobile
    const spacing = cardWidth * (isMobile ? 1.25 : 1.08);
    const absDiff = Math.abs(idxDiff);

    // Hide everything beyond the immediate neighbors on mobile (3 cards visible max)
    if (isMobile && absDiff > 1) {
      return {
        x: idxDiff * spacing,
        scale: 0.6,
        opacity: 0,
        blur: 8,
        zIndex: 0
      };
    }

    const x = idxDiff * spacing;

    switch (idxDiff) {
      case 0:
        return { x, scale: isMobile ? 1.0 : 1.15, opacity: 1, blur: 0, zIndex: 100 };
      case 1:
      case -1:
        return { x, scale: isMobile ? 0.8 : 0.9, opacity: isMobile ? 0.25 : 0.95, blur: isMobile ? 2.5 : 1.2, zIndex: 50 };
      case 2:
      case -2:
        return { x, scale: 0.76, opacity: 0.8, blur: 3, zIndex: 20 };
      default:
        // Hidden cards in the queue
        return {
          x,
          scale: 0.6,
          opacity: 0,
          blur: 10,
          zIndex: 0
        };
    }
  };

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 bg-shaz-black overflow-hidden z-10 select-none">
      {/* Background radial overlays */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-magenta/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12 md:mb-8 text-center max-w-3xl items-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white uppercase mb-3"
          >
            OUR EXPERTISE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-6 leading-tight"
          >
            Digital Capabilities Built to{" "}
            <span className="text-gradient-purple-magenta">Command Attention.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-shaz-white/60 font-light text-sm md:text-base leading-relaxed max-w-2xl"
          >
            Explore our specialized creative vectors. Drag to slide the cards or click any side card to center and reveal details.
          </motion.p>
        </div>

        {/* 3D Flat Carousel Scene */}
        <div className="relative w-full h-[340px] sm:h-[300px] flex items-center justify-center overflow-visible mt-6 md:mt-8">
          
          {/* Left/Right Floating Navigation */}
          <div className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
            <button
              onClick={() => setActiveIndex((prev) => prev - 1)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card border border-white/5 hover:border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 interactive shadow-lg hover:bg-white/5 active:scale-95"
              aria-label="Previous service"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          
          <div className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 z-30 hidden sm:block">
            <button
              onClick={() => setActiveIndex((prev) => prev + 1)}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-card border border-white/5 hover:border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 interactive shadow-lg hover:bg-white/5 active:scale-95"
              aria-label="Next service"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Linear viewport wrapper */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            
            {/* Flat Linear Carousel container */}
            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => {
                const threshold = 40;
                if (info.offset.x < -threshold) {
                  setActiveIndex((prev) => prev + 1);
                } else if (info.offset.x > threshold) {
                  setActiveIndex((prev) => prev - 1);
                }
              }}
              className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              {services.map((service, i) => {
                // Calculate shortest distance in a circular buffer
                let idxDiff = i - normalizedIndex;
                const halfN = N / 2;
                if (idxDiff > halfN) idxDiff -= N;
                if (idxDiff < -halfN) idxDiff += N;

                const { x, scale, opacity, blur, zIndex } = getCardTransforms(idxDiff);
                const isActive = i === normalizedIndex;

                return (
                  <motion.div
                    key={service.title}
                    className="absolute"
                    style={{
                      width: `${cardWidth}px`,
                      height: isMobile ? "280px" : "240px",
                    }}
                    animate={{
                      x: x,
                      opacity: opacity,
                      scale: scale,
                      zIndex: zIndex,
                      filter: `blur(${blur}px)`,
                    }}
                    transition={{ type: "spring", stiffness: 60, damping: 18 }}
                  >
                    <div 
                      className="w-full h-full cursor-pointer pointer-events-auto" 
                      onClick={() => {
                        if (!isActive) {
                          // Slides smoothly by relative index jumps
                          setActiveIndex(activeIndex + idxDiff);
                        }
                      }}
                    >
                      <ServiceCard
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        colorClass={service.colorClass}
                        label={service.label}
                        isActive={isActive}
                        driveUrl={service.driveUrl}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
            
          </div>
        </div>

        {/* Indicators at the bottom */}
        <div className="flex justify-center gap-2.5 mt-8 z-20">
          {services.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  const cycles = Math.floor(activeIndex / N);
                  let targetIdx = cycles * N + idx;
                  
                  // Optimize rotation direction
                  const halfN = N / 2;
                  if (targetIdx - activeIndex > halfN) targetIdx -= N;
                  else if (targetIdx - activeIndex < -halfN) targetIdx += N;
                  
                  setActiveIndex(targetIdx);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === normalizedIndex 
                    ? "w-8 bg-gradient-to-r from-shaz-purple via-shaz-magenta to-shaz-gold shadow-[0_0_8px_rgba(217,70,239,0.5)]" 
                    : "w-2 bg-white/10 hover:bg-white/20"
                }`}
                aria-label={`Go to service ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
