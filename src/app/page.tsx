"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { CourseCatalog } from "@/components/sections/CourseCatalog";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { GrowthSplit } from "@/components/sections/GrowthSplit";
import { CreatorCTA } from "@/components/sections/CreatorCTA";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  const [courseSearch, setCourseSearch] = useState("");

  const handleHeroSearch = (query: string) => {
    setCourseSearch(query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-[#d2fc00] selection:text-black">
      {/* Absolute Header on Hero */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onSearch={handleHeroSearch} />

        {/* Partner Logos Bar */}
        <LogoCloud />

        {/* Course Catalog & Filter */}
        <CourseCatalog searchQuery={courseSearch} />

        {/* Diverse Learning Paths */}
        <LearningPaths />

        {/* Dual Split Feature Section (Professional Growth + Instructor Platform) */}
        <GrowthSplit />

        {/* Creator CTA Banner */}
        <CreatorCTA />

        {/* Community Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
