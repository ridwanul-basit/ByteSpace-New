"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Clock, BookOpen, ArrowUpRight } from "lucide-react";
import { CATEGORY_TABS, COURSES_DATA, Course } from "@/data/landingData";

interface CourseCatalogProps {
  searchQuery?: string;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({ searchQuery = "" }) => {
  const [activeTab, setActiveTab] = useState<string>("Popular");

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeTab === "Popular" ||
      course.category.toLowerCase().includes(activeTab.toLowerCase()) ||
      activeTab.toLowerCase().includes(course.category.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="courses" className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Explore courses designed to help you succeed in today&apos;s tech and creative industry. From beginner to expert levels.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#d2fc00] text-black shadow-sm scale-105"
                    : "border border-zinc-200/90 bg-zinc-50/80 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {tab}
              </button>
            );
          })}
          <button
            onClick={() => setActiveTab("Popular")}
            className="rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold border border-zinc-200/90 bg-zinc-50/80 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
          >
            + More
          </button>
        </div>

        {/* Courses Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredCourses.map((course: Course) => (
            <Link
              href={`/courses/${course.id === "course-1" ? "learn-figma-from-basic" : course.id === "course-2" ? "build-digital-asset" : course.id === "course-3" ? "the-power-of-big-data" : "build-digital-asset"}`}
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-zinc-800 shadow-sm">
                  {course.category}
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Course Meta Info */}
              <div className="mt-4 flex flex-col flex-1">
                {/* Meta details row */}
                <div className="flex items-center gap-4 text-xs text-zinc-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                    {course.lessons} Lessons
                  </span>
                  <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[10px] font-semibold text-zinc-600">
                    {course.level}
                  </span>
                </div>

                {/* Course Title */}
                <h3 className="mt-2.5 text-base sm:text-lg font-bold text-zinc-900 group-hover:text-[#1852fe] transition-colors line-clamp-2">
                  {course.title}
                </h3>

                {/* Bottom Row: Students & Price matching Figma ($45/course) */}
                <div className="mt-auto pt-5 flex items-center justify-between border-t border-zinc-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-blue-500 text-[10px] text-white flex items-center justify-center font-bold">
                        A
                      </div>
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-emerald-500 text-[10px] text-white flex items-center justify-center font-bold">
                        B
                      </div>
                      <div className="h-6 w-6 rounded-full border-2 border-white bg-amber-500 text-[10px] text-white flex items-center justify-center font-bold">
                        C
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-zinc-500">
                      {course.studentsCount}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#1852fe]">
                        {course.price.replace(".00", "")}
                      </span>
                      <span className="text-xs font-medium text-zinc-400">/course</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-zinc-100 group-hover:bg-[#1852fe] group-hover:text-white text-zinc-600 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
