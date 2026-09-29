"use client";

import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/layout/AuthLayout";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      {/* Heading */}
      <p className="text-[#1852fe] font-semibold text-sm">Create an Account</p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 mt-1 leading-tight">
        Welcome to<br />ByteSpace
      </h1>

      {/* Form */}
      <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Full Name */}
        <div>
          <label htmlFor="signup-name" className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Full Name
          </label>
          <input
            id="signup-name"
            type="text"
            placeholder="Jamie Davis"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1852fe] focus:ring-2 focus:ring-[#1852fe]/20"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="signup-email" className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="designer@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition focus:border-[#1852fe] focus:ring-2 focus:ring-[#1852fe]/20"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signup-password" className="block text-xs font-semibold text-zinc-700 mb-1.5">
            Password
          </label>
          <input
            id="signup-password"
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
            Continue
          </button>
        </div>
      </form>

      {/* Footer link */}
      <p className="mt-10 text-center text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-semibold text-[#1852fe] underline underline-offset-2 hover:text-[#103dd4]">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
