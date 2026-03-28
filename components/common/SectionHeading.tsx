interface SectionHeadingProps {
    title: string;
    subtitle: string;
}

export default function SectionHeading({
    title,
    subtitle,
}: SectionHeadingProps){
    return(
        <div className="section_header">
            <h2 className="stroke_txt">{title}</h2>
            <h3 className="main_title">{subtitle}</h3>
        </div>
    )
}