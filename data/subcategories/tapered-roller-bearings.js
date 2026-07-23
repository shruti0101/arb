export default {
  category: {
    name: "Roller Bearings",
    slug: "roller-bearings",
  },
  subCategory: {
    name: "Tapered Roller Bearings",
    slug: "tapered-roller-bearings",
    heroTitle: "Tapered Roller Bearings",
    heroDescription:
      "Support combined radial and axial loads and are built for heavy-duty applications where high load capacity is required.",
    features: [
      "High combined radial and axial load capacity",
      "Precision tapered rollers for even load distribution",
      "Available in single and double row configurations",
    ],
    applications: ["Automotive wheel hubs", "Industrial gearboxes", "Heavy machinery"],
  },
  products: [
    {
      model: "30205",
      slug: "30205",
      dimensions: { bore: 25, od: 52, width: 16.25 },
      loadRating: { dynamic: 29800, static: 33000 },
      image: "/images/products/30205.jpg",
      pdf: "/pdfs/30205.pdf",
    },
    {
      model: "30206",
      slug: "30206",
      dimensions: { bore: 30, od: 62, width: 17.25 },
      loadRating: { dynamic: 37500, static: 43000 },
      image: "/images/products/30206.jpg",
      pdf: "/pdfs/30206.pdf",
    },
  ],
};
