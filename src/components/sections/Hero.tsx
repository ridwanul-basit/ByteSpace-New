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
      {/* ── Playful Floating 3D Geometric Shapes (Exact Pic 1 Layout) ── */}

      {/* Top Left: Large Lime 3D Zigzag / Coil Ribbon */}
      <LimeSquiggle className="absolute top-12 sm:top-16 lg:top-20 left-2 sm:left-4 lg:left-8 w-28 h-36 sm:w-44 sm:h-56 lg:w-56 lg:h-72 -rotate-12 pointer-events-none drop-shadow-2xl z-10" />

      {/* Mid Left: White 3D Wavy Spring / Zigzag */}
      <WhiteZigzag className="absolute top-[48%] sm:top-[46%] left-4 sm:left-8 lg:left-14 -translate-y-1/2 w-16 h-20 sm:w-24 sm:h-28 lg:w-28 lg:h-36 -rotate-6 pointer-events-none drop-shadow-xl z-10" />

      {/* Bottom Left: Volumetric White 3D Torus Donut */}
      <WhiteTorus className="absolute bottom-6 sm:bottom-10 lg:bottom-12 left-2 sm:left-6 lg:left-10 w-32 h-24 sm:w-48 sm:h-36 lg:w-60 lg:h-44 pointer-events-none drop-shadow-2xl z-10" />

      {/* Top Right: Lime 3D Cylinder / Column */}
      <LimeCylinder className="absolute top-12 sm:top-16 lg:top-20 right-2 sm:right-6 lg:right-10 w-28 h-36 sm:w-40 sm:h-52 lg:w-48 lg:h-64 rotate-12 pointer-events-none drop-shadow-2xl z-10" />

      {/* Mid Right: White 3D Pyramid / Tetrahedron */}
      <WhitePrism className="absolute top-[44%] sm:top-[42%] right-4 sm:right-8 lg:right-16 -translate-y-1/2 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 -rotate-12 pointer-events-none drop-shadow-xl z-10" />

      {/* Bottom Right: White 3D Spiral Ribbon Tube */}
      <WhiteSpiral className="absolute bottom-6 sm:bottom-10 lg:bottom-12 right-2 sm:right-6 lg:right-10 w-28 h-36 sm:w-40 sm:h-52 lg:w-52 lg:h-64 pointer-events-none drop-shadow-2xl z-10" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto font-heading">
          Get Access to Hundreds <br />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed opacity-95">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
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
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-sm sm:text-base text-zinc-900 placeholder-zinc-400 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#d2fc00] px-7 sm:px-9 py-2.5 sm:py-3 text-sm sm:text-base font-bold text-zinc-900 shadow-md hover:bg-[#beef00] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Hero Graphic: Big Lime Dome with Student and Floating Badges */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-4xl flex justify-center items-end">
          {/* Neon Lime Backdrop Dome */}
          <div className="relative w-[340px] sm:w-[520px] md:w-[620px] lg:w-[980px] h-[220px] sm:h-[320px] md:h-[370px] lg:h-[380px] bg-[#d2fc00] rounded-t-full shadow-2xl flex justify-center items-end overflow-visible">
            {/* Student Image */}
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

            {/* Floating Card 1: Top-Left "UI/UX Design" */}
            <div className="absolute top-4 sm:top-8 -left-2 sm:-left-10 lg:left-35 z-20 rounded-xl bg-white p-3 sm:p-3 shadow-2xl border border-zinc-100/90 text-left min-w-[150px] sm:min-w-[180px]">
              <p className="text-xs sm:text-[11px] font-extrabold text-zinc-900">
                UI/UX Design
              </p>
              <p className="mt-0.5 text-[10px] sm:text-xs font-medium text-zinc-500">
                200 Courses • 1000+ Students
              </p>
            </div>

            {/* Floating Card 2: Top-Right "55% Learning Progress" */}
            <div className="absolute top-6 sm:top-10 -right-2 sm:-right-10 lg:right-30 z-20 rounded-2xl bg-white p-3.5 sm:p-4 shadow-2xl border border-zinc-100/90 text-left min-w-[140px] sm:min-w-[170px]">
              <p className="text-[10px] sm:text-xs font-semibold text-zinc-500">
                Learning Progress
              </p>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight font-heading">
                55%
              </p>
              <div className="mt-2 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#d2fc00] rounded-full w-[55%]" />
              </div>
            </div>

            {/* Floating Card 3: Bottom-Left "Happy Students" */}
            <div className="absolute bottom-8 sm:bottom-14 -left-4 sm:-left-16 lg:left-20 z-20 rounded-2xl bg-white p-3.5 sm:p-4 shadow-2xl border border-zinc-100/90 text-left min-w-[200px] sm:min-w-[225px]">
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs sm:text-sm font-extrabold text-zinc-900">
                  Happy Student
                </p>
                <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold text-zinc-700">
                  <span>4.5</span>
                  <span className="text-[10px] font-normal text-zinc-400">(240)</span>
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
              </div>

              <div className="mt-2.5 flex -space-x-1.5 items-center">
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white overflow-hidden shadow-xs">
                  <Image src="/avatars/avatar-1.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white overflow-hidden shadow-xs">
                  <Image src="/avatars/avatar-2.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white overflow-hidden shadow-xs">
                  <Image src="/avatars/avatar-3.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white overflow-hidden shadow-xs">
                  <Image src="/avatars/avatar-1.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white overflow-hidden shadow-xs">
                  <Image src="/avatars/avatar-2.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 border-white bg-[#d2fc00] text-[8px] sm:text-[9px] font-black text-zinc-900 shadow-xs">
                  2K+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
