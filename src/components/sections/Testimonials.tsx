import React from "react";
import Image from "next/image";

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: "1",
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "/avatars/avatar-1.jpg",
      comment:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      id: "2",
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/avatars/avatar-2.jpg",
      comment:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      id: "3",
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "/avatars/avatar-3.jpg",
      comment:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* ── AMBIENT GLOWS MATCHING FIGMA SCREENSHOT ── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-Right / Center Lime Gradient Glow */}
        <div
          className="absolute -top-24 right-0 sm:right-[5%] w-[650px] sm:w-[850px] h-[550px] sm:h-[650px] rounded-full blur-[100px] sm:blur-[130px] opacity-75 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(210,252,0,0.60) 0%, rgba(210,252,0,0.25) 45%, transparent 70%)",
          }}
        />

        {/* Bottom-Left Soft Blue / Periwinkle Glow */}
        <div
          className="absolute -bottom-24 -left-20 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full blur-[90px] sm:blur-[120px] opacity-75 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(96,134,247,0.38) 0%, rgba(24,82,254,0.16) 45%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-zinc-900 leading-[1.18] font-heading">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal max-w-lg pt-1">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-[2rem] border border-zinc-100 bg-white p-7 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* User Avatar */}
                <div className="relative h-14 w-14 overflow-hidden rounded-full shadow-xs mb-5">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 font-heading">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#1852fe] mt-0.5">
                  {item.role}
                </p>

                {/* Quote Content */}
                <p className="mt-5 text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
