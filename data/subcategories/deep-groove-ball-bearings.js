export default {
  category: {
    name: "Rolling Bearings",
    slug: "rolling-bearings",
  },
  subCategory: {
    name: "Deep Groove Ball Bearings",
    slug: "deep-groove-ball-bearings",
    heroTitle: "Deep Groove Ball Bearings",
    heroDescription:
      "Versatile, low-friction bearings suited for high-speed operation under radial and moderate axial loads in both directions.",
    features: [
      "Low friction, low noise operation",
      "Available sealed (2RS) or shielded (ZZ)",
      "Suitable for high-speed applications",
      "Available in C3/C4 clearance",
    ],
    applications: [
      "Electric motors",
      "Gearboxes",
      "Household appliances",
      "Pumps and fans",
    ],
  },
  products: [
    {
      model: "6005",
      slug: "6005",
      dimensions: { bore: 25, od: 47, width: 12 },
      loadRating: { dynamic: 7800, static: 4550 },
      image: "/images/products/6005.jpg",
      pdf: "/pdfs/6005.pdf",
    },
    {
      model: "6006",
      slug: "6006",
      dimensions: { bore: 30, od: 55, width: 13 },
      loadRating: { dynamic: 10100, static: 6200 },
      image: "/images/products/6006.jpg",
      pdf: "/pdfs/6006.pdf",
    },
    {
      model: "6007",
      slug: "6007",
      dimensions: { bore: 35, od: 62, width: 14 },
      loadRating: { dynamic: 12700, static: 8150 },
      image: "/images/products/6007.jpg",
      pdf: "/pdfs/6007.pdf",
    },
    {
      model: "6205-2RS",
      slug: "6205-2rs",
      dimensions: { bore: 25, od: 52, width: 15 },
      loadRating: { dynamic: 14000, static: 7800 },
      image: "/images/products/6205-2rs.jpg",
      pdf: "/pdfs/6205-2rs.pdf",
    },
  ],
};
