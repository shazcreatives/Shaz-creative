"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, Film, ArrowUpRight, X } from "lucide-react";
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

export default function Portfolio() {
  
  // Creative Archives states
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Flatten the multi-level drive database
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

  // Compute category list dynamically
  const categories = useMemo(() => {
    const list = ["All"];
    if (archiveData.portfolio_shoots && archiveData.portfolio_shoots.length > 0) {
      list.push("Portfolio Shoots");
    }
    if (archiveData.categories) {
      Object.keys(archiveData.categories).forEach((cat) => {
        list.push(cat);
      });
    }
    return list;
  }, []);

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

  // Clean video name for premium aesthetic display
  const cleanVideoName = (name: string) => {
    let cleaned = name.replace(/\.(mp4|mov|m4a|avi|mkv)$/i, "");
    cleaned = cleaned.replace(/[-_]/g, " ").replace(/\s+/g, " ").trim();
    
    return cleaned
      .split(" ")
      .map((word) => {
        const upper = word.toUpperCase();
        if (["AI", "SMK", "DARLING", "SMM", "SEO"].includes(upper)) {
          return upper;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  };

  // Filter items based on active tab and search query
  const filteredItems = useMemo(() => {
    return allArchiveItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allArchiveItems, activeCategory, searchQuery]);

  // Slice list for pagination (Load More)
  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

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
              Explore our library of video productions, brand shoots, social media reels, and AI creatives. Select a category or search below.
            </p>
          </div>
          
          {/* Stats Badges */}
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex flex-col">
              <span className="text-shaz-gold font-bold text-base leading-none">140+</span>
              <span className="text-[8px] text-white/40 uppercase mt-1">Total Assets</span>
            </div>
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex flex-col">
              <span className="text-shaz-magenta font-bold text-base leading-none">8</span>
              <span className="text-[8px] text-white/40 uppercase mt-1">Categories</span>
            </div>
            <div className="bg-white/5 border border-white/5 px-4 py-2 rounded-2xl flex flex-col">
              <span className="text-white font-bold text-base leading-none">4K</span>
              <span className="text-[8px] text-white/40 uppercase mt-1">Resolution</span>
            </div>
          </div>
        </div>

        {/* Search and Filters bar */}
        <div className="flex flex-col gap-6 mb-10">
          {/* Search bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search project name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-5 text-sm text-white focus:outline-none focus:border-shaz-purple/60 focus:ring-1 focus:ring-shaz-purple/30 transition-all placeholder:text-white/30 animate-fade-in"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Chips/Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(12);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 interactive ${
                    isActive
                      ? "bg-gradient-to-r from-shaz-purple to-shaz-magenta text-white shadow-lg shadow-shaz-purple/20"
                      : "bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  {cat === "All" && <Film className="w-3.5 h-3.5" />}
                  {cat}
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? "bg-white/20 text-white" : "bg-white/10 text-white/50"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-white/5 rounded-3xl bg-white/[0.01]">
            <Film className="w-12 h-12 text-white/20 mx-auto mb-4" />
            <p className="text-white/40 font-light">No videos found matching your criteria.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-4 text-xs font-semibold text-shaz-magenta hover:underline"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
              {displayedItems.map((item, index) => {
                const cleanedName = cleanVideoName(item.name);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.4) }}
                    onClick={() => window.open(`https://drive.google.com/file/d/${item.id}/view?usp=drivesdk`, "_blank")}
                    className="relative aspect-video rounded-2xl overflow-hidden bg-shaz-darkGray border border-white/5 hover:border-white/15 group cursor-pointer shadow-lg hover:shadow-shaz-purple/5 transition-all duration-500"
                  >
                    {/* Google Drive Thumbnail cover with overlay */}
                    <div className="w-full h-full relative overflow-hidden">
                      <img
                        src={`https://drive.google.com/thumbnail?sz=w600&id=${item.id}`}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-500" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Bottom title text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end text-left">
                        <span className="text-[9px] font-mono text-shaz-magenta uppercase font-bold tracking-wider mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-snug group-hover:text-gradient-purple-magenta transition-all line-clamp-1">
                          {cleanedName}
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {filteredItems.length > visibleCount && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-lg interactive"
                >
                  Load More Projects (+{filteredItems.length - visibleCount})
                </button>
              </div>
            )}
          </>
        )}
      </div>

    </section>
  );
}
