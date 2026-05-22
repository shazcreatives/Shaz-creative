"use client";

import React from "react";
import { ArrowUp, Award } from "lucide-react";

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
    stroke="url(#insta-grad-footer)"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <defs>
      <linearGradient id="insta-grad-footer" x1="100%" y1="100%" x2="0%" y2="0%">
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
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/_shaz_creative_/", 
      icon: InstagramIcon,
      hoverClass: "hover:border-pink-500/30 hover:bg-pink-500/5 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)]"
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/919884522083", 
      icon: WhatsAppIcon,
      hoverClass: "hover:border-[#25D366]/30 hover:bg-[#25D366]/5 hover:text-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.15)]"
    },
    { 
      name: "Email Us", 
      href: "mailto:shazconsulting77@gmail.com", 
      icon: GmailIcon,
      hoverClass: "hover:border-[#EA4335]/30 hover:bg-[#EA4335]/5 hover:text-[#EA4335] hover:shadow-[0_0_15px_rgba(234,67,53,0.15)]"
    },
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
                  className={`flex items-center gap-2.5 py-2.5 px-4.5 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 text-xs text-white/70 interactive group ${soc.hoverClass}`}
                >
                  <soc.icon className="w-5 h-5 shrink-0" />
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
