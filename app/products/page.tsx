"use client";

import SectionHeading from "@/components/common/SectionHeading";
import PageBanner from "@/components/common/PageBanner";
import ProductContent from "./productsContent";

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="Products" />

      <ProductContent />
    </>
  );
}