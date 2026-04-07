"use client";

import { motion } from "framer-motion";

export default function ClientsGrid({ clients }: any) {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 sec_pad clients_grid">

      {clients.map((client: any, index: number) => (
        
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: (index % 4) * 0.2,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white border border-gray-300 rounded-xl text-center client_col"
        >
          {client?.image && (
            <img
              src={client.image}
              alt={client.name}
              className="mx-auto mb-4 h-30 w-100 object-contain"
            />
          )}
        </motion.div>

      ))}

    </div>
  );
}