// app/about/AchievementsSection.tsx

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";

// ─── TYPES ────────────────────────────────────────────────────────────────────
type EventImage = {
  src: string;
  alt: string;
};

type EventItem = {
  id: string;
  title: string;
  year: string;
  columns: 2 | 3;
  description: string;
  tag: string;
  color: string;
  images: EventImage[];
};

type AchievementItem = {
  badge: string;
  tag: string;
  heading: string;
  body: string;
  icon: React.ReactNode;
};

type StatItem = {
  number: string;
  label: string;
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const stats: StatItem[] = [
  { number: "25+",  label: "Years of Engineering Excellence" },
  { number: "49+",  label: "Prestigious Industry Clients"    },
  { number: "6",    label: "Critical Government Organisations Served" },
  { number: "50%+", label: "Energy Savings — Patented Tech"  },
];

const achievements: AchievementItem[] = [
  {
    badge: "ISRO — Chandrayaan III",
    tag:   "Space & Defence Engineering",
    heading: "Chandrayaan III Space Mission",
    body: "Designed, manufactured, and installed the oil circulation system for a high-voltage transformer used in India's historic Chandrayaan III lunar mission — in collaboration with ISRO Bangalore.",
    icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#0952ba" d="M10.83 7.11c2.238-2.523 5.72-3.61 8.92-3.61a.75.75 0 0 1 .75.75c0 3.2-1.087 6.682-3.61 8.92c-.061 1.016-.375 2.033-.824 2.926c-.5.994-1.195 1.887-1.973 2.478c-.761.578-1.745.963-2.717.601c-.92-.343-1.54-1.25-1.9-2.538l-2.113-2.114c-1.288-.359-2.195-.979-2.538-1.899c-.362-.972.023-1.956.601-2.717c.591-.778 1.484-1.473 2.478-1.973c.893-.449 1.91-.763 2.925-.823M9.5 8.892a7 7 0 0 0-.922.383c-.836.421-1.533.982-1.957 1.54c-.437.576-.493 1.01-.39 1.286c.083.226.352.557 1.094.836c.169-.379.412-.903.717-1.504c.388-.763.882-1.66 1.458-2.54m1.564 7.784c.278.742.61 1.01.836 1.095c.275.102.71.046 1.286-.39c.558-.425 1.119-1.122 1.54-1.958q.227-.451.383-.922a27 27 0 0 1-2.54 1.458c-.602.305-1.126.548-1.505.717m-6.029-.672a2.144 2.144 0 0 1 2.848.088l.009.01c.799.79.786 2.054.103 2.865c-.295.352-.698.606-1.077.792c-.387.19-.804.333-1.175.44a11 11 0 0 1-1.358.295l-.024.003l-.008.001H4.35a.75.75 0 0 1-.843-.842v-.003l.001-.008l.004-.024a7 7 0 0 1 .066-.389c.047-.251.121-.596.228-.971a7.3 7.3 0 0 1 .439-1.178c.185-.38.439-.783.79-1.08M15.687 8.22a.75.75 0 0 0-1.06 0l-.707.707a.75.75 0 0 0 1.06 1.06l.707-.707a.75.75 0 0 0 0-1.06" />
</svg>),
  },
  {
    badge: "NPCIL",
    tag:   "Nuclear Engineering",
    heading: "Nuclear Power Corporation — Multiple Critical Projects",
    body: "Delivered a 6-tonne SPND hydraulic handling platform with X-Y-Z axis movement, A-frame gantry crane, dynamic load testing device, and high-pressure valve testing equipment to NPCIL.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
	<path d="M0 0h15v15H0z" fill="none" />
	<path fill="#0952ba" fillRule="evenodd" d="M5.315 1.837c-.4-.116-.695-.085-.91.032c-.216.116-.404.347-.526.745c-.122.401-.163.936-.104 1.582q.015.157.037.321a14 14 0 0 1 1.676-.311a13 13 0 0 1 1.275-1.54l-.066-.053c-.508-.402-.98-.66-1.382-.776m2.185.14q-.09-.076-.182-.148C6.746 1.377 6.16 1.04 5.594.876C5.024.711 4.441.711 3.928.99s-.833.767-1.005 1.334c-.172.564-.21 1.238-.144 1.965q.023.255.065.523q-.256.09-.49.192c-.671.287-1.246.642-1.66 1.062C.278 6.487 0 7 0 7.584S.278 8.68.694 9.103c.414.42.989.774 1.66 1.062q.235.1.49.192a9 9 0 0 0-.065.523c-.066.726-.028 1.4.144 1.965c.172.567.492 1.056 1.005 1.333c.513.278 1.097.279 1.666.114c.566-.165 1.152-.5 1.724-.953l.182-.149q.09.076.182.149c.572.452 1.158.788 1.724.953c.569.165 1.153.164 1.666-.114c.513-.277.833-.766 1.005-1.333c.172-.564.21-1.239.144-1.965a9 9 0 0 0-.065-.523q.255-.09.49-.192c.671-.288 1.246-.643 1.66-1.062c.416-.422.694-.936.694-1.52c0-.582-.278-1.096-.694-1.518c-.414-.42-.989-.775-1.66-1.062a9 9 0 0 0-.49-.192q.04-.268.065-.523c.066-.727.028-1.4-.144-1.965c-.172-.567-.492-1.056-1.005-1.334S9.975.711 9.406.876c-.566.164-1.152.5-1.724.953zm0 1.365q-.338.346-.672.755a17 17 0 0 1 1.344 0a11 11 0 0 0-.672-.755m2.012.864c-.41-.574-.84-1.092-1.275-1.54l.065-.053c.51-.402.98-.66 1.383-.776c.399-.116.695-.085.91.032c.216.116.404.347.525.745c.122.401.164.936.105 1.582q-.015.158-.037.32a14 14 0 0 0-1.676-.31m-.563.944a15.6 15.6 0 0 0-2.898 0A15.6 15.6 0 0 0 4.72 7.584a15.7 15.7 0 0 0 1.33 2.433a15.6 15.6 0 0 0 2.9 0a15.6 15.6 0 0 0 1.33-2.433A15.7 15.7 0 0 0 8.95 5.15m1.824 1.138a17 17 0 0 0-.527-.956q.39.075.752.168q-.094.385-.225.788m0 2.591a17 17 0 0 1-.527.957q.39-.075.752-.169a12 12 0 0 0-.225-.788m1.18.487a14 14 0 0 0-.588-1.782c.246-.61.443-1.209.588-1.782q.154.058.3.12c.596.256 1.047.547 1.341.845c.292.296.406.572.406.817s-.114.52-.406.816c-.294.299-.745.59-1.341.846a8 8 0 0 1-.3.12m-.765 1.285a14 14 0 0 1-1.676.311c-.41.574-.84 1.091-1.275 1.54l.066.052c.508.403.98.66 1.382.777c.399.116.695.085.91-.032s.404-.348.525-.746c.123-.4.164-.936.105-1.582a7 7 0 0 0-.037-.32M7.5 11.826q.338-.346.672-.755a17 17 0 0 1-1.344 0q.334.408.672.755m-2.746-1.99a17 17 0 0 1-.527-.957q-.13.404-.225.788q.361.094.752.169m-.942.815a14 14 0 0 0 1.676.311c.41.574.839 1.091 1.275 1.54l-.066.052c-.508.403-.98.66-1.382.777c-.4.116-.695.085-.911-.032s-.403-.348-.525-.746c-.122-.4-.163-.936-.104-1.582a8 8 0 0 1 .037-.32m-.765-1.285c.145-.574.341-1.172.588-1.782a14 14 0 0 1-.588-1.782q-.155.058-.3.12c-.596.256-1.047.547-1.341.845c-.292.296-.406.572-.406.817s.114.52.406.816c.294.299.745.59 1.341.846q.146.061.3.12m.955-3.865q.094.384.225.787a17 17 0 0 1 .527-.956q-.39.075-.752.169M6 7.584a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clipRule="evenodd" />
</svg>
),
  },
  {
    badge: "BARC Trombay",
    tag:   "Nuclear & Atomic Research",
    heading: "Atomic Research Centre — Radiation & Gas Systems",
    body: "Supplied radiation protection shields, SF6 gas handling systems, and de-ionised water cooling systems for microwave and electronic equipment to Bhabha Atomic Research Centre, Trombay.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#0952ba" d="m20.42 6.11l-7.97-4c-.28-.14-.62-.14-.9 0l-7.97 4c-.31.15-.51.45-.55.79c-.01.11-.96 10.77 8.55 15.01a.98.98 0 0 0 .82 0C21.91 17.66 20.97 7 20.95 6.9a.98.98 0 0 0-.55-.79Z" />
</svg>
),
  },
  {
    badge: "Mahindra Defence — Indian Navy",
    tag:   "Defence Engineering",
    heading: "Decoy Launching System for Indian Navy",
    body: "Designed, manufactured, supplied, and tested a Decoy Launching System for the Indian Navy in collaboration with Mahindra Defence Systems — one of the most precision-critical projects in our history.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#0952ba" d="m19 11l-3 4h1.91c-.44 2.47-2.44 4.47-4.91 4.91V11h3V9h-3V7.81c1.15-.43 2-1.55 2-2.83c0-1.64-1.35-2.97-3-2.97S9 3.34 9 4.98c0 1.29.85 2.41 2 2.83V9H8v2h3v8.91c-2.47-.44-4.47-2.44-4.91-4.91H8l-3-4l-3 4h2.07C4.58 18.88 8 22 12 22s7.42-3.12 7.93-7H22zm-7-7c.54 0 1 .45 1 .97S12.53 6 12 6s-1-.48-1-1.03s.46-.97 1-.97" />
</svg>
),
  },
  {
    badge: "World Patent Applied",
    tag:   "Innovation & Patent",
    heading: "Patented Heatless Dehumidifier Technology",
    body: "Developed and patented a heatless dehumidifier technology delivering over 50% energy savings vs conventional systems. A World Patent application has been filed — making Sangawar Pneumatics one of the few Indian engineering SMEs with proprietary industrial IP.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
	<path d="M0 0h512v512H0z" fill="none" />
	<path fill="#0952ba" fillRule="evenodd" d="M256 106.666c70.693 0 128 57.308 128 128c0 47.378-25.74 88.744-64 110.876v81.124L298.667 448h-21.333c0 11.782-9.552 21.333-21.334 21.333s-21.333-9.551-21.333-21.333h-21.333L192 426.666v-81.124c-38.26-22.132-64-63.498-64-110.876c0-70.692 57.308-128 128-128m21.335 254.23a129 129 0 0 1-21.335 1.77c-7.269 0-14.396-.606-21.334-1.77l.001 44.437h42.667zm-138.243-31.949l22.627 22.628l-45.254 45.254l-22.628-22.627zm233.817 0l45.254 45.255l-22.627 22.627l-45.255-45.254zm96.425-110.28v32h-64v-32zm-362.667 0v32h-64v-32zm288.87-146.164l22.626 22.628l-45.254 45.254l-22.628-22.627zm-279.072 0l45.254 45.255l-22.627 22.627l-45.255-45.254zM272 21.333v64h-32v-64z" />
</svg>
),
  },
  {
    badge: "BIS Central Laboratory",
    tag:   "Quality & Standards",
    heading: "Trusted by Bureau of Indian Standards",
    body: "Supplied dust mask testing equipment (IS 9473) to the Bureau of Indian Standards Central Laboratory — the apex standardisation body in India. Also trusted by TUV Rheinland India and multiple NABL-accredited testing laboratories.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#0952ba" d="m10.6 16.2l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" />
</svg>
),
  },
  {
    badge: "MCGM Mumbai",
    tag:   "Municipal Infrastructure",
    heading: "Mumbai Municipal Corporation — Critical Infrastructure",
    body: "Revamped the pneumatically actuated Desurik Germany-make pump check valve (1,200mm diameter) and designed a handling system for pre-cast fibre glass lining for Mumbai's sewage infrastructure.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path d="M0 0h16v16H0z" fill="none" />
	<path fill="#0952ba" fillRule="evenodd" d="M2 2h7v5h5v7H2zm3 3.5H4v-1h1zm2 0H6v-1h1zm-3 3h1v-1H4zm3 0H6v-1h1zm-3 3h1v-1H4zm3 0H6v-1h1zM8 9v4h1v-3h2v3h1V9z" clipRule="evenodd" />
</svg>
),
  },
  {
    badge: "SAMEER Mumbai",
    tag:   "Research & Electronics",
    heading: "Volume Compensation System — SAMEER",
    body: "Designed, manufactured, and installed a precision volume compensation system for temperature-driven volume variation for Society for Applied Microwave Electronics Engineering & Research, Mumbai.",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="#0952ba" d="m15.707 4.293l3 3a1 1 0 0 1 0 1.414l-1.553 1.555a7 7 0 0 1-.256 9.74L19 20a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2v1h4a5 5 0 0 0 3.737-8.323l-3.03 3.03a1 1 0 0 1-1.414 0l-.793-.792l-.793.792a1 1 0 1 1-1.414-1.414l.792-.793l-.792-.793a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0m2-2l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 1 1 1.414-1.414" />
</svg>
),
  },
];

