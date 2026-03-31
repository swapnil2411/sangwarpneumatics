import SectionHeading from "@/components/common/SectionHeading";
export default function OurVision(){
    return(
        <div className="about_intro_wrapper">
                    <div className="container">
                        <SectionHeading title="Vision" subtitle="Our Vision" />
                        <div className="sec_pad about_us_area">
                            
                            <div className="content_area">
                                <p className="content_para">
                                    Our vision is to become a globally recognized and trusted leader in industrial engineering solutions, known for our commitment to innovation, quality, and sustainability. We aspire to set new benchmarks in pneumatic, hydraulic, and automation technologies by continuously evolving with industry advancements and developing cutting-edge, energy-efficient systems. By focusing on research, patented technologies, and customer-centric innovation, we aim to deliver solutions that drive industrial transformation and long-term value. We envision a future where our engineering excellence contributes to smarter, more efficient, and environmentally responsible industries, positioning Sangawar Pneumatics as a preferred partner for organizations seeking reliable and future-ready engineering solutions worldwide.
                                </p>
                            </div>
                            <div className="img_area">
                                <img src="/assets/our_vision.png" alt="about intro" />
                            </div>
                        </div>
                    </div>
                </div>
    )
}