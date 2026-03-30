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
