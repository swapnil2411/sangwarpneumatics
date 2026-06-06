

import SectionHeading from "@/components/common/SectionHeading";
import PageBanner from "@/components/common/PageBanner";
import ProductContent from "./productsContent";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Industrial Hydraulic & Pneumatic Products | Sangawar Pneumatics",
  description:
    "Explore premium hydraulic and pneumatic products including air dryers, hydraulic cylinders, pressure regulators, industrial filtration systems, and automation solutions from Sangawar Pneumatics.",

  keywords: [
    "hydraulics",
    "hydraulics systems",
    "hydraulics and pneumatics",
    "industrial hydraulics",
    "industrial hydraulics and pneumatics",
    "hydraulic & pneumatic products",
    "air dryers",
    "air dryer for compressor",
    "air compressor air dryer",
    "compressed air dryer system",
    "pressure regulators",
    "hydraulic cylinders",
    "hydraulic pneumatic cylinder",
    "industrial filtration systems",
    "industrial filtration equipment",
    "pneumatic systems",
    "hydraulic automation system",
    "industrial automation solutions",
    "hydraulic power system",
    "pneumatic control solutions",
  ],

  metadataBase: new URL("https://sangawar.in"),

  alternates: {
    canonical: "https://sangawar.in/products",
  },

  openGraph: {
    title:
      "Industrial Hydraulic & Pneumatic Products | Air Dryers, Cylinders & Automation",

    description:
      "Discover industrial hydraulic and pneumatic products including air dryers, hydraulic cylinders, pressure regulators, and filtration systems.",

    url: "https://sangawar.in/products",

    siteName: "Sangawar Pneumatics",

    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "Sangawar Pneumatics Products",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Hydraulic & Pneumatic Products | Air Dryers, Cylinders & Automation",

    description:
      "Explore air dryers, hydraulic cylinders, pressure regulators, and industrial automation solutions.",

    images: ["/og-products.jpg"],
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


const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  name: "Industrial Hydraulic & Pneumatic Products",

  description:
    "Industrial air dryers, dehumidifiers, hydraulic systems, filtration systems, pressure regulators and crane accessories.",

  url: "https://sangawar.in/products",

  hasPart: [
    {
      "@type": "WebPage",
      name: "Air Dryers",
      url: "https://sangawar.in/products/air-dryers",
    },
    {
      "@type": "WebPage",
      name: "Dehumidifiers",
      url: "https://sangawar.in/products/dehumidifiers",
    },
    {
      "@type": "WebPage",
      name: "Hydraulic Systems",
      url: "https://sangawar.in/products/hydraulic-systems",
    },
    {
      "@type": "WebPage",
      name: "Filtration Systems",
      url: "https://sangawar.in/products/filtration-systems",
    },
    {
      "@type": "WebPage",
      name: "Pressure Regulators",
      url: "https://sangawar.in/products/pressure-regulators",
    },
    {
      "@type": "WebPage",
      name: "Crane Accessories",
      url: "https://sangawar.in/products/crane-accessories",
    },
  ],
};

export default function ProductsPage() {
  
  return (
    <>
    <Script
        id="products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productsSchema),
        }}
      />
      <PageBanner title="Products" />

      <ProductContent />
    </>
  );
}