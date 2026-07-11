"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function TrustedBrands() {
const brands = [
  "/client/1.jpg",
  "/client/2.jpg",
  "/client/3.png",
  "/client/4.webp",
  "/client/5.webp",
  "/client/7.png",
  "/client/8.png",
  "/client/9.png",
    "/client/10.png",
      "/client/11.webp",
        "/client/12.webp",

];

  return (
    <section className="relative py-3 md:py-10 bg-white border-y border-cyan-200 overflow-hidden">
      <div className="w-full px-10 mx-auto ">
        <h3 className="text-center text-[#D9251C] font-bold tracking-[0.25em] text-sm mb-10">
          TRUSTED BY LEADING INDUSTRIES
        </h3>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
       {brands.map((logo, index) => (
  <SwiperSlide key={index}>
    <div
      className="
      h-28
      rounded-2xl
      border
      border-slate-200
      bg-white
      flex
      items-center
      justify-center
      px-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
     <Image
  src={logo}
  alt=""
  width={200}
  height={180}
  className="
    h-25
    w-auto
    object-contain
 
    transition-all
    duration-500
 
  "
/>
    </div>
  </SwiperSlide>
))}
        </Swiper>
      </div>


    </section>
  );
}