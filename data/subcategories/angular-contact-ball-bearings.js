export default {
  category: {
    name: "Rolling Bearings",
    slug: "rolling-bearings",
  },
subCategory: {
  name: "Angular Contact Ball Bearings",
  slug: "angular-contact-ball-bearings",

  image: "/ball-bearings.png",

  heroDescription: "...",

  applications: [
    {
      title: "Machine Tool Spindles",
      description: "Provides high precision and rigidity for high-speed machining.",
      icon: "🏭",
    },
    {
      title: "Pumps",
      description: "Supports combined radial and axial loads in rotating equipment.",
      icon: "💨",
    },
    {
      title: "Compressors",
      description: "Ensures smooth, low-vibration operation under continuous use.",
      icon: "⚙️",
    },
  ],

  benefits: [
    {
      title: "High Axial Load Capacity",
      description: "Designed to support combined radial and axial loads efficiently.",
    },
    {
      title: "High-Speed Performance",
      description: "Precision manufacturing enables reliable operation at high RPM.",
    },
    {
      title: "Long Service Life",
      description: "Optimized internal geometry reduces wear and extends bearing life.",
    },
    {
      title: "Low Maintenance",
      description: "Engineered to reduce friction and lubrication requirements.",
    },
  ],
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
