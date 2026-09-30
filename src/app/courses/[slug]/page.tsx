"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Share2,
  BarChart2,
  Star,
  Users,
  Play,
  BookOpen,
  Video,
  Award,
  Headphones,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

/* ── Static data ─────────────────────────────────────────────────────────────── */
const COURSE = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  level: "Intermediate",
  rating: 4.8,
  reviews: 172,
  students: 199,
  price: 25,
  lessons: 112,
  duration: "24 hours",
  image: "/courses/Frame (2).png",
};

const LESSON_PREVIEW = [
  { num: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
  { num: "02", title: "Design Principles for Impact", duration: "21 mins" },
  { num: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
];

const MODULES = [
  { num: 1, title: "Introduction to Digital Assets", desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation." },
  { num: 2, title: "Design Principles for Impact", desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills." },
  { num: 3, title: "User-Centric Design Strategies", desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design." },
  { num: 4, title: "Interactive Media and Engagement", desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences." },
  { num: 5, title: "Project Showcase and Critique", desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence." },
  { num: 6, title: "Optimizing Digital Assets for Various Platforms", desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Focus on widespread accessibility and engagement across diverse digital landscapes." },
];

const KEY_POINTS = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const REVIEWS = [
  { name: "PurePearl Studio", role: "UX/UI Designer", time: "1 year ago", rating: 5, text: "The course is a fantastic 101 & comprehensive understanding of digital asset creation. The lessons were robust, practical, and immediately applicable to my work. I highly recommend it to all!" },
  { name: "Albert Flores", role: "UI/UX Designer", time: "1 year ago", rating: 4, text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. It is easy to implement what I've learned!" },
  { name: "Cody Fisher", role: "UI/UX Designer", time: "1 year ago", rating: 5, text: "The project-focused and unique module provided a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning experience." },
  { name: "Brooklyn Simmons", role: "UX/UI Designer", time: "1 year ago", rating: 5, text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the ongoing content kept me excited and motivated." },
];

const SNEAK_PEEK_IMAGES = [
  "/courses/Frame (1).png",
  "/courses/Frame (2).png",
  "/courses/Frame (3).png",
  "/courses/Frame (4).png",
  "/courses/Frame (5).png",
  "/courses/Frame (6).png",
];

type TabType = "about" | "lessons" | "reviews";

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState<TabType>("about");

  return (
    <>
      {/* ── Blue Hero Header ── */}
      <div className="relative bg-[#1852fe] pb-8">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <Navbar />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-4">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug max-w-2xl">
                {COURSE.title}
              </h1>
              <p className="mt-1 text-sm text-blue-200">{COURSE.subtitle}</p>
              <p className="mt-2 text-xs text-blue-300">
                by{" "}
                <Link href="/creators" className="text-[#d2fc00] font-semibold hover:underline">
                  {COURSE.author}
                </Link>
              </p>

              {/* Badges */}
              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-[11px] font-bold text-white">
                  <BarChart2 className="w-3 h-3" /> {COURSE.level}
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-[11px] font-bold text-white">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {COURSE.rating} ({COURSE.reviews} reviews)
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-white/30 px-3 py-1.5 text-[11px] font-bold text-white">
                  <Users className="w-3 h-3" /> {COURSE.students} Students
                </span>
              </div>
            </div>

            <button className="flex items-center gap-2 rounded-full bg-[#d2fc00] px-5 py-2.5 text-sm font-bold text-zinc-900 shadow-lg hover:brightness-95 transition cursor-pointer shrink-0">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* LEFT — Video + Tabs */}
            <div className="lg:col-span-2">
              {/* Video thumbnail */}
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900 aspect-video">
                <Image src={COURSE.image} alt={COURSE.title} fill className="object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-[#1852fe] ml-1" fill="#1852fe" />
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-8 flex items-center gap-1 border-b border-zinc-200">
                {(["about", "lessons", "reviews"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 text-sm font-semibold capitalize transition border-b-2 cursor-pointer ${activeTab === tab
                      ? "border-[#1852fe] text-[#1852fe]"
                      : "border-transparent text-zinc-500 hover:text-zinc-800"
                      }`}
                  >
                    {tab === "reviews" ? "Reviews" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="mt-6">
                {activeTab === "about" && <AboutTab />}
                {activeTab === "lessons" && <LessonsTab />}
                {activeTab === "reviews" && <ReviewsTab />}
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Lesson list card */}
              <div className="rounded-2xl border border-zinc-100 bg-white shadow-lg p-5">
                <h3 className="text-sm font-extrabold text-zinc-900">
                  {COURSE.lessons} Lessons ({COURSE.duration})
                </h3>
                <div className="mt-4 space-y-3">
                  {LESSON_PREVIEW.map((l) => (
                    <div key={l.num} className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold text-zinc-400 mt-0.5">{l.num}</span>
                        <p className="text-xs font-semibold text-zinc-700 leading-snug">{l.title}</p>
                      </div>
                      <span className="text-[10px] font-semibold text-rose-500 shrink-0">{l.duration}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[10px] text-zinc-400 font-medium">99 more videos</p>

                <div className="mt-6 border-t border-zinc-100 pt-4">
                  <p className="text-[10px] text-zinc-400">Ready to Dive In? Enroll Now and Start Building Your Digital Future!</p>
                  <p className="mt-2 text-3xl font-black text-zinc-900">
                    ${COURSE.price}<span className="text-sm font-medium text-zinc-400">/lifetime</span>
                  </p>
                  <button className="mt-4 w-full rounded-full bg-[#d2fc00] py-3 text-sm font-bold text-zinc-900 shadow-lg hover:brightness-95 transition cursor-pointer">
                    Enroll Now
                  </button>
                </div>

                {/* This course includes */}
                <div className="mt-6 border-t border-zinc-100 pt-4">
                  <h4 className="text-xs font-extrabold text-zinc-900 mb-3">This course include</h4>
                  <div className="space-y-2">
                    {[
                      { icon: BookOpen, label: "Learning Resources" },
                      { icon: Video, label: "Quality Lesson Videos" },
                      { icon: Award, label: "Certificate of Completion" },
                      { icon: Headphones, label: "Private Consultation" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-[#1852fe]" />
                        <span className="text-xs text-zinc-600 font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instructor card */}
              <div className="rounded-2xl border border-zinc-100 bg-white shadow-lg p-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 rounded-full overflow-hidden bg-[#fbcfe8] shrink-0 border border-zinc-100">
                    <Image src="/instructor.png" alt="PurePearl Studio" fill className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-zinc-900">PurePearl Studio</p>
                    <p className="text-[10px] text-zinc-500">Professional Creator</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <Link href="/creators" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#1852fe] hover:underline">
                  See Full Profile <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TAB: About
═══════════════════════════════════════════════════════════════════════════════ */
function AboutTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-extrabold text-zinc-900">Description</h2>
        <div className="mt-3 space-y-3 text-sm text-zinc-600 leading-relaxed">
          <p>
            Embark on an enlightening exploration into the world of digital creation with our comprehensive
            course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformational learning experience invites
            you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork
            with foundational concepts to mastering advanced techniques, this guide is meticulously curated to
            empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
          </p>
          <p>
            In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
            concepts that form the backbone of digital asset creation. Understand the fundamental elements that
            constitute compelling digital content and gain proficiency in leveraging these elements to communicate
            effectively in the digital realm.
          </p>
          <p>
            As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances
            of design principles that drive impactful creations. Uncover the secrets behind effective visual
            communication, exploring color theory, typography, and layout strategies that elevate your digital assets
            to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply
            these principles in practical scenarios.
          </p>
        </div>
      </div>

      {/* Sneak Peek */}
      <div>
        <h2 className="text-xl font-extrabold text-zinc-900">Sneak Peak</h2>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {SNEAK_PEEK_IMAGES.map((src, i) => (
            <div key={i} className="shrink-0 w-24 h-20 rounded-xl overflow-hidden bg-zinc-100 relative">
              <Image src={src} alt={`Preview ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div>
        <h2 className="text-xl font-extrabold text-zinc-900">Key Points</h2>
        <div className="mt-3 space-y-2.5">
          {KEY_POINTS.map((point) => (
            <div key={point} className="flex items-center gap-2.5">
              <CheckCircle2
                className="w-4 h-4 shrink-0 fill-[#1852fe] stroke-white"
              />
              <span className="text-sm text-zinc-700">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TAB: Lessons
═══════════════════════════════════════════════════════════════════════════════ */
function LessonsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-extrabold text-zinc-900">Explore the Modules</h2>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
          Immerse yourself in the course content as we break down each module into comprehensive lessons,
          providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* Module list */}
      <div>
        <h3 className="text-lg font-extrabold text-zinc-900">Lesson List</h3>
        <div className="mt-4 space-y-5">
          {MODULES.map((m) => (
            <div key={m.num} className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-500">
                <Play className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">
                  Module {m.num}: {m.title}
                </p>
                <p className="mt-0.5 text-xs text-zinc-500 leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content */}
      <div>
        <h3 className="text-lg font-extrabold text-zinc-900">Lesson Content</h3>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and
          interactive elements. Download resources, complete assignments, and test your understanding with
          quizzes.
        </p>
      </div>

      {/* Progress Tracking */}
      <div>
        <h3 className="text-lg font-extrabold text-zinc-900">Lesson Progress Tracking</h3>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
          through your learning journey.
        </p>
        <div className="mt-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm max-w-54px">
          <p className="text-[10px] font-semibold text-zinc-500">Learning Progress</p>
          <p className="mt-1 text-3xl font-black text-zinc-900">55%</p>
          <div className="mt-3 h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#d2fc00] rounded-full w-[58%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   TAB: Reviews
═══════════════════════════════════════════════════════════════════════════════ */
function ReviewsTab() {
  const [filterRating, setFilterRating] = useState("All rating");
  const ratingBreakdown = [
    { stars: 5, count: 240 },
    { stars: 4, count: 130 },
    { stars: 3, count: 20 },
    { stars: 2, count: 5 },
    { stars: 1, count: 10 },
  ];
  const total = ratingBreakdown.reduce((s, r) => s + r.count, 0);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-extrabold text-zinc-900">What Learners Are Saying</h2>
        <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
          Discover what our learners have to say about their experience with &quot;Build Digital Assets: A
          Comprehensive Guide.&quot; Read reviews and ratings from individuals who have embarked on this
          transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Rating overview */}
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <div className="text-center">
          <div className="inline-flex flex-col items-center rounded-2xl bg-zinc-50 px-6 py-4">
            <p className="text-[10px] font-semibold text-zinc-500 uppercase">Rating</p>
            <p className="text-4xl font-black text-zinc-900">4.7</p>
            <div className="mt-1 flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`w-3 h-3 ${i <= 4 ? "fill-amber-400 text-amber-400" : "text-zinc-300"}`} />)}
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-1.5">
          {ratingBreakdown.map((r) => (
            <div key={r.stars} className="flex items-center gap-2">
              <div className="flex gap-0.5 w-20 justify-end">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`w-3 h-3 ${i <= r.stars ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`} />)}
              </div>
              <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${(r.count / total) * 100}%` }} />
              </div>
              <span className="text-xs text-zinc-500 font-medium w-8 text-right">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter pills */}
      <div>
        <h3 className="text-lg font-extrabold text-zinc-900">Individual Reviews:</h3>
        <div className="mt-3 flex items-center gap-2 flex-wrap">
          {["All rating", "5 ★", "4 ★", "3 ★", "2 ★", "1 ★"].map((f) => (
            <button
              key={f}
              onClick={() => setFilterRating(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold border transition cursor-pointer ${filterRating === f
                ? "bg-[#1852fe] text-white border-[#1852fe]"
                : "bg-white text-zinc-600 border-zinc-200 hover:border-[#1852fe]"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Review cards */}
      <div className="space-y-6">
        {REVIEWS.map((review, idx) => (
          <div key={idx} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                  {review.name.split(" ").map(w => w[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900">{review.name}</p>
                  <p className="text-[10px] text-zinc-500">{review.role}</p>
                </div>
              </div>
              <span className="text-[10px] text-zinc-400">{review.time}</span>
            </div>
            <div className="mt-2 flex gap-0.5">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className={`w-3 h-3 ${i <= review.rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"}`} />)}
            </div>
            <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
