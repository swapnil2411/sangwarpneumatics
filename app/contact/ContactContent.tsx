import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SectionHeading from "@/components/common/SectionHeading";
export default function ContactContent() {
    return (
        <div className="contact_us_wrapper">
            <div className="container">
                <SectionHeading title="Contact Us" subtitle="Get in Touch" />
            <div className="contact_content sec_pad grid md:grid-cols-2 gap-8">
                <ContactInfo />
                <ContactForm />
            </div>
            </div>
        </div>
        
    )
}