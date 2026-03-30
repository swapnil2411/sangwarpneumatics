import SectionHeading from "@/components/common/SectionHeading"
import WhyChooseUsContent from "./WhyChooseUsContent"

SectionHeading
export default function WhyChooseUsSection(){
    return(
        <div className="why_choose_us_wrapper">
                    <div className="container">
                        <SectionHeading title="Why Choose Us" subtitle="Why Choose Us" />
                        <WhyChooseUsContent />
                    </div>
                </div>
    )
}