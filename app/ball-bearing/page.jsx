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
              <span className="text-[11px] bg-gradient-to-r from-[#28186C] to-red-600 font-semibold tracking-wide border border-slate-300 rounded px-3 py-1.5 text-white">
                INDUSTRIAL GRADE
              </span>
              <span className="text-[11px] font-semibold tracking-wide border border-slate-300 rounded px-3 py-1.5 bg-gradient-to-r from-[#28186C] to-red-600 text-white">
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

          <h2 className="text-5xl font-bold text-slate-900 mb-5">
          FC10558V
          </h2>

          <p className="text-slate-600 leading-relaxed mb-8 max-w-lg text-[15px]">
            ARB Ball Bearings are engineered using premium-grade chrome steel to
            deliver exceptional mechanical performance, significantly reduced
            friction coefficients, and an extended operational lifecycle in
            extreme environments.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg">
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
            <button className="flex items-center gap-2 bg-gradient-to-r from-[#28186C] to-red-600 hover:scale-105 transition-discrete duration-150 text-white text-sm font-semibold px-6 py-3 rounded-md ">
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

          <div className="sticky top-24 px-10 py-14"></div>
        </div>
      </section>


          <section className="py-11 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
      <div className="text-center mb-10">
  <span className="inline-flex rounded-full bg-[#28186C]/10 px-4 py-1 text-sm font-semibold text-[#28186C]">
    EXPLORE MORE
  </span>

  <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
    Technical Specifications of{" "}
    <span className="bg-gradient-to-r from-[#28186C] to-red-600 bg-clip-text text-transparent">
      Bearings
    </span>
  </h2>

  <p className="mt-4 text-slate-800 max-w-3xl mx-auto">
    Explore similar bearing models from the same series with comparable dimensions and performance.
  </p>
</div>

        <div className="items-center">
          
          {/* LEFT GALLERY */}
       <div className="">

  <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">

    <div className="bg-gradient-to-r from-[#28186C] to-red-600 px-8 py-6">

      <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium text-white">
        Technical Specifications
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        FC10558V*
      </h2>

      <p className="mt-2 text-white/80">
        Complete dimensional and performance specifications of the bearing.
      </p>

    </div>

    <div className="overflow-x-auto">

      <table className="min-w-full text-sm">

        <thead>

          <tr className="bg-[#F4F7FF]">

            <th
              colSpan={6}
              className="border-b border-r px-5 py-4 text-center font-semibold text-[#28186C]"
            >
              Boundary Dimensions
            </th>

            <th
              colSpan={2}
              className="border-b border-r px-5 py-4 text-center font-semibold text-[#28186C]"
            >
              Basic Load Rating
            </th>

            <th
              colSpan={2}
              className="border-b border-r px-5 py-4 text-center font-semibold text-[#28186C]"
            >
              Limiting Speed
            </th>

            <th
              rowSpan={2}
              className="border-b border-r px-5 py-4 text-center font-semibold text-[#28186C]"
            >
              Mass
            </th>

            <th
              rowSpan={2}
              className="border-b px-5 py-4 text-center font-semibold text-[#28186C]"
            >
              Bearing No.
            </th>

          </tr>

          <tr className="bg-slate-50 text-slate-600">

            {[
              "d",
              "D",
              "T",
              "B",
              "C",
              "r/R",
              "Dynamic",
              "Static",
              "Grease",
              "Oil",
            ].map((item) => (
              <th
                key={item}
                className="border-b px-5 py-3 font-semibold whitespace-nowrap"
              >
                {item}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          <tr className="transition hover:bg-blue-50">

            <td className="border-b px-5 py-4 text-center">25</td>
            <td className="border-b px-5 py-4 text-center">67</td>
            <td className="border-b px-5 py-4 text-center">40.5</td>
            <td className="border-b px-5 py-4 text-center">17</td>
            <td className="border-b px-5 py-4 text-center">39.25</td>
            <td className="border-b px-5 py-4 text-center">1.5 / 1.1</td>

            <td className="border-b px-5 py-4 text-center font-semibold">
              72,000
            </td>

            <td className="border-b px-5 py-4 text-center font-semibold">
              89,000
            </td>

            <td className="border-b px-5 py-4 text-center">
              4,950
            </td>

            <td className="border-b px-5 py-4 text-center">
              6,600
            </td>

            <td className="border-b px-5 py-4 text-center font-semibold">
              0.686
            </td>

            <td className="border-b px-5 py-4 text-center">

              <span className="rounded-full bg-[#28186C]/10 px-4 py-1.5 font-semibold text-[#28186C]">
                FC10558V*
              </span>

            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <div className="grid grid-cols-4 border-t">

      <div className="p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Bore
        </p>
        <p className="mt-1 text-xl font-bold text-[#28186C]">
          25 mm
        </p>
      </div>

      <div className="border-l p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Outside
        </p>
        <p className="mt-1 text-xl font-bold text-[#28186C]">
          67 mm
        </p>
      </div>

      <div className="border-l p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Width
        </p>
        <p className="mt-1 text-xl font-bold text-[#28186C]">
          40.5 mm
        </p>
      </div>

      <div className="border-l p-5 text-center">
        <p className="text-xs uppercase tracking-wider text-slate-500">
          Weight
        </p>
        <p className="mt-1 text-xl font-bold text-[#28186C]">
          0.686 kg
        </p>
      </div>

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
      <div className="text-[11px] font-bold tracking-wide text-slate-900 mb-1">
        {title}
      </div>
      <div className="text-[11px] text-slate-500 leading-relaxed">{desc}</div>
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
