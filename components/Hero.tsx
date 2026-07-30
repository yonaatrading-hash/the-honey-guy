"use client";

import { motion } from "framer-motion";
import HoneycombPattern from "@/components/HoneycombPattern";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F7E8C8] px-6 pt-24 md:pt-28 pb-12">

      {/* Honeycomb Pattern */}
      <HoneycombPattern />

      {/* Premium Honey Light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7C948]/20 blur-[180px]"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-[20%] left-[12%] h-[450px] w-[450px] rounded-full bg-[#FFD86B]/15 blur-[160px]"
          animate={{
            scale: [1, 1.12, 1],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[15%] right-[10%] h-[380px] w-[380px] rounded-full bg-[#FFE8A3]/20 blur-[140px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      {/* Golden Sunlight Sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ x: "-180%" }}
        animate={{ x: "180%" }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      >
        <div
          className="
            absolute
            top-[-30%]
            left-0
            h-[180%]
            w-72
            rotate-[22deg]
            bg-gradient-to-r
            from-transparent
            via-[#FFD86B]/35
            to-transparent
            blur-[80px]
          "
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
      >

        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.35em] text-[#A96A08] text-sm font-semibold"
        >
          Authentic Ethiopian Forest Honey
        </motion.p>

        <motion.h1
          variants={{
            hidden: {
              opacity: 0,
              y: 25,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-[#2B2117]"
        >
          Pure Honey.
          <br />
          Untouched Nature.
        </motion.h1>

        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-xl text-[#5A4734] max-w-2xl mx-auto leading-8"
        >
          Harvested from traditional forest hives in Ethiopia and delivered
          with authenticity, care, and respect for nature.
        </motion.p>

        <motion.button
          whileHover={{
            y: -4,
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{ duration: 0.25 }}
          onClick={() => {
            document
              .getElementById("story")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
          className="group relative mt-12 overflow-hidden rounded-full bg-[#D89B1D] px-10 py-4 text-lg font-semibold text-white shadow-[0_10px_40px_rgba(216,155,29,0.35)] transition-all duration-300 hover:bg-[#C8890D] hover:shadow-[0_15px_50px_rgba(216,155,29,0.5)]"
        >
          <span className="relative z-10">
            Begin the Journey
          </span>

          <span
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
        </motion.button>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A96A08] text-3xl opacity-70"
      >
        ↓
      </motion.div>

    </section>
  );
}