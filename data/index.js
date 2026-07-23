import deepGrooveBallBearings from "./subcategories/deep-groove-ball-bearings";
import angularContactBallBearings from "./subcategories/angular-contact-ball-bearings";
import taperedRollerBearings from "./subcategories/tapered-roller-bearings";

// 👉 When you add a new subcategory file, import it above and add it to this array.
// That's the only wiring step - navbar, table pages, and product pages update automatically.
const allSubCategories = [
  deepGrooveBallBearings,
  angularContactBallBearings,
  taperedRollerBearings,
];

/** Category tree for the navbar: [{ name, slug, subCategories: [{name, slug}] }] */
export function getCategoryTree() {
  const categoriesBySlug = {};

  for (const entry of allSubCategories) {
    const { category, subCategory } = entry;
    if (!categoriesBySlug[category.slug]) {
      categoriesBySlug[category.slug] = { ...category, subCategories: [] };
    }
    categoriesBySlug[category.slug].subCategories.push({
      name: subCategory.name,
      slug: subCategory.slug,
      image: entry.products?.[0]?.image || null,
    });
  }

  return Object.values(categoriesBySlug);
}

/** Full subcategory entry (category + subCategory + products) by category+subcategory slug */
export function getSubCategoryEntry(categorySlug, subCategorySlug) {
  return allSubCategories.find(
    (entry) =>
      entry.category.slug === categorySlug &&
      entry.subCategory.slug === subCategorySlug,
  );
}

/** Single product, plus its parent subcategory entry (for static content) */
export function getProductEntry(categorySlug, subCategorySlug, productSlug) {
  const entry = getSubCategoryEntry(categorySlug, subCategorySlug);
  if (!entry) return null;
  const product = entry.products.find((p) => p.slug === productSlug);
  if (!product) return null;
  return { entry, product };
}

/** For generateStaticParams on the table page */
export function getAllSubCategoryParams() {
  return allSubCategories.map((entry) => ({
    categorySlug: entry.category.slug,
    subCategorySlug: entry.subCategory.slug,
  }));
}

/** For generateStaticParams on the product page */
export function getAllProductParams() {
  return allSubCategories.flatMap((entry) =>
    entry.products.map((p) => ({
      categorySlug: entry.category.slug,
      subCategorySlug: entry.subCategory.slug,
      productSlug: p.slug,
    })),
  );
}

/**
 * Given an array of product objects, returns the ordered list of dimension keys
 * (union across all products, ordered by first appearance) so table columns
 * adapt automatically to whatever keys a subcategory's products use.
 */
export function getColumnKeys(products, field) {
  const keys = [];
  const seen = new Set();
  for (const p of products) {
    const obj = p[field] || {};
    for (const key of Object.keys(obj)) {
      if (!seen.has(key)) {
        seen.add(key);
        keys.push(key);
      }
    }
  }
  return keys;
}
