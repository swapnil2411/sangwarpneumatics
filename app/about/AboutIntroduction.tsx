// import SectionHeading from "@/components/common/SectionHeading";

// export default function AboutIntroduction(){
//     return(
//         <div className="about_intro_wrapper">
//             <div className="container">
//                 <SectionHeading title="Our Story" subtitle="Our Story" />
//                 <div className="sec_pad about_us_area">
//                     <div className="content_area">
//                         <h3 className="content_heading">Engineering Excellence in Pneumatics & Automation</h3>
//                         <p className="content_para">
//                             Sangawar Pneumatics is a leading engineering company specializing in the design, manufacturing, and installation of advanced pneumatic, hydraulic, and process automation systems. With deep expertise across filtration, dehumidification, material handling, and process engineering, we deliver high-performance solutions tailored to diverse industrial applications.
//                             <br /><br />
//                             Founded by Mr. Pramod Sangawar, a qualified mechanical and electrical engineer with strong industry experience, the company is driven by innovation and technical excellence. Our patented heatless dehumidifier technology and energy-efficient systems are designed to provide superior performance while significantly reducing operational costs.
//                             <br /><br />
//                             Operating from our well-equipped facility in Vasai, we combine modern fabrication capabilities with engineering precision to deliver reliable and customized solutions. Our commitment is simple — to provide value-driven, high-quality systems that ensure complete customer satisfaction across every project we undertake.
//                         </p>
//                     </div>
//                     <div className="img_area">
//                         <img src="/assets/about_intro.png" alt="about intro" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

export default function AboutIntroduction() {
  return (
    <div className="about_intro_wrapper">
      <div className="container">

        <SectionHeading title="Our Story" subtitle="Our Story" />

        <div className="sec_pad about_us_area">

          {/* TEXT */}
          <motion.div
            className="content_area"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="content_heading">
              From a Single Vision to India's Trusted Industrial Engineering Partner
            </h2>
            <p className="content_para">
                             Sangawar Pneumatics was founded in 1998 with a single, clear purpose — 
to engineer industrial systems that solve real problems, reliably and 
efficiently. What began as a precision engineering venture in Vasai, 
Maharashtra has grown into a full-service industrial solutions company 
trusted by some of India's most critical organisations, including ISRO, 
BARC, NPCIL, and Mahindra Defence. We specialise in the design, manufacture, and installation of pneumatic 
systems, hydraulic systems, dehumidification systems, industrial 
filtration, process automation, and microwave drying solutions — all 
engineered in-house at our Vasai manufacturing facility in Palghar 
district.
                             <br /><br />
                             The company was founded by Mr. Pramod Sangawar — B.E. (Mechanical), 
B.E. (Electrical), M.I.I.E., and MBA (Personnel) — a dual-qualified 
engineer whose multi-discipline expertise became the foundation of 
everything Sangawar Pneumatics stands for. His patented heatless 
dehumidifier technology, which delivers over 50% energy savings over 
conventional systems, is a direct result of that engineering-first 
thinking — and a World Patent application has been filed.
                             <br /><br />
                             Today, Sangawar Pneumatics operates from a well-equipped manufacturing 
facility in Vasai, combining modern fabrication capabilities with 
precision engineering. Every system we deliver — from a compressed air 
dryer for a pharmaceutical plant to a 6-tonne SPND hydraulic handling 
platform for a nuclear facility — is designed, built, tested, and 
installed by our own team. No outsourcing. No compromise.
                         </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="img_area"
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src="/assets/about_intro.png" alt="about intro" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}