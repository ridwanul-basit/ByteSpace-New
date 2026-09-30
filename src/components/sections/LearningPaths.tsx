import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { LEARNING_PATHS, LearningCategory } from "@/data/landingData";

const PATH_LOGOS = [
  "/Frame (7).png",
  "/Style=Filled.png",
  "/Style=Filled (1).png",
  "/Vector (6).png",
  "/Vector (7).png",
  "/Vector (8).png",
];

export const LearningPaths: React.FC = () => {
  return (
    <section className="py-20 sm:pb-24 bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 font-heading">
            Explore Diverse Learning Paths at ByteSpace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Find the right path to accelerate your professional journey with our structured learning tracks.
          </p>
        </div>

        {/* 6 Category Path Cards Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {LEARNING_PATHS.map((item: LearningCategory, index: number) => {
            const logoSrc = PATH_LOGOS[index % PATH_LOGOS.length];
            return (
              <div
                key={item.id}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-zinc-200/90 bg-white p-6 text-center shadow-xs transition-all duration-300 hover:border-[#1852fe]/40 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Lime Yellow Circular Icon Box */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d2fc00] text-black shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 p-3.5">
                  <Image
                    src={logoSrc}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                {/* Category Title */}
                <h3 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-[#1852fe] transition-colors font-heading">
                  {item.title}
                </h3>

                {/* Course Count */}
                <p className="mt-1 text-xs text-zinc-500 font-medium">
                  {item.coursesCount}
                </p>

                {/* Subtle Hover Indicator */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center text-[11px] font-bold text-[#1852fe] gap-1">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
