"use client";

import { motion } from "framer-motion";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald-sans",
  subsets: ["latin"],
});

export const WelcomeSection: React.FC = () => {
  return (
    <div className=" text-blackKari w-full max-w-[654px] p-6 md:p-10">
      <motion.h1
        initial={{ x: -10, opacity: 0, filter: "blur(15px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80, // kontroluje "sztywność" sprężyny
          damping: 60, // kontroluje "dochamowanie" pod koniec
          duration: 6, // opcjonalnie, dla większej kontroli
        }}
        className={`${oswald.variable} text-3xl lg:text-5xl  pb-4 font-Oswald border-b-4 border-blueKari text-blueKari`}
      >
        Hi, I&apos;m Małgorzata.
      </motion.h1>

      <motion.h2
        initial={{ x: -20, opacity: 0, filter: "blur(15px)" }}
        animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 60,
          duration: 8,
          delay: 1,
        }}
        className="lg:text-2xl mt-6"
      >
        Frontend Developer & Designer.
      </motion.h2>
      <motion.h2
        initial={{ x: -30, opacity: 0, filter: "blur(15px)" }}
        // whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
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
        Nice to meet you.
      </motion.h2>
    </div>
  );
};
