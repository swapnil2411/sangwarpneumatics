"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "@/components/common/Button";

export default function Hero() {
    const slides = [
        {
            image: "/assets/hero-01.png",
            altText: "Industrial engineer operating pneumatic equipment at Sangawar Pneumatics manufacturing facility in Vasai, Maharashtra",
            title: "India's Trusted Manufacturer.",
            subtitle: "Pneumatics. Hydraulics. Results.",
            desc: "Compressed air dryers, hydraulic systems & dehumidifiers — engineered in Vasai since 1998.",
        },
        {
            image: "/assets/hero-01.png",
            altText: "Skilled technician working on hydraulic automation system manufactured by Sangawar Pneumatics, trusted by ISRO and BARC",
            title: "50% Energy Savings.",
            subtitle: "Patented Dehumidification Technology.",
            desc: "Custom-engineered systems trusted by ISRO, BARC & NPCIL across India.",
        },
        {
            image: "/assets/hero-01.png",
            altText: "Sangawar Pneumatics engineer assembling custom industrial solution — 25 years of pneumatic and hydraulic engineering expertise",
            title: "25 Years. 49+ Industries.",
            subtitle: "Zero Compromise on Quality.",
            desc: "compressed air dryers to hydraulic cylinders — built to your exact specification.",
        },
    ];

    return (
        <section className="relative h-[80vh] md:h-[90vh]">
            <Swiper
                modules={[Pagination, Navigation]}
                // autoplay={{ delay: 4000 }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider">
                            <img src={slide?.image} alt={slide?.altText} />
                            <div className="slider_content container">
                                
                                    <h2 className="hero_title">
                                        {slide?.title} <br />
                                        {slide?.subtitle}
                                    </h2>
                                    <p className="hero_desc">{slide?.desc}</p>
                                    {/* <button className="hero_btn">
                                        Get a Quote
                                    </button> */}
                                    <Button btnVariant="fill_btn hero_btn">
                                        Get a Quote
                                    </Button>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}