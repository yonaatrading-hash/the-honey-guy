"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

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
    <FadeIn>
      <section
        id="products"
        className="bg-[#F9F5EC] py-28 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-amber-700 text-sm">
              Our Collection
            </p>

            <h2 className="text-5xl font-bold text-amber-900 mt-5">
              Crafted By Nature
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Every jar is harvested with care and delivered with authenticity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {products.map((product) => (
              <div
                key={product.name}
                className="rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >

                <div className="relative h-80 bg-[#FFF8E8]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-[#4A3520]">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mt-3">
                    {product.size}
                  </p>

                  <p className="text-gray-600 mt-4 leading-7">
                    {product.description}
                  </p>

                  <button
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-8 px-6 py-3 rounded-full border border-amber-700 text-amber-800 hover:bg-amber-700 hover:text-white transition"
                  >
                    Contact to Order
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </FadeIn>
  );
}