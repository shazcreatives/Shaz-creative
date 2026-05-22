"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Showcase", href: "#showcase" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "glass-nav py-4 shadow-lg shadow-black/20" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center z-50 interactive group">
            <Image 
              src="/logo.png" 
              alt="SHAZ Creatives Logo" 
              width={150}
              height={150}
              priority
              className="h-24 md:h-28 w-auto object-contain -my-5 md:-my-7 transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-shaz-white/60 hover:text-shaz-white transition-colors relative duration-300 interactive py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-shaz-purple to-shaz-magenta group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-shaz-black bg-shaz-white hover:bg-transparent hover:text-shaz-white border border-shaz-white transition-all duration-300 overflow-hidden interactive group"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Start Project
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-shaz-white/80 hover:text-shaz-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-shaz-black/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden"
          >
            {/* Ambient background glow inside menu */}
            <div className="absolute w-72 h-72 rounded-full bg-shaz-purple/10 blur-[80px] top-1/4 left-1/4" />
            <div className="absolute w-60 h-60 rounded-full bg-shaz-magenta/5 blur-[60px] bottom-1/4 right-1/4" />

            <div className="flex flex-col items-center gap-8 z-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl font-bold text-shaz-white/70 hover:text-shaz-white hover:text-gradient-purple-magenta transition-all"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.08 }}
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-shaz-black bg-shaz-white hover:bg-transparent hover:text-shaz-white border border-shaz-white transition-all duration-300"
              >
                Start Project
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
