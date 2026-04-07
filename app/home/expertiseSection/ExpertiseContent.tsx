"use client";
import { motion } from "framer-motion";
import FeatureCard from "@/components/common/FeatureCard"

export default function ExpertiseContent() {
    const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
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
        <motion.div className="expertise_content_wrapper sec_pad"  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
            {
                expertiseData?.map((item, idx) => {
                    return (
                        <motion.div variants={cardVariants} key={item?.id} className="feature_col">
                            <div className="feature_icon">
                                    <img src={item?.icon} alt={item?.icon} />
                                </div>
                                <div className="feature_content">
                                    <h3 className="feature_title">{item?.title}</h3>
                                    <p className="feature_para">{item?.desc}</p>
                                </div>
                        {/* <FeatureCard key={item?.id}>
                            <div className="feature_col">
                                
                            </div>
                        </FeatureCard> */}
                        </motion.div>
                    )
                })
            }
        </motion.div>
    )
}