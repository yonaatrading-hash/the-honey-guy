"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F7E8C8] px-6 pt-24 md:pt-28 pb-12">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] md:h-[700px] md:w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/30 blur-[140px] md:blur-[160px]" />
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
        <p className="uppercase tracking-[0.3em] md:tracking-[0.45em] text-[#A96A08] text-xs md:text-sm font-semibold">
          Authentic Ethiopian Forest Honey
        </p>

        <h1 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] text-[#2B2117]">
          Pure Honey.
          <br />
          Untouched Nature.
        </h1>

        <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#5A4734] max-w-2xl mx-auto leading-8">
          Harvested from traditional forest hives in Ethiopia and delivered
          with authenticity, care, and respect for nature.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("story")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-10 md:mt-12 rounded-full bg-[#D89B1D] px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#A96A08] hover:shadow-2xl"
        >
          Begin the Journey
        </button>
      </motion.div>

    </section>
  );
}