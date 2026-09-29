"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      {/* Heading */}
      <p className="text-[#1852fe] font-semibold text-sm">Sign In</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 leading-tight">
        Welcome Back
      </h1>

      {/* Form */}
      <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Email */}
        <div>
          <label htmlFor="signin-email" className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Email
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1852fe] focus:ring-2 focus:ring-[#1852fe]/20"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signin-password" className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1852fe] focus:ring-2 focus:ring-[#1852fe]/20"
          />
        </div>

        {/* Submit */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="rounded-full bg-[#d2fc00] px-8 py-2.5 text-sm font-bold text-zinc-900 shadow-lg transition hover:brightness-95 hover:shadow-xl active:scale-[0.97] cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 h-px bg-zinc-200" />
        <span className="text-xs text-zinc-400 font-medium">or</span>
        <div className="flex-1 h-px bg-zinc-200" />
      </div>

      {/* Social buttons */}
      <div className="mt-6 flex justify-center gap-4">
        {/* Facebook */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white transition hover:bg-zinc-50 hover:shadow cursor-pointer">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        {/* Google */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white transition hover:bg-zinc-50 hover:shadow cursor-pointer">
          <svg viewBox="0 0 24 24" className="h-5 w-5">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.07l3.66-2.98z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </button>
      </div>

      {/* Footer link */}
      <p className="mt-8 text-center text-sm text-zinc-500">
        New user?{" "}
        <Link href="/sign-up" className="font-semibold text-[#1852fe] underline underline-offset-2 hover:text-[#103dd4]">
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
