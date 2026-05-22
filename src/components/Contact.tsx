"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CheckCircle, ArrowRight, MapPin } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#25D366"
      d="M12.004 2C6.48 2 2.004 6.477 2.004 12c0 1.767.46 3.427 1.267 4.873l-1.35 4.927 5.04-1.32c1.4.76 2.99 1.187 4.673 1.187 5.523 0 10-4.477 10-10S17.527 2 12.004 2z"
    />
    <path
      fill="#FFF"
      d="M12.004 3.793a8.18 8.18 0 018.204 8.207 8.18 8.18 0 01-8.204 8.207c-1.53 0-2.983-.42-4.242-1.15l-.304-.176-3.14.823.839-3.06-.196-.312a8.15 8.15 0 01-1.161-4.332 8.18 8.18 0 018.204-8.207zm4.986 9.873c-.273-.137-1.618-.8-1.868-.89-.25-.09-.432-.136-.614.137-.182.272-.705.89-.864 1.072-.159.18-.318.205-.59.068a7.48 7.48 0 01-2.193-1.35 8.24 8.24 0 01-1.517-1.89c-.16-.273-.017-.42.12-.556.122-.122.272-.317.409-.476.136-.16.182-.272.272-.454.09-.181.046-.34-.022-.477-.069-.136-.614-1.477-.841-2.023-.222-.53-.448-.46-.614-.467-.16-.008-.34-.008-.523-.008-.182 0-.477.068-.727.34-.25.273-1.023 1.002-1.023 2.443 0 1.442 1.05 2.836 1.196 3.033.146.198 2.067 3.16 5.01 4.432.7.303 1.246.484 1.673.62.704.223 1.345.19 1.854.115.568-.084 1.748-.714 1.998-1.405.25-.69.25-1.284.175-1.405-.075-.12-.273-.18-.546-.318z"
    />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="url(#insta-grad-contact)"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <defs>
      <linearGradient id="insta-grad-contact" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M4 20h3V9.3L4 7v13z"
    />
    <path
      fill="#34A853"
      d="M17 20h3V7l-3 2.3V20z"
    />
    <path
      fill="#FBBC05"
      d="M4 7v2.3l3 2.2V9.3L4 7z"
    />
    <path
      fill="#EA4335"
      d="M17 9.3v2.2l3-2.2V7l-3 2.3z"
    />
    <path
      fill="#EA4335"
      d="M7 9.3v10.7h10V9.3L12 13 7 9.3z"
    />
    <path
      fill="#C4211B"
      d="M12 13l5-3.7V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v2.3l5 3.7z"
    />
  </svg>
);

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
              <div className="flex flex-col gap-4 mb-8">
                <a
                  href="tel:+919884522083"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] transition-all duration-350 interactive group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/10 flex items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-all duration-350 shrink-0">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/45 font-mono uppercase">Call Creative Desk</span>
                    <span className="text-sm font-bold text-white">+91 98845 22083</span>
                  </div>
                </a>

                <a
                  href="mailto:shazconsulting77@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#EA4335]/30 hover:bg-[#EA4335]/5 hover:shadow-[0_0_20px_rgba(234,67,53,0.15)] transition-all duration-350 interactive group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#EA4335]/10 flex items-center justify-center group-hover:scale-105 transition-all duration-350 shrink-0">
                    <GmailIcon className="w-6 h-6" />
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
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#25D366]/30 hover:bg-[#25D366]/5 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)] transition-all duration-350 interactive group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:scale-105 transition-all duration-350 shrink-0">
                    <WhatsAppIcon className="w-6.5 h-6.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/45 font-mono uppercase">WhatsApp Chat</span>
                    <span className="text-sm font-bold text-white">Open Instant WhatsApp Link</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/_shaz_creative_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/30 hover:bg-pink-500/5 hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] transition-all duration-350 interactive group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-105 transition-all duration-350 shrink-0">
                    <InstagramIcon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/45 font-mono uppercase">Instagram Direct</span>
                    <span className="text-sm font-bold text-white">@_shaz_creative_</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Embedded Google Maps in Dark Mode & Clickable Link */}
            <a
              href="https://maps.app.goo.gl/tAwNYqRSGTei6x7u7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-56 rounded-3xl border border-white/5 bg-shaz-black relative overflow-hidden group block cursor-pointer interactive"
            >
              {/* Overlay to intercept internal map actions and make the entire card clickable */}
              <div className="absolute inset-0 z-20 bg-transparent" />
              
              {/* Dark mode filter applied to the iframe */}
              <iframe
                src="https://maps.google.com/maps?q=13.106731,80.21109&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%) brightness(90%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70 group-hover:opacity-85 transition-opacity duration-500"
              />

              {/* Grid Overlay for matching design aesthetic */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-15" />
              
              {/* Bottom Label Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-shaz-black via-shaz-black/80 to-transparent p-6 z-25 pointer-events-none">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-shaz-gold" />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/40 uppercase leading-none">SHAZ Headquarters</span>
                    <span className="text-xs text-white/70 font-semibold mt-1">Chennai, India // Coordinates Active</span>
                  </div>
                </div>
              </div>
            </a>
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
