"use client";

import React, { useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Folder } from "lucide-react";
import archiveData from "@/lib/creative_archives_data.json";

interface ArchiveItem {
  id: string;
  name: string;
  category: string;
  mimeType: string;
}

interface RawArchiveItem {
  id: string;
  name: string;
  mimeType: string;
}

interface FolderCardProps {
  name: string;
  count: number;
  items: ArchiveItem[];
  onClick: () => void;
}

const categoryFolderIds: Record<string, string> = {
  "Portfolio Shoots": "1DRzwvrNAby4c3JvK9TUBN2JgrO3oowrA",
  "AI Generated Videos": "1nWw7POi3vQZVJxBplAZfvikfmuVe2bfR",
  "Boutique": "1Y-3Nt4uzaB-0gaV1lZ0Ojykmww1NgXBG",
  "Cafe": "10BWJ1QVcH9cieuYouh18OSn679bx0ND1",
  "Car": "1wxWH-wwDds2HjNJRksDZi-XVYtHMp5f3",
  "Perfumes": "1Qm_2xuueJ4_l3LxHrAIKo0tKNwHBFnFd",
  "Sports": "16DpnABDFqvyFcz6XvO712iJN0TXwHDpe",
  "Tech": "1a_KCm3sMx0qJNDy0Df1nW8QSLep2ByUy",
  "All": "1qx24p8srT1My2J0lTdS3NwEr1-WaEI9I"
};

