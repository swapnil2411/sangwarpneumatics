"use client";

import { motion } from "framer-motion";
import Accordion, { AccordionItem } from "@/components/common/Accordion";

export default function WhyChooseUsContent() {

  const highlightList: AccordionItem[] = [
    {
      id: "energy-efficient",
      title: "Energy Efficient Solutions",
      icon: "/assets/thunder.png",
      content: <p>Up to 50% energy savings with our patented dehumidification systems.</p>,
    },
    {
      id: "end-to-end-engineering",
      title: "End-to-End Engineering",
      icon: "/assets/skill.png",
      content: <p>From design to installation — complete turnkey solutions.</p>,
    },
    {
      id: "technical-expertise",
      title: "Technical Expertise",
      icon: "/assets/expertise.png",
      content: <p>Strong expertise in pneumatics, hydraulics, and automation systems.</p>,
    },
    {
      id: "advanced-infrastructure",
      title: "Advanced Infrastructure",
      icon: "/assets/infrastucture.png",
      content: <p>Modern manufacturing facility with precision equipment in Vasai.</p>,
    },
    {
      id: "trusted-by-leaders",
      title: "Trusted by Industry Leaders",
      icon: "/assets/leadership.png",
      content: <p>Successfully delivered projects for ISRO, BARC, NPCIL, and more.</p>,
    },
    {
      id: "customized-solutions",
      title: "Customized Solutions",
      icon: "/assets/solution.png",
      content: <p>Tailor-made systems designed for your specific industrial needs.</p>,
    },
  ];

  return (
    <div className="why_choose_content_wrapper sec_pad">

      {/* LEFT - Accordion */}
      <motion.div
        className="why_us_left_area"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="choose_us_content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* Wrap Accordion in motion for stagger feel */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Accordion
              items={highlightList}
              variant="bordered"
              defaultOpen={["energy-efficient"]}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT - Image */}
      <motion.div
        className="why_us_right_area"
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img src="/assets/why_choose_us.png" alt="Why Choose Us" />
      </motion.div>

    </div>
  );
}