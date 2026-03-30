import FeatureCard from "@/components/common/FeatureCard"

export default function ProductContent(){
    const productsData = [
        {
            id: 1,
            productImg: "/assets/air-dryers.png",
            productTitle: "Air Dryers"
        },
        {
            id: 2,
            productImg: "/assets/dehumidifers.png",
            productTitle: "Dehumidifiers"
        },
        {
            id: 3,
            productImg: "/assets/hydrulic-systems.png",
            productTitle: "Hydraulic Systems"
        },
        {
            id: 4,
            productImg: "/assets/filteration-systems.png",
            productTitle: "Filtration Systems"
        },
        {
            id: 5,
            productImg: "/assets/pressure-regulators.png",
            productTitle: "Pressure Regulators"
        },
        {
            id: 6,
            productImg: "/assets/crane-accessories.png",
            productTitle: "Crane & Accessories"
        }
    ]
    return(
        <div className="products_content_wrapper sec_pad">
                    {
                        productsData?.map((item, idx) => {
                            return (
                                <FeatureCard key={item?.id}>
                                    <div className="product_col">
                                        <img src={item?.productImg} alt={item?.productImg} />
                                        <h3 className="category_heading">{item?.productTitle}</h3>
                                    </div>
                                </FeatureCard>
                            )
                        })
                    }
                </div>
    )
}