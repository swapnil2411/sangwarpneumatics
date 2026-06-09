"use client";

import { AuthProvider } from "@/context/AuthContext";

export default function AdminProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}