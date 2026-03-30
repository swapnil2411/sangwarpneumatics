import SectionHeading from "@/components/common/SectionHeading"
import ProductContent from "./ProductContent"

export default function ProductSection() {
    return (
        <div className="products_wrapper">
            <div className="container">
                <SectionHeading title="Products" subtitle="Products" />
                <ProductContent />
            </div>
        </div>
    )
}