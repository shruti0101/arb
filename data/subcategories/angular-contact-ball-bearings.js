export default {
  category: {
    name: "Rolling Bearings",
    slug: "rolling-bearings",
  },
  subCategory: {
    name: "Angular Contact Ball Bearings",
    slug: "angular-contact-ball-bearings",
    heroTitle: "Angular Contact Ball Bearings",
    image: "/ball-bearings.png", 
    heroDescription:
      "Designed to support combined radial and axial loads, with the contact angle determining the axial load capacity in one direction.",
    features: [
      "Higher axial load capacity than deep groove bearings",
      "Available as single or paired (back-to-back / face-to-face) sets",
      "Precision ground for high-speed spindle use",
    ],
    applications: ["Machine tool spindles", "Pumps", "Compressors"],
  },
  products: [
    {
      model: "7205B",
      slug: "7205b",
      dimensions: { bore: 25, od: 52, width: 15 },
      loadRating: { dynamic: 15300, static: 9200 },
      mass:{total:250},
      image: "/ball-bearings.png",
      pdf: "/pdfs/7205b.pdf",
    },
    {
      model: "7206B",
      slug: "7206b",
      dimensions: { bore: 30, od: 62, width: 16 },
      loadRating: { dynamic: 19500, static: 12000 },
      image: "/bear.png",
      pdf: "/pdfs/7206b.pdf",
    },
  ],
};
