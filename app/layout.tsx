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

import { Toaster } from "react-hot-toast";

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

  metadataBase: new URL("https://sangawar.in"),

  alternates: {
    canonical: "https://sangawar.in",
  },

  openGraph: {
    siteName: "Sangawar Pneumatics",
    locale: "en_IN",
    type: "website",
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
      "Unit No. 27, Durga Industrial Estate, Parmar Techno Centre, Phase I, Pelhar",
    addressLocality: "Vasai",
    addressRegion: "Maharashtra",
    postalCode: "401208",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/sangawar-pneumatics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
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

        <RecaptchaProvider>
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 5000,
            }}
          />

          <RouteLoader />
          <Navbar />
          {children}
          <Footer />
        </RecaptchaProvider>
      </body>
    </html>
  );
}