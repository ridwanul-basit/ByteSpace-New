import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS_DATA, Testimonial } from "@/data/landingData";

export const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 sm:py-32 border-t border-zinc-100"
    >
      {/* Radiant Lush Lime Gradient Mesh Glow on Right - Matches Figma Exactly */}
      <div className="absolute top-0 right-0 w-[550px] sm:w-[750px] h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-[#d2fc00]/30 blur-[100px]" />
        <div className="absolute top-1/2 -right-10 w-[450px] h-[450px] rounded-full bg-[#ccff00]/35 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d4fc02]/25 blur-[90px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#c6f047] bg-[#f7fee7]/90 p-5 sm:p-6 backdrop-blur-md shadow-xs">
              <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-medium">
                At ByteSpace, our learners and creators achieve remarkable milestones. Read real stories from individuals who transformed their careers and leveled up their skills with our practical courses.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item: Testimonial) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-3xl border border-zinc-200/90 bg-white/95 backdrop-blur-sm p-7 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5"
            >
              {/* Top User Info */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#d2fc00] shadow-sm">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-zinc-500">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Content */}
                <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Bottom Decorative Icon */}
              <div className="mt-6 flex justify-end">
                <Quote className="h-6 w-6 text-zinc-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
