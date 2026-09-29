import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  LimeCylinder,
  LimeSquiggle,
  WhitePrism,
  WhiteZigzag,
  WhiteSpiral,
  LimeTorus,
} from "@/components/ui/MemphisShapes";

export const CreatorCTA: React.FC = () => {
  return (
    <section id="creators" className="relative overflow-hidden bg-[#1852fe] py-24 sm:py-32 hero-grid-pattern text-white">
      {/* Decorative 3D Memphis Floating Shapes - Exact Figma match */}
      {/* Top Left: Lime Cylinder */}
      <LimeCylinder className="absolute top-8 left-3 sm:left-10 w-20 h-24 sm:w-28 sm:h-36 pointer-events-none drop-shadow-xl z-10" />
      {/* Mid Left: White Zigzag */}
      <WhiteZigzag className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-14 w-10 h-14 sm:w-16 sm:h-22 pointer-events-none drop-shadow-md z-10" />
      {/* Bottom Left: Lime Torus */}
      <LimeTorus className="absolute bottom-6 left-12 sm:left-28 w-20 h-20 sm:w-32 sm:h-32 pointer-events-none drop-shadow-xl z-10" />

      {/* Top Right: White Prism */}
      <WhitePrism className="absolute top-10 right-4 sm:right-16 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none drop-shadow-md z-10" />
      {/* Mid Right: White Spiral Ribbon */}
      <WhiteSpiral className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-14 w-16 h-20 sm:w-22 sm:h-28 pointer-events-none drop-shadow-xl z-10" />
      {/* Bottom Right: Lime Squiggle */}
      <LimeSquiggle className="absolute bottom-6 right-3 sm:right-12 w-20 h-20 sm:w-28 sm:h-28 rotate-12 pointer-events-none drop-shadow-xl z-10" />

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
