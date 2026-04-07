import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import ClientsGrid from "./ClientsGrid";
import { clients } from "@/data/clients";

export default function ClientsPage() {
  return (
    <>
      <PageBanner title="Our Clients" />

        <div className="clients_wrapper">
            <div className="container">
            <SectionHeading
            title="Our Clients"
            subtitle="Clients"
          />

          <ClientsGrid clients={clients} />
            </div>
        </div>
    </>
  );
}