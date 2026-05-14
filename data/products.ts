// // data/products.ts

// export const productCategories = [
//   {
//     category: "Compressed Air Dryers",
//     slug: "air-dryers",
//     image: "/assets/air-dryers.png",
//     items: [
//       "Heatless Regenerative Type",
//       "Heated Low Purge Type",
//       "No Purge Loss Type",
//       "Low Dew Point (-70°C)",
//       "Refrigerated Type",
//     ],
//   },
//   {
//     category: "Dehumidifiers",
//     slug: "dehumidifiers",
//     image: "/assets/dehumidifers.png",
//     items: [
//       "Heatless Dehumidifier (Patented)",
//       "Refrigerated Dehumidifier",
//       "Low RH (15%) Dehumidifier",
//     ],
//   },
//   {
//     category: "Hydraulic Systems",
//     slug: "hydraulic-systems",
//     image: "/assets/hydrulic-systems.png",
//     items: [
//       "Material Handling Systems",
//       "Hydraulic Scissor Lift",
//       "Heavy Actuation Systems",
//     ],
//   },
//   {
//     category: "Filtration Systems",
//     slug: "filtration-systems",
//     image: "/assets/filteration-systems.png",
//     items: [
//       "Air Filtration",
//       "Gas Filtration",
//       "Oil Filtration",
//       "Water Filtration",
//       "Chemical Filtration",
//     ],
//   },
//   {
//     category: "Pressure Regulators",
//     slug: "pressure-regulators",
//     image: "/assets/pressure-regulators.png",
//     items: [
//       "Gas Regulators",
//       "Low Pressure Regulators",
//       "High Pressure Regulators",
//       "Single & Double Stage",
//     ],
//   },
//   {
//     category: "Crane & Accessories",
//     slug: "crane-accessories",
//     image: "/assets/crane-accessories.png",
//     items: [
//       "Grab Bucket",
//       "Clamping Unit",
//       "Testing Accessories",
//     ],
//   },
// ];

