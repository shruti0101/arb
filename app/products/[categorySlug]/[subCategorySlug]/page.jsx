import Link from "next/link";
import {
  getSubCategoryEntry,
  getAllSubCategoryParams,
  getColumnKeys,
} from "../../../../data";
import { labelFor } from "../../../../data/labels";

export function generateStaticParams() {
  return getAllSubCategoryParams();
}

export default async function SubCategoryPage({ params }) {
  const { categorySlug, subCategorySlug } = await params;

  const entry = getSubCategoryEntry(categorySlug, subCategorySlug);

  if (!entry) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        Subcategory not found.
      </div>
    );
  }

  const { category, subCategory, products } = entry;

  const dimensionKeys = getColumnKeys(products, "dimensions");
  const loadKeys = getColumnKeys(products, "loadRating");

  return (

<>
{/* Hero */}
<section className="border-b bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">

    {/* Left */}
    <div>
      <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <Link href="/" className="hover:text-[#DA2416]">
          Home
        </Link>

        <span>/</span>

        <Link
          href={`/products/${category.slug}`}
          className="hover:text-[#DA2416]"
        >
          {category.name}
        </Link>

        <span>/</span>

        <span className="font-medium text-slate-900">
          {subCategory.name}
        </span>
      </nav>

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#DA2416]">
        Industrial Bearings
      </span>

      <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        {subCategory.name}
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
        {subCategory.description ??
          `Our ${subCategory.name.toLowerCase()} are engineered for
          demanding industrial applications where reliability,
          precision, and long service life are essential.`}
      </p>

      {/* Highlights */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          "High Load Capacity",
          "Low Maintenance",
          "Long Service Life",
          "Industrial Grade",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DA2416] text-white">
              ✓
            </div>

            <span className="font-medium text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>

   
    </div>

    {/* Right */}

    <div className="relative flex justify-center">

      {/* Background Circle */}


      <img
              src={
                subCategory.image 
              }
              alt={subCategory.name}
              className="h-full w-full object-contain transition duration-700 group-hover:scale-110"
            />

      {/* Floating Card */}

      <div className="absolute bottom-0 left-0 rounded-2xl bg-white p-5 shadow-xl">
        <p className="text-sm text-slate-500">
          Performance
        </p>

        <p className="text-3xl font-bold text-[#DA2416]">
          99.8%
        </p>
      </div>

      <div className="absolute right-0 -top-20 rounded-2xl bg-slate-900 px-6 py-5 text-white shadow-xl">
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Engineered For
        </p>

        <p className="mt-2 font-semibold">
          Heavy Industrial Use
        </p>
      </div>

    </div>

  </div>
</section>



  <div className="mx-auto max-w-7xl px-6 py-16">
  {/* Header */}
  <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
    <div>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#DA2416]">
        Product Catalogue
      </p>

      <h2 className="mt-2 text-4xl font-bold text-slate-900">
        {subCategory.name}
      </h2>

      <p className="mt-3 max-w-2xl text-slate-600">
        Browse our complete range of{" "}
        <span className="font-semibold">
          {subCategory.name.toLowerCase()}
        </span>{" "}
        with detailed dimensions and load ratings.
      </p>
    </div>

    <div className="rounded-xl border bg-slate-50 px-5 py-3">
      <p className="text-xs uppercase tracking-wider text-slate-500">
        Total Products
      </p>

      <p className="text-3xl font-bold text-slate-900">
        {products.length}
      </p>
    </div>
  </div>

  {/* Table */}
  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

    <div className="overflow-x-auto">

      <table className="min-w-full">

        {/* Header */}
        <thead className="sticky top-0 z-10 bg-slate-900 text-white">

          <tr>

            <th className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider">
              Model
            </th>

            {dimensionKeys.map((key) => (
              <th
                key={key}
                className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
              >
                {labelFor(key)}
              </th>
            ))}

            {loadKeys.map((key) => (
              <th
                key={key}
                className="px-6 py-5 text-left text-sm font-semibold uppercase tracking-wider whitespace-nowrap"
              >
                {labelFor(key)}
              </th>
            ))}

          </tr>

        </thead>

        {/* Body */}
        <tbody>

          {products.map((p, index) => (

            <tr
              key={p.slug}
              className={`transition hover:bg-blue-50 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50/40"
              }`}
            >

              {/* Model */}

              <td className="border-b px-6 py-5">

                <Link
                  href={`/products/${category.slug}/${subCategory.slug}/${p.slug}`}
                  className="group inline-flex items-center gap-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DA2416]/10 font-bold text-[#DA2416]">
                    {index + 1}
                  </div>

                  <div>

                    <p className="font-semibold text-slate-900 group-hover:text-[#DA2416]">
                      {p.model}
                    </p>

                    <span className="text-xs text-slate-500">
                      View Details →
                    </span>

                  </div>

                </Link>

              </td>

              {/* Dimensions */}

              {dimensionKeys.map((key) => (
                <td
                  key={key}
                  className="border-b px-6 py-5 text-slate-700 whitespace-nowrap"
                >
                  {p.dimensions?.[key] ?? "—"}
                </td>
              ))}

              {/* Load */}

              {loadKeys.map((key) => (
                <td
                  key={key}
                  className="border-b px-6 py-5 text-slate-700 whitespace-nowrap"
                >
                  {p.loadRating?.[key] ?? "—"}
                </td>
              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>
</div>











</>
  );
}