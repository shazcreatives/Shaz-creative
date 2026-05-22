"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Lightbulb, Compass, Zap } from "lucide-react";

// Count-up helper component
function StatCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = 50;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = Math.ceil(end / totalSteps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const processSteps = [
    {
      id: "01",
      title: "Audit & Strategy",
      description: "We deep-dive into your niche, analyzing competitors and target markets to uncover visual deficiencies and viral growth hooks.",
      icon: Target,
    },
    {
      id: "02",
      title: "Visual Calibration",
      description: "Our designers construct high-status brand rules, tailored typography scales, custom color templates, and luxury grid guides.",
      icon: Lightbulb,
    },
    {
      id: "03",
      title: "Cinematic Capture",
      description: "We shoot with professional DSLR setups, optimizing angles, high-end audio captures, and studio-grade lights to capture premium raw assets.",
      icon: Compass,
    },
    {
      id: "04",
      title: "Deploy & Dominate",
      description: "We launch edits with optimized audio hooks, handle daily profile scheduling, and engage traffic to convert attention into direct growth.",
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 bg-shaz-black overflow-hidden z-10">
      {/* Background ambient radial glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-magenta/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          <div className="lg:col-span-4 flex flex-col text-left">
            <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3">
              AGENCY MANIFESTO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-shaz-white leading-tight">
              We Do Not Build Templates. We Engineering <span className="text-gradient-purple-magenta">Exclusivity.</span>
            </h2>
          </div>

          <div className="lg:col-span-8 text-left">
            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed mb-6 font-display">
              SHAZ Creatives operates at the intersection of high-fidelity aesthetics and digital performance. We construct luxury branding files, premium reels, and Next.js applications designed to dominate audience attention.
            </p>
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-light">
              We partner with forward-thinking restaurants, real-estate firms, fashion designers, and scaling creators. Our philosophy is rooted in cinematic quality, responsive tech layouts, and data-backed algorithms.
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="rounded-2xl bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col text-left justify-between min-h-[160px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-shaz-purple/5 to-transparent pointer-events-none" />
            <StatCounter value={220} suffix="+" />
            <div className="mt-4">
              <span className="block text-xs font-mono font-bold tracking-wider text-shaz-magenta uppercase">Projects Completed</span>
              <span className="text-[10px] text-white/40 font-light mt-1 block">High-status digital assets delivery</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col text-left justify-between min-h-[160px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-shaz-magenta/5 to-transparent pointer-events-none" />
            <StatCounter value={100} suffix="%" />
            <div className="mt-4">
              <span className="block text-xs font-mono font-bold tracking-wider text-shaz-gold uppercase">Client Satisfaction</span>
              <span className="text-[10px] text-white/40 font-light mt-1 block">Long-term retainer relationships</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col text-left justify-between min-h-[160px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-shaz-orange/5 to-transparent pointer-events-none" />
            <StatCounter value={50} suffix="M+" />
            <div className="mt-4">
              <span className="block text-xs font-mono font-bold tracking-wider text-shaz-purple uppercase">Views Generated</span>
              <span className="text-[10px] text-white/40 font-light mt-1 block">Viral exposure across reels & shorts</span>
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/5 p-6 md:p-8 flex flex-col text-left justify-between min-h-[160px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-shaz-gold/5 to-transparent pointer-events-none" />
            <StatCounter value={4} suffix="X" />
            <div className="mt-4">
              <span className="block text-xs font-mono font-bold tracking-wider text-shaz-orange uppercase">Average Revenue Growth</span>
              <span className="text-[10px] text-white/40 font-light mt-1 block">Return on campaign invest</span>
            </div>
          </div>
        </div>

        {/* Creative Process Grid */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col text-left mb-12 md:mb-16">
            <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3">
              OUR PLAYBOOK
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
              The Creative Process Flow
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Number(step.id) * 0.1 }}
                className="flex flex-col text-left group"
              >
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                  <span className="text-2xl font-black font-mono text-white/15 group-hover:text-shaz-magenta transition-colors duration-500">
                    {step.id}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-shaz-gold group-hover:bg-white/10 transition-colors duration-500">
                    <step.icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-shaz-white/90">
                  {step.title}
                </h4>
                <p className="text-xs text-white/50 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
