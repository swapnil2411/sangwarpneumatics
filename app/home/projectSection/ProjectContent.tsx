"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectContent(){
    const projectData = [
        "isro",
        "bmc",
        "npcil",
        "mahindra",
        "sameer",
        "barc"
    ]
    return(
        <div className="project_content_wrapper sec_pad">
            <Swiper
                modules={[Pagination, Navigation]}
                // autoplay={{ delay: 4000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
                className="h-full projects_swiper"
            >
                {
                    projectData?.map((item,index)=>(
                        <SwiperSlide key={index}>
                            <div className="project_item">
                                <img src={`/assets/${item}.png`} alt={item} />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}