"use client";

import { motion } from "framer-motion";

export default function Timeline() {
  const steps = [
    {
      number: "01",
      title: "The Forest",
      text: "Our honey begins deep in Ethiopia's untouched forests where bees forage naturally among diverse wildflowers.",
    },
    {
      number: "02",
      title: "Harvest",
      text: "Local beekeepers carefully harvest each comb using traditional methods that respect both the bees and nature.",
    },
    {
      number: "03",
      title: "Pure Honey",
      text: "The honey is filtered with care, preserving its natural flavor, aroma, and nutrients without unnecessary processing.",
    },
    {
      number: "04",
      title: "To Your Table",
      text: "Every jar is delivered with the same commitment to authenticity—from the land of origin to your doorstep.",
    },
  ];

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.35em] text-amber-700 text-sm">
            Our Journey
          </p>

          <h2 className="text-5xl font-bold text-amber-900 mt-4">
            Every Jar Has A Story
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            From Ethiopia's forests to your home, every step is guided by
            quality, authenticity and respect for nature.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-3xl bg-[#F8F5EE] p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <span className="text-amber-500 text-4xl font-bold">
                {step.number}
              </span>

              <h3 className="text-2xl font-semibold mt-6 text-amber-900">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}