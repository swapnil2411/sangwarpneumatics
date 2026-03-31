"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionHeading from "@/components/common/SectionHeading"

export default function Testimonials(){
    return(
        <div className="testimonial_wrapper">
            <div className="container">
                <SectionHeading title="What Our Clients Say" subtitle="Feedback" />
                <div className="testimonial_content sec_pad">
                    <Swiper
                modules={[Pagination, Navigation]}
                // autoplay={{ delay: 4000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
                className="h-full projects_swiper testimonial_swiper"
            >
                <SwiperSlide>
                            <div className="project_item testimonial_item">
                        <p className="testimonial_para">
                            "Sangawar Pneumatics has been an invaluable partner in our industrial operations. Their innovative solutions and commitment to quality have significantly improved our efficiency and reduced our operational costs. We highly recommend their services to any organization seeking reliable and cutting-edge engineering solutions."
                        </p>
                        <h4 className="testimonial_name">- John Doe, CEO of XYZ Industries</h4>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="project_item testimonial_item">
                        <p className="testimonial_para">
                            "The team at Sangawar Pneumatics is exceptional. Their expertise in pneumatics and automation has transformed our manufacturing processes, leading to increased productivity and enhanced performance. Their dedication to customer satisfaction is truly commendable."
                        </p>
                        <h4 className="testimonial_name">- Jane Smith, Operations Manager at ABC Corporation</h4>
                    </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="project_item testimonial_item">
                        <p className="testimonial_para">
                            "Working with Sangawar Pneumatics has been a game-changer for our business. Their innovative solutions and energy-efficient systems have not only improved our operational efficiency but also contributed to our sustainability goals. We are grateful for their partnership and look forward to continued success together."
                        </p>
                        <h4 className="testimonial_name">- Michael Johnson, Director of Engineering at DEF Manufacturing</h4>
                    </div>
                        </SwiperSlide>
            </Swiper>
                </div>
                
                {/* <div className="testimonial_content">
                    <div className="project_item testimonial_item">
                        <p className="testimonial_para">
                            "Sangawar Pneumatics has been an invaluable partner in our industrial operations. Their innovative solutions and commitment to quality have significantly improved our efficiency and reduced our operational costs. We highly recommend their services to any organization seeking reliable and cutting-edge engineering solutions."
                        </p>
                        <h4 className="testimonial_name">- John Doe, CEO of XYZ Industries</h4>
                    </div>
                    <div className="project_item testimonial_item">
                        <p className="testimonial_para">
                            "The team at Sangawar Pneumatics is exceptional. Their expertise in pneumatics and automation has transformed our manufacturing processes, leading to increased productivity and enhanced performance. Their dedication to customer satisfaction is truly commendable."
                        </p>
                        <h4 className="testimonial_name">- Jane Smith, Operations Manager at ABC Corporation</h4>
                    </div>
                    <div className="project_item testimonial_item">
                        <p className="testimonial_para">
                            "Working with Sangawar Pneumatics has been a game-changer for our business. Their innovative solutions and energy-efficient systems have not only improved our operational efficiency but also contributed to our sustainability goals. We are grateful for their partnership and look forward to continued success together."
                        </p>
                        <h4 className="testimonial_name">- Michael Johnson, Director of Engineering at DEF Manufacturing</h4>
                    </div>
                </div> */}
            </div>
        </div>
    )
}