const events: EventItem[] = [
  {
    id:          "innovative-scientist",
    title:       "Innovative Scientist Award",
    year:        "2023",
    columns:     2,
    tag:         "Award & Recognition",
    color:       "#0952ba",
    description:
      "Mr. Pramod Sangawar honoured with the Innovative Scientist Award by Lions International District 3231-A2 in recognition of pioneering patented heatless dehumidifier technology and 25+ years of contribution to industrial engineering in India.",
    images: [
      {
        src: "/assets/events/innovative-scientist-1.png",
        alt: "Mr. Pramod Sangawar receiving the Innovative Scientist Award at Lions International District 3231-A2 ceremony",
      },
      {
        src: "/assets/events/innovative-scientist-2.png",
        alt: "Innovative Scientist Award 2023 — Sangawar Pneumatics founder Pramod Sangawar on stage with award committee",
      },
      {
        src: "/assets/events/innovative-scientist-3.png",
        alt: "Lions International Innovative Scientist Award certificate presented to Mr. Pramod Sangawar, Sangawar Pneumatics",
      },
      {
        src: "/assets/events/innovative-scientist-4.png",
        alt: "Award felicitation ceremony — Mr. Pramod Sangawar with Lions International District officials",
      },
    ],
  },
  {
    id:          "prant-adhivakta",
    title:       "Prant Adhivakta Karyashala",
    year:        "2026",
    columns:     3,
    tag:         "Industry Event",
    color:       "#0952ba",
    description:
      "Sangawar Pneumatics participated in the Prant Adhivakta Karyashala 2024 — a regional industry and advocacy workshop bringing together engineering leaders, industry representatives, and policymakers across Maharashtra to drive industrial growth.",
    images: [
      {
        src: "/assets/events/prant-adhivakta-1.png",
        alt: "Sangawar Pneumatics at Prant Adhivakta Karyashala 2024 — regional industrial engineering advocacy workshop Maharashtra",
      },
      {
        src: "/assets/events/prant-adhivakta-2.png",
        alt: "Mr. Pramod Sangawar at Prant Adhivakta Karyashala 2024 regional workshop — industrial engineering leadership event",
      },
      {
        src: "/assets/events/prant-adhivakta-3.png",
        alt: "Prant Adhivakta Karyashala 2024 award ceremony — Sangawar Pneumatics recognised at Maharashtra regional event",
      },
      {
        src: "/assets/events/prant-adhivakta-4.png",
        alt: "Prant Adhivakta Karyashala 2024 — Sangawar Pneumatics team at regional industry conference Maharashtra",
      },
      {
        src: "/assets/events/prant-adhivakta-5.png",
        alt: "Prant Adhivakta Karyashala trophy — Sangawar Pneumatics recognised for engineering excellence at Maharashtra event",
      },
    ],
  },
];

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
interface LightboxProps {
  images:      EventImage[];
  activeIndex: number;
  onClose:     () => void;
  onPrev:      () => void;
  onNext:      () => void;
}

