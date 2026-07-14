"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F7E8C8] px-6 pt-28 pb-12">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/30 blur-[160px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >

        <p className="uppercase tracking-[0.45em] text-[#A96A08] text-sm font-semibold">
          Authentic Ethiopian Forest Honey
        </p>

        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-[#2B2117]">
          Pure Honey.
          <br />
          Untouched Nature.
        </h1>

        <p className="mt-8 text-xl text-[#5A4734] max-w-2xl mx-auto leading-8">
          Harvested from traditional forest hives in Ethiopia and delivered
          with authenticity, care, and respect for nature.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("story")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-12 rounded-full bg-[#D89B1D] px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#A96A08] hover:shadow-2xl"
        >
          Begin the Journey
        </button>

      </motion.div>

    </section>
  );
}