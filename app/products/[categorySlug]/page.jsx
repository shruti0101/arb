import Link from "next/link";
import { getCategoryTree } from "../../../data";
import { ArrowRight, PhoneCall } from "lucide-react";
import Clients from "@/components/Clients"
export function generateStaticParams() {
  return getCategoryTree().map((category) => ({
    categorySlug: category.slug,
  }));
}

export default async function CategoryPage({ params }) {
  const { categorySlug } = await params;

  const category = getCategoryTree().find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">Category not found.</div>
    );
  }

  return (
<>

<section className="relative w-full h-[420px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/fbc-bearings2.jpg"
        alt="Industrial Machinery"
        className="absolute inset-0 h-full w-full object-cover"
      />

   

      {/* Left Content Box */}
      <div className="absolute left-20 top-1/2 -translate-y-1/2">
        <div className="relative bg-black/45 backdrop-blur-sm px-10 py-12 w-[620px]">
          {/* Red Line */}
          <div className="absolute top-0 right-0 h-full w-1 bg-red-600"></div>

          <h2 className="text-5xl font-bold text-white leading-tight">
      {category.name}
          </h2>

          <p className="mt-5 text-md text-white leading-6 max-w-xl">
            Premier hybrid supplier & manufacturer of mechanical,
            electrical, pneumatic and hydraulic products.
          </p>

          <button className="mt-8 bg-red-600 hover:bg-red-700 transition px-8 py-3 text-white font-semibold rounded-sm">
            Request a Quote
          </button>
        </div>
      </div>
    </section>

    <Clients/>
<div className="bg-gradient-to-b from-slate-50 via-white to-white">
  <div className="max-w-7xl mx-auto px-6 py-14">

    {/* Breadcrumb */}
    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
      <Link href="/" className="hover:text-[#DA2416] transition">
        Home
      </Link>

      <span>/</span>

      <span className="font-medium text-gray-900">
        {category.name}
      </span>
    </nav>

    {/* Heading */}
    <div className="max-w-3xl mb-14">
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#DA2416]">
        Product Collection
      </span>

      <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-900">
        {category.name}
      </h1>

      <p className="mt-5 text-lg text-gray-600 leading-8">
        Browse our premium range of{" "}
        <span className="font-semibold text-gray-900">
          {category.name.toLowerCase()}
        </span>{" "}
        products with detailed specifications and technical information.
      </p>
    </div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {category.subCategories.map((subCategory) => (
        <Link
          key={subCategory.slug}
          href={`/products/${category.slug}/${subCategory.slug}`}
          className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative h-60 overflow-hidden">
            <img
              src={
                subCategory.image 
              }
              alt={subCategory.name}
              className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        
            
          </div>

          {/* Content */}
          <div className="p-3">
          <div className="">

  <h3 className="text-xl font-bold mb-3 text-slate-900">
    {subCategory.name}
  </h3>

  <p className="text-gray-600">
    Explore products, technical specifications, pricing,
    and engineering details for this category.
  </p>

</div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-[#DA2416]">
                Explore Collection
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-[#DA2416] transition group-hover:bg-[#DA2416] group-hover:text-white">
                →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>

  </div>
</div>










   <section className="relative overflow-hidden bg-white py-12">
      {/* Background Decorations */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-slate-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16  lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#DA2416]">
            Premium Bearings
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            SKF ConCentra
         
            Roller Bearing Units
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Designed for demanding industrial environments, SKF ConCentra
            bearing units provide a secure locking mechanism, simplified
            installation, and outstanding reliability for rotating equipment.
          </p>

          {/* Features */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              "360° Shaft Grip",
              "Quick Installation",
              "Corrosion Resistant",
              "Heavy Duty Performance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DA2416] text-white">
                  ✓
                </div>

                <span className="font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-12 flex gap-5">
            <button className="rounded-xl bg-[#DA2416] px-8 py-4 font-semibold text-white transition hover:bg-[#DA2416]">
              Explore Product
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              Download Brochure
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          {/* Background Card */}
          <div className="absolute inset-10 rounded-[40px] bg-gradient-to-br from-[#DA2416] to-slate-800" />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-[40px] bg-white p-10 shadow-2xl">
            <img
              src="/ab3.png"
              alt="SKF Bearing"
              className="mx-auto w-full object-contain transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 left-10 rounded-2xl bg-white px-6 py-4 shadow-xl">
            <p className="text-sm text-slate-500">
              Trusted Worldwide
            </p>

            <p className="text-3xl font-bold text-slate-900">
              100+ Countries
            </p>
          </div>

          {/* Floating Badge */}
          <div className="absolute -top-5 right-5 rounded-2xl bg-[#DA2416] px-6 py-4 text-white shadow-xl">
            <p className="text-sm opacity-80">
              Service Life
            </p>

            <p className="text-3xl font-bold">
              +35%
            </p>
          </div>
        </div>
      </div>
    </section>




     <section className="relative overflow-hidden bg-slate-50 py-14">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_45%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20  lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative">

          {/* Decorative Box */}
          <div className="absolute -left-8 top-12 h-[85%] w-[85%] rounded-[40px] bg-gradient-to-br from-[#DA2416] to-[#281770]" />

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
            <img
              src="/test3.avif"
              alt="SKF Bearing"
              className="w-full transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 right-8 rounded-3xl bg-white p-6 shadow-xl">
            <p className="text-sm text-slate-500">
              Installation Time
            </p>

            <h3 className="mt-1 text-3xl font-bold text-[#DA2416]">
              -50%
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Faster than conventional mounting systems.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#DA2416]">
            Engineered Performance
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Built for Maximum
         
            Reliability & Precision
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            SKF ConCentra roller bearing units combine innovative locking
            technology with premium engineering to deliver exceptional
            durability, minimal maintenance, and long-term operational
            efficiency in demanding industrial environments.
          </p>

          {/* Feature Grid */}
          <div className="mt-7 grid grid-cols-2 gap-5">
            {[
              {
                title: "360° Grip",
                desc: "Secure shaft locking",
              },
              {
                title: "Long Service",
                desc: "Extended bearing life",
              },
              {
                title: "Easy Mounting",
                desc: "Quick installation",
              },
              {
                title: "Heavy Duty",
                desc: "Industrial reliability",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h4 className="font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex gap-5">
            <button className="rounded-xl bg-[#DA2416] px-8 py-4 font-semibold text-white transition hover:bg-[#DA2416]">
              View Product
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:bg-white">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>


 <section style={{backgroundImage:"url(/ctabg.jfif)"}} className="relative  py-14 bg-cover  overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/75" />


      {/* Accent */}
      <div className="absolute left-0 top-0 h-full w-2 bg-[#DA2416]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_300px]">

          {/* Left */}
          <div>
            <span className="text-[#281770] uppercase tracking-[0.35em] text-sm font-semibold">
              ENGINEERED SOLUTIONS
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-white">
              Need Help Choosing the
          
              Right Industrial Product?
            </h2>

            <p className="mt-4 max-w-5xl text-lg leading-8 text-white">
              From bearings and power transmission components to complete
              industrial solutions, our technical team will help you select the
              right product for your application.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">

            <Link
              href="/contact"
              className="flex items-center justify-between rounded-xl bg-[#DA2416] px-7 py-5 text-lg font-semibold text-white transition hover:bg-[#DA2416]"
            >
              Request Quote
              <ArrowRight />
            </Link>

            <Link
              href="/products"
              className="flex items-center justify-between rounded-xl border border-white/15 px-7 py-5 text-lg font-semibold text-white transition hover:border-blue-500 hover:bg-white/5"
            >
              Browse Products
              <ArrowRight />
            </Link>

          </div>
        </div>
      </div>
    </section>



</>


  );
}
