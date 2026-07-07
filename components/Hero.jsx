"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07172c] text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b4d88_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#062243_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#07172c,#081f3d,#07172c)]" />
    </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px,transparent 1px),linear-gradient(90deg,#ffffff 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />


      {/* Hero */}
      <div className="relative z-20 mx-auto grid  max-w-7xl grid-cols-2 items-center px-6">

        {/* LEFT */}
        <div>

          <p className="mb-4 tracking-[6px] uppercase text-sky-400">
            WELCOME TO ARB
          </p>

          <h1 className="text-[50px] font-black ">

            Driving Precision

      

            with   <span className="block text-sky-400">
              Every Revolution
            </span>

          

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-white">

            High-quality bearings engineered for durability,
            precision, and superior industrial performance
            across diverse applications.

          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-gradient-to-r from-sky-500 to-blue-700 px-8 py-4 font-semibold shadow-xl transition hover:scale-105">

              Explore Products

            </button>

            <button className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 transition hover:bg-white/10">

              Learn More

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* Blue Glow */}
          <div className="absolute h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[120px]" />

          {/* Ring */}
          <div className="absolute h-[560px] w-[560px] rounded-full border border-sky-500/20" />

          <div className="absolute h-[480px] w-[480px] rounded-full border border-white/10" />

          {/* Bearing Image */}
          <Image
            src="/bearing.png"
            alt="Bearing"
            width={620}
            height={620}
            priority
            className="relative z-20 object-contain drop-shadow-[0_30px_80px_rgba(0,170,255,.45)]"
          />

        </div>

      </div>

    </section>
  );
}