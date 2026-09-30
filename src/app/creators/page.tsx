"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  SlidersHorizontal,
  BarChart2,
  LayoutGrid,
  ArrowUpDown,
  Star,
  Check,
} from "lucide-react";

/* ── Creator Courses Data ─────────────────────────────────────────────────── */
const CREATOR_COURSES = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/courses/Frame (1).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/courses/Frame (2).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
  {
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/courses/Frame (3).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
  {
    slug: "balancing-productivity",
    title: "Balancing Productivity an...",
    image: "/courses/Frame (4).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Manage...",
    image: "/courses/Frame (5).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
  {
    slug: "from-idea-to-startup",
    title: "From Idea to Startup Succ...",
    image: "/courses/Frame (6).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
  },
];

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setFollowerCount((prev) => prev - 1);
      setIsFollowing(false);
    } else {
      setFollowerCount((prev) => prev + 1);
      setIsFollowing(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      {/* ── Top Blue Grid Header ── */}
      <div className="relative bg-[#1852fe] pt-0 pb-16 overflow-hidden">
        {/* White Grid pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <Navbar />

        {/* Creator Info Container */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32">
          <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8">
            {/* Avatar with peach/pink rounded container */}
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 rounded-2xl overflow-hidden bg-[#fbcfe8] border-2 border-white/20 shadow-xl">
              <Image
                src="/instructor.png"
                alt="PurePearl Studio"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Profile details */}
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-[#d2fc00] px-3.5 py-1 text-xs font-bold text-black tracking-wide">
                  Creator
                </span>
              </div>

              <p className="text-white/80 font-medium text-sm sm:text-base">
                Passionate UI/UX, Web designer
              </p>

              <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-3xl pt-1">
                Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
                <br className="hidden sm:inline" />
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>

              {/* Stats and Follow button */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white px-4 py-2 text-xs sm:text-sm shadow-sm flex items-center gap-1.5">
                    <span className="font-extrabold text-[#1852fe] text-sm sm:text-base">3</span>
                    <span className="font-semibold text-zinc-800">Products</span>
                  </div>
                  <div className="rounded-full bg-white px-4 py-2 text-xs sm:text-sm shadow-sm flex items-center gap-1.5">
                    <span className="font-extrabold text-[#1852fe] text-sm sm:text-base">{followerCount}</span>
                    <span className="font-semibold text-zinc-800">Followers</span>
                  </div>
                </div>

                <button
                  onClick={handleFollowToggle}
                  className={`rounded-full px-8 py-2.5 text-sm font-bold shadow-md transition-all duration-200 cursor-pointer ${
                    isFollowing
                      ? "bg-white text-zinc-900 hover:bg-zinc-100 flex items-center gap-1.5"
                      : "bg-[#d2fc00] text-black hover:scale-105 hover:brightness-105"
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <Check className="w-4 h-4 text-[#1852fe]" /> Following
                    </>
                  ) : (
                    "Follow"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      <main className="flex-1 bg-[#ffffff]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Controls / Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-zinc-100">
            <div className="flex items-center gap-3 flex-wrap">
              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition cursor-pointer shadow-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500" />
                <span>Filter</span>
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition cursor-pointer shadow-xs">
                <BarChart2 className="w-3.5 h-3.5 text-zinc-500" />
                <span>Level</span>
              </button>

              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition cursor-pointer shadow-xs">
                <LayoutGrid className="w-3.5 h-3.5 text-zinc-500" />
                <span>Category</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50 transition cursor-pointer shadow-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500" />
                <span>Most relevant</span>
              </button>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CREATOR_COURSES.map((course) => (
              <div
                key={course.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Card Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-5 pt-3">
                  <div>
                    {/* Title + Rating */}
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="font-bold text-base text-zinc-900 line-clamp-1 hover:text-[#1852fe] transition-colors"
                      >
                        {course.title}
                      </Link>
                      <div className="flex items-center gap-1 shrink-0 text-xs font-bold text-zinc-600">
                        <span>{course.rating}</span>
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                    </div>

                    <p className="mt-1 text-xs text-zinc-400 font-medium">
                      by <span className="text-zinc-600">{course.author}</span>
                    </p>

                    {/* Level Badge + Enrolled Avatars */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                        <BarChart2 className="w-3 h-3 text-zinc-400" />
                        {course.level}
                      </span>

                      {/* Avatars Stack */}
                      <div className="flex items-center -space-x-2">
                        <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                          <Image src="/avatars/avatar-1.jpg" alt="Student" fill className="object-cover" />
                        </div>
                        <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                          <Image src="/avatars/avatar-2.jpg" alt="Student" fill className="object-cover" />
                        </div>
                        <div className="relative h-6 w-6 rounded-full border-2 border-white overflow-hidden">
                          <Image src="/avatars/avatar-3.jpg" alt="Student" fill className="object-cover" />
                        </div>
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#d2fc00] text-[9px] font-bold text-zinc-900">
                          26+
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Link */}
                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold text-[#1852fe]">
                        ${course.price}
                      </span>
                      <span className="text-xs text-zinc-400">/lifetime</span>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="rounded-full bg-[#1852fe] hover:bg-[#1242d4] px-4 py-1.5 text-xs font-bold text-white transition-colors"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
