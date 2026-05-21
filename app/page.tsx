import Image from "next/image";
import Hero from "./home/Hero";
import AboutSection from "./home/aboutSection/page";
import ExpertiseSection from "./home/expertiseSection/page";
import Marquee from "./home/Marquee";
import ProductSection from "./home/productSection/page";
import WhyChooseUsSection from "./home/whyChooseUsSection/page";
import IndustrySection from "./home/industrySection/page";
import Cta from "./home/Cta";
import ProjectSection from "./home/projectSection/page";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sangawar Pneumatics | Industrial Engineering Solutions",
  description:
    "Trusted manufacturer of pneumatic, hydraulic & dehumidification systems in Vasai. Serving ISRO, BARC & NPCIL since 1998. Get a free consultation today.",
  alternates: {
    canonical: "https://sangawar.in",
  },
  openGraph: {
    title: "Sangawar Pneumatics | Industrial Engineering Solutions",
    description:
      "Trusted manufacturer of pneumatic, hydraulic & dehumidification systems in Vasai. Serving ISRO, BARC & NPCIL since 1998.",
    url: "https://sangawar.in",
    images: [
      {
        url: "https://sangawar.in/assets/hero-01.png",
        width: 1200,
        height: 630,
        alt: "Sangawar Pneumatics — Industrial Engineering Solutions, Vasai Maharashtra",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of compressed air dryers does Sangawar Pneumatics manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manufacture desiccant-type and refrigerated air dryers with dew points down to -70°C.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide customized pneumatic solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design and manufacture customized pneumatic and automation systems based on industrial requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve industries including pharmaceuticals, power plants, engineering, food processing, chemicals, and defense sectors.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide PAN India service support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Sangawar Pneumatics provides installation and service support across India.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
    <Script
  id="faq-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <Marquee />
      <ProductSection />
      <WhyChooseUsSection />
      <IndustrySection />
      <Cta />
      <ProjectSection />
      
    </>
  );
}
