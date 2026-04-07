import Link from "next/link";

type Props = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="text-sm text-gray-500 mb-6 breadcrumb_wrapper">
      <div className="container">
          {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-[#339DFF]">
              {item.label}
            </Link>
          ) : (
            <span className="current_page">
              {item.label}
            </span>
          )}

          {index !== items.length - 1 && (
            <span className="seperator">/</span>
          )}
        </span>
      ))}
      </div>
    </nav>
  );
}