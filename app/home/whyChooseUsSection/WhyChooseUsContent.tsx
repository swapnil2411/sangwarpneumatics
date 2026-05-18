"use client";

import { motion } from "framer-motion";
import Accordion, { AccordionItem } from "@/components/common/Accordion";

export default function WhyChooseUsContent() {

  const highlightList: AccordionItem[] = [
    {
      id: "energy-efficient",
      title: "Patented Energy-Saving Technology",
      icon: "/assets/thunder.png",
      content: <p>Our patented heatless dehumidifier delivers over 50% energy savings compared to conventional systems — with a World Patent application filed. Lower running costs, same industrial-grade performance.</p>,
    },
    {
      id: "end-to-end-engineering",
      title: "Complete Turnkey Engineering",
      icon: "/assets/skill.png",
      content: <p>We handle everything in-house — design, fabrication, installation, commissioning, and operator training. One team, one point of contact, zero gaps.</p>,
    },
    {
      id: "technical-expertise",
      title: "Dual-Qualified Engineering Team",
      icon: "/assets/expertise.png",
      content: <p>Founded by Mr. Pramod Sangawar (B.E. Mechanical & Electrical, MBA) and strengthened by Mr. Pratik Sangawar (B.E. Electrical, Masters in Industrial Safety) — deep multi-discipline expertise on every project.</p>,
    },
    {
      id: "advanced-infrastructure",
      title: "Modern Manufacturing Facility",
      icon: "/assets/infrastucture.png",
      content: <p>Our Vasai factory houses lathe machines, welding units, hydraulic press, precision measuring equipment, and a 10-tonne overhead crane — all under one roof for full quality control.</p>,
    },
    {
      id: "trusted-by-leaders",
      title: "Trusted by ISRO, BARC & NPCIL",
      icon: "/assets/leadership.png",
      content: <p>We've delivered systems for Chandrayaan III (ISRO), nuclear handling platforms (NPCIL), radiation shields (BARC), and decoy launching systems for the Indian Navy.</p>,
    },
    {
      id: "customized-solutions",
      title: "Every System Built to Specification",
      icon: "/assets/solution.png",
      content: <p>No standard catalogues. Every system is engineered from scratch to match your exact flow rate, pressure, environment, and application requirements.</p>,
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