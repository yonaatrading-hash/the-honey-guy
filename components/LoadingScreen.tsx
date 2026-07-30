"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("honey-loader");

    if (!hasSeenLoader) {
      setLoading(true);

      sessionStorage.setItem("honey-loader", "true");

      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#F7E8C8]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow */}

          <motion.div
            className="absolute h-[700px] w-[700px] rounded-full bg-[#FFD86B]/20 blur-[180px]"
            animate={{
              scale: [0.95, 1.08, 1],
              opacity: [0.5, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Sunlight Sweep */}

          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ x: "-140%" }}
            animate={{ x: "140%" }}
            transition={{
              duration: 2.8,
              ease: "linear",
            }}
          >
            <div
              className="
                absolute
                top-[-20%]
                h-[170%]
                w-40
                rotate-[25deg]
                bg-gradient-to-r
                from-transparent
                via-[#FFE18D]/25
                to-transparent
                blur-3xl
              "
            />
          </motion.div>

          {/* Logo */}

          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <Image
                src="/images/logo.png"
                alt="The Honey Guy"
                width={170}
                height={170}
                priority
              />
            </motion.div>

            <motion.h1
              className="mt-8 text-3xl font-bold tracking-[0.35em] text-[#2B2117]"
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
            >
              THE HONEY GUY
            </motion.h1>

            <motion.p
              className="mt-3 uppercase tracking-[0.25em] text-[#A96A08] text-sm"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              Authentic Ethiopian Forest Honey
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}