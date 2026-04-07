// import SectionHeading from "@/components/common/SectionHeading";
// export default function OurMission(){
//     return(
//         <div className="about_intro_wrapper">
//                     <div className="container">
//                         <SectionHeading title="Mission" subtitle="Our Mission" />
//                         <div className="sec_pad about_us_area mission_area">
//                             <div className="img_area">
//                                 <img src="/assets/our_mission.png" alt="about intro" />
//                             </div>
//                             <div className="content_area">
//                                 <p className="content_para">
//                                     Our mission is to design, develop, and deliver innovative, energy-efficient pneumatic, hydraulic, and automation solutions that empower industries to achieve higher productivity, reliability, and operational excellence. We are committed to combining advanced engineering practices with precision manufacturing to create systems that not only enhance performance but also significantly reduce operational costs and energy consumption. Through continuous innovation, technical expertise, and a customer-first approach, we aim to provide customized solutions that address complex industrial challenges. At Sangawar Pneumatics, we strive to build long-term partnerships by consistently delivering quality, reliability, and value-driven engineering solutions that exceed expectations and contribute to the sustainable growth of our clients.
//                                 </p>
//                             </div>
                            
//                         </div>
//                     </div>
//                 </div>
//     )
// }

"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";

export default function OurMission() {
  return (
    <div className="about_intro_wrapper">
      <div className="container">

        <SectionHeading title="Mission" subtitle="Our Mission" />

        <div className="sec_pad about_us_area mission_area">

          {/* IMAGE */}
          <motion.div
            className="img_area"
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src="/assets/our_mission.png" />
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
                 Our mission is to design, develop, and deliver innovative, energy-efficient pneumatic, hydraulic, and automation solutions that empower industries to achieve higher productivity, reliability, and operational excellence. We are committed to combining advanced engineering practices with precision manufacturing to create systems that not only enhance performance but also significantly reduce operational costs and energy consumption. Through continuous innovation, technical expertise, and a customer-first approach, we aim to provide customized solutions that address complex industrial challenges. At Sangawar Pneumatics, we strive to build long-term partnerships by consistently delivering quality, reliability, and value-driven engineering solutions that exceed expectations and contribute to the sustainable growth of our clients.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}