import SectionHeading from "@/components/common/SectionHeading";
import ProjectContent from "./ProjectContent";

export default function ProjectSection(){
    return(
        <div className="project_wrapper">
            <div className="container">
                <SectionHeading title="Projects" subtitle="Projects" />
                <ProjectContent />
            </div>
        </div>
    )
}