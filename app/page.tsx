import Image from "next/image";
import Hero from "./home/Hero";
import AboutSection from "./home/aboutSection/page";
import ExpertiseSection from "./home/expertiseSection/page";
import Marquee from "./home/Marquee";
import ProductSection from "./home/productSection/page";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <Marquee />
      <ProductSection />
    </>
  );
}
