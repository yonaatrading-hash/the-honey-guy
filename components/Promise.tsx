"use client";

import { motion } from "framer-motion";

export default function Promise() {
  return (
    <section className="bg-amber-900 text-white py-28 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <p className="uppercase tracking-[0.35em] text-amber-300 text-sm">
          Our Promise
        </p>

        <h2 className="text-5xl font-bold mt-6 leading-tight">
          We Don't Chase Volume.
          <br />
          We Chase Trust.
        </h2>

        <p className="mt-10 text-xl leading-9 text-amber-100">
          Since <strong>2016</strong>, our goal has remained the same:
          bring authentic Ethiopian forest honey to people exactly as nature
          intended.
        </p>

        <p className="mt-8 text-lg leading-8 text-amber-100">
          No shortcuts.
          No compromises.
        </p>

        <p className="mt-8 text-lg leading-8 text-amber-100">
          Just honest honey, harvested with care and shared with pride.
        </p>

      </motion.div>
    </section>
  );
}