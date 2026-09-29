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
  BookOpen,
  Clock,
  MessageSquare,
  BarChart2,
} from "lucide-react";

/* ── Static course data ────────────────────────────────────────────────────── */
const COURSES = [
  { slug: "learn-figma-from-basic", title: "Learn Figma from Basic", image: "/courses/course-1.jpg", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "UX/UI Design" },
  { slug: "build-digital-asset", title: "Build Digital Asset", image: "/courses/course-2.jpg", author: "purepearl studio", rating: 4.5, level: "Intermediate", price: 25, lessons: 112, duration: "24h", comments: 45, category: "Design" },
  { slug: "the-power-of-big-data", title: "the Power of Big Data", image: "/courses/course-3.jpg", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Development" },
  { slug: "balancing-productivity", title: "Balancing Productivity an...", image: "/courses/course-4.jpg", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Marketing" },
  { slug: "mastering-money-management", title: "Mastering Money Manag...", image: "/courses/course-5.jpg", author: "purepearl studio", rating: 4.2, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Finance" },
  { slug: "from-idea-to-startup", title: "From Idea to Startup Succ...", image: "/courses/course-6.jpg", author: "purepearl studio", rating: 4.5, level: "Beginner", price: 25, lessons: 17, duration: "2h 16min", comments: 59, category: "Music" },
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
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((course, idx) => (
              <Link
                key={idx}
                href={`/courses/${course.slug}`}
                className="group rounded-2xl bg-white border border-zinc-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 bg-zinc-100 overflow-hidden">
                  <Image src={course.image} alt={course.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  {/* Badges */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 flex-wrap">
                    <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white font-semibold flex items-center gap-0.5">
                      <BookOpen className="w-2 h-2" /> {course.lessons} Lessons
                    </span>
                    <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white font-semibold flex items-center gap-0.5">
                      <Clock className="w-2 h-2" /> {course.duration}
                    </span>
                    <span className="rounded-full bg-black/60 px-2 py-0.5 text-[8px] text-white font-semibold flex items-center gap-0.5">
                      <MessageSquare className="w-2 h-2" /> {course.comments} Comments
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-extrabold text-zinc-900 leading-snug line-clamp-1">{course.title}</p>
                    <span className="flex items-center gap-0.5 text-xs font-bold text-amber-500 shrink-0">
                      {course.rating} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    </span>
                  </div>
                  <p className="text-[10px] text-[#1852fe] font-semibold mt-0.5">by {course.author}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <BarChart2 className="w-3 h-3 text-zinc-400" />
                      <span className="text-[10px] font-semibold text-zinc-500">{course.level}</span>
                    </div>
                    <div className="flex -space-x-1.5">
                      {["bg-blue-500","bg-amber-500","bg-purple-500","bg-emerald-500"].map((bg,i) => (
                        <div key={i} className={`h-5 w-5 rounded-full border border-white ${bg}`} />
                      ))}
                      <div className="h-5 w-5 rounded-full border border-white bg-zinc-800 text-white text-[7px] flex items-center justify-center font-black">26+</div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm font-black text-[#1852fe]">
                    ${course.price}<span className="text-[10px] font-medium text-zinc-400">/lifetime</span>
                  </p>
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
