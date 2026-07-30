"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QRCode() {
  return (
    <section className="bg-[#FFF8E8] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] bg-white shadow-xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center"
        >

          <div>
            <p className="uppercase tracking-[0.35em] text-[#A96A08] text-sm font-semibold">
              QUICK ORDER
            </p>

            <h2 className="mt-6 text-5xl font-bold text-[#2B2117]">
              Scan & Order
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#5A4734]">
              Scan the QR code with your phone to instantly open our WhatsApp
              and place your order for authentic Ethiopian forest honey.
            </p>

            <a
              href="https://wa.me/251972036179"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 rounded-full bg-[#D89B1D] px-8 py-4 text-white font-semibold transition hover:bg-[#A96A08]"
            >
              Open WhatsApp
            </a>
          </div>

          <div className="flex justify-center">
            <div className="rounded-3xl bg-[#FFFDF8] p-6 shadow-lg">
              <Image
                src="/images/qr-code.png"
                alt="WhatsApp QR Code"
                width={260}
                height={260}
              />
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}