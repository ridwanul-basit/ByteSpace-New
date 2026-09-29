"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import {
  LimeCylinder,
  LimeSquiggle,
  WhiteTorus,
  WhitePrism,
  WhiteZigzag,
  WhiteSpiral,
} from "@/components/ui/MemphisShapes";

interface HeroProps {
  onSearch?: (query: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    const coursesEl = document.getElementById("courses");
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#1852fe] pt-28 sm:pt-36 lg:pt-40 text-white hero-grid-pattern">
      {/* Playful Floating 3D Memphis Geometric Shapes - Exact Figma Arrangement */}
      {/* Top Left: Lime Squiggle */}
      <LimeSquiggle className="absolute top-20 sm:top-24 left-3 sm:left-10 lg:left-16 w-18 h-18 sm:w-28 sm:h-28 rotate-12 pointer-events-none drop-shadow-xl z-10" />
      {/* Mid Left: White Zigzag */}
      <WhiteZigzag className="absolute top-[45%] left-3 sm:left-10 lg:left-18 -translate-y-1/2 w-10 h-14 sm:w-16 sm:h-22 pointer-events-none drop-shadow-md z-10" />
      {/* Bottom Left: Large White Donut Torus */}
      <WhiteTorus className="absolute bottom-6 sm:bottom-12 left-4 sm:left-12 lg:left-20 w-24 h-24 sm:w-40 sm:h-40 pointer-events-none drop-shadow-2xl z-10" />

      {/* Top Right: Lime Cylinder */}
      <LimeCylinder className="absolute top-16 sm:top-20 right-3 sm:right-10 lg:right-18 w-20 h-24 sm:w-32 sm:h-40 pointer-events-none drop-shadow-xl z-10" />
      {/* Mid Right: White Prism/Triangle */}
      <WhitePrism className="absolute top-[48%] right-3 sm:right-10 lg:right-20 -translate-y-1/2 w-12 h-14 sm:w-18 sm:h-20 pointer-events-none drop-shadow-md z-10" />
      {/* Bottom Right: White Spiral Ribbon */}
      <WhiteSpiral className="absolute bottom-8 sm:bottom-16 right-4 sm:right-12 lg:right-22 w-18 h-20 sm:w-28 sm:h-32 pointer-events-none drop-shadow-xl z-10" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed opacity-95">
          Unlock your potential with expert-led education and accelerate your career with world-class online courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="mt-8 mx-auto max-w-xl relative flex items-center bg-white rounded-full p-2 pl-5 sm:pl-6 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-[#d2fc00]/40"
        >
          <Search className="w-5 h-5 text-zinc-400 shrink-0 mr-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search courses here..."
            className="w-full bg-transparent text-sm sm:text-base text-zinc-900 placeholder-zinc-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#d2fc00] px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-bold text-black shadow-md hover:bg-[#beef00] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Hero Graphic: Big Lime Semicircle/Circle with Student and Floating Badges */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-4xl flex justify-center items-end">
          {/* Neon Lime Backdrop Dome */}
          <div className="relative w-[340px] sm:w-[520px] md:w-[620px] lg:w-[680px] h-[220px] sm:h-[320px] md:h-[370px] lg:h-[400px] bg-[#d2fc00] rounded-t-full shadow-2xl flex justify-center items-end overflow-visible">
            {/* Student Image: Public Image.png */}
            <div className="relative z-10 w-[300px] sm:w-[460px] md:w-[540px] lg:w-[600px] -mb-1">
              <Image
                src="/Image.png"
                alt="Student with laptop and headphones"
                width={720}
                height={620}
                priority
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Floating Card 1: Top-Left "Best Ratings" */}
            <div className="absolute top-2 sm:top-6 -left-2 sm:-left-12 z-20 rounded-2xl bg-white p-2.5 sm:p-3.5 shadow-2xl border border-zinc-100 flex items-center gap-2.5 sm:gap-3 text-left">
              <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                  Top Quality
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-xs sm:text-sm font-extrabold text-zinc-900">
                    Best Ratings
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-amber-600 bg-amber-100/80 px-1.5 py-0.5 rounded-md">
                    4.9 ★
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Top-Right "55% Course Progress" */}
            <div className="absolute top-4 sm:top-10 -right-2 sm:-right-10 z-20 rounded-2xl bg-white p-3 sm:p-4 shadow-2xl border border-zinc-100 text-left min-w-[120px] sm:min-w-[145px]">
              <p className="text-[10px] sm:text-xs font-medium text-zinc-500">
                Course progress
              </p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                  55%
                </span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1 rounded">
                  +12%
                </span>
              </div>
              <div className="mt-1.5 h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#1852fe] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Floating Card 3: Bottom-Left "Happy Students" */}
            <div className="absolute bottom-8 sm:bottom-14 -left-4 sm:-left-16 z-20 rounded-2xl bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 shadow-2xl border border-zinc-100/90 flex items-center gap-2.5 text-left">
              <div className="flex -space-x-2">
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                  S
                </div>
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white bg-amber-500 flex items-center justify-center text-[10px] text-white font-bold">
                  J
                </div>
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center text-[10px] text-white font-bold">
                  A
                </div>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-bold text-zinc-900">
                  Happy Students
                </p>
                <p className="text-[9px] sm:text-[10px] text-zinc-500 font-medium">
                  ★★★★★ 12k+ enrolled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
