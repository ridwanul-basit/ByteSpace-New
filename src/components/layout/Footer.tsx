"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter Form */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/Vector (5).png"
                alt="ByteSpace logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain"
              />
              <span className="font-extrabold text-2xl tracking-tight text-zinc-900 font-heading">
                ByteSpace
              </span>
            </Link>

            <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
              Stay up to date with new courses, discounts, and tech insights.
            </p>

            {/* Newsletter Pill Input */}
            <form onSubmit={handleSubscribe} className="relative max-w-md">
              <div className="flex items-center rounded-full border border-zinc-300 bg-zinc-50/50 p-1.5 focus-within:border-[#1852fe] focus-within:ring-2 focus-within:ring-[#1852fe]/20">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-4 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#d2fc00] px-5 py-2.5 text-xs sm:text-sm font-bold text-black shadow-xs hover:bg-[#beef00] hover:scale-105 transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Joined!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-zinc-400">
                By subscribing you agree to our Privacy Policy and consent to receive updates.
              </p>
            </form>
          </div>

          {/* Right Columns: Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                Platform
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-600">
                <li>
                  <Link href="#courses" className="hover:text-[#1852fe] transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-[#1852fe] transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#mentors" className="hover:text-[#1852fe] transition-colors">
                    Mentors
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-[#1852fe] transition-colors">
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                Categories
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-600">
                <li>
                  <Link href="#courses" className="hover:text-[#1852fe] transition-colors">
                    Design
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-[#1852fe] transition-colors">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-[#1852fe] transition-colors">
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="hover:text-[#1852fe] transition-colors">
                    Business
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                Creators
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-600">
                <li>
                  <Link href="#creators" className="hover:text-[#1852fe] transition-colors">
                    Teach on ByteSpace
                  </Link>
                </li>
                <li>
                  <Link href="#creators" className="hover:text-[#1852fe] transition-colors">
                    Creator Portal
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1852fe] transition-colors">
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1852fe] transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-600">
                <li>
                  <Link href="#" className="hover:text-[#1852fe] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1852fe] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1852fe] transition-colors">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#1852fe] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} ByteSpace, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