function Lightbox({ images, activeIndex, onClose, onPrev, onNext }: LightboxProps) {
  // Close on Escape key
  if (typeof window !== "undefined") {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey, { once: true });
  }

  return (
    <AnimatePresence>
      <motion.div
        className="ach_lightbox_overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        <motion.div
          className="ach_lightbox_box"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1,    opacity: 1 }}
          exit={{    scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            className="ach_lightbox_close"
            onClick={onClose}
            aria-label="Close image viewer"
          >
            ✕
          </button>

          {/* Main image */}
          <div className="ach_lightbox_img_wrap">
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="ach_lightbox_img"
              sizes="90vw"
              priority
            />
          </div>

          {/* Caption */}
          <p className="ach_lightbox_caption">
            {images[activeIndex].alt}
          </p>

          {/* Navigation */}
          <div className="ach_lightbox_nav">
            <button
              className="ach_lightbox_btn"
              onClick={onPrev}
              aria-label="Previous image"
              disabled={activeIndex === 0}
            >
              ← Prev
            </button>
            <span className="ach_lightbox_counter">
              {activeIndex + 1} / {images.length}
            </span>
            <button
              className="ach_lightbox_btn"
              onClick={onNext}
              aria-label="Next image"
              disabled={activeIndex === images.length - 1}
            >
              Next →
            </button>
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="ach_lightbox_thumbs">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`ach_lightbox_thumb ${i === activeIndex ? "active" : ""}`}
                  onClick={() => {
                    // bubble up to parent via onPrev/onNext equivalent
                    const diff = i - activeIndex;
                    if (diff > 0) for (let j = 0; j < diff; j++) onNext();
                    else          for (let j = 0; j < -diff; j++) onPrev();
                  }}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="80px"
                    className="ach_lightbox_thumb_img"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── EVENT GALLERY CARD ───────────────────────────────────────────────────────
function EventGalleryCard({ event }: { event: EventItem }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImg,    setActiveImg]    = useState(0);

  const maxVisible   = event.columns;
  const visibleImages = event.images.slice(0, maxVisible);
  const hiddenCount   = event.images.length - maxVisible;

  function openLightbox(index: number) {
    setActiveImg(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <motion.article
        className="ach_event_card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        itemScope
        itemType="https://schema.org/Event"
      >
        {/* Header */}
        <div
          className="ach_event_header"
          style={{ borderLeftColor: event.color }}
        >
          <span
            className="ach_event_tag"
            style={{ background: event.color }}
          >
            {event.tag}
          </span>
          <h3 className="ach_event_title" itemProp="name">
            {event.title}
          </h3>
          <p className="ach_event_year">📅 {event.year}</p>
        </div>

        {/* Description */}
        <p className="ach_event_desc" itemProp="description">
          {event.description}
        </p>

        {/* Image grid */}
        <div
          className="ach_event_gallery_grid"
          style={{
            gridTemplateColumns: `repeat(${event.columns}, 1fr)`,
          }}
        >
          {visibleImages.map((img, i) => {
            const isLastVisible   = i === visibleImages.length - 1;
            const showMoreOverlay = isLastVisible && hiddenCount > 0;

            return (
              <button
                key={i}
                className="ach_event_img_btn"
                onClick={() => openLightbox(i)}
                aria-label={`View photo: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="ach_event_img"
                />

                {showMoreOverlay ? (
                  <span className="ach_event_more_overlay">
                    +{hiddenCount} more
                  </span>
                ) : (
                  <span className="ach_event_img_overlay">
                    <span className="ach_event_zoom_icon">🔍</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* View all */}
        <button
          className="ach_event_view_all"
          onClick={() => openLightbox(0)}
          style={{ color: event.color, borderColor: event.color }}
        >
          View All Photos ({event.images.length})
        </button>
      </motion.article>

      {lightboxOpen && (
        <Lightbox
          images={event.images}
          activeIndex={activeImg}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setActiveImg((i) => Math.max(0, i - 1))}
          onNext={() => setActiveImg((i) => Math.min(event.images.length - 1, i + 1))}
        />
      )}
    </>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function AchievementsSection() {
  return (
    <section
      className="ach_wrapper sec_pad"
      aria-label="Awards and Achievements"
    >
      <div className="container">

        {/* Section heading */}
        <SectionHeading
          title="Our Achievements"
          subtitle="Achievements"
        />

        {/* Intro */}
        <motion.div
          className="ach_intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="ach_h2">
            25 Years of Engineering Milestones That Speak for Themselves
          </h2>
          <p className="ach_subtext">
            Since 1998, Sangawar Pneumatics has earned its reputation not
            through awards on a shelf — but through systems that power
            India's space missions, nuclear facilities, and defence
            operations. Here are the milestones that define who we are.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="ach_stats_row">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="ach_stat_card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="ach_stat_number">{stat.number}</span>
              <span className="ach_stat_label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Achievement cards */}
        <div className="ach_cards_grid">
          {achievements.map((item, i) => (
            <motion.article
              key={i}
              className="ach_card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/Event"
            >
              <div className="ach_card_icon" aria-hidden="true">
                {item.icon}
              </div>
              <span className="ach_card_badge">{item.badge}</span>
              <h3 className="ach_card_heading" itemProp="name">
                {item.heading}
              </h3>
              <p className="ach_card_body" itemProp="description">
                {item.body}
              </p>
              <span className="ach_card_tag">{item.tag}</span>
            </motion.article>
          ))}
        </div>

        {/* Events gallery */}
        <motion.div
          className="ach_events_section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="ach_events_heading">
            Awards & Events — In the Field
          </h2>
          <p className="ach_events_subtext">
            Beyond the factory floor, Sangawar Pneumatics actively
            participates in industry events, advocacy workshops, and
            recognition platforms — representing Indian engineering
            excellence at every level.
          </p>

          <div className="ach_events_grid">
            {events.map((event) => (
              <EventGalleryCard key={event.id} event={event} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}