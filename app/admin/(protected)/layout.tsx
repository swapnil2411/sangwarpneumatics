"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import AdminProvider from "@/components/providers/AdminProvider";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

import "../../styles/admin.css";

function ProtectedContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="admin-loader">
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="admin-layout">

      <Sidebar
        isOpen={sidebarOpen}
        closeSidebar={() =>
          setSidebarOpen(false)
        }
      />

      <div className="admin-main">

        <Topbar
          openSidebar={() =>
            setSidebarOpen(true)
          }
        />

        <main className="admin-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      <ProtectedContent>
        {children}
      </ProtectedContent>
    </AdminProvider>
  );
}