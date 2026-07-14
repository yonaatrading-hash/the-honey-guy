"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle =
    "text-[#4A3520] hover:text-[#A96A08] transition duration-300";

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-2xl z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/30 backdrop-blur-2xl border border-white/30 shadow-lg"
          : "bg-white/10 backdrop-blur-md border border-white/20"
      }`}
    >
      <div
        className={`flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-1" : "py-1.5"
        }`}
      >
        {/* Logo */}
        <a href="#">
          <Image
            src="/images/logo.png"
            alt="The Honey Guy"
            width={80}
            height={80}
            priority
            className="h-auto"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#" className={linkStyle}>
              Home
            </a>
          </li>

          <li>
            <a href="#story" className={linkStyle}>
              Story
            </a>
          </li>

          <li>
            <a href="#products" className={linkStyle}>
              Collection
            </a>
          </li>

          <li>
            <a href="#contact" className={linkStyle}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-[#4A3520]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-5 gap-5 font-medium">
          <a href="#" onClick={closeMenu} className={linkStyle}>
            Home
          </a>

          <a href="#story" onClick={closeMenu} className={linkStyle}>
            Story
          </a>

          <a href="#products" onClick={closeMenu} className={linkStyle}>
            Collection
          </a>

          <a href="#contact" onClick={closeMenu} className={linkStyle}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}