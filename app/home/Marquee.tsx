export default function Marquee(){
    const items = [
  { label: 'Pneumatics' },
  { label: 'Hydraulics' },
  { label: 'Dehumidification' },
  { label: 'Filtration Systems' },
  { label: 'Automation' },
  { label: 'Material Handling' },
  { label: 'Air Treatment' },
];

const Separator = () => (
  <span className="marquee-separator">
    <img src="/assets/star.png" alt="star" />
  </span>
);

 const doubled = [...items, ...items];
    return(
        <div className="marquee-section">
      <div className="marquee-track">
        {doubled?.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-text">{item?.label}</span>
            <Separator />
          </div>
        ))}
      </div>
    </div>
    )
}