export const productCategories = [
  {
    category: "Compressed Air Dryers",
    slug: "air-dryers",
    image: "/assets/air-dryers.png",
     description:
      "High-performance compressed air dryers designed to remove moisture and ensure reliable industrial operations.",

    longDescription:
      "Compressed air dryers are essential in industrial applications where moisture-free air is critical for performance, safety, and product quality. Sangawar Pneumatics offers a complete range of advanced air drying solutions including heatless, heated, and low dew point dryers. These systems are engineered to deliver consistent dry air, reduce corrosion, prevent equipment damage, and improve overall system efficiency. Designed for continuous operation, our dryers are ideal for industries such as pharmaceuticals, automotive, food processing, electronics, and manufacturing.",
    items: [
      {
        name: "Heatless Regenerative Type",
        description: "Delivers dry compressed air using PSA technology without external heating.",
        imgUrl: "/assets/heatless_generative_air_dryer.png",
        features: [
          "Twin tower design",
          "No heater required",
          "Automatic switching system",
        ],
        advantages: [
          "Low initial cost",
          "Simple operation",
          "Easy maintenance",
        ],
      },
      {
        name: "Heated Low Purge Type",
        description: "Energy-efficient dryer using external heater to reduce purge air loss.",
        imgUrl: "/assets/heated_low_purge.png",
        features: [
          "External heater regeneration",
          "Low purge air consumption",
          "PLC based control",
        ],
        advantages: [
          "Energy saving",
          "Lower compressor load",
          "Suitable for continuous use",
        ],
      },
      {
        name: "No Purge Loss Type",
        description: "Advanced dryer with zero compressed air loss using blower-based regeneration.",
        imgUrl: "/assets/no_loss_purge.png",
        features: [
          "Zero purge air loss",
          "Blower + heater system",
          "High efficiency design",
        ],
        advantages: [
          "Maximum energy saving",
          "Reduced operating cost",
          "Environment friendly",
        ],
      },
      {
        name: "Low Dew Point (-70°C)",
        description: "Ultra-dry air solution for critical applications requiring moisture-free air.",
        imgUrl: "/assets/low_dew_point.png",
        features: [
          "-70°C dew point",
          "Molecular sieve desiccant",
          "High precision control",
        ],
        advantages: [
          "Extreme dryness",
          "Ideal for sensitive industries",
          "High reliability",
        ],
      },
      {
        name: "Refrigerated Type",
        description: "Removes moisture by cooling compressed air to safe dew point levels.",
        imgUrl: "/assets/refrigerated_type.png",
        features: [
          "Refrigeration system",
          "Auto drain system",
          "Compact design",
        ],
        advantages: [
          "Low cost",
          "Easy installation",
          "Low maintenance",
        ],
      },
    ],
  },

  {
    category: "Dehumidifiers",
    slug: "dehumidifiers",
    image: "/assets/dehumidifers.png",
    description:
      "Industrial dehumidifiers for precise humidity control in critical environments.",

    longDescription:
      "Industrial dehumidifiers are designed to control and maintain optimal humidity levels in various industrial and commercial environments. Sangawar Pneumatics provides advanced dehumidification systems including heatless and refrigerated types that ensure stable atmospheric conditions. These systems help prevent condensation, corrosion, mold formation, and product degradation. Ideal for clean rooms, pharmaceutical plants, food processing units, and storage facilities, our dehumidifiers deliver consistent performance, energy efficiency, and long-term reliability.",
    items: [
      {
        name: "Heatless Dehumidifier (Patented)",
        description: "Removes moisture without heating using advanced adsorption technology.",
        imgUrl: "/assets/heatless_dehumidifier.png",
        features: [
          "Heatless operation",
          "Low energy consumption",
          "Continuous drying",
        ],
        advantages: [
          "Cost effective",
          "No temperature rise",
          "Reliable performance",
        ],
      },
      {
        name: "Refrigerated Dehumidifier",
        description: "Controls humidity using cooling-based condensation method.",
        imgUrl: "/assets/refrigerated_dehumidifier.png",
        features: [
          "Cooling coil system",
          "Automatic drainage",
          "Compact unit",
        ],
        advantages: [
          "Easy operation",
          "Affordable solution",
          "Low maintenance",
        ],
      },
      {
        name: "Low RH (15%) Dehumidifier",
        description: "Maintains extremely low humidity levels for critical environments.",
        imgUrl: "/assets/low_rh_dehumidifier.png",
        features: [
          "Low RH control (up to 15%)",
          "Precision humidity control",
          "Robust design",
        ],
        advantages: [
          "Ideal for pharma & electronics",
          "Stable environment",
          "High efficiency",
        ],
      },
    ],
  },

  {
    category: "Hydraulic Systems",
    slug: "hydraulic-systems",
    image: "/assets/hydrulic-systems.png",
    description:
      "Robust hydraulic solutions for lifting, actuation, and industrial automation.",

    longDescription:
      "Hydraulic systems play a crucial role in heavy-duty industrial applications requiring precision, power, and reliability. Sangawar Pneumatics designs and manufactures high-performance hydraulic solutions including scissor lifts, material handling systems, and heavy actuation equipment. These systems are built for durability and safety, offering smooth operation, high load capacity, and efficient performance. Our hydraulic solutions are widely used in manufacturing plants, warehouses, construction sites, and industrial automation setups.",
    items: [
      {
        name: "Material Handling Systems",
        description: "Efficient hydraulic systems for lifting and transporting materials.",
        imgUrl: "/assets/material_handling_system.png",
        features: [
          "Heavy-duty design",
          "Smooth operation",
          "Customizable system",
        ],
        advantages: [
          "Improves productivity",
          "Reduces manual effort",
          "High durability",
        ],
      },
      {
        name: "Hydraulic Scissor Lift",
        description: "Reliable lifting solution for vertical material movement.",
        imgUrl: "/assets/hydraulic_scissor_lift.png",
        features: [
          "High load capacity",
          "Stable platform",
          "Smooth lifting mechanism",
        ],
        advantages: [
          "Safe operation",
          "Space efficient",
          "Long service life",
        ],
      },
      {
        name: "Heavy Actuation Systems",
        description: "Hydraulic systems designed for heavy-duty industrial actuation.",
        imgUrl: "/assets/heavy_actuation_system.png",
        features: [
          "High force output",
          "Precision control",
          "Robust construction",
        ],
        advantages: [
          "Reliable performance",
          "Handles extreme loads",
          "Low maintenance",
        ],
      },
    ],
  },

  {
    category: "Filtration Systems",
    slug: "filtration-systems",
    image: "/assets/filteration-systems.png",
    description:
      "Advanced filtration systems for clean air, gas, oil, and water processing.",

    longDescription:
      "Filtration systems are critical for maintaining purity and efficiency in industrial processes. Sangawar Pneumatics offers a wide range of filtration solutions for air, gas, oil, water, and chemicals. These systems are designed to remove contaminants such as dust, oil mist, moisture, and harmful particles, ensuring smooth and safe operations. Our filtration systems improve equipment lifespan, reduce maintenance costs, and enhance process reliability, making them ideal for industries like pharmaceuticals, petrochemicals, food processing, and manufacturing.",
    items: [
      {
        name: "Air Filtration",
        description: "Removes dust, oil mist, and contaminants from compressed air.",
        imgUrl: "/assets/air_filtration_system.png",
        features: ["Multi-stage filtration", "High efficiency", "Compact design"],
        advantages: ["Improves air quality", "Protects equipment", "Low maintenance"],
      },
      {
        name: "Gas Filtration",
        description: "Ensures clean and contaminant-free gas flow.",
        imgUrl: "/assets/gas_filtration_system.png",
        features: ["High-pressure design", "Durable filters", "Leak-proof system"],
        advantages: ["Safe operations", "Improved efficiency", "Long filter life"],
      },
      {
        name: "Oil Filtration",
        description: "Removes impurities and sludge from industrial oil.",
        imgUrl: "/assets/oil_filtration_system.png",
        features: ["Multi-stage filtration", "Vacuum dehydration", "Smart sensors"],
        advantages: ["Extends oil life", "Reduces downtime", "Improves performance"],
      },
      {
        name: "Water Filtration",
        description: "Purifies water for industrial and process use.",
        imgUrl: "/assets/water_filtration_system.png",
        features: ["Multi-layer filtration", "High flow capacity", "Durable design"],
        advantages: ["Clean water output", "Low maintenance", "Reliable system"],
      },
      {
        name: "Chemical Filtration",
        description: "Specialized filtration for handling aggressive chemicals.",
        imgUrl: "/assets/chemical_filtration_system.png",
        features: ["Corrosion-resistant design", "High efficiency", "Custom filters"],
        advantages: ["Safe handling", "Long lifespan", "Efficient filtration"],
      },
    ],
  },

  {
    category: "Pressure Regulators",
    slug: "pressure-regulators",
    image: "/assets/pressure-regulators.png",
    description:
      "Precision pressure control solutions for gas and pneumatic systems.",

    longDescription:
      "Pressure regulators are essential components for maintaining stable and controlled pressure in industrial systems. Sangawar Pneumatics manufactures a range of high-quality regulators including gas regulators, low-pressure, high-pressure, and multi-stage regulators. These devices ensure consistent pressure output, protect equipment from damage, and improve system efficiency. Designed with high precision and durability, our pressure regulators are suitable for applications in automation, manufacturing, laboratories, and process industries.",
    items: [
      {
        name: "Gas Regulators",
        description: "Controls and stabilizes gas pressure in systems.",
        imgUrl: "/assets/gas_reg.png",
        features: ["Precise control", "Durable body", "Safety valves"],
        advantages: ["Stable pressure", "Safe operation", "Long life"],
      },
      {
        name: "Low Pressure Regulators",
        description: "Designed for accurate control of low-pressure systems.",
        imgUrl: "/assets/low_pressure_reg.png",
        features: ["High sensitivity", "Compact design", "Easy adjustment"],
        advantages: ["Accurate control", "Energy saving", "Reliable performance"],
      },
      {
        name: "High Pressure Regulators",
        description: "Handles high-pressure applications with precision.",
        imgUrl: "/assets/high_pressure_reg.png",
        features: ["Heavy-duty design", "Pressure stability", "Robust build"],
        advantages: ["Safe operation", "High durability", "Consistent output"],
      },
      {
        name: "Single & Double Stage",
        description: "Flexible regulators for different pressure requirements.",
        imgUrl: "/assets/single_double_stage_reg.png",
        features: ["Single & dual stage", "Stable output", "Wide range"],
        advantages: ["Versatile usage", "Improved accuracy", "Better control"],
      },
    ],
  },

  {
    category: "Crane & Accessories",
    slug: "crane-accessories",
    image: "/assets/crane-accessories.png",
    description:
      "Reliable crane attachments and accessories for efficient material handling.",

    longDescription:
      "Crane and lifting accessories are vital for safe and efficient material handling in industrial operations. Sangawar Pneumatics offers a range of high-quality products including grab buckets, clamping units, and testing accessories. These solutions are designed for durability, precision, and high load capacity, ensuring reliable performance in demanding environments. Our crane accessories enhance operational efficiency, reduce manual effort, and improve safety standards in industries such as construction, mining, logistics, and manufacturing.",
    items: [
      {
        name: "Grab Bucket",
        description: "Used for handling bulk materials efficiently.",
        imgUrl: "/assets/heatless_generative_air_dryer.png",
        features: ["Heavy-duty design", "High capacity", "Strong grip"],
        advantages: ["Fast material handling", "Durable", "Efficient"],
      },
      {
        name: "Clamping Unit",
        description: "Provides secure gripping for industrial operations.",
        imgUrl: "/assets/heatless_generative_air_dryer.png",
        features: ["Strong clamping force", "Precision control", "Robust design"],
        advantages: ["Safe handling", "Reliable operation", "Long life"],
      },
      {
        name: "Testing Accessories",
        description: "Accessories for testing and inspection applications.",
        imgUrl: "/assets/heatless_generative_air_dryer.png",
        features: ["Accurate measurement", "Durable build", "Easy to use"],
        advantages: ["Improves accuracy", "Reliable results", "Low maintenance"],
      },
    ],
  },
];