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
            <h3 className="content_heading">
              Engineering Excellence in Pneumatics & Automation
            </h3>
            <p className="content_para">
                             Sangawar Pneumatics is a leading engineering company specializing in the design, manufacturing, and installation of advanced pneumatic, hydraulic, and process automation systems. With deep expertise across filtration, dehumidification, material handling, and process engineering, we deliver high-performance solutions tailored to diverse industrial applications.
                             <br /><br />
                             Founded by Mr. Pramod Sangawar, a qualified mechanical and electrical engineer with strong industry experience, the company is driven by innovation and technical excellence. Our patented heatless dehumidifier technology and energy-efficient systems are designed to provide superior performance while significantly reducing operational costs.
                             <br /><br />
                             Operating from our well-equipped facility in Vasai, we combine modern fabrication capabilities with engineering precision to deliver reliable and customized solutions. Our commitment is simple — to provide value-driven, high-quality systems that ensure complete customer satisfaction across every project we undertake.
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