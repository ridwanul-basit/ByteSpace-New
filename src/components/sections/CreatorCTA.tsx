import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LimeCylinder,
  LimeSquiggle,
  WhitePrism,
  WhiteZigzag,
  WhiteTorus,
  LimeTorus,
} from "@/components/ui/MemphisShapes";

export const CreatorCTA: React.FC = () => {
  return (
    <section id="creators" className="relative overflow-hidden bg-[#1852fe] py-24 sm:py-32 hero-grid-pattern text-white">
      {/* Decorative 3D Memphis Floating Shapes - Exact Figma match */}
      {/* Top Left: Lime Squiggle */}
      <LimeSquiggle className="absolute top-4 -left-4 sm:left-2 lg:left-6 w-32 h-36 sm:w-44 sm:h-52 -rotate-12 pointer-events-none drop-shadow-2xl z-10" />
      {/* Mid Left: White Zigzag */}
      <WhiteZigzag className="absolute top-8 left-28 sm:left-40 lg:left-48 w-14 h-18 sm:w-20 sm:h-24 -rotate-6 pointer-events-none drop-shadow-xl z-10" />
      {/* Bottom Left: Volumetric White Torus Ring */}
      <WhiteTorus className="absolute -bottom-8 -left-4 sm:left-2 lg:left-6 w-36 h-28 sm:w-52 sm:h-40 -rotate-12 pointer-events-none drop-shadow-2xl z-10" />
      {/* Far Bottom Left: Lime Torus Ring */}
      <LimeTorus className="absolute -bottom-6 left-24 sm:left-36 lg:left-48 w-32 h-24 sm:w-44 sm:h-32 rotate-12 pointer-events-none drop-shadow-2xl z-10" />

      {/* Top Right: White 3D Pyramid */}
      <WhitePrism className="absolute top-6 right-24 sm:right-36 lg:right-48 w-18 h-18 sm:w-28 sm:h-28 -rotate-12 pointer-events-none drop-shadow-xl z-10" />
      {/* Far Top Right: Lime Cylinder */}
      <LimeCylinder className="absolute -top-6 -right-4 sm:right-2 lg:right-6 w-28 h-36 sm:w-40 sm:h-48 rotate-12 pointer-events-none drop-shadow-2xl z-10" />
      {/* Bottom Right: Lime Squiggle */}
      <LimeSquiggle className="absolute -bottom-8 right-8 sm:right-16 lg:right-24 w-32 h-36 sm:w-44 sm:h-52 rotate-45 pointer-events-none drop-shadow-2xl z-10" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed opacity-95">
          Join our growing community of educators, instructors, and industry leaders. Share your passion, build your personal brand, and earn steady revenue.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Link
            href="#join"
            className="inline-flex items-center gap-2 rounded-full bg-[#d2fc00] px-8 sm:px-10 py-3.5 sm:py-4 text-base font-extrabold text-black shadow-2xl hover:bg-[#beef00] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Join as Creator</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
