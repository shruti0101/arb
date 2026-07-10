"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Eye, X } from "lucide-react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Deep Groove Ball Bearings",
    desc: "High speed, low friction, versatile applications",
    image: "/1.webp",
    applications: [
      "Electric Motors",
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
    ],
  },

  {
    title: "Spherical Roller Bearings",
    desc: "Handle heavy loads and misalignment",
    image: "/2.webp",
    applications: [
      "Mining Equipment",
      "Steel Plants",
      "Paper Mills",
      "Conveyors",
      "Cement Industry",
    ],
  },

  // add for remaining products...

  {
    title: "Spherical Roller Bearings",
    desc: "Handle heavy loads and misalignment",
    image: "/2.webp",
    applications: [
      "Mining Equipment",
      "Steel Plants",
      "Paper Mills",
      "Conveyors",
      "Cement Industry",
    ],
  },

  {
    title: "Deep Groove Ball Bearings",
    desc: "High speed, low friction, versatile applications",
    image: "/1.webp",
    applications: [
      "Electric Motors",
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
    ],
  },

  {
    title: "Deep Groove Ball Bearings",
    desc: "High speed, low friction, versatile applications",
    image: "/1.webp",
    applications: [
      "Electric Motors",
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
    ],
  },

  {
    title: "Deep Groove Ball Bearings",
    desc: "High speed, low friction, versatile applications",
    image: "/1.webp",
    applications: [
      "Electric Motors",
      "Automobiles",
      "Agricultural Machinery",
      "Industrial Pumps",
      "Fans & Blowers",
      "Gearboxes",
    ],
  },
];

export default function ProductSlider() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-blue-50 py-15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        {/* Heading */}

        <div className="flex justify-between items-center mb-14">
          <div>
            <p className="text-red-600 uppercase text-sm tracking-[3px] font-semibold">
              Our Products
            </p>

            <h2 className="text-[#27176D] text-5xl font-bold mt-2">
              Precision in Every Rotation
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-3 border border-red-500 text-red-400 px-7 py-3 rounded-md hover:bg-red-600 hover:text-white transition">
            VIEW ALL PRODUCTS
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="relative">
          <button className="custom-prev absolute -left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronLeft className="text-white" />
          </button>

          <button className="custom-next absolute -right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-[#091A2D] flex items-center justify-center hover:bg-blue-600 transition">
            <ChevronRight className="text-white" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
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
                <div className="group rounded-lg border border-[#23384D]  p-5 h-[400px] hover:border-blue-500 transition duration-300">
                  <div className="relative flex justify-center items-center h-[200px]">
                    <div className="absolute w-36 h-36 bg-blue-500/10 blur-3xl rounded-full" />

                    <div className="relative flex justify-center items-center h-[210px] perspective">
                      {/* Glow */}
                      <div className="absolute w-44 h-44 rounded-full  blur-[70px] animate-pulse" />

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

                  <h3 className="text-black text-[22px] font-semibold  leading-tight mt-6">
                    {item.title}
                  </h3>

                  <p className="text-black mt-4 text-[15px] leading-6">
                    {item.desc}
                  </p>
                  <div className="mt-8">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full hover:bg-[#091A2D]/90 border border-white/10 flex items-center justify-center bg-red-600 transition"
                    >
                      <Eye className="text-white" size={20} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white overflow-hidden shadow-2xl">
            {/* Close */}

            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-5 top-5 z-20 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}

              <div className="bg-blue-50 flex items-center justify-center p-10">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  width={320}
                  height={320}
                  className="object-cover animate-spin-slow"
                />
              </div>

              {/* Content */}

              <div className="p-5">
                <span className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                  Bearing Details
                </span>

                <h2 className="text-3xl font-bold text-[#091A2D] mt-3">
                  {selectedProduct.title}
                </h2>

                <p className="text-gray-600 mt-5 leading-7">
                  {selectedProduct.desc}
                </p>

                <h3 className="mt-8 text-xl font-semibold text-[#091A2D]">
                  Applications
                </h3>

                <ul className="mt-4 space-y-3">
                  {selectedProduct.applications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
