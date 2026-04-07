"use client";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function AboutContent(){
    return(
        <div className="about_content_wrapper sec_pad">
            <motion.div
        className="left_about_area"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
                <img src="/assets/about-img.png" alt="About Us" />
            </motion.div>
            <motion.div
        className="right_about_area"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
                <h1 className="about_us_title">Sangawar Pneumatics</h1>
                <p className="about_us_para">
                    Sangawar Pneumatics is an engineering-driven company specializing in pneumatic, hydraulic, and automation systems. With patented technologies and a strong focus on energy efficiency, we deliver reliable, high-performance solutions tailored to industrial needs, ensuring quality, innovation, and customer satisfaction.<br />
                    Operating from our well-equipped facility in Vasai, we combine modern fabrication capabilities with engineering precision to deliver reliable and customized solutions. Our commitment is simple — to provide value-driven, high-quality systems that ensure complete customer satisfaction across every project we undertake.
                </p>
                <Button btnVariant="fill_btn">
                    About  Us
                </Button>
            </motion.div>
        </div>
    )
}