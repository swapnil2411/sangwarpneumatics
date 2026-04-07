"use client";
import { motion } from "framer-motion";
import { productCategories } from "@/data/products";
import FeatureCard from "@/components/common/FeatureCard";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProductContent(){
    const router = useRouter();
    const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};
    return(
        <motion.div className="products_content_wrapper sec_pad" variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}>
                    {
                        productCategories?.map((item, idx) => {
                            return (
                                <motion.div className="product_col" variants={cardVariants} key={item?.slug}>
                                    <Link 
                                        href={`/products/${item?.slug}`}
                                    >
                                        <img src={item?.image} alt={item?.image} />
                                        <h3 className="category_heading">{item?.category}</h3>
                                    </Link>
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
    )
}