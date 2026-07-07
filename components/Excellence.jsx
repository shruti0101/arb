"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Cog,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    text: "Modern facilities equipped with cutting-edge production technology.",
  },
  {
    icon: Cog,
    title: "Precision Engineering",
    text: "High-accuracy machining for superior bearing performance.",
  },
  {
    icon: ShieldCheck,
    title: "Stringent Quality Control",
    text: "Comprehensive testing and inspection at every stage.",
  },
  {
    icon: Sparkles,
    title: "Innovation-Driven Processes",
    text: "Continuous investment in technology and manufacturing excellence.",
  },
];

export default function Excellence() {
  return (
    <section className="relative overflow-hidden bg-white py-15">
      {/* Background */}


      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold tracking-[0.3em] text-red-600">
              MANUFACTURING EXCELLENCE
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              Manufacturing Excellence
            </h2>

            <p className="mt-5 text-2xl font-semibold text-[#28186C]">
              Precision Manufacturing. Global Standards. Exceptional Performance.
            </p>

            <p className="mt-5 text-lg leading-9 text-black">
              As a leading bearing manufacturer, ARB Bearings combines advanced
              manufacturing technologies with precision engineering to produce
              high-quality bearings that meet global performance standards.
              Every product is manufactured with a focus on accuracy,
              durability, and reliability to deliver consistent performance
              across demanding industrial applications.
            </p>
          </motion.div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.7,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 backdrop-blur-xl shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,.10),transparent_60%)] opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#28186C]  text-white shadow-lg">
                      <Icon size={28} />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-black">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}