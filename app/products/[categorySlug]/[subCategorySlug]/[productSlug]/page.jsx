import Link from "next/link";
import { getProductEntry, getAllProductParams } from "../../../../../data";
import { labelFor } from "../../../../../data/labels";

export function generateStaticParams() {
  return getAllProductParams();
}

export default async function ProductPage({ params }) {
  const { categorySlug, subCategorySlug, productSlug } = await params;

  const result = getProductEntry(
    categorySlug,
    subCategorySlug,
    productSlug
  );

  if (!result) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        Product not found.
      </div>
    );
  }

  const { entry, product } = result;
  const { category, subCategory } = entry;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <nav className="text-sm text-gray-400 mb-4">
        {category.name} /{" "}
        <Link
          href={`/products/${category.slug}/${subCategory.slug}`}
          className="hover:underline"
        >
          {subCategory.name}
        </Link>{" "}
        / <span className="text-gray-700">{product.model}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-1">{product.model}</h1>
          <p className="text-gray-500 mb-6">{subCategory.name}</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {Object.entries(product.dimensions || {}).map(([key, value]) => (
              <div key={key} className="border rounded-lg p-3 text-center">
                <div className="text-xs uppercase tracking-wide text-gray-400">
                  {labelFor(key)}
                </div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {Object.entries(product.loadRating || {}).map(([key, value]) => (
              <div key={key} className="border rounded-lg p-3 text-center">
                <div className="text-xs uppercase tracking-wide text-gray-400">
                  {labelFor(key)}
                </div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>

          {product.pdf && (
            <a
              href={product.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-600 hover:underline"
            >
              Download datasheet (PDF)
            </a>
          )}
        </div>

        {product.image && (
          <img
            src={product.image}
            alt={product.model}
            className="w-full rounded-xl border object-cover"
          />
        )}
      </div>

      <div className="prose max-w-none">
        {subCategory.heroDescription && (
          <>
            <h2 className="text-lg font-semibold">
              About {subCategory.name}
            </h2>
            <p className="text-gray-700">
              {subCategory.heroDescription}
            </p>
          </>
        )}

        {subCategory.features?.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mt-6">Features</h2>
            <ul>
              {subCategory.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {subCategory.applications?.length > 0 && (
          <>
            <h2 className="text-lg font-semibold mt-6">Applications</h2>
            <ul>
              {subCategory.applications.map((application, index) => (
                <li key={index}>{application}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}