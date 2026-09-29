import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#1852fe] overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Giant 404 */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24">
          <span
            className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black leading-none select-none"
            style={{
              background: "linear-gradient(180deg, #d2fc00 0%, #d2fc00 40%, rgba(210,252,0,0.25) 75%, rgba(24,82,254,0.0) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            404
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white -mt-8 sm:-mt-14 leading-snug max-w-lg">
            The page you are looking for doesn&apos;t exist
          </h1>

          <p className="mt-4 text-sm sm:text-base text-blue-200 max-w-md">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-full bg-[#d2fc00] px-8 py-3 text-sm font-bold text-zinc-900 shadow-lg transition hover:brightness-95 hover:shadow-xl hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
