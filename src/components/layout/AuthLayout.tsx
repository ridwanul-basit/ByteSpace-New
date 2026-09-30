"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, MessageSquare, Clock, Star, BarChart2 } from "lucide-react";

// ── Shared left-panel visual (same on both pages) ─────────────────────────────
function AuthLeftPanel({ tagline, description }: { tagline: string; description: string }) {
  return (
    <div className="relative flex flex-col flex-1 min-h-0 overflow-hidden px-8 sm:px-12 lg:px-16 py-10 lg:py-0 lg:justify-center">

      {/* ── Logo ── */}
      <Link href="/" className="absolute top-8 left-8 sm:left-12 lg:left-16 z-20">
        <span className="text-[#d2fc00] font-black text-3xl leading-none select-none">b</span>
      </Link>

      {/* ── Text ── */}
      <div className="relative z-20 mt-20 lg:mt-0 max-w-xs">
        <h2 className="text-white font-extrabold text-lg sm:text-xl leading-snug mb-2">{tagline}</h2>
        <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">{description}</p>
      </div>

      {/* ── Card collage ── */}
      <div className="relative z-20 mt-8 lg:mt-10 flex justify-center lg:justify-start">
        <div className="relative" style={{ width: 340, height: 360 }}>

          {/* ── Lime Torus Ring — top-left ── */}
          <div className="absolute -top-4 left-10 z-30 pointer-events-none">
            <svg viewBox="0 0 80 52" className="w-16 h-10 drop-shadow-xl">
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
          <div className="absolute bottom-8 -left-4 z-30 pointer-events-none">
            <svg viewBox="0 0 70 70" className="w-14 h-14 drop-shadow-xl">
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
          <div className="absolute top-24 -right-4 z-30 pointer-events-none">
            <svg viewBox="0 0 40 70" className="w-8 h-14 drop-shadow-md">
              <defs>
                <filter id="atSz">
                  <feDropShadow dx="1" dy="3" stdDeviation="2" floodColor="#000" floodOpacity="0.18" />
                </filter>
              </defs>
              <polyline points="8,8 32,22 8,36 32,50 8,64" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" filter="url(#atSz)" />
            </svg>
          </div>

          {/* ── Lime Squiggle — right-bottom ── */}
          <div className="absolute bottom-16 right-2 z-30 pointer-events-none">
            <svg viewBox="0 0 50 60" className="w-10 h-12 drop-shadow-md">
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

          {/* ── Back course card (offset, partially hidden) ── */}
          <div className="absolute top-20 left-0 z-10 w-[200px] rounded-2xl bg-white shadow-xl overflow-hidden border border-zinc-100 opacity-80">
            <div className="relative h-20 bg-zinc-200 overflow-hidden">
              <Image src="/courses/course-1.jpg" alt="" fill className="object-cover opacity-60" />
            </div>
            <div className="p-2.5">
              <p className="text-xs font-extrabold text-zinc-800 truncate">Build Digi...</p>
              <p className="text-[9px] text-blue-500 mt-0.5">by purepearl stu...</p>
              <div className="flex items-center gap-1.5 mt-1">
                <BarChart2 className="w-3 h-3 text-zinc-500" />
                <span className="text-[9px] text-zinc-500 font-semibold">Beginner</span>
              </div>
              <p className="text-xs font-black text-[#1852fe] mt-1">$25<span className="text-[9px] font-normal text-zinc-400">/life...</span></p>
            </div>
          </div>

          {/* ── Front course card (primary) ── */}
          <div className="absolute top-4 left-12 z-20 w-[225px] rounded-2xl bg-white shadow-2xl overflow-hidden border border-zinc-100">
            {/* Course image */}
            <div className="relative h-[110px] bg-zinc-900 overflow-hidden">
              <Image src="/courses/course-2.jpg" alt="The Power of Big Data" fill className="object-cover opacity-90" />
              {/* Badges */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 flex-wrap">
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white font-semibold flex items-center gap-0.5">
                  <BookOpen className="w-2 h-2" /> 17 Lessons
                </span>
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white font-semibold flex items-center gap-0.5">
                  <Clock className="w-2 h-2" /> 2 hours 16 mins
                </span>
                <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white font-semibold flex items-center gap-0.5">
                  <MessageSquare className="w-2 h-2" /> 59 Comments
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="p-3">
              <div className="flex items-start justify-between gap-1">
                <p className="text-xs font-extrabold text-zinc-900 leading-snug">the Power of Big Data</p>
                <span className="flex items-center gap-0.5 text-[10px] font-bold text-amber-500 shrink-0">
                  4.5 <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                </span>
              </div>
              <p className="text-[9px] text-[#1852fe] font-semibold mt-0.5">by purepearl studio</p>
              <div className="mt-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <BarChart2 className="w-3 h-3 text-zinc-400" />
                  <span className="text-[9px] text-zinc-500 font-semibold">Beginner</span>
                </div>
                <div className="flex -space-x-1.5">
                  {["bg-blue-500", "bg-amber-500", "bg-purple-500", "bg-emerald-500"].map((bg, i) => (
                    <div key={i} className={`h-5 w-5 rounded-full border border-white ${bg}`} />
                  ))}
                  <div className="h-5 w-5 rounded-full border border-white bg-zinc-800 text-white text-[7px] flex items-center justify-center font-black">26+</div>
                </div>
              </div>
              <p className="mt-1.5 text-xs font-black text-[#1852fe]">$25<span className="text-[9px] font-medium text-zinc-400">/lifetime</span></p>
            </div>
          </div>

          {/* ── Happy Students lime card — bottom ── */}
          <div className="absolute -bottom-2 left-16 z-30 rounded-2xl bg-[#d2fc00] px-3.5 py-2.5 shadow-2xl">
            <p className="text-xs font-extrabold text-zinc-900">Happy Students</p>
            <div className="mt-1 flex items-center gap-1">
              <p className="text-[9px] font-semibold text-zinc-700">4.8</p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map(i => <Star key={i} className="w-2.5 h-2.5 fill-zinc-900 text-zinc-900" />)}
                <Star className="w-2.5 h-2.5 text-zinc-400" />
              </div>
            </div>
            <div className="mt-1.5 flex -space-x-1.5 items-center">
              {["bg-rose-500", "bg-blue-500", "bg-amber-500", "bg-purple-500", "bg-emerald-500", "bg-pink-500"].map((bg, i) => (
                <div key={i} className={`h-6 w-6 rounded-full border-2 border-[#d2fc00] ${bg}`} />
              ))}
              <div className="h-6 w-6 rounded-full border-2 border-[#d2fc00] bg-zinc-900 text-white text-[7px] flex items-center justify-center font-black ml-0.5">2K+</div>
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
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#1852fe] relative overflow-hidden">

      {/* Blue grid background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* LEFT PANEL */}
      <div className="relative z-10 lg:w-[45%] xl:w-[42%] flex flex-col">
        <AuthLeftPanel tagline={tagline} description={description} />
      </div>

      {/* RIGHT PANEL — white floating card */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-12 lg:py-0 lg:pr-16 xl:pr-24">
        <div className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-2xl px-10 py-10 sm:py-12">
          {children}
        </div>
      </div>
    </div>
  );
}
