"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarInitials: string;
  glowClass: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kabir Mehra",
      role: "Co-Founder",
      company: "Velo Apparel",
      quote: "SHAZ Creatives completely overhauled our Instagram strategy. Their premium video editing and typography style helped us secure over 8M views, translating directly to customer acquisitions. Outstanding attention to detail.",
      rating: 5,
      avatarInitials: "KM",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(138,43,226,0.15)]",
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "Creative Director",
      company: "Nourish Dining",
      quote: "The product photography they produced for our seasonal menu was cinematic poetry. They understand how light works on textures and captured our brand essence perfectly. Our table bookings are up 140% after launching the campaigns.",
      rating: 5,
      avatarInitials: "ER",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(217,70,239,0.15)]",
    },
    {
      id: 3,
      name: "Siddharth Roy",
      role: "Digital Creator",
      company: "SiddVlogs Tech",
      quote: "Finding an agency that understands pacing, sound cues, and hooks was a challenge until I met SHAZ. They handle overall page execution and viral vertical edits flawlessly, giving me the freedom to focus purely on creating.",
      rating: 5,
      avatarInitials: "SR",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]",
    },
    {
      id: 4,
      name: "Tara Deshmukh",
      role: "CEO & Founder",
      company: "Aethera Cosmetics",
      quote: "Their custom web design build is incredibly fast and animations are extremely fluid. The unified branding kit they crafted elevated our market positioning from a local brand to a global-ready luxury collection.",
      rating: 5,
      avatarInitials: "TD",
      glowClass: "group-hover:shadow-[0_0_20px_rgba(255,213,74,0.15)]",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-12 bg-shaz-black overflow-hidden z-10">
      {/* Background glow overlay */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-shaz-purple/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3">
            CLIENT PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-6">
            Endorsed By{" "}
            <span className="text-gradient-purple-magenta">High-Growth Brands.</span>
          </h2>
          <p className="text-shaz-white/60 font-light text-base md:text-lg max-w-2xl leading-relaxed">
            Read stories of digital transformations, viral content expansions, and bespoke premium layouts built for high-status organizations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-3xl glass-card p-8 md:p-10 group cursor-pointer transition-all duration-500 hover:-translate-y-1 ${t.glowClass}`}
            >
              {/* Giant quote background symbol */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 opacity-10 group-hover:scale-110 group-hover:opacity-15 transition-all duration-500 pointer-events-none" />

              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-shaz-gold" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="h-[1px] w-full bg-white/10 mb-6" />

              {/* User block */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-shaz-gold group-hover:border-shaz-gold/40 transition-colors duration-500">
                  {t.avatarInitials}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-bold text-white tracking-wide">{t.name}</span>
                  <span className="text-[10px] text-white/40 font-mono tracking-wider uppercase mt-0.5">
                    {t.role} {"//"} <span className="text-shaz-magenta">{t.company}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
