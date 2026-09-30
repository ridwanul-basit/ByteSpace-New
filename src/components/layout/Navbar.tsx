"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ShoppingBag } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/Vector (5).png"
            alt="ByteSpace logo"
            width={36}
            height={36}
            className="h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <span className="font-extrabold text-2xl tracking-tight text-white font-heading">
            ByteSpace
          </span>
        </Link>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-white/90">
          <Link
            href="/"
            className="text-white font-semibold transition-colors hover:text-[#d2fc00] py-1"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="transition-colors hover:text-[#d2fc00] py-1 text-white/80"
          >
            Courses
          </Link>
          <Link
            href="/creators"
            className="transition-colors hover:text-[#d2fc00] py-1 text-white/80"
          >
            Creators
          </Link>
          <Link
            href="/#testimonials"
            className="transition-colors hover:text-[#d2fc00] py-1 text-white/80"
          >
            Community
          </Link>
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/sign-in"
            className="text-sm font-semibold text-white hover:text-[#d2fc00] transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1852fe] shadow-md transition-all duration-200 hover:bg-[#d2fc00] hover:text-black hover:scale-105"
          >
            <span>Join Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/courses"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-[#d2fc00] hover:bg-white/10 transition-all"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#1447db]/95 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-4 text-base font-semibold text-white">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#d2fc00]"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#d2fc00]"
            >
              Courses
            </Link>
            <Link
              href="/creators"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#d2fc00]"
            >
              Creators
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#d2fc00]"
            >
              Community
            </Link>
            <div className="pt-4 border-t border-white/15 flex flex-col gap-3">
              <Link
                href="/sign-in"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2.5 text-white hover:text-[#d2fc00]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full bg-[#d2fc00] py-3 text-center font-bold text-black shadow-lg"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
