"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

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
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <Image
              src="/images/hero-forest.jpg"
              alt="Our Journey"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.35em] text-[#A96A08] text-sm font-semibold"
          >
            OUR STORY
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 text-5xl font-bold text-[#2B2117] leading-tight"
          >
            A Journey
            <br />
            With Honey.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 space-y-3"
          >
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
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-10 text-lg leading-8 text-gray-700"
          >
            The Honey Guy exists for one reason:
            to bring people authentic Ethiopian forest honey exactly as nature intended.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            Every jar comes directly from trusted harvesters and reaches you
            without unnecessary processing, preserving the natural flavor,
            aroma, and character that make Ethiopian forest honey so special.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mt-6 text-lg leading-8 text-gray-700"
          >
            We believe trust is built through honesty, quality, and consistency.
            That belief is at the heart of everything we do.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}