// app/products/[slug]/page.tsx

import { productCategories } from "@/data/products";
import Breadcrumb from "@/components/common/Breadcrumb";
import PageBanner from "@/components/common/PageBanner";
import '../../styles/products.css';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productCategories.find(
    (p) => p.slug === slug
  );

  if (!product) return <div>Not Found</div>;

  return (
    <>
      <PageBanner title={product.category} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.category },
        ]}
      />
      <div className="container">
        <section className="grid md:grid-cols-2 gap-10 sec_pad">
        <div className="">
          {/* Image */}
      <img
        src={product.image}
        className="w-full mt-6 rounded-xl"
      />
        </div>

      

      

      {/* Sub Products */}
      <div className="sub_products_wrapper">
        <h2 className="heading">
          Available Types:
        </h2>

        <ul className="">
          {product.items.map((item, index) => (
            <li
              key={index}
            >
              ✔ <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
        </div>
    </>
  );
}