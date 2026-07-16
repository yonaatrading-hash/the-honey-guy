"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

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
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
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

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl bg-[#F8F5EE] p-8 shadow-sm transition-all duration-300 hover:shadow-2xl"
            >
              <motion.span
                className="text-amber-500 text-4xl font-bold block"
                whileHover={{
                  scale: 1.08,
                }}
              >
                {step.number}
              </motion.span>

              <h3 className="text-2xl font-semibold mt-6 text-amber-900 transition-colors duration-300 group-hover:text-[#A96A08]">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}