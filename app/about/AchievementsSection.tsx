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
  icon: string;
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
    icon: "🚀",
  },
  {
    badge: "NPCIL",
    tag:   "Nuclear Engineering",
    heading: "Nuclear Power Corporation — Multiple Critical Projects",
    body: "Delivered a 6-tonne SPND hydraulic handling platform with X-Y-Z axis movement, A-frame gantry crane, dynamic load testing device, and high-pressure valve testing equipment to NPCIL.",
    icon: "⚛️",
  },
  {
    badge: "BARC Trombay",
    tag:   "Nuclear & Atomic Research",
    heading: "Atomic Research Centre — Radiation & Gas Systems",
    body: "Supplied radiation protection shields, SF6 gas handling systems, and de-ionised water cooling systems for microwave and electronic equipment to Bhabha Atomic Research Centre, Trombay.",
    icon: "🛡️",
  },
  {
    badge: "Mahindra Defence — Indian Navy",
    tag:   "Defence Engineering",
    heading: "Decoy Launching System for Indian Navy",
    body: "Designed, manufactured, supplied, and tested a Decoy Launching System for the Indian Navy in collaboration with Mahindra Defence Systems — one of the most precision-critical projects in our history.",
    icon: "⚓",
  },
  {
    badge: "World Patent Applied",
    tag:   "Innovation & Patent",
    heading: "Patented Heatless Dehumidifier Technology",
    body: "Developed and patented a heatless dehumidifier technology delivering over 50% energy savings vs conventional systems. A World Patent application has been filed — making Sangawar Pneumatics one of the few Indian engineering SMEs with proprietary industrial IP.",
    icon: "💡",
  },
  {
    badge: "BIS Central Laboratory",
    tag:   "Quality & Standards",
    heading: "Trusted by Bureau of Indian Standards",
    body: "Supplied dust mask testing equipment (IS 9473) to the Bureau of Indian Standards Central Laboratory — the apex standardisation body in India. Also trusted by TUV Rheinland India and multiple NABL-accredited testing laboratories.",
    icon: "✅",
  },
  {
    badge: "MCGM Mumbai",
    tag:   "Municipal Infrastructure",
    heading: "Mumbai Municipal Corporation — Critical Infrastructure",
    body: "Revamped the pneumatically actuated Desurik Germany-make pump check valve (1,200mm diameter) and designed a handling system for pre-cast fibre glass lining for Mumbai's sewage infrastructure.",
    icon: "🏙️",
  },
  {
    badge: "SAMEER Mumbai",
    tag:   "Research & Electronics",
    heading: "Volume Compensation System — SAMEER",
    body: "Designed, manufactured, and installed a precision volume compensation system for temperature-driven volume variation for Society for Applied Microwave Electronics Engineering & Research, Mumbai.",
    icon: "🔬",
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