"use client";

import { Menu } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface TopbarProps {
  openSidebar: () => void;
}

export default function Topbar({
  openSidebar,
}: TopbarProps) {
  const handleLogout = async () => {
    await signOut(auth);

    window.location.href =
      "/admin/login";
  };

  return (
    <header className="topbar">
      <button
        className="menu-btn"
        onClick={openSidebar}
      >
        <Menu size={24} />
      </button>

      <div className="topbar-right">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}