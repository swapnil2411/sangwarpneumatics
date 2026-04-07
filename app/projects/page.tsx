import '../styles/projects.css';
import PageBanner from "@/components/common/PageBanner";
import ProjectsContent from "./ProjectsContent";

export default function Projects(){
    return(
        <>
            <PageBanner title="Projects" />
            <ProjectsContent />
        </>
    )
}