import PageBanner from "@/components/common/PageBanner";
import AboutIntroduction from "./AboutIntroduction";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import FoundersSection from "./FoundersSection";
import Testimonials from "./Testimonials";
export default function About(){
    return(
        <>
            <PageBanner title="About Us" />
            <AboutIntroduction />
            <OurMission />
            <OurVision />
            <FoundersSection />
            <Testimonials />
        </>
    )
}