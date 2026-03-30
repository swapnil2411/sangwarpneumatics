import FeatureCard from "@/components/common/FeatureCard"

export default function ExpertiseContent() {
    const expertiseData = [
        {
            id: 1,
            title: "Pneumatics",
            desc: "Advanced compressed air and automation systems for industrial efficiency.",
            icon: "/assets/pneumatics.png"
        },
        {
            id: 2,
            title: "Hydraulics",
            desc: "High-performance hydraulic systems designed for precision and durability.",
            icon: "/assets/hydraulics.png"
        },
        {
            id: 3,
            title: "Dehumidification",
            desc: "Energy-efficient moisture control solutions with patented technology.",
            icon: "/assets/dehumidification.png"
        },
        {
            id: 4,
            title: "Filtration Systems",
            desc: "Air, gas, oil, and water filtration solutions for clean operations.",
            icon: "/assets/filtration.png"
        },
        {
            id: 5,
            title: "Automation",
            desc: "Custom process automation systems to improve productivity & reduce manual work.",
            icon: "/assets/automation.png"
        },
        {
            id: 6,
            title: "Material Handling",
            desc: "Engineered solutions for safe and efficient material movement.",
            icon: "/assets/cargo-handling.png"
        }
    ]
    return (
        <div className="expertise_content_wrapper sec_pad">
            {
                expertiseData?.map((item, idx) => {
                    return (
                        <FeatureCard key={item?.id}>
                            <div className="feature_col">
                                <div className="feature_icon">
                                    <img src={item?.icon} alt={item?.icon} />
                                </div>
                                <div className="feature_content">
                                    <h3 className="feature_title">{item?.title}</h3>
                                    <p className="feature_para">{item?.desc}</p>
                                </div>
                            </div>
                        </FeatureCard>
                    )
                })
            }
        </div>
    )
}