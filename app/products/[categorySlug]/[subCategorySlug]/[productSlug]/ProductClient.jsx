"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { labelFor } from "../../../../../data/labels";
import {
  ChevronRight,
  Shield,
  Grid3x3,
  ArrowLeftRight,
  Clock,
  ArrowRight,
  Download,
  Factory,
  Bike,
  Car,
  Boxes,
} from "lucide-react";

export default function ProductClient({ result }) {
  const { entry, product } = result;
  const { category, subCategory } = entry;

  const [activeTab, setActiveTab] = useState("overview");

  const specifications = {
    ...(product.dimensions || {}),
    ...(product.loadRating || {}),
    ...(product.mass || {}),
  };

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}

      <section className="max-w-7xl mx-auto grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="border-r border-slate-200">

          <div className="sticky top-24 px-10 py-14">

            <Image
              src={product.image}
              alt={product.model}
              width={700}
              height={700}
              className="w-full object-contain"
            />

            <div className="flex gap-3 mt-8">

              <span className="bg-[#28186C] text-white text-xs px-4 py-2 rounded">
                INDUSTRIAL GRADE
              </span>

              <span className="bg-[#28186C] text-white text-xs px-4 py-2 rounded">
                HIGH PRECISION
              </span>

            </div>

            <div className="mt-10 border-t pt-5">

              <p className="text-xs tracking-widest text-gray-500">
                MODEL
              </p>

              <h3 className="font-bold mt-2 text-xl">
                {product.model}
              </h3>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="bg-slate-50 px-10 py-14">

          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">

            <Link href="/">Home</Link>

            <ChevronRight size={12} />

            <Link href={`/products/${category.slug}`}>
              {category.name}
            </Link>

            <ChevronRight size={12} />

            <Link
              href={`/products/${category.slug}/${subCategory.slug}`}
            >
              {subCategory.name}
            </Link>

            <ChevronRight size={12} />

            <span className="font-semibold text-black">
              {product.model}
            </span>

          </div>

          <h1 className="text-5xl font-bold mb-6">
            {product.model}
          </h1>

          <p className="text-slate-600 leading-8 max-w-xl">
            {subCategory.heroDescription}
          </p>

          {/* Feature Cards */}

          <div className="grid grid-cols-2 gap-4 mt-10">

            {subCategory.features?.map((feature, index) => (

              <div
                key={index}
                className="bg-white border rounded-lg p-5"
              >

                <div className="mb-3">

                  {index === 0 && (
                    <Shield className="text-red-600" />
                  )}

                  {index === 1 && (
                    <Grid3x3 className="text-red-600" />
                  )}

                  {index === 2 && (
                    <ArrowLeftRight className="text-red-600" />
                  )}

                  {index > 2 && (
                    <Clock className="text-red-600" />
                  )}

                </div>

                <h3 className="font-bold text-sm mb-2">
                  FEATURE {index + 1}
                </h3>

                <p className="text-sm text-slate-600">
                  {feature}
                </p>

              </div>

            ))}

          </div>

          {/* Buttons */}

          <div className="flex gap-4 mt-10">

            <button className="bg-[#28186C] hover:bg-[#1d1250] transition text-white rounded-lg px-7 py-3 flex items-center gap-2">

              ENQUIRE NOW

              <ArrowRight size={16} />

            </button>

            {product.pdf && (

              <a
                href={product.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-lg px-7 py-3 flex items-center gap-2 hover:bg-white transition"
              >

                <Download size={16} />

                BROCHURE

              </a>

            )}

          </div>

          {/* Tabs */}

          <div className="flex gap-10 border-b mt-16">

            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-4 border-b-2 transition ${
                activeTab === "overview"
                  ? "border-red-600"
                  : "border-transparent"
              }`}
            >
              PRODUCT OVERVIEW
            </button>

            <button
              onClick={() => setActiveTab("downloads")}
              className={`pb-4 border-b-2 transition ${
                activeTab === "downloads"
                  ? "border-red-600"
                  : "border-transparent"
              }`}
            >
              DOWNLOADS
            </button>

          </div>
          {/* ================= OVERVIEW ================= */}

{activeTab === "overview" && (
  <div className="py-12">

    <h2 className="text-3xl font-bold text-slate-900 mb-5">
      About {subCategory.name}
    </h2>

    <p className="text-slate-600 leading-8">
      {subCategory.heroDescription}
    </p>

    {subCategory.features?.length > 0 && (
      <>
        <hr className="my-10" />

        <h3 className="text-2xl font-bold mb-6">
          Product Features
        </h3>

        <ul className="space-y-4">

          {subCategory.features.map((feature, index) => (

            <li
              key={index}
              className="flex gap-3"
            >

              <span className="w-2 h-2 rounded-full bg-red-600 mt-3" />

              <span className="text-slate-700">
                {feature}
              </span>

            </li>

          ))}

        </ul>

      </>
    )}

    {subCategory.applications?.length > 0 && (
      <>
        <hr className="my-12" />

        <h3 className="text-3xl font-bold mb-8">
          Industrial Applications
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {subCategory.applications.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition p-8 flex flex-col items-center"
            >

              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4">

                {index === 0 && <Factory />}

                {index === 1 && <Bike />}

                {index === 2 && <Car />}

                {index > 2 && <Boxes />}

              </div>

              <p className="font-semibold text-center">
                {item}
              </p>

            </div>

          ))}

        </div>

      </>
    )}

  </div>
)}

{/* ================= DOWNLOADS ================= */}

{activeTab === "downloads" && (

  <div className="py-14">

    <h2 className="text-3xl font-bold mb-8">
      Downloads
    </h2>

    {product.pdf ? (

      <a
        href={product.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between border rounded-xl p-6 hover:shadow-lg transition bg-white"
      >

        <div>

          <h4 className="font-semibold">
            Product Datasheet
          </h4>

          <p className="text-sm text-gray-500">
            PDF Document
          </p>

        </div>

        <Download size={24} />

      </a>

    ) : (

      <p className="text-gray-500">
        No brochure available.
      </p>

    )}

  </div>

)}

        </div>

      </section>

      {/* ======================================================
          SPECIFICATIONS + ENQUIRY FORM
          Paste the next part here
      ====================================================== */}

      <section className="py-20 bg-gradient-to-b from-white to-slate-100">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-[#6A1F2B] mb-16">
      Product Specifications
    </h2>

    <div className="grid lg:grid-cols-5 gap-10">

      {/* Specifications */}

      <div className="lg:col-span-3">

        <div className="bg-white rounded-[30px] shadow-xl border border-slate-200 p-10">

          <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-6">
            Technical Details
          </p>

          {Object.entries(specifications).map(([key, value]) => (

            <div
              key={key}
              className="grid grid-cols-2 py-5 border-b border-dashed"
            >

              <h4 className="font-medium text-slate-700">
                {labelFor(key)}
              </h4>

              <p className="text-right font-bold text-[#6A1F2B]">
                {value}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Enquiry */}

      <div className="lg:col-span-2">

        <div className="bg-white rounded-[30px] shadow-2xl border p-8">

          <h2 className="text-3xl font-bold mb-2">
            Submit Your Enquiry
          </h2>

          <p className="text-gray-500 mb-8">
            Our team will contact you shortly.
          </p>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full h-14 border rounded-xl px-4 outline-none focus:border-[#28186C]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full h-14 border rounded-xl px-4 outline-none focus:border-[#28186C]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-14 border rounded-xl px-4 outline-none focus:border-[#28186C]"
            />

            <input
              type="text"
              value={product.model}
              readOnly
              className="w-full h-14 border rounded-xl px-4 bg-gray-50"
            />

            <textarea
              rows={4}
              placeholder="Your Requirement"
              className="w-full border rounded-xl p-4 outline-none focus:border-[#28186C]"
            />

            <button
              className="w-full h-14 rounded-xl bg-[#28186C] text-white font-semibold hover:bg-[#1f1455] transition"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>

</section>

</div>
  );
}