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
  hidden: { opacity: 0, y: 60, scale: 1 },
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
            title: "Pneumatic Systems",
            desc: "Compressed air dryers, automation systems & pneumatic controls engineered for industrial efficiency.",
            icon: "/assets/pneumatics.png"
        },
        {
            id: 2,
            title: "Hydraulic Systems",
            desc: "High-performance hydraulic cylinders, power packs & scissor lifts designed for precision and durability.",
            icon: "/assets/hydraulics.png"
        },
        {
            id: 3,
            title: "Dehumidification Systems",
            desc: "Patented heatless dehumidifiers delivering 50%+ energy savings for pharma, food & industrial use.",
            icon: "/assets/dehumidification.png"
        },
        {
            id: 4,
            title: "Industrial Filtration",
            desc: "Air, gas, oil, water & chemical filtration systems built for clean, contamination-free operations",
            icon: "/assets/filtration.png"
        },
        {
            id: 5,
            title: "Process Automation",
            desc: "Custom pneumatic & hydraulic automation systems that improve productivity and eliminate manual work.",
            icon: "/assets/automation.png"
        },
        {
            id: 6,
            title: "Material Handling Systems",
            desc: "Engineered cranes, grab buckets & hydraulic platforms for safe and efficient industrial material movement.",
            icon: "/assets/cargo-handling.png"
        }
    ]
    return (
        <motion.div className="expertise_content_wrapper sec_pad"  variants={containerVariants}>
            {
                expertiseData?.map((item, idx) => {
                    return (
                        <motion.div variants={cardVariants} key={item?.id} className="feature_col" initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1, // 🔥 THIS creates one-by-one effect
      }}
      viewport={{ once: true, amount: 0.3 }}>
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