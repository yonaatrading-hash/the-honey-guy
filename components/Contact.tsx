"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  const cards = [
    {
      icon: <FaWhatsapp className="text-4xl text-amber-700" />,
      title: "WhatsApp",
      text: "Start a conversation with us.",
      href: "https://wa.me/251972036179",
    },
    {
      icon: <FaInstagram className="text-4xl text-amber-700" />,
      title: "Instagram",
      text: "Follow our latest harvests.",
      href: "https://www.instagram.com/thehoneyguy2016",
    },
    {
      icon: <FaTiktok className="text-4xl text-amber-700" />,
      title: "TikTok",
      text: "Behind the scenes of The Honey Guy.",
      href: "https://www.tiktok.com/@thehoneyguy2016",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#F8F5EE] py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.35em] text-amber-700 text-sm">
            Contact
          </p>

          <h2 className="text-5xl font-bold text-amber-900 mt-5">
            Let's Stay Connected
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Whether you'd like to place an order or simply learn more about our
            honey, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
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
              whileTap={{
                scale: 0.98,
              }}
              className="group rounded-3xl border border-amber-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{
                  rotate: 6,
                  scale: 1.12,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mb-6 inline-block"
              >
                {card.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-amber-900 transition-colors duration-300 group-hover:text-[#A96A08]">
                {card.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {card.text}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}