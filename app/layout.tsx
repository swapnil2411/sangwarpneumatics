import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";

import RecaptchaProvider from "@/lib/RecaptchaProvider";

import "./globals.css";
import "./styles/style.css";
import "./styles/aboutus.css";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import RouteLoader from "@/components/common/RouteLoader";
import SmoothScroll from "@/components/common/SmoothScroll";
import { headers } from "next/headers";

import { Toaster } from "react-hot-toast";
import path from "path";
import Preloader from "@/components/common/Preloader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sangawar Pneumatics | Industrial Engineering Solutions",
    template: "%s | Sangawar Pneumatics",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },

  description:
    "Trusted manufacturer of pneumatic, hydraulic & dehumidification systems in Vasai, Maharashtra. Serving ISRO, BARC & NPCIL since 1998.",

    keywords: [
  "Sangawar Pneumatics",
  "Pneumatic Systems",
  "Hydraulic Systems",
  "Industrial Air Dryers",
  "Industrial Dehumidifiers",
  "Industrial Filtration Systems",
  "Pressure Regulators",
  "Hydraulic Material Handling Systems",
  "Crane Accessories",
  "Industrial Automation Solutions",
  "Hydraulics and Pneumatics",
  "Air Dryer for Compressor",
  "Industrial Engineering Solutions",
  "Industrial Equipment Manufacturer India",
  "Vasai Industrial Automation",
],
  authors: [{ name: "Sangawar Pneumatics" }],

  creator: "Sangawar Pneumatics",

  publisher: "Sangawar Pneumatics",

  metadataBase: new URL("https://sangawar.in"),

  alternates: {
    canonical: "https://sangawar.in",
  },

  openGraph: {
    title: "Sangawar Pneumatics",
    description:
      "Leading manufacturer and supplier of pneumatic systems and industrial automation products in India.",
    url: "https://sangawar.in",
    siteName: "Sangawar Pneumatics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sangawar Pneumatics",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sangawar Pneumatics",
    description:
      "Industrial automation and pneumatic solutions provider in India.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sangawar Pneumatics",
  url: "https://sangawar.in",
  logo: "https://sangawar.in/assets/sangawar-logo.png",
  foundingDate: "1998",
  description:
    "Manufacturer of pneumatic, hydraulic, dehumidification, and filtration systems in Vasai, Maharashtra.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Unit No 26/27, Phase -1, Parmal Technocenter Village, Vasai East, Palghar",
    addressLocality: "Vasai",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/sangawar-pneumatics",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sangawar Pneumatics",
  url: "https://sangawar.in",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Sangawar Pneumatics",

  image:
    "https://sangawar.in/assets/sangawar-logo.png",

  url: "https://sangawar.in",

  telephone: "+91 9323521603", // Primary Number

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 9323521603",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91 7021996181",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Unit No 26/27, Phase -1, Parmal Technocenter Village",
    addressLocality: "Vasai",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },

  areaServed: "India",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const pathname =
    (await headers()).get("x-current-path") || "/";

  console.log("Current Path:", pathname);


  const isAdmin =
    pathname.includes("admin");
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${roboto.className} h-full antialiased`}
    >
      <body className="min-h-full">
        {/* SEO Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Script
  id="website-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
/>



        <Preloader>
          <RecaptchaProvider>
          <SmoothScroll />
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 5000,
            }}
          />

          <RouteLoader />
          {!isAdmin && <Navbar />}
          <main id="main-content">
  {children}
</main>
          {!isAdmin && <Footer />}
        </RecaptchaProvider>
        </Preloader>
      </body>
    </html>
  );
}