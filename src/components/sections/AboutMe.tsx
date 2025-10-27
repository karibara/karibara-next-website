"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export const AboutMe: React.FC = () => {
  // scroll to contact section
  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative max-w-[654px] mx-auto">
      {/* HASH PATTERN */}
      <motion.div
        initial={{ scale: 1.5, opacity: 0, filter: "blur(15px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 60,
          duration: 10,
          delay: 3,
        }}
        viewport={{ once: true }}
      >
        <Image
          src="/hash-pattern.svg"
          alt="hash pattern"
          width={360}
          height={360}
          className="absolute -top-20 -right-[35%] -z-10 overflow-hidden"
        />
      </motion.div>

      {/* WAVE PATTERN */}
      <motion.div
        initial={{ scale: 1.5, opacity: 0, filter: "blur(15px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 60,
          duration: 10,
          delay: 2,
        }}
        viewport={{ once: true }}
      >
        <Image
          src="/waves.svg"
          alt="waves pattern"
          width={156}
          height={58}
          className="absolute -top-12 lg:top-0 scale-75 lg:scale-100 -left-14 -z-10 "
        />
      </motion.div>

      <motion.div
        initial={{ scale: 1, opacity: 0, filter: "blur(15px)" }}
        whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 60,
          duration: 8,
          delay: 5,
        }}
        viewport={{ once: true }}
      >
        <div className=" grid grid-cols-2 items-center relative">
          {/* IMAGE - mobile */}
          <div className="order-1 md:order-2 relative flex  justify-end overflow-visible">
            <div className="relative w-64 h-72 md:w-[380px] md:h-[420px] overflow-visible">
              <Image
                src="/profile-photo-no-bg.png"
                alt="profile photo"
                fill
                className="object-contain -scale-x-[1.25] scale-y-[1.25] md:-scale-x-[1.5] md:scale-y-[1.5] -translate-y-10 lg:translate-x-16    z-10 pointer-events-none select-none"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="order-2 md:order-1 relative z-20  p-6 md:pl-10  md:-mr-10">
            <h3 className="text-lg lg:text-xl font-bold mb-3">About me</h3>
            <p className="text-sm lg:text-base">
              I code, design, and sometimes even translate computers into human
              language. I specialize in frontend development, with React as my
              daily companion.
            </p>
            <Button
              onClick={handleScrollToContact}
              className="mt-6 w-full md:w-auto"
            >
              contact me
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
