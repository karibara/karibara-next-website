"use client";

import { motion } from "framer-motion";

export const WelcomeSection: React.FC = () => {
  return (
    <div className="flex gap-1  flex-col text-mintKari">
      <motion.h1
        initial={{ x: -500, opacity: 0, filter: "blur(15px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80, // kontroluje "sztywność" sprężyny
          damping: 60, // kontroluje "dochamowanie" pod koniec
          duration: 6, // opcjonalnie, dla większej kontroli
        }}
        className="text-3xl lg:text-5xl font-bold pb-4 "
      >
        Hi, I&apos;m Małgorzata.
      </motion.h1>

      <motion.h2
        initial={{ x: -300, opacity: 0, filter: "blur(15px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 60,
          duration: 8,
          delay: 1,
        }}
        className="lg:text-2xl"
      >
        Nice to meet you.
      </motion.h2>
      <motion.h2
        initial={{ x: -300, opacity: 0, filter: "blur(15px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 65,
          duration: 12,
          delay: 2,
        }}
        className="lg:text-2xl"
      >
        I am a designer & a frontend developer.
      </motion.h2>
    </div>
  );
};
