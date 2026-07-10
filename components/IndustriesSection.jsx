"use client";

import Image from "next/image";
import { ArrowRight, Factory, Pickaxe, Fuel, Building2, Train, Cog } from "lucide-react";

const industries = [
  {
    title: "Metallurgy",
    image: "/Metallurgy.jfif",
    icon: Factory,
  },
  {
    title: "Mining",
    image: "/mining.jpg",
    icon: Pickaxe,
  },
  {
    title: "Oil & Gas",
    image: "/oil.jpg",
    icon: Fuel,
  },
  {
    title: "Construction",
    image: "/const.jpg",
    icon: Building2,
  },
  {
    title: "Railways",
    image: "/railway.jpg",
    icon: Train,
  },

];

export default function  IndustriesSection() {
  return (
    <section className="bg-[#EDF4FE] py-10">
      <div className="max-w-7xl mx-auto ">

        <span className="text-[#D9251C] uppercase tracking-[4px] text-sm font-semibold">
          Industries We Serve
        </span>

        <h2 className="text-5xl font-bold text-[#27176D] mt-3 mb-12">
          Powering Industries Worldwide
        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative h-[360px] overflow-hidden rounded-xl border border-white/10 bg-[#09192d] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061322] via-[#061322]/10 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                      <Icon className="text-white w-5 h-5" />
                    </div>

                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>

                  </div>

                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-500" />

                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition duration-500" />

              </div>
            );
          })}

        </div>

        <div className="flex justify-center mt-12">

          <button className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-md text-white font-semibold hover:shadow-[0_0_30px_rgba(37,99,235,.45)] transition">

            VIEW ALL INDUSTRIES

            <ArrowRight className="group-hover:translate-x-1 transition" />

          </button>

        </div>

      </div>
    </section>
  );
}