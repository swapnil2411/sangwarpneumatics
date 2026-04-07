"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      setIsScrolled(scrollY > 100);
    };

    handleScroll(); // 👈 run once on load

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isScrolled ? "header_scrolled" : ""}>
      <div className="container">
        <div className="header_wrapper">

          {/* Logo */}
          <div className="logo_wrapper">
            <Link href="/">
              <img
                src="/assets/sangawar-logo.png"
                alt="Sangawar Pneumatics"
                className="logo"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className={`menu_wrapper ${isOpen ? "menu_open" : ""}`}>
            <nav>
              <ul>
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? "active" : ""}
                    onClick={handleClose}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className={pathname === "/about" ? "active" : ""}
                    onClick={handleClose}
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/products"
                    className={pathname === "/products" ? "active" : ""}
                    onClick={handleClose}
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    href="/projects"
                    className={pathname === "/projects" ? "active" : ""}
                    onClick={handleClose}
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link
                    href="/clients"
                    className={pathname === "/clients" ? "active" : ""}
                    onClick={handleClose}
                  >
                    Clients
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className={pathname === "/contact" ? "active" : ""}
                    onClick={handleClose}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Hamburger */}
          <div className={`header_repsonsice_icons ${isOpen ? "close_menu" : "open_menu"}`}>
            <button className="hamburger" onClick={() => setIsOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
              </svg>
            </button>

            <button className="close" onClick={() => setIsOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.95 7.05L12 12m0 0l-4.95 4.95M12 12l4.95 4.95M12 12L7.05 7.05" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}