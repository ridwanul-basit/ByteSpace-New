import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
    }
  };

  return (
    <footer className="bg-white text-zinc-900 pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand & Newsletter Form */}
          <div className="lg:col-span-6 space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/Vector (5).png"
                alt="ByteSpace logo"
                width={34}
                height={34}
                className="h-8.5 w-auto object-contain"
              />
              <span className="font-extrabold text-2xl tracking-tight text-zinc-900 font-heading">
                ByteSpace
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-600 max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Separate Pill Input & Search Button */}
            <form onSubmit={handleSubscribe} className="space-y-4 max-w-lg">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:w-72 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#d2fc00] px-7 py-2.5 text-xs sm:text-sm font-bold text-zinc-900 hover:bg-[#beef00] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer text-center"
                >
                  Search
                </button>
              </div>
              <p className="text-[10px] sm:text-[11px] text-zinc-500 max-w-md leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Right Columns: 3 Link Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            {/* Column 1 */}
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600">
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Featured Courses
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Featured Categories
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  IT
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Design
                </Link>
              </li>
            </ul>

            {/* Column 2 */}
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600">
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-zinc-900 transition-colors">
                  Sport
                </Link>
              </li>
            </ul>

            {/* Column 3 */}
            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600">
              <li>
                <Link href="/creators" className="hover:text-zinc-900 transition-colors">
                  Become a Creator
                </Link>
              </li>
              <li>
                <Link href="/creators" className="hover:text-zinc-900 transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="hover:text-zinc-900 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sign-in" className="hover:text-zinc-900 transition-colors">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-zinc-900 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-20 pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-zinc-500">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
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
