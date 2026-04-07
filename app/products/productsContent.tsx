"use client";

import Link from "next/link";
import { productCategories } from "@/data/products";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProductContent() {
  return (
    <div className="products_wrapper">
      <div className="container">
        
        <SectionHeading title="Our Products" subtitle="Products" />

        <div className="products_content_wrapper sec_pad">
          {productCategories.map((product) => (
            
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="product_col block cursor-pointer"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.category}
              />

              {/* Title */}
              <h3 className="category_heading">
                {product.category}
              </h3>
            </Link>

          ))}
        </div>

      </div>
    </div>
  );
}