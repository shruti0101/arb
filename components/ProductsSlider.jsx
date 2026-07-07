"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Deep Groove\nBall Bearings",
    desc: "High speed, low friction, versatile applications",
    image: "/1.webp",
  },
  {
    title: "Spherical Roller\nBearings",
    desc: "Handle heavy loads and misalignment",
    image: "/2.webp",
  },
  {
    title: "Tapered Roller\nBearings",
    desc: "Designed for combined radial and axial loads",
    image: "/3.png",
  },
  {
    title: "Cylindrical Roller\nBearings",
    desc: "High radial load capacity and durability",
    image: "/2.webp",
  },
  {
    title: "Thrust Ball & Roller\nBearings",
    desc: "For axial load applications in both directions",
    image: "/1.webp",
  },
   {
    title: "Thrust Ball & Roller\nBearings",
    desc: "For axial load applications in both directions",
    image: "/1.webp",
  },
   {
    title: "Thrust Ball & Roller\nBearings",
    desc: "For axial load applications in both directions",
    image: "/1.webp",
  },
];

export default function ProductSlider() {
  return (
    <section className="bg-[#071321] py-10 relative overflow-hidden">

      <div className="max-w-7xl mx-auto ">

        {/* Heading */}

        <div className="flex justify-between items-center mb-10">

          <div>

            <p className="text-[#2D8CFF] uppercase text-sm tracking-[3px] font-semibold">
              Our Products
            </p>

            <h2 className="text-white text-5xl font-bold mt-2">
              Precision in Every Rotation
            </h2>

          </div>

          <button className="hidden md:flex items-center gap-3 border border-blue-500 text-blue-400 px-7 py-3 rounded-md hover:bg-blue-600 hover:text-white transition">
            VIEW ALL PRODUCTS
            <ArrowRight size={18}/>
          </button>

        </div>

        <div className="relative">

          <button className="custom-prev absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronLeft className="text-white"/>
          </button>

          <button className="custom-next absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronRight className="text-white"/>
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={22}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
              },
              640: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
          >

            {products.map((item, index) => (

              <SwiperSlide key={index}>

                <div className="group rounded-lg border border-[#23384D] bg-[#0A1727] p-5 h-[430px] hover:border-blue-500 transition duration-300">

                  <div className="relative flex justify-center items-center h-[200px]">

                    <div className="absolute w-36 h-36 bg-blue-500/10 blur-3xl rounded-full"/>

<div className="relative flex justify-center items-center h-[210px] perspective">

  {/* Glow */}
  <div className="absolute w-44 h-44 rounded-full bg-blue-500/20 blur-[70px] animate-pulse" />

  {/* Ring */}
  <div className="absolute w-50 h-50 rounded-full border border-blue-400/20" />

  <Image
    src={item.image}
    alt={item.title}
    width={490}
    height={400}
    className="bearing-3d relative z-10 object-cover"
  />

</div>

                  </div>

                  <h3 className="text-white text-[22px] font-semibold  leading-tight mt-6">

                    {item.title}

                  </h3>

                  <p className="text-gray-200 mt-4 text-[15px] leading-7">

                    {item.desc}

                  </p>

               

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}