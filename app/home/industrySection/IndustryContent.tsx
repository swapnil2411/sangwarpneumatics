import FeatureCard from "@/components/common/FeatureCard";
export default function IndustryContent(){
    const industriesData = [
  {
    id: 1,
    image: "/assets/pharma.png",
    title: "PHARMACEUTICAL",
    description: "Advanced solutions for controlled environments and clean processes",
  },
  {
    id: 2,
    image: "/assets/food-processing.png",
    title: "FOOD PROCESSING",
    description: "Efficient systems ensuring hygiene and moisture control",
  },
  {
    id: 3,
    image: "/assets/manufacturing.png",
    title: "MANUFACTURING",
    description: "Reliable engineering solutions for heavy-duty operations",
  },
  {
    id: 4,
    image: "/assets/nuclear-defense.png",
    title: "NUCLEAR & DEFENSE",
    description: "High-precision systems for critical and sensitive applications",
  },
];
    return(
        <div className="industry_content_wrapper sec_pad">
            {
                industriesData?.map((item, idx) => {
                    return(
                        <FeatureCard key={item?.id}>
                    <div className="industry_col">
                        <div className="industry_icon">
                            <img src={item?.image} alt={item?.image} />
                        </div>
                        <div className="industry_content">
                            <h3 className="industry_title">{item?.title}</h3>
                            <p className="industry_para">{item?.description}</p>
                        </div>
                    </div>
                </FeatureCard>
                    )
                })
            }
        </div>
    )
}