import PageBanner from "@/components/common/PageBanner";
import ContactContent from "./ContactContent";
import '../styles/contactus.css';

export default function ContactUs() {
    return (
        <div className="contact_page">
            <PageBanner title="Contact Us" />
            <ContactContent />
        </div>
    )
}