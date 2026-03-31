import SectionHeading from "@/components/common/SectionHeading";
export default function FoundersSection() {
    return (
        <div className="about_intro_wrapper founder_wrapper">
            <div className="container">
                <SectionHeading title="Founder" subtitle="Founder" />
                <div className="sec_pad about_us_area mission_area">
                    <div className="img_area">
                        <img src="/assets/founder.png" alt="Founder" />
                    </div>
                    <div className="content_area">
                        <p className="content_para">
                            At the heart of Sangawar Pneumatics lies the vision and leadership of <b>Mr. Pramod Sangawar</b>, a highly skilled engineer with a strong foundation in both mechanical and electrical engineering. With years of hands-on industry experience and a deep understanding of industrial systems, he established the company with a clear purpose — to deliver innovative, reliable, and energy-efficient engineering solutions that solve real-world industrial challenges.
                            <br /><br />
                            Driven by a passion for engineering excellence and continuous innovation, Mr. Sangawar has played a pivotal role in developing advanced systems across pneumatics, hydraulics, filtration, and automation. His forward-thinking approach led to the development of patented technologies, including energy-efficient dehumidification systems that significantly reduce operational costs for industries.
                            <br /><br />
                            Under his leadership, Sangawar Pneumatics has successfully delivered solutions for some of India’s most prestigious organizations, including ISRO, BARC, and NPCIL. His commitment to quality, precision, and customer satisfaction has helped the company build a reputation as a trusted engineering partner in critical and high-performance environments.
                            Mr. Sangawar continues to guide the company with a vision to innovate, evolve, and contribute to the growth of modern industries through smart, sustainable, and performance-driven engineering solutions.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}