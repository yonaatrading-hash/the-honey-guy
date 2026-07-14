import Image from "next/image";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2B2117] text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">

        {/* Logo */}
        <a href="#" className="inline-block">
          <Image
            src="/images/logo.png"
            alt="The Honey Guy"
            width={110}
            height={110}
            className="mx-auto hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Brand */}
        <h2 className="mt-8 text-3xl font-bold tracking-wide">
          THE HONEY GUY
        </h2>

        <p className="mt-2 text-amber-300 tracking-[0.25em] uppercase text-sm">
          Authentic Ethiopian Forest Honey
        </p>

        {/* Navigation */}
        <div className="mt-10 flex flex-wrap justify-center gap-8 text-gray-300">

          <a href="#" className="hover:text-amber-300 transition">
            Home
          </a>

          <a href="#story" className="hover:text-amber-300 transition">
            Story
          </a>

          <a href="#products" className="hover:text-amber-300 transition">
            Collection
          </a>

          <a href="#contact" className="hover:text-amber-300 transition">
            Contact
          </a>

        </div>

        {/* Slogan */}
        <div className="mt-12 space-y-2 text-gray-300 text-lg">

          <p>A journey with honey.</p>
          <p>Born in Texas.</p>
          <p>Nurtured in New York.</p>
          <p>Flourishing in Gambella.</p>

        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-10">

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/thehoneyguy2016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@thehoneyguy2016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition"
          >
            <FaTiktok />
            <span>TikTok</span>
          </a>

        </div>

        {/* Copyright */}
        <div className="mt-14 border-t border-white/10 pt-8 text-gray-400 text-sm">

          <p>© 2026 The Honey Guy. All Rights Reserved.</p>

          <p className="mt-2">
            Made with pride in Ethiopia.
          </p>

        </div>

      </div>

    </footer>
  );
}