"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, BarChart2 } from "lucide-react";
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
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight font-heading">
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

        {/* Courses Grid — Exact Figma Design */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Card Thumbnail */}
              <div className="relative h-52 w-full overflow-hidden bg-zinc-100 p-3">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Tags Pills on bottom of image */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1">
                    <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white border border-white/10">
                      {course.lessons} Lessons
                    </span>
                    <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white border border-white/10">
                      {course.duration}
                    </span>
                    <span className="rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-white border border-white/10">
                      {course.reviewsCount} Comments
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 pt-3">
                <div>
                  {/* Title + Rating */}
                  <div className="flex items-start justify-between gap-2">
                    <Link
                      href={`/courses/${course.id === "course-1" ? "learn-figma-from-basic" : course.id === "course-2" ? "build-digital-asset" : course.id === "course-3" ? "the-power-of-big-data" : course.id === "course-4" ? "balancing-productivity" : course.id === "course-5" ? "mastering-money-management" : "from-idea-to-startup"}`}
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
                    by <span className="text-zinc-600">{course.author.name}</span>
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
                      ${course.price.replace("$", "")}
                    </span>
                    <span className="text-xs text-zinc-400">/lifetime</span>
                  </div>

                  <Link
                    href={`/courses/${course.id === "course-1" ? "learn-figma-from-basic" : course.id === "course-2" ? "build-digital-asset" : course.id === "course-3" ? "the-power-of-big-data" : course.id === "course-4" ? "balancing-productivity" : course.id === "course-5" ? "mastering-money-management" : "from-idea-to-startup"}`}
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
    </section>
  );
};
