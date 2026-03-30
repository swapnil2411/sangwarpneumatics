import SectionHeading from "@/components/common/SectionHeading"
import IndustryContent from "./IndustryContent"

export default function IndustrySection(){
    return(
        <div className="industry_wrapper">
                    <div className="container">
                        <SectionHeading title="Industry" subtitle="Industry" />
                        <IndustryContent />
                    </div>
                </div>
    )
}