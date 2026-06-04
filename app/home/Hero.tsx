"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "@/components/common/Button";

export default function Hero() {
    const slides = [
        {
            image: "/assets/hero-01.webp",
            imageSrcSet: `
                /assets/hero-01-600.webp 600w,
                /assets/hero-01-960.webp 960w,
                /assets/hero-01.webp 1920w
            `,
            altText: "Industrial engineer operating pneumatic equipment at Sangawar Pneumatics manufacturing facility in Vasai, Maharashtra",
            title: "India's Trusted Manufacturer.",
            subtitle: "Pneumatics. Hydraulics. Results.",
            desc: "Compressed air dryers, hydraulic systems & dehumidifiers — engineered in Vasai since 1998.",
        },
        {
            image: "/assets/hero-02.webp",
            imageSrcSet: `
                /assets/hero-02-600.webp 600w,
                /assets/hero-02-960.webp 960w,
                /assets/hero-02.webp 1920w
            `,
            altText: "Skilled technician working on hydraulic automation system manufactured by Sangawar Pneumatics, trusted by ISRO and BARC",
            title: "50% Energy Savings.",
            subtitle: "Patented Dehumidification Technology.",
            desc: "Custom-engineered systems trusted by ISRO, BARC & NPCIL across India.",
        },
        {
            image: "/assets/hero-03.webp",
            imageSrcSet: `
                /assets/hero-03-600.webp 600w,
                /assets/hero-03-960.webp 960w,
                /assets/hero-03.webp 1920w
            `,
            altText: "Sangawar Pneumatics engineer assembling custom industrial solution — 25 years of pneumatic and hydraulic engineering expertise",
            title: "25 Years. 49+ Industries.",
            subtitle: "Zero Compromise on Quality.",
            desc: "Compressed air dryers to hydraulic cylinders — built to your exact specification.",
        },
    ];

    return (
        <section className="relative h-[80vh] md:h-[90vh]">
            <Swiper
                modules={[Pagination, Navigation]}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="slider">
                            <img
                                src={slide.image}
                                srcSet={slide.imageSrcSet}
                                sizes="
                                    (max-width: 600px) 600px,
                                    (max-width: 960px) 960px,
                                    1920px
                                "
                                alt={slide.altText}
                                width={1920}
                                height={980}
                                loading={index === 0 ? "eager" : "lazy"}
                                fetchPriority={index === 0 ? "high" : "low"}
                            />
                            <div className="slider_content container">
                                <h2 className="hero_title">
                                    {slide.title} <br />
                                    {slide.subtitle}
                                </h2>
                                <p className="hero_desc">{slide.desc}</p>
                                <Link href="/contact">
                                    <Button btnVariant="fill_btn">
                                        Get a Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}