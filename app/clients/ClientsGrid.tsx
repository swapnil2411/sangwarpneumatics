export default function ClientsGrid({ clients }: any) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 sec_pad clients_grid">
      {clients.map((client: any, index: number) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-xl text-center transition duration-300 hover:-translate-y-1 client_col"
        >
          {client?.image && (
              <img
                src={client.image}
                alt={client.name}
                className="mx-auto mb-4 h-30 w-100 object-contain"
              />
            )}
        </div>
      ))}
    </div>
  );
}