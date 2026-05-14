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
              {product.category}
            </h2>
            <p>
              {
                product.longDescription
              }
            </p>

            {/* <ul className="">
          {product.items.map((item, index) => (
            <li
              key={index}
            >
              ✔ <span>{item}</span>
            </li>
          ))}
        </ul> */}


          </div>

        </section>

        <section className="products_grid">
          <div className="grid md:grid-cols-3 gap-6 ">
          {product.items.map((item) => (
            <div className="p-5 rounded-2xl hover:shadow-xl transition category_item" key={item.name}>
              <div className="category_item_img">
                <img src={item?.imgUrl && item?.imgUrl} className="mb-4" />
              </div>
              <div className="category_item_content">
                <h3 className="category_item_content_heading">
                  {item.name}
                </h3>
                <p className="category_item_content_description">
                  {item.description}
                </p>
                <h3 className="category_item_title">Features:</h3>
                <ul className="text-sm mb-4">
                  {item.features.slice(0, 3).map((f, i) => (
                    <li key={i}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" /></svg> {f}</li>
                  ))}
                </ul>
                <h3 className="category_item_title">Advantages:</h3>
                <ul className="text-sm mb-4">
                  {item.advantages.slice(0, 3).map((f, i) => (
                    <li key={i}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" /></svg> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        </section>
      </div>
    </>
  );
}