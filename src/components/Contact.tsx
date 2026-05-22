"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageSquare, CheckCircle, ArrowRight, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "social-media",
    budget: "20k-35k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map keys to readable text for WhatsApp formatting
    const serviceLabels: { [key: string]: string } = {
      "social-media": "Social Media Management",
      "graphic-designing": "Graphic Designing",
      "video-shooting": "Video Shooting",
      "video-editing": "Video Editing",
      "branding": "Branding Kit",
      "photography": "Product Photography",
      "website-design": "Website Design",
    };

    const budgetLabels: { [key: string]: string } = {
      "under-20k": "Under ₹20,000 (Basic Services)",
      "20k-35k": "₹20,000 - ₹35,000 (Bronze & Silver Campaign)",
      "35k-50k": "₹35,000 - ₹50,000 (Gold Campaign & Elite Retainer)",
      "50k-plus": "Over ₹50,000 (Premium Web & Custom Campaign)",
    };

    const selectedService = serviceLabels[formData.service] || formData.service;
    const selectedBudget = budgetLabels[formData.budget] || formData.budget;

    // Formatted WhatsApp message layout
    const whatsappMessage = `*New Creative Brief Inquiry - SHAZ Creatives*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `💼 *Service Required:* ${selectedService}\n` +
      `💰 *Project Budget:* ${selectedBudget}\n\n` +
      `📝 *Message & Requirements:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/919884522083?text=${encodeURIComponent(whatsappMessage)}`;

    // Simulate API request/loader before redirecting
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Open WhatsApp link in new window/tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      // Reset form after delay
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          service: "social-media",
          budget: "20k-35k",
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-shaz-black overflow-hidden z-10">
      {/* Background glowing overlays */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-shaz-magenta/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Links & Interactive Map */}
          <div className="lg:col-span-5 flex flex-col text-left justify-between h-full">
            <div>
              <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3 block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-6 leading-tight">
                Let&apos;s Build Your <span className="text-gradient-purple-magenta">Legacy.</span>
              </h2>
              <p className="text-shaz-white/60 font-light text-sm md:text-base leading-relaxed mb-10">
                Have a campaign project, custom branding request, or premium web build? Contact our creative desk directly or send us an inquiry.
              </p>

              {/* Direct Channels */}
              <div className="flex flex-col gap-5 mb-10">
                <a
                  href="tel:+919884522083"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-350 interactive"
                >
                  <div className="w-10 h-10 rounded-xl bg-shaz-purple/10 flex items-center justify-center text-shaz-purple">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/45 font-mono uppercase">Call Creative Desk</span>
                    <span className="text-sm font-bold text-white">+91 98845 22083</span>
                  </div>
                </a>

                <a
                  href="mailto:shazconsulting77@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-350 interactive"
                >
                  <div className="w-10 h-10 rounded-xl bg-shaz-magenta/10 flex items-center justify-center text-shaz-magenta">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/45 font-mono uppercase">Email Creative Desk</span>
                    <span className="text-sm font-bold text-white">shazconsulting77@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919884522083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 hover:border-green-500/30 hover:bg-green-500/15 transition-all duration-350 interactive"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center text-green-500">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-green-400 font-mono uppercase">WhatsApp Chat</span>
                    <span className="text-sm font-bold text-white">Open Instant WhatsApp Link</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Premium CSS Vector Map Placeholder */}
            <div className="w-full h-56 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-shaz-black relative overflow-hidden flex flex-col justify-end p-6">
              {/* Map grid coordinate overlays */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Abstract topographic vectors */}
              <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-dashed border-white/5 flex items-center justify-center" />
              </div>

              {/* Pulsing Target Location Dot */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-shaz-gold/15 absolute animate-ping [animation-duration:2.5s]" />
                <div className="w-6 h-6 rounded-full bg-shaz-gold/30 absolute animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-shaz-gold z-10 shadow-[0_0_8px_#FFD54A]" />
              </div>

              <div className="relative z-10 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-shaz-gold" />
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-white/40 uppercase leading-none">SHAZ Headquarters</span>
                  <span className="text-xs text-white/70 font-semibold mt-1">Chennai, India // Coordinates Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Luxury Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="e.g. Siddharth Roy"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/5 border border-white/15 focus:border-shaz-purple hover:border-white/20 transition-colors duration-300 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-shaz-purple"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="e.g. siddharth@brand.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/5 border border-white/15 focus:border-shaz-purple hover:border-white/20 transition-colors duration-300 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-shaz-purple"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="service" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Requested Service</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="bg-[#0c0c16] border border-white/15 focus:border-shaz-purple hover:border-white/20 transition-colors duration-300 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-shaz-purple appearance-none cursor-pointer"
                        >
                          <option value="social-media">Social Media Management</option>
                          <option value="graphic-designing">Graphic Designing</option>
                          <option value="video-shooting">Video Shooting</option>
                          <option value="video-editing">Video Editing</option>
                          <option value="branding">Branding Kit</option>
                          <option value="photography">Product Photography</option>
                          <option value="website-design">Website Design</option>
                        </select>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="budget" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Project Budget (INR)</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="bg-[#0c0c16] border border-white/15 focus:border-shaz-purple hover:border-white/20 transition-colors duration-300 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-shaz-purple appearance-none cursor-pointer"
                        >
                          <option value="under-20k">Under ₹20,000 (Basic Services)</option>
                          <option value="20k-35k">₹20,000 - ₹35,000 (Bronze & Silver Campaign)</option>
                          <option value="35k-50k">₹35,000 - ₹50,000 (Gold Campaign & Elite Retainer)</option>
                          <option value="50k-plus">Over ₹50,000 (Premium Web & Custom Campaign)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                      <label htmlFor="message" className="text-[10px] font-mono tracking-wider text-white/40 uppercase">Message & Requirements</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Detail your goals, assets requirements, timelines..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/5 border border-white/15 focus:border-shaz-purple hover:border-white/20 transition-colors duration-300 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-shaz-purple resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative group inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-shaz-black bg-shaz-white border border-shaz-white transition-all duration-350 interactive disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 rounded-full border-2 border-shaz-black/30 border-t-shaz-black animate-spin" />
                      ) : (
                        <>
                          Submit Brief
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <CheckCircle className="w-16 h-16 text-shaz-gold mb-6 animate-bounce" />
                    <h3 className="text-2xl font-black font-display text-white mb-3">Inquiry Dispatched Successfully</h3>
                    <p className="text-sm text-white/60 font-light max-w-sm leading-relaxed mb-6">
                      Thank you for submitting your creative brief. A strategist from our Chennai headquarters will review your details and reach out within 24 hours.
                    </p>
                    <div className="w-32 h-[1px] bg-white/10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
