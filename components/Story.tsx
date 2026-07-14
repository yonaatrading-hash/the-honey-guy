"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section
      id="story"
      className="bg-[#FFF8E8] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">

        {/* Image */}
        <motion.div
          className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/hero-forest.jpg"
            alt="Our Journey"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.35em] text-[#A96A08] text-sm font-semibold">
            OUR STORY
          </p>

          <h2 className="mt-6 text-5xl font-bold text-[#2B2117] leading-tight">
            A Journey
            <br />
            With Honey.
          </h2>

          <div className="mt-10 space-y-3">

            <p className="text-2xl font-semibold text-[#A96A08]">
              A journey with honey.
            </p>

            <p className="text-xl text-[#4A3520]">
              Born in Texas.
            </p>

            <p className="text-xl text-[#4A3520]">
              Nurtured in New York.
            </p>

            <p className="text-xl text-[#4A3520]">
              Flourishing in Gambella.
            </p>

          </div>

          <p className="mt-10 text-lg leading-8 text-gray-700">
            The Honey Guy exists for one reason:
            to bring people authentic Ethiopian forest honey exactly as nature intended.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Every jar comes directly from trusted harvesters and reaches you
            without unnecessary processing, preserving the natural flavor,
            aroma, and character that make Ethiopian forest honey so special.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            We believe trust is built through honesty, quality, and consistency.
            That belief is at the heart of everything we do.
          </p>

        </motion.div>

      </div>
    </section>
  );
}