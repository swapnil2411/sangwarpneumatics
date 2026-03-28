"use client"
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="header_wrapper">
                    <div className="logo_wrapper">
                        <img src='/assets/sangawar-logo.png' alt="Sangawar Pneumatics" className="logo" />
                    </div>
                    <div className={`menu_wrapper ${isOpen ? "menu_open" : ""}`}>
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Products</li>
                                <li>Projects</li>
                                <li>Clients</li>
                                <li>Contact Us</li>
                            </ul>
                        </nav>
                    </div>
                    <div className={`header_repsonsice_icons ${isOpen ? "close_menu" : "open_menu"}`}>
                        <button className="hamburger" onClick={() => setIsOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/>
                            </svg>
                        </button>
                        <button className="close" onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="2" d="M16.95 7.05L12 12m0 0l-4.95 4.95M12 12l4.95 4.95M12 12L7.05 7.05"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}