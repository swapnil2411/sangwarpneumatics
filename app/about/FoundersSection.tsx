// import SectionHeading from "@/components/common/SectionHeading";
// export default function FoundersSection() {
//     return (
//         <div className="about_intro_wrapper founder_wrapper">
//             <div className="container">
//                 <SectionHeading title="Founder" subtitle="Founder" />
//                 <div className="sec_pad about_us_area mission_area">
//                     <div className="img_area">
//                         <img src="/assets/founder.webp" alt="Founder" />
//                     </div>
//                     <div className="content_area">
//                         <p className="content_para">
//                             At the heart of Sangawar Pneumatics lies the vision and leadership of <b>Mr. Pramod Sangawar</b>, a highly skilled engineer with a strong foundation in both mechanical and electrical engineering. With years of hands-on industry experience and a deep understanding of industrial systems, he established the company with a clear purpose — to deliver innovative, reliable, and energy-efficient engineering solutions that solve real-world industrial challenges.
//                             <br /><br />
//                             Driven by a passion for engineering excellence and continuous innovation, Mr. Sangawar has played a pivotal role in developing advanced systems across pneumatics, hydraulics, filtration, and automation. His forward-thinking approach led to the development of patented technologies, including energy-efficient dehumidification systems that significantly reduce operational costs for industries.
//                             <br /><br />
//                             Under his leadership, Sangawar Pneumatics has successfully delivered solutions for some of India’s most prestigious organizations, including ISRO, BARC, and NPCIL. His commitment to quality, precision, and customer satisfaction has helped the company build a reputation as a trusted engineering partner in critical and high-performance environments.
//                             Mr. Sangawar continues to guide the company with a vision to innovate, evolve, and contribute to the growth of modern industries through smart, sustainable, and performance-driven engineering solutions.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

export default function FoundersSection() {
  return (
    <div className="about_intro_wrapper founder_wrapper">
      <div className="container">

        <SectionHeading title="Founder" subtitle="The Engineer Behind Sangawar Pneumatics" />

        <div className="sec_pad about_us_area mission_area">

          {/* IMAGE */}
          <motion.div
            className="img_area"
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src="/assets/founder.webp" alt="Mr. Pramod Sangawar — Founder of Sangawar Pneumatics, 
B.E. Mechanical & Electrical engineer, Vasai Maharashtra" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            className="content_area"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="content_para">
                             Sangawar Pneumatics was built on the vision and hands-on engineering 
expertise of Mr. Pramod Sangawar — B.E. Mechanical, B.E. Electrical, 
M.I.I.E., and MBA. With dual engineering qualifications and decades 
of industrial experience, Mr. Sangawar established the company with 
a clear mandate: to engineer systems that actually solve industrial 
problems, not just meet a specification on paper.
                             <br /><br />
                            His forward-thinking approach led to the development of patented 
heatless dehumidification technology that delivers over 50% energy 
savings — technology that is now applied in pharmaceutical plants, 
food processing units, and industrial facilities across India. Mr. 
Sangawar's belief that energy efficiency and engineering precision 
are not mutually exclusive drives every product the company designs.
                             <br /><br />
                             Under his leadership, Sangawar Pneumatics has delivered critical 
engineering projects for ISRO (Chandrayaan III oil circulation 
system), BARC (radiation protection systems and SF6 gas handling), 
NPCIL (hydraulic platforms, gantry cranes, and load testing devices), 
and Mahindra Defence (decoy launching system for the Indian Navy). 
The company is now further strengthened by Mr. Pratik Sangawar — 
B.E. Electrical, Masters in Industrial Safety — bringing a new 
generation of engineering depth to the team.
                         </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}