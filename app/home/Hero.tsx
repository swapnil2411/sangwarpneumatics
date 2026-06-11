// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import Link from "next/link";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Button from "@/components/common/Button";

// export default function Hero() {
//     const slides = [
//         {
//             image: "/assets/hero-01.webp",
//             imageSrcSet: `
//                 /assets/hero-01-600.webp 600w,
//                 /assets/hero-01-960.webp 960w,
//                 /assets/hero-01.webp 1920w
//             `,
//             altText: "Industrial engineer operating pneumatic equipment at Sangawar Pneumatics manufacturing facility in Vasai, Maharashtra",
//             title: "India's Trusted Manufacturer.",
//             subtitle: "Pneumatics. Hydraulics. Results.",
//             desc: "Compressed air dryers, hydraulic systems & dehumidifiers — engineered in Vasai since 1998.",
//         },
//         {
//             image: "/assets/hero-02.webp",
//             imageSrcSet: `
//                 /assets/hero-02-600.webp 600w,
//                 /assets/hero-02-960.webp 960w,
//                 /assets/hero-02.webp 1920w
//             `,
//             altText: "Skilled technician working on hydraulic automation system manufactured by Sangawar Pneumatics, trusted by ISRO and BARC",
//             title: "50% Energy Savings.",
//             subtitle: "Patented Dehumidification Technology.",
//             desc: "Custom-engineered systems trusted by ISRO, BARC & NPCIL across India.",
//         },
//         {
//             image: "/assets/hero-03.webp",
//             imageSrcSet: `
//                 /assets/hero-03-600.webp 600w,
//                 /assets/hero-03-960.webp 960w,
//                 /assets/hero-03.webp 1920w
//             `,
//             altText: "Sangawar Pneumatics engineer assembling custom industrial solution — 25 years of pneumatic and hydraulic engineering expertise",
//             title: "25 Years. 49+ Industries.",
//             subtitle: "Zero Compromise on Quality.",
//             desc: "Compressed air dryers to hydraulic cylinders — built to your exact specification.",
//         },
//     ];

//     return (
//         <section className="relative h-[80vh] md:h-[90vh]">
//             <Swiper
//                 modules={[Pagination, Navigation]}
//                 loop={true}
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 className="h-full"
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="slider">
//                             <img
//                                 src={slide.image}
//                                 srcSet={slide.imageSrcSet}
//                                 sizes="
//                                     (max-width: 600px) 600px,
//                                     (max-width: 960px) 960px,
//                                     1920px
//                                 "
//                                 alt={slide.altText}
//                                 width={1920}
//                                 height={980}
//                                 loading={index === 0 ? "eager" : "lazy"}
//                                 fetchPriority={index === 0 ? "high" : "low"}
//                             />
//                             <div className="slider_content container">
//                                 <h2 className="hero_title">
//                                     {slide.title} <br />
//                                     {slide.subtitle}
//                                 </h2>
//                                 <p className="hero_desc">{slide.desc}</p>
//                                 <Link href="/contact">
//                                     <Button btnVariant="fill_btn">
//                                         Get a Quote
//                                     </Button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Button from "@/components/common/Button";

export default function Hero() {
  const slides = [
    {
      type: "video",
      video: "https://res.cloudinary.com/dckbp1n30/video/upload/v1781177167/136511-764417302_medium_qe3hdm.mp4",
    //   video: "https://res.cloudinary.com/dckbp1n30/video/upload/v1781176391/sangawar_video_02_vi2lys.mp4",
      poster: "/assets/hero-01.webp",

      altText:
        "Industrial engineer operating pneumatic equipment at Sangawar Pneumatics manufacturing facility in Vasai, Maharashtra",

      title: "India's Trusted Manufacturer.",
      subtitle: "<span>Pneumatics. Hydraulics. Results.</span>",

      desc: "Compressed air dryers, hydraulic systems & dehumidifiers — engineered in Vasai since 1998.",
    },

    {
      type: "video",
      video: "https://res.cloudinary.com/dckbp1n30/video/upload/v1781176391/sangawar_video_02_vi2lys.mp4",
      // video: "https://res.cloudinary.com/dckbp1n30/video/upload/v1781177167/136511-764417302_medium_qe3hdm.mp4",
      poster: "/assets/hero-02.webp",

      imageSrcSet: `
        /assets/hero-02-600.webp 600w,
        /assets/hero-02-960.webp 960w,
        /assets/hero-02.webp 1920w
      `,

      altText:
        "Skilled technician working on hydraulic automation system manufactured by Sangawar Pneumatics, trusted by ISRO and BARC",

      title: "50% Energy Savings.",
      subtitle: "<span>Patented Dehumidification Technology.</span>",

      desc: "Custom-engineered systems trusted by ISRO, BARC & NPCIL across India.",
    },

    {
      type: "image",
      image: "/assets/hero-03.webp",

      imageSrcSet: `
        /assets/hero-03-600.webp 600w,
        /assets/hero-03-960.webp 960w,
        /assets/hero-03.webp 1920w
      `,

      altText:
        "Sangawar Pneumatics engineer assembling custom industrial solution — 25 years of pneumatic and hydraulic engineering expertise",

      title: "25 Years. 49+ Industries.",
      subtitle: "<span>Zero Compromise on Quality.</span>",

      desc: "Compressed air dryers to hydraulic cylinders — built to your exact specification.",
    },
  ];

  return (
    <section className="relative h-[100vh]">
      <Swiper
        modules={[
          Pagination,
          Navigation,
          Autoplay,
        ]}
        loop
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider relative h-full overflow-hidden">
              {/* Background Media */}

              {slide.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={slide.poster}
                  className="hero-media"
                  width={1920}
                  height={980}
                >
                  <source
                    src={slide.video}
                    type="video/mp4"
                  />
                </video>
              ) : (
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
                  loading={
                    index === 0
                      ? "eager"
                      : "lazy"
                  }
                  fetchPriority={
                    index === 0
                      ? "high"
                      : "low"
                  }
                  className="hero-media"
                />
              )}

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/40 z-[1]" />

              {/* Content */}

              <div className="slider_content container absolute inset-0 z-[2] flex flex-col justify-center">
                <h2 className="hero_title">
                  {slide.title}
                  <br />
                  <span
    dangerouslySetInnerHTML={{
      __html: slide.subtitle,
    }}
  />
                </h2>

                <p className="hero_desc">
                  {slide.desc}
                </p>

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