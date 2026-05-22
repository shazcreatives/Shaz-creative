"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";

type SMMCampaignPackage = {
  name: string;
  price: string;
  tagline: string;
  reels: string;
  revisions: string;
  delivery: string;
  features: string[];
  popular?: boolean;
};

type MonthlySMMPackage = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

type SubServicePackage = {
  levelName: string;
  price: string;
  tagline: string;
  features: string[];
};

type CreativeServiceCategory = {
  title: string;
  packages: {
    starter: SubServicePackage;
    professional: SubServicePackage;
    premium: SubServicePackage;
  };
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "monthly" | "services">("campaigns");

  // Sub-toggles for the creative services cards
  const [graphicsLevel, setGraphicsLevel] = useState<"starter" | "professional" | "premium">("starter");
  const [shootingLevel, setShootingLevel] = useState<"starter" | "professional" | "premium">("starter");
  const [webLevel, setWebLevel] = useState<"starter" | "professional" | "premium">("starter");

  // 1. SMM Reel Campaigns (from PDF)
  const smmCampaigns: SMMCampaignPackage[] = [
    {
      name: "Bronze Package",
      price: "₹20,000",
      tagline: "The perfect spark to launch your digital presence.",
      reels: "07 Reels",
      revisions: "2 Revisions",
      delivery: "7-10 Days",
      features: [
        "07 Reels (Shot on Camera)",
        "Trend-Based Reel Formats",
        "Overall Page Handling",
        "Standard Engagement Support",
        "Delivery in 7-10 Days",
        "2 Revision Cycles Included",
      ],
    },
    {
      name: "Silver Package",
      price: "₹35,000",
      tagline: "High-impact content to accelerate your brand growth.",
      reels: "10 Reels",
      revisions: "3 Revisions",
      delivery: "7-10 Days",
      popular: true,
      features: [
        "10 Reels (Shot on Camera)",
        "Trend-Based Reel Formats",
        "Overall Page Handling",
        "Priority Engagement Support",
        "Delivery in 7-10 Days",
        "3 Revision Cycles Included",
        "Story post strategy tips",
      ],
    },
    {
      name: "Gold Package",
      price: "₹50,000",
      tagline: "The ultimate standard in digital dominance.",
      reels: "15 Reels",
      revisions: "Unlimited Revisions",
      delivery: "9-18 Days",
      features: [
        "15 Reels (Shot on Camera)",
        "Trend-Based Reel Formats",
        "Full Page Takeover & Moderation",
        "Dedicated Engagement Specialist",
        "Flexible Delivery: 9-18 Days",
        "Unlimited Revisions",
        "Daily Story Updates Curation",
        "Custom solution consulting",
      ],
    },
  ];

  // 2. SMM Monthly Retainer Packages
  const smmMonthly: MonthlySMMPackage[] = [
    {
      name: "Starter SMM",
      price: "₹9,999/mo",
      tagline: "Basic profile upkeep and scheduling.",
      features: [
        "Regular feed posting (3 posts/week)",
        "Standard caption copywriting",
        "Targeted hashtag strategy",
        "Weekly story updates",
        "Basic monthly analytics review",
        "1 Platform (Instagram or Facebook)",
      ],
    },
    {
      name: "Growth SMM",
      price: "₹19,999/mo",
      tagline: "Active posting and engagement support.",
      popular: true,
      features: [
        "Consistent feed posting (5 posts/week)",
        "Professional caption writing & hashtags",
        "Daily story updates that connect",
        "Engagement support (replies & comments)",
        "Reel ideas & concepts consulting",
        "2 Platforms (Instagram & Facebook)",
        "Bi-weekly performance reports",
      ],
    },
    {
      name: "Premium SMM",
      price: "₹39,999/mo",
      tagline: "Complete digital growth takeover.",
      features: [
        "Daily posting (Feed + Reels)",
        "Advanced hashtag & SEO strategies",
        "Continuous daily story updates",
        "24/7 client engagement support app",
        "Content development & shooting support",
        "3 Platforms (Instagram, FB, LinkedIn/YT)",
        "Weekly data analytics reporting",
        "Dedicated account manager",
      ],
    },
  ];

  // 3. Creative Services Category Configurations
  const creativeServices: CreativeServiceCategory[] = [
    {
      title: "Graphic Designing",
      packages: {
        starter: {
          levelName: "Starter Pack",
          price: "₹4,999",
          tagline: "Perfect for single campaign launches.",
          features: [
            "5 Custom high-end creatives",
            "Sleek minimalist layout templates",
            "Source files delivered (.Figma/PSD)",
            "2 Revision cycles",
            "Delivery: 3-5 Days",
          ],
        },
        professional: {
          levelName: "Professional",
          price: "₹9,999",
          tagline: "Monthly assets for running companies.",
          features: [
            "12 Custom premium creatives",
            "Festival special posts templates",
            "Social media layouts & story assets",
            "5 Revision cycles",
            "Priority support",
            "Delivery: 5-7 Days",
          ],
        },
        premium: {
          levelName: "Premium Brand Kit",
          price: "₹19,999",
          tagline: "Complete identity design from scratch.",
          features: [
            "Complete Brand Guidelines Kit",
            "Custom logo design (3 proposals)",
            "Palette & Typography guidelines",
            "Business cards & letterhead templates",
            "Unlimited revision cycles",
            "Dedicated lead designer",
          ],
        },
      },
    },
    {
      title: "Video Shooting",
      packages: {
        starter: {
          levelName: "Reel Shoot",
          price: "₹7,999",
          tagline: "Quick recording session for vertical reels.",
          features: [
            "4 Reels recorded (1 Session)",
            "High-end Sony/Blackmagic setup",
            "Basic lighting and audio set",
            "Delivery of raw 4K footages",
            "1 location allowed",
          ],
        },
        professional: {
          levelName: "Professional Shoot",
          price: "₹14,999",
          tagline: "Comprehensive production for core campaigns.",
          features: [
            "8 Reels recorded (2 Sessions)",
            "Studio-grade multi-light set",
            "Premium audio (Lavalier/Directional)",
            "Teleprompter assistance",
            "Up to 2 locations",
            "Raw files + basic color grading",
          ],
        },
        premium: {
          levelName: "Commercial Shoot",
          price: "₹29,999",
          tagline: "Elite commercial and advertising shoot.",
          features: [
            "Custom brand commercial or ad",
            "Full professional production crew",
            "Gimbal, dolly, and prime lenses",
            "Scriptwriting and storyboarding",
            "Creative director on-site",
            "Complete grading & raw file delivery",
          ],
        },
      },
    },
    {
      title: "Website Design",
      packages: {
        starter: {
          levelName: "Landing Page",
          price: "₹14,999",
          tagline: "High-converting single page application.",
          features: [
            "Single page premium layout",
            "Next.js or Framer interactive build",
            "Responsive layout (Mobile-first)",
            "Contact form database link",
            "SEO base setup",
            "3 Revision cycles",
          ],
        },
        professional: {
          levelName: "Business Website",
          price: "₹29,999",
          tagline: "Full-scale marketing web presence.",
          features: [
            "Up to 5 Pages premium build",
            "Custom animations & interactive elements",
            "CMS content integration",
            "Domain & host setup routing",
            "Performance & speed optimization",
            "5 Revision cycles",
            "1 Month technical support",
          ],
        },
        premium: {
          levelName: "Premium Custom Website",
          price: "₹59,999",
          tagline: "Bespoke high-end digital web application.",
          features: [
            "Custom bespoke Next.js architecture",
            "GSAP/Lenis high-fidelity animations",
            "Interactive dashboard panels",
            "Custom copy and marketing funnel",
            "SEO structure optimization",
            "Unlimited revision cycles",
            "3 Months technical support",
          ],
        },
      },
    },
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6 md:px-12 bg-shaz-black overflow-hidden z-10">
      {/* Background ambient radial glows */}
      <div className="absolute top-[30%] left-[-15%] w-[600px] h-[600px] rounded-full bg-shaz-purple/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[-15%] w-[600px] h-[600px] rounded-full bg-shaz-magenta/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3">
            PRICING OPTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-6">
            Transparent Pricing.{" "}
            <span className="text-gradient-purple-magenta">Built For Impact.</span>
          </h2>
          <p className="text-shaz-white/60 font-light text-base md:text-lg max-w-2xl leading-relaxed">
            Choose the mode of engagement that fits your scale. Simple, transparent tier plans with no hidden agency fees.
          </p>

          {/* Master Tab Switcher */}
          <div className="relative mt-10 p-1.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-between gap-1 w-full max-w-[650px] overflow-hidden">
            <button
              onClick={() => setActiveTab("campaigns")}
              className={`flex-grow py-3 px-4 md:px-6 rounded-full text-xs md:text-sm font-semibold transition-all relative z-10 interactive ${
                activeTab === "campaigns" ? "text-shaz-black" : "text-shaz-white/60 hover:text-shaz-white"
              }`}
            >
              {activeTab === "campaigns" && (
                <motion.div
                  layoutId="activePricingTab"
                  className="absolute inset-0 bg-shaz-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              Reel Campaigns (PDF Special)
            </button>

            <button
              onClick={() => setActiveTab("monthly")}
              className={`flex-grow py-3 px-4 md:px-6 rounded-full text-xs md:text-sm font-semibold transition-all relative z-10 interactive ${
                activeTab === "monthly" ? "text-shaz-black" : "text-shaz-white/60 hover:text-shaz-white"
              }`}
            >
              {activeTab === "monthly" && (
                <motion.div
                  layoutId="activePricingTab"
                  className="absolute inset-0 bg-shaz-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              Monthly Retainers (SMM)
            </button>

            <button
              onClick={() => setActiveTab("services")}
              className={`flex-grow py-3 px-4 md:px-6 rounded-full text-xs md:text-sm font-semibold transition-all relative z-10 interactive ${
                activeTab === "services" ? "text-shaz-black" : "text-shaz-white/60 hover:text-shaz-white"
              }`}
            >
              {activeTab === "services" && (
                <motion.div
                  layoutId="activePricingTab"
                  className="absolute inset-0 bg-shaz-white rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              Creative Services
            </button>
          </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            {/* 1. SMM Reel Campaigns Grid */}
            {activeTab === "campaigns" && (
              <motion.div
                key="campaigns"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              >
                {smmCampaigns.map((pkg, idx) => (
                  <div
                    key={pkg.name}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                      pkg.popular
                        ? "bg-gradient-to-b from-[#110B24]/80 to-[#0A0A16]/90 border border-shaz-purple/40 shadow-[0_4px_30px_rgba(138,43,226,0.15)]"
                        : "glass-card border border-white/5"
                    }`}
                  >
                    {/* Glow spotlights inside card */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-shaz-purple/5 to-transparent pointer-events-none" />

                    <div>
                      {pkg.popular && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-shaz-purple to-shaz-magenta text-[9px] font-bold tracking-[0.15em] text-white py-1 px-3.5 rounded-full uppercase shadow-md animate-pulse">
                          <Sparkles className="w-2.5 h-2.5" />
                          Most Popular
                        </div>
                      )}

                      <span className="text-xs font-mono font-bold tracking-widest text-shaz-white/40 uppercase">
                        CAMPAIGN PLAN
                      </span>
                      <h3 className="text-2xl font-black font-display tracking-tight text-white mt-1.5 mb-2.5">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-shaz-white/60 font-light min-h-[36px] leading-relaxed mb-6">
                        {pkg.tagline}
                      </p>

                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                          {pkg.price}
                        </span>
                        <span className="text-xs font-mono text-white/40">one-off</span>
                      </div>

                      <div className="h-[1px] w-full bg-white/10 mb-6" />

                      {/* Campaign quick-specs */}
                      <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                        <div className="bg-white/5 border border-white/5 rounded-xl py-2 px-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase mb-0.5">Deliverable</div>
                          <div className="text-xs font-bold text-shaz-gold">{pkg.reels}</div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl py-2 px-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase mb-0.5">Revisions</div>
                          <div className="text-xs font-bold text-shaz-magenta">{pkg.revisions}</div>
                        </div>
                        <div className="bg-white/5 border border-white/5 rounded-xl py-2 px-1">
                          <div className="text-[10px] font-mono text-white/40 uppercase mb-0.5">Timeline</div>
                          <div className="text-xs font-bold text-shaz-purple">{pkg.delivery}</div>
                        </div>
                      </div>

                      {/* Features list */}
                      <ul className="flex flex-col gap-3.5 mb-8">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-shaz-white/70 font-light">
                            <Check className="w-4 h-4 text-shaz-gold shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className={`w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 interactive border ${
                        pkg.popular
                          ? "bg-shaz-white text-shaz-black border-shaz-white hover:bg-transparent hover:text-white"
                          : "bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/20"
                      }`}
                    >
                      Choose Package
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 2. Monthly SMM Retainers Grid */}
            {activeTab === "monthly" && (
              <motion.div
                key="monthly"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              >
                {smmMonthly.map((pkg, idx) => (
                  <div
                    key={pkg.name}
                    className={`relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                      pkg.popular
                        ? "bg-gradient-to-b from-[#110B24]/80 to-[#0A0A16]/90 border border-shaz-purple/40 shadow-[0_4px_30px_rgba(138,43,226,0.15)]"
                        : "glass-card border border-white/5"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-shaz-purple/5 to-transparent pointer-events-none" />

                    <div>
                      {pkg.popular && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-shaz-purple to-shaz-magenta text-[9px] font-bold tracking-[0.15em] text-white py-1 px-3.5 rounded-full uppercase shadow-md animate-pulse">
                          <Sparkles className="w-2.5 h-2.5" />
                          Recommended
                        </div>
                      )}

                      <span className="text-xs font-mono font-bold tracking-widest text-shaz-white/40 uppercase">
                        RETAINER PLAN
                      </span>
                      <h3 className="text-2xl font-black font-display tracking-tight text-white mt-1.5 mb-2.5">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-shaz-white/60 font-light min-h-[36px] leading-relaxed mb-6">
                        {pkg.tagline}
                      </p>

                      <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                          {pkg.price}
                        </span>
                      </div>

                      <div className="h-[1px] w-full bg-white/10 mb-6" />

                      <ul className="flex flex-col gap-3.5 mb-8">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2.5 text-xs text-shaz-white/70 font-light">
                            <Check className="w-4 h-4 text-shaz-magenta shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className={`w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 interactive border ${
                        pkg.popular
                          ? "bg-shaz-white text-shaz-black border-shaz-white hover:bg-transparent hover:text-white"
                          : "bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/20"
                      }`}
                    >
                      Subscribe Plan
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. Creative Services Category Grid (With dynamic levels per card) */}
            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
              >
                {creativeServices.map((service, idx) => {
                  // Determine level state for each card
                  let level: "starter" | "professional" | "premium" = "starter";
                  let setLevel: React.Dispatch<React.SetStateAction<"starter" | "professional" | "premium">> = () => {};

                  if (idx === 0) {
                    level = graphicsLevel;
                    setLevel = setGraphicsLevel;
                  } else if (idx === 1) {
                    level = shootingLevel;
                    setLevel = setShootingLevel;
                  } else {
                    level = webLevel;
                    setLevel = setWebLevel;
                  }

                  const activePkg = service.packages[level];

                  return (
                    <div
                      key={service.title}
                      className="relative rounded-3xl p-8 flex flex-col justify-between overflow-hidden glass-card border border-white/5 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div>
                        {/* Sub-selector chips inside card */}
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-shaz-white/40 uppercase">
                            SERVICE CARD
                          </span>
                          
                          {/* Segmented controls inside the card */}
                          <div className="p-0.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-0.5">
                            {(["starter", "professional", "premium"] as const).map((lvl) => (
                              <button
                                key={lvl}
                                onClick={() => setLevel(lvl)}
                                className={`text-[9px] uppercase tracking-wider font-bold py-1.5 px-2 rounded-md transition-colors ${
                                  level === lvl
                                    ? "bg-shaz-white text-shaz-black font-extrabold"
                                    : "text-white/40 hover:text-white"
                                }`}
                              >
                                {lvl === "professional" ? "Pro" : lvl === "premium" ? "Prem" : "Start"}
                              </button>
                            ))}
                          </div>
                        </div>

                        <h3 className="text-2xl font-black font-display tracking-tight text-white mb-1.5">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gradient-purple-magenta font-semibold mb-4">
                          {activePkg.levelName}
                        </p>
                        <p className="text-xs text-shaz-white/50 font-light min-h-[32px] leading-relaxed mb-6">
                          {activePkg.tagline}
                        </p>

                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                            {activePkg.price}
                          </span>
                        </div>

                        <div className="h-[1px] w-full bg-white/10 mb-6" />

                        {/* Features list */}
                        <ul className="flex flex-col gap-3.5 mb-8">
                          {activePkg.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 text-xs text-shaz-white/70 font-light">
                              <Check className="w-4 h-4 text-shaz-gold shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href="#contact"
                        className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1.5 interactive border bg-transparent text-white border-white/10 hover:bg-white/5 hover:border-white/20"
                      >
                        Inquire Package
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PDF Notes & quotation guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden"
        >
          {/* Subtle decoration lines */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-radial-glow-purple opacity-20 pointer-events-none" />

          <div className="flex flex-col gap-2 max-w-xl">
            <h4 className="text-sm font-semibold tracking-wide text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-shaz-gold" />
              General Quotation Terms & Conditions
            </h4>
            <p className="text-xs text-shaz-white/50 leading-relaxed font-light">
              Quotation validity is 7 days. Pricing includes revisions depending on package tier. Additional revisions are priced at ₹150/cycle. Payment schedules are structured as: 50% Advance, 25% Midway, and 25% Final milestone. Note that influencer collaborations and ad budgets are separate from campaign retainer packages.
            </p>
          </div>

          <a
            href="https://wa.me/919884522083"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 relative group inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-shaz-black bg-shaz-white hover:bg-transparent hover:text-shaz-white border border-shaz-white transition-all duration-350 interactive"
          >
            Request Custom Quotation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
