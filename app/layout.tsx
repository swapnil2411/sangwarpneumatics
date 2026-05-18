import type { Metadata } from "next";
import { Roboto } from "next/font/google";
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
  // Default title — pages can override with their own
  title: {
    default: "Sangawar Pneumatics | Industrial Engineering Solutions",
    template: "%s | Sangawar Pneumatics", // ← each page title appends this
  },
  icons: {
    icon: '/favicon.ico', // references public/favicon.ico
    apple: '/favicon.ico',
  },
  description:
    "Trusted manufacturer of pneumatic, hydraulic & dehumidification systems in Vasai, Maharashtra. Serving ISRO, BARC & NPCIL since 1998.",
  metadataBase: new URL("https://sangawar.in"), // ← critical for OG images to work
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.className} h-full antialiased`}
      
    >
      
      <body className="min-h-full">
         <Toaster position="bottom-center" toastOptions={{
          duration: 5000,
         }} />
        <RouteLoader />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
