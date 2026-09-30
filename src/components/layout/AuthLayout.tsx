"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, MessageSquare, Clock, Star, BarChart2 } from "lucide-react";

// ── Shared left-panel visual (same on both pages) ─────────────────────────────
function AuthLeftPanel({ tagline, description }: { tagline: string; description: string }) {
  return (
    <div className="relative flex flex-col flex-1 w-full min-h-0 items-center lg:items-start justify-center">

      {/* ── Logo ── */}
      <Link href="/" className="mb-6 lg:mb-8 self-start group">
        <span className="text-[#d2fc00] font-black text-3xl sm:text-4xl leading-none select-none transition-transform duration-200 group-hover:scale-105 inline-block">
          b
        </span>
      </Link>

      {/* ── Text ── */}
      <div className="relative z-20 max-w-md text-center lg:text-left">
        <h2 className="text-white font-extrabold text-2xl sm:text-3xl leading-snug mb-2.5 font-heading">
          {tagline}
        </h2>
        <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>

      {/* ── Card collage ── */}
      <div className="relative z-20 mt-8 lg:mt-10 flex justify-center self-center lg:self-start w-full">
        <div className="relative w-full max-w-[450px]" style={{ height: 400 }}>

          {/* ── Lime Torus Ring — top-left ── */}
          <div className="absolute -top-5 left-10 z-30 pointer-events-none">
            <svg viewBox="0 0 80 52" className="w-16 h-11 drop-shadow-xl">
              <defs>
                <radialGradient id="atLt" cx="38%" cy="32%" r="68%">
                  <stop offset="0%" stopColor="#f5ff7a" />
                  <stop offset="55%" stopColor="#d2fc00" />
                  <stop offset="100%" stopColor="#8db400" />
                </radialGradient>
              </defs>
              <ellipse cx="40" cy="26" rx="36" ry="23" fill="url(#atLt)" />
              <ellipse cx="40" cy="26" rx="16" ry="10" fill="#1852fe" />
              <path d="M14 18 Q28 8 42 13" stroke="#f0ff80" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.55" />
            </svg>
          </div>

          {/* ── Lime Triangle — bottom-left ── */}
          <div className="absolute bottom-10 -left-5 z-30 pointer-events-none">
            <svg viewBox="0 0 70 70" className="w-16 h-16 drop-shadow-xl">
              <defs>
                <linearGradient id="atTri" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#eeff55" />
                  <stop offset="100%" stopColor="#b8d400" />
                </linearGradient>
              </defs>
              <polygon points="35,5 68,62 2,62" fill="url(#atTri)" />
              <polygon points="35,5 68,62 2,62" fill="rgba(0,0,0,0.1)" transform="skewY(5) translateY(4)" />
            </svg>
          </div>

          {/* ── White Zigzag — right-middle ── */}
          <div className="absolute top-20 -right-4 z-30 pointer-events-none">
            <svg viewBox="0 0 40 70" className="w-9 h-16 drop-shadow-md">
              <defs>
                <filter id="atSz">
                  <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.18" />
                </filter>
              </defs>
              <polyline points="8,8 32,22 8,36 32,50 8,64" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#atSz)" />
            </svg>
          </div>

          {/* ── Lime Squiggle — right-bottom ── */}
          <div className="absolute bottom-14 right-0 z-30 pointer-events-none">
            <svg viewBox="0 0 50 60" className="w-11 h-14 drop-shadow-md">
              <defs>
                <linearGradient id="atSq" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#eeff6a" />
                  <stop offset="100%" stopColor="#96c200" />
                </linearGradient>
                <filter id="atSqF">
                  <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
                </filter>
              </defs>
              <path d="M10 55 C12 38 28 36 32 50 C36 64 52 58 50 42 C48 26 30 18 36 5" stroke="url(#atSq)" strokeWidth="10" strokeLinecap="round" fill="none" filter="url(#atSqF)" />
            </svg>
          </div>

          {/* ── Back course card (offset, wider) ── */}
          <div className="absolute top-20 left-0 z-10 w-[260px] rounded-2xl bg-white shadow-xl overflow-hidden border border-zinc-100 opacity-80 transition-transform duration-300 hover:opacity-100">
            <div className="relative h-24 bg-zinc-200 overflow-hidden">
              <Image src="/courses/course-1.jpg" alt="Build Digital Assets" fill className="object-cover opacity-70" />
            </div>
            <div className="p-3">
              <p className="text-xs font-extrabold text-zinc-800 truncate">Build Digital Asset</p>
              <p className="text-[10px] text-blue-500 font-medium mt-0.5">by purepearl studio</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <BarChart2 className="w-3.5 h-3.5 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 font-semibold">Beginner</span>
              </div>
              <p className="text-sm font-black text-[#1852fe] mt-1.5">$25<span className="text-[10px] font-normal text-zinc-400">/lifetime</span></p>
            </div>
          </div>

          {/* ── Front course card (primary, wider) ── */}
          <div className="absolute top-4 left-16 sm:left-20 z-20 w-[290px] sm:w-[310px] rounded-2xl bg-white shadow-2xl overflow-hidden border border-zinc-100">
            {/* Course image */}
            <div className="relative h-[135px] bg-zinc-900 overflow-hidden">
              <Image src="/courses/course-2.jpg" alt="The Power of Big Data" fill className="object-cover opacity-90" />
              {/* Badges */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                <span className="rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] text-white font-semibold flex items-center gap-0.5">
                  <BookOpen className="w-2.5 h-2.5" /> 17 Lessons
                </span>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] text-white font-semibold flex items-center gap-0.5">
                  <Clock className="w-2.5 h-2.5" /> 2h 16m
                </span>
                <span className="rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] text-white font-semibold flex items-center gap-0.5">
                  <MessageSquare className="w-2.5 h-2.5" /> 59 Comments
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-3.5 sm:p-4">
              <div className="flex items-start justify-between gap-1">
                <p className="text-sm font-extrabold text-zinc-900 leading-snug">the Power of Big Data</p>
                <span className="flex items-center gap-0.5 text-xs font-bold text-amber-500 shrink-0">
                  4.5 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </span>
              </div>
              <p className="text-[10px] text-[#1852fe] font-semibold mt-0.5">by purepearl studio</p>
              <div className="mt-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[10px] font-semibold text-zinc-500">Beginner</span>
                </div>
                <div className="flex -space-x-1.5">
                  {["bg-blue-500", "bg-amber-500", "bg-purple-500", "bg-emerald-500"].map((bg, i) => (
                    <div key={i} className={`h-5 w-5 rounded-full border border-white ${bg}`} />
                  ))}
                  <div className="h-5 w-5 rounded-full border border-white bg-zinc-800 text-white text-[8px] flex items-center justify-center font-black">26+</div>
                </div>
              </div>
              <p className="mt-2 text-sm font-black text-[#1852fe]">$25<span className="text-[10px] font-medium text-zinc-400">/lifetime</span></p>
            </div>
          </div>

          {/* ── Happy Students lime card — bottom ── */}
          <div className="absolute -bottom-3 left-24 sm:left-28 z-30 rounded-2xl bg-[#d2fc00] px-4 py-3 shadow-2xl min-w-[210px]">
            <p className="text-xs font-extrabold text-zinc-900">Happy Students</p>
            <div className="mt-1 flex items-center gap-1.5">
              <p className="text-[10px] font-bold text-zinc-800">4.8</p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map(i => <Star key={i} className="w-3 h-3 fill-zinc-900 text-zinc-900" />)}
                <Star className="w-3 h-3 text-zinc-400" />
              </div>
            </div>
            <div className="mt-2 flex -space-x-1.5 items-center">
              {["bg-rose-500", "bg-blue-500", "bg-amber-500", "bg-purple-500", "bg-emerald-500", "bg-pink-500"].map((bg, i) => (
                <div key={i} className={`h-6 w-6 rounded-full border-2 border-[#d2fc00] ${bg}`} />
              ))}
              <div className="h-6 w-6 rounded-full border-2 border-[#d2fc00] bg-zinc-900 text-white text-[8px] flex items-center justify-center font-black ml-0.5">2K+</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Auth layout wrapper ─────────────────────────────────────────────────────────
export default function AuthLayout({ children, tagline, description }: {
  children: ReactNode;
  tagline: string;
  description: string;
}) {
  return (
    <div className="min-h-screen bg-[#1852fe] relative overflow-hidden flex items-center justify-center py-10 lg:py-16">

      {/* Blue grid background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Symmetric Container with Equal Width Columns & Equal Spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">

        {/* LEFT PANEL — Exactly 50% width on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="w-full max-w-[490px]">
            <AuthLeftPanel tagline={tagline} description={description} />
          </div>
        </div>

        {/* RIGHT PANEL — Exactly 50% width on desktop */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[490px] bg-white rounded-[2rem] shadow-2xl px-8 sm:px-11 py-10 sm:py-12">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
