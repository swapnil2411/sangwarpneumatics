"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle: string;
}

export default function SectionHeading({
    title,
    subtitle,
}: SectionHeadingProps){
    return(
        <motion.div className="section_header" initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
            <h2 className="stroke_txt">{title}</h2>
            <h3 className="main_title">{subtitle}</h3>
        </motion.div>
    )
}