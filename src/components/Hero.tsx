"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-shaz-black px-6 md:px-12 pt-20">
      {/* Background Mesh Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Central glowing blur panel behind logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: ["-50%", "-45%", "-50%"],
            y: ["-50%", "-52%", "-50%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[500px] h-[80vw] max-w-[500px] rounded-full bg-gradient-to-tr from-shaz-purple/15 to-shaz-magenta/15 blur-[90px] z-0"
        />

        {/* Orange/Gold secondary ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: ["10%", "5%", "10%"],
            y: ["20%", "25%", "20%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-shaz-gold/5 blur-[80px]"
        />

        {/* Dark radial overlay for vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(5,5,12,0.85)_80%)]" />
      </div>

      {/* Main Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center flex-grow"
      >
        {/* Animated Brand Logo in Hero center */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8 select-none flex justify-center items-center"
        >
          {/* Outer glow ring behind the logo */}
          <div className="absolute w-80 h-36 rounded-full bg-gradient-to-r from-shaz-purple to-shaz-magenta opacity-35 blur-[45px] animate-pulse pointer-events-none z-0" />
          
          <img 
            src="/logo.png" 
            alt="SHAZ Creatives Logo" 
            className="relative z-10 h-64 md:h-80 w-auto object-contain" 
          />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-shaz-white leading-[1.08] mb-6 font-display max-w-4xl"
        >
          {/* Line by line reveal */}
          <span className="block mb-2">We Build Brands That</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-shaz-purple via-shaz-magenta to-shaz-gold pb-1 md:pb-3 drop-shadow-[0_2px_20px_rgba(138,43,226,0.35)]">
            Dominate Attention.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-shaz-white/60 font-light max-w-2xl mb-10 leading-relaxed"
        >
          Premium content creation, branding, video production & digital growth.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto relative group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-shaz-black bg-shaz-white hover:bg-transparent hover:text-shaz-white border border-shaz-white transition-all duration-350 interactive"
          >
            Start Your Project
          </a>

          <a
            href="#pricing"
            className="w-full sm:w-auto relative group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-shaz-white bg-transparent hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-350 interactive"
          >
            <Play className="w-4 h-4 fill-current text-shaz-white/80 group-hover:scale-105 transition-transform" />
            View Pricing
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 bottom-8"
      >
        <button
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-2 text-shaz-white/40 hover:text-shaz-white/80 transition-colors group interactive"
        >
          <span className="text-[10px] tracking-[0.2em] font-medium font-mono uppercase">Scroll to Discover</span>
          <div className="w-[20px] h-[32px] rounded-full border border-white/25 flex justify-center p-1.5">
            <div className="w-[3px] h-[6px] rounded-full bg-shaz-white animate-scroll-indicator" />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
