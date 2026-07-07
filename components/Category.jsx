"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Bicycle Bearings",
    image: "/1.webp",
    desc: "Found in key bike parts like hubs, bottom bracket, headset and more.",
  },
  {
    title: "Ball Bearings",
    image: "/2.webp",
    desc: "Ball bearings are widely used in various applications which require high speed.",
  },
  {
    title: "Ceramic Bearings",
    image: "/3.png",
    desc: "Professional ceramic bearing manufacturers delivering premium quality.",
  },
  {
    title: "Needle Roller Bearings",
    image: "/1.webp",
    desc: "Needle bearings are lightweight and offer high load capacity.",
  },
  {
    title: "Taper Roller Bearings",
    image: "/2.webp",
    desc: "Designed to support combined radial and axial loads.",
  },
  {
    title: "Thrust Bearings",
    image: "/3.png",
    desc: "Suitable for handling axial loads in many industrial applications.",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto ">

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={700}
          spaceBetween={24}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="text-center p-4">

                <div className="flex justify-center items-center h-[140px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={140}
                    className="object-cover hover:animate-spin hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-black leading-7 text-sm">
                  {item.desc}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-5 font-medium text-blue-700 hover:text-blue-900"
                >
                  View More
                  <ArrowRight size={16} />
                </Link>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}