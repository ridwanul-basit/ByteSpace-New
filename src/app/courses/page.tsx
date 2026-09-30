"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  BarChart2,
} from "lucide-react";

/* ── Static course data ────────────────────────────────────────────────────── */
const COURSES = [
  { slug: "learn-figma-from-basic", title: "Learn Figma from Basic", image: "/courses/Frame (1).png", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "UX/UI Design" },
  { slug: "build-digital-asset", title: "Build Digital Asset", image: "/courses/Frame (2).png", author: "purepearl studio", rating: 4.5, level: "Intermediate", price: 25, lessons: 112, duration: "24h", comments: 45, category: "Design" },
  { slug: "the-power-of-big-data", title: "the Power of Big Data", image: "/courses/Frame (3).png", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Development" },
  { slug: "balancing-productivity", title: "Balancing Productivity an...", image: "/courses/Frame (4).png", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Marketing" },
  { slug: "mastering-money-management", title: "Mastering Money Manag...", image: "/courses/Frame (5).png", author: "purepearl studio", rating: 4.2, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Finance" },
  { slug: "from-idea-to-startup", title: "From Idea to Startup Succ...", image: "/courses/Frame (6).png", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Music" },
];

const CATEGORIES = [
  "Featured", "Music", "Drawing & Painting", "Marketing",
  "Animation", "Social Media", "UX/UI Design", "Creative Marketing", "Coding",
];

const ITEMS_PER_PAGE = 9;

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  // Repeat the 6 courses to fill 18 total cards (for pagination demo)
  const allCourses = [...COURSES, ...COURSES, ...COURSES];
  const totalPages = Math.ceil(allCourses.length / ITEMS_PER_PAGE);
  const paginated = allCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* ── Blue hero header ── */}
      <div className="relative bg-[#1852fe] pb-12 pt-0">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Navbar />

        <div className="relative z-10 pt-28 pb-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Find Your Next Course
          </h1>

          {/* Search bar */}
          <div className="mt-6 mx-auto max-w-xl flex items-center gap-3 px-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-[#d2fc00] pl-10 pr-4 py-3 text-sm font-semibold text-zinc-900 placeholder-zinc-600 outline-none"
              />
            </div>
            <button className="rounded-full bg-[#d2fc00] px-6 py-3 text-sm font-bold text-zinc-900 flex items-center gap-2 hover:brightness-95 transition cursor-pointer">
              Go now <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Filters + Grid ── */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

          {/* Filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-700 hover:text-[#1852fe] transition cursor-pointer">
                <SlidersHorizontal className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-[#1852fe] transition cursor-pointer">
                <BarChart2 className="w-4 h-4" /> Level <ChevronDown className="w-3 h-3" />
              </button>
              <button className="flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-[#1852fe] transition cursor-pointer">
                Category <ChevronDown className="w-3 h-3" />
              </button>
            </div>
            <button className="flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-[#1852fe] transition cursor-pointer">
              Most Recent <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold border transition cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1852fe] text-white border-[#1852fe]"
                    : "bg-white text-zinc-700 border-zinc-200 hover:border-[#1852fe] hover:text-[#1852fe]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paginated.map((course, idx) => (
              <Link
                key={idx}
                href={`/courses/${course.slug}`}
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
                      <p className="font-bold text-base text-zinc-900 line-clamp-1 group-hover:text-[#1852fe] transition-colors">
                        {course.title}
                      </p>
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

                  {/* Price & Action */}
                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-extrabold text-[#1852fe]">
                        ${course.price}
                      </span>
                      <span className="text-xs text-zinc-400">/lifetime</span>
                    </div>

                    <span className="rounded-full bg-[#1852fe] group-hover:bg-[#1242d4] px-4 py-1.5 text-xs font-bold text-white transition-colors">
                      Enroll
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-9 w-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#1852fe] hover:text-[#1852fe] disabled:opacity-30 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`h-9 w-9 rounded-full text-sm font-bold transition cursor-pointer ${
                  currentPage === p
                    ? "bg-[#1852fe] text-white"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-9 w-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[#1852fe] hover:text-[#1852fe] disabled:opacity-30 transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
