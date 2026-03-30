import SectionHeading from "@/components/common/SectionHeading";
import AboutContent from "./AboutContent";

export default function AboutSection(){
    return(
        <div className="aboutus_wrapper">
            <div className="container">
                <SectionHeading title="About Us" subtitle="About Us" />
                <AboutContent />
            </div>
        </div>
    )
}