function FolderCard({ name, count, items, onClick }: FolderCardProps) {
  // Take up to 3 items to show in the stack peek
  const peekItems = items.slice(0, 3);

  return (
    <motion.div
      onClick={onClick}
      className="relative w-60 h-72 rounded-3xl cursor-pointer group flex flex-col justify-end border border-white/5 bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-500 overflow-visible shrink-0"
      whileHover="hover"
      initial="idle"
    >
      {/* Folder Tab Shape */}
      <div className="absolute -top-3 left-4 h-3.5 w-24 rounded-t-xl border-t border-x border-white/5 bg-[#0f0f18] group-hover:border-white/15 group-hover:bg-white/[0.03] transition-all duration-500" />

      {/* Files Sneak Peek Stack */}
      <div className="absolute inset-x-4 top-6 h-32 flex items-center justify-center overflow-visible pointer-events-none">
        {peekItems.map((item, idx) => {
          const rotation = idx === 0 ? -8 : idx === 2 ? 8 : 0;
          const xOffset = idx === 0 ? -16 : idx === 2 ? 16 : 0;
          const yOffset = idx === 0 ? 6 : idx === 2 ? 6 : 0;
          
          return (
            <motion.div
              key={item.id}
              className="absolute w-20 h-28 rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-shaz-darkGray origin-bottom"
              variants={{
                idle: {
                  y: 16 + yOffset,
                  rotate: rotation,
                  x: xOffset,
                  scale: 0.9,
                  opacity: 0.7
                },
                hover: {
                  y: -15 - (idx * 4),
                  rotate: rotation * 1.4,
                  x: xOffset * 1.3,
                  scale: 1.02,
                  opacity: 1
                }
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src={`https://drive.google.com/thumbnail?sz=w200&id=${item.id}`}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </motion.div>
          );
        })}
      </div>

      {/* Folder Front Pocket / Flap */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-[#110B24]/45 to-[#0A0A16]/95 border-t border-white/10 rounded-b-3xl z-20 backdrop-blur-md p-5 flex flex-col justify-end text-left">
        <span className="text-[8px] font-mono text-shaz-magenta uppercase font-bold tracking-wider mb-1.5 flex items-center gap-1">
          <Folder className="w-3.5 h-3.5 text-shaz-magenta" />
          Category Folder
        </span>
        <h4 className="text-sm font-bold text-white leading-tight group-hover:text-gradient-purple-magenta transition-all line-clamp-2">
          {name}
        </h4>
        <div className="text-[10px] font-mono text-white/40 mt-2 flex items-center justify-between">
          <span>{count} Video{count !== 1 ? "s" : ""}</span>
          <span className="text-shaz-purple font-semibold text-[8px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
            Open &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Flatten the drive database
  const allArchiveItems = useMemo(() => {
    const items: ArchiveItem[] = [];
    
    // Add portfolio shoots (root folder files)
    if (archiveData.portfolio_shoots) {
      (archiveData.portfolio_shoots as RawArchiveItem[]).forEach((item) => {
        items.push({
          id: item.id,
          name: item.name,
          category: "Portfolio Shoots",
          mimeType: item.mimeType
        });
      });
    }
    
    // Add subfolders
    if (archiveData.categories) {
      Object.entries(archiveData.categories as Record<string, RawArchiveItem[]>).forEach(([categoryName, categoryItems]) => {
        categoryItems.forEach((item) => {
          items.push({
            id: item.id,
            name: item.name,
            category: categoryName,
            mimeType: item.mimeType
          });
        });
      });
    }
    
    return items;
  }, []);

  // Compute category list dynamically, with custom additions and "All" placed at the end
  const categories = useMemo(() => {
    const list = [];
    if (archiveData.portfolio_shoots && archiveData.portfolio_shoots.length > 0) {
      list.push("Portfolio Shoots");
    }
    if (archiveData.categories) {
      Object.keys(archiveData.categories).forEach((cat) => {
        list.push(cat);
      });
    }
    list.push("All");
    return list;
  }, []);

  // Group items by category for folders peek
  const itemsByCategory = useMemo(() => {
    const groups: Record<string, ArchiveItem[]> = {};
    allArchiveItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [allArchiveItems]);

  // Compute items count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: allArchiveItems.length
    };
    allArchiveItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, [allArchiveItems]);

  // Scroll Carousel
  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 280;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleFolderClick = (categoryName: string) => {
    const lookupKey = categoryName === "All" ? "All" : categoryName;
    const folderId = categoryFolderIds[lookupKey];
    if (folderId) {
      window.open(`https://drive.google.com/drive/folders/${folderId}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-shaz-black overflow-hidden z-10">
      {/* Background glow meshes */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-shaz-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-shaz-magenta/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-xl flex flex-col text-left">
            <span className="text-xs font-semibold tracking-[0.3em] font-mono text-shaz-white/40 uppercase mb-3">
              PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-shaz-white mb-6">
              Selected Showcase.{" "}
              <span className="text-gradient-purple-magenta">Production Vault.</span>
            </h2>
            <p className="text-shaz-white/60 font-light text-base md:text-lg leading-relaxed">
              Explore our library of video productions, brand shoots, social media reels, and AI creatives. Click on any category folder below to open the assets directly in Google Drive.
            </p>
          </div>
          
          {/* Stats Badges */}
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex flex-col">
              <span className="text-shaz-gold font-bold text-base leading-none">140+</span>
              <span className="text-[8px] text-white/40 uppercase mt-1">Total Assets</span>
            </div>
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex flex-col">
              <span className="text-shaz-magenta font-bold text-base leading-none">{categories.length - 1}</span>
              <span className="text-[8px] text-white/40 uppercase mt-1">Folders</span>
            </div>
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex flex-col">
              <span className="text-white font-bold text-base leading-none">4K</span>
              <span className="text-[8px] text-white/40 uppercase mt-1">Resolution</span>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scrollCarousel("left")}
            className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 interactive"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollCarousel("right")}
            className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all duration-300 interactive"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Folders Carousel */}
        <div className="relative overflow-hidden mb-8">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto py-8 px-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const items = cat === "All"
                ? allArchiveItems
                : itemsByCategory[cat] || [];
              
              return (
                <div key={cat} className="snap-start shrink-0">
                  <FolderCard
                    name={cat === "All" ? "All Productions" : cat}
                    count={count}
                    items={items}
                    onClick={() => handleFolderClick(cat)}
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
