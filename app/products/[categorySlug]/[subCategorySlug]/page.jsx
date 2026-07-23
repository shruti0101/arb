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
    <div className="max-w-6xl mx-auto px-6 py-10">
      <nav className="text-sm text-gray-400 mb-2">
        {category.name} /{" "}
        <span className="text-gray-700">{subCategory.name}</span>
      </nav>

      <h1 className="text-2xl font-bold mb-6">
        {subCategory.name}
      </h1>

      <div className="border rounded-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="p-3 font-semibold border-b whitespace-nowrap">
                Model
              </th>

              {dimensionKeys.map((key) => (
                <th
                  key={key}
                  className="p-3 font-semibold border-b whitespace-nowrap"
                >
                  {labelFor(key)}
                </th>
              ))}

              {loadKeys.map((key) => (
                <th
                  key={key}
                  className="p-3 font-semibold border-b whitespace-nowrap"
                >
                  {labelFor(key)}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-b hover:bg-blue-50">
                <td className="p-3 whitespace-nowrap">
                  <Link
                    href={`/products/${category.slug}/${subCategory.slug}/${p.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {p.model}
                  </Link>
                </td>

                {dimensionKeys.map((key) => (
                  <td key={key} className="p-3 whitespace-nowrap">
                    {p.dimensions?.[key] ?? "—"}
                  </td>
                ))}

                {loadKeys.map((key) => (
                  <td key={key} className="p-3 whitespace-nowrap">
                    {p.loadRating?.[key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}