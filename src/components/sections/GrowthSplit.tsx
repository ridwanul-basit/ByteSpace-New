import React from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, BookOpen } from "lucide-react";
import { LimeSquiggle } from "@/components/ui/MemphisShapes";

export const GrowthSplit: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">

      {/* ── BIG LIME RADIAL GLOW — bleeds from bottom-left across entire section ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(210,252,0,0.55) 0%, rgba(210,252,0,0.28) 30%, rgba(210,252,0,0.07) 58%, transparent 78%)" }} />
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(200,250,0,0.28) 0%, rgba(210,252,0,0.08) 50%, transparent 75%)" }} />
        <div className="absolute top-0 right-0 w-1/2 h-full"
          style={{ background: "linear-gradient(to left, rgba(232,240,254,0.65) 0%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════════════════════
            PART 1 — Your Path to Professional Growth
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* LEFT — text + stats */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight text-zinc-900 leading-[1.18]">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="pt-5 flex items-center gap-10 border-t border-zinc-200">
              {[["12K","Students"],["70+","Courses"],["16","Creators"]].map(([v,l]) => (
                <div key={l}>
                  <p className="text-3xl sm:text-4xl font-black text-[#1852fe] tracking-tight">{v}</p>
                  <p className="mt-0.5 text-xs sm:text-sm font-semibold text-zinc-500">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — all visuals as a single positioned container */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* This outer div is the stacking root — everything is positioned relative to it */}
            <div className="relative w-full max-w-[380px]" style={{ minHeight: 420 }}>

              {/* Lime Squiggle top-right — SIBLING of card, always on top */}
              <div className="absolute -top-10 right-0 z-30 pointer-events-none">
                <LimeSquiggle className="w-20 h-20 sm:w-28 sm:h-28 drop-shadow-xl" />
              </div>

              {/* White rounded card frame — z-10 */}
              <div className="relative z-10 rounded-[2rem] bg-white shadow-2xl border border-zinc-100 overflow-hidden mx-auto">
                <Image
                  src="/Image.png"
                  alt="Student with laptop and headphones"
                  width={480}
                  height={520}
                  className="w-full h-auto object-contain block"
                />
              </div>

              {/* ── Course preview card — SIBLING of white frame, z-30 ── */}
              <div className="absolute top-0 -left-2 sm:-left-10 z-30 w-[190px] sm:w-[210px] rounded-2xl bg-white shadow-2xl border border-zinc-100 overflow-hidden">
                <div className="relative h-24 sm:h-28 w-full bg-zinc-100 overflow-hidden">
                  <Image src="/courses/course-1.jpg" alt="Learn Figma" fill className="object-cover" />
                  <div className="absolute bottom-1.5 left-2 flex items-center gap-1">
                    <span className="rounded bg-black/55 px-1.5 py-0.5 text-[9px] text-white font-semibold flex items-center gap-1">
                      <BookOpen className="w-2.5 h-2.5" /> 17 Lessons
                    </span>
                    <span className="rounded bg-black/55 px-1.5 py-0.5 text-[9px] text-white font-semibold">2h 16min</span>
                  </div>
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-extrabold text-zinc-900 leading-tight">Learn Figma from scratch</p>
                  <p className="text-[9px] text-zinc-400 mt-0.5">by purepearl studio</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[9px] font-bold text-zinc-600">Beginner</span>
                    <span className="text-[11px] font-black text-[#1852fe]">$25<span className="text-[9px] font-medium text-zinc-400">/lifetime</span></span>
                  </div>
                </div>
              </div>

              {/* ── Learning Progress card — SIBLING of white frame, z-30 ── */}
              <div className="absolute top-16 -right-4 sm:-right-12 z-30 rounded-2xl bg-white p-3.5 shadow-2xl border border-zinc-100 w-[140px] sm:w-[155px]">
                <p className="text-[10px] font-semibold text-zinc-500">Learning Progress</p>
                <p className="mt-1 text-2xl sm:text-3xl font-black text-zinc-900">55%</p>
                <div className="mt-2 h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1852fe] rounded-full w-[55%]" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            PART 2 — Create & Manage Courses Easily
        ══════════════════════════════════════════════════════ */}
        <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* LEFT — instructor visual */}
          <div className="order-2 lg:order-1 relative flex justify-center items-center">
            <div className="relative w-full max-w-[380px]" style={{ minHeight: 460 }}>

              {/* Lime Squiggle — SIBLING, z-30 */}
              <div className="absolute top-4 right-0 z-30 pointer-events-none">
                <LimeSquiggle className="w-20 h-20 sm:w-26 sm:h-26 drop-shadow-xl rotate-12" />
              </div>

              {/* White card frame — z-10, offset right to make room for revenue cards on left */}
              <div className="relative z-10 rounded-[2rem] bg-white shadow-2xl border border-zinc-100 overflow-hidden ml-auto w-[220px] sm:w-[260px]">
                <Image
                  src="/instructor.png"
                  alt="Instructor teaching online"
                  width={400}
                  height={460}
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* ── Stacked Revenue Cards — SIBLINGS, z-30, left of white frame ── */}
              <div className="absolute top-10 left-0 z-30 flex flex-col gap-2.5 w-[160px] sm:w-[185px]">
                {/* Card 1: Total Revenue */}
                <div className="rounded-2xl bg-[#1852fe] text-white px-4 py-3.5 shadow-2xl">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wide">Total Revenue</p>
                    <TrendingUp className="h-3.5 w-3.5 text-[#d2fc00]" />
                  </div>
                  <p className="text-[9px] text-blue-300">July 1–28</p>
                  <p className="mt-2 text-xl font-black text-white">$120.29</p>
                  <div className="mt-2 h-1 w-full bg-blue-400/40 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d2fc00] rounded-full w-[60%]" />
                  </div>
                </div>

                {/* Card 2: Year to Date */}
                <div className="rounded-2xl bg-[#1852fe] text-white px-4 py-3.5 shadow-2xl">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wide">Year to Date</p>
                    <TrendingUp className="h-3.5 w-3.5 text-[#d2fc00]" />
                  </div>
                  <p className="text-[9px] text-blue-300">2023</p>
                  <p className="mt-2 text-xl font-black text-white">$1,200.38</p>
                  <div className="mt-2">
                    <span className="rounded-full bg-[#d2fc00] px-2 py-0.5 text-[9px] font-black text-black">+12%</span>
                  </div>
                </div>
              </div>

              {/* ── Happy Students card — SIBLING, z-30, bottom-right ── */}
              <div className="absolute -bottom-6 right-0 z-30 rounded-2xl bg-white px-3.5 py-3 shadow-2xl border border-zinc-100">
                <p className="text-xs font-extrabold text-zinc-900">Happy Students</p>
                <div className="mt-1.5 flex -space-x-2">
                  {["bg-blue-500","bg-amber-500","bg-purple-500","bg-emerald-500","bg-rose-500"].map((bg, i) => (
                    <div key={i} className={`h-7 w-7 rounded-full border-2 border-white ${bg} flex items-center justify-center text-[9px] text-white font-bold`}>
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-[#d2fc00] flex items-center justify-center text-[8px] text-black font-black">2K+</div>
                </div>
                <p className="mt-1 text-[9px] font-semibold text-amber-500">4.5 (240) ★★★★★</p>
              </div>

            </div>
          </div>

          {/* RIGHT — text + checklist */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-extrabold tracking-tight text-zinc-900 leading-[1.18]">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              <strong className="text-zinc-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <div className="space-y-3.5 pt-1">
              {["Share Your Expertise","Monetize Your Passion","Flexibility and Autonomy","Build a Community"].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1852fe]">
                    <CheckCircle2 className="h-4 w-4 text-white stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
