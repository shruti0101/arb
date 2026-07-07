"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Mark Compressor", href: "/mark-compressor" },
  { name: "Chicago Pneumatic", href: "/chicago-pneumatic" },
  { name: "Blogs", href: "/our-blogs" },
  { name: "Contact Us", href: "/contact-us" },
];

const services = [
  {
    name: "AMC Service",
    href: "/amc-service",
  },
  {
    name: "Air Audit Services",
    href: "/air-audit-service",
  },
  {
    name: "Engineering Consultancy",
    href: "/engineering-consultancy",
  },
  {
    name: "Wastewater Engineering",
    href: "/wastewater-engineering",
  },
  {
    name: "Turnkey Project",
    href: "/turnkey-project",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[#031321] text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-[550px] w-[550px] rounded-full bg-sky-500/10 blur-[180px]" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

      </div>

  


      {/* Main Footer */}

      <div className="relative -mt-10 pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-14 lg:grid-cols-12">

            {/* Company */}

            <div className="lg:col-span-5">

              <Image
                src="/logofooter-removebg-preview.png"
                width={230}
                height={80}
                alt="Logo"
              />

              <p className="mt-8 max-w-md leading-8 text-slate-300">
                Leading Manufacturer, Trader, Exporter & Importer of
                Air Compressors, Air Dryers, Air Line Filters,
                Drain Valves and Industrial Filtration Solutions.
              </p>

              <div className="mt-10 flex gap-4">

                <a
                  href="tel:+919717159766"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-cyan-500"
                >
                  <Phone size={22} />
                </a>

                <a
                  href="mailto:support@eutair.com"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-cyan-500"
                >
                  <Mail size={22} />
                </a>

                <a
                  href="https://wa.me/919582911766"
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-cyan-500"
                >
                  <FaWhatsapp size={22} />
                </a>

              </div>

            </div>

            {/* Quick Links */}

            <div className="lg:col-span-3">

              <h3 className="mb-8 text-2xl font-bold">
                Quick Links
              </h3>

              <ul className="space-y-5">

                {quickLinks.map((item) => (

                  <li key={item.name}>

                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
                    >

                      <span className="h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-5"></span>

                      {item.name}

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

            {/* Services */}

            <div className="lg:col-span-4">

              <h3 className="mb-8 text-2xl font-bold">
                Our Services
              </h3>

              <ul className="space-y-5">

                {services.map((item) => (

                  <li key={item.name}>

                    <Link
                      href={item.href}
                      className="group flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
                    >

                      <span className="h-2 w-2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-5"></span>

                      {item.name}

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          </div>

                    {/* Contact + Trust Certificate */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Contact Information */}

            <div>

              <h3 className="mb-5 text-2xl font-bold">
                Contact Information
              </h3>

              <div className="grid gap-6">

                {/* Phone */}

                <div className="group rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white/10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white">
                      <Phone size={24} />
                    </div>

                    <div>

                      <h4 className="text-lg font-semibold">
                        Phone
                      </h4>

                      <a
                        href="tel:+919717159766"
                        className="mt-2 block text-slate-300 transition hover:text-cyan-400"
                      >
                        +91 9717159766
                      </a>

                    </div>

                  </div>

                </div>

                {/* WhatsApp */}

                <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white/10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-white">
                      <FaWhatsapp size={24} />
                    </div>

                    <div>

                      <h4 className="text-lg font-semibold">
                        WhatsApp
                      </h4>

                      <a
                        href="https://wa.me/919582911766"
                        className="mt-2 block text-slate-300 transition hover:text-cyan-400"
                      >
                        +91 9582911766
                      </a>

                    </div>

                  </div>

                </div>

                {/* Email */}

                <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-white/10">

                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-white">
                      <Mail size={24} />
                    </div>

                    <div>

                      <h4 className="text-lg font-semibold mb-2">
                        Email Contacts
                      </h4>

                      <a
                        href="mailto:support@eutair.com"
                        className="block text-slate-300 transition hover:text-cyan-400"
                      >
                        support@eutair.com
                      </a>

                      <a
                        href="mailto:sales@eutair.com"
                        className="block mt-2 text-slate-300 transition hover:text-cyan-400"
                      >
                        sales@eutair.com
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* Trust Elite */}

            <div>

              <h3 className="mb-8 text-2xl font-bold">
                Trust Elite Certificate
              </h3>

              <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-white/5 p-8 backdrop-blur-xl">

                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-[120px]" />

                <div className="relative">

                  <div className="flex justify-center">

                    <Image
                      src="/TRUST-ELITE.webp"
                      alt="Trust Elite"
                      width={170}
                      height={170}
                    />

                  </div>

                  <p className="mt-8 text-slate-300 leading-8">

                    We are proud to present the Trust Elite Certificate of
                    Excellence to Eutair, recognizing their commitment to
                    exceptional customer service, outstanding business
                    practices, and a dedication to building trust with their
                    customers.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div> {/* max-w-7xl */}

      </div> {/* relative */}

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">

          <p>
            © 2026 Eutair Equipments LLP. All Rights Reserved.
          </p>

          <p className="text-center md:text-right">
            Website Designed By{" "}
            <a
              href="https://inquirybazaar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              Inquiry Bazaar Pvt. Ltd.
            </a>
          </p>

        </div>
      </div>

    </footer>
  );
}