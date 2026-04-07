"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { productCategories } from "@/data/products";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProductContent() {
  const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 1 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
  return (
    <div className="products_wrapper">
      <div className="container">
        
        <SectionHeading title="Our Products" subtitle="Products" />

        <motion.div className="products_content_wrapper sec_pad" variants={containerVariants}>
          {productCategories.map((product, idx) => (
            <motion.div className="product_col block cursor-pointer" variants={cardVariants} initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1, // 🔥 THIS creates one-by-one effect
      }}
      viewport={{ once: true, amount: 0.3 }}
      key={idx}>
              <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              
            >
              {/* Image */}
              <figure className="image_wrapper">
                <img src={product.image} alt={product.category} />
              </figure>

              {/* Title */}
              <h3 className="category_heading">
                {product.category}
              </h3>
            </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}