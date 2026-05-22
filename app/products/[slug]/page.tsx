// app/products/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { productCategories } from "@/data/products";

import Breadcrumb from "@/components/common/Breadcrumb";
import PageBanner from "@/components/common/PageBanner";

import "../../styles/products.css";

type Props = {
  params: Promise<{ slug: string }>;
};

/* =========================================================
   STATIC PARAMS
========================================================= */
export async function generateStaticParams() {
  return productCategories.map((product) => ({
    slug: product.slug,
  }));
}

/* =========================================================
   SEO METADATA
========================================================= */
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = productCategories.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return {
      title: "Products | Sangawar Pneumatics",
      description:
        "Explore industrial hydraulic, pneumatic, filtration, dehumidifier, pressure regulator, and crane accessory solutions from Sangawar Pneumatics.",
    };
  }

  /* =========================================================
     SEO MAP
  ========================================================= */

  const seoMap: Record<
    string,
    {
      title: string;
      description: string;
      keywords: string[];
    }
  > = {
    "air-dryers": {
      title:
        "Industrial Air Dryers for Compressor Systems | Sangawar Pneumatics",

      description:
        "Explore industrial air dryers including Heatless Regenerative Air Dryers, Refrigerated Air Dryers, PSA Air Dryers, and Low Dew Point Air Dryers for compressed air systems.",

      keywords: [
        "air dryers",
        "industrial air dryers",
        "air dryer for compressor",
        "compressed air dryer system",
        "compressor dryer",
        "pneumatic air dryer",
        "PSA air dryer",
        "refrigerated compressed air dryer",
        "heatless regenerative air dryer",
      ],
    },

    dehumidifiers: {
      title:
        "Industrial Dehumidifiers & Low RH Systems | Sangawar Pneumatics",

      description:
        "High-performance industrial dehumidifiers including refrigerated dehumidifiers, low RH dehumidifiers, and patented heatless dehumidifier systems for industrial applications.",

      keywords: [
        "industrial dehumidifier",
        "heatless dehumidifier",
        "low RH dehumidifier",
        "refrigerated industrial dehumidifier",
        "humidity control systems",
        "industrial moisture control",
        "industrial drying systems",
      ],
    },

    "hydraulic-systems": {
      title:
        "Industrial Hydraulic Systems & Hydraulic Lifting Solutions | Sangawar Pneumatics",

      description:
        "Explore hydraulic material handling systems, hydraulic scissor lifts, and heavy-duty hydraulic actuation systems for industrial automation and lifting applications.",

      keywords: [
        "hydraulic systems",
        "industrial hydraulic systems",
        "hydraulic lifting systems",
        "hydraulic scissor lift",
        "hydraulic actuation systems",
        "hydraulic automation system",
        "hydraulic material handling systems",
        "industrial hydraulics",
      ],
    },

    "filtration-systems": {
      title:
        "Industrial Filtration Systems & Oil Filtration Solutions | Sangawar Pneumatics",

      description:
        "Industrial filtration systems including compressed air filtration, gas filtration, hydraulic oil filtration, water purification, and chemical filtration systems.",

      keywords: [
        "industrial filtration systems",
        "industrial filtration equipment",
        "compressed air filtration",
        "gas filtration systems",
        "hydraulic oil filtration",
        "transformer oil filtration",
        "industrial filter system",
        "chemical filtration systems",
      ],
    },

    "pressure-regulators": {
      title:
        "Industrial Gas Pressure Regulators | High & Low Pressure Regulators",

      description:
        "Precision industrial pressure regulators for oxygen, nitrogen, argon, hydrogen, CO2, and industrial gas systems including high-pressure and low-pressure regulators.",

      keywords: [
        "pressure regulators",
        "industrial pressure regulators",
        "gas pressure regulators",
        "high pressure regulators",
        "low pressure regulators",
        "single stage regulators",
        "double stage regulators",
        "compressor pressure regulator",
      ],
    },

    "crane-accessories": {
      title:
        "Industrial Crane Accessories & Hydraulic Clamping Systems",

      description:
        "Heavy-duty crane accessories including grab buckets, clamping units, and load testing accessories for industrial lifting and material handling applications.",

      keywords: [
        "crane accessories",
        "grab bucket",
        "hydraulic clamping unit",
        "load testing accessories",
        "industrial lifting accessories",
        "material handling systems",
        "crane lifting equipment",
      ],
    },
  };

  const seo = seoMap[slug];

  const title =
    seo?.title;

  const description =
    seo?.description ||
    product.longDescription;

  const keywords =
    seo?.keywords || [
      "industrial products",
      "hydraulics",
      "pneumatics",
    ];

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `https://sangawar.in${product.image}`;

  return {
    title,

    description,

    keywords,

    metadataBase: new URL("https://sangawar.in"),

    alternates: {
      canonical: `https://sangawar.in/products/${slug}`,
    },

    openGraph: {
      title,

      description,

      url: `https://sangawar.in/products/${slug}`,

      siteName: "Sangawar Pneumatics",

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.category,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/* =========================================================
   PAGE
========================================================= */

export default async function ProductDetail({
  params,
}: Props) {
  const { slug } = await params;

  const product = productCategories.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `https://sangawar.in${product.image}`;

  /* =========================================================
     PRODUCT SCHEMA
  ========================================================= */

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",

    name: product.category,

    description: product.longDescription,

    image: imageUrl,

    brand: {
      "@type": "Brand",
      name: "Sangawar Pneumatics",
    },

    manufacturer: {
      "@type": "Organization",
      name: "Sangawar Pneumatics",
      url: "https://sangawar.in",
    },

    category: product.category,

    url: `https://sangawar.in/products/${slug}`,
  };

  return (
    <>
      {/* =========================================================
          JSON LD SCHEMA
      ========================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      {/* =========================================================
          PAGE BANNER
      ========================================================= */}

      <PageBanner title={product.category} />

      {/* =========================================================
          BREADCRUMB
      ========================================================= */}

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.category },
        ]}
      />

      {/* =========================================================
          PAGE CONTENT
      ========================================================= */}

      <div className="container">
        <section className="grid md:grid-cols-2 gap-10 sec_pad">
          {/* =========================================================
              MAIN IMAGE
          ========================================================= */}

          <div>
            <img
              src={product.image}
              alt={product.category}
              className="w-full mt-6 rounded-xl"
            />
          </div>

          {/* =========================================================
              CONTENT
          ========================================================= */}

          <div className="sub_products_wrapper">
            <h1 className="heading">
              {product.category}
            </h1>

            <p>{product.longDescription}</p>
          </div>
        </section>

        {/* =========================================================
            SUB PRODUCTS
        ========================================================= */}

        <section className="products_grid">
          <div className="grid md:grid-cols-3 gap-6">
            {product.items.map((item) => (
              <div
                className="p-5 rounded-2xl hover:shadow-xl transition category_item"
                key={item.name}
              >
                {/* =========================================================
                    IMAGE
                ========================================================= */}

                <div className="category_item_img">
                  <img
                    src={item?.imgUrl}
                    alt={item.name}
                    className="mb-4"
                    loading="lazy"
                  />
                </div>

                {/* =========================================================
                    CONTENT
                ========================================================= */}

                <div className="category_item_content">
                  <h2 className="category_item_content_heading">
                    {item.name}
                  </h2>

                  <p className="category_item_content_description">
                    {item.description}
                  </p>

                  {/* =========================================================
                      FEATURES
                  ========================================================= */}

                  <h3 className="category_item_title">
                    Features:
                  </h3>

                  <ul className="text-sm mb-4">
                    {item.features
                      .slice(0, 3)
                      .map((f, i) => (
                        <li key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#000"
                              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                            />
                          </svg>

                          {f}
                        </li>
                      ))}
                  </ul>

                  {/* =========================================================
                      ADVANTAGES
                  ========================================================= */}

                  <h3 className="category_item_title">
                    Advantages:
                  </h3>

                  <ul className="text-sm mb-4">
                    {item.advantages
                      .slice(0, 3)
                      .map((f, i) => (
                        <li key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#000"
                              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
                            />
                          </svg>

                          {f}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}