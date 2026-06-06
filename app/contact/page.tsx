import PageBanner from "@/components/common/PageBanner";
import ContactContent from "./ContactContent";
import '../styles/contactus.css';
import type { Metadata } from "next";
import Script from "next/script";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",

  name: "Contact Sangawar Pneumatics",

  url: "https://sangawar.in/contact",

  description:
    "Contact Sangawar Pneumatics for industrial automation, hydraulic, pneumatic, filtration and dehumidification solutions.",
};

export const metadata: Metadata = {
  title:
    "Contact Sangawar Pneumatics | Get Quote for Industrial Solutions",

  description:
    "Contact Sangawar Pneumatics for industrial air dryers, hydraulic systems, dehumidifiers, filtration systems, pressure regulators, and automation solutions. Located in Vasai, Maharashtra and serving industries across India since 1998.",

  keywords: [
    "contact Sangawar Pneumatics",
    "industrial automation company",
    "hydraulic systems manufacturer",
    "pneumatic systems manufacturer",
    "industrial air dryers India",
    "industrial dehumidifiers",
    "industrial filtration systems",
    "pressure regulators",
    "get industrial quote",
    "industrial equipment supplier",
    "Vasai industrial company",
    "Maharashtra engineering company",
    "automation solutions India",
    "industrial engineering solutions",
  ],

  metadataBase: new URL("https://sangawar.in"),

  alternates: {
    canonical: "https://sangawar.in/contact",
  },

  openGraph: {
    title:
      "Contact Sangawar Pneumatics | Industrial Engineering Solutions",

    description:
      "Get in touch with Sangawar Pneumatics for hydraulic, pneumatic, filtration, dehumidification, and automation solutions.",

    url: "https://sangawar.in/contact",

    siteName: "Sangawar Pneumatics",

    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Sangawar Pneumatics",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Sangawar Pneumatics | Industrial Engineering Solutions",

    description:
      "Reach out to Sangawar Pneumatics for industrial air dryers, hydraulic systems, filtration systems and automation solutions.",

    images: ["/og-contact.jpg"],
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

export default function ContactUs() {
    return (
        <>
        <Script
  id="contact-page-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(contactPageSchema),
  }}
/>
        <div className="contact_page">
            <PageBanner title="Contact Us" />
            <ContactContent />
        </div>
        </>
    )
}