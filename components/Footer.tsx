"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function Footer() {
  return (
    <footer className="bg-[#2B2117] text-white py-20 px-6">

      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >

        {/* Logo */}
        <motion.a
          href="#"
          variants={fadeUp}
          className="inline-block"
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
        >
          <Image
            src="/images/logo.png"
            alt="The Honey Guy"
            width={110}
            height={110}
            className="mx-auto"
          />
        </motion.a>

        {/* Brand */}
        <motion.h2
          variants={fadeUp}
          className="mt-8 text-3xl font-bold tracking-wide"
        >
          THE HONEY GUY
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-2 text-amber-300 tracking-[0.25em] uppercase text-sm"
        >
          Authentic Ethiopian Forest Honey
        </motion.p>

        {/* Navigation */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-8 text-gray-300"
        >
          <a href="#" className="hover:text-amber-300 transition-colors duration-300">
            Home
          </a>

          <a href="#story" className="hover:text-amber-300 transition-colors duration-300">
            Story
          </a>

          <a href="#products" className="hover:text-amber-300 transition-colors duration-300">
            Collection
          </a>

          <a href="#contact" className="hover:text-amber-300 transition-colors duration-300">
            Contact
          </a>
        </motion.div>

        {/* Journey */}
        <motion.div
          variants={fadeUp}
          className="mt-12 space-y-2 text-gray-300 text-lg"
        >
          <p>A journey with honey.</p>
          <p>Born in Texas.</p>
          <p>Nurtured in New York.</p>
          <p>Flourishing in Gambella.</p>
        </motion.div>

        {/* Social */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex justify-center gap-10 flex-wrap"
        >

          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            href="https://wa.me/251972036179"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            href="https://www.instagram.com/thehoneyguy2016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300"
          >
            <FaInstagram />
            <span>Instagram</span>
          </motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.05 }}
            href="https://www.tiktok.com/@thehoneyguy2016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300"
          >
            <FaTiktok />
            <span>TikTok</span>
          </motion.a>

        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeUp}
          className="mt-14 border-t border-white/10 pt-8 text-gray-400 text-sm"
        >
          <p>© 2026 The Honey Guy. All Rights Reserved.</p>

          <p className="mt-2">
            Made with pride in Ethiopia.
          </p>
        </motion.div>

      </motion.div>

    </footer>
  );
}