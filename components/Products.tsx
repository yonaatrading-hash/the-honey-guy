"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Products() {
  const products = [
    {
      name: "Raw Ethiopian Forest Honey",
      size: "1 kg",
      description:
        "Harvested from traditional forest hives in Ethiopia. Pure, raw, and unprocessed.",
      image: "/images/honey-jar.jpg",
    },
    {
      name: "Beeswax Candles",
      size: "Handcrafted",
      description:
        "Made from pure beeswax for a clean, natural burn and a subtle honey aroma.",
      image: "/images/beeswax-candles.jpg",
    },
  ];

  return (
    <section
      id="products"
      className="bg-[#F9F5EC] py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.35em] text-amber-700 text-sm">
            Our Collection
          </p>

          <h2 className="text-5xl font-bold text-amber-900 mt-5">
            Crafted By Nature
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Every jar is harvested with care and delivered with authenticity.
          </p>
        </motion.div>


        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >

              <div className="relative h-80 bg-[#FFF8E8] overflow-hidden">

                <motion.div
                  className="h-full w-full"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6"
                  />
                </motion.div>

              </div>


              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#4A3520] group-hover:text-[#A96A08] transition-colors duration-300">
                  {product.name}
                </h3>

                <p className="text-gray-600 mt-3">
                  {product.size}
                </p>

                <p className="text-gray-600 mt-4 leading-7">
                  {product.description}
                </p>


                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => {
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-8 px-6 py-3 rounded-full border border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white transition-all duration-300"
                >
                  Contact to Order
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}