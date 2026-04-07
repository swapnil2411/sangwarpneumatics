"use client";
import { productCategories } from "@/data/products";
import FeatureCard from "@/components/common/FeatureCard";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductContent(){
    const router = useRouter();
    return(
        <div className="products_content_wrapper sec_pad">
                    {
                        productCategories?.map((item, idx) => {
                            return (
                                <FeatureCard key={item?.slug}>
                                    <Link className="product_col"
                                        href={`/products/${item?.slug}`}
                                    >
                                        <img src={item?.image} alt={item?.image} />
                                        <h3 className="category_heading">{item?.category}</h3>
                                    </Link>
                                </FeatureCard>
                            )
                        })
                    }
                </div>
    )
}