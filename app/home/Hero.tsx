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
            title: "Engineering Precision.",
            subtitle: "Powering Performance.",
            desc: "Advanced Pneumatic, Hydraulic & Automation Solutions designed to maximize efficiency and reliability across industries.",
        },
        {
            image: "/assets/hero-01.png",
            title: "Smart Industrial Solutions",
            subtitle: "Built for Efficiency",
            desc: "Delivering high-performance systems tailored for modern industries.",
        },
        {
            image: "/assets/hero-01.png",
            title: "Innovation Meets Engineering",
            subtitle: "Future Ready Systems",
            desc: "Reliable, scalable, and energy-efficient engineering solutions.",
        },
    ];

    return (
        <section className="relative h-[50vh] md:h-[90vh]">
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
                            <img src={slide?.image} />
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