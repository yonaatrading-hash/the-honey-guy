"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const cards = [
    {
      icon: <FaWhatsapp className="text-4xl text-amber-700 mb-6" />,
      title: "WhatsApp",
      text: "Start a conversation with us.",
      href: "https://wa.me/251972036179",
    },
    {
      icon: <FaInstagram className="text-4xl text-amber-700 mb-6" />,
      title: "Instagram",
      text: "Follow our latest harvests.",
      href: "https://www.instagram.com/thehoneyguy2016",
    },
    {
      icon: <FaTiktok className="text-4xl text-amber-700 mb-6" />,
      title: "TikTok",
      text: "Behind the scenes of The Honey Guy.",
      href: "https://www.tiktok.com/@thehoneyguy2016",
    },
  ];

  return (
    <section id="contact" className="bg-[#F8F5EE] py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-amber-200 bg-white p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              {card.icon}

              <h3 className="text-2xl font-bold text-amber-900">
                {card.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {card.text}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}