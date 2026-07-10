"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Phone,
  ArrowRight,
  MoveRight,
  Download,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { BadgeCheck, Award, Globe2, Settings } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const bearingImages = ["/banner/1.png", "/banner/2.png", "/banner/3.png"];

  return (
    <section
      style={{
        backgroundImage: `
    
    url('/banner1.webp')
  `,

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-[480px] lg:h-[600px] overflow-hidden  text-white"
    >
      {/* Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0b4d88_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#062243_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#07172c,#081f3d,#07172c)]" />
    </div> */}

      {/* Grid Pattern */}
      {/* <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
    
    url('/banner1.webp')
  `,
          backgroundSize: "80px 80px, 80px 80px, cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      /> */}

      {/* Hero */}
      <div className="relative z-20 mx-auto max-w-7xl px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT */}
          <div>
            <p className="mb-7 tracking-[2px] font-bold uppercase text-blue-600">
              RUSSIAN PRECISION, GLOBAL TRUST
            </p>

            <h1 className="text-5xl lg:text-[55px] font-bold leading-tight text-black">
              PRECISION THAT
              <span className="block text-blue-700">POWER PROGRESS</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-7 text-black">
              High-quality ball and roller bearings
              <br />
              manufactured in Russia for industries worldwide.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <button className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-xl transition hover:scale-105">
                EXPLORE PRODUCTS
                <MoveRight size={18} />
              </button>

              <button className="flex items-center gap-3 rounded-xl border border-blue-600 px-8 py-4 text-blue-600 transition hover:bg-blue-50">
                DOWNLOAD CATALOG
                <Download size={18} />
              </button>
            </div>
            <div className="mt-12  rounded-xl  overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-start justify-center py-6 border-r border-b md:border-b-0 border-gray-200">
                  <div className="pl-3">
                    <Award className="w-9 h-9 text-[#4B63B8] mb-2" />
                    <h3 className="font-semibold text-black text-center">
                      Made in Russia
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center py-6 border-r border-b md:border-b-0 border-gray-200">
                  <div className="pl-3">
                    <BadgeCheck className="w-9 h-9 text-[#4B63B8] mb-2" />
                    <h3 className="font-semibold text-black text-center">
                      ISO Certified
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center py-6 border-r border-gray-200">
                  <div className="pl-3">
                    <Globe2 className="w-9 h-9 text-[#4B63B8] mb-2" />
                    <h3 className="font-semibold text-black text-center">
                      Global Delivery
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-center py-6">
                  <div className="pl-3">
                    <Settings className="w-9 h-9 text-[#4B63B8] mb-2" />
                    <h3 className="font-semibold whitespace-nowrap text-black text-start">
                      Custom Solutions
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop
              speed={700}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="w-[620px] h-[620px]"
            >
              {bearingImages.map((img, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={img}
                    alt={`Bearing ${index + 1}`}
                    width={620}
                    height={620}
                    className="object-contain"
                    priority={index === 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
