"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { categories } from "@/Data";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-[999] w-full">


      <div className="backdrop-blur-2xl bg-[#081B2E]/90 border-b border-white/10 shadow-[0_15px_40px_rgba(0,0,0,.18)]">

        <div className="max-w-[1450px] mx-auto px-5 lg:px-10">

          <div className="h-18 flex items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              className="relative flex items-center shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={210}
                height={80}
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center gap-10">

              <Link
                href="/"
                className="relative text-[15px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Home
              </Link>

              <Link
                href="/about-us"
                className="relative text-[15px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                About Us
              </Link>

              <Link
                href="/blogs"
                className="relative text-[15px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >
                Blogs
              </Link>

              <Link
                href="/contact-us"
                className="relative text-[15px] font-semibold text-white transition hover:text-[#ff6a2b]"
              >


                Contact
              </Link>

            </div>

            {/* Right Side */}

            <div className="hidden lg:flex items-center gap-4">

              {/* Call */}

              <a
                href="tel:+919999402424"
                className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/15
                bg-white/5
                backdrop-blur-xl
                px-5
                py-3
                transition-all
                duration-300
                hover:bg-white/10
                "
              >
                <div className="w-10 h-10 rounded-full bg-[#C52C1D] flex items-center justify-center text-white">

                  <PhoneCall size={18} />

                </div>

                <div>

                  <p className="text-[11px] text-gray-300">
                    Call Anytime
                  </p>

                  <p className="text-white font-semibold text-sm">
                    +91 99994 02424
                  </p>

                </div>

              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/9999402424"
                target="_blank"
                className="
                w-12
                h-12
                rounded-full
                bg-gradient-to-br
                from-green-500
                to-green-600
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-110
                hover:rotate-6
                "
              >
                <FaWhatsapp size={35} />
              </a>

              {/* CTA */}

              <Link
                href="/contact-us"
                className="
                group
                overflow-hidden
                relative
                rounded-full
                bg-white
               
                px-7
                border
                border-blue-700
                py-4
                text-red-600
                font-semibold
                shadow-[0_15px_40px_rgba(255,106,43,.45)]
                transition-all
                duration-500
                hover:scale-105
                "
              >

                <span className="relative z-10 flex items-center gap-2">

                  Get Quote

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </span>

                <span className="
                absolute
                inset-0
                bg-white/20
                translate-x-[-120%]
                group-hover:translate-x-[120%]
                transition-transform
                duration-700
                skew-x-12
                " />

              </Link>

            </div>

            {/* Mobile */}

            <div className="flex lg:hidden items-center gap-3">

              <a
                href="https://wa.me/9999402424"
                className="
                w-10
                h-10
                rounded-full
                bg-green-500
                flex
                items-center
                justify-center
                text-white
                "
              >
                <FaWhatsapp size={18} />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="
                w-11
                h-11
                rounded-xl
                border
                border-white/10
                bg-white/5
                flex
                items-center
                justify-center
                text-white
                "
              >
                {mobileOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>

            </div>

          </div>

        </div>

      </div>



            {/*  PREMIUM CATEGORY BAR  */}

      <div
        className="hidden lg:block bg-white border-b border-gray-200 relative shadow-sm"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1450px] mx-auto px-8">

          <div className="h-14 flex items-center justify-center gap-10">

            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.id}`}
                onMouseEnter={() => setActiveMenu(cat.id)}
                onClick={closeMenu}
                className="group relative flex items-center gap-1 text-[16px] font-semibold text-gray-800 hover:text-[#C52C1D] transition-all"
              >
                <span>{cat.name}</span>

                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    activeMenu === cat.id ? "rotate-180" : ""
                  }`}
                />

                <span className="absolute left-0 -bottom-[20px] h-[3px] w-0 rounded-full bg-[#C52C1D] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

          </div>

        </div>

        {/*  MEGA MENU  */}

        {activeMenu && (
          <div className="absolute left-0 top-full w-full bg-white shadow-[0_30px_80px_rgba(0,0,0,.12)] border-t border-orange-100 z-50">

            <div className="max-w-[1450px] mx-auto px-10 py-10">

              {/* Header */}

              <div className="flex items-center justify-between mb-5">

                <div>

                  <p className="uppercase tracking-[0.35em] text-xs text-[#C72818] font-bold">
                    Product Collection
                  </p>

                  <h2 className="text-3xl font-black text-[#081B2E] mt-2">
                    {categories.find((c) => c.id === activeMenu)?.name}
                  </h2>

                </div>

                <Link
                  href={`/categories/${activeMenu}`}
                  className="rounded-full border border-red-500 px-6 py-3 text-sm font-semibold text-[#28186D] hover:bg-[#28186D] hover:text-white transition-all"
                >
                  View All Categories →
                </Link>

              </div>

              {/* Products */}

              <div className="grid grid-cols-5 gap-8">

                {categories
                  .find((c) => c.id === activeMenu)
                  ?.products?.map((prod) => (
                    <Link
                      key={prod.id}
                      href="/ball-bearing"
                      onClick={closeMenu}
                      className="group"
                    >
                      <div className="overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500">

                        <div className="relative h-43 overflow-hidden bg-gray-100">

                          <Image
                            src={prod.image?.[0]?.src}
                            alt={prod.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                        </div>

                        <div className="p-3">

                          <h3 className="font-bold text-gray-900 text-[17px] leading-6 group-hover:text-[#28186D] transition">
                            {prod.name}
                          </h3>


                          <div className="mt-3 flex items-center text-[#C72818] font-semibold text-sm">

                            Explore Product

                            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
                              →
                            </span>

                          </div>

                        </div>

                      </div>
                    </Link>
                  ))}

              </div>

             

           
            </div>

          </div>
        )}

</div>


      {/* ===================== MOBILE MENU ===================== */}

      {mobileOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-white z-[999] overflow-y-auto animate-in slide-in-from-top duration-300">

          <div className="px-6 py-8">

            {/* Main Navigation */}

            <div className="space-y-2">

              {[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "About Us",
                  href: "/about-us",
                },
                {
                  name: "Blogs",
                  href: "/blogs",
                },
                {
                  name: "Contact Us",
                  href: "/contact-us",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-4
                  font-semibold
                  text-[#081B2E]
                  shadow-sm
                  transition-all
                  hover:border-[#ff6a2b]
                  hover:text-[#ff6a2b]
                  hover:shadow-md
                  "
                >
                  {item.name}

                  <ArrowRight
                    size={18}
                    className="text-gray-400"
                  />
                </Link>
              ))}

            </div>

            {/* Categories */}

            <div className="mt-8">

              <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-5">

                Product Categories

              </h4>

              <div className="space-y-3">

                {categories.map((cat) => (
                  <details
                    key={cat.id}
                    className="group rounded-2xl border border-gray-200 overflow-hidden bg-white"
                  >

                    <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 font-semibold text-[#081B2E]">

                      {cat.name}

                      <ChevronDown
                        size={18}
                        className="transition-transform group-open:rotate-180"
                      />

                    </summary>

                    <div className="border-t bg-gray-50">

                      {cat.products?.map((prod) => (
                        <Link
                          key={prod.id}
                          href={`/products/${prod.id}`}
                          onClick={closeMenu}
                          className="
                          block
                          px-6
                          py-3
                          text-sm
                          text-gray-600
                          hover:bg-orange-50
                          hover:text-[#ff6a2b]
                          transition
                          "
                        >
                          {prod.name}
                        </Link>
                      ))}

                    </div>

                  </details>
                ))}

              </div>

            </div>

            {/* CTA Card */}

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-[#081B2E] to-[#10314F] p-6 text-center">

              <h3 className="text-white text-2xl font-bold">

                Need Industrial Solutions?

              </h3>

              <p className="mt-3 text-white/70 text-sm leading-6">

                Speak with our experts and receive the best quotation for your
                industrial requirements.

              </p>

              <Link
                href="/contact-us"
                onClick={closeMenu}
                className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#C52C1D]
                px-8
                py-4
                font-semibold
                text-white
                shadow-lg
                transition-all
                hover:scale-105
                "
              >

                Get Free Quote

                <ArrowRight size={18} />

              </Link>

            </div>

            {/* Contact Buttons */}

            <div className="mt-8 space-y-4">

              <a
                href="https://wa.me/9999402424"
                target="_blank"
                className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                bg-green-500
                py-4
                text-white
                font-semibold
                shadow-lg
                transition
                hover:bg-green-600
                "
              >

                <FaWhatsapp size={22} />

                WhatsApp Us

              </a>

              <a
                href="tel:+919999402424"
                className="
                flex
                items-center
                justify-center
                gap-3
                rounded-2xl
                border-2
                border-[#081B2E]
                py-4
                font-semibold
                text-[#081B2E]
                transition
                hover:bg-[#081B2E]
                hover:text-white
                "
              >

                <PhoneCall size={20} />

                Call Now

              </a>

            </div>

            {/* Footer */}

            <div className="mt-10 border-t pt-6 text-center">

              <p className="text-xs text-gray-500 leading-6">

                © {new Date().getFullYear()} Your Company.
                <br />
                Premium Industrial Solutions • Trusted Across India

              </p>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}

