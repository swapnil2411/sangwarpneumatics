import Accordion, {AccordionItem} from "@/components/common/Accordion"
export default function WhyChooseUsContent(){
    const highlightList: AccordionItem[] = [
  {
    id: "energy-efficient",
    title: "Energy Efficient Solutions",
    icon: "/assets/thunder.png",
    content: (
      <p>Up to 50% energy savings with our patented dehumidification systems.</p>
    ),
  },
  {
    id: "end-to-end-engineering",
    title: "End-to-End Engineering",
    icon: "/assets/skill.png",
    content: (
      <p>From design to installation — complete turnkey solutions.</p>
    ),
  },
  {
    id: "technical-expertise",
    title: "Technical Expertise",
    icon: "/assets/expertise.png",
    content: (
      <p>Strong expertise in pneumatics, hydraulics, and automation systems.</p>
    ),
  },
  {
    id: "advanced-infrastructure",
    title: "Advanced Infrastructure",
    icon: "/assets/infrastucture.png",
    content: (
      <p>Modern manufacturing facility with precision equipment in Vasai.</p>
    ),
  },
  {
    id: "trusted-by-leaders",
    title: "Trusted by Industry Leaders",
    icon: "/assets/leadership.png",
    content: (
      <p>Successfully delivered projects for ISRO, BARC, NPCIL, and more.</p>
    ),
  },
  {
    id: "customized-solutions",
    title: "Customized Solutions",
    icon: "/assets/solution.png",
    content: (
      <p>Tailor-made systems designed for your specific industrial needs.</p>
    ),
  },
];
    return(
        <div className="why_choose_content_wrapper sec_pad">
            <div className="why_us_left_area">
                <div className="choose_us_content">
                    <Accordion items={highlightList} variant="bordered" defaultOpen={["energy-efficient"]} />
                </div>
            </div>
            <div className="why_us_right_area">
                <img src="/assets/why_choose_us.png" alt="Why Choose Us" />
            </div>
        </div>
    )
}