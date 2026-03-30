import Button from "@/components/common/Button";

export default function Cta(){
    return(
        <div className="cta_wrapper">
            <img src="/assets/cta.png" alt="cta" />
            <div className="cta_content">
                <h3 className="cta_heading">Need Industrial Solutions? Let’s Talk</h3>
                <Button btnVariant="fill_btn">Contact Us</Button>
            </div>
        </div>
    )
}