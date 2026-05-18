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

export default function Home() {
  return (
    <>
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
