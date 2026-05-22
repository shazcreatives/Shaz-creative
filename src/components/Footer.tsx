"use client";

import React from "react";
import { ArrowUp, MessageSquare, Mail, Award } from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Showcase", href: "#showcase" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
    { name: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
    { name: "WhatsApp", href: "https://wa.me/919884522083", icon: MessageSquare },
    { name: "Email Us", href: "mailto:shazconsulting77@gmail.com", icon: Mail },
  ];

  return (
    <footer className="relative bg-[#030308] border-t border-white/5 py-16 md:py-24 px-6 md:px-12 overflow-hidden z-10">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-shaz-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Upper Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left">
          
          {/* Logo & Manifesto */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <a href="#" className="flex items-center interactive group">
              <img 
                src="/logo.png" 
                alt="SHAZ Creatives Logo" 
                className="h-24 md:h-28 w-auto object-contain -my-4 md:-my-5 transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
            <p className="text-xs text-white/55 leading-relaxed font-light max-w-sm">
              We operate at the leading edge of cinematic design, structuring vertical content campaigns and Next.js applications that secure visual influence.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/30">
              <Award className="w-3.5 h-3.5 text-shaz-gold" />
              <span>DELIVERING DIGITAL SUPREMACY // EST. 2025</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">
              RESOURCES
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs text-white/60 hover:text-white transition-colors duration-300 interactive"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-white/40 uppercase">
              CONNECT
            </span>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-300 text-xs text-white/70 hover:text-white interactive"
                >
                  <soc.icon className="w-3.5 h-3.5" />
                  <span>{soc.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="h-[1px] w-full bg-white/5" />

        {/* Lower Block */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-xs font-mono text-white/30">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>&copy; {new Date().getFullYear()} SHAZ CREATIVES. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition-colors">PRIVACY CODE</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">TERMS OF USE</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-[10px] font-bold tracking-widest text-white/60 hover:text-white uppercase transition-all duration-300 interactive"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3 h-3 animate-pulse" />
          </button>
        </div>
      </div>
    </footer>
  );
}
