"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle =
    "relative text-[#4A3520] transition-colors duration-300 hover:text-[#C68A0A] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#D89B1D] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-full overflow-visible transition-all duration-700 ${
        scrolled
          ? "bg-white/18 backdrop-blur-[34px] border border-white/30 shadow-[0_25px_70px_rgba(0,0,0,0.18)] py-0"
          : "bg-transparent border-transparent shadow-none py-2"
      }`}
    >
      {/* Glass effects when scrolled */}
      {scrolled && (
        <>
          <div className="absolute top-0 left-0 h-px w-full bg-white/60" />

          <div className="absolute bottom-0 left-0 h-10 w-full bg-gradient-to-t from-white/5 to-transparent" />
        </>
      )}

      <div
        className={`relative flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-1" : "py-3"
        }`}
      >
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          transition={{ duration: 0.25 }}
        >
          <Image
            src="/images/logo.png"
            alt="The Honey Guy"
            width={scrolled ? 62 : 72}
            height={scrolled ? 62 : 72}
            priority
          />
        </motion.a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
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
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#4A3520]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Glass Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
          y: menuOpen ? 0 : -20,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={`md:hidden absolute top-full left-0 mt-3 w-full rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-visible flex flex-col items-center gap-6 py-8 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        <a
          href="#"
          onClick={closeMenu}
          className="text-lg font-semibold text-[#4A3520] hover:text-[#D89B1D] transition"
        >
          Home
        </a>

        <a
          href="#story"
          onClick={closeMenu}
          className="text-lg font-semibold text-[#4A3520] hover:text-[#D89B1D] transition"
        >
          Story
        </a>

        <a
          href="#products"
          onClick={closeMenu}
          className="text-lg font-semibold text-[#4A3520] hover:text-[#D89B1D] transition"
        >
          Collection
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
          className="text-lg font-semibold text-[#4A3520] hover:text-[#D89B1D] transition"
        >
          Contact
        </a>
      </motion.div>
    </motion.nav>
  );
}