import PageBanner from "@/components/common/PageBanner";
import AboutIntroduction from "./AboutIntroduction";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import FoundersSection from "./FoundersSection";
import Testimonials from "./Testimonials";
import AchievementsSection from "./AchievementsSection";
import { Metadata } from "next";

// ✅ Add this — Next.js reads this automatically
export const metadata: Metadata = {
  title: "About Sangawar Pneumatics | Engineers Since 1998 | Vasai",
  description:
    "Learn about Sangawar Pneumatics — Vasai-based manufacturers of pneumatic, hydraulic & dehumidification systems. Trusted by ISRO, BARC & NPCIL since 1998.",
  keywords: [
    "pneumatic systems manufacturer India",
    "hydraulic systems manufacturer Vasai",
    "industrial engineering company Maharashtra",
    "compressed air dryer manufacturer",
    "dehumidification systems India",
    "Sangawar Pneumatics about",
  ],
  alternates: {
    canonical: "https://sangawar.in/about",
  },
  openGraph: {
    title: "About Sangawar Pneumatics | Engineers Since 1998",
    description:
      "25+ years of industrial engineering excellence. Trusted by ISRO, BARC & NPCIL. Manufacturers of pneumatic, hydraulic & dehumidification systems in Vasai.",
    url: "https://sangawar.in/about",
    siteName: "Sangawar Pneumatics",
    images: [
      {
        url: "https://sangawar.in/assets/about_intro.png",
        width: 1200,
        height: 630,
        alt: "Sangawar Pneumatics manufacturing facility — industrial engineering company in Vasai, Maharashtra",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sangawar Pneumatics | Engineers Since 1998",
    description:
      "25+ years of industrial engineering. Trusted by ISRO, BARC & NPCIL. Pneumatic, hydraulic & dehumidification systems — Vasai, Maharashtra.",
    images: ["https://sangawar.in/assets/about_intro.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function About(){
    return(
        <>
            <PageBanner title="About Us" />
            <AboutIntroduction />
            <OurMission />
            <OurVision />
            <FoundersSection />
            <AchievementsSection />
            <Testimonials />
        </>
    )
}