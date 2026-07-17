"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  ShoppingCart,
  ChevronRight,
  Shield,
  Grid3x3,
  ArrowLeftRight,
  Clock,
  ArrowRight,
  MessageSquare,
  Download,
  Share2,
  AtSign,
  MapPin,
  Mail,
  Factory,
  Bike,
  Car,
  Boxes,
} from "lucide-react";
import {
  User,
  
  
  Package,
  
  
} from "lucide-react";

export default function ARBBearingsPage() {

  const gallery = [
  {
    title: "Ball Bearings",
    description:
      "High-precision ball bearings engineered for smooth rotation, reduced friction, and long-lasting performance across industrial applications.",
    image: "/bearing333.png",
  },
  {
    title: "Roller Bearings",
    description:
      "Heavy-duty roller bearings designed to handle high radial loads while delivering exceptional durability and operational efficiency.",
    image: "/test.webp",
  },
  {
    title: "Industrial Bearing Solutions",
    description:
      "A comprehensive range of premium bearings for automotive, manufacturing, mining, and heavy machinery with reliable performance.",
    image: "/ab2.png",
  },
];
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white font-sans text-slate-900">
      {/* Header */}

      {/* Top section: image + product info */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: product image */}
        {/* Left: product image */}
        <div className="border-r border-slate-100">
          <div className="sticky top-24 px-10 py-14">
            <div className="w-full mx-auto">            <img
              src="/singleP.png"
              alt="Ball Bearings"
              className="w-full  lg:mx-0 object-cover"
            />
            </div>


            <div className="flex gap-3 mt-8">
              <span className="text-[11px] bg-[#28186C] font-semibold tracking-wide border border-slate-300 rounded px-3 py-1.5 text-white">
                INDUSTRIAL GRADE
              </span>
              <span className="text-[11px] font-semibold tracking-wide border border-slate-300 rounded px-3 py-1.5 bg-[#28186C] text-white">
                HIGH PRECISION
              </span>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-4">
              <p className="text-[11px] font-semibold tracking-widest text-slate-500 mb-3">
                SERIAL RANGE
              </p>

              <div className="flex items-center gap-4 text-sm font-semibold">
                <span>SERIES 6200</span>
                <span className="text-slate-300">•</span>
                <span>HIGH SPEED</span>
                <span className="text-slate-300">•</span>
                <span>LOW NOISE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: info panel */}
        <div className="bg-slate-50 px-10 py-14">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <span>Home</span>
            <ChevronRight size={12} />
            <span>Bearings</span>
            <ChevronRight size={12} />
            <span className="text-slate-900 font-semibold">Ball Bearings</span>
          </div>

          <h1 className="text-5xl font-bold text-slate-900 mb-5">
            Ball Bearings
          </h1>

          <p className="text-slate-600 leading-relaxed mb-8 max-w-lg text-[15px]">
            ARB Ball Bearings are engineered using premium-grade chrome steel to
            deliver exceptional mechanical performance, significantly reduced
            friction coefficients, and an extended operational lifecycle in
            extreme environments.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg ">
            <FeatureCard
              icon={<Shield size={18} className="text-red-600" />}
              title="CONTAMINATION PROTECTION"
              desc="Enhanced sealing technology for harsh conditions."
            />
            <FeatureCard
              icon={<Grid3x3 size={18} className="text-red-600" />}
              title="OPTIMIZED LUBRICATION"
              desc="Reduced maintenance intervals and grease retention."
            />
            <FeatureCard
              icon={<ArrowLeftRight size={18} className="text-red-600" />}
              title="MISALIGNMENT CAPABILITY"
              desc="Structural resilience against shaft deviations."
            />
            <FeatureCard
              icon={<Clock size={18} className="text-red-600" />}
              title="EXTENDED SERVICE LIFE"
              desc="Proprietary heat treatment for superior durability."
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <button className="flex items-center gap-2 bg-[#28186C]  hover:scale-105 transition-discrete duration-150 text-white text-sm font-semibold px-6 py-3 rounded-md ">
              ENQUIRE NOW <ArrowRight size={15} />
            </button>
            {/* <button className="flex items-center gap-2 border border-slate-300 text-sm font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors">
              <MessageSquare size={15} /> WHATSAPP
            </button> */}

            <button className="flex items-center gap-2 border border-slate-300 text-sm font-semibold px-6 py-3 rounded-md hover:bg-white transition-colors">
              <Download size={15} /> BROCHURE
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-8 mt-14 border-b border-slate-200 text-sm font-semibold">
            <TabButton
              label="PRODUCT OVERVIEW"
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            />
            <TabButton
              label="TECHNICAL DATA"
              active={activeTab === "technical"}
              onClick={() => setActiveTab("technical")}
            />
            <TabButton
              label="DOWNLOADS"
              active={activeTab === "downloads"}
              onClick={() => setActiveTab("downloads")}
            />
          </div>

          {activeTab === "overview" && (
            <section className="grid grid-cols-1 min-w-[560px] ">
              <div className="hidden lg:block" />
              <div className="bg-slate-50 px-10 py-14">
                <h2 className="text-2xl font-bold text-slate-900 mb-5">
                  High-Load Performance Engineering
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 max-w-lg text-[15px]">
                  QCB® Sealed spherical roller bearings are designed to deliver
                  reliable performance in demanding operating conditions.
                  Combining high load capacity with effective contamination
                  protection, they are well suited to applications such as
                  conveyors, mining equipment, quarry machinery, and steel
                  processing plants where dirt, dust, and moisture are common.
                </p>

                <ul className="space-y-3 mb-10 max-w-lg">
                  {[
                    "Sheet steel reinforced HNBR seal standard",
                    "Brass cage design as standard (CA style)",
                    "Annular groove and 3 lubrication holes (W33)",
                    "Lithium EP2 general purpose grease (VT143)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[15px] text-slate-700"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-red-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <hr className="border-slate-200 mb-10 max-w-lg" />

                <h3 className="text-xl font-bold text-slate-900 tracking-wide mb-6">
                  INDUSTRIAL <span className="bg-gradient-to-r from-[#28186C] to-red-600 bg-clip-text text-transparent">APPLICATIONS</span>
                </h3>

                <div className="grid grid-cols-4 gap-4 max-w-lg">
                  <AppCard icon={<Factory size={22} />} label="MANUFACTURING" />
                  <AppCard icon={<Bike size={22} />} label="AGRI-MACHINERY" />
                  <AppCard icon={<Car size={22} />} label="AUTOMOTIVE" />
                  <AppCard icon={<Boxes size={22} />} label="LOGISTICS" />
                </div>
              </div>
            </section>
          )}

          {activeTab === "technical" && (
            <div className="py-12 min-w-[560px]">
              <h2 className="text-4xl font-bold text-[#003B7A] mb-2">
                Technical Dimensions
              </h2>

              <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full border-collapse">
                  <thead className="bg-gradient-to-r from-[#28186C] to-red-600 text-white">
                    <tr>
                      <th className="p-4 text-left">Parameter</th>
                      <th className="p-4 text-left">Value</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">Bore Diameter</td>
                      <td className="p-4">50 mm</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4">Outer Diameter</td>
                      <td className="p-4">90 mm</td>
                    </tr>

                    <tr className="border-b">
                      <td className="p-4">Width</td>
                      <td className="p-4">23 mm</td>
                    </tr>

                    <tr>
                      <td className="p-4">Weight</td>
                      <td className="p-4">0.75 kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="py-16 min-w-[560px]">
              <h2 className="text-4xl font-bold text-[#003B7A] mb-8">
                Downloads
              </h2>

              <div className="space-y-4">
                <a
                  href="#"
                  className="block bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
                >
                  📄 Product Catalogue.pdf
                </a>

                <a
                  href="#"
                  className="block bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
                >
                  📄 Technical Datasheet.pd f
                </a>
              </div>
            </div>
          )}

          <div className="sticky top-24 px-10 "></div>
        </div>
      </section>


          <section className="py-11 bg-gradient-to-b from-white to-slate-100">
      <div className="w-full mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
       

      <h2 className="text-5xl  text-[#6A1F2B]">
        Product Specifications
      </h2>

          {/* <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Explore some of our latest projects and submit your enquiry. Our
            experts are ready to help you choose the perfect solution.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-5 gap-5 items-center">
          
          {/* LEFT GALLERY */}
          <div className="lg:col-span-3">
        <section className="py-20 ">
  <div className="w-full mx-auto px-5">

    <div className="rounded-[32px] bg-white shadow-xl border border-[#ece8e2] p-8 lg:p-12 relative overflow-hidden">

      {/* Watermark */}
      <div className="absolute right-10 top-8 opacity-[0.06]">
        <img
          src="/logo-icon.png"
          alt=""
          className="w-20"
        />
      </div>

      {/* Heading */}


      <p className="mt-3 text-[#A18F7B] text-sm uppercase tracking-[3px]">
        Technical Details
      </p>

      <div className="mt-6">

        {[
          ["Bearing Number", "FC10558V*"],
          ["Bearing Type", "Taper Roller Bearing"],
          ["Internal Diameter (Bore)", "25 mm"],
          [" Outer Diameter ( OD)", "67 mm"],
          ["B- Bearing Height", "40.5 mm"],
          [" r- Radius", "17 mm"],
          ["Basic Load Rating(dynamic)","1100"],
                ["Basic Load Rating(static)","400"],
                ["Limiting Speed(Grease)","43000"],
       ["Limiting Speed(Oil)","50000"],
         ["Mass","0.006"],

        
        
        ].map(([label, value]) => (

          <div
            key={label}
            className="grid grid-cols-2 items-center border-b border-dotted border-[#b9aba0] py-5"
          >

            <h4 className="text-lg text-slate-800 font-medium">
              {label}
            </h4>

            <p className="text-right text-lg font-semibold text-[#6A1F2B]">
              {value}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>
</section>
          </div>

          {/* RIGHT ENQUIRY */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-[30px] bg-white shadow-2xl border border-slate-200 p-8">
              {/* Background Decoration */}
              <div className="absolute -top-24 -right-24 h-52 w-52 rounded-full bg-[#28186C]/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-red-500/10 blur-3xl" />

              <div className="relative">
              

                <h2 className="mt-5 text-3xl font-bold text-slate-900">
                  Submit Your Enquiry
                </h2>

                <p className="mt-2 text-slate-500">
                  Fill out the form below and our sales team will contact you
                  shortly.
                </p>

                <form className="mt-6 space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-[#28186C] focus:ring-2 focus:ring-[#28186C]/20"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-[#28186C] focus:ring-2 focus:ring-[#28186C]/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="h-14 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-[#28186C] focus:ring-2 focus:ring-[#28186C]/20"
                    />
                  </div>

                  {/* Product */}
                  <div className="relative">
                    <Package className="absolute left-4 top-4 text-slate-400 w-5 h-5" />

                    <select className="h-14 w-full appearance-none rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-[#28186C] focus:ring-2 focus:ring-[#28186C]/20">
                      <option>Select Product</option>
                      <option>Ball Bearings</option>
                     
                    </select>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-5 text-slate-400 w-5 h-5" />

                    <textarea
                      rows={3}
                      placeholder="Write your requirement..."
                      className="w-full rounded-xl border border-slate-200 pl-12 pr-4 pt-4 outline-none resize-none focus:border-[#28186C] focus:ring-2 focus:ring-[#28186C]/20"
                    />
                  </div>

                  <button className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#28186C] font-semibold text-white transition hover:scale-[1.02]">
                    Submit Enquiry
                    <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                  </button>
                </form>

                {/* Stats */}
                {/* <div className="mt-10 grid grid-cols-3 gap-5 border-t pt-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#28186C]">24/7</h3>
                    <p className="text-sm text-slate-500">Support</p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#28186C]">
                      100%
                    </h3>
                    <p className="text-sm text-slate-500">Response</p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#28186C]">
                      10K+
                    </h3>
                    <p className="text-sm text-slate-500">Customers</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>

    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white border border-slate-200 rounded-md p-4">
      <div className="mb-2">{icon}</div>
      <div className="text-[13px] font-bold tracking-wide text-slate-900 mb-1">
        {title}
      </div>
      <div className="text-[14px] text-slate-800 leading-relaxed">{desc}</div>
    </div>
  );
}

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 -mb-px border-b-2 transition-colors ${
        active
          ? "border-red-600 text-slate-900"
          : "border-transparent text-slate-400 hover:text-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

function AppCard({ icon, label }) {
  return (
    <div className="bg-white border border-slate-200 rounded-md flex flex-col items-center justify-center gap-3 py-6">
      <div className="w-11 h-11 bg-blue-50 text-slate-800 rounded-md flex items-center justify-center">
        {icon}
      </div>
      <span className="text-[10px] font-semibold tracking-wide text-slate-700 text-center px-1">
        {label}
      </span>
    </div>
  );
}
