import SectionHeading from "@/components/common/SectionHeading";
import ExpertiseContent from "./ExpertiseContent";

export default function ExpertiseSection() {
    return (
        <div className="expertise_wrapper">
            <div className="container">
                <SectionHeading title="Expertise" subtitle="Expertise" />
                <ExpertiseContent />
            </div>
        </div>
    )
}