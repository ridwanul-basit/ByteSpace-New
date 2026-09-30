import React from "react";
import Image from "next/image";
import { CheckCircle2, Star, BarChart2 } from "lucide-react";
import { LimeSquiggle } from "@/components/ui/MemphisShapes";

export const GrowthSplit: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">

      {/* ── AMBIENT GLOWS MATCHING FIGMA REFERENCE ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top Lime / Chartreuse glow */}
        <div
          className="absolute -top-32 left-[10%] sm:left-[20%] w-[650px] sm:w-[800px] h-[550px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(210,252,0,0.55) 0%, rgba(210,252,0,0.25) 45%, transparent 70%)",
          }}
        />

        {/* Mid-Left Soft Blue / Periwinkle ambient glow */}
        <div
          className="absolute top-[32%] -left-32 w-[550px] h-[550px] rounded-full blur-[90px] sm:blur-[110px] pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(96,134,247,0.32) 0%, rgba(24,82,254,0.14) 40%, transparent 70%)",
          }}
        />

        {/* Bottom-Left Vibrant Lime Green glow */}
        <div
          className="absolute -bottom-28 -left-28 w-[650px] sm:w-[800px] h-[650px] sm:h-[800px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none opacity-85"
          style={{
            background:
              "radial-gradient(circle, rgba(210,252,0,0.65) 0%, rgba(210,252,0,0.28) 45%, transparent 75%)",
          }}
        />

        {/* Bottom-Right Soft Blue / Periwinkle ambient glow */}
        <div
          className="absolute -bottom-32 -right-28 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full blur-[100px] sm:blur-[120px] pointer-events-none opacity-75"
          style={{
            background:
              "radial-gradient(circle, rgba(96,134,247,0.38) 0%, rgba(24,82,254,0.16) 45%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-10">

        {/* ══════════════════════════════════════════════════════
            PART 1 — Your Path to Professional Growth Starts Here!
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT — text + stats */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-zinc-900 leading-[1.18] font-heading">
              Your Path to Professional<br />Growth Starts Here!
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <div className="pt-6 flex items-center gap-10 sm:gap-14">
              {[
                { val: "12K", label: "Students" },
                { val: "70+", label: "Courses" },
                { val: "16", label: "Creators" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-extrabold text-[#1852fe] tracking-tight font-heading">
                    {stat.val}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-semibold text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Boy collage (matching Pic 1) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[440px] h-[460px] flex items-center justify-center">

              {/* LAYER 0 (z-0): White card backdrop frame */}
              <div className="absolute inset-x-6 sm:inset-x-8 inset-y-3 rounded-[2.5rem] z-0" />

              {/* LAYER 1 (z-[5]): 3D Lime Squiggle behind top-right */}
              <div className="absolute -top-4 right-0 z-[5] pointer-events-none">
                <LimeSquiggle className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl" />
              </div>

              {/* LAYER 2 (z-10): Course Preview Card (Top-Left — UNDER the boy's head/arm) */}
              <div className="absolute top-2 left-0 sm:left-2 z-10 w-[210px] sm:w-[230px] rounded-2xl bg-white shadow-xl border border-zinc-100/90 overflow-hidden">
                <div className="relative h-28 w-full overflow-hidden">
                  <Image
                    src="/courses/Frame (1).png"
                    alt="Learn Figma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-xs font-bold text-zinc-900 leading-tight">
                      Learn Figma from Basic
                    </p>
                    <div className="flex items-center gap-0.5 text-[10px] font-bold text-zinc-600 shrink-0">
                      <span>4.5</span>
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                    </div>
                  </div>
                  <p className="text-[9px] text-zinc-400 mt-0.5 font-medium">
                    by <span className="text-zinc-600">purepearl studio</span>
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-[9px] font-semibold text-zinc-600">
                      <BarChart2 className="w-2.5 h-2.5 text-zinc-400" />
                      Beginner
                    </span>
                    <div className="flex -space-x-1.5 items-center">
                      <div className="relative h-4.5 w-4.5 rounded-full border border-white overflow-hidden">
                        <Image src="/avatars/avatar-1.jpg" alt="" fill className="object-cover" />
                      </div>
                      <div className="relative h-4.5 w-4.5 rounded-full border border-white overflow-hidden">
                        <Image src="/avatars/avatar-2.jpg" alt="" fill className="object-cover" />
                      </div>
                      <div className="flex h-4.5 w-4.5 items-center justify-center rounded-full border border-white bg-[#d2fc00] text-[7px] font-bold text-zinc-900">
                        26+
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-zinc-100 flex items-center justify-between">
                    <p className="text-xs font-black text-[#1852fe]">
                      $25<span className="text-[9px] font-normal text-zinc-400">/lifetime</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* LAYER 2 (z-10): Learning Progress Card (Middle-Right — UNDER the boy's laptop/arm) */}
              <div className="absolute top-46 right-0 sm:right-12 z-40 rounded-2xl bg-white p-3.5 sm:p-2 shadow-xl border border-zinc-100 w-[150px] sm:w-[165px]">
                <p className="text-[9px] sm:text-xs font-semibold text-zinc-500">
                  Learning Progress
                </p>
                <p className="mt-1 text-xl sm:text-2xl font-black text-zinc-900 font-heading">
                  55%
                </p>
                <div className="mt-2.5 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#d2fc00] rounded-full w-[55%]" />
                </div>
              </div>

              {/* LAYER 3 (z-20): Boy cutout image — OVER the cards */}
              <div className="relative z-20 w-[290px] sm:w-[400px]">
                <Image
                  src="/Image.png"
                  alt="Student with laptop and headphones"
                  width={540}
                  height={580}
                  className="w-full h-auto object-contain block drop-shadow-md"
                  priority
                />
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            PART 2 — Create & Manage Courses Easily.
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT — Woman Instructor Visual (matching Pic 1) */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[440px] h-[480px] flex items-center justify-center lg:justify-start">

              {/* LAYER 0 (z-0): White card backdrop frame */}
              <div className="absolute right-0 sm:right-4 inset-y-3 w-[280px] sm:w-[320px] rounded-[2.5rem] z-0" />

              {/* LAYER 1 (z-[5]): 3D Lime Squiggle behind top-right of woman */}
              <div className="absolute top-6 right-2 sm:right-4 z-[5] pointer-events-none">
                <LimeSquiggle className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-xl rotate-12" />
              </div>

              {/* LAYER 2 (z-10): Stacked Revenue Cards (UNDER the woman's headset/body) */}
              <div className="absolute top-10 left-0 sm:left-2 z-10 flex flex-col gap-3 w-[180px] sm:w-[240px]">
                {/* Card 1: Total Revenue */}
                <div className="rounded-2xl bg-[#1852fe] text-white p-3 shadow-xl">
                  <p className="text-[9px] font-bold text-blue-100  tracking-wide">
                    Total Revenue
                  </p>
                  <p className="text-[7px] text-blue-200 mt-0.5">July 1–28</p>
                  <p className="mt-1.5 text-[12px] sm:text-[17px] font-black text-white font-heading">
                    $120.29
                  </p>
                  <div className="mt-2.5 h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#d2fc00] rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Card 2: Year to Date */}
                <div className="rounded-2xl bg-[#1852fe] text-white p-4 shadow-xl">
                  <p className="text-[9px] font-bold text-blue-100  tracking-wide">
                    Year to Date
                  </p>
                  <p className="text-[7px] text-blue-200 mt-0.5">2023</p>
                  <p className="mt-1.5 text-[12px] sm:text-[17px] font-black text-white font-heading">
                    $1,200.38
                  </p>
                  <div className="mt-2">
                    <span className="inline-block rounded-full bg-[#d2fc00] px-2.5 py-0.5 text-[10px] font-black text-zinc-900 shadow-xs">
                      +12%
                    </span>
                  </div>
                </div>
              </div>

              {/* LAYER 3 (z-20): Woman Cutout Image — OVER the revenue cards */}
              <div className="relative z-20 ml-auto mr-0 sm:mr-4 w-[280px] sm:w-[360px]">
                <Image
                  src="/Image (1).png"
                  alt="Instructor teaching online"
                  width={540}
                  height={600}
                  className="w-full h-auto object-contain block drop-shadow-md"
                  priority
                />
              </div>

              {/* LAYER 4 (z-30): Happy Students Card — OVER the tablet/jacket in front */}
              <div className="absolute bottom-36 right-0 sm:-right-10 z-30 rounded-2xl bg-white p-3.5 shadow-2xl border border-zinc-100/90 min-w-[215px] sm:min-w-[230px]">
                <div className=" items-center  gap-2">
                  <p className="text-xs font-extrabold text-zinc-900">Happy Students</p>
                  <div className="flex items-center gap-0.5 text-[10px] font-bold text-zinc-600">
                    <span>4.5</span>
                    <span className="text-[9px] text-zinc-400 font-normal">(240)</span>
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <div className="mt-2 flex -space-x-1.5 items-center">
                  <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/avatars/avatar-1.jpg" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/avatars/avatar-2.jpg" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/avatars/avatar-3.jpg" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/avatars/avatar-1.jpg" alt="" fill className="object-cover" />
                  </div>
                  <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                    <Image src="/avatars/avatar-2.jpg" alt="" fill className="object-cover" />
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#d2fc00] text-[8px] font-black text-zinc-900">
                    2K+
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT — text + checklist */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-zinc-900 leading-[1.18] font-heading">
              Create &amp; Manage<br />Courses Easily.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-md">
              <strong className="text-zinc-900">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>
            <div className="space-y-3.5 pt-2">
              {[
                "Share Your Expertise",
                "Monetize Your Passion",
                "Flexibility and Autonomy",
                "Build a Community",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full ">
                    <CheckCircle2
                      className="w-6 h-6 shrink-0 fill-[#1852fe] stroke-white"
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-zinc-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
