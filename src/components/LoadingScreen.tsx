"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds loader
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-shaz-black z-[99999] flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="relative flex flex-col items-center max-w-xs w-full px-6">
        {/* Soft background glows */}
        <div className="absolute w-48 h-48 rounded-full bg-shaz-purple/20 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-40 h-40 rounded-full bg-shaz-magenta/10 blur-[40px] top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2" />

        {/* Sleek Cinematic Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="z-10 mb-8 relative flex items-center justify-center"
        >
          <img 
            src="/logo.png" 
            alt="SHAZ Creatives Logo" 
            className="h-36 md:h-48 w-auto object-contain" 
          />
        </motion.div>

        {/* Counter UI */}
        <div className="w-full relative z-10 mt-6">
          <div className="flex justify-between items-end text-[10px] font-mono text-shaz-white/45 mb-2.5 tracking-wider">
            <span>INITIATING CREATIVE DRIVE</span>
            <span>{Math.round(count)}%</span>
          </div>

          {/* Glowing Line Loader */}
          <div className="w-full h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-shaz-purple via-shaz-magenta to-shaz-gold shadow-[0_0_8px_rgba(217,70,239,0.8)]"
              style={{ width: `${count}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
