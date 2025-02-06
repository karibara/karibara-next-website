"use client";
// import Image from "next/image";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-comfortaa-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-start">
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
            className="text-3xl font-bold pb-4 "
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
          >
            I am a designer & a frontend developer.
          </motion.h2>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

// motion-translate-x-in-[-200%] motion-blur-in-[15px] motion-opacity-in-[0%] motion-duration-[2.25s] motion-duration-[3.00s]/opacity motion-ease-spring-smooth
// "motion-translate-x-in-[-200%] motion-blur-in-[10px] motion-duration-[3.5s] motion-opacity-in-[0%] motion-duration-[5.00s]/opacity motion-ease-spring-smooth"
// "motion-translate-x-in-[-200%] motion-blur-in-[5px] motion-duration-[4.5s] motion-opacity-in-[0%]  motion-ease-spring-smooth"
