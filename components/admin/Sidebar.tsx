"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

export default function Sidebar({
  isOpen,
  closeSidebar,
}: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={`sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="sidebar-header">
          <h2>Sangawar CMS</h2>

          <button
            className="close-btn"
            onClick={closeSidebar}
          >
            <X size={22} />
          </button>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/admin/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/admin/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}