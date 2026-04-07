"use client";
import { motion } from "framer-motion";

import FeatureCard from "@/components/common/FeatureCard";
export default function IndustryContent(){
    const industriesData = [
  {
    id: 1,
    image: "/assets/pharma.png",
    title: "PHARMACEUTICAL",
    description: "Advanced solutions for controlled environments and clean processes",
  },
  {
    id: 2,
    image: "/assets/food-processing.png",
    title: "FOOD PROCESSING",
    description: "Efficient systems ensuring hygiene and moisture control",
  },
  {
    id: 3,
    image: "/assets/manufacturing.png",
    title: "MANUFACTURING",
    description: "Reliable engineering solutions for heavy-duty operations",
  },
  {
    id: 4,
    image: "/assets/nuclear-defense.png",
    title: "NUCLEAR & DEFENSE",
    description: "High-precision systems for critical and sensitive applications",
  },
];

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
    return(
        <motion.div className="industry_content_wrapper sec_pad" variants={containerVariants}>
            {
                industriesData?.map((item, idx) => {
                    return(
                        <motion.div className="industry_col" key={idx} variants={cardVariants} initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1, // 🔥 THIS creates one-by-one effect
      }}
      viewport={{ once: true, amount: 0.3 }}>
                        <div className="industry_icon">
                            <img src={item?.image} alt={item?.image} />
                        </div>
                        <div className="industry_content">
                            <h3 className="industry_title">{item?.title}</h3>
                            <p className="industry_para">{item?.description}</p>
                        </div>
                    </motion.div>
                    )
                })
            }
        </motion.div>
    )
}